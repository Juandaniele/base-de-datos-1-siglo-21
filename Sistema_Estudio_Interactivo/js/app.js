/**
 * STUDY OS - MAIN APPLICATION CONTROLLER
 * Unified Multi-Subject SPA for:
 * 1. Base de Datos 1
 * 2. Ingeniería de Software
 * 3. Inteligencia Artificial
 */

(function() {
  // Global State
  const state = {
    currentSubject: 'bd',
    currentTab: 'tab-dashboard',
    // Exam state
    examActive: false,
    examQuestions: [],
    currentExamIndex: 0,
    userAnswers: {},
    examTimer: null,
    examSecondsLeft: 45 * 60,
    // Flashcard state
    flashcards: [],
    currentFcIndex: 0,
    fcFilter: 'ALL',
    // 3D Model state
    current3DModel: 'bd_der',
    // Search
    searchQuery: '',
    // Question Bank state
    bankModuleFilter: 'ALL',
    bankLectureFilter: 'ALL',
    bankSortOrder: 'recent',
    bankKindFilter: 'ALL',
    bankSourceFilter: 'ALL',
    bankSearchText: '',
    bankUserSelections: {}, // qid -> array of selected opt indices
    bankEvaluated: {},      // qid -> boolean
    bankRevealed: {},       // qid -> boolean
    bankAllRevealed: false
  };

  window.App = {
    init: init,
    switchSubject: switchSubject,
    switchTab: switchTab,
    // 3D
    switch3DModel: switch3DModel,
    toggle3DRotate: toggle3DRotate,
    reset3DCamera: reset3DCamera,
    // Flashcards
    flipFlashcard: flipFlashcard,
    nextFlashcard: nextFlashcard,
    prevFlashcard: prevFlashcard,
    filterFlashcards: filterFlashcards,
    // Exam
    startExam: startExam,
    selectExamOption: selectExamOption,
    nextExamQuestion: nextExamQuestion,
    prevExamQuestion: prevExamQuestion,
    finishExam: finishExam,
    resetExam: resetExam,
    // Bank
    filterQuestions: filterQuestions,
    applyBankFilters: applyBankFilters,
    onBankModuleChange: onBankModuleChange,
    setQuickPillFilter: setQuickPillFilter,
    selectBankOption: selectBankOption,
    checkMultipleBankQuestion: checkMultipleBankQuestion,
    resetBankQuestion: resetBankQuestion,
    resetAllBankAnswers: resetAllBankAnswers,
    toggleAllBankAnswers: toggleAllBankAnswers,
    toggleAnswer: toggleAnswer,
    // Labs
    runAlgebraOperation: runAlgebraOperation,
    runNormalizationStep: runNormalizationStep,
    runAStarStep: runAStarStep,
    calculateLifecycle: calculateLifecycle
  };

  function init() {
    // Check saved subject or default to 'bd'
    const savedSubject = localStorage.getItem('study_subject') || 'bd';
    switchSubject(savedSubject, false);

    // Init theme
    const savedTheme = localStorage.getItem('study_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Hook search input
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        handleGlobalSearch();
      });
    }

    // Init 3D Scene after DOM ready
    setTimeout(() => {
      if (window.StudyVisualizer) {
        window.StudyVisualizer.init('threeCanvas3D', 'inspectorPanel3D');
        window.StudyVisualizer.setSubject(state.currentSubject);
      }
    }, 200);
  }

  // =========================================================================
  // SUBJECT SWITCHING
  // =========================================================================
  function switchSubject(subjectId, update3D = true) {
    if (!window.STUDY_SYSTEM_DATA || !window.STUDY_SYSTEM_DATA[subjectId]) return;
    state.currentSubject = subjectId;
    localStorage.setItem('study_subject', subjectId);

    const sub = window.STUDY_SYSTEM_DATA[subjectId];

    // Update Top Subject Badges / Dropdowns / Pills
    document.querySelectorAll('.subject-pill').forEach(pill => {
      const pSub = pill.getAttribute('data-subject');
      if (pSub === subjectId) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Update CSS variables for subject accents
    document.documentElement.style.setProperty('--accent', sub.color);
    document.documentElement.style.setProperty('--accent-glow', sub.accentGlow);

    // Update Header Text
    const headerTitle = document.getElementById('headerSubjectTitle');
    const headerBadge = document.getElementById('headerSubjectBadge');
    if (headerTitle) headerTitle.innerText = sub.name;
    if (headerBadge) headerBadge.innerText = sub.badge;

    // Reset components for new subject
    renderDashboard(sub);
    renderTheory(sub);
    renderCases(sub);
    renderFlashcardsSection(sub);
    renderQuestionsBank(sub);
    setupSubject3D(sub);
    renderInteractiveLabs(sub);

    // Update 3D Visualizer
    if (update3D && window.StudyVisualizer) {
      window.StudyVisualizer.setSubject(subjectId);
    }
  }

  // =========================================================================
  // TAB NAVIGATION
  // =========================================================================
  function switchTab(tabId) {
    state.currentTab = tabId;

    // Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      const clickAttr = btn.getAttribute('onclick') || '';
      if (clickAttr.includes(tabId)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Contents
    document.querySelectorAll('.tab-content').forEach(tc => {
      if (tc.id === tabId) {
        tc.classList.add('active');
      } else {
        tc.classList.remove('active');
      }
    });

    // Window scroll to top smoothly
    if (typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handle 3D Tab resize
    if (tabId === 'tab-3d' && window.StudyVisualizer) {
      setTimeout(() => {
        window.StudyVisualizer.resize();
      }, 50);
    }
  }

  // =========================================================================
  // RENDERERS: DASHBOARD
  // =========================================================================
  function renderDashboard(sub) {
    const el = document.getElementById('dashboardContent');
    if (!el) return;

    el.innerHTML = `
      <div class="card hero-card" style="border-left: 5px solid ${sub.color}; background: linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.95));">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span style="font-size: 2rem;">${sub.icon}</span>
              <h2 style="font-size: 1.75rem; font-weight: 800; color: ${sub.color};">${sub.name}</h2>
              <span class="badge" style="background: ${sub.accentGlow}; color: ${sub.color};">${sub.code}</span>
            </div>
            <p style="color: var(--text-muted); max-width: 800px; font-size: 1rem;">${sub.description}</p>
          </div>
          <button class="btn btn-primary" onclick="App.switchTab('tab-simulator')" style="background: ${sub.color}; color: #0f172a; font-weight: 700;">
            ⏱️ Iniciar Simulador
          </button>
        </div>

        <div class="stats-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
          <div class="stat-box">
            <span class="stat-num">${sub.stats.modules}</span>
            <span class="stat-label">Módulos Oficiales</span>
          </div>
          <div class="stat-box">
            <span class="stat-num">${sub.stats.lectures}</span>
            <span class="stat-label">Lecturas Analizadas</span>
          </div>
          <div class="stat-box">
            <span class="stat-num">${sub.stats.cases}</span>
            <span class="stat-label">Casos (AP & TP)</span>
          </div>
          <div class="stat-box">
            <span class="stat-num">${sub.stats.questions}</span>
            <span class="stat-label">Preguntas de Examen</span>
          </div>
          <div class="stat-box">
            <span class="stat-num">${sub.stats.models3d}</span>
            <span class="stat-label">Escenas 3D</span>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3 style="color: ${sub.color}; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            🗺️ Mapa Conceptual y Ruta de Estudio
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
            Recorrido pedagógico optimizado para la <strong>${sub.university}</strong>:
          </p>
          <div class="roadmap-timeline">
            ${sub.modules.map((m, idx) => `
              <div class="timeline-item">
                <div class="timeline-badge">${idx + 1}</div>
                <div class="timeline-content">
                  <h4>${m.name}</h4>
                  <p>${m.lectures.map(l => l.title.split(':')[1] || l.title).join(' • ')}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <h3 style="color: ${sub.color}; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            🚀 Acceso Rápido a Herramientas
          </h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div class="quick-link" onclick="App.switchTab('tab-theory')">
              <span>📚</span>
              <div>
                <strong>Temario y Resúmenes de Alta Fidelidad</strong>
                <p>Conceptos clave, definiciones formales y trampas de examen.</p>
              </div>
            </div>
            <div class="quick-link" onclick="App.switchTab('tab-casos')">
              <span>🏢</span>
              <div>
                <strong>Casos Prácticos Oficiales (AP & TP)</strong>
                <p>Resolución detallada paso a paso y análisis teórico.</p>
              </div>
            </div>
            <div class="quick-link" onclick="App.switchTab('tab-3d')">
              <span>🪐</span>
              <div>
                <strong>Espacio 3D Interactivo</strong>
                <p>Modelos tridimensionales con rotación orbital 360°.</p>
              </div>
            </div>
            <div class="quick-link" onclick="App.switchTab('tab-flashcards')">
              <span>🗂️</span>
              <div>
                <strong>Tarjetas de Memoria Rápida (Flashcards 3D)</strong>
                <p>Repaso activo para fijar fórmulas, axiomas y leyes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // RENDERERS: THEME & RESÚMENES
  // =========================================================================
  function renderTheory(sub) {
    const el = document.getElementById('theoryContent');
    if (!el) return;

    let html = '';
    sub.modules.forEach(mod => {
      html += `
        <div class="module-section" style="margin-bottom: 2.5rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
            <span class="badge" style="background: ${sub.color}; color: #0f172a; font-weight: 800; font-size: 0.85rem;">${mod.id}</span>
            <h2 style="font-size: 1.4rem; color: var(--text-main);">${mod.name}</h2>
          </div>
          <div class="lecture-grid">
            ${mod.lectures.map(lec => `
              <div class="lecture-card${lec.detail ? ' lecture-card-wide' : ''}" style="border-top: 3px solid ${sub.color};">
                <div>
                  <span class="badge" style="background: rgba(255,255,255,0.05); color: ${sub.color}; margin-bottom: 0.5rem;">${lec.id}</span>
                  <h3>${lec.title}</h3>
                  <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${lec.summary}</p>

                  ${lec.detail && lec.detail.length > 0 ? `
                    <div class="detail-sections">
                      ${lec.detail.map(sec => `
                        <details class="detail-section" open>
                          <summary style="color: ${sub.color};">${sec.title}</summary>
                          <ul>
                            ${sec.points.map(p => `<li>${p}</li>`).join('')}
                          </ul>
                        </details>
                      `).join('')}
                    </div>
                  ` : ''}

                  <div class="key-concepts-box">
                    <strong style="color: ${sub.color}; font-size: 0.85rem; text-transform: uppercase;">Conceptos Esenciales:</strong>
                    <ul style="margin-top: 0.5rem; padding-left: 1.2rem; font-size: 0.85rem;">
                      ${lec.key_concepts.map(c => `
                        <li style="margin-bottom: 0.35rem;">
                          <strong style="color: var(--text-main);">${c.term}:</strong> 
                          <span style="color: var(--text-muted);">${c.def}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  ${lec.exam_traps && lec.exam_traps.length > 0 ? `
                    <div class="alert-box alert-vital" style="margin-top: 1rem; font-size: 0.85rem;">
                      <strong>⚠️ Alerta de Trampa de Examen:</strong>
                      <ul style="margin-top: 0.3rem; padding-left: 1.2rem;">
                        ${lec.exam_traps.map(trap => `<li>${trap}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    el.innerHTML = html;
  }

  // =========================================================================
  // RENDERERS: CASOS PRÁCTICOS & TPS
  // =========================================================================
  function renderCases(sub) {
    const el = document.getElementById('casesContent');
    if (!el) return;

    if (!sub.cases || sub.cases.length === 0) {
      el.innerHTML = '<p style="color: var(--text-muted);">No hay casos prácticos registrados para esta materia.</p>';
      return;
    }

    el.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h2>Casos Prácticos, Trabajos Prácticos (TP) y Actividades Prácticas (AP)</h2>
        <p style="color: var(--text-muted);">Análisis de los enunciados reales, desglose de variables y resolución técnica paso a paso.</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${sub.cases.map(c => `
          <div class="card case-card" style="border-left: 4px solid ${sub.color};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <div>
                <span class="badge" style="background: ${sub.accentGlow}; color: ${sub.color}; font-weight: 800;">${c.id}</span>
                <h3 style="font-size: 1.25rem; color: var(--text-main); margin-top: 0.3rem;">${c.title}</h3>
              </div>
            </div>

            <div style="background: rgba(15,23,42,0.6); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border: 1px solid var(--border);">
              <strong style="color: var(--accent); font-size: 0.85rem; text-transform: uppercase;">📖 Situación Problemática / Enunciado Oficial:</strong>
              <p style="color: var(--text-main); font-size: 0.95rem; margin-top: 0.4rem; white-space: pre-line;">${c.scenario}</p>
            </div>

            <div style="margin-bottom: 1rem;">
              <strong style="color: #fbbf24; font-size: 0.85rem; text-transform: uppercase;">🔍 Análisis Técnico y Justificación Teórica:</strong>
              <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.3rem;">${c.analysis}</p>
            </div>

            ${c.resolution_steps && c.resolution_steps.length > 0 ? `
              <div>
                <strong style="color: #22c55e; font-size: 0.85rem; text-transform: uppercase;">🛠️ Resolución y Pasos Recomendados:</strong>
                <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem;">
                  ${c.resolution_steps.map(step => `
                    <div style="display: flex; align-items: flex-start; gap: 0.6rem; background: rgba(255,255,255,0.02); padding: 0.6rem; border-radius: 6px;">
                      <span style="color: #22c55e; font-size: 1rem;">✔️</span>
                      <span style="font-size: 0.9rem; color: var(--text-main);">${step}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // =========================================================================
  // RENDERERS: FLASHCARDS
  // =========================================================================
  function renderFlashcardsSection(sub) {
    state.flashcards = sub.flashcards || [];
    state.currentFcIndex = 0;
    state.fcFilter = 'ALL';

    const filterContainer = document.getElementById('fcCategoryFilters');
    if (filterContainer) {
      // Gather unique categories
      const cats = ['ALL', ...new Set(state.flashcards.map(f => f.cat))];
      filterContainer.innerHTML = cats.map(c => `
        <button class="btn btn-outline btn-sm ${c === 'ALL' ? 'active' : ''}" onclick="App.filterFlashcards('${c}')">
          ${c === 'ALL' ? 'Todas' : c}
        </button>
      `).join(' ');
    }

    renderCurrentFlashcard();
  }

  function filterFlashcards(cat) {
    state.fcFilter = cat;
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    if (cat === 'ALL') {
      state.flashcards = sub.flashcards || [];
    } else {
      state.flashcards = (sub.flashcards || []).filter(f => f.cat === cat);
    }
    state.currentFcIndex = 0;

    // Update active button
    document.querySelectorAll('#fcCategoryFilters button').forEach(b => {
      b.classList.remove('active');
      if (b.innerText.trim() === (cat === 'ALL' ? 'Todas' : cat)) b.classList.add('active');
    });

    renderCurrentFlashcard();
  }

  function renderCurrentFlashcard() {
    const cardEl = document.getElementById('flashcardInner');
    const counterEl = document.getElementById('fcCounter');
    const badgeEl = document.getElementById('fcCatBadge');

    if (!cardEl) return;
    cardEl.classList.remove('flipped');

    if (state.flashcards.length === 0) {
      document.getElementById('fcQuestionText').innerText = 'No hay flashcards para este filtro.';
      document.getElementById('fcAnswerText').innerText = '';
      if (counterEl) counterEl.innerText = '0 / 0';
      return;
    }

    const cur = state.flashcards[state.currentFcIndex];
    document.getElementById('fcQuestionText').innerText = cur.front;
    document.getElementById('fcAnswerText').innerText = cur.back;
    document.getElementById('fcDetailText').innerText = cur.detail || '';
    if (badgeEl) badgeEl.innerText = cur.cat;
    if (counterEl) counterEl.innerText = `${state.currentFcIndex + 1} / ${state.flashcards.length}`;
  }

  function flipFlashcard() {
    const cardEl = document.getElementById('flashcardInner');
    if (cardEl) cardEl.classList.toggle('flipped');
  }

  function nextFlashcard() {
    if (state.flashcards.length === 0) return;
    state.currentFcIndex = (state.currentFcIndex + 1) % state.flashcards.length;
    renderCurrentFlashcard();
  }

  function prevFlashcard() {
    if (state.flashcards.length === 0) return;
    state.currentFcIndex = (state.currentFcIndex - 1 + state.flashcards.length) % state.flashcards.length;
    renderCurrentFlashcard();
  }

  // =========================================================================
  // RENDERERS: BANCO DE PREGUNTAS (FILTROS, ORDENAMIENTO E INTERACTIVIDAD)
  // =========================================================================
  function renderQuestionsBank(sub) {
    if (!sub || !sub.questions) return;

    // Reset subject-specific filters if needed, keeping default sort
    state.bankSearchText = '';
    const searchInput = document.getElementById('searchQuestionInput');
    if (searchInput) searchInput.value = '';

    // Populate module select dropdown dynamically
    const modSelect = document.getElementById('bankModuleSelect');
    if (modSelect) {
      const uniqueMods = [...new Set(sub.questions.map(q => q.module).filter(Boolean))].sort();
      let modHtml = `<option value="ALL">Todos los Módulos (${sub.questions.length})</option>`;
      uniqueMods.forEach(m => {
        const count = sub.questions.filter(q => q.module === m).length;
        const label = m === 'M1' ? 'Módulo 1' : (m === 'M2' ? 'Módulo 2' : m);
        modHtml += `<option value="${m}">${label} (${count})</option>`;
      });
      modSelect.innerHTML = modHtml;
      modSelect.value = state.bankModuleFilter || 'ALL';
    }

    populateSourceDropdown(sub.questions);

    // Populate lecture select dropdown dynamically
    updateLectureDropdown(sub.questions);

    // Apply filters and render cards
    applyBankFilters();
  }

  function updateLectureDropdown(questions) {
    const lecSelect = document.getElementById('bankLectureSelect');
    if (!lecSelect) return;

    let availableQuestions = questions;
    if (state.bankModuleFilter && state.bankModuleFilter !== 'ALL') {
      availableQuestions = questions.filter(q => q.module === state.bankModuleFilter);
    }

    const uniqueLecs = [...new Set(availableQuestions.map(q => q.lecture).filter(Boolean))].sort((a, b) => {
      const na = parseInt(String(a).replace(/\D/g, '') || '0', 10);
      const nb = parseInt(String(b).replace(/\D/g, '') || '0', 10);
      return na - nb;
    });

    let lecHtml = `<option value="ALL">Todas las Lecturas</option>`;
    uniqueLecs.forEach(l => {
      const count = availableQuestions.filter(q => q.lecture === l).length;
      const label = l.startsWith('L') ? `Lectura ${l.replace('L', '')}` : l;
      lecHtml += `<option value="${l}">${label} (${count})</option>`;
    });
    lecSelect.innerHTML = lecHtml;
    lecSelect.value = uniqueLecs.includes(state.bankLectureFilter) ? state.bankLectureFilter : 'ALL';
  }

  function onBankModuleChange() {
    const modSelect = document.getElementById('bankModuleSelect');
    const lecSelect = document.getElementById('bankLectureSelect');
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    if (modSelect) {
      state.bankModuleFilter = modSelect.value;
    }
    if (sub && sub.questions) {
      updateLectureDropdown(sub.questions);
    }
    if (lecSelect) {
      state.bankLectureFilter = lecSelect.value;
    }
    applyBankFilters();
  }

  function setQuickPillFilter(mod, lec) {
    state.bankModuleFilter = mod;
    state.bankLectureFilter = lec;

    const modSelect = document.getElementById('bankModuleSelect');
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];

    if (modSelect) modSelect.value = mod;
    if (sub && sub.questions) {
      updateLectureDropdown(sub.questions);
    }

    const lecSelect = document.getElementById('bankLectureSelect');
    if (lecSelect) lecSelect.value = lec;

    applyBankFilters();
  }

  function populateQuickPills(questions) {
    const pillsContainer = document.getElementById('bankQuickPills');
    if (!pillsContainer) return;

    // Collect unique module-lecture pairs
    const pairsMap = new Map();
    questions.forEach(q => {
      if (q.module && q.lecture) {
        const key = `${q.module}-${q.lecture}`;
        if (!pairsMap.has(key)) {
          pairsMap.set(key, { module: q.module, lecture: q.lecture, count: 0 });
        }
        pairsMap.get(key).count++;
      }
    });

    const getModNum = (s) => { const m = String(s || '').match(/\d+/); return m ? parseInt(m[0], 10) : 999; };
    const getLecNum = (s) => { const m = String(s || '').match(/\d+/); return m ? parseInt(m[0], 10) : 999; };

    const sortedPairs = Array.from(pairsMap.values()).sort((a, b) => {
      const ma = getModNum(a.module), mb = getModNum(b.module);
      if (ma !== mb) return ma - mb;
      const la = getLecNum(a.lecture), lb = getLecNum(b.lecture);
      return la - lb;
    });

    const isAllActive = state.bankModuleFilter === 'ALL' && state.bankLectureFilter === 'ALL';

    let html = `
      <button type="button" class="bank-pill-btn ${isAllActive ? 'active' : ''}" onclick="App.setQuickPillFilter('ALL', 'ALL')">
        Todos (${questions.length})
      </button>
    `;

    sortedPairs.forEach(p => {
      const isActive = state.bankModuleFilter === p.module && state.bankLectureFilter === p.lecture;
      html += `
        <button type="button" class="bank-pill-btn ${isActive ? 'active' : ''}" onclick="App.setQuickPillFilter('${p.module}', '${p.lecture}')">
          ${p.module} - ${p.lecture} (${p.count})
        </button>
      `;
    });

    pillsContainer.innerHTML = html;
  }

  const SOURCE_LABELS = {
    PARCIAL: 'Parcial (banco de preguntas)',
    TP1: 'Trabajo Práctico 1',
    TP2: 'Trabajo Práctico 2',
    REPASO_STUDOCU: 'Studocu · Repaso',
    INTEGRAL_STUDOCU: 'Studocu · Examen integral',
    ING_PRE2025_A: 'Studocu · Preguntero Ing. SW 2025 (archivo 1)',
    ING_PRE2025_B: 'Studocu · Preguntero Ing. SW 2025 (archivo 2, copia)',
    ING_PARCIAL2023: 'Studocu · Parcial 1 2023',
    OTRAS: 'Banco de lecturas y casos'
  };

  function questionYear(q) {
    return q.source_year || 0;
  }

  function questionSource(q) {
    return q.source || 'OTRAS';
  }

  function populateSourceDropdown(questions) {
    const sel = document.getElementById('bankSourceSelect');
    if (!sel) return;
    const counts = {};
    questions.forEach(q => { const s = questionSource(q); counts[s] = (counts[s] || 0) + 1; });
    const order = ['PARCIAL', 'TP1', 'TP2', 'REPASO_STUDOCU', 'INTEGRAL_STUDOCU', 'OTRAS'];
    const years = {};
    questions.forEach(q => { const s = questionSource(q); years[s] = Math.max(years[s] || 0, questionYear(q)); });
    const keys = Object.keys(counts).sort((a, b) => {
      if (years[a] !== years[b]) return years[b] - years[a];
      const ia = order.indexOf(a), ib = order.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b);
    });
    let html = '<option value="ALL">Todas las fuentes (' + questions.length + ')</option>';
    keys.forEach(k => {
      html += '<option value="' + k + '">' + (SOURCE_LABELS[k] || k) + ' (' + counts[k] + ')</option>';
    });
    sel.innerHTML = html;
    if (state.bankSourceFilter !== 'ALL' && !counts[state.bankSourceFilter]) state.bankSourceFilter = 'ALL';
    sel.value = state.bankSourceFilter || 'ALL';
  }

  function applyBankFilters() {
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    if (!sub || !sub.questions) return;

    const container = document.getElementById('questionsListContainer');
    const countBadge = document.getElementById('bankQuestionsCount');
    const answeredBadge = document.getElementById('bankAnsweredCount');
    const scoreBadge = document.getElementById('bankScoreBadge');
    if (!container) return;

    // Read UI values if controls exist
    const searchInput = document.getElementById('searchQuestionInput');
    const modSelect = document.getElementById('bankModuleSelect');
    const lecSelect = document.getElementById('bankLectureSelect');
    const sortSelect = document.getElementById('bankSortSelect');
    const kindSelect = document.getElementById('bankKindSelect');
    const sourceSelect = document.getElementById('bankSourceSelect');

    const searchTxt = searchInput ? searchInput.value.toLowerCase().trim() : (state.bankSearchText || '');
    const modVal = (modSelect && modSelect.value) ? modSelect.value : (state.bankModuleFilter || 'ALL');
    const lecVal = (lecSelect && lecSelect.value) ? lecSelect.value : (state.bankLectureFilter || 'ALL');
    const sortVal = (sortSelect && sortSelect.value) ? sortSelect.value : (state.bankSortOrder || 'module-lecture-asc');
    const kindVal = (kindSelect && kindSelect.value) ? kindSelect.value : (state.bankKindFilter || 'ALL');

    state.bankSearchText = searchTxt;
    state.bankModuleFilter = modVal;
    state.bankLectureFilter = lecVal;
    state.bankSortOrder = sortVal;
    state.bankKindFilter = kindVal;
    const sourceVal = (sourceSelect && sourceSelect.value) ? sourceSelect.value : (state.bankSourceFilter || 'ALL');
    state.bankSourceFilter = sourceVal;

    // Refresh quick pills
    populateQuickPills(sub.questions);

    // Filter questions
    let filtered = sub.questions.filter(q => {
      // Search text
      if (searchTxt) {
        const inPrompt = (q.prompt || '').toLowerCase().includes(searchTxt);
        const inExpl = (q.explanation || '').toLowerCase().includes(searchTxt);
        const inOpts = (q.options || []).some(o => (o.text || '').toLowerCase().includes(searchTxt));
        const inId = String(q.id) === searchTxt;
        const inTopic = (q.topic || '').toLowerCase().includes(searchTxt);
        if (!inPrompt && !inExpl && !inOpts && !inId && !inTopic) return false;
      }
      // Module filter
      if (modVal !== 'ALL' && q.module !== modVal) return false;
      // Lecture filter
      if (lecVal !== 'ALL' && q.lecture !== lecVal) return false;
      // Kind filter
      if (kindVal !== 'ALL' && q.kind !== kindVal) return false;
      // Source filter
      if (sourceVal !== 'ALL' && questionSource(q) !== sourceVal) return false;

      return true;
    });

    // Helper functions for module & lecture numeric parsing
    const getModNum = (s) => { const m = String(s || '').match(/\d+/); return m ? parseInt(m[0], 10) : 999; };
    const getLecNum = (s) => { const m = String(s || '').match(/\d+/); return m ? parseInt(m[0], 10) : 999; };

    // Sort questions
    if (sortVal === 'recent') {
      filtered.sort((a, b) => {
        const ya = questionYear(a), yb = questionYear(b);
        if (ya !== yb) return yb - ya;
        const ma = getModNum(a.module), mb = getModNum(b.module);
        if (ma !== mb) return ma - mb;
        const la = getLecNum(a.lecture), lb = getLecNum(b.lecture);
        if (la !== lb) return la - lb;
        return (a.id || 0) - (b.id || 0);
      });
    } else if (sortVal === 'module-lecture-asc') {
      filtered.sort((a, b) => {
        const ma = getModNum(a.module), mb = getModNum(b.module);
        if (ma !== mb) return ma - mb;
        const la = getLecNum(a.lecture), lb = getLecNum(b.lecture);
        if (la !== lb) return la - lb;
        return (a.id || 0) - (b.id || 0);
      });
    } else if (sortVal === 'module-lecture-desc') {
      filtered.sort((a, b) => {
        const ma = getModNum(a.module), mb = getModNum(b.module);
        if (ma !== mb) return mb - ma;
        const la = getLecNum(a.lecture), lb = getLecNum(b.lecture);
        if (la !== lb) return lb - la;
        return (b.id || 0) - (a.id || 0);
      });
    } else if (sortVal === 'id-asc') {
      filtered.sort((a, b) => (a.id || 0) - (b.id || 0));
    } else if (sortVal === 'id-desc') {
      filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
    } else if (sortVal === 'kind') {
      filtered.sort((a, b) => (a.kind || '').localeCompare(b.kind || '') || (a.id || 0) - (b.id || 0));
    }

    // Update count badge
    if (countBadge) {
      countBadge.innerText = `${filtered.length} de ${sub.questions.length} preguntas`;
    }

    // Update live stats
    updateBankStats(sub.questions);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 3rem 1.5rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="color: var(--text-main); margin-bottom: 0.5rem;">No se encontraron preguntas</h3>
          <p>No hay preguntas que coincidan con los filtros seleccionados (Módulo: ${modVal}, Lectura: ${lecVal}).</p>
          <button class="btn btn-primary btn-sm" onclick="App.setQuickPillFilter('ALL', 'ALL')" style="margin-top: 1rem;">
            Ver todas las preguntas
          </button>
        </div>
      `;
      return;
    }

    // Render question cards
    container.innerHTML = filtered.map(q => renderSingleBankCard(q)).join('');
  }

  function renderSingleBankCard(q) {
    const userSel = state.bankUserSelections[q.id] || [];
    const isEvaluated = !!state.bankEvaluated[q.id];
    const isRevealed = !!state.bankRevealed[q.id] || state.bankAllRevealed;
    const isMultiple = q.kind === 'multiple';

    // Check correctness if evaluated
    const correctIndices = (q.options || []).filter(o => o.is_correct).map(o => o.index);
    const isAllCorrect = isEvaluated && userSel.length === correctIndices.length && userSel.every(idx => correctIndices.includes(idx));

    return `
      <div class="card question-card" data-qid="${q.id}" id="bank-card-${q.id}">
        <!-- Card Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <span class="badge" style="background: var(--accent); color: #0f172a; font-weight: 800;">#${q.id}</span>
            <span class="badge" style="background: rgba(255,255,255,0.08); color: var(--text-main); font-weight: 700;">
              ${q.module} - ${q.lecture || ''}
            </span>
            ${q.lecture_name ? `<span class="badge" style="background: rgba(255,255,255,0.04); color: var(--text-muted); font-size: 0.78rem;">${q.lecture_name}</span>` : ''}
            ${q.topic ? `<span class="badge" style="background: rgba(56, 189, 248, 0.1); color: var(--accent); font-size: 0.78rem;">${q.topic}</span>` : ''}
          </div>
          <div style="display: flex; gap: 0.4rem; align-items: center;">
            ${isEvaluated ? (isAllCorrect ? `
              <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; font-weight: 800;">✔ Acertada</span>
            ` : `
              <span class="badge" style="background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; font-weight: 800;">✖ No acertada</span>
            `) : ''}
            <span class="badge ${q.kind === 'vf' ? 'badge-detail' : (q.kind === 'multiple' ? 'badge-exam' : 'badge-important')}">
              ${q.kind === 'vf' ? 'Verdadero / Falso' : (q.kind === 'multiple' ? 'Múltiple Selección' : 'Opción Simple')}
            </span>
          </div>
        </div>

        <!-- Prompt -->
        <p style="font-size: 1.02rem; font-weight: 600; color: var(--text-main); margin-bottom: 1rem; line-height: 1.55;">${q.prompt}</p>

        <!-- Options Container -->
        <div class="options-container" style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
          ${(q.options || []).map(opt => {
            const isSelected = userSel.includes(opt.index);
            let optClass = 'bank-option';
            if (isMultiple) optClass += ' is-checkbox';

            let indicatorContent = isMultiple ? (isSelected ? '☑' : '☐') : (isSelected ? '●' : '○');
            let badgeHtml = '';

            if (isEvaluated) {
              if (opt.is_correct && isSelected) {
                optClass += ' bank-opt-correct';
                indicatorContent = '✔';
                badgeHtml = `<span class="badge" style="background: #10b981; color: #ffffff; font-size: 0.75rem; margin-left: auto; font-weight: 700;">✔ Tu Respuesta (Correcta)</span>`;
              } else if (!opt.is_correct && isSelected) {
                optClass += ' bank-opt-incorrect';
                indicatorContent = '✖';
                badgeHtml = `<span class="badge" style="background: #ef4444; color: #ffffff; font-size: 0.75rem; margin-left: auto; font-weight: 700;">✖ Tu Respuesta (Incorrecta)</span>`;
              } else if (opt.is_correct && !isSelected) {
                optClass += ' bank-opt-missed';
                indicatorContent = '✔';
                badgeHtml = `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; font-size: 0.75rem; margin-left: auto; font-weight: 700;">${isMultiple ? '⚠ Faltó Seleccionar' : '✔ Respuesta Oficial'}</span>`;
              }
            } else if (isRevealed && opt.is_correct) {
              optClass += ' bank-opt-missed';
              indicatorContent = '✔';
              badgeHtml = `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; font-size: 0.75rem; margin-left: auto; font-weight: 700;">✔ Respuesta Oficial</span>`;
            } else if (isSelected) {
              optClass += ' selected';
            }

            return `
              <div class="${optClass}" onclick="App.selectBankOption(${q.id}, ${opt.index})">
                <span class="bank-opt-indicator">${indicatorContent}</span>
                <span style="flex: 1; line-height: 1.4;">${opt.text}</span>
                ${badgeHtml}
              </div>
            `;
          }).join('')}
        </div>

        <!-- Multiple Choice Check Button -->
        ${isMultiple && !isEvaluated ? `
          <div style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" onclick="App.checkMultipleBankQuestion(${q.id})" ${userSel.length === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
              ✔ Comprobar Selección (${userSel.length} seleccionada${userSel.length === 1 ? '' : 's'})
            </button>
            <span style="font-size: 0.8rem; color: var(--text-muted);">(Selecciona todas las opciones que correspondan y pulsa Comprobar)</span>
          </div>
        ` : ''}

        <!-- Interactive Feedback Banner -->
        ${isEvaluated ? `
          <div class="bank-feedback" style="padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; ${isAllCorrect ? 'background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #34d399;' : 'background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #f87171;'}">
            <div style="font-size: 0.9rem;">
              ${isAllCorrect ? `
                <span>🎉 <strong>¡Excelente!</strong> Respuesta correcta de acuerdo a los textos oficiales de la Siglo 21.</span>
              ` : `
                <span>❌ <strong>Respuesta incorrecta.</strong> ${q.correct_answers ? `La opción correcta establecida es: <strong style="color: #ecfdf5;">${q.correct_answers.join(' • ')}</strong>` : ''}</span>
              `}
            </div>
            <button class="btn btn-outline btn-sm" onclick="App.resetBankQuestion(${q.id})" style="padding: 0.25rem 0.65rem; font-size: 0.78rem;">
              🔄 Reintentar
            </button>
          </div>
        ` : ''}

        <!-- Bottom action buttons: Toggle Explanation & Reset -->
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <button class="btn btn-outline btn-sm" onclick="App.toggleAnswer(${q.id})">
            ${isRevealed ? '🙈 Ocultar Justificación' : '👁️ Revelar Justificación y Tip'}
          </button>
          ${isEvaluated || userSel.length > 0 ? `
            <button class="btn btn-outline btn-sm" onclick="App.resetBankQuestion(${q.id})" style="color: var(--text-muted);">
              🔄 Limpiar Selección
            </button>
          ` : ''}
        </div>

        <!-- Answer / Explanation Box -->
        <div id="answer-box-${q.id}" class="answer-box" style="display: ${isRevealed ? 'block' : 'none'}; margin-top: 1rem; padding: 1.1rem; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--accent); border-radius: 8px;">
          <div style="margin-bottom: 0.5rem;">
            <strong style="color: var(--accent); font-size: 0.9rem;">Respuesta Oficial Siglo 21:</strong> 
            <span style="color: var(--text-main); font-weight: 700; margin-left: 0.3rem;">${q.correct_answers ? q.correct_answers.join(' • ') : ''}</span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; margin-top: 0.4rem;">${q.explanation || ''}</p>
          ${q.exam_tip ? `
            <div style="margin-top: 0.75rem; padding: 0.6rem 0.85rem; background: rgba(245, 158, 11, 0.12); border-left: 3px solid #f59e0b; border-radius: 6px; color: #fbbf24; font-size: 0.85rem;">
              <strong>💡 Tip de Examen:</strong> ${q.exam_tip}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  function selectBankOption(qid, optIndex) {
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    if (!sub || !sub.questions) return;
    const q = sub.questions.find(item => item.id === qid);
    if (!q) return;

    if (!state.bankUserSelections[qid]) {
      state.bankUserSelections[qid] = [];
    }

    if (q.kind === 'multiple') {
      const idx = state.bankUserSelections[qid].indexOf(optIndex);
      if (idx > -1) {
        state.bankUserSelections[qid].splice(idx, 1);
      } else {
        state.bankUserSelections[qid].push(optIndex);
      }
      state.bankEvaluated[qid] = false;
      updateCardDOM(q);
    } else {
      // Single or True/False: select and immediately evaluate
      state.bankUserSelections[qid] = [optIndex];
      state.bankEvaluated[qid] = true;
      updateCardDOM(q);
      updateBankStats(sub.questions);
    }
  }

  function checkMultipleBankQuestion(qid) {
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    if (!sub || !sub.questions) return;
    const q = sub.questions.find(item => item.id === qid);
    if (!q) return;

    state.bankEvaluated[qid] = true;
    updateCardDOM(q);
    updateBankStats(sub.questions);
  }

  function resetBankQuestion(qid) {
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    if (!sub || !sub.questions) return;
    const q = sub.questions.find(item => item.id === qid);
    if (!q) return;

    delete state.bankUserSelections[qid];
    delete state.bankEvaluated[qid];
    delete state.bankRevealed[qid];
    updateCardDOM(q);
    updateBankStats(sub.questions);
  }

  function updateCardDOM(q) {
    const card = document.getElementById(`bank-card-${q.id}`);
    if (card) {
      card.outerHTML = renderSingleBankCard(q);
    }
  }

  function updateBankStats(questions) {
    const answeredBadge = document.getElementById('bankAnsweredCount');
    const scoreBadge = document.getElementById('bankScoreBadge');

    let totalAnswered = 0;
    let totalCorrect = 0;
    questions.forEach(q => {
      if (state.bankEvaluated[q.id]) {
        totalAnswered++;
        const userSel = state.bankUserSelections[q.id] || [];
        const correctIndices = (q.options || []).filter(o => o.is_correct).map(o => o.index);
        const isExactMatch = userSel.length === correctIndices.length && userSel.every(idx => correctIndices.includes(idx));
        if (isExactMatch) totalCorrect++;
      }
    });

    if (answeredBadge) {
      answeredBadge.innerText = `Practicadas: ${totalAnswered}`;
    }
    if (scoreBadge) {
      if (totalAnswered > 0) {
        const pct = Math.round((totalCorrect / totalAnswered) * 100);
        scoreBadge.style.display = 'inline-block';
        scoreBadge.innerText = `🎯 ${pct}% Aciertos (${totalCorrect}/${totalAnswered})`;
      } else {
        scoreBadge.style.display = 'none';
      }
    }
  }

  function toggleAnswer(qid) {
    state.bankRevealed[qid] = !state.bankRevealed[qid];
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    if (sub && sub.questions) {
      const q = sub.questions.find(item => item.id === qid);
      if (q) updateCardDOM(q);
    }
  }

  function toggleAllBankAnswers() {
    state.bankAllRevealed = !state.bankAllRevealed;
    const btn = document.getElementById('btnToggleAllAnswers');
    if (btn) {
      btn.innerText = state.bankAllRevealed ? '🔒 Ocultar Respuestas' : '👁️ Revelar Respuestas';
    }
    applyBankFilters();
  }

  function resetAllBankAnswers() {
    state.bankUserSelections = {};
    state.bankEvaluated = {};
    state.bankRevealed = {};
    state.bankAllRevealed = false;
    const btn = document.getElementById('btnToggleAllAnswers');
    if (btn) btn.innerText = '👁️ Revelar Respuestas';
    applyBankFilters();
  }

  function filterQuestions() {
    applyBankFilters();
  }

  // =========================================================================
  // SIMULADOR DE EXAMEN
  // =========================================================================
  function startExam(count = 20) {
    const sub = window.STUDY_SYSTEM_DATA[state.currentSubject];
    const pool = [...(sub.questions || [])];

    if (pool.length === 0) {
      alert('No hay preguntas disponibles para esta materia.');
      return;
    }

    // Shuffle questions
    pool.sort(() => Math.random() - 0.5);
    state.examQuestions = pool.slice(0, Math.min(count, pool.length));
    state.currentExamIndex = 0;
    state.userAnswers = {};
    state.examActive = true;
    state.examSecondsLeft = 45 * 60;

    // Show exam runner
    document.getElementById('examSetupCard').style.display = 'none';
    document.getElementById('examResultsCard').style.display = 'none';
    document.getElementById('examRunnerCard').style.display = 'block';

    // Start timer
    if (state.examTimer) clearInterval(state.examTimer);
    state.examTimer = setInterval(tickExamTimer, 1000);

    renderCurrentExamQuestion();
  }

  function tickExamTimer() {
    state.examSecondsLeft--;
    if (state.examSecondsLeft <= 0) {
      clearInterval(state.examTimer);
      finishExam();
      return;
    }
    const mins = Math.floor(state.examSecondsLeft / 60);
    const secs = state.examSecondsLeft % 60;
    const timerEl = document.getElementById('examTimerDisplay');
    if (timerEl) {
      timerEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }

  function renderCurrentExamQuestion() {
    if (!state.examQuestions || state.examQuestions.length === 0) return;
    const q = state.examQuestions[state.currentExamIndex];
    const total = state.examQuestions.length;

    document.getElementById('examCurrentNum').innerText = `${state.currentExamIndex + 1} de ${total}`;
    document.getElementById('examQuestionText').innerText = q.prompt;

    const kindBadge = document.getElementById('examKindBadge');
    if (kindBadge) {
      kindBadge.innerText = q.kind === 'vf' ? 'Verdadero o Falso' : (q.kind === 'multiple' ? 'Selección Múltiple' : 'Opción Simple');
    }

    const optionsContainer = document.getElementById('examOptionsContainer');
    optionsContainer.innerHTML = q.options.map(opt => {
      const selected = (state.userAnswers[q.id] || []).includes(opt.index);
      return `
        <div class="exam-option ${selected ? 'selected' : ''}" onclick="App.selectExamOption(${opt.index})">
          <input type="${q.kind === 'multiple' ? 'checkbox' : 'radio'}" name="examOpt" ${selected ? 'checked' : ''} />
          <span>${opt.text}</span>
        </div>
      `;
    }).join('');

    // Update buttons
    document.getElementById('btnExamPrev').disabled = state.currentExamIndex === 0;
    document.getElementById('btnExamNext').innerText = (state.currentExamIndex === total - 1) ? 'Finalizar Examen 🏁' : 'Siguiente ➡️';
  }

  function selectExamOption(optIndex) {
    const q = state.examQuestions[state.currentExamIndex];
    if (!state.userAnswers[q.id]) {
      state.userAnswers[q.id] = [];
    }

    if (q.kind === 'multiple') {
      const idx = state.userAnswers[q.id].indexOf(optIndex);
      if (idx > -1) {
        state.userAnswers[q.id].splice(idx, 1);
      } else {
        state.userAnswers[q.id].push(optIndex);
      }
    } else {
      state.userAnswers[q.id] = [optIndex];
    }

    renderCurrentExamQuestion();
  }

  function nextExamQuestion() {
    if (state.currentExamIndex === state.examQuestions.length - 1) {
      finishExam();
    } else {
      state.currentExamIndex++;
      renderCurrentExamQuestion();
    }
  }

  function prevExamQuestion() {
    if (state.currentExamIndex > 0) {
      state.currentExamIndex--;
      renderCurrentExamQuestion();
    }
  }

  function finishExam() {
    if (state.examTimer) clearInterval(state.examTimer);
    state.examActive = false;

    // Calculate score
    let correctCount = 0;
    state.examQuestions.forEach(q => {
      const user = (state.userAnswers[q.id] || []).slice().sort();
      const actual = (q.correct_indices || []).slice().sort();
      if (JSON.stringify(user) === JSON.stringify(actual)) {
        correctCount++;
      }
    });

    const total = state.examQuestions.length;
    const scorePct = Math.round((correctCount / total) * 100);
    const passed = scorePct >= 60;

    // Show Results
    document.getElementById('examRunnerCard').style.display = 'none';
    const resCard = document.getElementById('examResultsCard');
    resCard.style.display = 'block';

    document.getElementById('examScorePct').innerText = `${scorePct}%`;
    document.getElementById('examScoreText').innerText = `${correctCount} correctas de ${total} preguntas (${passed ? 'APROBADO 🎉' : 'REPROBADO ⚠️'})`;
    document.getElementById('examScoreBadge').className = passed ? 'badge badge-detail' : 'badge badge-vital';
    document.getElementById('examScoreBadge').innerText = passed ? 'Condición: Regularizado / Aprobado' : 'Condición: Requiere más repaso';
  }

  function resetExam() {
    if (state.examTimer) clearInterval(state.examTimer);
    document.getElementById('examResultsCard').style.display = 'none';
    document.getElementById('examRunnerCard').style.display = 'none';
    document.getElementById('examSetupCard').style.display = 'block';
  }

  // =========================================================================
  // 3D VIEWER INTEGRATION
  // =========================================================================
  function setupSubject3D(sub) {
    const select = document.getElementById('modelSelector3D');
    if (!select) return;

    let models = [];
    if (sub.id === 'bd') {
      models = [
        { key: 'bd_der', name: 'DER 3D: Caso "¿Quién quiere ser millonario?"' },
        { key: 'bd_algebra', name: 'Cubo Volumétrico de Álgebra Relacional' },
        { key: 'bd_torre', name: 'Torre 3D de Normalización (1FN a BCNF)' },
        { key: 'bd_oracle', name: 'Instancia Oracle 3D (SGA y Procesos)' }
      ];
    } else if (sub.id === 'ing') {
      models = [
        { key: 'ing_espiral', name: 'Espiral Helicoidal de Boehm 3D' },
        { key: 'ing_arquitectura', name: 'Arquitectura en Capas y Microservicios 3D' },
        { key: 'ing_pipeline', name: 'Circuito CI/CD y Trazabilidad 3D' }
      ];
    } else if (sub.id === 'ia') {
      models = [
        { key: 'ia_neural', name: 'Red Neuronal Multicapa & Flujo Sináptico 3D' },
        { key: 'ia_search', name: 'Grafo de Búsqueda Espacial A* 3D' },
        { key: 'ia_peas', name: 'Agente Racional Autónomo & Radar PEAS 3D' }
      ];
    }

    select.innerHTML = models.map(m => `<option value="${m.key}">${m.name}</option>`).join('');
    select.value = models[0].key;
    state.current3DModel = models[0].key;

    select.onchange = (e) => {
      switch3DModel(e.target.value);
    };
  }

  function switch3DModel(modelKey) {
    state.current3DModel = modelKey;
    if (window.StudyVisualizer) {
      window.StudyVisualizer.loadModel(modelKey);
    }
  }

  function toggle3DRotate() {
    if (window.StudyVisualizer) {
      const btn = document.getElementById('btn3DRotate');
      window.StudyVisualizer.toggleAutoRotate(btn);
    }
  }

  function reset3DCamera() {
    if (window.StudyVisualizer) {
      window.StudyVisualizer.resetCamera();
    }
  }

  // =========================================================================
  // INTERACTIVE LABS
  // =========================================================================
  function renderInteractiveLabs(sub) {
    const container = document.getElementById('labsDynamicContainer');
    if (!container) return;

    if (sub.id === 'bd') {
      container.innerHTML = `
        <div class="card">
          <h3 style="color: var(--accent); margin-bottom: 0.5rem;">📐 Laboratorio de Álgebra Relacional en Vivo</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
            Ejecuta operadores fundamentales sobre dos relaciones de alumnos y cursos:
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
            <button class="btn btn-primary btn-sm" onclick="App.runAlgebraOperation('union')">Unión (R ∪ S)</button>
            <button class="btn btn-outline btn-sm" onclick="App.runAlgebraOperation('inter')">Intersección (R ∩ S)</button>
            <button class="btn btn-outline btn-sm" onclick="App.runAlgebraOperation('diff')">Diferencia (R - S)</button>
            <button class="btn btn-outline btn-sm" onclick="App.runAlgebraOperation('cart')">Producto Cartesiano (R × S)</button>
            <button class="btn btn-outline btn-sm" onclick="App.runAlgebraOperation('sel')">Selección (σ Promedio > 8)</button>
          </div>
          <div id="algebraOutput" class="table-responsive" style="background: rgba(15,23,42,0.8); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
            <p style="color: var(--text-muted);">Selecciona un operador arriba para ver la relación resultante calculada.</p>
          </div>
        </div>
      `;
    } else if (sub.id === 'ia') {
      container.innerHTML = `
        <div class="card">
          <h3 style="color: var(--accent); margin-bottom: 0.5rem;">🤖 Laboratorio de Algoritmo A* y Matriz PEAS</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
            Simulador de evaluación de rutas para la reprogramación de vuelos (Caso Aerolínea TP2):
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
            <button class="btn btn-primary btn-sm" onclick="App.runAStarStep('expand')">Expandir Nodo de Mínimo f(n)</button>
            <button class="btn btn-outline btn-sm" onclick="App.runAStarStep('reset')">Reiniciar Búsqueda</button>
          </div>
          <div id="astarOutput" style="background: rgba(15,23,42,0.8); padding: 1rem; border-radius: 8px; border: 1px solid var(--border); font-family: monospace;">
            <p style="color: #38bdf8;">Estado Inicial: [Córdoba] | g(S)=0, h(S)=42 -> f(S)=42</p>
            <p style="color: var(--text-muted);">Haz clic en 'Expandir Nodo' para trazar la frontera y calcular f(n) = g(n) + h(n).</p>
          </div>
        </div>
      `;
    } else if (sub.id === 'ing') {
      container.innerHTML = `
        <div class="card">
          <h3 style="color: var(--accent); margin-bottom: 0.5rem;">⚙️ Evaluador de Ciclos de Vida (Cascada vs Espiral vs Scrum)</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
            Ingresa las variables de tu proyecto para recibir la recomendación formal de ciclo de vida y marco metodológico:
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
            <div>
              <label style="font-size: 0.85rem; color: var(--text-muted);">Estabilidad de Requerimientos:</label>
              <select id="calcReqStability" class="form-select" style="width: 100%; padding: 0.5rem; background: var(--bg-primary); color: var(--text-main); border: 1px solid var(--border); border-radius: 6px;">
                <option value="high">Altamente Conocidos y Estables</option>
                <option value="medium">Parcialmente Definidos</option>
                <option value="low">Inciertos y Muy Volátiles</option>
              </select>
            </div>
            <div>
              <label style="font-size: 0.85rem; color: var(--text-muted);">Nivel de Riesgo (Normativo / Financiero):</label>
              <select id="calcRiskLevel" class="form-select" style="width: 100%; padding: 0.5rem; background: var(--bg-primary); color: var(--text-main); border: 1px solid var(--border); border-radius: 6px;">
                <option value="low">Bajo / Rutinario</option>
                <option value="high">Crítico (Fiscal, Salud, Multas)</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="App.calculateLifecycle()">Evaluar Metodología Óptima</button>
          <div id="lifecycleOutput" style="margin-top: 1rem; background: rgba(15,23,42,0.8); padding: 1rem; border-radius: 8px; border: 1px solid var(--border); display: none;"></div>
        </div>
      `;
    }
  }

  function runAlgebraOperation(op) {
    const out = document.getElementById('algebraOutput');
    if (!out) return;

    if (op === 'union') {
      out.innerHTML = `
        <h4 style="color: #38bdf8; margin-bottom: 0.5rem;">Resultado de R ∪ S (Unión):</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Tuplas de R más tuplas de S eliminando tuplas duplicadas.</p>
        <table class="data-table">
          <tr><th>ID_ALUMNO</th><th>NOMBRE</th><th>PROMEDIO</th></tr>
          <tr><td>101</td><td>Juan Gómez</td><td>8.5</td></tr>
          <tr><td>102</td><td>María Sosa</td><td>9.2</td></tr>
          <tr><td>103</td><td>Lucas Paz</td><td>7.0</td></tr>
          <tr><td>104</td><td>Sofía Díaz</td><td>8.8</td></tr>
        </table>
      `;
    } else if (op === 'inter') {
      out.innerHTML = `
        <h4 style="color: #38bdf8; margin-bottom: 0.5rem;">Resultado de R ∩ S (Intersección):</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Tuplas presentes simultáneamente en R y en S.</p>
        <table class="data-table">
          <tr><th>ID_ALUMNO</th><th>NOMBRE</th><th>PROMEDIO</th></tr>
          <tr><td>102</td><td>María Sosa</td><td>9.2</td></tr>
        </table>
      `;
    } else if (op === 'diff') {
      out.innerHTML = `
        <h4 style="color: #38bdf8; margin-bottom: 0.5rem;">Resultado de R - S (Diferencia):</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Tuplas pertenecientes a R que no están presentes en S.</p>
        <table class="data-table">
          <tr><th>ID_ALUMNO</th><th>NOMBRE</th><th>PROMEDIO</th></tr>
          <tr><td>101</td><td>Juan Gómez</td><td>8.5</td></tr>
        </table>
      `;
    } else if (op === 'sel') {
      out.innerHTML = `
        <h4 style="color: #38bdf8; margin-bottom: 0.5rem;">Resultado de σ (Promedio > 8.0):</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Filtrado horizontal de filas que satisfacen el predicado booleano.</p>
        <table class="data-table">
          <tr><th>ID_ALUMNO</th><th>NOMBRE</th><th>PROMEDIO</th></tr>
          <tr><td>101</td><td>Juan Gómez</td><td>8.5</td></tr>
          <tr><td>102</td><td>María Sosa</td><td>9.2</td></tr>
          <tr><td>104</td><td>Sofía Díaz</td><td>8.8</td></tr>
        </table>
      `;
    } else if (op === 'cart') {
      out.innerHTML = `
        <h4 style="color: #38bdf8; margin-bottom: 0.5rem;">Resultado de R × S (Producto Cartesiano):</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Grado = 3 + 2 = 5 atributos. Cardinalidad = 2 × 2 = 4 tuplas combinadas.</p>
        <p style="font-size: 0.9rem; color: #22c55e;">Se combinó cada alumno de R con cada turno de S.</p>
      `;
    }
  }

  let astarStep = 0;
  function runAStarStep(action) {
    const out = document.getElementById('astarOutput');
    if (!out) return;

    if (action === 'reset') {
      astarStep = 0;
      out.innerHTML = `
        <p style="color: #38bdf8;">Estado Inicial: [Córdoba] | g(S)=0, h(S)=42 -> f(S)=42</p>
        <p style="color: var(--text-muted);">Búsqueda reiniciada. Presiona 'Expandir Nodo' para avanzar.</p>
      `;
      return;
    }

    astarStep++;
    if (astarStep === 1) {
      out.innerHTML = `
        <p style="color: #38bdf8;">Paso 1: Expandir Córdoba (S)</p>
        <p style="color: #fbbf24;">-> Sucesor A (Rosario): g=15, h=28 -> <strong>f(A) = 43</strong></p>
        <p style="color: #94a3b8;">-> Sucesor B (Mendoza): g=18, h=32 -> <strong>f(B) = 50</strong></p>
        <p style="color: #22c55e;">Frontera abierta: [A(43), B(50)]. Nodo prometedor a expandir: <strong>A</strong>.</p>
      `;
    } else if (astarStep === 2) {
      out.innerHTML = `
        <p style="color: #38bdf8;">Paso 2: Expandir Nodo A (Rosario)</p>
        <p style="color: #fbbf24;">-> Sucesor C (Buenos Aires Hub): g=15+11=26, h=14 -> <strong>f(C) = 40</strong></p>
        <p style="color: #22c55e;">Frontera abierta: [C(40), B(50)]. Nodo prometedor: <strong>C</strong> (f=40 es menor que 50).</p>
      `;
    } else if (astarStep >= 3) {
      out.innerHTML = `
        <p style="color: #38bdf8;">Paso 3: Expandir Nodo C (Buenos Aires)</p>
        <p style="color: #22c55e; font-weight: bold;">🎯 META ALCANZADA: Nodo G (Bariloche - Vuelo Despachado)</p>
        <p style="color: #f8fafc;">Costo real total g(G) = 26 + 12 = <strong>38 minutos de retraso</strong>.</p>
        <p style="color: #10b981;">Camino Óptimo Demostrado: [Córdoba] -> [Rosario] -> [Buenos Aires] -> [Bariloche].</p>
      `;
    }
  }

  function calculateLifecycle() {
    const stab = document.getElementById('calcReqStability').value;
    const risk = document.getElementById('calcRiskLevel').value;
    const out = document.getElementById('lifecycleOutput');
    if (!out) return;

    out.style.display = 'block';

    if (risk === 'high') {
      out.innerHTML = `
        <div style="border-left: 4px solid #ef4444; padding-left: 0.75rem;">
          <h4 style="color: #ef4444;">Recomendación: Modelo Helicoidal en Espiral (Barry Boehm)</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.3rem;">
            Debido a la criticidad del riesgo (financiero o fiscal), cada iteración debe contar con un cuadrante formal de análisis, mitigación y prototipado antes de escribir código. (Idéntico a la decisión de Facturación Brasil con IVA 25% en TP2).
          </p>
        </div>
      `;
    } else if (stab === 'high') {
      out.innerHTML = `
        <div style="border-left: 4px solid #38bdf8; padding-left: 0.75rem;">
          <h4 style="color: #38bdf8;">Recomendación: Modelo en Cascada / Secuencial</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.3rem;">
            Los requerimientos son estables y conocidos exhaustivamente. El flujo lineal por etapas minimiza overhead de reuniones y entrega especificación completa y predecible. (Idéntico al sistema de cobranzas de Millenium 25 AP2).
          </p>
        </div>
      `;
    } else {
      out.innerHTML = `
        <div style="border-left: 4px solid #10b981; padding-left: 0.75rem;">
          <h4 style="color: #10b981;">Recomendación: Metodología Ágil (Scrum + XP) / Modelo Incremental</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.3rem;">
            Dada la incertidumbre de requerimientos y la necesidad de feedback continuo del cliente/dueño, se deben realizar sprints cortos con entregas funcionales frecuentes y pair programming. (Idéntico a la app móvil de Millenium 25 AP1 y web del Hotel TP1).
          </p>
        </div>
      `;
    }
  }

  function runNormalizationStep(action) {
    const out = document.getElementById('normalizationOutput');
    if (!out) return;

    if (action === 'reset') {
      normStep = 0;
      out.innerHTML = '<p style=\"color: var(--text-muted);\">Tabla sin normalizar cargada: FACTURAS(NroFactura, Fecha, IdCliente, NombreCliente, IdArticulo, Descripcion, Cantidad, PrecioUnitario).</p>';
      return;
    }

    normStep++;
    if (normStep === 1) {
      out.innerHTML = `
        <h4 style=\"color: #ef4444; margin-bottom: 0.4rem;\">Paso 1: Aplicar 1FN (Atomicidad de Dominios)</h4>
        <p style=\"font-size: 0.85rem; color: var(--text-muted);\">Se eliminan los grupos repetitivos de artículos. La clave primaria es ahora compuesta: (NroFactura, IdArticulo).</p>
      `;
    } else if (normStep === 2) {
      out.innerHTML = `
        <h4 style=\"color: #f59e0b; margin-bottom: 0.4rem;\">Paso 2: Aplicar 2FN (Dependencia Funcional Plena)</h4>
        <p style=\"font-size: 0.85rem; color: var(--text-muted);\">Se eliminan dependencias parciales. Descripcion y Precio dependen de IdArticulo; Fecha y Cliente dependen de NroFactura.</p>
        <p style=\"color: #10b981; font-size: 0.85rem;\">Tablas generadas: ARTICULOS, FACTURAS y DETALLE_FACTURA.</p>
      `;
    } else if (normStep >= 3) {
      out.innerHTML = `
        <h4 style=\"color: #10b981; margin-bottom: 0.4rem;\">Paso 3: Aplicar 3FN y BCNF (Sin Transitividad)</h4>
        <p style=\"font-size: 0.85rem; color: var(--text-muted);\">Se elimina dependencia transitiva: NroFactura -> IdCliente -> NombreCliente.</p>
        <p style=\"color: #38bdf8; font-weight: bold; font-size: 0.85rem;\">Esquema final puro: CLIENTES, FACTURAS (FK IdCliente), ARTICULOS y DETALLE_FACTURA.</p>
      `;
    }
  }

  function handleGlobalSearch() {
    if (!state.searchQuery) return;
    // Switch to questions or theory if searching
    if (state.currentTab === 'tab-questions') {
      filterQuestions();
    }
  }

  // Auto-init on load (handling already-loaded state)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
