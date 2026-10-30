# 🎓 STUDY OS • Plataforma Integral de Estudio y Simulador de Exámenes 3D

> **Universidad Siglo 21 • Preparación Integral para Parciales y Trabajos Prácticos**  
> **Materias incluidas:** Base de Datos 1 • Ingeniería de Software • Inteligencia Artificial

Plataforma educativa interactiva diseñada con arquitectura Single Page Application (SPA), modelos tridimensionales en **Three.js** con controles orbitales 360°, banco enriquecido de preguntas de examen de la Universidad Siglo 21, resolución guiada de Actividades Prácticas (AP) y Trabajos Prácticos (TP), y laboratorios interactivos en vivo.

---

## 🌟 Selector de Asignaturas (Hub Multi-Materia)

En la barra superior de la plataforma puedes alternar instantáneamente entre las tres materias con un solo clic:

```
[ 🗄️ Base de Datos 1 ]   [ ⚙️ Ingeniería de Software ]   [ 🧠 Inteligencia Artificial ]
```

Al seleccionar una materia, toda la plataforma se adapta de forma inmediata: paleta de colores de acento, estadísticas en vivo, temario oficial desglosado, casos prácticos, modelos 3D, flashcards y simulador de examen.

---

## 📚 Cobertura Académica por Materia

### 1. 🗄️ Base de Datos 1 (`BD-1`)
* **Módulo 1:**
  * **L1:** Motores de Base de Datos, Sistemas Gestores (SGBD/DBMS), Arquitectura ANSI/SPARC de 3 niveles, Independencia física y lógica, Motores Relacionales vs NoSQL.
  * **L2:** El Modelo Relacional Formal de Edgar F. Codd (Cabecera, Cuerpo, Grado, Cardinalidad, Tuplas, Dominios, Claves PK, FK, Candidatas, Alternativas, Integridad de Entidad y Referencial).
  * **L3:** Álgebra Relacional Pura (Operadores unarios $\sigma$ Selección y $\pi$ Proyección, binarios $\cup$, $\cap$, $-$, $\times$ Producto Cartesiano, Join Natural $\bowtie$, División $\div$).
  * **L4:** Las 12 Reglas de Edgar F. Codd (Regla 0 fundamental, Regla 1 de la Información, Regla 2 de Acceso Garantizado, Catálogo dinámico en línea, Regla 12 de No Subversión).
* **Módulo 2:**
  * **L1:** Modelo Entidad-Relación (DER de Peter Chen, entidades fuertes/débiles, atributos multivaluados, cardinalidad 1:1, 1:N, M:N y pasaje a tablas).
  * **L2:** Modelo EER Extendido (Especialización, Generalización, Herencia, Restricciones solapadas vs disjuntas, completitud total vs parcial, agregación).
  * **L3:** Teoría de Normalización (Dependencias funcionales, anomalías de modificación, 1FN atomicidad, 2FN dependencia plena, 3FN transitividad, Forma Normal de Boyce-Codd BCNF).
  * **L4:** Arquitectura Interna de DBMS (Caso Oracle: Memoria compartida SGA, Database Buffer Cache, Redo Log Buffer, Shared Pool, procesos de fondo DBWn, LGWR, CKPT, SMON, PMON, y archivos físicos Datafiles, Redo Log, Control Files).
* **Casos Prácticos & TPs:**
  * **TP1:** Modelado Conceptual y Relacional.
  * **TP2:** Caso oficial "¿Quién quiere ser millonario?" (Jerarquía solapada `Personas` $\to$ `Participantes` / `Redactores`, relación reflexiva en `Temas` con anillo orbital, y tabla intermedia asociativa `ComposicionCuestionario`).
* **Modelos 3D Three.js:**
  * `bd_der`: DER 3D Interactivo con herencia y reflexiva.
  * `bd_algebra`: Cubo Volumétrico de Álgebra Relacional con planos de corte de Selección y Proyección.
  * `bd_torre`: Torre 3D de Normalización (1FN $\to$ BCNF).
  * `bd_oracle`: Instancia Oracle 3D con SGA central y procesos orbitando.

---

### 2. ⚙️ Ingeniería de Software (`IS-1`)
* **Módulo 1:**
  * **L1:** Introducción a la Ingeniería de Software (Definición IEEE 1990 vs RAE, Crisis del Software de 1968 en Garmisch OTAN, Leyes de Lehman de evolución, Atributos de calidad FURPS, Código de Ética conjunto ACM/IEEE con los 8 principios).
  * **L2:** Procesos de Software y Ciclos de Vida (Modelo en Cascada de Winston Royce, Modelo en V, Prototipado, Modelo Incremental/Evolutivo, Modelo en Espiral de Barry Boehm guiado por análisis de riesgos en 4 cuadrantes).
  * **L3:** Desarrollo Ágil de Software (Manifiesto Ágil: 4 valores y 12 principios; Scrum: roles Product Owner, Scrum Master y Development Team, ceremonias Sprint Planning, Daily de 15 min, Sprint Review y Retrospective, artefactos Product Backlog, Sprint Backlog y Burndown Chart; XP: Pair Programming, TDD, refactorización; Kanban: visualización y límites WIP).
  * **L4:** Metodología RUP (Rational Unified Process: dirigido por casos de uso, centrado en arquitectura, iterativo e incremental; 4 fases: Incepción, Elaboración, Construcción y Transición).
* **Módulo 2:**
  * **L1:** Ingeniería de Requerimientos y Elicitación (Requerimientos Funcionales RF vs No Funcionales RNF bajo FURPS+; Técnicas de elicitación: entrevistas, encuestas a 200 empleados, talleres JAD, etnografía, prototipos).
  * **L2:** Documentación y Administración de Requerimientos (Especificación de Requerimientos de Software SRS bajo estándar IEEE 830, Historias de Usuario con criterio INVEST, Matriz de Trazabilidad RTM, Comité de Control de Cambios CCB).
  * **L3:** Validación, Verificación y Testing de Software (Validación vs Verificación de Boehm, Inspecciones de Fagan, Testing de Caja Negra vs Caja Blanca, niveles unitario, integración, sistema con pruebas de estrés de 1000 visitas en 2 horas y 100 check-ins simultáneos, UAT).
  * **L4:** Ciclos de Vida Avanzados y Modelos de Decisión (Matriz de selección de metodologías según volatilidad de requerimientos y criticidad de riesgos; Gestión de deuda técnica).
* **Casos Prácticos & TPs:**
  * **AP1 (Empresa Millenium 25):** Venta de materiales eléctricos, 30 vendedores con planillas manuales y errores en emails; Sergio propone Scrum para app móvil; asignación de roles (Jorge = Scrum Master, Javier = Product Owner), reuniones y descarte de la impresora láser color obsoleta.
  * **AP2 (Empresa Millenium 25):** Cobranzas con modelo Cascada (requerimientos conocidos) vs Web de pedidos con modelo Incremental/Ágil y participación de Marcelo; documentación detallada IEEE 830 y diagramas UML.
  * **TP1 (Cadena de Hoteles Nacional):** 20 hoteles en 4 regiones, reservas web, check-in/out; complementación XP (Pair Programming, TDD) + Scrum, presupuesto de $1.000.000 y requerimientos no funcionales de eficiencia.
  * **TP2 (Cadena de Hoteles Nacional):** Ciclo evolutivo/incremental en PHP; servidor con 1 TB de disco y soporte para 1000 visitas en 2 horas; Facturación internacional Brasil con IVA 25% bajo ciclo en Espiral por riesgos; Movimientos de caja bajo ciclo Secuencial; Pruebas de estrés y testing de fallas de almacenamiento, datos y control.
* **Modelos 3D Three.js:**
  * `ing_espiral`: Espiral Helicoidal de Barry Boehm 3D en 4 cuadrantes con balizas de riesgo.
  * `ing_arquitectura`: Arquitectura en Capas y Microservicios 3D con paquetes de transacciones fluyendo en tiempo real.
  * `ing_pipeline`: Circuito de Ensamble CI/CD y Trazabilidad 3D (IEEE 830 $\to$ XP $\to$ Build $\to$ Carga 1000/2h $\to$ Cloud Deploy).

---

### 3. 🧠 Inteligencia Artificial (`IA-1`)
* **Módulo 1:**
  * **L1:** Conceptos, Paradigmas e Historia de la IA (Los 4 enfoques de Russell & Norvig: Pensar como humanos, Actuar como humanos [Test de Turing 1950], Pensar racionalmente [Leyes del pensamiento] y Actuar racionalmente [Agente Racional]; Dartmouth 1956, Inviernos de la IA, auge de Deep Learning y GPUs; IA Simbólica / GOFAI vs Conexionista).
  * **L2:** Agentes Inteligentes y Autonomía (Definición formal: Sensores, Percepciones, Función de agente $f: P^* \to A$, Actuadores y Acciones; Racionalidad vs Omnisciencia; Especificación PEAS: Rendimiento, Entorno, Actuadores, Sensores; Propiedades del entorno: observable, determinista, episódico, estático, discreto, monagente; 5 tipos de agentes: reactivo simple, con modelo, con objetivos, con utilidad, y que aprende).
  * **L3:** Modelos Fundacionales y LLMs (Concepto de Bommasani et al. 2021; Arquitectura Transformer de Vaswani 2017 y Mecanismo de Auto-Atención Query-Key-Value; Preentrenamiento, SFT y RLHF; Alucinaciones y sesgos; Mitigación mediante RAG [Retrieval-Augmented Generation] y Chain-of-Thought).
  * **L4:** Ecosistema Tecnológico de la IA (Python, PyTorch vs TensorFlow/Keras, Scikit-Learn, Hugging Face, aceleración CUDA/GPU y TPU; MLOps; Riesgos de seguridad en código asistido por IA y buenas prácticas de Code Review y testing automatizado).
* **Módulo 2:**
  * **L1:** Formulación de Problemas y Espacios de Búsqueda (Estado inicial, acciones, función de transición, test de objetivo y costo; Árbol vs Grafo de búsqueda con lista cerrada; Búsqueda no informada: BFS anchura [memoria exponencial $O(b^d)$], DFS profundidad, UCS costo uniforme / Dijkstra, IDDFS profundidad iterativa).
  * **L2:** Búsquedas Heurísticas y Optimización (Función heurística $h(n)$; Búsqueda Voraz Primero el Mejor $f(n)=h(n)$; Algoritmo A* $f(n) = g(n) + h(n)$; Propiedades: Admisibilidad $h(n) \le h^*(n)$ y Consistencia / Monotonía; Dominancia; Búsqueda local: Hill Climbing y Simulated Annealing).
  * **L3:** Conocimiento, Lógica e Inferencia (Agentes basados en conocimiento KB; Lógica Proposicional: sintaxis, semántica, tablas de verdad, validez y satisfactibilidad; Reglas: Modus Ponens, Modus Tollens, Resolución de Robinson sobre Forma Normal Conjuntiva FNC; Forward Chaining data-driven vs Backward Chaining goal-driven; Lógica de Primer Orden LPO con $\forall$ y $\exists$).
  * **L4:** Sistemas Expertos y Gestión de la Incertidumbre (Arquitectura: Base de conocimiento, Memoria de trabajo, Motor de inferencia y Módulo de Explicación; Teorema de Bayes $P(H|E) = \frac{P(E|H)P(H)}{P(E)}$; Redes Bayesianas DAG y tablas CPT; Ontologías formales de dominio en OWL/RDF para integración semántica).
* **Casos Prácticos & TPs:**
  * **AP1 (Monitoreo de Alarmas Domiciliarias):** 3000 propiedades, falsas alarmas por viento y ramas en noches de tormenta; diseño PEAS, entorno parcialmente observable y estocástico; agente basado en modelos con razonamiento bayesiano para priorizar patrullas.
  * **AP2 (Planta de Manufactura de Envases Plásticos):** 60 máquinas en 4 líneas, sensores de vibración, temperatura y corriente, 3 técnicos; agente basado en utilidad con mantenimiento predictivo para mitigar paros críticos en extrusoras.
  * **TP1 (Proyecto Ciudades Inteligentes):** Semáforos adaptativos inteligentes en la Avenida Central con sensores vs fijos de hace 10 años; Asistente Virtual ciudadano con LLM + RAG para orientación y clasificación de reclamos vecinales; Gobernanza de programación con Python y pruebas unitarias.
  * **TP2 (Aerolínea Regional):** 12 ciudades, 24 aviones; Frente 1: Reprogramación de vuelos con A*; Frente 2: Cumplimiento normativo con motor de inferencia en lógica formal; Frente 3: Mantenimiento predictivo de la flota con redes bayesianas y teorema de Bayes; Frente 4: Ontología formal en OWL para unificar lenguaje entre sistemas dispares.
* **Modelos 3D Three.js:**
  * `ia_neural`: Red Neuronal Multicapa & Flujo Sináptico 3D con pulsos de datos animados.
  * `ia_search`: Grafo de Estados & Búsqueda A* 3D con cálculo en vivo de $f(n) = g(n) + h(n)$ y camino óptimo.
  * `ia_peas`: Agente Autónomo PEAS & Cono de Radar 3D barreando el entorno en 360°.

---

## 🚀 Cómo Ejecutar la Plataforma

### Opción 1: Con el Lanzador Local Automático (Windows)
Haz doble clic en:
```bash
INICIAR_SISTEMA_LOCAL.bat
```
El script levantará el servidor local en el puerto 8080 y abrirá automáticamente tu navegador en `http://localhost:8080`.

### Opción 2: Modo 100% Offline (Sin Servidor)
Puedes abrir directamente el archivo:
```
Sistema_Estudio_Interactivo/index.html
```
en cualquier navegador moderno (Chrome, Edge, Brave, Firefox). Todo el código JavaScript, Three.js y OrbitControls está empaquetado de forma 100% local sin dependencias externas ni conexión a internet requerida.

---

## 📦 Estructura del Proyecto

```
├── Sistema_Estudio_Interactivo/
│   ├── index.html                   # Shell SPA unificada con Hub Multi-Materia
│   ├── js/
│   │   ├── three.min.js             # Motor Three.js local
│   │   ├── OrbitControls.js         # Controles orbitales de cámara 360°
│   │   ├── subjects_data.js         # Base de datos global de las 3 materias (teoría, casos, preguntas)
│   │   ├── three_visualizers.js     # Motor de 10 escenas 3D interactivas con raycasting
│   │   └── app.js                   # Controlador de estado, simulador, flashcards y labs
│   └── preguntas_parcial_1_siglo21.json # Dataset de 144 preguntas de BD
├── Ingenieria/                      # PDFs oficiales de Ingeniería de Software (M1, M2, AP1, AP2, TP1, TP2)
├── IA/                              # PDFs oficiales de Inteligencia Artificial (M1, M2, AP1, AP2, TP1, TP2)
├── INICIAR_SISTEMA_LOCAL.bat        # Lanzador automático con 1 clic
└── README.md
```

---

## 🧠 Créditos y Referencias
* **Universidad Siglo 21:** Cátedras de Base de Datos 1, Ingeniería de Software e Inteligencia Artificial.
* **Stuart Russell & Peter Norvig:** *Artificial Intelligence: A Modern Approach*.
* **Barry Boehm:** *A Spiral Model of Software Development and Enhancement*.
* **Edgar F. Codd & Peter Chen:** Modelo Relacional, 12 Reglas y Modelo Entidad-Relación.
