const hrefs = {
  home: '#home',
  services: '#services',
  results: '#results',
  insights: '#insights',
  contact: '#contact',
  strategyCall: 'mailto:hello@rcmhealthsolutions.com?subject=RCM%20Strategy%20Call',
  phone: 'tel:+18005551234',
  email: 'mailto:hello@rcmhealthsolutions.com',
  linkedin: 'https://www.linkedin.com/'
};

const navItems = [
  { label: 'Services', href: hrefs.services },
  { label: 'Results', href: hrefs.results },
  { label: 'Resources', href: hrefs.insights },
  { label: 'Contact', href: hrefs.contact }
];

const heroButtons = [
  { label: 'Book Strategy Call', href: hrefs.strategyCall, variant: 'btn-primary' },
  { label: 'View Services', href: hrefs.services, variant: 'btn-outline' }
];

const metrics = [
  { value: '98%', label: 'Clean Claim Rate' },
  { value: '30%+', label: 'Denial Reduction' },
  { value: '18%', label: 'Net Collections Lift' }
];

const modelPoints = [
  'Discovery + baseline KPI review in week one.',
  'Process redesign mapped to your specialty and payer mix.',
  'Continuous QA and transparent weekly scorecards.'
];

const logos = ['Multi-Specialty Groups', 'Urgent Care Networks', 'Behavioral Health', 'ASC & Outpatient'];

const services = [
  {
    title: 'Medical Billing Management',
    body: 'Daily claims, coding coordination, scrubbing logic, and exception queues for higher first-pass yield.'
  },
  {
    title: 'Denial Prevention & Appeals',
    body: 'Reason-code trend monitoring, process fixes, and appeals workflows to recover avoidable write-offs.'
  },
  {
    title: 'AR Follow-up & Recovery',
    body: 'Targeted payer follow-up and aging strategy to accelerate reimbursement and reduce old AR buckets.'
  },
  {
    title: 'RCM Performance Reporting',
    body: 'Executive dashboards covering charge lag, acceptance rate, denial %, days in AR, and net collections.'
  }
];

const results = [
  { title: 'Faster cash acceleration', body: 'Reduce days in AR with structured payer escalation and queue ownership.' },
  { title: 'Lower preventable denials', body: 'Fix root causes in intake, eligibility, coding, and authorization capture.' },
  { title: 'Operational visibility', body: 'Give leaders consistent weekly metrics and improvement actions.' },
  { title: 'Scalable delivery', body: 'Support single locations and multi-site systems with the same framework.' }
];

const insights = [
  {
    title: 'Denial root-cause worksheet',
    body: 'A practical worksheet to prioritize the highest-impact denial categories.',
    href: hrefs.contact,
    cta: 'Request worksheet'
  },
  {
    title: 'RCM KPI operating cadence',
    body: 'Template cadence for weekly KPI reviews with finance and operations teams.',
    href: hrefs.contact,
    cta: 'Get template'
  },
  {
    title: 'Eligibility & auth checklist',
    body: 'Front-office checklist to prevent claim delays before they occur.',
    href: hrefs.contact,
    cta: 'Download checklist'
  }
];

const footerLinks = [
  { label: 'Email Us', href: hrefs.email },
  { label: 'Call Us', href: hrefs.phone },
  { label: 'LinkedIn', href: hrefs.linkedin }
];

function renderList(id, items, mapper) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(mapper).join('');
}

function initNav() {
  renderList('main-nav', navItems, (item) => `<a href="${item.href}">${item.label}</a>`);
  const headerCta = document.getElementById('header-cta');
  headerCta.href = hrefs.strategyCall;
}

function initHero() {
  renderList('hero-actions', heroButtons, (btn) => `<a class="btn ${btn.variant}" href="${btn.href}">${btn.label}</a>`);
  renderList('hero-metrics', metrics, (m) => `<li><strong>${m.value}</strong><span>${m.label}</span></li>`);
  renderList('model-points', modelPoints, (point) => `<p class="pill">${point}</p>`);
  const heroCardLink = document.getElementById('hero-card-link');
  heroCardLink.href = hrefs.contact;
}

function initSections() {
  renderList('logo-list', logos, (name) => `<span>${name}</span>`);
  renderList('services-grid', services, (item) => `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
  renderList('results-grid', results, (item) => `
    <article class="card soft">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
  renderList('insights-grid', insights, (item) => `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a class="text-link card-link" href="${item.href}">${item.cta} →</a>
    </article>
  `);
}

function initContactAndFooter() {
  renderList('contact-actions', [
    { label: 'Book Strategy Call', href: hrefs.strategyCall, cls: 'btn btn-primary' },
    { label: 'Call (800) 555-1234', href: hrefs.phone, cls: 'btn btn-outline' }
  ], (link) => `<a class="${link.cls}" href="${link.href}">${link.label}</a>`);

  renderList('footer-links', footerLinks, (item) => `<a class="text-link" href="${item.href}">${item.label}</a>`);

  document.getElementById('year').textContent = String(new Date().getFullYear());
}

initNav();
initHero();
initSections();
initContactAndFooter();
