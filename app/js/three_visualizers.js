/**
 * STUDY OS - 3D INTERACTIVE VISUALIZATION ENGINE
 * Three.js 3D Visualizers for:
 * - Base de Datos 1 (DER, Algebra Cube, Normalization Tower, Oracle SGA)
 * - Inteligencia Artificial (Neural Network Flow, A* State Graph, PEAS Radar Agent)
 * - Ingeniería de Software (Boehm Spiral, Layered Architecture, CI/CD Pipeline)
 */

(function() {
  let scene, camera, renderer, controls, raycaster, mouse;
  let animationFrameId = null;
  let activeSubject = 'bd';
  let activeModelKey = 'bd_der';
  let interactiveObjects = [];
  let animatedNodes = [];
  let pulseParticles = [];
  let autoRotate = true;

  // Global controller exposed on window
  window.StudyVisualizer = {
    init: initScene,
    loadModel: loadModel,
    setSubject: setSubject,
    toggleAutoRotate: toggleAutoRotate,
    resetCamera: resetCamera,
    resize: resizeToContainer,
    getActiveModelKey: () => activeModelKey
  };

  function resizeToContainer() {
    const canvas = document.getElementById('threeCanvas3D');
    if (!canvas || !renderer || !camera) return;
    const container = canvas.parentElement;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 650;

    if (width > 0 && height > 0) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, true);
      if (controls) {
        controls.update();
      }
    }
  }

  function initScene(canvasId, infoPanelId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const container = canvas.parentElement;
    const width = (container && container.clientWidth > 0) ? container.clientWidth : 1200;
    const height = (container && container.clientHeight > 0) ? container.clientHeight : 650;

    // 1. Renderer
    if (renderer) {
      renderer.dispose();
    }
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, true);
    renderer.shadowMap.enabled = true;

    // 2. Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1d, 0.012);

    // 3. Camera
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 15, 50);

    // 4. Controls
    if (typeof THREE.OrbitControls !== 'undefined') {
      controls = new THREE.OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxDistance = 140;
      controls.minDistance = 10;
      controls.target.set(0, 0, 0);
    }

    // 5. Raycaster
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Event listeners
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('click', onClick);
    window.addEventListener('resize', resizeToContainer);

    // ResizeObserver for container
    if (window.ResizeObserver && container) {
      const ro = new ResizeObserver(() => {
        resizeToContainer();
      });
      ro.observe(container);
    }

    // Lights
    setupLights();

    // Start render loop
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animate();

    // Load initial model
    loadModel(activeModelKey);
    setTimeout(resizeToContainer, 100);
  }

  function setupLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight1.position.set(25, 45, 25);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 0.8);
    dirLight2.position.set(-25, -20, -25);
    scene.add(dirLight2);

    // Subtle floor grid
    const grid = new THREE.GridHelper(100, 40, 0x1e293b, 0x0f172a);
    grid.position.y = -12;
    scene.add(grid);
  }

  function setSubject(subId) {
    activeSubject = subId;
    // Default model per subject
    if (subId === 'bd') activeModelKey = 'bd_der';
    else if (subId === 'ing') activeModelKey = 'ing_espiral';
    else if (subId === 'ia') activeModelKey = 'ia_neural';
    loadModel(activeModelKey);
  }

  function toggleAutoRotate(btn) {
    autoRotate = !autoRotate;
    if (btn) {
      btn.innerText = autoRotate ? '⏸️ Pausar Giro' : '▶️ Girar 360°';
    }
  }

  function resetCamera() {
    if (!camera || !controls) return;
    loadModel(activeModelKey);
  }

  function clearScene() {
    interactiveObjects = [];
    animatedNodes = [];
    pulseParticles = [];

    // Remove children except lights and grid
    const toRemove = [];
    scene.children.forEach(child => {
      if (child.type !== 'AmbientLight' && child.type !== 'DirectionalLight' && child.type !== 'GridHelper') {
        toRemove.push(child);
      }
    });
    toRemove.forEach(c => scene.remove(c));
  }

  function loadModel(modelKey) {
    activeModelKey = modelKey;
    clearScene();

    // Update UI title and description if elements exist
    updateModelInfo(modelKey);

    switch(modelKey) {
      // BASE DE DATOS
      case 'bd_der':
        buildDerModel();
        break;
      case 'bd_algebra':
        buildAlgebraCube();
        break;
      case 'bd_torre':
        buildNormalizationTower();
        break;
      case 'bd_oracle':
        buildOracleInstance();
        break;

      // INTELIGENCIA ARTIFICIAL
      case 'ia_neural':
        buildNeuralNetwork();
        break;
      case 'ia_search':
        buildSearchGraph();
        break;
      case 'ia_peas':
        buildPeasAgent();
        break;

      // INGENIERÍA DE SOFTWARE
      case 'ing_espiral':
        buildBoehmSpiral();
        break;
      case 'ing_arquitectura':
        buildLayeredArchitecture();
        break;
      case 'ing_pipeline':
        buildCicdPipeline();
        break;

      default:
        buildDerModel();
    }

    // Optimal camera focus per model
    if (camera && controls) {
      if (modelKey === 'bd_der') {
        camera.position.set(0, 4, 50);
        controls.target.set(0, 0, 0);
      } else if (modelKey === 'bd_algebra') {
        camera.position.set(16, 18, 30);
        controls.target.set(0, 10, 0);
      } else if (modelKey === 'bd_torre') {
        camera.position.set(0, 15, 45);
        controls.target.set(0, 6, 0);
      } else if (modelKey === 'bd_oracle') {
        camera.position.set(0, 26, 52);
        controls.target.set(0, 2, 0);
      } else if (modelKey === 'ia_neural') {
        camera.position.set(0, 4, 44);
        controls.target.set(0, 4, 0);
      } else if (modelKey === 'ia_search') {
        camera.position.set(0, 10, 48);
        controls.target.set(0, 8, 0);
      } else if (modelKey === 'ia_peas') {
        camera.position.set(0, 12, 46);
        controls.target.set(0, 0, 0);
      } else if (modelKey === 'ing_espiral') {
        camera.position.set(0, 14, 50);
        controls.target.set(0, 2, 0);
      } else if (modelKey === 'ing_arquitectura') {
        camera.position.set(0, 12, 48);
        controls.target.set(0, 2, 0);
      } else if (modelKey === 'ing_pipeline') {
        camera.position.set(0, 8, 48);
        controls.target.set(0, 0, 0);
      } else {
        camera.position.set(0, 15, 50);
        controls.target.set(0, 0, 0);
      }
      controls.update();
    }
    resizeToContainer();
  }

  function updateModelInfo(key) {
    const titleEl = document.getElementById('modelTitle3D');
    const descEl = document.getElementById('modelDesc3D');
    const badgeEl = document.getElementById('modelBadge3D');

    const infoMap = {
      // BD
      'bd_der': { title: 'DER 3D: Caso "¿Quién quiere ser millonario?"', badge: 'Base de Datos • TP2', desc: 'Explora la jerarquía de personas (Participantes vs Redactores con especialización solapada), la relación reflexiva sobre Temas (anillo orbital) y la tabla intermedia de cuestionarios.' },
      'bd_algebra': { title: 'Cubo Volumétrico de Álgebra Relacional', badge: 'Base de Datos • Operadores', desc: 'Cubo tridimensional de tuplas y atributos con planos interactivos para Selección horizontal (σ), Proyección vertical (π) y Producto Cartesiano (×).' },
      'bd_torre': { title: 'Torre 3D de Normalización Formal', badge: 'Base de Datos • 1FN a BCNF', desc: 'Plataformas ascendentes que ilustran el proceso de purificación: eliminación de grupos repetitivos (1FN), dependencias parciales (2FN), transitivas (3FN) y superclaves en Boyce-Codd (BCNF).' },
      'bd_oracle': { title: 'Instancia Oracle 3D (SGA y Procesos)', badge: 'Base de Datos • Arquitectura DBMS', desc: 'Núcleo central de memoria compartida SGA con los procesos de fondo DBWn, LGWR, CKPT, SMON y PMON orbitando en tiempo real con sus órbitas y buffers.' },

      // IA
      'ia_neural': { title: 'Red Neuronal Multicapa & Flujo Sináptico 3D', badge: 'Inteligencia Artificial • Deep Learning', desc: 'Estructura de perceptrón multicapa con neuronas bioluminiscentes y pulsos de datos que fluyen entre capas emulando funciones de activación y propagación hacia adelante.' },
      'ia_search': { title: 'Grafo de Búsqueda Espacial & Algoritmo A*', badge: 'Inteligencia Artificial • Heurísticas', desc: 'Grafo tridimensional de estados (caso Aerolínea TP2). Observa los valores calculados f(n) = g(n) + h(n), la frontera abierta, nodos cerrados y el camino óptimo verde neón.' },
      'ia_peas': { title: 'Agente Racional Autónomo & Radar PEAS 3D', badge: 'Inteligencia Artificial • Agentes', desc: 'Dron/Rover inteligente en entorno tridimensional con cono de escaneo de radar activo en 360°, detectando anomalías, falsas alarmas y llamadas de emergencia.' },

      // INGENIERÍA
      'ing_espiral': { title: 'Modelo Helicoidal en Espiral de Barry Boehm 3D', badge: 'Ingeniería de Software • Ciclos de Vida', desc: 'Visualización de la espiral de Boehm en 4 cuadrantes (Planificación, Análisis de Riesgos, Ingeniería y Evaluación del Cliente), con balizas de mitigación de riesgo (Caso Facturación Brasil).' },
      'ing_arquitectura': { title: 'Arquitectura en Capas y Microservicios 3D', badge: 'Ingeniería de Software • Arquitectura', desc: 'Plataformas tridimensionales suspendidas: Capa de Presentación (Web/Móvil), Lógica de Negocio y Base de Datos SQL, con paquetes de transacciones fluyendo en vivo.' },
      'ing_pipeline': { title: 'Circuito de Ensamble CI/CD y Trazabilidad 3D', badge: 'Ingeniería de Software • XP y Testing', desc: 'Pipeline de ingeniería de software continuo: Requerimientos IEEE 830 -> TDD en parejas (XP) -> Build -> Testing de Carga (1000 visitas/2h) -> Despliegue en la Nube.' }
    };

    const cur = infoMap[key] || { title: 'Modelo 3D Interactivo', badge: '3D Studio', desc: 'Interactúa con el modelo 3D usando el mouse (arrastrar para rotar, rueda para zoom).' };
    if (titleEl) titleEl.innerText = cur.title;
    if (badgeEl) badgeEl.innerText = cur.badge;
    if (descEl) descEl.innerText = cur.desc;
  }

  // =========================================================================
  // BUILDERS: BASE DE DATOS
  // =========================================================================
  function buildDerModel() {
    const group = new THREE.Group();

    // Helper to make an entity box
    function makeEntity(name, x, y, z, color, info) {
      const geom = new THREE.BoxGeometry(9, 3.8, 3.5);
      const mat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.3,
        metalness: 0.2,
        emissive: color,
        emissiveIntensity: 0.15
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(x, y, z);
      mesh.userData = { title: name, details: info, color: color };
      interactiveObjects.push(mesh);
      group.add(mesh);

      // Label sprite
      const label = makeTextSprite(name);
      label.position.set(x, y + 3.2, z);
      group.add(label);

      return mesh;
    }

    // Entities
    makeEntity("PERSONAS (Superclase)", 0, 14, 0, 0x0284c7, "Superentidad generalizada: DNI (PK), Nombre, Apellido, FechaNac, Teléfono.");
    makeEntity("PARTICIPANTES", -16, 2, 0, 0x38bdf8, "Subclase solapada: NivelAlcanzado, PremioGanado. Hereda DNI de Personas.");
    makeEntity("REDACTORES", 16, 2, 0, 0x38bdf8, "Subclase solapada: Especialidad, Antigüedad. Hereda DNI de Personas.");
    makeEntity("TEMAS (Reflexiva)", 22, -10, 12, 0x10b981, "Entidad reflexiva 1:N. Relación 'Subtema de' con clave foránea recursiva IdTemaPadre.");
    makeEntity("CUESTIONARIOS", -20, -10, -5, 0xa855f7, "Instancia del juego con fecha, participante y ronda.");
    makeEntity("PREGUNTAS", 0, -12, 18, 0xf59e0b, "Banco de preguntas con enunciado, 4 opciones y respuesta correcta.");
    makeEntity("COMPOSICION_CUESTIONARIO", -10, -12, 6, 0xef4444, "Tabla intermedia M:N asociativa: (IdCuestionario, IdPregunta, OrdenPregunta).");

    // Connectors
    function makeLine(p1, p2, color = 0x64748b) {
      const geom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...p1), new THREE.Vector3(...p2)]);
      const mat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.8 });
      group.add(new THREE.Line(geom, mat));
    }

    // Inheritance lines
    makeLine([0, 12, 0], [-16, 4, 0], 0x38bdf8);
    makeLine([0, 12, 0], [16, 4, 0], 0x38bdf8);

    // M:N connections
    makeLine([-20, -10, -5], [-10, -12, 6], 0xa855f7);
    makeLine([0, -12, 18], [-10, -12, 6], 0xf59e0b);

    // Reflexive Torus for Temas
    const torusGeom = new THREE.TorusGeometry(3.5, 0.4, 8, 32);
    const torusMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 0.4 });
    const torus = new THREE.Mesh(torusGeom, torusMat);
    torus.position.set(22, -7, 12);
    torus.rotation.x = Math.PI / 3;
    torus.userData = { title: "Relación Reflexiva (1:N)", details: "Un tema puede contener múltiples subtemas jerárquicos (ej: Historia -> Historia Medieval)." };
    interactiveObjects.push(torus);
    group.add(torus);

    scene.add(group);
  }

  function buildAlgebraCube() {
    const group = new THREE.Group();
    const cubeSize = 3.6;
    const gap = 1.2;
    const offset = (3 * (cubeSize + gap) - gap) / 2;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        for (let d = 0; d < 3; d++) {
          const geom = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
          const color = (r === 0) ? 0x0284c7 : (r === 1 ? 0x38bdf8 : 0xa855f7);
          const mat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.2,
            metalness: 0.3,
            transparent: true,
            opacity: 0.85
          });
          const cell = new THREE.Mesh(geom, mat);
          cell.position.set(
            c * (cubeSize + gap) - offset + cubeSize/2,
            r * (cubeSize + gap) - offset + cubeSize/2 + 10,
            d * (cubeSize + gap) - offset + cubeSize/2
          );
          cell.userData = {
            title: `Tupla [Fila ${r+1}, Col ${c+1}, Dim ${d+1}]`,
            details: "Célula atómica de dato en el espacio relacional n-dimensional.",
            color: color
          };
          interactiveObjects.push(cell);
          group.add(cell);
        }
      }
    }

    // Slicing planes for Selection and Projection
    const planeGeom = new THREE.PlaneGeometry(22, 22);
    
    // Horizontal plane: Selección (sigma)
    const selMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
    const selPlane = new THREE.Mesh(planeGeom, selMat);
    selPlane.rotation.x = Math.PI / 2;
    selPlane.position.set(0, 10, 0);
    selPlane.userData = { title: "Operador Selección (σ)", details: "Filtra horizontalmente las tuplas que satisfacen un predicado lógico booleano." };
    interactiveObjects.push(selPlane);
    group.add(selPlane);

    // Vertical plane: Proyección (pi)
    const projMat = new THREE.MeshBasicMaterial({ color: 0x22c55e, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
    const projPlane = new THREE.Mesh(planeGeom, projMat);
    projPlane.rotation.y = Math.PI / 2;
    projPlane.position.set(0, 10, 0);
    projPlane.userData = { title: "Operador Proyección (π)", details: "Extrae verticalmente columnas específicas de atributos y suprime duplicados resultantes." };
    interactiveObjects.push(projPlane);
    group.add(projPlane);

    scene.add(group);
  }

  function buildNormalizationTower() {
    const group = new THREE.Group();
    const levels = [
      { name: "1FN: Atomicidad de Dominios", r: 16, y: -6, color: 0xef4444, info: "Elimina atributos multivaluados y grupos repetitivos. Todos los valores son atómicos." },
      { name: "2FN: Dependencia Plena", r: 12, y: 2, color: 0xf59e0b, info: "Cumple 1FN y elimina dependencias parciales de claves primarias compuestas." },
      { name: "3FN: Sin Dependencias Transitivas", r: 8, y: 10, color: 0x10b981, info: "Cumple 2FN y ningún atributo no clave depende transitivamente de la clave primaria (X -> Y -> Z)." },
      { name: "BCNF: Forma Boyce-Codd", r: 5, y: 18, color: 0x38bdf8, info: "Para toda dependencia funcional no trivial X -> Y, el determinante X es necesariamente superclave." }
    ];

    levels.forEach(lvl => {
      const geom = new THREE.CylinderGeometry(lvl.r, lvl.r, 1.2, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: lvl.color,
        roughness: 0.3,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85
      });
      const platform = new THREE.Mesh(geom, mat);
      platform.position.y = lvl.y;
      platform.userData = { title: lvl.name, details: lvl.info, color: lvl.color };
      interactiveObjects.push(platform);
      group.add(platform);

      const label = makeTextSprite(lvl.name);
      label.position.set(0, lvl.y + 2, lvl.r + 3);
      group.add(label);
    });

    // Central luminous pillar
    const pillarGeom = new THREE.CylinderGeometry(0.8, 0.8, 32, 16);
    const pillarMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
    const pillar = new THREE.Mesh(pillarGeom, pillarMat);
    pillar.position.y = 6;
    group.add(pillar);

    scene.add(group);
  }

  function buildOracleInstance() {
    const group = new THREE.Group();

    // Central SGA Cylinder
    const sgaGeom = new THREE.CylinderGeometry(9, 9, 6, 32);
    const sgaMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.2,
      metalness: 0.4,
      transparent: true,
      opacity: 0.85
    });
    const sgaMesh = new THREE.Mesh(sgaGeom, sgaMat);
    sgaMesh.position.y = 2;
    sgaMesh.userData = {
      title: "SGA (System Global Area)",
      details: "Estructura de memoria compartida central: Database Buffer Cache, Redo Log Buffer y Shared Pool."
    };
    interactiveObjects.push(sgaMesh);
    group.add(sgaMesh);

    const sgaLabel = makeTextSprite("MEMORIA SGA CENTRAL");
    sgaLabel.position.set(0, 7.5, 0);
    group.add(sgaLabel);

    // Orbiting Background Processes
    const processes = [
      { name: "DBWn (Database Writer)", radius: 15, speed: 0.012, color: 0x38bdf8, info: "Escribe bloques sucios desde el Buffer Cache a los Datafiles en disco." },
      { name: "LGWR (Log Writer)", radius: 19, speed: 0.018, color: 0xef4444, info: "Escribe el Redo Log Buffer en los archivos físicos de Redo Log en cada COMMIT." },
      { name: "CKPT (Checkpoint)", radius: 23, speed: 0.009, color: 0xf59e0b, info: "Actualiza los encabezados de control files y datafiles con el SCN actual." },
      { name: "SMON (System Monitor)", radius: 27, speed: 0.007, color: 0x10b981, info: "Realiza la recuperación de fallas de instancia al reiniciar el motor." },
      { name: "PMON (Process Monitor)", radius: 31, speed: 0.005, color: 0xa855f7, info: "Limpia recursos y bloqueos dejados por transacciones de usuarios caídos." }
    ];

    processes.forEach(proc => {
      // Orbit Ring
      const ringGeom = new THREE.RingGeometry(proc.radius - 0.08, proc.radius + 0.08, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: proc.color, side: THREE.DoubleSide, transparent: true, opacity: 0.25 });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 2;
      group.add(ring);

      // Process Sphere
      const sphereGeom = new THREE.SphereGeometry(1.6, 24, 24);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: proc.color,
        emissive: proc.color,
        emissiveIntensity: 0.5
      });
      const sphere = new THREE.Mesh(sphereGeom, sphereMat);
      sphere.position.set(proc.radius, 2, 0);
      sphere.userData = { title: proc.name, details: proc.info, color: proc.color };
      interactiveObjects.push(sphere);
      group.add(sphere);

      animatedNodes.push({ mesh: sphere, radius: proc.radius, speed: proc.speed, angle: Math.random() * Math.PI * 2 });
    });

    scene.add(group);
  }

  // =========================================================================
  // BUILDERS: INTELIGENCIA ARTIFICIAL
  // =========================================================================
  function buildNeuralNetwork() {
    const group = new THREE.Group();
    const layers = [
      { name: "Capa de Entrada (Sensores)", count: 4, x: -22, color: 0x38bdf8, labels: ["S_PIR", "S_Temp", "S_Vib", "S_Red"] },
      { name: "Capa Oculta 1 (Latente)", count: 6, x: -8, color: 0xa855f7, labels: ["H1_1", "H1_2", "H1_3", "H1_4", "H1_5", "H1_6"] },
      { name: "Capa Oculta 2 (Patrones)", count: 6, x: 8, color: 0xa855f7, labels: ["H2_1", "H2_2", "H2_3", "H2_4", "H2_5", "H2_6"] },
      { name: "Capa de Salida (Decisión)", count: 3, x: 22, color: 0x22c55e, labels: ["P_Intrusión", "P_Despacho", "P_Normal"] }
    ];

    const layerNodes = [];

    layers.forEach((layer, lIdx) => {
      const nodesInLayer = [];
      const spacing = 5.5;
      const startY = ((layer.count - 1) * spacing) / 2;

      for (let n = 0; n < layer.count; n++) {
        const y = startY - n * spacing + 4;
        const geom = new THREE.SphereGeometry(1.4, 24, 24);
        const mat = new THREE.MeshStandardMaterial({
          color: layer.color,
          roughness: 0.1,
          metalness: 0.3,
          emissive: layer.color,
          emissiveIntensity: 0.6
        });
        const neuron = new THREE.Mesh(geom, mat);
        neuron.position.set(layer.x, y, 0);
        neuron.userData = {
          title: `Neurona ${layer.labels[n]} (${layer.name})`,
          details: `Activación ponderada: ReLU/Sigmoid. Procesa señales con pesos sinápticos w_ij y bias.`,
          color: layer.color
        };
        interactiveObjects.push(neuron);
        group.add(neuron);
        nodesInLayer.push(neuron);
      }
      layerNodes.push(nodesInLayer);

      const titleSprite = makeTextSprite(layer.name);
      titleSprite.position.set(layer.x, startY + 8, 0);
      group.add(titleSprite);
    });

    // Synapses between layers
    for (let l = 0; l < layerNodes.length - 1; l++) {
      const currentLayer = layerNodes[l];
      const nextLayer = layerNodes[l + 1];

      currentLayer.forEach(n1 => {
        nextLayer.forEach(n2 => {
          const points = [n1.position, n2.position];
          const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
          const lineMat = new THREE.LineBasicMaterial({
            color: 0x475569,
            transparent: true,
            opacity: 0.35
          });
          group.add(new THREE.Line(lineGeom, lineMat));

          // Pulses
          pulseParticles.push({
            p1: n1.position,
            p2: n2.position,
            progress: Math.random(),
            speed: 0.008 + Math.random() * 0.012,
            mesh: null
          });
        });
      });
    }

    // Create 30 animated pulse particles
    const pulseGeom = new THREE.SphereGeometry(0.35, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    pulseParticles.slice(0, 35).forEach(p => {
      const mesh = new THREE.Mesh(pulseGeom, pulseMat);
      group.add(mesh);
      p.mesh = mesh;
    });

    scene.add(group);
  }

  function buildSearchGraph() {
    const group = new THREE.Group();

    // Graph nodes for airline / factory pathfinding
    const nodes = [
      { id: "S", name: "Estado Inicial (Córdoba)", x: -25, y: 12, z: 0, g: 0, h: 42, color: 0x38bdf8, info: "Origen: Salida programada con alerta de tormenta." },
      { id: "A", name: "Nodo A (Rosario)", x: -12, y: 18, z: -8, g: 15, h: 28, color: 0x94a3b8, info: "g(A) = 15, h(A) = 28 -> f(A) = 43. Frontera evaluada." },
      { id: "B", name: "Nodo B (Mendoza)", x: -14, y: 2, z: 12, g: 18, h: 32, color: 0x94a3b8, info: "g(B) = 18, h(B) = 32 -> f(B) = 50. Descartado por costo alto." },
      { id: "C", name: "Nodo C (Buenos Aires Hub)", x: 2, y: 15, z: -5, g: 26, h: 14, color: 0x10b981, info: "g(C) = 26, h(C) = 14 -> f(C) = 40. Camino prometedor." },
      { id: "D", name: "Nodo D (Neuquén)", x: 0, y: -4, z: 14, g: 30, h: 20, color: 0x94a3b8, info: "Frontera abierta secundaria." },
      { id: "G", name: "Meta (Bariloche - Vuelo Despachado)", x: 22, y: 8, z: 0, g: 38, h: 0, color: 0x22c55e, info: "OBJETIVO ALCANZADO con retraso mínimo óptimo (f = 38)." }
    ];

    const nodeMap = {};

    nodes.forEach(n => {
      const geom = new THREE.SphereGeometry(2.2, 24, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: n.color,
        emissive: n.color,
        emissiveIntensity: 0.4
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(n.x, n.y, n.z);
      mesh.userData = {
        title: `${n.name} [f=${n.g + n.h}]`,
        details: `${n.info} | Costo acumulado g=${n.g}, Heurística estimada h=${n.h}, f(n) = ${n.g + n.h}.`,
        color: n.color
      };
      interactiveObjects.push(mesh);
      group.add(mesh);
      nodeMap[n.id] = mesh;

      const label = makeTextSprite(`${n.id}: f=${n.g + n.h}`);
      label.position.set(n.x, n.y + 3.5, n.z);
      group.add(label);
    });

    // Edges
    const edges = [
      { from: "S", to: "A", cost: 15, isOptimal: true },
      { from: "S", to: "B", cost: 18, isOptimal: false },
      { from: "A", to: "C", cost: 11, isOptimal: true },
      { from: "B", to: "D", cost: 12, isOptimal: false },
      { from: "C", to: "G", cost: 12, isOptimal: true },
      { from: "D", to: "G", cost: 18, isOptimal: false }
    ];

    edges.forEach(e => {
      const p1 = nodeMap[e.from].position;
      const p2 = nodeMap[e.to].position;
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const mat = new THREE.LineBasicMaterial({
        color: e.isOptimal ? 0x22c55e : 0x475569,
        linewidth: e.isOptimal ? 4 : 1,
        transparent: true,
        opacity: e.isOptimal ? 0.9 : 0.4
      });
      group.add(new THREE.Line(geom, mat));
    });

    scene.add(group);
  }

  function buildPeasAgent() {
    const group = new THREE.Group();

    // Central Robot / Drone Agent
    const bodyGeom = new THREE.CylinderGeometry(3.5, 4, 2.5, 16);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.7, roughness: 0.2 });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.set(0, 10, 0);
    body.userData = {
      title: "Agente Inteligente Autónomo (PEAS)",
      details: "Medida de rendimiento: Maximizar detección de anomalías y minimizar falsas alarmas con asignación óptima."
    };
    interactiveObjects.push(body);
    group.add(body);

    // Sensor eye (glowing camera)
    const eyeGeom = new THREE.SphereGeometry(1.2, 16, 16);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 0.9 });
    const eye = new THREE.Mesh(eyeGeom, eyeMat);
    eye.position.set(0, 10, 3.8);
    group.add(eye);

    // Perception Cone (Radar Scan)
    const coneGeom = new THREE.ConeGeometry(24, 28, 32, 1, true);
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide
    });
    const cone = new THREE.Mesh(coneGeom, coneMat);
    cone.position.set(0, -3, 0);
    cone.rotation.x = Math.PI;
    cone.userData = { title: "Cono de Percepción de Sensores", details: "Rango de detección y muestreo activo en 360°." };
    interactiveObjects.push(cone);
    group.add(cone);

    animatedNodes.push({ mesh: cone, rotateY: 0.015 });

    // Surrounding Environment Events (Alarm Sensors)
    const events = [
      { title: "Evento 1: Falsa Alarma (Viento en Ramas)", x: -16, y: -8, z: 12, color: 0xf59e0b, info: "Filtrada por el agente mediante correlación de datos meteorológicos." },
      { title: "Evento 2: Intrusión Real en Progreso", x: 18, y: -8, z: -10, color: 0xef4444, info: "ALERTA CRÍTICA: Despacho prioritario de móvil de patrulla verificado." },
      { title: "Evento 3: Batería Baja en Sensor Magnético", x: -10, y: -8, z: -18, color: 0xa855f7, info: "Ticket generado para mantenimiento preventivo." },
      { title: "Evento 4: Sector en Calma Normal", x: 14, y: -8, z: 15, color: 0x22c55e, info: "Lecturas en umbrales estándar sin anomalías." }
    ];

    events.forEach(ev => {
      const beaconGeom = new THREE.CylinderGeometry(1.8, 1.8, 1.2, 16);
      const beaconMat = new THREE.MeshStandardMaterial({ color: ev.color, emissive: ev.color, emissiveIntensity: 0.5 });
      const beacon = new THREE.Mesh(beaconGeom, beaconMat);
      beacon.position.set(ev.x, ev.y, ev.z);
      beacon.userData = { title: ev.title, details: ev.info, color: ev.color };
      interactiveObjects.push(beacon);
      group.add(beacon);

      const label = makeTextSprite(ev.title.split(":")[0]);
      label.position.set(ev.x, ev.y + 2.5, ev.z);
      group.add(label);
    });

    scene.add(group);
  }

  // =========================================================================
  // BUILDERS: INGENIERÍA DE SOFTWARE
  // =========================================================================
  function buildBoehmSpiral() {
    const group = new THREE.Group();

    // Spiral curve
    const points = [];
    const turns = 4;
    const count = 200;
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 2 * turns;
      const radius = 4 + t * 22;
      const y = -10 + t * 24;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    }

    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeom = new THREE.TubeGeometry(curve, 160, 0.7, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.2,
      metalness: 0.4,
      emissive: 0x10b981,
      emissiveIntensity: 0.25
    });
    const spiralMesh = new THREE.Mesh(tubeGeom, tubeMat);
    spiralMesh.userData = {
      title: "Ciclo Helicoidal en Espiral (Barry Boehm)",
      details: "Cada vuelta aumenta el costo acumulado y reduce los riesgos mediante iteraciones completas."
    };
    interactiveObjects.push(spiralMesh);
    group.add(spiralMesh);

    // 4 Quadrant platform separators
    const q1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.15, side: THREE.DoubleSide });
    const q1Plane = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), q1Mat);
    q1Plane.rotation.x = Math.PI / 2;
    q1Plane.position.y = -10;
    group.add(q1Plane);

    // Milestone Beacons along the spiral
    const milestones = [
      { title: "Vuelta 1: Concepto y Análisis de Viabilidad", t: 0.15, color: 0x38bdf8, info: "Identificar objetivos y restricciones iniciales del negocio." },
      { title: "Vuelta 2: Mitigación de Riesgos e Impositivos (IVA 25%)", t: 0.45, color: 0xef4444, info: "Punto crítico: Prototipos para evaluar riesgos fiscales y normativos internacionales." },
      { title: "Vuelta 3: Desarrollo de la Arquitectura Operativa", t: 0.75, color: 0xf59e0b, info: "Construcción modular y pruebas de integración." },
      { title: "Vuelta 4: Validación y Despliegue con el Cliente", t: 0.98, color: 0x22c55e, info: "Aprobación final de usuarios (UAT) y puesta en producción." }
    ];

    milestones.forEach(m => {
      const pt = curve.getPointAt(m.t);
      const beaconGeom = new THREE.SphereGeometry(1.5, 24, 24);
      const beaconMat = new THREE.MeshStandardMaterial({ color: m.color, emissive: m.color, emissiveIntensity: 0.6 });
      const beacon = new THREE.Mesh(beaconGeom, beaconMat);
      beacon.position.copy(pt);
      beacon.userData = { title: m.title, details: m.info, color: m.color };
      interactiveObjects.push(beacon);
      group.add(beacon);

      const label = makeTextSprite(m.title.split(":")[0]);
      label.position.set(pt.x, pt.y + 2.8, pt.z);
      group.add(label);
    });

    scene.add(group);
  }

  function buildLayeredArchitecture() {
    const group = new THREE.Group();

    const layers = [
      { name: "Capa de Presentación (Web & App Móvil)", y: 14, color: 0x38bdf8, info: "Interfaces de usuario, vistas responsivas en PHP / React, validaciones en cliente." },
      { name: "Capa de Lógica de Negocio (Servicios & Dominio)", y: 2, color: 0x10b981, info: "Reglas de liquidación, cálculo de tarifas de temporadas, workflow de check-in / check-out." },
      { name: "Capa de Persistencia y Base de Datos (SQL)", y: -10, color: 0xa855f7, info: "Motor relacional, transacciones ACID, integridad referencial y procedimientos almacenados." }
    ];

    layers.forEach(l => {
      const geom = new THREE.BoxGeometry(34, 1.8, 22);
      const mat = new THREE.MeshStandardMaterial({
        color: l.color,
        roughness: 0.3,
        metalness: 0.3,
        transparent: true,
        opacity: 0.75
      });
      const platform = new THREE.Mesh(geom, mat);
      platform.position.y = l.y;
      platform.userData = { title: l.name, details: l.info, color: l.color };
      interactiveObjects.push(platform);
      group.add(platform);

      const label = makeTextSprite(l.name);
      label.position.set(0, l.y + 2.8, 12);
      group.add(label);
    });

    // Connecting pillars
    const pillars = [
      [-14, 14, -8], [14, 14, -8], [-14, 14, 8], [14, 14, 8]
    ];
    pillars.forEach(p => {
      const pGeom = new THREE.CylinderGeometry(0.4, 0.4, 26, 16);
      const pMat = new THREE.MeshBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.4 });
      const pMesh = new THREE.Mesh(pGeom, pMat);
      pMesh.position.set(p[0], 2, p[2]);
      group.add(pMesh);
    });

    // Flowing request packets between layers
    for (let i = 0; i < 6; i++) {
      const pktGeom = new THREE.BoxGeometry(1.6, 1.6, 1.6);
      const pktMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xf59e0b, emissiveIntensity: 0.5 });
      const pkt = new THREE.Mesh(pktGeom, pktMat);
      pkt.position.set((Math.random() - 0.5) * 20, 2, (Math.random() - 0.5) * 12);
      group.add(pkt);
      animatedNodes.push({ mesh: pkt, moveY: true, speed: 0.08 + Math.random() * 0.04, minY: -9, maxY: 13 });
    }

    scene.add(group);
  }

  function buildCicdPipeline() {
    const group = new THREE.Group();

    const stations = [
      { name: "1. Requerimientos (IEEE 830)", x: -28, color: 0x38bdf8, info: "Elicitación con 200 empleados, Historias de Usuario con criterio INVEST." },
      { name: "2. Programación XP (Pair Programming)", x: -14, color: 0x10b981, info: "Desarrollo guiado por pruebas (TDD) y refactorización continua." },
      { name: "3. Build & Compilación Continua", x: 0, color: 0xf59e0b, info: "Integración automática y verificación estática de código." },
      { name: "4. Test Suites (Carga 1000/2h)", x: 14, color: 0xa855f7, info: "Pruebas de estrés y testing de fallas de control y datos." },
      { name: "5. Despliegue en Producción Cloud", x: 28, color: 0x22c55e, info: "Entrega continua (CD) a los 20 hoteles de la cadena nacional." }
    ];

    stations.forEach(s => {
      const geom = new THREE.CylinderGeometry(3.5, 3.5, 2, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: s.color,
        roughness: 0.2,
        metalness: 0.3,
        emissive: s.color,
        emissiveIntensity: 0.3
      });
      const st = new THREE.Mesh(geom, mat);
      st.position.set(s.x, 0, 0);
      st.userData = { title: s.name, details: s.info, color: s.color };
      interactiveObjects.push(st);
      group.add(st);

      const label = makeTextSprite(s.name);
      label.position.set(s.x, 3.8, 0);
      group.add(label);
    });

    // Conveyor rail connecting all stations
    const railGeom = new THREE.BoxGeometry(60, 0.4, 1.8);
    const railMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5 });
    const rail = new THREE.Mesh(railGeom, railMat);
    rail.position.set(0, -0.6, 0);
    group.add(rail);

    scene.add(group);
  }

  // =========================================================================
  // UTILITIES & EVENTS
  // =========================================================================
  function makeTextSprite(message) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 420;
    canvas.height = 110;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.roundRect(5, 5, 410, 100, 16);
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.roundRect(5, 5, 410, 100, 16);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px Segoe UI, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(message, 210, 55);

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: texture, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(7, 2, 1);
    return sprite;
  }

  function onPointerMove(event) {
    const rect = event.target.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onClick(event) {
    if (!raycaster || !camera) return;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects, true);

    if (intersects.length > 0) {
      const obj = intersects[0].object;
      if (obj.userData && obj.userData.title) {
        showDetailsModal(obj.userData.title, obj.userData.details);
      }
    }
  }

  function showDetailsModal(title, details) {
    const titleEl = document.getElementById('inspectorTitle3D');
    const textEl = document.getElementById('inspectorText3D');
    const panelEl = document.getElementById('inspectorPanel3D');

    if (titleEl && textEl && panelEl) {
      titleEl.innerText = title;
      textEl.innerText = details;
      panelEl.style.display = 'block';
    }
  }

  function onWindowResize(canvas) {
    if (!renderer || !camera || !canvas) return;
    const container = canvas.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    if (controls) controls.update();

    if (autoRotate && scene) {
      scene.rotation.y += 0.002;
    }

    // Animated nodes (orbiting or bobbing)
    animatedNodes.forEach(node => {
      if (node.radius && node.speed) {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
      }
      if (node.rotateY) {
        node.mesh.rotation.y += node.rotateY;
      }
      if (node.moveY) {
        node.mesh.position.y += node.speed;
        if (node.mesh.position.y > node.maxY) node.mesh.position.y = node.minY;
      }
    });

    // Pulse particles for neural network
    pulseParticles.forEach(p => {
      if (p.mesh && p.p1 && p.p2) {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        p.mesh.position.lerpVectors(p.p1, p.p2, p.progress);
      }
    });

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

})();
