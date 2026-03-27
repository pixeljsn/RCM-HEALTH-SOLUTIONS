const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' }
];

const ctaLinks = {
  primary: { label: 'Book a Consultation', href: 'mailto:hello@rcmhealthsolutions.com?subject=RCM%20Consultation' },
  secondary: { label: 'Explore Services', href: '#services' }
};

const services = [
  {
    title: 'Medical Billing Operations',
    description: 'Charge capture, coding handoff, and clean-claim workflows designed for faster reimbursement.'
  },
  {
    title: 'Denial Prevention & Appeals',
    description: 'We identify root causes, correct process gaps, and run strategic appeals to recover revenue.'
  },
  {
    title: 'Accounts Receivable Recovery',
    description: 'Consistent follow-up and payer escalation paths that reduce aging and improve collection velocity.'
  },
  {
    title: 'RCM Analytics & Reporting',
    description: 'Role-based dashboards with KPIs that align leadership decisions with operational performance.'
  }
];

const kpis = [
  { value: '20-40%', detail: 'Average reduction in unresolved denials' },
  { value: '15-25%', detail: 'Improvement in net collection rate' },
  { value: '< 48 hrs', detail: 'Turnaround on high-priority AR workflows' }
];

const benefits = [
  'Healthcare-only focus with payer and specialty expertise.',
  'Dedicated account leads and transparent weekly reporting.',
  'Flexible delivery models for independent practices through multi-site systems.',
  'Process + technology alignment that supports long-term scale.'
];

const insights = [
  {
    title: 'Denial trend analysis framework',
    description: 'A practical method to segment denials and prioritize high-impact fixes.',
    href: '#contact',
    cta: 'Request framework'
  },
  {
    title: 'RCM KPI scorecard template',
    description: 'Track first-pass yield, days in AR, and payer turnaround in one view.',
    href: '#contact',
    cta: 'Get template'
  },
  {
    title: 'Front-office to billing handoff checklist',
    description: 'Reduce data-entry errors that create preventable claim delays.',
    href: '#contact',
    cta: 'Download checklist'
  }
];

function renderNav() {
  const nav = document.getElementById('main-nav');
  nav.innerHTML = navItems
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');
}

function renderHeroActions() {
  const heroActions = document.getElementById('hero-actions');
  const headerCTA = document.getElementById('header-cta');
  const panelLink = document.getElementById('panel-link');

  heroActions.innerHTML = `
    <a class="btn btn-primary" href="${ctaLinks.primary.href}">${ctaLinks.primary.label}</a>
    <a class="btn btn-outline" href="${ctaLinks.secondary.href}">${ctaLinks.secondary.label}</a>
  `;

  headerCTA.href = ctaLinks.primary.href;
  panelLink.href = ctaLinks.primary.href;
}

function renderServices() {
  const grid = document.getElementById('service-grid');
  grid.innerHTML = services
    .map(
      (service) => `
      <article class="card">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>`
    )
    .join('');
}

function renderKpis() {
  const list = document.getElementById('kpi-list');
  list.innerHTML = kpis
    .map(
      (kpi) => `
      <div class="kpi-item">
        <strong>${kpi.value}</strong>
        <span>${kpi.detail}</span>
      </div>`
    )
    .join('');
}

function renderBenefits() {
  const benefitList = document.getElementById('benefits-list');
  benefitList.innerHTML = benefits.map((item) => `<li>${item}</li>`).join('');
}

function renderInsights() {
  const insightGrid = document.getElementById('insights-grid');
  insightGrid.innerHTML = insights
    .map(
      (item) => `
      <article class="card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a class="text-link insight-link" href="${item.href}">${item.cta} →</a>
      </article>`
    )
    .join('');
}

function renderContactActions() {
  const contactActions = document.getElementById('contact-actions');
  contactActions.innerHTML = `
    <a class="btn btn-primary" href="${ctaLinks.primary.href}">${ctaLinks.primary.label}</a>
    <a class="btn btn-outline" href="tel:+18005551234">Call (800) 555-1234</a>
  `;
}

function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

renderNav();
renderHeroActions();
renderServices();
renderKpis();
renderBenefits();
renderInsights();
renderContactActions();
setYear();
