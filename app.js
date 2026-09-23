(() => {
  const data = window.VENETA_CASE_DATA;
  if (!data) return;

  const state = structuredClone(data.modelDefaults);
  const $ = (id) => document.getElementById(id);
  const qsa = (selector) => [...document.querySelectorAll(selector)];
  const safe = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const euro = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const integer = new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 });
  const compactEuro = (value) => {
    const abs = Math.abs(value);
    const sign = value < 0 ? '−' : '';
    if (abs >= 1_000_000) return `${sign}€${(abs / 1_000_000).toFixed(2).replace(/0+$/, '').replace(/\.$/, '')}m`;
    if (abs >= 1_000) return `${sign}€${(abs / 1_000).toFixed(1).replace(/\.0$/, '')}k`;
    return `${sign}${euro.format(abs)}`;
  };
  const pct = (value, digits = 1) => `${(value * 100).toFixed(digits)}%`;

  function calculate(overrides = {}) {
    const s = { ...state, ...overrides };
    const digitalMultiplier = (1 + s.conversionUpliftPct / 100) * (1 + s.aovUpliftPct / 100);
    const digitalUpliftRate = digitalMultiplier - 1;
    const digitalRevenue = s.onlineRevenue * digitalUpliftRate;
    const digitalContribution = digitalRevenue * (s.contributionMarginPct / 100);

    const annualAppointments = s.advisorCount * s.appointmentsPerDay * s.workingDays;
    const advisorOrders = annualAppointments * (s.advisorCloseUpliftPp / 100);
    const advisorRevenue = advisorOrders * s.advisorAov;
    const advisorContribution = advisorRevenue * (s.contributionMarginPct / 100);

    const marketRevenue = s.annualMarketTarget * (s.monthsSaved / 12);
    const marketContribution = marketRevenue * (s.contributionMarginPct / 100);

    return { s, digitalUpliftRate, digitalRevenue, digitalContribution, annualAppointments, advisorOrders, advisorRevenue, advisorContribution, marketRevenue, marketContribution };
  }

  function renderSignals() {
    if (!$('publicSignals')) return;
    $('publicSignals').innerHTML = data.publicSignals.map((item) => `
      <article class="signal-card"><span>${item.label}</span><strong>${item.value}</strong><small>${item.note}</small></article>
    `).join('');
  }

  function renderTransferTable() {
    $('transferTable').innerHTML = data.transferRows.map((row) => `
      <div class="transfer-row"><strong>${row.area}</strong><span>${row.australia}</span><span>${row.discovery}</span></div>
    `).join('');
  }

  function renderPillars() {
    $('plusPillars').innerHTML = data.plusPillars.map((pillar) => `
      <article class="plus-card"><span>${pillar.kicker}</span><h3>${pillar.title}</h3><p>${pillar.text}</p><small>${pillar.evidence}</small></article>
    `).join('');
  }

  function renderDetailInputs() {
    $('detailInputs').innerHTML = data.detailInputs.map((field) => `
      <label class="detail-field" for="${field.id}"><span>${field.label}</span><input id="${field.id}" data-detail type="number" min="${field.min}" step="${field.step}" value="${state[field.id]}"><small>${field.basis}</small></label>
    `).join('');
    qsa('[data-detail]').forEach((input) => input.addEventListener('input', () => {
      state[input.id] = Math.max(safe(input.min), safe(input.value, state[input.id]));
      renderModel();
    }));
  }

  function renderScenarios() {
    $('scenarioGrid').innerHTML = data.scenarios.map((scenario) => {
      const result = calculate({ conversionUpliftPct: scenario.conversionUpliftPct, aovUpliftPct: scenario.aovUpliftPct });
      return `
        <article class="scenario-card"><span>${scenario.label}</span><strong>${pct(result.digitalUpliftRate, 2)}</strong><small>${compactEuro(result.digitalRevenue)} revenue · ${compactEuro(result.digitalContribution)} contribution<br>${scenario.conversionUpliftPct}% conversion · ${scenario.aovUpliftPct}% AOV</small></article>
      `;
    }).join('');
  }

  function renderModel() {
    const result = calculate();
    $('onlineRevenueOutput').textContent = compactEuro(state.onlineRevenue);
    $('conversionUpliftOutput').textContent = `${state.conversionUpliftPct}%`;
    $('aovUpliftOutput').textContent = `${state.aovUpliftPct}%`;
    $('digitalRevenueOutput').textContent = compactEuro(result.digitalRevenue);
    $('digitalUpliftLabel').textContent = `${pct(result.digitalUpliftRate, 2)} modeled uplift at constant traffic`;
    $('digitalContributionOutput').textContent = compactEuro(result.digitalContribution);
    $('advisorOrdersOutput').textContent = integer.format(result.advisorOrders);
    $('advisorRevenueOutput').textContent = compactEuro(result.advisorRevenue);
    $('marketRevenueOutput').textContent = compactEuro(result.marketRevenue);
    renderScenarios();
  }

  function renderCases() {
    $('caseStudies').innerHTML = data.caseStudies.map((item) => `
      <article class="case-card"><span class="case-type">${item.type}</span><strong>${item.metric}</strong><h3>${item.title}</h3><p>${item.text}</p><footer><a href="${item.url}" target="_blank" rel="noreferrer">${item.source}</a><small>${item.caveat}</small></footer></article>
    `).join('');
  }

  function renderQuestions() {
    $('discoveryQuestions').innerHTML = data.discoveryQuestions.map((group) => `
      <article class="question-card"><span>${group.category}</span><h3>${group.title}</h3><ol>${group.questions.map((question) => `<li>${question}</li>`).join('')}</ol></article>
    `).join('');
  }

  function renderSources() {
    $('sourceList').innerHTML = `<h3>Source register</h3>${data.sources.map((source) => `
      <div class="source-item"><span>${source.category}</span><div><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a><p>${source.note}</p></div><time>${source.accessed}</time></div>
    `).join('')}`;
  }

  function bindConcept() {
    const responses = {
      sfeer: {
        title: 'Warmte zonder daglicht te verliezen',
        response: 'Voor een woonkamer op het zuiden passen lichte houten jaloezieën of semi-transparante gordijnen. Ik controleer alleen combinaties die Veneta daadwerkelijk kan maken.',
        project: 'Sfeer · woonkamer · zuidzijde · hulp gewenst'
      },
      privacy: {
        title: 'Privacy overdag, licht wanneer jij wilt',
        response: 'Top-down plisségordijnen of verstelbare jaloezieën geven privacy zonder het raam volledig te sluiten. Ik vraag eerst naar raamtype en inkijkhoogte.',
        project: 'Privacy · straatzijde · daglicht behouden · zelf meten'
      },
      dark: {
        title: 'Zo donker mogelijk, zonder verkeerde verwachting',
        response: 'Verduisterende plissés of gevoerde gordijnen zijn de beste start. Ik leg ook uit waar lichtkieren kunnen ontstaan en wanneer advies of inmeten verstandig is.',
        project: 'Verduisteren · slaapkamer · lichtkieren beperken · advies gewenst'
      },
      energy: {
        title: 'Isoleren met een oplossing die bij het raam past',
        response: 'Honeycomb plissés en gevoerde gordijnen kunnen warmteverlies beperken. Ik gebruik alleen goedgekeurde productclaims en laat de configurator maat en montage controleren.',
        project: 'Isolatie · woonkamer · energiebesparing · productclaim gevalideerd'
      }
    };
    qsa('[data-concept-need]').forEach((button) => button.addEventListener('click', () => {
      qsa('[data-concept-need]').forEach((item) => item.classList.toggle('is-active', item === button));
      const response = responses[button.dataset.conceptNeed];
      $('conceptAiTitle').textContent = response.title;
      $('conceptAiResponse').textContent = response.response;
      $('conceptProject').textContent = response.project;
    }));
  }

  function bindModel() {
    $('onlineRevenue').addEventListener('input', (event) => { state.onlineRevenue = safe(event.target.value); renderModel(); });
    $('conversionUplift').addEventListener('input', (event) => { state.conversionUpliftPct = safe(event.target.value); renderModel(); });
    $('aovUplift').addEventListener('input', (event) => { state.aovUpliftPct = safe(event.target.value); renderModel(); });
    $('margin').addEventListener('input', (event) => { state.contributionMarginPct = clamp(safe(event.target.value), 1, 90); renderModel(); });
    $('monthsSaved').addEventListener('input', (event) => { state.monthsSaved = clamp(safe(event.target.value), 0, 12); renderModel(); });
    $('resetModel').addEventListener('click', () => {
      Object.assign(state, structuredClone(data.modelDefaults));
      $('onlineRevenue').value = state.onlineRevenue;
      $('conversionUplift').value = state.conversionUpliftPct;
      $('aovUplift').value = state.aovUpliftPct;
      $('margin').value = state.contributionMarginPct;
      $('monthsSaved').value = state.monthsSaved;
      renderDetailInputs();
      renderModel();
    });
  }

  async function exportPdf() {
    const buttons = [$('downloadPdf'), $('downloadPdfBottom')].filter(Boolean);
    const originalLabels = buttons.map((button) => button.textContent);
    let fallback = false;
    buttons.forEach((button) => { button.disabled = true; button.textContent = 'Preparing PDF…'; });
    document.body.classList.add('pdf-export');
    try {
      if (typeof window.html2pdf !== 'function') throw new Error('PDF generator unavailable');
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      await window.html2pdf().set({
        margin: [7, 6, 8, 6],
        filename: 'Veneta-Shopify-Plus-executive-discovery-thesis.pdf',
        image: { type: 'jpeg', quality: .96 },
        html2canvas: { scale: 1.3, useCORS: true, backgroundColor: '#ffffff', logging: false, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'], before: ['#ai', '#growth', '#concept', '#value', '#proof', '#discovery'], avoid: ['article', '.source-item', '.group-proof', '.concept-browser'] }
      }).from(document.querySelector('main')).save();
    } catch (error) {
      console.error('Direct PDF export failed; using browser print.', error);
      fallback = true;
    } finally {
      document.body.classList.remove('pdf-export');
      buttons.forEach((button, index) => { button.disabled = false; button.textContent = originalLabels[index]; });
    }
    if (fallback) window.print();
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      qsa('.reveal').forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 });
    qsa('.reveal').forEach((item) => observer.observe(item));
  }

  renderSignals();
  renderTransferTable();
  renderPillars();
  renderDetailInputs();
  renderCases();
  renderQuestions();
  renderSources();
  bindModel();
  bindConcept();
  renderModel();
  $('downloadPdf').addEventListener('click', exportPdf);
  $('downloadPdfBottom').addEventListener('click', exportPdf);
  initReveal();
})();
