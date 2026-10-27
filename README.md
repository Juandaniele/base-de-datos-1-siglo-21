# 🗄️ Base de Datos 1 - Sistema Interactivo de Estudio y Simulador de Parcial con Visualizador 3D

> **Universidad Siglo 21 • Preparación Integral para el Parcial 1 (Módulos 1 y 2 + TP1 y TP2)**

Plataforma educativa interactiva diseñada para dominar todos los conceptos teóricos, las fórmulas de álgebra relacional, los algoritmos de normalización y el banco oficial de preguntas de examen de la materia **Base de Datos 1**.

---

## 🚀 Características Principales

### 1. 🪐 Laboratorio y Espacio 3D Interactivo (Three.js)
Modelos tridimensionales con controles orbitales 360° (rotación, zoom, paneo e interactividad por clics con *raycasting*):
* **DER 3D (Caso TP2 "¿Quién quiere ser millonario?"):** Visualización espacial de jerarquía de herencia (`Personas` → `Participantes` / `Redactores`), relación reflexiva de `Temas` con anillo orbital, y tabla intermedia asociativa `ComposicionCuestionario`.
* **Cubo Volumétrico de Álgebra Relacional:** Representación tridimensional de relaciones con animaciones de corte en vivo para **Proyección ($\pi$)**, **Selección ($\sigma$)** y **Producto Cartesiano**.
* **Torre 3D de Normalización:** Plataformas suspendidas que ilustran la purificación de dependencias funcionales desde 1FN hasta BCNF.
* **Instancia Oracle 3D:** Núcleo de memoria **SGA** con los procesos de fondo (`DBWn`, `LGWR`, `CKPT`, etc.) orbitando en tiempo real.

### 2. ⏱️ Simulador de Examen Parcial Real
* **Modo Examen Oficial:** 20 preguntas aleatorias ponderadas con temporizador regresivo de 45 min y calificación sobre 100% (criterio de aprobación del 60%).
* **Modos de Práctica:** Módulo 1, Módulo 2 o Especial de Preguntas de Múltiple Opción.
* **Tipos de Pregunta Soportados:** Opción simple, selección múltiple (2, 3 o 4 respuestas como toma la facultad) y Verdadero/Falso.

### 3. 🔍 Banco de 144 Preguntas de Parcial
* 144 preguntas reales extraídas de exámenes de la Siglo 21 (Studocu/Daypo).
* Buscador en tiempo real por texto o palabra clave (ej. *SQLite, Boyce-Codd, Durabilidad, RAE*).
* Filtros por módulo, lectura y tipo de pregunta.
* Respuestas revelables con fundamentación teórica oficial y **"Tips de Examen"** que alertan sobre consignas tramposas.
* Guardado de preguntas favoritas para repaso.

### 4. 📚 Temario y Resúmenes Conectados
* Resúmenes exhaustivos de Módulo 1 (L1 a L4) y Módulo 2 (L1 a L4).
* Codificación por colores: 🔴 Prioridad Alta, 🟡 Conceptos Estructurales, ⚠️ Trampas Frecuentes.
* Enlace bidireccional entre la teoría y las preguntas de examen asociadas.

### 5. 🗂️ Flashcards de Memoria Rápida (Giro 3D)
Tarjetas de estudio interactivo para memorizar las 12 Reglas de Codd, operadores de álgebra, propiedades ACID y definiciones formales.

### 6. 📐 Laboratorio de Álgebra Relacional y Normalización
* Probador interactivo de $\cup$ Unión, $\cap$ Intersección, $-$ Diferencia, $\times$ Producto Cartesiano, $\sigma$ Selección y $\pi$ Proyección sobre tablas de alumnos.
* Asistente paso a paso de normalización: desde una tabla desordenada de facturación hasta 1FN, 2FN, 3FN y BCNF.

---

## 📦 Estructura del Repositorio

```
├── Sistema_Estudio_Interactivo/
│   ├── index.html                       # Aplicación SPA completa
│   ├── js/
│   │   ├── three.min.js                 # Motor 3D Three.js local
│   │   └── OrbitControls.js             # Controles de cámara orbital
│   └── preguntas_parcial_1_siglo21.json # Dataset de 144 preguntas enriquecidas
├── INICIAR_SISTEMA_LOCAL.bat            # Lanzador automático con 1 clic
├── Modulo 1 Lectura 1 ... pdf           # Material de estudio oficial
├── Módulo 1 - Lectura 2/3/4 ... pdf
├── Módulo 2 - Lectura 1/2/3/4 ... pdf
├── TP1 & TP2 ... pdf                    # Enunciados de trabajos prácticos
├── .gitignore
└── README.md
```

---

## 🛠️ Cómo Ejecutar el Proyecto

### Opción 1: Con el Lanzador Local (Windows)
Simplemente haz doble clic en el archivo:
```bash
INICIAR_SISTEMA_LOCAL.bat
```
Esto levantará el servidor local y abrirá automáticamente tu navegador en `http://localhost:3000`.

### Opción 2: Desde la Terminal
```bash
# Con Python
python -m http.server 3000 --directory "Sistema_Estudio_Interactivo"

# O con Node.js
npx serve Sistema_Estudio_Interactivo -l 3000
```
Luego abre en tu navegador: [http://localhost:3000](http://localhost:3000).

### Opción 3: Modo 100% Offline (Sin Servidor)
Puedes abrir directamente el archivo `Sistema_Estudio_Interactivo/index.html` en Chrome, Edge, Firefox o Brave. Todo el código y librerías 3D están empaquetados localmente.

---

## 🧠 Créditos y Referencias
* Material oficial: Universidad Siglo 21 (Cátedra de Base de Datos 1).
* Edgar F. Codd (Modelo Relacional, Álgebra y 12 Reglas).
* Peter Chen (Modelo Entidad-Relación).
* Dataset de preguntas: Evaluaciones y parciales de Studocu y Daypo.
