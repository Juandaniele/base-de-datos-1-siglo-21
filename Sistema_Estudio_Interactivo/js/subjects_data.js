window.STUDY_SYSTEM_DATA = {
  "bd": {
    "id": "bd",
    "name": "Base de Datos 1",
    "code": "BD-1",
    "icon": "🗄️",
    "color": "#38bdf8",
    "accentGlow": "rgba(56, 189, 248, 0.25)",
    "university": "Universidad Siglo 21",
    "career": "Lic. en Informática / Sistemas",
    "badge": "Módulos 1 & 2 • 144 Preguntas de Parcial • 4 Modelos 3D",
    "description": "Domina el Modelo Relacional formal de Edgar F. Codd, las 12 Reglas, el Álgebra Relacional pura, el Modelo Entidad-Relación (DER/EER), la Teoría de Normalización hasta BCNF, la arquitectura física de Oracle y el banco oficial de 144 preguntas de examen.",
    "stats": {
      "modules": 2,
      "lectures": 8,
      "questions": 144,
      "flashcards": 24,
      "cases": 2,
      "models3d": 4
    },
    "modules": [
      {
        "id": "M1",
        "name": "Módulo 1: Fundamentos, Modelo Relacional, Álgebra y Reglas de Codd",
        "lectures": [
          {
            "id": "L1",
            "title": "Lectura 1: Motores de Base de Datos y Arquitectura ANSI/SPARC",
            "summary": "Estudio integral de los Sistemas de Gestión de Bases de Datos (SGBD/DBMS). Se analiza la arquitectura ANSI/SPARC de 3 niveles (Nivel Interno/Físico, Nivel Conceptual y Nivel Externo/Vistas) que garantiza la independencia física y lógica de los datos. Clasificación de motores: relacionales (SQL), NoSQL (documentales, clave-valor, grafos, columnares) y modelos jerárquicos y en red.",
            "key_concepts": [
              {
                "term": "SGBD / DBMS",
                "def": "Software que permite a las organizaciones centralizar datos, administrarlos de manera eficiente y proporcionar acceso mediante programas de aplicación."
              },
              {
                "term": "Arquitectura ANSI/SPARC",
                "def": "Estándar de 3 niveles: Externo (vistas de usuarios), Conceptual (esquema lógico global independiente del SGBD) e Interno (almacenamiento físico en bloques y discos)."
              },
              {
                "term": "Independencia de Datos",
                "def": "Física (modificar almacenamiento sin alterar esquema conceptual) y Lógica (modificar esquema conceptual sin alterar las aplicaciones de usuario)."
              },
              {
                "term": "Motores Relacionales vs NoSQL",
                "def": "Relacionales aseguran ACID y esquema rígido tabular. NoSQL priorizan escalabilidad horizontal y esquemas flexibles (documentos JSON, clave-valor, grafos)."
              }
            ],
            "exam_traps": [
              "Cuidado: El programador de aplicaciones NO es el usuario que controla el sistema en general; esa función corresponde exclusivamente al DBA (Administrador de Base de Datos).",
              "No confundir independencia física (cambiar índices o discos) con lógica (añadir nuevas tablas o campos sin romper vistas)."
            ]
          },
          {
            "id": "L2",
            "title": "Lectura 2: El Modelo Relacional Formal",
            "summary": "Fundamentos matemáticos formulados por Edgar F. Codd en 1970 basados en la teoría de conjuntos y la lógica de predicados. Estructura de la relación: Cabecera (conjunto de atributos con sus dominios) y Cuerpo (conjunto de tuplas/filas). Definición rigurosa de Grado (número de atributos/columnas) y Cardinalidad (número de tuplas/filas). Claves primarias (PK), foráneas (FK), candidatas y alternativas. Integridad de Entidad e Integridad Referencial.",
            "key_concepts": [
              {
                "term": "Relación (Tabla)",
                "def": "Subconjunto del producto cartesiano de los dominios de sus atributos. No tiene orden en sus filas ni en sus columnas y no admite tuplas duplicadas."
              },
              {
                "term": "Grado",
                "def": "Número de atributos o columnas de la relación. Es estático."
              },
              {
                "term": "Cardinalidad",
                "def": "Número de tuplas o filas de la relación. Es dinámico y varía con inserciones y borrados."
              },
              {
                "term": "Clave Primaria (PK)",
                "def": "Clave candidata elegida por el diseñador para identificar de manera unívoca cada tupla. No puede aceptar valores nulos (Integridad de Entidad)."
              },
              {
                "term": "Clave Foránea (FK)",
                "def": "Atributo o conjunto de atributos cuyos valores deben coincidir con la clave primaria de otra tabla o ser nulos (Integridad Referencial)."
              },
              {
                "term": "Valor Nulo (NULL)",
                "def": "Representa información ausente, desconocida o no aplicable. NO equivale a cero (0) ni a cadena vacía ('')."
              }
            ],
            "exam_traps": [
              "Regla mnemotécnica de examen: Grado = Columnas (vertical). Cardinalidad = Filas (horizontal).",
              "El conjunto de filas se denomina oficialmente 'Cuerpo'; el conjunto de columnas o atributos se denomina 'Cabecera'."
            ]
          },
          {
            "id": "L3",
            "title": "Lectura 3: Álgebra Relacional Pura",
            "summary": "Lenguaje de consulta procedimental cerrado donde las entradas son relaciones y la salida es siempre una nueva relación. Operadores fundamentales independientes: Selección (σ, subconjunto horizontal de tuplas que satisfacen un predicado), Proyección (π, subconjunto vertical de columnas eliminando duplicados), Unión (∪), Diferencia (-), Producto Cartesiano (×) y Renombramiento (ρ). Operadores derivados: Intersección (∩), Join Natural (⋈), Theta Join y División (÷).",
            "key_concepts": [
              {
                "term": "Selección (σ)",
                "def": "Operador unario que filtra tuplas que cumplen una condición predicativa dada. Genera un subconjunto horizontal."
              },
              {
                "term": "Proyección (π)",
                "def": "Operador unario que extrae ciertas columnas de la relación y elimina tuplas duplicadas resultantes. Genera un subconjunto vertical."
              },
              {
                "term": "Producto Cartesiano (×)",
                "def": "Operador binario que combina cada tupla de la primera relación con todas las tuplas de la segunda. Grado resultante = Grado(R) + Grado(S); Cardinalidad resultante = Card(R) * Card(S)."
              },
              {
                "term": "Unión y Diferencia",
                "def": "Requieren que las relaciones sean unión-compatibles (mismo grado y dominios de atributos compatibles uno a uno)."
              },
              {
                "term": "Join Natural (⋈)",
                "def": "Proyección del producto cartesiano filtrado por igualdad en los atributos de nombres idénticos, eliminando columnas duplicadas."
              }
            ],
            "exam_traps": [
              "En el Producto Cartesiano: los atributos se SUMAN, las tuplas se MULTIPLICAN.",
              "La Proyección (π) SIEMPRE elimina duplicados en el álgebra relacional pura porque el resultado debe ser un conjunto formal."
            ]
          },
          {
            "id": "L4",
            "title": "Lectura 4: Las 12 Reglas de Edgar F. Codd",
            "summary": "Conjunto de mandamientos formulados por Codd en 1985 para determinar si un SGBD es genuinamente relacional. Incluye la Regla 0 (Regla fundamental), Regla 1 (De la información: toda la información debe almacenarse explícitamente en tablas en el nivel lógico), Regla 2 (Acceso garantizado: cualquier dato atómico es accesible por Tabla + PK + Columna), Regla 3 (Tratamiento sistemático de nulos), Regla 4 (Catálogo dinámico en línea basado en el modelo relacional), Regla 5 (Sublenguaje integral de datos: SQL con DDL, DML, DCL), Regla 6 (Actualización de vistas), Regla 7 (Inserción, actualización y borrado de alto nivel), Reglas 8 y 9 (Independencia física y lógica), Regla 10 (Independencia de integridad), Regla 11 (Independencia de distribución) y Regla 12 (No subversión: no eludir reglas de integridad mediante lenguajes de bajo nivel).",
            "key_concepts": [
              {
                "term": "Regla 0 (Fundamental)",
                "def": "Cualquier sistema que se proclame relacional debe ser capaz de gestionar las bases de datos enteramente a través de sus capacidades relacionales."
              },
              {
                "term": "Regla 1 (Información)",
                "def": "Toda información a nivel lógico se representa de una sola manera: mediante valores en tablas."
              },
              {
                "term": "Regla 2 (Acceso Garantizado)",
                "def": "Se garantiza que cada valor de dato individual es lógicamente accesible especificando: nombre de la tabla, valor de la clave primaria y nombre de la columna."
              },
              {
                "term": "Regla 4 (Catálogo Relacional)",
                "def": "El diccionario de datos se describe a nivel lógico exactamente igual que los datos ordinarios, permitiendo consultarlo con el mismo lenguaje de consulta (SELECT sobre tablas del sistema)."
              },
              {
                "term": "Regla 12 (No Subversión)",
                "def": "Si el sistema tiene una interfaz de bajo nivel (un registro a la vez), no puede ser usada para violar las reglas de integridad o seguridad expresadas en el lenguaje de alto nivel."
              }
            ],
            "exam_traps": [
              "En el examen se pregunta textualmente: '¿Qué combinación de elementos garantiza el acceso en la Regla 2?' Respuesta: Nombre de Tabla + Clave Primaria + Nombre de Columna.",
              "La Regla 12 prohíbe explícitamente sortear las restricciones del DDL utilizando punteros o punteros de bajo nivel."
            ]
          }
        ]
      },
      {
        "id": "M2",
        "name": "Módulo 2: Modelo Entidad-Relación, EER, Normalización y Arquitectura Oracle",
        "lectures": [
          {
            "id": "L1",
            "title": "Lectura 1: Modelo Entidad-Relación (DER de Peter Chen)",
            "summary": "Herramienta conceptual de diseño de bases de datos introducida por Peter Chen en 1976. Entidades (fuertes y débiles por existencia o identificación), atributos (simples, compuestos, monovaluados, multivaluados, derivados) y relaciones. Cardinalidad y razones de cardinalidad (1:1, 1:N, M:N). Participación total (obligatoria, doble línea) y parcial (opcional). Transformación al modelo relacional: relaciones 1:1 (unificación o clave foránea), 1:N (clave foránea en el lado 'Muchos'), M:N (tabla intermedia asociativa con claves compuestas).",
            "key_concepts": [
              {
                "term": "Entidad Débil",
                "def": "Entidad que no puede existir sin su entidad propietaria o identificadora. Su clave primaria se forma uniendo la clave primaria de la entidad fuerte con su propio discriminador."
              },
              {
                "term": "Atributo Multivaluado",
                "def": "Atributo que puede albergar múltiples valores para una misma instancia (ej. varios números de teléfono). En el DER se grafica con doble elipse y en el relacional genera una nueva tabla vinculada."
              },
              {
                "term": "Resolución 1:N",
                "def": "Se coloca la clave foránea en la tabla que representa el lado 'Muchos' apuntando a la clave primaria del lado 'Uno'."
              },
              {
                "term": "Resolución M:N",
                "def": "Se crea obligatoriamente una tabla intermedia asociativa que contiene dos claves foráneas que apuntan a las claves primarias de las dos tablas originales."
              }
            ],
            "exam_traps": [
              "Pregunta recurrente de examen: Para resolver una relación 1:N, la clave foránea va SIEMPRE en el lado de los MUCHOS, nunca en el lado del Uno.",
              "Si la relación es M:N, la única solución correcta es crear una tabla intermedia asociativa con claves foráneas."
            ]
          },
          {
            "id": "L2",
            "title": "Lectura 2: Modelo Entidad-Relación Extendido (EER)",
            "summary": "Extensión del DER clásico para incorporar abstracciones avanzadas de la orientación a objetos: Generalización (bottom-up), Especialización (top-down) y Herencia de atributos y relaciones. Restricciones de disyunción: Disjunta (d, una instancia de superclase pertenece a lo sumo a una subclase) vs Solapada (o, puede pertenecer a más de una simultáneamente). Restricciones de completitud: Total (doble línea, toda instancia debe pertenecer a alguna subclase) vs Parcial (línea simple, puede no pertenecer a ninguna). Agregación para relaciones entre relaciones.",
            "key_concepts": [
              {
                "term": "Herencia",
                "def": "Las subclases heredan automáticamente todos los atributos y todas las relaciones en las que participa su superclase."
              },
              {
                "term": "Disyunción (d vs o)",
                "def": "Disjunta (excluyente: un empleado es o Administrativo o Técnico) vs Solapada (puede ser Redactor y Participante al mismo tiempo)."
              },
              {
                "term": "Completitud (Total vs Parcial)",
                "def": "Total (toda persona debe pertenecer a una subclase) vs Parcial (puede haber personas que no pertenezcan a ninguna subclase)."
              },
              {
                "term": "Agregación",
                "def": "Abstracción que permite tratar una relación junto con sus entidades asociadas como una entidad de orden superior para relacionarla con otra entidad."
              }
            ],
            "exam_traps": [
              "En el caso del TP2 ('¿Quién quiere ser millonario?'), la jerarquía entre Persona y (Participante, Redactor) es SOLAPADA porque una persona puede participar del juego y haber redactado preguntas en otro certamen."
            ]
          },
          {
            "id": "L3",
            "title": "Lectura 3: Teoría de Normalización",
            "summary": "Proceso formal y riguroso de diseño lógico para eliminar redundancias de datos, anomalías de inserción, modificación y borrado, preservando dependencias y sin pérdida de información (Lossless Join). Dependencias Funcionales (DF: X -> Y). Formas Normales: 1FN (todos los dominios son atómicos, sin grupos repetitivos), 2FN (está en 1FN y ningún atributo no clave depende parcialmente de una clave candidata compuesta), 3FN (está en 2FN y no existen dependencias transitivas entre atributos no clave), y Boyce-Codd (BCNF: para toda dependencia X -> Y no trivial, X debe ser una superclave).",
            "key_concepts": [
              {
                "term": "1FN (Primera Forma Normal)",
                "def": "Todos los atributos contienen únicamente valores atómicos indivisibles; no existen arreglos, listas ni columnas multivaluadas."
              },
              {
                "term": "2FN (Segunda Forma Normal)",
                "def": "Cumple 1FN y cada atributo no clave tiene dependencia funcional COMPLETA de la clave primaria (aplica a claves primarias compuestas)."
              },
              {
                "term": "3FN (Tercera Forma Normal)",
                "def": "Cumple 2FN y ningún atributo no clave depende TRANSITIVAMENTE de la clave primaria (X -> Y -> Z no permitido si Z es no clave)."
              },
              {
                "term": "Forma Normal de Boyce-Codd (BCNF)",
                "def": "Para toda dependencia funcional X -> Y no trivial, el determinante X es necesariamente una superclave."
              }
            ],
            "exam_traps": [
              "Si una tabla tiene una clave primaria SIMPLE (de una sola columna) y está en 1FN, automáticamente cumple 2FN porque no es posible tener dependencia parcial de una clave atómica.",
              "La 3FN elimina dependencias transitivas; la 2FN elimina dependencias parciales."
            ]
          },
          {
            "id": "L4",
            "title": "Lectura 4: Arquitectura Interna de DBMS (Caso Oracle)",
            "summary": "Arquitectura física y lógica de los motores empresariales de alta disponibilidad. Distinción crucial entre Instancia (estructuras de memoria volátil SGA + procesos de fondo en ejecución) y Base de Datos (archivos físicos persistentes en disco). Componentes de la SGA (System Global Area): Database Buffer Cache, Redo Log Buffer, Shared Pool (Library Cache + Data Dictionary Cache) y Large Pool. Procesos de fondo: DBWn (Database Writer), LGWR (Log Writer), CKPT (Checkpoint), SMON (System Monitor) y PMON (Process Monitor). Archivos de almacenamiento físico: Datafiles (.dbf), Redo Log Files (.log) y Control Files (.ctl).",
            "key_concepts": [
              {
                "term": "Instancia Oracle",
                "def": "Conjunto formado por estructuras de memoria compartida (SGA) y procesos de fondo en ejecución en el sistema operativo."
              },
              {
                "term": "SGA (System Global Area)",
                "def": "Área de memoria compartida asignada al iniciar la instancia que almacena datos y buffers de control."
              },
              {
                "term": "DBWn (Database Writer)",
                "def": "Proceso encargado de escribir los bloques sucios (modificados) desde el Database Buffer Cache a los Datafiles en disco."
              },
              {
                "term": "LGWR (Log Writer)",
                "def": "Escribe secuencialmente el contenido del Redo Log Buffer en los archivos físicos de Redo Log en disco durante los COMMITs."
              },
              {
                "term": "Archivos Físicos Fundamentales",
                "def": "Datafiles (datos), Control Files (metadatos de sincronización e integridad) y Redo Log Files (historial de transacciones para recuperación)."
              }
            ],
            "exam_traps": [
              "Pregunta de múltiple opción típica: '¿Con qué elementos se forma una instancia de Oracle?' Respuestas correctas: Estructuras de memoria + Procesos de fondo. (¡NO tablas ni vistas, esas son objetos lógicos!).",
              "El proceso LGWR escribe en disco mucho antes y con mayor frecuencia que DBWn para garantizar durabilidad ACID."
            ]
          }
        ]
      }
    ],
    "cases": [
      {
        "id": "TP1",
        "title": "Trabajo Práctico 1: Modelado Conceptual y Relacional",
        "scenario": "Diseño de base de datos relacional para gestión de pedidos, clientes y facturación. Identificación de entidades, claves primarias y foráneas, cardinalidades y formulación de consultas en álgebra relacional.",
        "analysis": "Se aborda la transformación de requerimientos del negocio a un esquema relacional normalizado. Se enfatiza el establecimiento de restricciones de integridad referencial con acciones en cascada o restricción.",
        "resolution_steps": [
          "1. Identificación de entidades fuertes y débiles a partir de la narrativa del caso.",
          "2. Especificación de claves candidatas y elección fundamentada de claves primarias.",
          "3. Mapeo de relaciones 1:1, 1:N y M:N aplicando reglas de normalización formal.",
          "4. Validación de consultas analíticas utilizando expresiones de álgebra relacional pura (σ, π, ⋈)."
        ]
      },
      {
        "id": "TP2",
        "title": "Trabajo Práctico 2: Caso '¿Quién quiere ser millonario?'",
        "scenario": "Modelado de datos complejo para el programa televisivo '¿Quién quiere ser millonario?'. Comprende la jerarquía de personas (Participantes vs Redactores de preguntas), relación reflexiva de temas y cuestionarios armados por preguntas de diversos niveles.",
        "analysis": "El caso involucra tres dificultades técnicas principales: 1) Jerarquía EER solapada entre Participantes y Redactores (una misma persona puede ser participante y redactor en diferentes certámenes); 2) Relación reflexiva 'Subtema de' sobre la entidad Temas (cardinalidad 1:N); 3) Tabla asociativa intermedia 'ComposicionCuestionario' para modelar la relación M:N entre Cuestionarios y Preguntas, registrando el número de orden (1 a 15).",
        "resolution_steps": [
          "1. Definir superentidad 'Personas' (DNI, Nombre, Apellido, FechaNac, Teléfono).",
          "2. Crear especialización solapada: 'Participantes' (NivelAlcanzado, PremioGanado) y 'Redactores' (Especialidad, FechaIngreso).",
          "3. Modelar entidad 'Temas' con clave foránea recursiva 'IdTemaPadre' hacia sí misma.",
          "4. Crear relación M:N entre 'Cuestionarios' y 'Preguntas' mediante la entidad asociativa 'DetalleCuestionario' con PK compuesta (IdCuestionario, IdPregunta) y atributo propio 'OrdenPregunta'."
        ]
      }
    ],
    "flashcards": [
      {
        "cat": "CODD",
        "front": "¿Qué establece la Regla 1 (Regla de la Información)?",
        "back": "Toda la información se representa explícitamente en el nivel lógico de UNA SOLA MANERA: mediante valores en tablas.",
        "detail": "Regla 1 de E.F. Codd."
      },
      {
        "cat": "CODD",
        "front": "¿Qué establece la Regla 2 (Regla del Acceso Garantizado)?",
        "back": "Todo valor atómico se garantiza accesible mediante la combinación de: [Nombre de Tabla + Clave Primaria + Nombre de Columna].",
        "detail": "Regla 2 de E.F. Codd."
      },
      {
        "cat": "CODD",
        "front": "¿Qué establece la Regla 12 (Regla de No Subversión)?",
        "back": "Si el sistema tiene una interfaz de bajo nivel (un registro a la vez), no puede ser usada para violar las reglas de integridad o seguridad relacionales.",
        "detail": "Regla 12 de E.F. Codd."
      },
      {
        "cat": "ALGEBRA",
        "front": "¿Qué es la Selección (σ) en Álgebra Relacional?",
        "back": "Operador unario que filtra tuplas que satisfacen un predicado dado. Genera un subconjunto HORIZONTAL de filas.",
        "detail": "Símbolo: σ (sigma)."
      },
      {
        "cat": "ALGEBRA",
        "front": "¿Qué es la Proyección (π) en Álgebra Relacional?",
        "back": "Operador unario que extrae ciertas columnas y elimina tuplas duplicadas. Genera un subconjunto VERTICAL de columnas.",
        "detail": "Símbolo: π (pi)."
      },
      {
        "cat": "ALGEBRA",
        "front": "¿Cuál es el resultado del Producto Cartesiano (R × S)?",
        "back": "Grado = Grado(R) + Grado(S). Cardinalidad = Card(R) × Card(S).",
        "detail": "Suma de atributos, producto de filas."
      },
      {
        "cat": "NORMALIZACION",
        "front": "¿Qué exige la Primera Forma Normal (1FN)?",
        "back": "Que todos los atributos contengan exclusivamente valores atómicos indivisibles; no admite grupos repetitivos ni columnas multivaluadas.",
        "detail": "Atomicidad de dominios."
      },
      {
        "cat": "NORMALIZACION",
        "front": "¿Qué exige la Segunda Forma Normal (2FN)?",
        "back": "Estar en 1FN y que ningún atributo no clave tenga dependencia funcional parcial de una clave primaria compuesta.",
        "detail": "Dependencia funcional plena."
      },
      {
        "cat": "NORMALIZACION",
        "front": "¿Qué exige la Tercera Forma Normal (3FN)?",
        "back": "Estar en 2FN y que ningún atributo no clave dependa transitivamente de la clave primaria (X -> Y -> Z prohibido).",
        "detail": "Eliminación de dependencias transitivas."
      },
      {
        "cat": "NORMALIZACION",
        "front": "¿Qué exige la Forma Normal de Boyce-Codd (BCNF)?",
        "back": "Que para toda dependencia funcional no trivial X -> Y, el determinante X sea necesariamente una superclave.",
        "detail": "BCNF es más estricta que 3FN."
      },
      {
        "cat": "ORACLE",
        "front": "¿Qué constituye una Instancia en Oracle?",
        "back": "La memoria compartida SGA (System Global Area) + los Procesos de Fondo del sistema operativo.",
        "detail": "Instancia = Memoria + Procesos."
      },
      {
        "cat": "ORACLE",
        "front": "¿Cuál es la función del proceso LGWR?",
        "back": "Escribe secuencialmente el contenido del Redo Log Buffer en los archivos físicos de Redo Log en disco durante cada COMMIT.",
        "detail": "Garantiza durabilidad ACID."
      }
    ],
    "questions": [
      {
        "id": 1,
        "prompt": "El usuario que se encarga del control general del sistema de base de datos, es el programador de aplicaciones.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "FALSO"
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"FALSO\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 2,
        "prompt": "Al diseñar una tabla, podemos encontrar que, en algunos atributos o columnas de algunas filas se pueden dar valores de un dominio. No obstante, en algunas filas a estos no se les conoce un valor determinado. ¿Cómo se denomina el valor que puede tomar un atributo en una tupla cuando se desconoce el valor?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Desconocido.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Nulo.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Vacío.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Cero.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Indefinido.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Nulo."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructura Formal de la Relación",
        "priority": "ALTA",
        "explanation": "En el modelo relacional: Cabecera = conjunto de nombres de atributos; Cuerpo = conjunto de tuplas (filas); Grado = número de atributos (columnas); Cardinalidad = número de tuplas (filas).",
        "exam_tip": "No confundir: Grado = Columnas (vertical). Cardinalidad = Filas (horizontal). Cuerpo = Conjunto de filas."
      },
      {
        "id": 3,
        "prompt": "¿Cómo se denomina el conjunto de filas de una tabla en el modelo relacional?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Grado.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Dominio.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Cuerpo.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Cabecera.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Esquema.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Cuerpo."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Cuerpo.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 4,
        "prompt": "Indica la palabra ausente en el siguiente concepto de base de datos: \"Una serie de datos organizados y relacionados entre sí, y un conjunto de ________ que permitan a los usuarios acceder y modificar esos datos\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Rutinas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Consultas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Operaciones.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Sentencias.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Programas.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Programas."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Programas.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 5,
        "prompt": "¿Con qué elementos se forma una instancia de una base de datos Oracle? Seleccione las 2 (dos) opciones correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Tablas y vistas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Usuarios y permisos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Procedimientos almacenados.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Estructuras de memoria.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Servicios dedicados.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          3,
          4
        ],
        "correct_answers": [
          "Estructuras de memoria.",
          "Servicios dedicados."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Arquitectura Oracle",
        "priority": "ALTA",
        "explanation": "Una instancia de Oracle se compone de Estructuras de Memoria (SGA, PGA) y Procesos / Servicios Dedicados (Background processes como DBWn, LGWR, CKPT).",
        "exam_tip": "Cuidado: la base de datos física son los archivos (.dbf, logs, controlfiles), mientras que la instancia es la memoria y los procesos de ejecución."
      },
      {
        "id": 6,
        "prompt": "\"Se pueden hacer cambios a la información que contiene la base de datos o tener acceso a la base de datos de diferente manera, sin hacer cambios en las aplicaciones o en los programas\". ¿A cuál de las ventajas del uso de bases de datos hace referencia el concepto?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Mayor eficiencia en el acceso a los datos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Globalización de la información.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Reducción de la redundancia de la información.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Independencia de datos y tratamiento.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Restricciones de seguridad.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Independencia de datos y tratamiento."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Independencia de datos y tratamiento.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 7,
        "prompt": "El modelo relacional se diseñó para permitir una mejor gestión de la calidad de la información, teniendo resuelta una característica esencial para esta tarea. ¿A cuál de las ventajas del uso de bases de datos hace referencia el concepto \"solo se almacena la información correcta\"?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Permite la globalización de la información.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Permite mantener la integridad en la información.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Permite la independencia de datos y tratamiento.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Eliminación de información redundante.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Eliminación de la información inconsistente.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Permite mantener la integridad en la información."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Permite mantener la integridad en la información.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 8,
        "prompt": "\"Permite a los diferentes usuarios considerar la información como un recurso corporativo que carece de dueños específicos\". ¿A cuál de las ventajas del uso de bases de datos hace referencia el concepto?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Permite eliminar la información redundante.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Permite mantener la integridad en la información.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Globalización de la información.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Permite compartir información.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Permite la independencia de datos y tratamiento.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Globalización de la información."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Globalización de la información.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 9,
        "prompt": "¿Cuál de los motores de bases de datos estudiados puede funcionar en Android?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "PostgreSQL.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "SQL Server.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Oracle.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "MySQL.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "SQLite.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "SQLite."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Motores Embebidos: SQLite",
        "priority": "ALTA",
        "explanation": "SQLite es un motor embebido, serverless y de huella de memoria mínima que almacena toda la base en un único archivo de disco, lo que lo hace el estándar para Android y dispositivos móviles.",
        "exam_tip": "Pregunta clásica de parcial: ¿Cuál motor funciona en Android? -> SQLite."
      },
      {
        "id": 10,
        "prompt": "\"Una vez completada la transacción los datos actualizados ya serán permanentes y confirmados\". ¿A cuál de las propiedades ACID de las transacciones corresponde el concepto dado?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Durabilidad.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Disponibilidad.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Consistencia.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Aislamiento.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Atomicidad.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Durabilidad."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Transacciones y Propiedades ACID",
        "priority": "ALTA",
        "explanation": "Una transacción es una unidad lógica de trabajo indivisible. Sus 4 propiedades ACID son Atomicidad (todo o nada), Consistencia (mantiene la validez del estado), Aislamiento (ejecución sin interferencia mutua) y Durabilidad (cambios confirmados son permanentes).",
        "exam_tip": "Siglo 21 pregunta frecuentemente por la definición exacta de cada propiedad ACID (ej. \"considerarse como una sola\" = Atomicidad; \"permanentes y confirmados\" = Durabilidad)."
      },
      {
        "id": 11,
        "prompt": "¿A qué concepto asociado al modelo relacional hace referencia la Real Academia Española (RAE) en la siguiente definición? \"Cierta repetición de la información contenida en un mensaje, que permite, a pesar de la pérdida de una parte de este, reconstruir su contenido\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Consistencia.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Repetición.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Integridad.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Redundancia.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Reiteración.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Redundancia."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Redundancia.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 12,
        "prompt": "¿Qué ventajas se obtienen al utilizar un motor de base de datos relacional? Selecciona las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Coherencia.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Mayor cantidad de información.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Mayor eficiencia.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Mayor valor informativo.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Independencia.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          2,
          3,
          4
        ],
        "correct_answers": [
          "Coherencia.",
          "Mayor eficiencia.",
          "Mayor valor informativo.",
          "Independencia."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 13,
        "prompt": "Selecciona las 4 (cuatro) respuestas correctas. En el modelo relacional, cuando estás diseñando un modelo de datos, uno de los elementos principales que lo componen y que hay que diseñar adecuadamente son las relaciones o tablas. ¿Cuáles son las propiedades de las relaciones o tablas?",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Tiene dependencia de distribución.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Todas las filas son distintas.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Orden de los atributos.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Un valor único en la intersección de fila y columna.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Orden de las tuplas en una relación.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          1,
          2,
          3,
          4
        ],
        "correct_answers": [
          "Todas las filas son distintas.",
          "Orden de los atributos.",
          "Un valor único en la intersección de fila y columna.",
          "Orden de las tuplas en una relación."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 14,
        "prompt": "\"Es el sistema de bases de datos usado en grandes sitios web como Wikipedia, Facebook, Twitter, etc.\". ¿A qué motor de base de datos corresponde la definición dada?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "PostgreSQL.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "SQL Server.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Oracle.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "SQLite.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "MySQL.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "MySQL."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Motores Web: MySQL",
        "priority": "ALTA",
        "explanation": "MySQL es el motor relacional de código abierto más implementado en sitios web masivos como Wikipedia, Facebook y Twitter.",
        "exam_tip": "Asociación directa para el examen: Sitios gigantes (Facebook, Wikipedia) -> MySQL."
      },
      {
        "id": 15,
        "prompt": "¿Cuáles son las propiedades (comúnmente llamadas ACID) que debe tener una transacción, para cumplir con el propósito de evitar inconsistencia de datos, si alguna de las operaciones que forman parte de ellas no termina exitosamente? Selecciona las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Atomicidad.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Consistencia.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Aislamiento.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Disponibilidad.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Durabilidad.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          1,
          2,
          4
        ],
        "correct_answers": [
          "Atomicidad.",
          "Consistencia.",
          "Aislamiento.",
          "Durabilidad."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Transacciones y Propiedades ACID",
        "priority": "ALTA",
        "explanation": "Una transacción es una unidad lógica de trabajo indivisible. Sus 4 propiedades ACID son Atomicidad (todo o nada), Consistencia (mantiene la validez del estado), Aislamiento (ejecución sin interferencia mutua) y Durabilidad (cambios confirmados son permanentes).",
        "exam_tip": "Siglo 21 pregunta frecuentemente por la definición exacta de cada propiedad ACID (ej. \"considerarse como una sola\" = Atomicidad; \"permanentes y confirmados\" = Durabilidad)."
      },
      {
        "id": 16,
        "prompt": "¿Cuáles son los componentes principales de una base de datos? Selecciona las 3 (tres) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Accesos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Usuarios.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Software.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Consultas.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Hardware.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          1,
          2,
          4
        ],
        "correct_answers": [
          "Usuarios.",
          "Software.",
          "Hardware."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 17,
        "prompt": "¿A cuál de las doce reglas de los sistemas relacionales corresponde el siguiente concepto? \"Toda la información en una base de datos relacional se representa explícitamente en el nivel lógico exactamente de una manera: con valores en tablas\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla del catálogo dinámico en línea basado en el modelo relacional.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Regla de la información.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Regla de la independencia lógica de datos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla del acceso garantizado.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Regla de la independencia física de datos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Regla de la información."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Reglas de Edgar F. Codd",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Regla de la información.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 18,
        "prompt": "¿Cómo se denominan comúnmente los campos dentro del modelo relacional?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Relaciones.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Tuplas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Columnas.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Filas.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Tablas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Columnas."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Columnas.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 19,
        "prompt": "\"Si un sistema relacional tiene un lenguaje de bajo nivel (que procese un registro de cada vez), ese bajo nivel no puede ser usado para saltarse (subvertir) las reglas de integridad y los limitantes expresados en los lenguajes relacionales de más alto nivel (que procesan relaciones o conjunto de filas de cada vez)\". ¿A cuál de las doce reglas de los sistemas relacionales corresponde el concepto dado?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla del acceso garantizado.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Regla de la actualización de vistas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Regla del sublenguaje de datos completo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla de la información.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Regla de la no subversión.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Regla de la no subversión."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Reglas de Edgar F. Codd",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Regla de la no subversión.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 20,
        "prompt": "\"La capacidad de manejar una relación o tabla (base o derivada) como un conjunto se aplica no solo a la recuperación de los datos (consultas), sino también a la inserción, actualización y borrado de datos\". ¿A cuál de las doce reglas de los sistemas relacionales corresponde el concepto?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla de la inserción, actualización y borrado de alto nivel.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Regla de la no subversión.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Regla del catálogo dinámico en línea basado en el modelo relacional.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla de la independencia de distribución.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Regla del acceso garantizado.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Regla de la inserción, actualización y borrado de alto nivel."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Transacciones y Propiedades ACID",
        "priority": "ALTA",
        "explanation": "Una transacción es una unidad lógica de trabajo indivisible. Sus 4 propiedades ACID son Atomicidad (todo o nada), Consistencia (mantiene la validez del estado), Aislamiento (ejecución sin interferencia mutua) y Durabilidad (cambios confirmados son permanentes).",
        "exam_tip": "Siglo 21 pregunta frecuentemente por la definición exacta de cada propiedad ACID (ej. \"considerarse como una sola\" = Atomicidad; \"permanentes y confirmados\" = Durabilidad)."
      },
      {
        "id": 21,
        "prompt": "Al definir una tabla en un modelo relacional, debes tener en cuenta una estimación acerca de su tamaño. ¿A qué se denomina cardinalidad de una tabla en el modelo relacional?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "A la cantidad de atributos que posee una tabla.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "A la cantidad de dominios distintos en la tabla.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "A la cantidad de columnas que tiene una tabla.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "A la cantidad de filas que tiene una tabla.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Al número de claves primarias definidas en la tabla.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "A la cantidad de filas que tiene una tabla."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Estructura Formal de la Relación",
        "priority": "ALTA",
        "explanation": "En el modelo relacional: Cabecera = conjunto de nombres de atributos; Cuerpo = conjunto de tuplas (filas); Grado = número de atributos (columnas); Cardinalidad = número de tuplas (filas).",
        "exam_tip": "No confundir: Grado = Columnas (vertical). Cardinalidad = Filas (horizontal). Cuerpo = Conjunto de filas."
      },
      {
        "id": 22,
        "prompt": "En el modelo relacional, uno de los componentes iniciales para diseñar un modelo de datos es conocer los elementos que lo componen. ¿Cuál de las siguientes opciones refiere al nombre del agrupamiento de los objetos de bases de datos para facilitar la administración de los mismos?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Instancia.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Esquema.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Catálogo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Dominio.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Usuario de bases de datos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Esquema."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Esquema.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 23,
        "prompt": "Completa el enunciado. En el modelo relacional, una tupla es:",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Una colección ordenada de elementos iguales.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Una lista de valores del dominio de la relación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Una colección no ordenada de elementos diferentes.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Una colección ordenada de elementos diferentes.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Un conjunto ordenado de atributos de la relación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Una colección no ordenada de elementos diferentes."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructura Formal de la Relación",
        "priority": "ALTA",
        "explanation": "En el modelo relacional: Cabecera = conjunto de nombres de atributos; Cuerpo = conjunto de tuplas (filas); Grado = número de atributos (columnas); Cardinalidad = número de tuplas (filas).",
        "exam_tip": "No confundir: Grado = Columnas (vertical). Cardinalidad = Filas (horizontal). Cuerpo = Conjunto de filas."
      },
      {
        "id": 24,
        "prompt": "Indica la palabra faltante en el siguiente concepto. \"El cálculo relacional es un lenguaje de consulta de tipo ___________ que describe la respuesta deseada sobre una base de datos sin especificar cómo obtenerla\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Relacional.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Metódico.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Procedimental.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Imperativo.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Declarativo.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Declarativo."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Cálculo vs Álgebra Relacional",
        "priority": "ALTA",
        "explanation": "El cálculo relacional es un lenguaje DECLARATIVO (especifica QUÉ resultado se desea sin indicar CÓMO obtenerlo), mientras que el álgebra relacional es PROCEDIMENTAL.",
        "exam_tip": "Cálculo = Declarativo. Álgebra = Procedimental."
      },
      {
        "id": 25,
        "prompt": "En la tarea de diseño de modelo de datos relacionales se debe confiar en la consistencia de los datos almacenados en ella. ¿A qué hace referencia el concepto de Inconsistencia de datos?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Todas las copias repetidas de un registro tienen distinta información.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Todas las copias repetidas de un registro tienen la misma información.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Algunas de las copias repetidas de un registro tienen la misma información.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Las copias repetidas de un registro se almacenan en distintos archivos.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Algunas copias del registro presentan información incompleta.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Todas las copias repetidas de un registro tienen distinta información."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Arquitectura, Motores y Propiedades ACID",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Todas las copias repetidas de un registro tienen distinta información.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 26,
        "prompt": "Según el ranking de bases de datos más votadas, ¿qué bases ocupan los primeros puestos? Selecciona las 4 (cuatro) opciones correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "PostgreSQL.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "MySQL.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "SQLite.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "SQL Server.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Oracle.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          1,
          3,
          4
        ],
        "correct_answers": [
          "PostgreSQL.",
          "MySQL.",
          "SQL Server.",
          "Oracle."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 27,
        "prompt": "En seguridad informática de las aplicaciones de bases de datos, debes considerar numerosos elementos para lograr un diseño adecuado. Con respecto a esto, lee la siguiente definición: \"Es la palabra que combina mayúsculas, minúsculas, signos de puntuación y números para conformar una palabra difícil de forzar en un ataque contra la seguridad de la base\". ¿A qué concepto refiere la definición?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Clave primaria.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Contraseña o password.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Nombre de tabla.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Nombre de usuario.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Clave candidata.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Contraseña o password."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Contraseña o password.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 28,
        "prompt": "¿A cuál de las doce reglas de los sistemas relacionales corresponde el siguiente concepto? \"Los limitantes de integridad específicos para una determinada base de datos relacional deben poder ser definidos en el sublenguaje de datos relacional, y almacenables en el catálogo, no en los programas de aplicación\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla de la actualización de vistas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Regla de la independencia física de datos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Regla de la independencia de integridad.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Regla de la no subversión.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Regla del catálogo dinámico en línea basado en el modelo relacional.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Regla de la independencia de integridad."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Reglas de Edgar F. Codd",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Regla de la independencia de integridad.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 29,
        "prompt": "Imagina que estás diseñando un modelo de datos para construir una aplicación que use bases de datos relacionales. Tienes que definir una de las características principales de las tablas. ¿Para qué se utilizan las \"claves primarias\" en el modelo relacional?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Para definir el dominio de cada atributo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Para mantener la integridad referencial entre tablas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Para relacionar una tupla con otra.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Para ordenar las filas de la tabla.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Para distinguir una tupla de otra.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Para distinguir una tupla de otra."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Para distinguir una tupla de otra.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 30,
        "prompt": "¿A cuál de las doce reglas de los sistemas relacionales corresponde el siguiente concepto? \"Los programas de aplicación y actividades del terminal permanecen inalterados a nivel lógico cuando quiera que se realicen cambios a las tablas base que preserven la información\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla de la independencia lógica de datos.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Regla de la independencia física de datos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Regla del acceso garantizado.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla de la independencia de integridad.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Regla de la actualización de vistas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Regla de la independencia lógica de datos."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Reglas de Edgar F. Codd",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Regla de la independencia lógica de datos.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 31,
        "prompt": "¿Cuáles son las herramientas de desarrollo que se presentan para acceder a los datos, realizar consultas y crear objetos en la base? Selecciona las 3 (tres) opciones correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "SQLite Studio.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "SQL Developer.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Eclipse.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "MySQL Workbench.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Netbeans.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0,
          1,
          3
        ],
        "correct_answers": [
          "SQLite Studio.",
          "SQL Developer.",
          "MySQL Workbench."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 32,
        "prompt": "\"Para todos y cada uno de los datos (valores atómicos) de una base de datos relacional, en adelante BDR, se garantiza que son accesibles a nivel lógico utilizando una combinación de nombre de tabla, valor de clave primaria y nombre de columna\". ¿A cuál de las doce reglas de los sistemas relacionales corresponde el concepto dado?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla de la información.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Regla del acceso garantizado.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Regla de la actualización de vistas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla del catálogo dinámico en línea basado en el modelo relacional.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Regla de la no subversión.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Regla del acceso garantizado."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Normalización: 1FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 1FN si y solo si todos sus atributos tienen valores atómicos e indivisibles (sin grupos repetitivos ni atributos compuestos/multivaluados).",
        "exam_tip": "Valor atómico = 1FN."
      },
      {
        "id": 33,
        "prompt": "Indica la palabra que falta en el siguiente concepto: \"Una ________ es una unidad de trabajo compuesta por diversas tareas, cuyo resultado final debe ser que se ejecuten todas o ninguna de ellas\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Operación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Procedimiento.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Transacción.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Consulta.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Función.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Transacción."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Transacción.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 34,
        "prompt": "¿A cuál de las propiedades ACID de las transacciones corresponde el siguiente concepto?: \"Las operaciones que componen una transacción deben considerarse como una sola\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Consistencia.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Aislamiento.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Disponibilidad.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Durabilidad.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Atomicidad.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Atomicidad."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Transacciones y Propiedades ACID",
        "priority": "ALTA",
        "explanation": "Una transacción es una unidad lógica de trabajo indivisible. Sus 4 propiedades ACID son Atomicidad (todo o nada), Consistencia (mantiene la validez del estado), Aislamiento (ejecución sin interferencia mutua) y Durabilidad (cambios confirmados son permanentes).",
        "exam_tip": "Siglo 21 pregunta frecuentemente por la definición exacta de cada propiedad ACID (ej. \"considerarse como una sola\" = Atomicidad; \"permanentes y confirmados\" = Durabilidad)."
      },
      {
        "id": 35,
        "prompt": "Dentro del modelo relacional existen estructuras conocidas como relaciones o tablas. Dentro de ellas, se guardan los distintos hechos o casos que se deben registrar en estos componentes. ¿Cómo son comúnmente denominados los registros o filas?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Tuplas.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Esquemas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Atributos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Dominios.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Columnas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Tuplas."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Tuplas.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 36,
        "prompt": "¿A cuál de las doce reglas de los sistemas relacionales corresponde el siguiente concepto? \"Los programas de aplicación y actividades del terminal permanecen inalterados a nivel lógico cuando quiera que se realicen cambios en las representaciones de almacenamiento o métodos de acceso\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla del acceso garantizado.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Regla de la no subversión.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Regla de la independencia lógica de datos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla de la independencia física de datos.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Regla de la inserción, actualización y borrado de alto nivel.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Regla de la independencia física de datos."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Reglas de Edgar F. Codd",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Regla de la independencia física de datos.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 37,
        "prompt": "¿A cuál de las doce reglas de los sistemas relacionales corresponde el siguiente concepto? \"La descripción de la base de datos se representa a nivel lógico de la misma manera que los datos normales, de modo que los usuarios autorizados pueden aplicar el mismo lenguaje relacional a su consulta, igual que lo aplican a los datos normales\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Regla de la actualización de vistas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Regla del catálogo dinámico en línea basado en el modelo relacional.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Regla de la independencia de integridad.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla de la inserción, actualización y borrado de alto nivel.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Regla de la independencia de distribución.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Regla del catálogo dinámico en línea basado en el modelo relacional."
        ],
        "module": "M1",
        "lecture": "L4",
        "lecture_name": "Módulo 1 - Lectura 4: Las 12 Reglas de Codd",
        "topic": "Reglas de Edgar F. Codd",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Regla del catálogo dinámico en línea basado en el modelo relacional.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 38,
        "prompt": "En el modelo relacional, uno de los conceptos iniciales para entender el modelo de datos es conocer los elementos que lo componen. ¿Cuál de las siguientes opciones corresponde al concepto asociado a la siguiente definición?: \"Es una propiedad que caracteriza a cada entidad, como el color o tamaño de un artículo, el apellido o el legajo de un estudiante, etcétera\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Grado de la relación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Instancia de la relación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Atributo o columna de una relación.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Cabecera de la relación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Cuerpo de la relación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Atributo o columna de una relación."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Atributo o columna de una relación.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 39,
        "prompt": "¿Cuáles son las condiciones que debe cumplir un atributo o conjunto de atributos de una relación para ser clave candidata? Selecciona las 2 (dos) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Unicidad.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Redundancia.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Transparencia.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Disponibilidad.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Minimalidad.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          4
        ],
        "correct_answers": [
          "Unicidad.",
          "Minimalidad."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 40,
        "prompt": "\"Es la mínima unidad que se almacena en una relación\". ¿Cuál de las siguientes opciones corresponde al concepto asociado a la definición dada?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Dato.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Tupla.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Dominio.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Campo.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Atributo.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Dato."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Dato.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 41,
        "prompt": "En MySQL Workbench, ¿qué opción permite conectar a un esquema que ya existe en la base, para poder construir un modelo con las tablas que este contiene?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Model Builder.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Forward Engineer.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Schema Inspector.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Reverse Engineer.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Synchronize.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Reverse Engineer."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Reverse Engineer.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 42,
        "prompt": "Los valores que puede contener una clave foránea, deben existir en la clave primaria de la tabla referenciada o el valor null.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": true
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "VERDADERO"
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"VERDADERO\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 43,
        "prompt": "¿A qué concepto corresponde la siguiente definición? \"Es un hecho en la relación que contiene datos de la realidad.\"",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Clave primaria de la relación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Registro de datos de la base.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Fila o tupla.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Tabla de la relación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Atributo o columna.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Fila o tupla."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Fila o tupla.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 44,
        "prompt": "Tienes dos tablas de las que necesitas mostrar algunas de sus filas como una sola tabla. ¿Cómo se llama la operación del álgebra relacional que proporciona todas las tuplas no repetidas de",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Diferencia.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Producto cartesiano.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Intersección.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Sumatoria.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "UNIÓN.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "UNIÓN."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Estructura Formal de la Relación",
        "priority": "ALTA",
        "explanation": "En el modelo relacional: Cabecera = conjunto de nombres de atributos; Cuerpo = conjunto de tuplas (filas); Grado = número de atributos (columnas); Cardinalidad = número de tuplas (filas).",
        "exam_tip": "No confundir: Grado = Columnas (vertical). Cardinalidad = Filas (horizontal). Cuerpo = Conjunto de filas."
      },
      {
        "id": 45,
        "prompt": "¿Cuál es la operación del álgebra relacional que se escribe Y x W, donde Y W son tablas y x el operador?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Producto cartesiano.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Diferencia.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Multiplicación.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Unión.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Intersección.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Producto cartesiano."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Producto cartesiano.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 46,
        "prompt": "Un requerimiento del negocio es tomar algunas columnas de filas que están en dos tablas diferentes, por lo que se debe realizar una operación de unión. En dicha operación, ¿qué condición deben tener las columnas de ambas consultas?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Deben tener la misma cantidad de filas en ambas consultas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Deben estar ordenadas de la misma manera en ambas consultas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Deben tener la misma longitud de datos en ambas consultas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Debe coincidir el tipo de datos de las columnas que están en el mismo lugar del select.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Deben llamarse igual en ambas consultas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Debe coincidir el tipo de datos de las columnas que están en el mismo lugar del select."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Debe coincidir el tipo de datos de las columnas que están en el mismo lugar del select.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 47,
        "prompt": "¿Cuáles de los siguientes elementos forman parte del modelo relacional? Selecciona las 4 (cuatro) opciones correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Entidades.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Clave primaria.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Relaciones.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Atributos.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Clave secundaria.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0,
          1,
          2,
          3
        ],
        "correct_answers": [
          "Entidades.",
          "Clave primaria.",
          "Relaciones.",
          "Atributos."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 48,
        "prompt": "En el modelo relacional, tienes que diseñar las tablas o relaciones para que puedan almacenar las cosas importantes del mundo real con existencia física o conceptual. ¿Cómo se denominan estas cosas importantes referidas en el Situación?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Relaciones.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Clave secundaria.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Entidades.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Clave primaria.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Atributos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Entidades."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Entidades.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 49,
        "prompt": "En el modelo relacional, al diseñar un modelo de datos con sus respectivas relaciones, uno de los componentes tiene mucha importancia por su contenido. ¿Qué contiene la cabecera de una relación?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "La primera tupla de una relación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Los valores de las claves primarias de la relación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "El conjunto de dominios definidos en la relación.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "La cantidad de filas que tiene la relación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Los nombres de los atributos que forman la relación.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Los nombres de los atributos que forman la relación."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructura Formal de la Relación",
        "priority": "ALTA",
        "explanation": "En el modelo relacional: Cabecera = conjunto de nombres de atributos; Cuerpo = conjunto de tuplas (filas); Grado = número de atributos (columnas); Cardinalidad = número de tuplas (filas).",
        "exam_tip": "No confundir: Grado = Columnas (vertical). Cardinalidad = Filas (horizontal). Cuerpo = Conjunto de filas."
      },
      {
        "id": 50,
        "prompt": "La regla de integridad de entidad en el modelo relacional, hace referencia a que los atributos de la \"clave primaria\" pueden asumir valor nulo.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "FALSO"
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"FALSO\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 51,
        "prompt": "Cuando tienes que usar el modelo relacional para describir la realidad en las estructuras del modelo, hay dos elementos muy importantes: las entidades y sus atributos. ¿Cuál es la relación entre entidad y atributo?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Las entidades describen los atributos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Los atributos determinan qué entidades participan en cada relación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Las entidades y los atributos son conceptos equivalentes en el modelo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Los atributos describen las propiedades de cada entidad.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Las entidades se componen a partir de las relaciones entre atributos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Los atributos describen las propiedades de cada entidad."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Los atributos describen las propiedades de cada entidad.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 52,
        "prompt": "¿Por qué se debe tener cuidado al seleccionar las columnas que forman una clave candidata?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Porque es única para toda la base de datos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Porque de todas las claves candidatas se determina la clave primaria.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Porque la clave candidata es la forma de identificar a cada fila.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Porque la clave candidata no puede ser reemplazada.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Porque la clave candidata es única.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Porque de todas las claves candidatas se determina la clave primaria."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 53,
        "prompt": "Una clave primaria es la o las columnas que permiten identificar unívocamente una tupla en una tabla.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": true
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "VERDADERO"
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructura Formal de la Relación",
        "priority": "ALTA",
        "explanation": "En el modelo relacional: Cabecera = conjunto de nombres de atributos; Cuerpo = conjunto de tuplas (filas); Grado = número de atributos (columnas); Cardinalidad = número de tuplas (filas).",
        "exam_tip": "No confundir: Grado = Columnas (vertical). Cardinalidad = Filas (horizontal). Cuerpo = Conjunto de filas."
      },
      {
        "id": 54,
        "prompt": "¿Cómo se denominan usualmente las expresiones del álgebra relacional?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Consultas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Predicados.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Cálculos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Relaciones.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Operaciones.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Operaciones."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Operaciones.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 55,
        "prompt": "Es necesario, por requerimientos del usuario, que solamente se muestren algunas columnas de una tabla. Se va a utilizar álgebra relacional para plantear la sentencia necesaria. ¿Cuál es la operación de álgebra relacional que permite extraer columnas de una relación, dando como resultado un subconjunto vertical de atributos de la relación?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Proyección.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Unión.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Selección.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Combinación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "División.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Proyección."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Proyección.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 56,
        "prompt": "Al diseñar una relación que combine filas y atributos, sobre estos últimos es necesario definir los valores que contendrán los atributos. ¿Cuál de las siguientes opciones corresponde al concepto asociado a la siguiente definición?: \"Es el conjunto de valores posibles de un atributo en la relación\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Cuerpo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Grado.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Esquema.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Dominio.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Cabecera.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Dominio."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Dominio.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 57,
        "prompt": "¿Qué motores de bases de datos se utilizan en el desarrollo de la materia? Seleccione la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "SQL Server, PostgreSQL y SQLite.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Oracle, MySQL y SQLite.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "MySQL, PostgreSQL y SQL Server.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Oracle, MySQL y SQL Server.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Oracle, PostgreSql y MySQL.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Oracle, MySQL y SQLite."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 58,
        "prompt": "Al diseñar una consulta que traiga filas de varias tablas, te encuentras con una operación de álgebra relacional llamada unión. ¿Qué permite mostrar esta operación llamada unión?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Las tuplas que están en ambas relaciones.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Las tuplas que aparecen repetidas en las relaciones unidas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Las tuplas de las relaciones unidas sin repeticiones.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Las tuplas combinadas de a pares en una sola tupla de las relaciones unidas.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Los atributos que cumplen una condición.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Las tuplas de las relaciones unidas sin repeticiones."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Las tuplas de las relaciones unidas sin repeticiones.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 59,
        "prompt": "¿Cuáles son las operaciones del álgebra relacional de la teoría de conjuntos que se aplican a las relaciones? Selecciona las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Diferencia.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Sumatoria.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Producto cartesiano.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Unión.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Intersección.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          2,
          3,
          4
        ],
        "correct_answers": [
          "Diferencia.",
          "Producto cartesiano.",
          "Unión.",
          "Intersección."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 60,
        "prompt": "¿Qué herramientas disponibles en el mercado permiten administrar MySQL? Selecciona las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "SQL Developer.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Heidi SQL.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Sequel Pro.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "MySQL Workbench.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Navicat for MySQL.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          1,
          2,
          3,
          4
        ],
        "correct_answers": [
          "Heidi SQL.",
          "Sequel Pro.",
          "MySQL Workbench.",
          "Navicat for MySQL."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 61,
        "prompt": "¿Cómo se llama la herramienta recomendada para trabajar con la base de datos Oracle?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "MySQL Workbench.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Netbeans.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Workbench.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "SQL Developer.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "SQLite Studio.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "SQL Developer."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Arquitectura, Motores y Propiedades ACID",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"SQL Developer.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 62,
        "prompt": "Tienes que desarrollar una aplicación determinada contra una base de datos y existen varios tipos de lenguajes de programación. ¿Cuál es el lenguaje más común para construir consultas a bases de datos relacionales?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Álgebra relacional.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "SQL.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Cálculo relacional.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "PL/SQL.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "UML.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "SQL."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"SQL.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 63,
        "prompt": "Al diseñar una consulta, te encuentras con la necesidad de mostrar parcialmente el contenido de una tabla con una operación de álgebra relacional. ¿Qué permite mostrar la operación proyección?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Un subconjunto de filas seleccionadas de la relación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Un subconjunto de tuplas que no cumplen una condición.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Algunos atributos de una relación.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "El resultado de combinar dos o más relaciones.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Las tuplas que cumplen una condición dada.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Algunos atributos de una relación."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Álgebra Relacional: Proyección",
        "priority": "ALTA",
        "explanation": "La proyección (pi) selecciona columnas específicas de una relación, generando un subconjunto VERTICAL de atributos y eliminando duplicados.",
        "exam_tip": "Proyección = Columnas / Subconjunto Vertical. Selección = Filas / Subconjunto Horizontal."
      },
      {
        "id": 64,
        "prompt": "Completa el enunciado. Cada operador de álgebra relacional acepta una o dos relaciones y retorna:",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Los resultados como tuplas de dos relaciones.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Los resultados como atributos en una sola tupla.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Dos o más relaciones como resultado.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Un atributo como resultado.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Otra relación como resultado.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Otra relación como resultado."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Otra relación como resultado.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 65,
        "prompt": "¿Cuáles de las siguientes opciones corresponden a motores de bases de datos relacionales de uso habitual? Selecciona las 3 (tres) opciones correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "SQLite.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "PostgreSQL.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Oracle.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "MySQL.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "SQL Server.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0,
          2,
          3
        ],
        "correct_answers": [
          "SQLite.",
          "Oracle.",
          "MySQL."
        ],
        "module": "M1",
        "lecture": "L1",
        "lecture_name": "Módulo 1 - Lectura 1: Motores de Bases de Datos",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 66,
        "prompt": "En el modelo relacional tienes la posibilidad de usar varios lenguajes de distintos tipos y características. ¿Cuál es la opción que corresponde a la siguiente afirmación?: \"Es un conjunto de operaciones que describen paso a paso cómo computar una respuesta sobre las relaciones, tal y como estas son definidas en el modelo relacional\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "El lenguaje de manipulación de datos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "El lenguaje SQL.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "El lenguaje de consulta estructurado.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "El álgebra relacional.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "El cálculo relacional.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "El álgebra relacional."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"El álgebra relacional.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 67,
        "prompt": "Al diseñar una consulta que analice las filas de dos tablas usarás una operación de álgebra relacional: intersección. Completa con una de las siguientes opciones la afirmación: \"La operación intersección entre dos relaciones, R y S devuelve...\"",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Todas las tuplas de R.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Las tuplas de R y S que están en ambas relaciones.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Las tuplas que están en S pero no en R.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Todas las tuplas de S.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Las tuplas que están en R pero no en S.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Las tuplas de R y S que están en ambas relaciones."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Las tuplas de R y S que están en ambas relaciones.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 68,
        "prompt": "Al diseñar una consulta que combine filas relacionadas de varias tablas, usarás una operación de álgebra relacional. ¿Qué operación usarás?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Combinación, ya que permite combinar y mostrar atributos de las tuplas que cumplen una condición.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Combinación, ya que muestra las tuplas de ambas relaciones que no se relacionan entre sí.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Combinación, ya que permite combinar y mostrar tuplas relacionadas de dos relaciones en una sola tupla que cumplen con una condición.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Selección, ya que devuelve las tuplas que cumplen una condición sobre una sola relación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Producto cartesiano, ya que combina todas las filas sin aplicar ninguna condición.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Combinación, ya que permite combinar y mostrar tuplas relacionadas de dos relaciones en una sola tupla que cumplen con una condición."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Combinación, ya que permite combinar y mostrar tuplas relacionadas de dos relaciones en una sola tupla que cumplen con una condición.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 69,
        "prompt": "Al diseñar una consulta que analice y seleccione filas relacionadas de dos tablas usarás una operación del álgebra relacional: proyección. Completa con una de las siguientes opciones la afirmación: \"La operación diferencia de dos relaciones R y S devuelve...\"",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Las filas que están en R y en S a la vez.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Todas las filas que están en S, pero no en R.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Las filas que están en R o en S, sin repeticiones.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Todas las filas de R y S.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Todas las filas que están en R, pero no S.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Todas las filas que están en R, pero no S."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Álgebra Relacional: Proyección",
        "priority": "ALTA",
        "explanation": "La proyección (pi) selecciona columnas específicas de una relación, generando un subconjunto VERTICAL de atributos y eliminando duplicados.",
        "exam_tip": "Proyección = Columnas / Subconjunto Vertical. Selección = Filas / Subconjunto Horizontal."
      },
      {
        "id": 70,
        "prompt": "Al diseñar una consulta que analice las filas relacionadas de dos tablas para determinar las filas que coincidan en un valor, se puede usar una operación del álgebra relacional: división. Completa con una de las siguientes opciones la afirmación: \"La operación división de dos relaciones, R y S devuelve...\"",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Todas las tuplas de R donde un valor dado exista en una tupla de S.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Las tuplas de R y S combinadas en una sola.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Las tuplas de R que no coinciden con ninguna tupla de S.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Todas las tuplas de S, sin importar la condición.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Todas las tuplas de R, sin importar la condición.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Todas las tuplas de R donde un valor dado exista en una tupla de S."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Álgebra Relacional: División",
        "priority": "ALTA",
        "explanation": "La división (R / S) devuelve las tuplas de R que están asociadas con todas y cada una de las tuplas de S.",
        "exam_tip": "División = Asociado con todas las tuplas de la otra relación."
      },
      {
        "id": 71,
        "prompt": "Indica las palabras faltantes en el siguiente concepto de modelo relacional: \"Los sistemas de bases de datos deberían presentarse a los usuarios con una visión de los datos organizados en estructuras llamadas ________ definidas como conjuntos de _______ y no como series o secuencias de objetos, con lo que el orden no es importante\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Entidades/Atributos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Archivos/Registros.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Archivos/Elementos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Relaciones/Tuplas.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Tablas/Columnas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Relaciones/Tuplas."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Relaciones/Tuplas.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 72,
        "prompt": "¿Cuáles son los dos lenguajes formales que se usan para acceder y manipular la información y que derivan en el lenguaje relacional SQL? Seleccione la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Álgebra relacional y SQL.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Álgebra relacional y cálculo relacional.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "SQL y PL/SQL.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Lenguaje de definición y lenguaje de manipulación de datos.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "SQL y cálculo relacional.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Álgebra relacional y cálculo relacional."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 73,
        "prompt": "Cuando tienes que planear cómo va a ser una consulta que traiga determinados resultados y vas a usar el álgebra relacional, es importante tener en claro un concepto en particular. ¿Qué es lo que permite mostrar la operación del álgebra relacional \"SELECCIÓN\"?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Las tuplas que combinan dos relaciones.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Todas las tuplas, pero solamente algunos de sus atributos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "El subconjunto de tuplas que cumplen una condición.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Todas las tuplas de la relación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Algunos atributos de una relación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "El subconjunto de tuplas que cumplen una condición."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 74,
        "prompt": "¿Cómo se denominan los atributos que pueden dividirse en subpartes? Seleccione la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Derivados.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Monovalorados.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Multivalorados.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Simples.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Compuestos.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Compuestos."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 75,
        "prompt": "¿Cómo deben ser los atributos de una tabla para que esta pueda ser considerada en primera forma normal? Seleccione la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Univalorados.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Compuestos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Simples.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Multivalorados.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Derivados.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Univalorados."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 1FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 1FN si y solo si todos sus atributos tienen valores atómicos e indivisibles (sin grupos repetitivos ni atributos compuestos/multivaluados).",
        "exam_tip": "Valor atómico = 1FN."
      },
      {
        "id": 76,
        "prompt": "¿A qué característica del modelo E-R extendido hace referencia el siguiente concepto? \"Es una relación contenedora que existe entre una tabla de nivel más alto y uno o más tablas de nivel más bajo\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Con una generalización.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Con una simplificación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Con una agregación.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Generalización.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Herencia.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Generalización."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Generalización.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 77,
        "prompt": "Indica la palabra faltante en el siguiente concepto: \"Los atributos de las tablas de nivel más alto se dice que son _________ por las tablas de nivel más bajo\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Especificados.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Heredados.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Generados.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Definidos.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Declarados.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Heredados."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Heredados.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 78,
        "prompt": "\"En las tablas de nivel más bajo, la relación miembro se evalúa en función de si una fila satisface o no una condición explícita o predicado\". ¿A qué tipo de restricción sobre las generalizaciones hace referencia el concepto dado?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Definido por el usuario.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Definido por disjunto.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Definido por condición.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Definido por herencia.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Definido por solapamiento.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Definido por condición."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Definido por condición.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 79,
        "prompt": "Identifica la palabra que completa el siguiente concepto: \"Una ______ permite identificar una fila para distinguir las filas entre sí\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Atributo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Relación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Dominio.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Tupla.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Clave.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Clave."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Clave.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 80,
        "prompt": "¿A qué característica del modelo E-R extendido hace referencia el siguiente concepto? \"Un conjunto de entidades puede incluir subgrupos de entidades que se diferencian de alguna forma de las otras entidades del conjunto\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Especificación.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Generalización.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Participación.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Agregación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Cardinalidad.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Especificación."
        ],
        "module": "M1",
        "lecture": "L3",
        "lecture_name": "Módulo 1 - Lectura 3: Álgebra y Cálculo Relacional",
        "topic": "Operaciones Relacionales y de Conjuntos",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Especificación.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 81,
        "prompt": "\"Una fila en A se asocia con cualquier número de filas (ninguna o varias) en B, y una fila en B se asocia con cualquier número de filas (ninguna o varias) en A\". ¿Qué tipo de cardinalidad se manifiesta en el apartado?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Uno a varios.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Uno a ninguno.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Uno a uno.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Varios a varios.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Varios a uno.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Varios a varios."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Varios a varios.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 82,
        "prompt": "Indica el tipo de cardinalidad que se manifiesta en el siguiente apartado: \"Una fila en A se asocia con a lo sumo una fila en B, y una fila en B se asocia con a lo sumo una fila en A\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Varios a varios.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Uno a uno.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Uno a ninguno.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Uno a varios.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Varios a uno.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Uno a uno."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Uno a uno.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 83,
        "prompt": "Indica el tipo de cardinalidad que se manifiesta en el siguiente apartado: \"Una fila en A se asocia con cualquier número de filas en B (ninguna o varias). Una fila en B, sin embargo, se puede asociar con, a lo sumo, una fila en A\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Uno a ninguno.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Varios a varios.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Uno a varios.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Varios a uno.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Uno a uno.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Uno a varios."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Uno a varios.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 84,
        "prompt": "\"Requiere que una entidad no pertenezca a más de un conjunto de entidades de nivel más bajo\". ¿A qué tipo de restricción sobre las generalizaciones hace referencia el concepto dado?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Definido por condición.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Parcial.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Solapado.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Definido por el usuario.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Disjunto.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Disjunto."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Disjunto.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 85,
        "prompt": "\"Es una clase o categoría de cosa u objeto en el mundo real que es distinguible de todos los demás objetos\". ¿A qué concepto refiere la definición dada?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Entidad.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Instancia.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Elementos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Atributo.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Relación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Entidad."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Entidad.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 86,
        "prompt": "\"Los conjuntos de entidades de nivel más bajo definidos por el usuario no están restringidos mediante una condición de miembro; en cambio, las entidades se asignan a un conjunto de entidades dado por el usuario de la base de datos\". ¿A qué tipo de restricción sobre las generalizaciones hace referencia el concepto?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Definida por condición.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Definida por disyunción.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Definida por solapamiento.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Definida por el usuario.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Definida por el administrador de la base.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Definida por el usuario."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Definida por el usuario.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 87,
        "prompt": "¿Cómo se denomina el conjunto de relaciones donde la entidad participa en una relación más de una vez con diferentes papeles?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Compuesto.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Recursivo.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Terciario.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Descriptivo.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Binario.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Recursivo."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Recursivo.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 88,
        "prompt": "Indica el tipo de cardinalidad que se manifiesta en el siguiente apartado: \"Una fila en A se asocia con, a lo sumo, una fila en B. Una fila en B, sin embargo, se puede asociar con cualquier número de filas (ninguna o varias) en A\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Varios a varios.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Uno a uno.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Varios a uno.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Uno a ninguno.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Uno a varios.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Varios a uno."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Varios a uno.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 89,
        "prompt": "¿A qué se denomina claves candidatas? Seleccione la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Superclaves compuestas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Superclaves máximas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Claves foráneas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Claves primarias.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Superclaves mínimas.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Superclaves mínimas."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 90,
        "prompt": "¿Cómo se denominan los atributos que tienen un conjunto de valores para una entidad específica? Seleccione la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Multivalorados.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Compuestos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Derivados.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Monovalorados.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Máximos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Multivalorados."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 91,
        "prompt": "¿Qué aspecto de la base de datos se representa a través de un diagrama entidad-relación?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "La estructura de acceso a los datos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "La estructura de almacenamiento.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "La estructura física.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "La estructura lógica.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "La estructura de índices.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "La estructura lógica."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"La estructura lógica.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 92,
        "prompt": "¿Cómo se denomina el conjunto de uno o más atributos que, tomados colectivamente, permiten identificar de forma única una entidad en el conjunto de entidades?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Clave principal.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Superclave.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Clave foránea.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Clave secundaria.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Clave primaria.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Superclave."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Superclave.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 93,
        "prompt": "¿Cómo se denomina el conjunto de relaciones que implica dos tablas?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Descriptivo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Compuesto.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Binario.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Terciario.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Recursivo.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Binario."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Binario.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 94,
        "prompt": "¿A qué característica del modelo E-R extendido hace referencia el siguiente concepto? \"Agrupa una parte de un diagrama ER en un único conjunto de entidades, permitiendo tratar el conjunto de entidades como una unidad única sin importar los detalles de su estructura interna\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Especificación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Modularidad.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Generalización.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Participación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Agregación.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Agregación."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Agregación.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 95,
        "prompt": "Indica la palabra que completa el concepto de restricciones: \"La _____________ expresa el número de filas a las que otra fila puede estar asociada por vía de un conjunto de relaciones\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Cardinalidad.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Grado.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Dominio.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Instancia.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Participación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Cardinalidad."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Cardinalidad.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 96,
        "prompt": "¿Cómo se denominan los atributos que tiene un valor para una fila específica? Seleccione la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Multivalorados.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Derivados.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Compuestos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Monovalorados.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Univalorados.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Monovalorados."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 97,
        "prompt": "Para un conjunto de relaciones entre las tablas A y B, ¿cuáles serían sus posibles correspondencias de cardinalidades? Seleccione las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Varios a uno.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Varios a varios.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Uno a varios.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Uno a ninguno.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Uno a uno.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          1,
          2,
          4
        ],
        "correct_answers": [
          "Varios a uno.",
          "Varios a varios.",
          "Uno a varios.",
          "Uno a uno."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 98,
        "prompt": "Los valores de los atributos de una fila deben ser tales que permitan identificar a la fila, a pesar de que se permite que un par de filas tengan exactamente los mismos valores de sus atributos.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "FALSO"
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"FALSO\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 99,
        "prompt": "¿A qué se denomina participación de una relación entre entidades?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "El número de entidades que participan en la relación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Una propiedad que caracteriza a cada entidad.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "La cantidad de instancias de cada conjunto de entidades.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Una asociación entre entidades.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Una asociación entre un conjunto de entidades.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Una asociación entre un conjunto de entidades."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Una asociación entre un conjunto de entidades.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 100,
        "prompt": "¿Cómo se denomina el número de tablas que participan en un conjunto de relaciones?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Grado.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Dominio.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Cardinalidad.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Rango.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Participación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Grado."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Grado.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 101,
        "prompt": "¿En qué forma normal se encuentra una relación si y solo si, todo determinante es una clave candidata?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "2FN.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "1FN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "4FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "BCFN.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "3FN.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "BCFN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: Boyce-Codd (BCFN)",
        "priority": "ALTA",
        "explanation": "Una tabla está en FNBC/BCFN si y solo si todo determinante (el lado izquierdo de una dependencia funcional no trivial) es una clave candidata.",
        "exam_tip": "\"Todo determinante es una clave candidata\" = BCFN."
      },
      {
        "id": 102,
        "prompt": "Indica la palabra que falta en el siguiente concepto: \"En el proceso de ______________ se debe ir comprobando que cada relación cumple una serie de reglas que se basan en la clave primaria y las dependencias funcionales. Si una regla no se cumple, la relación se debe descomponer en varias relaciones que sí la cumplan\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Diseño.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Normalización.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Generalización.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Implementación.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Modelado.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Normalización."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Normalización.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 103,
        "prompt": "¿En qué forma normal como mínimo, se encuentra una relación si todos los dominios de la misma contienen valores atómicos, es decir, no hay grupos repetitivos?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "2FN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "1FN.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "4FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "3FN.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "1FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 1FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 1FN si y solo si todos sus atributos tienen valores atómicos e indivisibles (sin grupos repetitivos ni atributos compuestos/multivaluados).",
        "exam_tip": "Valor atómico = 1FN."
      },
      {
        "id": 104,
        "prompt": "¿En qué forma normal se encuentra una relación si (solo si) cada atributo que no está en la clave primaria no depende transitivamente de la clave primaria?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "1FN solamente.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "2FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "1FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "3FN.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "3FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 3FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 3FN si está en 2FN y no existen dependencias transitivas entre atributos no clave (ningún atributo no primo depende transitivamente de la PK).",
        "exam_tip": "\"No depende transitivamente de la clave primaria\" = 3FN."
      },
      {
        "id": 105,
        "prompt": "¿En qué forma normal se encuentra una relación si cada atributo que no está en la clave primaria es dependiente de la clave primaria completa?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "2FN.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "4FN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "1FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "3FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "BCFN.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "2FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 2FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 2FN si está en 1FN y cada atributo no primo depende funcionalmente de la clave primaria COMPLETA (no hay dependencias parciales).",
        "exam_tip": "\"Dependiente de la clave primaria completa\" = 2FN."
      },
      {
        "id": 106,
        "prompt": "¿Cuáles son las nociones básicas que usa el modelo de entidad - relación DER? Selecciona la opción correcta.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Las claves primarias, las foráneas y las superclaves.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Las entidades, las cardinalidades y los dominios.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Las tres formas normales, 1FN, 2FN y 3FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Las entidades, los atributos y las relaciones.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Las tablas, los índices y las vistas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Las entidades, los atributos y las relaciones."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 107,
        "prompt": "Cada entidad es una clase o categoría de cosa. ¿Cómo se denomina a cada elemento de esa categoría?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Relación.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Instancia.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Atributos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Entidad.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Dominio.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Instancia."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Instancia.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 108,
        "prompt": "\"El DNI 67.789.901 identifica unívocamente una persona en particular de la empresa\". ¿De qué concepto importante estamos haciendo una afirmación en este Situación?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Clave secundaria.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Relaciones.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Clave primaria.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Atributos.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Entidades.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Clave primaria."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Clave primaria.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 109,
        "prompt": "La afirmación \"Las instancias individuales de estas entidades comparten las mismas propiedades\", ¿a qué componente se refiere?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Relaciones.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Clave secundaria.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Entidades.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Clave primaria.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Atributos.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Atributos."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Atributos.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 110,
        "prompt": "Dados los atributos \"fecha de nacimiento\" y \"edad\", ¿es posible identificar qué tipo de atributo es \"edad\"?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Es un atributo derivado.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Es un atributo monovalorado.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Es un atributo compuesto.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Es un atributo definido.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Es un atributo multivalorado.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Es un atributo derivado."
        ],
        "module": "M1",
        "lecture": "L2",
        "lecture_name": "Módulo 1 - Lectura 2: El Modelo Relacional",
        "topic": "Estructuras y Reglas del Modelo Relacional",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Es un atributo derivado.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 111,
        "prompt": "Completa el enunciado seleccionando la opción correcta. \"Durante el análisis, has realizado un relevamiento y al definir el diagrama de entidad-relación lo que buscas es _______\":",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Un entendimiento completo de la implementación en tablas y columnas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Que el administrador fije los permisos de acceso a los datos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Que el desarrollador obtenga las consultas SQL optimizadas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Que el usuario entienda la información que va a manejar la aplicación.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Que el diseñador defina la estructura física de almacenamiento.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Que el usuario entienda la información que va a manejar la aplicación."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 112,
        "prompt": "Completa el enunciado seleccionando la opción correcta. \"Como analistas, para normalizar un modelo de datos relacional, debemos basarnos _____\":",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "En las cardinalidades y las participaciones de las relaciones.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "En las claves primarias y la dependencia funcional de los demás atributos.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "En la cantidad de atributos de una entidad, tratando de llegar a un númeroacotado de ellos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "En la cantidad de tablas y de claves foráneas del modelo.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "En la estructura física de almacenamiento de los datos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "En las claves primarias y la dependencia funcional de los demás atributos."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 113,
        "prompt": "Al trabajar como analista te encuentras en el proceso de normalización de una tabla y notas que no hay atributos de dominio compuesto o multivaluados. Todos los atributos \"no clave\" dependen funcionalmente de la clave primaria y, además, esta clave primaria es simple. ¿En qué forma normal se infiere que está esa tabla?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "3FN.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "2FN.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "4FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "1FN.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "2FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "DER: Atributos Compuestos",
        "priority": "ALTA",
        "explanation": "Un atributo compuesto es aquel que puede dividirse en subpartes con significado propio (ej. dirección dividida en calle, número, localidad).",
        "exam_tip": "Puede dividirse en subpartes -> Compuesto."
      },
      {
        "id": 114,
        "prompt": "Estás liderando un proyecto de modelado relacional de datos y debes organizar las tareas a realizar. ¿Qué tipo de tareas se realizan en las primeras etapas? Selecciona la opción correcta",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "De pruebas de rendimiento de las consultas.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "De mantenimiento de la base de datos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "De implementación de las tablas y consultas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "De diseño del modelo de datos relacional.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "De investigación preliminar y análisis.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "De investigación preliminar y análisis."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 115,
        "prompt": "Estás liderando un proyecto de modelado relacional de datos y debes organizar las tareas a realizar. ¿Qué resultado se debe esperar de la fase de diseño? Selecciona la opción correcta",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Determinar las tablas, sus atributos, las claves primarias y foráneas.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Definir los índices y la estructura física de almacenamiento.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Escribir las sentencias DDL de creación de las tablas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Terminar con la programación de todos los programas.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Realizar las pruebas de rendimiento de las consultas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Determinar las tablas, sus atributos, las claves primarias y foráneas."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 116,
        "prompt": "Estás liderando el proceso de diseño de un modelo de datos e iniciarás la fase de implementación. ¿Qué perfil de personal necesitarás para completar esta fase?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Administrador de bases de datos que gestiona los usuarios.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Analista de datos para crear diagramas de entidad-relación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Analista de requerimientos que releva las necesidades del negocio.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Desarrollador SQL que escriba las sentencias DDL.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Diseñador de bases de datos que define las claves y restricciones.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Desarrollador SQL que escriba las sentencias DDL."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Desarrollador SQL que escriba las sentencias DDL.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 117,
        "prompt": "Estás liderando el proceso de diseño de un modelo de datos e iniciarás la fase de investigación preliminar. ¿Qué perfil de personal necesitarás para completar esta fase?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Diseñador de bases de datos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Analista de requerimientos.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Analista de datos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Desarrollador SQL.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Administrador de bases de datos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Analista de requerimientos."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Analista de requerimientos.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 118,
        "prompt": "Trabajas en un proceso de normalización, iniciado con 20 tablas a normalizar. ¿Cuál será la cantidad de tablas cuando finalice el proceso de normalizarlas todas?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "La cantidad de tablas dependerá del motor de base de datos utilizado.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "No se podrá normalizar ninguna de las tablas.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Habrá más de 20 tablas normalizadas.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Habrá exactamente 20 tablas normalizadas.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Habrá menos de 20 tablas normalizadas.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Habrá más de 20 tablas normalizadas."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Formas Normales y Dependencias Funcionales",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Habrá más de 20 tablas normalizadas.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 119,
        "prompt": "Te encuentras normalizando una tabla y la misma tiene una clave primaria compuesta por dos columnas. Encuentras una columna no clave que depende de solamente una de las columnas de la clave primaria. ¿En qué forma normal se encontraría si creas otra tabla para llevar ese atributo \"no clave\" con la columna de la clave primaria de la que depende?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "4FN.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "1FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "3FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "2FN.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "2FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Formas Normales y Dependencias Funcionales",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"2FN.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 120,
        "prompt": "Te encuentras normalizando una tabla y la misma tiene una clave primaria simple. Encuentras una columna no clave que aceptaría varios valores. ¿En qué forma normal se encontraría si creas otra tabla para llevar ese atributo repetitivo y la respectiva clave foránea?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "1FN.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "2FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "4FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "3FN.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "1FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Formas Normales y Dependencias Funcionales",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"1FN.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 121,
        "prompt": "Te encuentras normalizando una tabla y la misma tiene una clave primaria. Encuentras que una columna no clave depende de otra columna no clave. ¿En qué forma normal se encontraría si creas otra tabla para llevar ese atributo no clave y la columna no clave de la que depende como la respectiva clave primaria?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "1FN.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "2FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "3FN.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "1FN solamente.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "3FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Formas Normales y Dependencias Funcionales",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"3FN.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 122,
        "prompt": "Estás desarrollando un modelo de entidad-relación. ¿Con qué figura geométrica debes representar un atributo de una entidad?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Triángulo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Elipse.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Rectángulo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Rombo.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Círculo.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Elipse."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Elipse.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 123,
        "prompt": "Estás desarrollando un modelo de entidad-relación. ¿Con qué figura geométrica debes representar una entidad?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Triángulo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Círculo.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Rectángulo.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Elipse.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Rombo.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Rectángulo."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Rectángulo.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 124,
        "prompt": "Estás desarrollando un modelo de entidad-relación. ¿Cómo representas una relación del tipo ROL? Selecciona la opción correcta",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Con un atributo compuesto dentro del rombo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Con un triángulo sobre la línea de relación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Con una elipse conectada al rombo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Con un rectángulo adicional en el centro del rombo.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Con etiquetas en las líneas que unen los rectángulos con el rombo.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Con etiquetas en las líneas que unen los rectángulos con el rombo."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 125,
        "prompt": "Estás desarrollando un modelo de entidad-relación. ¿Cómo representas la cardinalidad de una relación? Selecciona la opción correcta",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Mostrando sobre la línea los valores \"mínimo\", \"máximo\" de cardinalidad.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Dibujando un rombo por cada valor posible de cardinalidad.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Escribiendo el nombre de la relación en mayúsculas sobre el rombo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Con el nombre de la relación en plural.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Colocando la cardinalidad dentro del rectángulo de la entidad.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Mostrando sobre la línea los valores \"mínimo\", \"máximo\" de cardinalidad."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 126,
        "prompt": "Completa el enunciado seleccionando la opción correcta. \"En algunos casos, el diseñador de la base de datos puede elegir expresar un conjunto de entidades débiles como _________.",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Una entidad regular del modelo.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Un atributo simple de la entidad débil.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Un atributo monovalorado de la entidad.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Un atributo compuesto multivalorado.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Un atributo derivado de la entidad.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Un atributo compuesto multivalorado."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 127,
        "prompt": "Estás normalizando y tomas una tabla en particular. Te preguntas: ¿En qué forma normal se encuentra una relación si y solo si, cada atributo que no está en la clave primaria es dependiente de la clave primaria completa?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "4FN.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "2FN.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "1FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "3FN.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "2FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 2FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 2FN si está en 1FN y cada atributo no primo depende funcionalmente de la clave primaria COMPLETA (no hay dependencias parciales).",
        "exam_tip": "\"Dependiente de la clave primaria completa\" = 2FN."
      },
      {
        "id": 128,
        "prompt": "Estás desarrollando un modelo de entidad-relación y encuentras que hay similitudes entre las entidades clientes y empleados. ¿Cómo se puede expresar esta similitud?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Generalización.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Con una simplificación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Con una generalización.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Herencia.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Con una especificación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Con una generalización."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Con una generalización.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 129,
        "prompt": "Ricardo trabaja desarrollando un modelo de entidad-relación y encuentra que hay similitudes entre las entidades clientes y empleados. ¿Con qué figura debe representar Ricardo esta relación especial?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Un rombo con la palabra \"ES\".",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Una elipse con la palabra \"ES\".",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Un rectángulo con la palabra \"generalización\".",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Un rombo con la palabra \"generalización\".",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Un triángulo con la palabra \"ES\".",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Un triángulo con la palabra \"ES\"."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Un triángulo con la palabra \"ES\".\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 130,
        "prompt": "Completa el enunciado seleccionando la opción correcta. \"Una propiedad crucial de las entidades de nivel más alto y más bajo creadas mediante especialización y generalización es ________\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "La herencia de atributos.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "La herencia de entidades.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "La herencia de relaciones.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "La herencia de dominios.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "La herencia de cardinalidades.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "La herencia de atributos."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 131,
        "prompt": "¿Qué características debe poseer una clave para ser considerada clave primaria de una entidad? Selecciona las 3 (tres) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Restrictiva.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Mínima.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Foránea.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Candidata.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Superclave.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          1,
          3,
          4
        ],
        "correct_answers": [
          "Mínima.",
          "Candidata.",
          "Superclave."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 132,
        "prompt": "¿Qué tipo de restricciones pueden aplicarse sobre las generalizaciones? Seleccione las 2 (dos) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Por el usuario.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Por especificación.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Por disyunción.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Por condición.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Por solapamiento.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0,
          3
        ],
        "correct_answers": [
          "Por el usuario.",
          "Por condición."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 133,
        "prompt": "¿Qué condiciones debe tener una tabla para estar en 1FN? Seleccione las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Cada fila-columna debe contener un valor del dominio aplicable.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "No debe haber filas duplicadas.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Las columnas permiten valores nulos.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Todas las columnas excluyen o no tienen grupos repetitivos o monovaloradas.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "No debe haber orden en las filas y columnas.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          1,
          3,
          4
        ],
        "correct_answers": [
          "Cada fila-columna debe contener un valor del dominio aplicable.",
          "No debe haber filas duplicadas.",
          "Todas las columnas excluyen o no tienen grupos repetitivos o monovaloradas.",
          "No debe haber orden en las filas y columnas."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 1FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 1FN si y solo si todos sus atributos tienen valores atómicos e indivisibles (sin grupos repetitivos ni atributos compuestos/multivaluados).",
        "exam_tip": "Valor atómico = 1FN."
      },
      {
        "id": 134,
        "prompt": "¿Qué condiciones debe tener una tabla para estar en 2FN? Seleccione las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Estar en 1FN.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Puede o no puede estar en 3FN.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "La clave primaria tiene un solo atributo.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Todos sus atributos no-claves son dependientes de la clave primaria completa.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Algún atributo no clave depende de parte de la clave compuesta.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0,
          1,
          2,
          3
        ],
        "correct_answers": [
          "Estar en 1FN.",
          "Puede o no puede estar en 3FN.",
          "La clave primaria tiene un solo atributo.",
          "Todos sus atributos no-claves son dependientes de la clave primaria completa."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 2FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 2FN si está en 1FN y cada atributo no primo depende funcionalmente de la clave primaria COMPLETA (no hay dependencias parciales).",
        "exam_tip": "\"Dependiente de la clave primaria completa\" = 2FN."
      },
      {
        "id": 135,
        "prompt": "La forma normal de Boyce-Codd (BCNF) asegura que todas las columnas que no son clave sean completamente dependientes de la clave primaria (PK).",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "FALSO"
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: Boyce-Codd (BCFN)",
        "priority": "ALTA",
        "explanation": "Una tabla está en FNBC/BCFN si y solo si todo determinante (el lado izquierdo de una dependencia funcional no trivial) es una clave candidata.",
        "exam_tip": "\"Todo determinante es una clave candidata\" = BCFN."
      },
      {
        "id": 136,
        "prompt": "Estás desarrollando un modelo de entidad-relación. ¿Cómo representas la cardinalidad de una relación si es 1:M? Selecciona la opción correcta",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "1.1.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "0.*.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "1.0.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "1.*.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "*.0.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "1.*."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 137,
        "prompt": "¿Qué condiciones debe tener una tabla para estar en 3FN? Seleccione las 4 (cuatro) respuestas correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Estar en 2FN.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Los atributos no clave dependen transitivamente de una clave candidata.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Estar en 1FN.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Ningún atributo no- primario es dependiente transitivamente de una clave candidata.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Los atributos no clave son dependientes de la clave completa.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          0,
          2,
          3,
          4
        ],
        "correct_answers": [
          "Estar en 2FN.",
          "Estar en 1FN.",
          "Ningún atributo no- primario es dependiente transitivamente de una clave candidata.",
          "Los atributos no clave son dependientes de la clave completa."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 3FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 3FN si está en 2FN y no existen dependencias transitivas entre atributos no clave (ningún atributo no primo depende transitivamente de la PK).",
        "exam_tip": "\"No depende transitivamente de la clave primaria\" = 3FN."
      },
      {
        "id": 138,
        "prompt": "En un modelo de entidad-relación, cliente y empleado no tienen, cada una, los atributos únicos que no tuvieran las filas de persona en la que se generaliza. Por esto, habría necesidad de especializar el conjunto de entidades persona.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "FALSO"
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"FALSO\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 139,
        "prompt": "Como analista de datos te encuentras normalizando una tabla. ¿Cuál de las formas normales debe ser cumplida para decir que la tabla está normalizada?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "BCFN.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "1FN solamente.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "1FN.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "2FN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "3FN.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "3FN."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Formas Normales y Dependencias Funcionales",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"3FN.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 140,
        "prompt": "En caso de que te encuentres normalizando una tabla y la misma esté en 2FN, ¿qué otro requisito debe cumplir la misma para alcanzar la 3FN?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Que ningún atributo no-primario de la tabla sea dependiente transitivamente de una clave primaria.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Que todos los atributos no clave dependan de la clave primaria completa.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Que ningún atributo no clave dependa de parte de la clave compuesta.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Que la tabla se encuentre también en la BCFN.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Que la tabla se encuentre además en la 1FN.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Que ningún atributo no-primario de la tabla sea dependiente transitivamente de una clave primaria."
        ],
        "module": "M2",
        "lecture": "L4",
        "lecture_name": "Módulo 2 - Lectura 4: Normalización de Bases de Datos",
        "topic": "Normalización: 2FN",
        "priority": "ALTA",
        "explanation": "Una tabla está en 2FN si está en 1FN y cada atributo no primo depende funcionalmente de la clave primaria COMPLETA (no hay dependencias parciales).",
        "exam_tip": "\"Dependiente de la clave primaria completa\" = 2FN."
      },
      {
        "id": 141,
        "prompt": "¿A qué tipo de restricción sobre las generalizaciones hace referencia el siguiente concepto? \"La misma fila puede pertenecer a más de una entidad de nivel más bajo en una generalización simple\".",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Parcial.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Disjunto.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Definido por condición.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Solapado.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Definido por el usuario.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          3
        ],
        "correct_answers": [
          "Solapado."
        ],
        "module": "M2",
        "lecture": "L2",
        "lecture_name": "Módulo 2 - Lectura 2: Modelo Entidad-Relación Extendido (EER)",
        "topic": "EER: Jerarquías, Herencia y Agregación",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Solapado.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      },
      {
        "id": 142,
        "prompt": "Te han encargado analizar y diseñar un modelo de datos relacional y encuentras que dos tablas están relacionadas con una cardinalidad 1:M (uno a muchos). ¿Cómo resuelves esta relación en el modelo? Selecciona la opción correcta",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Creo una clave primaria en el lado Uno que apunte a la clave foránea del lado Muchos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Creo una clave foránea en el lado Muchos que apunte a la clave primaria de la otra tabla.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Creo una clave primaria en el lado Muchos que apunte a la clave foránea de la otra tabla.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Creo una clave foránea en el lado Uno que apunte a la clave primaria del lado Muchos.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Unifico las dos tablas en una sola tabla.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Creo una clave foránea en el lado Muchos que apunte a la clave primaria de la otra tabla."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 143,
        "prompt": "Te han encargado analizar y diseñar un modelo de datos relacional y encuentras que dos tablas están relacionadas con una cardinalidad M:M (muchos a muchos). ¿Cómo resuelves esta situación? Selecciona la opción correcta",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Con una sola clave foránea del lado Muchos.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Poniendo las claves foráneas correspondientes en cada tabla.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Creando otra tabla que contenga dos claves foráneas que apunten a las dos tablas originales.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Creando una tabla intermedia que contenga las claves primarias de las dos tablas.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Con dos claves foráneas del lado Uno.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          2
        ],
        "correct_answers": [
          "Creando otra tabla que contenga dos claves foráneas que apunten a las dos tablas originales."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Álgebra Relacional: Selección",
        "priority": "ALTA",
        "explanation": "La selección (sigma) filtra tuplas que cumplen un predicado o condición dada, generando un subconjunto HORIZONTAL de filas.",
        "exam_tip": "Selección = Subconjunto de tuplas que cumplen una condición."
      },
      {
        "id": 144,
        "prompt": "Te han encargado analizar y diseñar un modelo de datos relacional y encuentras que dos tablas están relacionadas con una cardinalidad 1:1 (uno a muchos). ¿Cuál de las opciones de resolución de esta situación elegirías?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Eliminaría una de las tablas, sin modificar la restante.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Crearía una clave foránea en el lado Muchos que apunte a la clave primaria de la otra tabla.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Mantendría las dos tablas sin ninguna modificación.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Crearía una tabla intermedia con dos claves foráneas.",
            "is_correct": false
          },
          {
            "index": 4,
            "text": "Unificaría las dos tablas en una.",
            "is_correct": true
          }
        ],
        "correct_indices": [
          4
        ],
        "correct_answers": [
          "Unificaría las dos tablas en una."
        ],
        "module": "M2",
        "lecture": "L1",
        "lecture_name": "Módulo 2 - Lectura 1: Modelo Entidad-Relación (DER)",
        "topic": "Elementos del DER: Entidades, Atributos y Relaciones",
        "priority": "ALTA",
        "explanation": "La opción correcta establecida por la cátedra es: \"Unificaría las dos tablas en una.\". Corresponde a los lineamientos teóricos oficiales de la Universidad Siglo 21.",
        "exam_tip": "Memorizar la formulación exacta dada en los textos del módulo."
      }
    ]
  },
  "ing": {
    "id": "ing",
    "name": "Ingeniería de Software",
    "code": "IS-1",
    "icon": "⚙️",
    "color": "#10b981",
    "accentGlow": "rgba(16, 185, 129, 0.25)",
    "university": "Universidad Siglo 21",
    "career": "Lic. en Informática / Ingeniería de Software",
    "badge": "Módulos 1 & 2 • AP1, AP2, TP1 & TP2 • 3 Modelos 3D",
    "description": "Comprende la evolución del software, ciclos de vida (Cascada, V, Incremental, Espiral de Boehm), metodologías ágiles (Scrum, XP, Kanban), proceso RUP, elicitación y administración de requerimientos bajo IEEE 830, métricas FURPS+, verificación, validación y testing exhaustivo.",
    "stats": {
      "modules": 2,
      "lectures": 8,
      "questions": 20,
      "flashcards": 12,
      "cases": 4,
      "models3d": 3
    },
    "modules": [
      {
        "id": "M1",
        "name": "Módulo 1: Introducción, Ciclos de Vida, Agilidad (Scrum, XP) y Metodología RUP",
        "lectures": [
          {
            "id": "L1",
            "title": "Lectura 1: Introducción a la Ingeniería de Software",
            "summary": "Nacimiento de la disciplina en la Conferencia de Garmisch (OTAN, 1968) para enfrentar la Crisis del Software. Definición formal IEEE (1990): el software como colección de programas, procedimientos, documentación y datos asociados. Leyes de Lehman sobre evolución de sistemas tipo E (cambio continuo, complejidad creciente). Código de ética profesional conjunto ACM/IEEE con sus 8 principios (Público, Cliente/Empleador, Producto, Juicio, Gestión, Profesión, Colegas, Personal).",
            "key_concepts": [
              {
                "term": "Crisis del Software (1968)",
                "def": "Momento histórico donde el costo del software superó al del hardware debido a proyectos fuera de presupuesto, entregas tardías y fallas críticas."
              },
              {
                "term": "Definición IEEE 1990",
                "def": "Colección de programas, procedimientos, documentación y datos asociados requeridos para la operación del sistema."
              },
              {
                "term": "Leyes de Lehman",
                "def": "Un sistema de software que se utiliza en el mundo real debe cambiar continuamente o se vuelve progresivamente menos útil, aumentando su complejidad a menos que se invierta en refactorización."
              },
              {
                "term": "Código de Ética ACM/IEEE",
                "def": "Marco de 8 principios que subordina cualquier interés comercial al bienestar, la salud y la seguridad del público general."
              }
            ],
            "exam_traps": [
              "El principio ético número 1 (Público) establece que los ingenieros de software deben actuar de forma congruente con el interés social primario.",
              "El software no se 'desgasta' físicamente como el hardware, sino que 'se deteriora' debido a cambios sucesivos no planificados."
            ]
          },
          {
            "id": "L2",
            "title": "Lectura 2: Procesos de Software y Ciclos de Vida Clásicos",
            "summary": "Las cuatro actividades fundamentales de todo proceso de software: Especificación, Diseño e Implementación, Validación y Evolución. Análisis comparativo de modelos de ciclo de vida: 1) Cascada (secuencial puro de Winston Royce: ideal para requerimientos totalmente conocidos y estables, como el sistema de cobranzas de Millenium 25); 2) Modelo en V (asocia cada fase de diseño a una fase de prueba); 3) Prototipado (esclarece requerimientos ambiguos); 4) Modelo Incremental/Evolutivo (entregas en versiones operativas a corto plazo); 5) Modelo en Espiral de Barry Boehm (guiado centralmente por el análisis de riesgos en 4 cuadrantes, ideal para sistemas críticos o con normativas complejas como facturación internacional con IVA 25%).",
            "key_concepts": [
              {
                "term": "Modelo en Cascada",
                "def": "Flujo estrictamente lineal por fases. Su desventaja crítica es que los errores de requerimientos no se detectan hasta el testing final y no tolera cambios tardíos."
              },
              {
                "term": "Modelo en Espiral (Boehm)",
                "def": "Ciclo iterativo orientado a riesgos organizado en 4 cuadrantes: Determinar objetivos, Evaluar y reducir riesgos, Desarrollar y verificar, y Planificar la siguiente fase."
              },
              {
                "term": "Modelo Incremental",
                "def": "Desarrolla el sistema en piezas funcionales escalonadas que entregan valor temprano al cliente."
              }
            ],
            "exam_traps": [
              "Si el enunciado menciona 'alta incertidumbre' o 'gestión de riesgos financieros/legales', la respuesta es SIEMPRE el Modelo en Espiral de Boehm.",
              "Si los requerimientos están 'completamente definidos y sin cambios previstos', el modelo indicado es Cascada."
            ]
          },
          {
            "id": "L3",
            "title": "Lectura 3: Desarrollo Ágil de Software (Scrum, XP, Kanban)",
            "summary": "El Manifiesto Ágil (2001) y sus 4 valores. Marco Scrum: 3 roles (Product Owner como voz del negocio, Scrum Master como facilitador que remueve impedimentos, y Development Team multifuncional y autoorganizado), 5 eventos (Sprint de 1 a 4 semanas, Sprint Planning, Daily Scrum de 15 min, Sprint Review para demostrar el incremento terminado y Sprint Retrospective para mejora interna) y 3 artefactos (Product Backlog, Sprint Backlog e Incremento / Burndown Chart). Metodología eXtreme Programming (XP): programación de a pares, TDD, integración continua. Metodología Kanban: limitación del trabajo en curso (WIP) y visualización del flujo.",
            "key_concepts": [
              {
                "term": "Scrum Master",
                "def": "Facilitador que garantiza que el equipo entienda la metodología y elimina cualquier obstáculo externo o falta de recursos (en el caso práctico: Jorge)."
              },
              {
                "term": "Product Owner",
                "def": "Responsable de gestionar el Product Backlog y representar la voz de los clientes y el retorno de inversión (en el caso práctico: Javier)."
              },
              {
                "term": "Sprint Review vs Retrospective",
                "def": "Review: se muestra QUÉ se construyó a los interesados externos. Retrospective: reunión interna del equipo sobre CÓMO se trabajó para mejorar procesos."
              },
              {
                "term": "Pair Programming (XP)",
                "def": "Dos programadores frente a una máquina: el piloto escribe el código y el copiloto revisa la calidad, diseño y casos de prueba en tiempo real."
              }
            ],
            "exam_traps": [
              "El Scrum Master NO es el jefe del proyecto ni asigna tareas: el equipo es autoorganizado.",
              "En el caso Millenium 25 AP1: Jorge es el Scrum Master y Javier es el Product Owner."
            ]
          },
          {
            "id": "L4",
            "title": "Lectura 4: Metodología RUP (Rational Unified Process)",
            "summary": "Proceso pesado de ingeniería orientado a objetos. Principios rectores: Dirigido por casos de uso, centrado en la arquitectura, iterativo e incremental. Sus 4 fases ordenadas en el tiempo: 1) Inicio / Incepción (determinar viabilidad y alcance del negocio); 2) Elaboración (mitigar riesgos principales y establecer la arquitectura base ejecutable); 3) Construcción (desarrollo intensivo de componentes); 4) Transición (despliegue, capacitación de usuarios y correcciones post-lanzamiento). Disciplinas o flujos de trabajo transversales.",
            "key_concepts": [
              {
                "term": "Fase de Inicio (Inception)",
                "def": "Establece el caso de negocio y delimita los alcances del proyecto con estimaciones preliminares."
              },
              {
                "term": "Fase de Elaboración",
                "def": "Se analiza el dominio del problema, se eliminan los riesgos de arquitectura y se crea la línea base ejecutable."
              },
              {
                "term": "Fase de Construcción",
                "def": "Se completa el diseño, la codificación masiva y las pruebas de los módulos."
              },
              {
                "term": "Fase de Transición",
                "def": "Entrega del producto al usuario final, migración de datos y capacitación."
              }
            ],
            "exam_traps": [
              "En RUP, la arquitectura NO se diseña en la fase de Construcción, sino que se valida y congela en la fase de ELABORACIÓN."
            ]
          }
        ]
      },
      {
        "id": "M2",
        "name": "Módulo 2: Requerimientos, Elicitación, Documentación IEEE 830 y Testing",
        "lectures": [
          {
            "id": "L1",
            "title": "Lectura 1: Ingeniería de Requerimientos y Elicitación",
            "summary": "Definición y clasificación de requerimientos. Requerimientos Funcionales (RF: funciones que el sistema debe ejecutar) vs Requerimientos No Funcionales (RNF: restricciones de rendimiento, seguridad, confiabilidad, portabilidad bajo modelo FURPS+). Técnicas de elicitación: entrevistas individuales, cuestionarios y encuestas (indispensables para poblaciones masivas de 200 empleados como en el caso del Hotel), talleres JAD (Joint Application Development), observación participante (etnografía) y prototipado rápido.",
            "key_concepts": [
              {
                "term": "Requerimientos Funcionales (RF)",
                "def": "Declaraciones de servicios que el sistema debe proveer, cómo debe reaccionar a entradas particulares y cómo comportarse ante situaciones específicas."
              },
              {
                "term": "Requerimientos No Funcionales (RNF)",
                "def": "Restricciones impuestas sobre los servicios o funciones (rendimiento, tiempo de respuesta de 1000 visitas en 2 horas, memoria, SO Windows, capacidad de disco de 1 TB)."
              },
              {
                "term": "Modelo FURPS+",
                "def": "Clasificación de calidad: Functionality, Usability, Reliability, Performance, Supportability (+ restricciones de diseño e interfaz)."
              }
            ],
            "exam_traps": [
              "El soporte para 1000 visitas en 2 horas y disco de 1 TB son estrictamente Requerimientos No Funcionales de Rendimiento y Almacenamiento.",
              "Para consultar a 200 empleados la técnica primordial es la Encuesta/Cuestionario estructurado."
            ]
          },
          {
            "id": "L2",
            "title": "Lectura 2: Documentación y Administración de Requerimientos",
            "summary": "Estándar IEEE 830 para la Especificación de Requerimientos de Software (SRS/ERS). Cualidades de una buena SRS: correcta, no ambigua, completa, consistente, verificable, modificable y trazable. Formato ágil de Historias de Usuario ('Como... Quiero... Para...') y criterios de calidad INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable). Matriz de Trazabilidad de Requerimientos (RTM) y gestión de cambios mediante el Comité de Control de Cambios (CCB).",
            "key_concepts": [
              {
                "term": "Estándar IEEE 830 (SRS)",
                "def": "Guía internacional que normaliza la estructura y el contenido de un documento formal de especificación de requerimientos de software."
              },
              {
                "term": "Criterio INVEST",
                "def": "Independent (independiente), Negotiable (negociable), Valuable (valiosa), Estimable (estimable), Small (pequeña), Testable (testeable)."
              },
              {
                "term": "Matriz de Trazabilidad (RTM)",
                "def": "Cuadrícula que mapea cada requerimiento individual con sus casos de uso, código y casos de prueba para medir impacto ante modificaciones."
              }
            ],
            "exam_traps": [
              "Un requerimiento no es verificable si no existe un procedimiento finito de prueba que permita determinar objetivamente si el software lo cumple."
            ]
          },
          {
            "id": "L3",
            "title": "Lectura 3: Validación, Verificación y Testing de Software",
            "summary": "Diferencia fundamental de Boehm: Validación (¿Estamos construyendo el producto CORRECTO?) vs Verificación (¿Estamos construyendo el producto CORRECTAMENTE según la especificación?). Métodos estáticos: revisiones e inspecciones formales de Fagan. Métodos dinámicos: Testing de Caja Negra (basado en entradas/salidas sin ver el código: partición de equivalencia, valores límite) vs Testing de Caja Blanca (estructural, revisa caminos y sentencias de código). Niveles de prueba: unitarias, integración, sistema (pruebas de estrés ante 100 solicitudes simultáneas de check-in de 8 a 10 hs) y pruebas de aceptación por usuarios (UAT). Tipos de fallas: de datos, control, entrada/salida, interfaz y gestión de almacenamiento.",
            "key_concepts": [
              {
                "term": "Validación vs Verificación",
                "def": "Validación comprueba que el software satisface las necesidades reales del usuario. Verificación comprueba la consistencia técnica con la especificación."
              },
              {
                "term": "Caja Negra vs Caja Blanca",
                "def": "Caja Negra: se desconocen los detalles internos del código. Caja Blanca: se inspecciona directamente el código y la lógica de ejecución."
              },
              {
                "term": "Pruebas de Estrés / Carga",
                "def": "Someter al sistema a condiciones en los límites o más allá de sus especificaciones (ej. 100 peticiones de check-in concurrentes)."
              }
            ],
            "exam_traps": [
              "Revisar el código fuente con herramientas de cobertura es siempre prueba de Caja Blanca.",
              "Las fallas de almacenamiento e interfaz corresponden a testing dinámico del sistema integrado."
            ]
          },
          {
            "id": "L4",
            "title": "Lectura 4: Ciclos de Vida Avanzados y Modelos de Negocio",
            "summary": "Estrategias de selección del ciclo de vida en función de variables de negocio: claridad de requerimientos, volatilidad del mercado, criticidad del riesgo de fallas y tamaño del equipo. Gestión de la deuda técnica: balance entre velocidad de entrega a corto plazo y mantenibilidad de la arquitectura a largo plazo.",
            "key_concepts": [
              {
                "term": "Deuda Técnica",
                "def": "Costo acumulado de adoptar soluciones rápidas y deficientes en el código en lugar de utilizar un diseño limpio y refactorizado."
              },
              {
                "term": "Matriz de Selección",
                "def": "Herramienta que pondera estabilidad, riesgo y tamaño de equipo para elegir entre Cascada, Espiral, Incremental o Scrum."
              }
            ],
            "exam_traps": [
              "En sistemas con alta regulación fiscal o de seguridad de vidas humanas, nunca se debe omitir la fase de análisis de riesgos formal."
            ]
          }
        ]
      }
    ],
    "cases": [
      {
        "id": "AP1",
        "title": "Actividad Práctica 1: Empresa Millenium 25 (Scrum para Fuerza de Venta)",
        "scenario": "Millenium 25 vende materiales eléctricos en todo el país con 30 vendedores que recorren comercios, toman notas en planillas y mandan emails al final del día. Errores de transcripción provocan demoras y quejas de clientes. Sergio propone desarrollar una app móvil usando Scrum. Equipo: 2 devs, 2 diseñadores, 2 testers. Jorge asume facilitar recursos y quitar obstáculos; Javier representa la voz del cliente. Se pide que funcione en cualquier smartphone. Hay una solicitud de impresora láser color.",
        "analysis": "1) Asignación de Roles: Sergio = Responsable de sistemas / Arquitecto técnico; Jorge = Scrum Master (elimina impedimentos); Javier = Product Owner (representa la voz del cliente); Equipo de Desarrollo = 6 profesionales multifuncionales. 2) Ceremonias Scrum: Planificación de sprint, Daily Scrum de 15 min, Sprint Review al finalizar las tareas ante interesados, Retrospective. 3) Requerimientos: RF = Registrar pedidos, modificarlos, consultar estado, anular. RNF = Portabilidad y compatibilidad multidispositivo móvil. 4) Detección de requerimiento obsoleto/contradictorio: La compra de una impresora láser color para imprimir emails de pedidos queda desfasada con la app móvil centralizada en base de datos.",
        "resolution_steps": [
          "1. Formalizar a Javier como Product Owner y a Jorge como Scrum Master.",
          "2. Diseñar el Product Backlog inicial con las Historias de Usuario para vendedores (registrar, modificar, anular pedidos).",
          "3. Planificar Sprints de 2 semanas con reuniones diarias (Daily Standups) y Sprint Reviews demostrables.",
          "4. Descartar la compra de la impresora láser color y destinar presupuesto a infraestructura cloud segura para sincronización móvil."
        ]
      },
      {
        "id": "AP2",
        "title": "Actividad Práctica 2: Empresa Millenium 25 (Cascada vs Ágil para Cobranzas y Web)",
        "scenario": "La dirección a cargo del fundador Marcelo encara dos proyectos estratégicos: un nuevo sistema de cobranzas y una nueva página web para registrar pedidos. Sergio decide ciclo en CASCADA para cobranzas porque conoce ampliamente los requerimientos. Para la web los requerimientos son inciertos, se necesita documentación detallada y gráfica, y Marcelo debe acompañar y ver avances continuos.",
        "analysis": "1) Cobranzas: El ciclo Cascada es plenamente justificado debido a que las reglas contables, liquidaciones y cobranzas son estables y exhaustivamente conocidas, con baja probabilidad de cambio. 2) Web de Pedidos: Cascada es INAPROPIADO. Se debe aplicar un ciclo Evolutivo, Incremental o Scrum, dado que los requerimientos son inciertos y Marcelo necesita ver incrementos funcionando periódicamente. 3) Documentación: Detallada (SRS bajo norma IEEE 830) + Gráfica (Diagramas de Casos de Uso UML y Wireframes/Mockups interactivos).",
        "resolution_steps": [
          "1. Mantener Cascada para Cobranzas con fases secuenciales estrictas de Especificación, Diseño, Código y Validación.",
          "2. Adoptar Modelo Incremental/Scrum para la Web de Pedidos con Sprints cortos y demos ante Marcelo.",
          "3. Elaborar SRS IEEE 830 y Diagramas de Casos de Uso para formalizar los requerimientos emergentes de la web."
        ]
      },
      {
        "id": "TP1",
        "title": "Trabajo Práctico 1: Cadena de Hoteles Nacional (XP + Scrum)",
        "scenario": "Cadena de hoteles distribuida en Región Norte, Oeste, Este y Sur (5 hoteles c/u, 20 en total). Reservas web por temporada, confirmación 1 mes antes, catálogo semestral, asignación de habitación al llegar. Tecnología obsoleta. Necesitan desarrollo rápido con avances a corto plazo, facilidad de uso, diseño que no desgaste recursos (CPU/memoria). Presupuesto $1.000.000. Equipo: Sergio (responsable), Jorge (recursos), Javier (voz del cliente), 2 devs, 2 testers. Metodología XP y Scrum.",
        "analysis": "1) Clasificación de Requerimientos: RF = Reservas web, check-in, check-out, catálogo de temporadas; RNF = Avances a corto plazo, Usabilidad, Eficiencia en procesador y memoria, Presupuesto máximo $1.000.000. 2) Complementación XP + Scrum: Scrum aporta la gestión del proyecto (roles Jorge=SM, Javier=PO, reuniones de planificación, Daily, Review de cierre), mientras que XP aporta las prácticas técnicas de ingeniería de excelencia (Pair Programming, TDD, refactorización continua, pruebas automatizadas continuas). 3) Artefactos documentales: Product Backlog (documento general de requerimientos), Sprint Backlog (requerimientos comprometidos), Burndown Chart / Tablero visual (control de avance).",
        "resolution_steps": [
          "1. Definir arquitectura liviana para evitar sobrecarga de CPU y memoria en servidores regionales.",
          "2. Implementar prácticas XP de programación de a pares entre los dos desarrolladores.",
          "3. Organizar Sprints quincenales liderados por Jorge (SM) con validación continua de Javier (PO)."
        ]
      },
      {
        "id": "TP2",
        "title": "Trabajo Práctico 2: Cadena de Hoteles Nacional (Ciclos de Vida Especializados y Testing)",
        "scenario": "El equipo del Hotel propone ciclo evolutivo/incremental en PHP. Software para recibir 1000 visitas en 2 horas, disco de 1 TB. Sistema de facturación con IVA del 25% para clientes de Brasil con ciclo en ESPIRAL por alta complejidad y riesgos. Sistema de movimientos diarios de dinero con ciclo SECUENCIAL por claridad y estabilidad. Sistema de check-in versión 1.1 con SQL en red, prueba de estrés de 100 solicitudes concurrentes de 8 a 10 hs. Pruebas de fallas de datos, control, E/S, interfaz y almacenamiento. Aprobación final UAT por usuarios.",
        "analysis": "1) Asignación Multimodelo de Ciclos de Vida: Facturación internacional Brasil -> Modelo en Espiral de Boehm (análisis iterativo de riesgos normativos e impositivos); Movimientos diarios de caja -> Modelo Secuencial/Cascada (procesos financieros exactos y estables); Web y Reservas -> Modelo Incremental/Evolutivo (adaptabilidad y versiones sucesivas v1.0, v1.1). 2) Requerimientos No Funcionales: Rendimiento (1000 visitas/2h; 100 solicitudes simultáneas de check-in de 8 a 10 hs), Almacenamiento (disco mínimo 1 TB), Plataforma (Windows y PHP, BD SQL en red). 3) Estrategia de Testing: Pruebas unitarias de caja blanca en cobranzas (revisión de código fuente), pruebas de integración y carga/estrés en check-in, y pruebas de aceptación final (UAT) por los empleados del hotel.",
        "resolution_steps": [
          "1. Segmentar el proyecto en 3 subsistemas aplicando Espiral (Facturación Brasil), Secuencial (Caja) e Incremental (Web y Reservas).",
          "2. Diseñar el plan de pruebas de carga con herramientas de simulación para verificar los umbrales de 1000 visitas en 2 horas y 100 check-ins concurrentes.",
          "3. Ejecutar pruebas de caja blanca sobre el módulo de cobranzas y pruebas de interfaz/almacenamiento sobre el servidor SQL.",
          "4. Conducir las sesiones de validación UAT con usuarios del área de reservas para aprobación final."
        ]
      }
    ],
    "flashcards": [
      {
        "cat": "METODOLOGIAS",
        "front": "¿Quién es el Product Owner en Scrum y qué función cumple?",
        "back": "Es la persona responsable de maximizar el valor del producto y representar la voz de los clientes/usuarios. Gestiona y prioriza el Product Backlog.",
        "detail": "En el caso práctico Millenium 25: Javier."
      },
      {
        "cat": "METODOLOGIAS",
        "front": "¿Quién es el Scrum Master y cuál es su rol clave?",
        "back": "Es el facilitador del equipo; remueve obstáculos externos, garantiza las prácticas ágiles y asegura que al equipo no le falten recursos.",
        "detail": "En el caso práctico Millenium 25: Jorge."
      },
      {
        "cat": "CICLOS",
        "front": "¿Cuándo se debe elegir el Ciclo de Vida en Espiral de Boehm?",
        "back": "En proyectos de alta complejidad, incertidumbre o regulaciones cambiantes donde el análisis de riesgos es el eje central del proceso.",
        "detail": "Caso Hotel TP2: Facturación Brasil IVA 25%."
      },
      {
        "cat": "CICLOS",
        "front": "¿Cuándo es adecuado utilizar el Modelo en Cascada?",
        "back": "Únicamente cuando los requerimientos son perfectamente conocidos, estables y no sufrirán modificaciones a lo largo del desarrollo.",
        "detail": "Caso Millenium 25 AP2: Sistema de cobranzas."
      },
      {
        "cat": "REQUERIMIENTOS",
        "front": "¿Qué diferencia un Requerimiento Funcional de un No Funcional?",
        "back": "Funcional (RF) define QUÉ hace el sistema (servicios y comportamientos). No Funcional (RNF) define CÓMO o bajo qué restricciones de calidad opera (velocidad, seguridad, hardware).",
        "detail": "Modelo FURPS+."
      },
      {
        "cat": "REQUERIMIENTOS",
        "front": "¿Qué significa el criterio INVEST para Historias de Usuario?",
        "back": "Independent, Negotiable, Valuable, Estimable, Small, Testable.",
        "detail": "Guía de calidad para User Stories ágiles."
      },
      {
        "cat": "TESTING",
        "front": "¿Qué diferencia el Testing de Caja Negra del de Caja Blanca?",
        "back": "Caja Negra evalúa entradas y salidas sin conocer el código interno. Caja Blanca inspecciona directamente el código fuente y las rutas de ejecución.",
        "detail": "Caso Hotel TP2: Cobranzas con revisión de código = Caja Blanca."
      },
      {
        "cat": "TESTING",
        "front": "¿Qué diferencia Validación de Verificación según Barry Boehm?",
        "back": "Validación: ¿Estamos construyendo el producto CORRECTO? (cumple necesidades del usuario). Verificación: ¿Estamos construyendo el producto CORRECTAMENTE? (cumple especificaciones técnicas).",
        "detail": "Concepto central de calidad."
      }
    ],
    "questions": [
      {
        "id": 1,
        "prompt": "¿Cuál es la definición formal de software según el estándar IEEE 1990?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Únicamente el código fuente compilado que se ejecuta en la CPU del servidor.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Colección de programas, procedimientos, documentación y datos asociados que determinan la operación de un sistema de computación.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "El hardware físico junto con las rutinas de la BIOS del fabricante.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Cualquier programa informático descargado de internet sin soporte formal.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Colección de programas, procedimientos, documentación y datos asociados que determinan la operación de un sistema de computación."
        ],
        "module": "M1",
        "lecture": "L1",
        "topic": "Definición Formal de Software",
        "priority": "ALTA",
        "explanation": "El IEEE (1990) define al software no solo como los programas ejecutables, sino como la colección integral de programas, procedimientos, reglas, documentación y datos asociados indispensables para la operación del sistema.",
        "exam_tip": "Recordar que el software incluye programas + documentación + datos + procedimientos."
      },
      {
        "id": 2,
        "prompt": "En el caso práctico de la empresa Millenium 25 (AP1), Sergio propone la metodología Scrum para desarrollar la app móvil de la fuerza de venta. ¿Qué rol de Scrum debe asumir Jorge, quien es responsable de que al equipo de desarrollo no le falte ningún recurso y no tenga impedimentos?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Product Owner.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Scrum Master.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Lead Tester.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Chief Architect.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Scrum Master."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Roles en Scrum - Caso Millenium 25 AP1",
        "priority": "ALTA",
        "explanation": "El Scrum Master es el facilitador del equipo responsable de remover obstáculos, garantizar la observancia de las prácticas ágiles y asegurar que al equipo no le falten recursos. Jorge cumple exactamente esa función.",
        "exam_tip": "Jorge = Scrum Master (elimina impedimentos). Javier = Product Owner (representa la voz del cliente)."
      },
      {
        "id": 3,
        "prompt": "En la empresa Millenium 25 (AP1), ¿qué rol de Scrum le corresponde a Javier, designado como 'responsable de representar la voz del cliente mientras se desarrollan las tareas'?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Product Owner.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Scrum Master.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Stakeholder externo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Desarrollador principal.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Product Owner."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Roles en Scrum - Caso Millenium 25 AP1",
        "priority": "ALTA",
        "explanation": "El Product Owner es el responsable de maximizar el valor del producto y representar la voz de los clientes y usuarios del negocio en el backlog.",
        "exam_tip": "Javier representa la voz del cliente = Product Owner."
      },
      {
        "id": 4,
        "prompt": "En el caso Millenium 25 (AP2), Sergio decide implementar el ciclo de vida en CASCADA para el sistema de cobranzas y duda respecto a la página web de pedidos. ¿Por qué el modelo en cascada es apropiado para el sistema de cobranzas pero NO para la página web?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Porque el sistema de cobranzas tiene requerimientos muy claros y estables, mientras que la web tiene requerimientos inciertos y necesita entregas tempranas y participación del dueño.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Porque la cobranza requiere programar en PHP y la web en C++.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Porque el modelo en cascada es más moderno que cualquier metodología ágil.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Porque en el sistema de cobranzas no se hacen pruebas de software.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Porque el sistema de cobranzas tiene requerimientos muy claros y estables, mientras que la web tiene requerimientos inciertos y necesita entregas tempranas y participación del dueño."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Selección de Ciclos de Vida - Caso AP2",
        "priority": "ALTA",
        "explanation": "El modelo en cascada es secuencial y rígido: solo es viable cuando los requerimientos se conocen exhaustivamente de antemano y no sufrirán variaciones. Para la web, con requerimientos vagos y necesidad de feedback continuo de Marcelo, se requiere un ciclo evolutivo, iterativo o ágil.",
        "exam_tip": "Requerimientos estables y conocidos = Cascada. Requerimientos volátiles y cliente presente = Evolutivo/Ágil."
      },
      {
        "id": 5,
        "prompt": "En el caso del Hotel Nacional (TP1 y TP2), se requiere desarrollar un sistema para facturar con un IVA del 25% para clientes de Brasil, calificado como complejo y con riesgos por las distintas legislaciones. ¿Qué ciclo de vida se selecciona específicamente para este subsistema?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Ciclo de vida en Espiral.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Ciclo de vida en Cascada puro.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Prototipado descartable únicamente.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Desarrollo rápido sin documentación.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Ciclo de vida en Espiral."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Modelo en Espiral de Barry Boehm - Caso TP2",
        "priority": "ALTA",
        "explanation": "El texto del enunciado de TP2 indica expresamente: 'va a utilizar el ciclo de vida en espiral, debido a que es un sistema complejo y muy amplio por la cantidad de países... Es necesario contemplar los riesgos que comprenden el sistema de facturación para saber las medidas a aplicar'. El modelo en espiral está guiado centralmente por el análisis de riesgos.",
        "exam_tip": "Complejidad alta + análisis exhaustivo de riesgos = Modelo en Espiral de Boehm."
      },
      {
        "id": 6,
        "prompt": "¿Cuáles son los 4 valores fundamentales proclamados en el Manifiesto Ágil (2001)? Seleccione las 4 (cuatro) opciones correctas.",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Individuos e interacciones sobre procesos y herramientas.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Software funcionando sobre documentación extensiva.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Colaboración con el cliente sobre negociación contractual.",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Respuesta ante el cambio sobre seguir un plan.",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Seguimiento estricto del contrato sobre las necesidades emergentes.",
            "is_correct": false
          },
          {
            "index": 5,
            "text": "Documentación previa completa antes de escribir la primera línea de código.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0,
          1,
          2,
          3
        ],
        "correct_answers": [
          "Individuos e interacciones sobre procesos y herramientas.",
          "Software funcionando sobre documentación extensiva.",
          "Colaboración con el cliente sobre negociación contractual.",
          "Respuesta ante el cambio sobre seguir un plan."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Manifiesto Ágil",
        "priority": "ALTA",
        "explanation": "Los 4 postulados del Manifiesto Ágil priorizan personas, software funcional, colaboración activa y adaptabilidad al cambio, sin eliminar los procesos pero subordinándolos al valor de negocio.",
        "exam_tip": "Pregunta clásica: se valoran los elementos de la izquierda por encima de los de la derecha."
      },
      {
        "id": 7,
        "prompt": "¿Cuáles son las 4 fases ordenadas secuencialmente en el proceso unificado RUP (Rational Unified Process)?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Inicio (Inception), Elaboración, Construcción y Transición.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Planificación, Análisis, Programación y Mantenimiento.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Requerimientos, Diseño, Codificación y Pruebas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Elicitación, Negociación, Validación y Cierre.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Inicio (Inception), Elaboración, Construcción y Transición."
        ],
        "module": "M1",
        "lecture": "L4",
        "topic": "Fases de la Metodología RUP",
        "priority": "ALTA",
        "explanation": "RUP estructura el ciclo en 4 fases temporales: Incepción (visión y alcance), Elaboración (arquitectura base y riesgos), Construcción (desarrollo de capacidades) y Transición (despliegue al usuario).",
        "exam_tip": "Nemotecnia: I-E-C-T (Inicio, Elaboración, Construcción, Transición)."
      },
      {
        "id": 8,
        "prompt": "En el caso del Hotel (TP2), se especifica que: 'El software debe estar diseñado para recibir 1000 visitas en dos horas y contar con un disco rígido de por lo menos 1 TB'. ¿A qué categoría de requerimientos corresponden estas especificaciones?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Requerimientos Funcionales.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Requerimientos No Funcionales (Rendimiento y Capacidad de Almacenamiento).",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Requerimientos de Negocio Transaccional.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Casos de uso del cliente.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Requerimientos No Funcionales (Rendimiento y Capacidad de Almacenamiento)."
        ],
        "module": "M2",
        "lecture": "L1",
        "topic": "Requerimientos Funcionales vs No Funcionales",
        "priority": "ALTA",
        "explanation": "Los requerimientos funcionales definen QUÉ hace el sistema (ej. registrar reserva). Las restricciones de velocidad, carga concurrente, capacidad de disco y sistema operativo son Requerimientos No Funcionales (RNF).",
        "exam_tip": "Tiempos, cargas, capacidad de disco, SO = Requerimientos No Funcionales (RNF)."
      },
      {
        "id": 9,
        "prompt": "¿Qué técnica de elicitación es la más adecuada cuando se necesita relevar información de un volumen masivo de 200 empleados distribuidos en el área de reservas (como plantea el TP2 del Hotel)?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Entrevista individual en profundidad a cada uno de los 200 empleados.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Encuestas / Cuestionarios estructurados con preguntas cerradas y semicerradas.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Observación etnográfica pasiva durante 6 meses.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Reunión plenaria simultánea con los 200 empleados.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Encuestas / Cuestionarios estructurados con preguntas cerradas y semicerradas."
        ],
        "module": "M2",
        "lecture": "L1",
        "topic": "Técnicas de Elicitación para Grandes Poblaciones",
        "priority": "ALTA",
        "explanation": "Cuando la población de interesados es numerosa (200 usuarios) y dispersa, las encuestas y cuestionarios permiten recolectar datos cuantificables de forma rápida y económica, complementándose con entrevistas focalizadas a los líderes.",
        "exam_tip": "Muestras grandes (>50 personas) = Cuestionarios / Encuestas."
      },
      {
        "id": 10,
        "prompt": "En la administración ágil de requerimientos mediante Historias de Usuario, ¿qué acrónimo define las características de una buena historia de usuario?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "SMART (Specific, Measurable, Achievable, Relevant, Time-bound).",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable).",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "SOLID (Single responsibility, Open-closed, Liskov, Interface, Dependency).",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "ACID (Atomicity, Consistency, Isolation, Durability).",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable)."
        ],
        "module": "M2",
        "lecture": "L2",
        "topic": "Historias de Usuario y Criterio INVEST",
        "priority": "ALTA",
        "explanation": "El acrónimo INVEST formulado por Bill Wake establece que toda User Story debe ser Independiente, Negociable, Valiosa para el usuario, Estimable en esfuerzo, Pequeña (Small) para caber en un sprint, y Testeable mediante criterios de aceptación.",
        "exam_tip": "INVEST = Independent, Negotiable, Valuable, Estimable, Small, Testable."
      },
      {
        "id": 11,
        "prompt": "En el caso del Hotel (TP2), se menciona que se realizan pruebas sobre el sistema de cobranzas revisando directamente su código fuente. ¿A qué categoría de testing corresponde este procedimiento?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Pruebas de Caja Negra (Black-box testing).",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Pruebas de Caja Blanca (White-box testing / Estructural).",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Pruebas de Aceptación de Usuario (UAT).",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Pruebas de humo sin inspección de código.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Pruebas de Caja Blanca (White-box testing / Estructural)."
        ],
        "module": "M2",
        "lecture": "L3",
        "topic": "Caja Blanca vs Caja Negra",
        "priority": "ALTA",
        "explanation": "Las pruebas de caja blanca examinan la estructura lógica interna y el código fuente del programa (cobertura de sentencias, caminos y condiciones). El texto dice: 'probando los diferentes componentes del sistema con su código correspondiente'.",
        "exam_tip": "Conocer y revisar el código fuente = Caja Blanca. Evaluar solo entradas y salidas = Caja Negra."
      },
      {
        "id": 12,
        "prompt": "En el marco de la metodología ágil eXtreme Programming (XP) adoptada por el equipo del Hotel en TP1, ¿cuál de las siguientes prácticas consiste en que dos programadores trabajen simultáneamente en una sola estación de trabajo compartiendo teclado y monitor?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Refactorización continua.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Programación de a pares (Pair Programming).",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Integración continua.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Desarrollo guiado por pruebas (TDD).",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Programación de a pares (Pair Programming)."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Prácticas de XP",
        "priority": "ALTA",
        "explanation": "Pair Programming es la práctica insigne de XP donde un programador (el piloto) escribe el código mientras el segundo (el copiloto o navegador) revisa en tiempo real la sintaxis, el diseño y los casos de prueba.",
        "exam_tip": "Dos desarrolladores, una máquina = Pair Programming."
      },
      {
        "id": 13,
        "prompt": "En la gestión ágil con Scrum, ¿cuál es la duración máxima recomendada para la reunión diaria de seguimiento (Daily Scrum)?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "15 minutos.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "1 hora.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "30 minutos por cada miembro del equipo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "No tiene límite de tiempo.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "15 minutos."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Eventos de Scrum: Daily Standup",
        "priority": "ALTA",
        "explanation": "La Daily Scrum es un evento timeboxed de máximo 15 minutos donde el Development Team sincroniza actividades y planifica el trabajo de las próximas 24 horas respondiendo a 3 preguntas clave.",
        "exam_tip": "Daily Scrum = 15 minutos de pie (timebox estricto)."
      },
      {
        "id": 14,
        "prompt": "¿Qué documento de Scrum contiene la lista priorizada de todas las funcionalidades, mejoras y correcciones requeridas para el producto a lo largo de todo su ciclo de vida?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Sprint Backlog.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Product Backlog.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Burndown Chart.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Definition of Done.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Product Backlog."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Artefactos de Scrum",
        "priority": "ALTA",
        "explanation": "El Product Backlog es la lista ordenada de todo lo que se conoce que es necesario en el producto, bajo responsabilidad exclusiva del Product Owner.",
        "exam_tip": "Lista global = Product Backlog. Lista para el sprint actual = Sprint Backlog."
      },
      {
        "id": 15,
        "prompt": "En el caso Millenium 25 (AP1), los vendedores recolectaban información en planillas y la enviaban por email. ¿Cuál fue la consecuencia directa que motivó a la dirección a declarar estratégica la nueva app móvil?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "La transcripción incorrecta de los correos provocó demoras, diferencias en los pedidos entregados y reclamos de clientes.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "El quiebre de la fábrica de materiales eléctricos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "La renuncia de todos los vendedores de la empresa.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Un ataque informático a la red de fibra óptica.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "La transcripción incorrecta de los correos provocó demoras, diferencias en los pedidos entregados y reclamos de clientes."
        ],
        "module": "M1",
        "lecture": "L1",
        "topic": "Caso Millenium 25 AP1",
        "priority": "ALTA",
        "explanation": "El enunciado establece textualmente: 'Producto de una transcripción incorrecta de los correos remitidos, últimamente se ocasionaron demoras y diferencias en los pedidos entregados y se presentaron reclamos'.",
        "exam_tip": "El problema raíz fue el error manual de transcripción de pedidos desde planillas/correos."
      },
      {
        "id": 16,
        "prompt": "En el modelo en espiral propuesto por Barry Boehm, ¿cuáles son las cuatro actividades principales que se repiten cíclicamente en cada iteración o vuelta de la espiral?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Determinar objetivos, Evaluar y mitigar riesgos, Desarrollar y probar, y Planificar la siguiente fase.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Venta, Marketing, Facturación y Cobranza.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Codificar, Compilar, Depurar y Borrar.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Entrevista, Contrato, Juicio y Firma.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Determinar objetivos, Evaluar y mitigar riesgos, Desarrollar y probar, y Planificar la siguiente fase."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Cuadrantes del Modelo en Espiral",
        "priority": "ALTA",
        "explanation": "El modelo en espiral recorre cuatro cuadrantes: 1) Definición de objetivos y restricciones; 2) Análisis y reducción de riesgos; 3) Desarrollo y validación del producto; 4) Revisión y planificación del siguiente ciclo.",
        "exam_tip": "El rasgo distintivo de la Espiral es el cuadrante de Análisis y Mitigación de Riesgos."
      },
      {
        "id": 17,
        "prompt": "¿Qué técnica de testing dinámico divide el dominio de entrada de un programa en clases de datos de las cuales se puede derivar casos de prueba representativos?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Partición de Equivalencia (Equivalence Partitioning).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Prueba de regresión estocástica.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Inspección de Fagan de código.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Análisis estático de complejidad ciclomática.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Partición de Equivalencia (Equivalence Partitioning)."
        ],
        "module": "M2",
        "lecture": "L3",
        "topic": "Técnicas de Caja Negra: Partición de Equivalencia",
        "priority": "ALTA",
        "explanation": "La partición en clases de equivalencia es un método de caja negra que divide las entradas válidas e inválidas en subconjuntos que se asume producen un comportamiento análogo en el software.",
        "exam_tip": "Entradas válidas e inválidas divididas en rangos = Partición de Equivalencia."
      },
      {
        "id": 18,
        "prompt": "En el caso del Hotel (TP2), se están detectando y mitigando fallas de datos, de control, de entrada/salida, de interfaz y de gestión de almacenamiento. ¿En qué fase del ciclo de vida se ejecutan formalmente estas verificaciones?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Fase de Pruebas e Integración del Sistema.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Fase de Estudio de Viabilidad Comercial.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Fase de Negociación Salarial de Desarrolladores.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Fase de Firma del Contrato de Alquiler de Servidores.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Fase de Pruebas e Integración del Sistema."
        ],
        "module": "M2",
        "lecture": "L3",
        "topic": "Testing de Sistema e Integración",
        "priority": "ALTA",
        "explanation": "Las fallas de almacenamiento, interfaz y control se evalúan exhaustivamente durante las etapas de pruebas de integración y pruebas de sistema previo a la entrega UAT al cliente.",
        "exam_tip": "Detección de fallas en conjunto = Fase de Testing / Integración."
      },
      {
        "id": 19,
        "prompt": "¿Qué cualidad de una Especificación de Requerimientos de Software (SRS) según el estándar IEEE 830 indica que es posible rastrear el origen de cada requerimiento hacia atrás y hacia adelante en el código y pruebas?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Trazabilidad (Traceability).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Atomicidad transaccional.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Redundancia controlada.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Portabilidad binaria.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Trazabilidad (Traceability)."
        ],
        "module": "M2",
        "lecture": "L2",
        "topic": "Cualidades de una buena SRS (IEEE 830)",
        "priority": "ALTA",
        "explanation": "Un requerimiento es trazable si facilita referencias hacia adelante (hacia el diseño, código y casos de prueba) y hacia atrás (hacia la necesidad original del cliente o interesado).",
        "exam_tip": "Rastrear de punta a punta = Trazabilidad (RTM)."
      },
      {
        "id": 20,
        "prompt": "Indica si la siguiente afirmación es Verdadera o Falsa: 'En el marco Scrum, el Scrum Master tiene la autoridad para asignar tareas directamente a cada desarrollador y decidir qué historias entran en el Sprint'.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "FALSO"
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Autoorganización en Scrum",
        "priority": "ALTA",
        "explanation": "FALSO. El equipo de desarrollo es autoorganizado: decide por sí mismo cómo realizar el trabajo técnico. El Product Owner prioriza qué entra y el Scrum Master actúa como líder de servicio, sin ejercer rol de jefe autoritario.",
        "exam_tip": "El equipo se autoorganiza; el Scrum Master no asigna tareas."
      }
    ]
  },
  "ia": {
    "id": "ia",
    "name": "Inteligencia Artificial",
    "code": "IA-1",
    "icon": "🧠",
    "color": "#a855f7",
    "accentGlow": "rgba(168, 85, 247, 0.25)",
    "university": "Universidad Siglo 21",
    "career": "Lic. en Informática / Inteligencia Artificial",
    "badge": "Módulos 1 & 2 • AP1, AP2, TP1 & TP2 • 3 Modelos 3D",
    "description": "Explora los paradigmas clásicos y modernos de Russell & Norvig: agentes inteligentes racionales PEAS, modelos fundacionales y LLMs (Transformers y Auto-atención), espacios de búsqueda y algoritmos informados (A*, voraz), lógica e inferencia simbólica, sistemas expertos, incertidumbre con Teorema de Bayes y redes bayesianas.",
    "stats": {
      "modules": 2,
      "lectures": 8,
      "questions": 20,
      "flashcards": 12,
      "cases": 4,
      "models3d": 3
    },
    "modules": [
      {
        "id": "M1",
        "name": "Módulo 1: Fundamentos, Agentes Inteligentes, Modelos Fundacionales (LLMs) y Ecosistema Tecnológico",
        "lectures": [
          {
            "id": "L1",
            "title": "Lectura 1: Conceptos, Paradigmas e Historia de la IA",
            "summary": "Naturaleza multidisciplinaria de la IA. La taxonomía de Russell y Norvig (2016) organiza la disciplina en cuatro enfoques: 1) Pensar como humanos (ciencia cognitiva); 2) Actuar como humanos (Test de Alan Turing, 1950, que evalúa PLN, representación del conocimiento, razonamiento automatizado y aprendizaje); 3) Pensar racionalmente (las leyes del pensamiento basadas en la lógica aristotélica); 4) Actuar racionalmente (el Agente Racional que busca maximizar el resultado esperado). Hitos históricos: neurona de McCulloch y Pitts (1943), Conferencia de Dartmouth (1956) donde John McCarthy acuña el término, los Inviernos de la IA y el renacimiento contemporáneo impulsado por Big Data, GPUs y Deep Learning.",
            "key_concepts": [
              {
                "term": "Test de Turing (1950)",
                "def": "Prueba operacional de inteligencia donde un evaluador humano conversa a ciegas con una computadora y un humano para determinar si la máquina puede imitar convincentemente la conducta humana."
              },
              {
                "term": "Agente Racional",
                "def": "Sistema que percibe su entorno y actúa de manera de maximizar el valor esperado de su medida de rendimiento, dado su historial de percepciones y conocimiento."
              },
              {
                "term": "IA Simbólica vs Conexionista",
                "def": "Simbólica (GOFAI): manipulación explícita de reglas y símbolos lógicos. Conexionista: redes neuronales y aprendizaje estadístico a partir de grandes volúmenes de datos."
              }
            ],
            "exam_traps": [
              "El enfoque unificador moderno adoptado por Russell y Norvig es el de 'Actuar Racionalmente' (Agente Racional), no el de 'Actuar como humanos' (Test de Turing).",
              "Racionalidad no significa perfección ni saber el futuro; significa tomar la mejor decisión posible con la información disponible."
            ]
          },
          {
            "id": "L2",
            "title": "Lectura 2: Agentes Inteligentes y Autonomía",
            "summary": "Concepto formal de Agente: Sensores, Percepciones, Función de Agente f: P* -> A, Actuadores y Acciones. Racionalidad y su distinción con la omnisciencia. Especificación del entorno mediante el marco PEAS (Performance, Environment, Actuators, Sensors). Propiedades fundamentales de los entornos: Totalmente vs Parcialmente observable, Determinista vs Estocástico, Episódico vs Secuencial, Estático vs Dinámico, Discreto vs Continuo, Monagente vs Multiagente. Taxonomía de agentes: Reactivo simple, Reactivo basado en modelos, Basado en objetivos, Basado en utilidad, y Agente que aprende.",
            "key_concepts": [
              {
                "term": "Marco PEAS",
                "def": "Metodología formal para definir el problema del agente: Performance (medida de rendimiento), Environment (entorno operativo), Actuators (actuadores disponibles), Sensors (sensores de percepción)."
              },
              {
                "term": "Agente con Modelo",
                "def": "Mantiene un estado interno que rastrea partes del entorno que no son observables en el instante presente."
              },
              {
                "term": "Agente Basado en Utilidad",
                "def": "Utiliza una función de utilidad cuantitativa para sopesar trade-offs entre múltiples objetivos en conflicto en entornos inciertos."
              }
            ],
            "exam_traps": [
              "En entornos parcialmente observables (como en el caso de alarmas domiciliarias AP1), un agente reactivo simple fracasa por falta de memoria del estado del mundo; se requiere un agente con modelo interno."
            ]
          },
          {
            "id": "L3",
            "title": "Lectura 3: Modelos Fundacionales y LLMs",
            "summary": "Concepto de Modelo Fundacional (Bommasani et al., 2021): modelos entrenados sobre volúmenes masivos de datos no estructurados mediante aprendizaje autosupervisado, adaptables a múltiples tareas posteriores. Grandes Modelos de Lenguaje (LLMs). Arquitectura Transformer (Vaswani et al., 2017) y el Mecanismo de Auto-Atención (Self-Attention con matrices Query, Key y Value). Etapas del ciclo de vida de un LLM: Preentrenamiento, Fine-Tuning Supervisado (SFT) y Alineación mediante RLHF (Reinforcement Learning from Human Feedback). Limitaciones críticas: alucinaciones, sesgos estadísticos y ventana de contexto finita. Técnicas de mitigación: Generación Aumentada por Recuperación (RAG) y Chain-of-Thought prompting.",
            "key_concepts": [
              {
                "term": "Mecanismo de Auto-Atención",
                "def": "Permite calcular la afinidad y ponderación contextual de cada palabra en una secuencia con respecto a todas las demás de forma paralela en GPU."
              },
              {
                "term": "Alucinación en LLM",
                "def": "Generación de afirmaciones convincentes pero falsas o inventadas debido a la naturaleza puramente probabilística del modelo."
              },
              {
                "term": "RAG (Retrieval-Augmented Generation)",
                "def": "Técnica que combina la consulta del usuario con fragmentos recuperados de una base de conocimiento verificada antes de generar la respuesta."
              }
            ],
            "exam_traps": [
              "Los LLMs no 'entienden' ni razonan lógicamente de forma simbólica nativa; generan predicciones estadísticas de tokens. Por eso requieren RAG para tareas de información fáctica municipal o legal."
            ]
          },
          {
            "id": "L4",
            "title": "Lectura 4: Ecosistema Tecnológico de la IA",
            "summary": "El stack tecnológico contemporáneo. Lenguajes de programación: predominio de Python debido a su legibilidad, comunidad y ecosistema científico (NumPy, SciPy, Pandas). Frameworks de Deep Learning: PyTorch (eager execution, dinamismo y uso masivo en investigación y producción) vs TensorFlow/Keras (Google, grafos estables y despliegues móviles TFLite). Librerías de ML clásico: Scikit-Learn. Aceleradores de hardware: GPUs con núcleos Tensor de NVIDIA (CUDA) y TPUs de Google. Disciplina de MLOps: reproducibilidad, versionado de modelos (MLflow) y riesgos de seguridad del código generado por IA.",
            "key_concepts": [
              {
                "term": "PyTorch vs TensorFlow",
                "def": "PyTorch destaca por su flexibilidad y facilidad de depuración dinámica; TensorFlow por su infraestructura de despliegue en producción masiva y dispositivos embebidos."
              },
              {
                "term": "Aceleración CUDA / GPU",
                "def": "Ejecución paralela masiva de operaciones matriciales (multiplicación y suma de tensores) indispensables para el entrenamiento de redes neuronales."
              },
              {
                "term": "Riesgo de Código por IA",
                "def": "Generación de código vulnerable, alucinación de paquetes inexistentes o deuda técnica por dependencia de 'cajas negras'."
              }
            ],
            "exam_traps": [
              "El uso de herramientas de asistencia de código con IA requiere SIEMPRE revisión humana de seguridad (Code Review) y pruebas automatizadas rigurosas."
            ]
          }
        ]
      },
      {
        "id": "M2",
        "name": "Módulo 2: Búsqueda en Espacios de Estados, Heurísticas (A*), Lógica y Razonamiento Probabilístico",
        "lectures": [
          {
            "id": "L1",
            "title": "Lectura 1: Formulación de Problemas y Espacios de Búsqueda",
            "summary": "Agentes que resuelven problemas mediante búsqueda sistemática. Los 5 componentes formales de un problema: 1) Estado inicial, 2) Acciones posibles, 3) Modelo de transición, 4) Test de objetivo y 5) Costo del camino. Distinción entre árbol de búsqueda y grafo de búsqueda (conjunto explorado / lista cerrada para evitar ciclos). Algoritmos de Búsqueda No Informada (a ciegas): Búsqueda en Anchura (BFS, completa, óptima para costos iguales, pero memoria exponencial O(b^d)), Búsqueda en Profundidad (DFS, bajo consumo de memoria pero no óptima ni completa en espacios infinitos), Búsqueda de Costo Uniforme (UCS / Dijkstra, óptima para costos positivos) y Búsqueda con Profundidad Iterativa (IDDFS, combina lo mejor de BFS y DFS).",
            "key_concepts": [
              {
                "term": "Búsqueda en Anchura (BFS)",
                "def": "Expande el nodo más superficial usando una cola FIFO. Completa y óptima para pasos de costo uniforme, pero limitada por memoria exponencial."
              },
              {
                "term": "Búsqueda en Profundidad (DFS)",
                "def": "Expande el nodo más profundo usando una pila LIFO. Consume poca memoria O(b*m), pero puede quedar atrapada en bucles infinitos."
              },
              {
                "term": "Búsqueda de Costo Uniforme (UCS)",
                "def": "Expande el nodo con menor costo acumulado g(n) usando una cola de prioridad."
              }
            ],
            "exam_traps": [
              "La principal desventaja de BFS NO es el tiempo, sino el consumo crítico de MEMORIA O(b^d), que agota la RAM en pocos niveles de profundidad."
            ]
          },
          {
            "id": "L2",
            "title": "Lectura 2: Búsquedas Heurísticas y Optimización",
            "summary": "Uso de conocimiento específico del dominio a través de funciones heurísticas h(n). Búsqueda Voraz Primero el Mejor (Greedy Best-First: evalúa f(n) = h(n), rápida pero no óptima ni completa). Algoritmo A*: función de evaluación f(n) = g(n) + h(n). Propiedades formales de las heurísticas: 1) Admisibilidad: h(n) <= h*(n) (nunca sobrestima el costo real; garantiza optimalidad en árboles); 2) Consistencia o Monotonía: h(n) <= c(n, a, n') + h(n') (desigualdad triangular; garantiza optimalidad en grafos sin necesidad de reabrir nodos de la lista cerrada); 3) Dominancia: una heurística más cercana a h* domina y expande menos nodos. Búsqueda local: Hill Climbing y Simulated Annealing (Recocido Simulado).",
            "key_concepts": [
              {
                "term": "Algoritmo A*",
                "def": "Algoritmo de búsqueda informada óptimo y completo que expande nodos según f(n) = g(n) + h(n)."
              },
              {
                "term": "Heurística Admisible",
                "def": "Función que nunca sobrestima el costo real mínimo para llegar a la meta (es optimista)."
              },
              {
                "term": "Heurística Consistente",
                "def": "Para cada nodo n y sucesor n', el costo estimado no decrece más que el costo del paso: h(n) <= c(n, a, n') + h(n'). Toda heurística consistente es admisible."
              }
            ],
            "exam_traps": [
              "Toda heurística consistente es admisible, pero NO toda heurística admisible es consistente.",
              "Si h(n) = 0 para todo nodo, A* se convierte exactamente en la Búsqueda de Costo Uniforme (UCS / Dijkstra)."
            ]
          },
          {
            "id": "L3",
            "title": "Lectura 3: Conocimiento, Lógica e Inferencia",
            "summary": "Agentes basados en conocimiento (KB) y el paradigma simbólico. Lógica Proposicional: sintaxis, semántica, tablas de verdad, validez (tautología) y satisfactibilidad. Mecanismos formales de inferencia: Modus Ponens, Modus Tollens y la Regla de Resolución de Robinson sobre Forma Normal Conjuntiva (FNC) mediante prueba por contradicción. Algoritmos de encadenamiento: Encadenamiento hacia adelante (Forward Chaining: dirigido por datos, aplica reglas para derivar nuevos hechos) y Encadenamiento hacia atrás (Backward Chaining: dirigido por metas, busca premisas necesarias para validar un objetivo). Introducción a la Lógica de Primer Orden (LPO) con cuantificadores universales (∀) y existenciales (∃).",
            "key_concepts": [
              {
                "term": "Base de Conocimiento (KB)",
                "def": "Conjunto de oraciones expresadas en un lenguaje de representación formal que describen hechos y reglas sobre el mundo."
              },
              {
                "term": "Forward Chaining",
                "def": "Razonamiento data-driven que parte de hechos conocidos y dispara reglas SI... ENTONCES... para inferir conclusiones."
              },
              {
                "term": "Backward Chaining",
                "def": "Razonamiento goal-driven que parte de una hipótesis o meta y retrocede verificando si los antecedentes de las reglas se cumplen."
              }
            ],
            "exam_traps": [
              "En sistemas normativos y regulatorios donde los hechos se presentan al inicio (como despacho de vuelos en TP2), Forward Chaining es el método idóneo para validar permisos."
            ]
          },
          {
            "id": "L4",
            "title": "Lectura 4: Sistemas Expertos y Gestión de la Incertidumbre",
            "summary": "Arquitectura clásica de un Sistema Experto: Base de Conocimientos (reglas heurísticas del especialista), Memoria de Trabajo (hechos del caso), Motor de Inferencia y Módulo de Explicación (capacidad de justificar trazas de razonamiento ante usuarios). Razonamiento con incertidumbre en dominios no deterministas: Teorema de Bayes para calcular probabilidades a posteriori P(H|E) = [P(E|H) * P(H)] / P(E). Redes Bayesianas: Grafos Acíclicos Dirigidos (DAG) que modelan relaciones de independencia condicional con Tablas de Probabilidad Condicional (CPT). Ontologías formales de dominio (OWL/RDF) para integración semántica entre sistemas dispares.",
            "key_concepts": [
              {
                "term": "Sistema Experto",
                "def": "Programa de computación que emula la habilidad decisoria de un especialista humano separando explícitamente el conocimiento de su motor de inferencia."
              },
              {
                "term": "Teorema de Bayes",
                "def": "Fórmula matemática para actualizar la probabilidad de una hipótesis a medida que se recopilan nuevas evidencias o mediciones de sensores."
              },
              {
                "term": "Red Bayesiana",
                "def": "Estructura probabilística gráfica en red que codifica dependencias causales e independencias condicionales de variables aleatorias."
              },
              {
                "term": "Ontología",
                "def": "Especificación explícita y formal de una conceptualización compartida que resuelve problemas de terminología heterogénea entre sistemas."
              }
            ],
            "exam_traps": [
              "El Módulo de Explicación es la característica distintiva que diferencia a un Sistema Experto de una red neuronal clásica 'caja negra'.",
              "Para unificar sistemas con vocabularios discordantes (como en la Aerolínea TP2), la solución formal es una Ontología en OWL."
            ]
          }
        ]
      }
    ],
    "cases": [
      {
        "id": "AP1",
        "title": "Actividad Práctica 1: Monitoreo de Alarmas Domiciliarias con Agentes Inteligentes",
        "scenario": "Empresa de seguridad privada monitorea 3000 propiedades con sensores de movimiento, puertas y rotura de vidrio. Cientos de alertas nocturnas son falsas alarmas (gatos, ramas por viento, baterías bajas). Operadores humanos deciden a mano con planillas a cuáles enviar los pocos móviles disponibles. En tormentas la situación colapsa: patrullas van a falsas alarmas mientras robos reales quedan desatendidos. Se solicita diseñar la lógica de un agente inteligente para asistir la toma de decisiones.",
        "analysis": "1) Formulación PEAS: Rendimiento = Reducción al mínimo de falsas alarmas atendidas por patrullas, cero intrusiones reales ignoradas, tiempo medio de respuesta mínimo; Entorno = 3000 inmuebles en la ciudad, condiciones climáticas (viento, lluvia, tormenta), flota finita de patrullas; Actuadores = Recomendación de despacho de patrulla priorizada con nivel de confianza explicable, alerta de verificación telefónica/cámara; Sensores = Disparo de sensores PIR, contactos magnéticos, sensores acústicos, telemetría de batería del sensor, datos meteorológicos en tiempo real de la estación de la ciudad. 2) Propiedades del Entorno: Parcialmente observable (los sensores no distinguen visualmente la causa del evento), Estocástico (ruido ambiental y viento introducen aleatoriedad), Secuencial (enviar una patrulla la deja indisponible para futuras alertas), Dinámico (la situación en el terreno cambia mientras el operador delibera), Continuo (tiempo de respuesta y mediciones analógicas), Multiagente (delincuentes, propietarios, animales). 3) Arquitectura de Agente: Agente reactivo basado en modelos con razonamiento probabilístico bayesiano (o agente basado en utilidad). Mantiene un modelo del estado de cada propiedad y calcula P(Robo Real | Sensores disparados, Velocidad del viento, Historial).",
        "resolution_steps": [
          "1. Definir la especificación PEAS completa incorporando datos meteorológicos como entrada sensorial clave.",
          "2. Modelar el entorno como parcialmente observable y estocástico, descartando agentes reactivos simples.",
          "3. Diseñar una Red Bayesiana que correlacione múltiples disparos simultáneos con la velocidad del viento y la salud del sensor.",
          "4. Implementar una función de utilidad que priorice el despacho de patrullas hacia alertas con alta probabilidad de intrusión real."
        ]
      },
      {
        "id": "AP2",
        "title": "Actividad Práctica 2: Planta de Manufactura de Envases Plásticos (Mantenimiento Predictivo)",
        "scenario": "Planta con 4 líneas de producción y 60 máquinas. Sensores de vibración, temperatura y consumo eléctrico reportan cada pocos segundos. Decenas de alertas simultáneas en turnos pico y solo 3 técnicos de mantenimiento disponibles. El supervisor asigna técnicos por cercanía visual, generando desatención en fallas críticas (ej. extrusora con falla eléctrica) mientras se atienden vibraciones menores. Se pide diseñar la lógica de un sistema de asistencia inteligente.",
        "analysis": "1) Formulación PEAS: Rendimiento = Maximizar el uptime de las líneas, minimizar costo financiero de paradas no programadas, tiempo de respuesta a fallas de alta criticidad; Entorno = 60 máquinas distribuidas en 4 líneas, 3 técnicos móviles; Actuadores = Asignación y ruta guiada a cada técnico en tablet con diagnóstico presuntivo previo y piezas de repuesto recomendadas; Sensores = Sensores de vibración (acelerómetros), temperatura (termocuplas), amperímetros de consumo y ubicación/estado de los técnicos. 2) Tipo de Agente: Agente Basado en Utilidad con Mantenimiento Predictivo. La utilidad U pondera la criticidad de la máquina en la línea de producción y la probabilidad calculada de paro inminente: U = Criticidad * P(Falla grave) * Costo/hora de paro - Costo de traslado.",
        "resolution_steps": [
          "1. Formalizar la matriz de criticidad de las 60 máquinas (identificando cuellos de botella como las extrusoras).",
          "2. Integrar lecturas continuas de telemetría sensorial en una Red Bayesiana de diagnóstico de fallas incipientes.",
          "3. Implementar un algoritmo de asignación óptima de técnicos basado en utilidad y distancia en planta.",
          "4. Generar reportes de diagnóstico explicables para que el técnico llegue al lugar con los repuestos adecuados."
        ]
      },
      {
        "id": "TP1",
        "title": "Trabajo Práctico 1: Proyecto Ciudades Inteligentes (Semáforos Adaptativos y Asistente Virtual)",
        "scenario": "Municipio en programa de Ciudades Inteligentes. Dos frentes: 1) Avenida Central con semáforos fijos de hace 10 años que colapsan en horas pico (7 AM colectivos) y desperdician verde a las 3 PM; propuesta: sensores inteligentes para control adaptativo. 2) Asistente Virtual ciudadano para orientar sobre trámites y clasificar reclamos (baches, luminarias, poda). 3) Equipo de datos programando en Python con herramientas de asistencia de IA con dudas de seguridad.",
        "analysis": "1) Semáforos Inteligentes de la Avenida Central: Agente Basado en Objetivos / Control Adaptativo por Aprendizaje por Refuerzo (RL). Sensores: espiras inductivas bajo asfalto y cámaras de visión artificial. Actuadores: temporizadores de luces verde/amarillo/rojo sincronizados en ola verde. Entorno: Secuencial, dinámico, continuo, multiagente cooperativo. 2) Asistente Virtual Ciudadano: Rol de los Modelos Fundacionales / LLMs basados en arquitectura Transformer. Para evitar el grave riesgo de ALUCINACIÓN (inventar ordenanzas o plazos falsos), se debe implementar una arquitectura RAG (Retrieval-Augmented Generation) sobre la base documental oficial del municipio, complementado con un clasificador supervisado para el ruteo de reclamos. 3) Buenas Prácticas de Programación Asistida con IA: Mitigar riesgos de código inseguro o paquetes inexistentes mediante Code Review humano obligatorio, pruebas automatizadas (TDD) y análisis estático con linters.",
        "resolution_steps": [
          "1. Modelar los semáforos como una red de agentes coordinados con percepción sensorial en tiempo real.",
          "2. Diseñar el pipeline del Asistente Virtual combinando LLMs con indexación vectorial RAG para cero alucinaciones.",
          "3. Establecer el protocolo de gobernanza de software con Python, control de dependencias y pruebas unitarias obligatorias."
        ]
      },
      {
        "id": "TP2",
        "title": "Trabajo Práctico 2: Aerolínea Regional (Cuatro Frentes de IA)",
        "scenario": "Aerolínea regional con 12 ciudades y 24 aviones. Cuatro frentes a resolver: 1) Reprogramación de vuelos ante cancelaciones climáticas/fallas mecánicas para minimizar retrasos acumulados; 2) Cumplimiento normativo estricto de tripulaciones y aeronaves (descansos, horas límite, habilitaciones); 3) Mantenimiento predictivo de la flota formalizando la intuición de los mecánicos más experimentados; 4) Unificación del lenguaje entre tres sistemas dispares (mantenimiento, tripulaciones y comercial) que usan términos incongruentes ('aeronave no apta' vs 'vuelo cancelado').",
        "analysis": "1) Frente 1 (Reprogramación): Formulación como Búsqueda en Espacio de Estados con Búsqueda Heurística A* o Algoritmos de Satisfacción de Restricciones (CSP). Función de evaluación f(n) = g(n) + h(n), donde g(n) es el retraso acumulado y h(n) es una heurística admisible de tiempos de vuelo mínimos. 2) Frente 2 (Normativa): Agente Basado en Conocimiento con Motor de Inferencia en Lógica Formal (Reglas SI... ENTONCES... con encadenamiento hacia adelante Forward Chaining para validación determinista antes del despacho). 3) Frente 3 (Mantenimiento Predictivo): Sistema Experto Probabilístico con Redes Bayesianas y Teorema de Bayes para calcular P(Falla crítica | Vibración, Temperatura, Horas de vuelo). 4) Frente 4 (Integración Semántica): Construcción de una Ontología Formal de Dominio en OWL/RDF que establezca los mapeos semánticos precisos entre las entidades de los tres sistemas.",
        "resolution_steps": [
          "1. Frente 1: Formular el grafo de vuelos y aplicar A* para encontrar la reasignación de flota de mínimo retraso global.",
          "2. Frente 2: Codificar las regulaciones aeronáuticas en una base de conocimiento en lógica de primer orden con Forward Chaining.",
          "3. Frente 3: Relevar a los mecánicos expertos para parametrizar las probabilidades condicionales (CPT) de la Red Bayesiana.",
          "4. Frente 4: Desarrollar la ontología en OWL definiendo que 'AeronaveNoAptaParaDespacho' implica 'VueloCancelado' y 'TripulacionLiberada'."
        ]
      }
    ],
    "flashcards": [
      {
        "cat": "AGENTES",
        "front": "¿Cuáles son los 4 elementos de la especificación PEAS de un agente?",
        "back": "Performance (Rendimiento), Environment (Entorno), Actuators (Actuadores), Sensors (Sensores).",
        "detail": "Marco formal de Russell & Norvig."
      },
      {
        "cat": "AGENTES",
        "front": "¿Qué diferencia la Racionalidad de la Omnisciencia?",
        "back": "La omnisciencia implica conocer el resultado real futuro de las acciones (saberlo todo). La racionalidad maximiza el rendimiento ESPERADO en base a la información disponible.",
        "detail": "Racionalidad = Éxito esperado, no perfección absoluta."
      },
      {
        "cat": "BUSQUEDA",
        "front": "¿Cuál es la función de evaluación del algoritmo A*?",
        "back": "f(n) = g(n) + h(n), donde g(n) es el costo real acumulado desde el inicio hasta n, y h(n) es el costo estimado restante.",
        "detail": "Algoritmo de búsqueda informada óptimo."
      },
      {
        "cat": "BUSQUEDA",
        "front": "¿Qué condición exige una heurística para ser ADMISIBLE?",
        "back": "Nunca debe sobreestimar el costo real para alcanzar la meta: 0 <= h(n) <= h*(n). Es optimista.",
        "detail": "Garantiza optimalidad de A* en árboles."
      },
      {
        "cat": "LOGICA",
        "front": "¿Qué diferencia el Encadenamiento Hacia Adelante del Hacia Atrás?",
        "back": "Forward Chaining es data-driven: parte de hechos conocidos y deriva nuevas conclusiones. Backward Chaining es goal-driven: parte de una meta y busca premisas que la satisfagan.",
        "detail": "Mecanismos de inferencia en reglas."
      },
      {
        "cat": "PROBABILIDAD",
        "front": "¿Qué calcula el Teorema de Bayes en razonamiento con incertidumbre?",
        "back": "La probabilidad a posteriori P(H|E) de una hipótesis tras observar nueva evidencia: P(H|E) = [P(E|H) * P(H)] / P(E).",
        "detail": "Actualización continua de creencias."
      },
      {
        "cat": "LLM",
        "front": "¿Qué es la 'Alucinación' en un Modelo de Lenguaje (LLM)?",
        "back": "La generación fluida de afirmaciones que parecen verdaderas pero son fácticamente incorrectas o inventadas por el modelo probabilístico.",
        "detail": "Se mitiga utilizando arquitecturas RAG."
      },
      {
        "cat": "ONTOLOGIAS",
        "front": "¿Para qué sirve una Ontología Formal en Inteligencia Artificial?",
        "back": "Para definir explícitamente conceptos, relaciones y axiomas compartidos de un dominio, permitiendo que sistemas heterogéneos interoperen con semántica unificada.",
        "detail": "Caso Aerolínea TP2: OWL/RDF."
      }
    ],
    "questions": [
      {
        "id": 1,
        "prompt": "Según la clasificación canónica de Russell y Norvig (2016), ¿cuáles son los 4 enfoques fundamentales para definir la Inteligencia Artificial?",
        "kind": "multiple",
        "options": [
          {
            "index": 0,
            "text": "Sistemas que piensan como humanos (Modelado cognitivo).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Sistemas que actúan como humanos (Test de Turing).",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Sistemas que piensan racionalmente (Leyes del pensamiento / Lógica).",
            "is_correct": true
          },
          {
            "index": 3,
            "text": "Sistemas que actúan racionalmente (Enfoque del Agente Racional).",
            "is_correct": true
          },
          {
            "index": 4,
            "text": "Sistemas que reemplazan exclusivamente a los operarios en fábricas mecánicas.",
            "is_correct": false
          },
          {
            "index": 5,
            "text": "Sistemas de almacenamiento relacional con respaldo automático.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0,
          1,
          2,
          3
        ],
        "correct_answers": [
          "Sistemas que piensan como humanos (Modelado cognitivo).",
          "Sistemas que actúan como humanos (Test de Turing).",
          "Sistemas que piensan racionalmente (Leyes del pensamiento / Lógica).",
          "Sistemas que actúan racionalmente (Enfoque del Agente Racional)."
        ],
        "module": "M1",
        "lecture": "L1",
        "topic": "Los 4 Enfoques de Russell y Norvig",
        "priority": "ALTA",
        "explanation": "Russell y Norvig estructuran la IA en una matriz 2x2: Fidelidad al rendimiento humano vs Racionalidad ideal, aplicadas al Pensamiento o a la Acción.",
        "exam_tip": "Humano vs Racional, Pensar vs Actuar."
      },
      {
        "id": 2,
        "prompt": "En la teoría de agentes inteligentes de Russell y Norvig, ¿qué significan las siglas del marco PEAS (o REAS en español)?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Performance (Rendimiento), Environment (Entorno), Actuators (Actuadores), Sensors (Sensores).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Programs (Programas), Entities (Entidades), Architecture (Arquitectura), Software (Software).",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Process (Proceso), Execution (Ejecución), Action (Acción), Speed (Velocidad).",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Parameters (Parámetros), Errors (Errores), Accuracy (Precisión), Sampling (Muestreo).",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Performance (Rendimiento), Environment (Entorno), Actuators (Actuadores), Sensors (Sensores)."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Especificación PEAS del Agente",
        "priority": "ALTA",
        "explanation": "PEAS es el marco formal para diseñar agentes: P = Performance measure, E = Environment, A = Actuators, S = Sensors.",
        "exam_tip": "PEAS = Rendimiento, Entorno, Actuadores, Sensores."
      },
      {
        "id": 3,
        "prompt": "En el caso de monitoreo de alarmas domiciliarias (AP1 de IA), ¿por qué el entorno se clasifica como PARCIALMENTE OBSERVABLE y ESTOCÁSTICO?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Porque los sensores no revelan el estado completo del inmueble (no ven si es un gato, una rama o un ladrón) y la relación entre la alerta y el evento real incluye incertidumbre aleatoria y ruido.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Porque el sistema cuenta con cámaras en todas las habitaciones que transmiten video en vivo en resolución 4K.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Porque los operadores humanos conocen exactamente el futuro antes de que ocurra.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Porque el software funciona únicamente en entornos deterministas sin viento.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Porque los sensores no revelan el estado completo del inmueble (no ven si es un gato, una rama o un ladrón) y la relación entre la alerta y el evento real incluye incertidumbre aleatoria y ruido."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Propiedades del Entorno - Caso Alarmas AP1",
        "priority": "ALTA",
        "explanation": "Un sensor de movimiento o de rotura de vidrio envía una señal binaria sin especificar la causa física exacta (parcialmente observable). Además, el viento o la batería baja introducen perturbaciones aleatorias no deterministas (estocástico).",
        "exam_tip": "Información incompleta = Parcialmente observable. Azar / Ruido = Estocástico."
      },
      {
        "id": 4,
        "prompt": "¿Cuál es la diferencia formal entre un agente Racional y un agente Omnisciente?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "El agente racional conoce el resultado real futuro de sus acciones; el omnisciente solo conjetura.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "El agente omnisciente conoce el resultado real de sus acciones y sabe todo de antemano; el agente racional maximiza el rendimiento ESPERADO según su historial de percepciones y conocimiento disponible.",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "No existe ninguna diferencia; son términos sinónimos en la teoría de Russell y Norvig.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "El agente omnisciente es más económico de implementar que el agente racional.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "El agente omnisciente conoce el resultado real de sus acciones y sabe todo de antemano; el agente racional maximiza el rendimiento ESPERADO según su historial de percepciones y conocimiento disponible."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Racionalidad vs Omnisciencia",
        "priority": "ALTA",
        "explanation": "La omnisciencia implica conocer el futuro y los resultados de antemano, lo cual es físicamente imposible en entornos reales. La racionalidad depende del rendimiento esperado, premiando la mejor decisión posible con la información disponible al momento de actuar.",
        "exam_tip": "Racionalidad maximiza el éxito ESPERADO, no garantiza omnisciencia ni perfección absoluta."
      },
      {
        "id": 5,
        "prompt": "¿Qué propiedad matemática debe cumplir una función heurística h(n) para considerarse ADMISIBLE en el algoritmo de búsqueda A*?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Nunca debe sobreestimar el costo real para alcanzar el objetivo más cercano: 0 <= h(n) <= h*(n).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Debe ser siempre mayor que el costo real acumulado g(n).",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Debe ser un número negativo en todos los nodos frontera.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Debe calcularse exclusivamente mediante una red neuronal profunda.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Nunca debe sobreestimar el costo real para alcanzar el objetivo más cercano: 0 <= h(n) <= h*(n)."
        ],
        "module": "M2",
        "lecture": "L2",
        "topic": "Heurística Admisible en A*",
        "priority": "ALTA",
        "explanation": "Una heurística es admisible si es optimista y nunca sobrestima el costo real h*(n). La admisibilidad garantiza que el algoritmo A* en búsqueda en árbol siempre encuentre la solución de costo óptimo.",
        "exam_tip": "Heurística admisible = NUNCA sobrestima (es optimista). Condición: h(n) <= h*(n)."
      },
      {
        "id": 6,
        "prompt": "¿Cuál es la función de evaluación que utiliza el algoritmo A* para ordenar y expandir los nodos de la frontera?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "f(n) = h(n)",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "f(n) = g(n) + h(n)",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "f(n) = g(n) - h(n)",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "f(n) = g(n) * h(n)",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "f(n) = g(n) + h(n)"
        ],
        "module": "M2",
        "lecture": "L2",
        "topic": "Fórmula del Algoritmo A*",
        "priority": "ALTA",
        "explanation": "A* combina el costo real acumulado desde el inicio hasta el nodo n (g(n)) con la estimación heurística restante hasta el objetivo (h(n)): f(n) = g(n) + h(n).",
        "exam_tip": "g(n) = costo real recorrido; h(n) = costo estimado futuro; f(n) = costo total estimado."
      },
      {
        "id": 7,
        "prompt": "En el caso práctico de la Aerolínea Regional (TP2 de IA), el segundo frente requiere verificar condiciones normativas de tripulaciones y aeronaves (descansos mínimos, horas máximas, habilitación del piloto). ¿Qué paradigma de IA es el más apropiado para este frente?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Agente basado en conocimiento con un Motor de Inferencia en Lógica Formal (Reglas deterministas SI... ENTONCES...).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Un modelo generativo de imágenes por difusión.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Algoritmo genético probabilístico con mutación aleatoria.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Búsqueda en profundidad no informada (DFS) ciega.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Agente basado en conocimiento con un Motor de Inferencia en Lógica Formal (Reglas deterministas SI... ENTONCES...)."
        ],
        "module": "M2",
        "lecture": "L3",
        "topic": "Sistemas Basados en Lógica - Caso Aerolínea TP2",
        "priority": "ALTA",
        "explanation": "Las regulaciones aeronáuticas son reglas estrictas, verificables y no admiten margen de ambigüedad ni probabilidades. Un motor de inferencia lógico con Forward Chaining verifica el cumplimiento exhaustivo de cada norma antes de autorizar el despacho.",
        "exam_tip": "Normas y leyes estrictas = Lógica simbólica y motores de inferencia deterministas."
      },
      {
        "id": 8,
        "prompt": "En el cuarto frente del caso de la Aerolínea (TP2), los tres sistemas (mantenimiento, tripulaciones y comercial) usan términos distintos para referirse a la misma situación (ej. 'aeronave no apta' vs 'vuelo cancelado'). ¿Qué herramienta tecnológica resuelve formalmente esta disparidad conceptual?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Una Ontología Formal de Dominio (representada en OWL/RDF).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Reemplazar los tres sistemas por una única hoja de cálculo en Excel.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Entrenar un modelo de redes neuronales convolucionales para visión artificial.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Ejecutar una búsqueda en anchura no informada.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Una Ontología Formal de Dominio (representada en OWL/RDF)."
        ],
        "module": "M2",
        "lecture": "L4",
        "topic": "Ontologías y Web Semántica - Caso Aerolínea TP2",
        "priority": "ALTA",
        "explanation": "Una ontología explicita la conceptualización compartida del dominio: define clases, propiedades y relaciones lógicas que permiten a sistemas heterogéneos interoperar unificando su semántica.",
        "exam_tip": "Vocabulario común, semántica compartida entre sistemas heterogéneos = Ontología."
      },
      {
        "id": 9,
        "prompt": "En los Modelos Fundacionales y Grandes Modelos de Lenguaje (LLMs) como GPT o Gemini, ¿cuál es el mecanismo central introducido por la arquitectura Transformer (Vaswani et al., 2017) que permite procesar relaciones a larga distancia en el texto?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Mecanismo de Auto-Atención (Self-Attention con matrices Query, Key, Value).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Árboles binarios de decisión recursivos.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Cálculo relacional de tuplas y dominios.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Tablas de asignación estática de memoria RAM.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Mecanismo de Auto-Atención (Self-Attention con matrices Query, Key, Value)."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Arquitectura Transformer y Auto-Atención",
        "priority": "ALTA",
        "explanation": "El mecanismo de auto-atención permite que cada token de una oración preste atención ponderada a todos los demás tokens de la secuencia en paralelo, superando las limitaciones secuenciales de las redes recurrentes (RNNs).",
        "exam_tip": "Transformer = Auto-Atención (Self-Attention Q, K, V)."
      },
      {
        "id": 10,
        "prompt": "En el caso de Ciudades Inteligentes (TP1 de IA), el municipio evalúa un Asistente Virtual para trámites y reclamos vecinales. ¿Qué fenómeno riesgoso de los LLMs debe mitigarse mediante técnicas como RAG (Retrieval-Augmented Generation)?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Alucinación (generación fluida de respuestas que parecen verdaderas pero son fácticamente falsas o inventadas).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Consumo de energía cero en los servidores de la municipalidad.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Falta absoluta de sintaxis en las respuestas del modelo.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Incapacidad para leer caracteres en español.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Alucinación (generación fluida de respuestas que parecen verdaderas pero son fácticamente falsas o inventadas)."
        ],
        "module": "M1",
        "lecture": "L3",
        "topic": "Alucinación en LLMs y Mitigación con RAG",
        "priority": "ALTA",
        "explanation": "Los LLMs predicen tokens probabilísticos, por lo que pueden inventar ordenanzas o plazos inexistentes con total seguridad aparente. RAG conecta el LLM a documentos oficiales verificados para fundamentar sus respuestas en hechos reales.",
        "exam_tip": "Textos convincentes pero inventados = Alucinación. Solución = RAG + Verificación."
      },
      {
        "id": 11,
        "prompt": "En el razonamiento con incertidumbre, ¿cuál es el teorema matemático formal que permite actualizar la probabilidad de una hipótesis H tras observar una nueva evidencia E?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Teorema de Pitágoras.",
            "is_correct": false
          },
          {
            "index": 1,
            "text": "Teorema de Bayes: P(H|E) = [P(E|H) * P(H)] / P(E).",
            "is_correct": true
          },
          {
            "index": 2,
            "text": "Ley de Codd de integridad referencial.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Regla de De Morgan para conjuntos disjuntos.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          1
        ],
        "correct_answers": [
          "Teorema de Bayes: P(H|E) = [P(E|H) * P(H)] / P(E)."
        ],
        "module": "M2",
        "lecture": "L4",
        "topic": "Teorema de Bayes e Inferencia Probabilística",
        "priority": "ALTA",
        "explanation": "El Teorema de Thomas Bayes calcula la probabilidad a posteriori P(H|E) a partir de la probabilidad a priori P(H), la verosimilitud P(E|H) y la probabilidad marginal de la evidencia P(E).",
        "exam_tip": "Actualización de creencias ante nueva evidencia = Teorema de Bayes."
      },
      {
        "id": 12,
        "prompt": "¿Cuáles son las dos principales complejidades computacionales que caracterizan a la Búsqueda en Anchura (BFS)?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Tiempo O(b^d) y Memoria O(b^d), siendo la memoria su mayor cuello de botella en problemas reales.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Tiempo O(b*d) y Memoria O(1) constante.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Tiempo lineal y memoria cero.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Tiempo polinómico y memoria indeterminada.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Tiempo O(b^d) y Memoria O(b^d), siendo la memoria su mayor cuello de botella en problemas reales."
        ],
        "module": "M2",
        "lecture": "L1",
        "topic": "Complejidad de Búsqueda No Informada",
        "priority": "ALTA",
        "explanation": "BFS almacena todos los nodos del nivel actual y genera todos los del nivel siguiente en memoria (cola FIFO). Con factor de ramificación b y profundidad d, la memoria crece exponencialmente como O(b^d), saturando la RAM antes de que el tiempo sea el límite.",
        "exam_tip": "BFS almacena niveles completos en cola -> Memoria exponencial O(b^d)."
      },
      {
        "id": 13,
        "prompt": "En el caso práctico de la Fábrica de Envases Plásticos (AP2 de IA), se tienen 60 máquinas con sensores y solo 3 técnicos para atender decenas de alertas concurrentes. ¿Por qué se recomienda un Agente Basado en Utilidad en lugar de un Agente Basado en Objetivos?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Porque hay múltiples objetivos en conflicto (costo de paro vs costo de desplazamiento) y la función de utilidad permite sopesar y priorizar qué máquina genera mayor beneficio económico/operativo al ser atendida.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Porque los agentes basados en utilidad son más antiguos y fáciles de programar en C.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Porque en la fábrica no existen computadoras conectadas a internet.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Porque un agente basado en objetivos no permite leer sensores de temperatura.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Porque hay múltiples objetivos en conflicto (costo de paro vs costo de desplazamiento) y la función de utilidad permite sopesar y priorizar qué máquina genera mayor beneficio económico/operativo al ser atendida."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Agente Basado en Utilidad - Caso Fábrica AP2",
        "priority": "ALTA",
        "explanation": "Cuando hay recursos escasos (3 técnicos) y múltiples eventos simultáneos de diferente criticidad, un simple objetivo 'arreglar todo' no alcanza para decidir. La función de utilidad cuantifica el grado de deseabilidad y costo de cada acción bajo incertidumbre.",
        "exam_tip": "Recursos escasos + trade-offs entre múltiples metas = Agente Basado en Utilidad."
      },
      {
        "id": 14,
        "prompt": "En el algoritmo de búsqueda de Costo Uniforme (UCS / Dijkstra), ¿qué nodo de la frontera es seleccionado siempre para ser expandido primero?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "El nodo con el menor costo de camino acumulado g(n) desde el estado inicial.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "El nodo con el mayor valor de estimación heurística h(n).",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "El nodo más profundo del árbol de búsqueda.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Un nodo seleccionado al azar mediante una semilla aleatoria.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "El nodo con el menor costo de camino acumulado g(n) desde el estado inicial."
        ],
        "module": "M2",
        "lecture": "L1",
        "topic": "Búsqueda de Costo Uniforme (UCS)",
        "priority": "ALTA",
        "explanation": "UCS expande los nodos en orden creciente de costo acumulado g(n). Es óptimo para cualquier paso con costos positivos mayores que cero.",
        "exam_tip": "UCS evalúa g(n). Voraz evalúa h(n). A* evalúa g(n) + h(n)."
      },
      {
        "id": 15,
        "prompt": "En el primer frente del caso de la Aerolínea (TP2 de IA), el controlador debe reasignar decenas de vuelos, aviones y tripulaciones buscando la combinación que minimice los retrasos acumulados. Si se modela como búsqueda A*, ¿cuál sería una heurística h(n) admisible?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "La suma del tiempo de vuelo en línea recta de cada tramo restante a la velocidad crucero máxima posible sin vientos en contra.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "El doble del tiempo histórico promedio de vuelo con tormenta.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Un valor infinito en todas las ciudades que no tienen aeropuerto.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "El precio del pasaje aéreo en dólares.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "La suma del tiempo de vuelo en línea recta de cada tramo restante a la velocidad crucero máxima posible sin vientos en contra."
        ],
        "module": "M2",
        "lecture": "L2",
        "topic": "Heurística Admisible para Reprogramación de Vuelos",
        "priority": "ALTA",
        "explanation": "Para ser admisible, h(n) debe ser optimista y no sobreestimar el costo real. La distancia geodésica en línea recta dividida por la velocidad máxima posible representa el límite físico inferior inalcanzable, garantizando h(n) <= h*(n).",
        "exam_tip": "Distancia en línea recta o velocidad máxima = Heurística Admisible típica."
      },
      {
        "id": 16,
        "prompt": "¿En qué consiste la regla de inferencia formal denominada Modus Ponens?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Si se sabe que 'P' es verdadero y que 'P -> Q' es verdadero, entonces se infiere válidamente 'Q'.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Si se sabe que 'Q' es falso, entonces 'P' debe ser verdadero.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Si se desconoce 'P', se asume que 'Q' es falso.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Se multiplica la probabilidad de P por la probabilidad de Q.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Si se sabe que 'P' es verdadero y que 'P -> Q' es verdadero, entonces se infiere válidamente 'Q'."
        ],
        "module": "M2",
        "lecture": "L3",
        "topic": "Reglas de Inferencia Lógica: Modus Ponens",
        "priority": "ALTA",
        "explanation": "Modus Ponens (el modo de poner afirmando) es una de las reglas fundacionales de la lógica proposicional: a partir de la premisa P y la implicación P -> Q, se deriva de forma irrefutable la conclusión Q.",
        "exam_tip": "P y (P -> Q) implican necesariamente Q."
      },
      {
        "id": 17,
        "prompt": "En una Red Bayesiana (DAG), ¿qué representa cada nodo y qué representa cada arco dirigido entre nodos?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Cada nodo representa una variable aleatoria y cada arco dirigido representa una influencia causal o dependencia condicional directa.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Los nodos son servidores de red y los arcos son cables coaxiales.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Los nodos son tuplas relacionales y los arcos son claves foráneas de SQL.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Los nodos son transistores físicos de la GPU.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Cada nodo representa una variable aleatoria y cada arco dirigido representa una influencia causal o dependencia condicional directa."
        ],
        "module": "M2",
        "lecture": "L4",
        "topic": "Estructura de Redes Bayesianas",
        "priority": "ALTA",
        "explanation": "Una red bayesiana es un grafo acíclico dirigido donde los nodos son variables aleatorias (discretas o continuas) y los arcos dirigidos codifican influencias probabilísticas directas respaldadas por tablas CPT.",
        "exam_tip": "Nodo = Variable aleatoria. Arco = Dependencia condicional directa."
      },
      {
        "id": 18,
        "prompt": "En el caso de Ciudades Inteligentes (TP1 de IA), los semáforos de la Avenida Central cambian sus luces de forma adaptativa. ¿Cómo se clasifica el entorno en relación con el tiempo mientras el sistema computa su decisión?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Entorno Dinámico (el flujo vehicular cambia continuamente en las esquinas mientras el agente delibera).",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Entorno Estático (el tráfico se detiene y espera a que la computadora termine su cálculo).",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Entorno Episódico aislado.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Entorno Determinista sin perturbaciones.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Entorno Dinámico (el flujo vehicular cambia continuamente en las esquinas mientras el agente delibera)."
        ],
        "module": "M1",
        "lecture": "L2",
        "topic": "Entornos Dinámicos en Russell & Norvig",
        "priority": "ALTA",
        "explanation": "Un entorno es dinámico si cambia de estado mientras el agente está calculando o deliberando su próxima acción. El tráfico urbano es un ejemplo arquetípico de entorno dinámico y continuo.",
        "exam_tip": "El mundo cambia mientras el agente piensa = Dinámico."
      },
      {
        "id": 19,
        "prompt": "¿Por qué un problema de búsqueda que posee ciclos o bucles requiere un 'Grafo de Búsqueda' con lista cerrada (conjunto explorado) en lugar de un 'Árbol de Búsqueda' puro?",
        "kind": "single",
        "options": [
          {
            "index": 0,
            "text": "Para recordar los estados ya visitados y evitar caer en ciclos infinitos de expansión redundante.",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "Porque los grafos no consumen memoria RAM.",
            "is_correct": false
          },
          {
            "index": 2,
            "text": "Porque los árboles de búsqueda no admiten heurísticas.",
            "is_correct": false
          },
          {
            "index": 3,
            "text": "Porque los grafos se compilan más rápido en Python.",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "Para recordar los estados ya visitados y evitar caer en ciclos infinitos de expansión redundante."
        ],
        "module": "M2",
        "lecture": "L1",
        "topic": "Árbol vs Grafo de Búsqueda",
        "priority": "ALTA",
        "explanation": "La búsqueda en grafos mantiene un conjunto de estados ya explorados (lista cerrada). Si un nuevo nodo generado ya fue explorado, se descarta para evitar loops infinitos y trabajo redundante.",
        "exam_tip": "Búsqueda en grafo = Lista cerrada / conjunto explorado para podar ciclos."
      },
      {
        "id": 20,
        "prompt": "Indica si la siguiente afirmación es Verdadera o Falsa: 'Un Sistema Experto y una Red Neuronal Profunda son equivalentes en su capacidad de explicar al usuario la cadena lógica de deducciones que condujo a una conclusión'.",
        "kind": "vf",
        "options": [
          {
            "index": 0,
            "text": "FALSO",
            "is_correct": true
          },
          {
            "index": 1,
            "text": "VERDADERO",
            "is_correct": false
          }
        ],
        "correct_indices": [
          0
        ],
        "correct_answers": [
          "FALSO"
        ],
        "module": "M2",
        "lecture": "L4",
        "topic": "Trazabilidad y Explicabilidad en Sistemas Expertos",
        "priority": "ALTA",
        "explanation": "FALSO. El Sistema Experto cuenta con un 'Módulo de Explicación' explícito que traza regla por regla la justificación causal. Las redes neuronales profundas operan como 'cajas negras' subsimbólicas de muy difícil explicabilidad directa.",
        "exam_tip": "Sistemas Expertos = Altamente explicables (trazas de reglas). Redes neuronales = Cajas negras."
      }
    ]
  }
};
