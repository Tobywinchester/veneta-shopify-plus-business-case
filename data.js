window.VENETA_CASE_DATA = {
  publicSignals: [
    { label: "Reported 2024 sales", value: "€132m", note: "+19% year over year, reported from deposited accounts" },
    { label: "Reported 2024 profit", value: "€11.5m", note: "Up from €9.4m in the prior year" },
    { label: "Official customer proof", value: "4.9m+", note: "Windows covered in the Netherlands" },
    { label: "Veneta experiment", value: "+14%", note: "Add-to-cart uplift reported after adding configurator icons" }
  ],
  transferRows: [
    { area: "Growth", australia: ">70% conversion lift reported in under one month", discovery: "Reconcile conversion, AOV, margin, and durability" },
    { area: "Product complexity", australia: "React builder + pricing API for 744bn combinations", discovery: "Identify reusable configurator, rules, and pricing assets" },
    { area: "Operations", australia: "Automated factory XML; post-launch errors reportedly eliminated", discovery: "Compare error, rework, team velocity, and run cost" }
  ],
  plusPillars: [
    { kicker: "International", title: "Launch markets faster", text: "Reuse commerce, checkout, customer, order, and automation while local teams control language, pricing, content, payments, and service.", evidence: "CEO metric: launch lead time, cost, and percentage reused." },
    { kicker: "Conversion", title: "Make complexity easier to buy", text: "Combine intent-led discovery, a governed configurator, local payments, high-converting checkout, and experimentation.", evidence: "CEO metric: mobile conversion, sample-to-order, AOV, and margin." },
    { kicker: "Advice", title: "Turn advisers into a growth channel", text: "Carry customer intent, samples, photos, configurations, quotes, payment, and status through one project journey.", evidence: "CEO metric: close rate, time-to-quote, capacity, and assisted margin." },
    { kicker: "Operating leverage", title: "Move investment into advantage", text: "Let Shopify own more security, scaling, checkout, releases, and ecosystem work while Veneta invests in product rules, advice, imagery, and factories.", evidence: "CEO metric: TCO, release speed, errors, and roadmap capacity." }
  ],
  scenarios: [
    { id: "conservative", label: "Conservative", conversionUpliftPct: 2, aovUpliftPct: 0 },
    { id: "base", label: "Base", conversionUpliftPct: 5, aovUpliftPct: 2 },
    { id: "upside", label: "Upside", conversionUpliftPct: 10, aovUpliftPct: 3 }
  ],
  modelDefaults: {
    onlineRevenue: 10000000,
    conversionUpliftPct: 5,
    aovUpliftPct: 2,
    contributionMarginPct: 50,
    monthsSaved: 3,
    advisorCount: 100,
    appointmentsPerDay: 5.5,
    workingDays: 220,
    advisorCloseUpliftPp: 1,
    advisorAov: 1000,
    annualMarketTarget: 5000000
  },
  detailInputs: [
    { id: "advisorCount", label: "Advisers", step: 10, min: 0, basis: "Public reporting indicates 100+" },
    { id: "appointmentsPerDay", label: "Appointments / adviser / day", step: 0.5, min: 0, basis: "Public reporting indicates 5–6" },
    { id: "workingDays", label: "Working days / year", step: 5, min: 0, basis: "Planning assumption" },
    { id: "advisorCloseUpliftPp", label: "Close-rate uplift", step: 0.5, min: 0, basis: "Percentage points; planning assumption" },
    { id: "advisorAov", label: "Adviser AOV (€)", step: 100, min: 0, basis: "Planning assumption" },
    { id: "annualMarketTarget", label: "New-market annual target (€)", step: 500000, min: 0, basis: "Planning assumption" }
  ],
  caseStudies: [
    { type: "Related group reference", metric: ">70%", title: "Veneta Australia conversion", text: "A custom Shopify Plus builder handled made-to-measure pricing and factory XML; Swanky reported conversion up more than 70% in under a month.", url: "https://swankyagency.com/bespoke-product-builder-case-study-veneta-blinds/", source: "Swanky implementation case", caveat: "Separate Nien Made sister company; early, agency-published result with redesign and other changes." },
    { type: "Made-to-order manufacturing", metric: "+22% / +12%", title: "POLYWOOD conversion / AOV", text: "The furniture manufacturer moved 150,000 product variations to Shopify and also reports a six-figure TCO reduction.", url: "https://www.shopify.com/case-studies/polywood-modernized-commerce-platform", source: "Official Shopify case study", caveat: "Personalization, search, apps, and organizational change also contributed." },
    { type: "Dimension-led configurator", metric: "+340%", title: "Future Glass B2B sales", text: "A Hydrogen configurator turned dimensions and rules into a one-click cart; Shopify also reports +83% conversion and 80% less quote time.", url: "https://www.shopify.com/case-studies/future-glass", source: "Official Shopify case study", caveat: "New channel, custom builder, PIM, agency, and process redesign were co-interventions." },
    { type: "Dutch international growth", metric: "+27%", title: "Stoov conversion", text: "Conversion reportedly moved from 2.2% to 2.8%, while Germany became 50% of sales after expansion on Shopify Plus.", url: "https://www.shopify.com/case-studies/stoov", source: "Official Shopify case study", caveat: "Product, marketing, apps, and market mix also changed." }
  ],
  discoveryQuestions: [
    { category: "Growth", title: "Where must the blueprint travel next?", questions: ["Which markets and channels matter over the next 24–36 months?", "What share of future growth should AI discovery, self-service, advice, and B2B create?"] },
    { category: "Economics", title: "Where is growth currently expensive?", questions: ["What are current platform TCO, release lead time, and new-market launch cost?", "Where do funnel drop-off, adviser effort, configuration errors, and rework reduce margin?"] },
    { category: "Australia", title: "What can the group reuse now?", questions: ["What changed in conversion, AOV, error rate, velocity, and run cost?", "Which code, services, data models, and operating practices can transfer safely?"] }
  ],
  sources: [
    { category: "Veneta official", title: "Veneta.com Netherlands", url: "https://www.veneta.com/", note: "Proposition, custom products, home advice, price positioning, warranty, and public customer proof.", accessed: "Accessed 23 Sep 2026" },
    { category: "Leadership interview", title: "Veneta: ‘We kijken niet naar de rest van de markt’", url: "https://twinklemagazine.nl/2024/09/veneta-we-kijken-niet-naar-de-rest-van-de-markt/index.xml", note: "CMO interview covering growth, customer centricity, international operations, technology, and the scalable self-measurement model.", accessed: "Accessed 23 Sep 2026" },
    { category: "Leadership interview", title: "Veneta: ruim 100 mln, alleen in raambekleding", url: "https://mixonline.nl/news/7464/veneta-ruim-100-mln-alleen-in-raambekleding", note: "Names managing director Dinno van Breugel and CMO Harry Straten; covers brand, funnel, data, guarantees, and operating processes.", accessed: "Accessed 23 Sep 2026" },
    { category: "Financial reporting", title: "Veneta 2024 filed-account reporting", url: "https://www.quotenet.nl/zakelijk/a70559266/raamdecoratiereus-veneta-winst-omzet-flink-oplopen/", note: "Reports €132m sales, +19% growth, and €11.5m profit from deposited 2024 accounts.", accessed: "Accessed 23 Sep 2026" },
    { category: "Veneta official", title: "Working at Veneta: about us", url: "https://werkenbijveneta.com/over-ons", note: "First-party claims covering 4.9m+ windows, 400+ colleagues, Belgium/Denmark, and Twinkle100 rank.", accessed: "Accessed 23 Sep 2026" },
    { category: "Group structure", title: "Nien Made audited 2024 filing", url: "https://www.nienmade.com/file/Consolidated/Consolidated%20Financial%20Statements_2024Q4.pdf", note: "Shows Veneta B.V. and Veneta Blinds Australia as separate majority-owned Nien Made entities; Veneta ApS is owned by Veneta B.V.", accessed: "Accessed 23 Sep 2026" },
    { category: "Current architecture", title: "Veneta.com headless platform case", url: "https://jeroenheerema.nl/cases/veneta", note: "Public implementation account of the NL/BE Contentful, Algolia, commercetools, and back-office architecture; stable KPIs reported after launch.", accessed: "Accessed 23 Sep 2026" },
    { category: "Group proof", title: "Veneta Australia Shopify Plus product builder", url: "https://swankyagency.com/bespoke-product-builder-case-study-veneta-blinds/", note: "Related sister-company implementation covering made-to-measure pricing, 744bn combinations, factory XML, and early outcomes.", accessed: "Accessed 23 Sep 2026" },
    { category: "Experimentation", title: "Veneta configurator add-to-cart experiment", url: "https://www.sitespect.com/library-resource/veneta-adds-icons/", note: "Public experiment summary reporting a 14% add-to-cart improvement from product icons; validates the sensitivity of configurator UX.", accessed: "Accessed 23 Sep 2026" },
    { category: "Shopify proof", title: "POLYWOOD", url: "https://www.shopify.com/case-studies/polywood-modernized-commerce-platform", note: "Made-to-order manufacturing, high variation, conversion, AOV, engineering capacity, and TCO.", accessed: "Accessed 23 Sep 2026" },
    { category: "Shopify proof", title: "Future Glass", url: "https://www.shopify.com/case-studies/future-glass", note: "Dimension-led Hydrogen configurator, B2B pricing, conversion, sales, and quote-time outcomes.", accessed: "Accessed 23 Sep 2026" },
    { category: "Shopify proof", title: "Ruggable", url: "https://www.shopify.com/case-studies/ruggable", note: "Headless home commerce, a single codebase, European markets, and sub-one-month launches.", accessed: "Accessed 23 Sep 2026" },
    { category: "Shopify proof", title: "The Conran Shop", url: "https://www.shopify.com/case-studies/the-conran-shop", note: "Interiors, POS, trade/B2B, TCO, conversion, and first-party customer capture.", accessed: "Accessed 23 Sep 2026" },
    { category: "Shopify proof", title: "Hommey", url: "https://www.shopify.com/case-studies/hommey", note: "Made-to-order homewares and a move from headless to a lower-complexity Plus operating model.", accessed: "Accessed 23 Sep 2026" },
    { category: "Shopify proof", title: "Stoov", url: "https://www.shopify.com/case-studies/stoov", note: "Dutch home/lifestyle conversion and cross-border growth.", accessed: "Accessed 23 Sep 2026" },
    { category: "Benchmark", title: "Shopify checkout study", url: "https://www.shopify.com/enterprise/blog/shopify-checkout", note: "Shopify-published, commissioned conversion benchmark; methodology limitations apply.", accessed: "Accessed 23 Sep 2026" },
    { category: "Shopify Plus", title: "Plus plan and EUR pricing", url: "https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan", note: "Current public EUR pricing, expansion stores, Hydrogen storefronts, POS, support, and plan capabilities.", accessed: "Accessed 23 Sep 2026" },
    { category: "International", title: "Shopify Markets", url: "https://www.shopify.com/markets", note: "Market-specific language, currency, domains, content, products, pricing, tax, retail, and B2B experiences.", accessed: "Accessed 23 Sep 2026" },
    { category: "Agentic commerce", title: "How agentic commerce works on Shopify", url: "https://www.shopify.com/blog/how-agentic-commerce-works", note: "Shopify Catalog, Agentic Storefronts, connected AI channels, eligibility, checkout patterns, and market limitations.", accessed: "Accessed 23 Sep 2026" },
    { category: "AI channel data", title: "AI-referred shopper insights", url: "https://www.shopify.com/enterprise/blog/ai-search-insights", note: "Shopify-published Q1 2026 AI referral growth, measurement guidance, UCP, Catalog, and channel attribution.", accessed: "Accessed 23 Sep 2026" },
    { category: "AI discoverability", title: "Shopify GEO playbook", url: "https://www.shopify.com/enterprise/blog/generative-engine-optimization", note: "Structured product data, answer-ready content, brand authority, AI auditing, and Agentic Storefronts.", accessed: "Accessed 23 Sep 2026" },
    { category: "AI product data", title: "Shopify Catalog for agentic storefronts", url: "https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/products", note: "Official product eligibility and data requirements for connected AI shopping channels.", accessed: "Accessed 23 Sep 2026" },
    { category: "Merchant AI", title: "Shopify Sidekick", url: "https://www.shopify.com/sidekick", note: "Commerce-focused AI assistant for analysis, tasks, content, and merchant operations; validate live capability and permissions.", accessed: "Accessed 23 Sep 2026" },
    { category: "Merchant AI", title: "Shopify Magic", url: "https://help.shopify.com/en/manual/ai-powered-tools/shopify-magic", note: "AI-assisted content, media, and commerce workflows with documented limitations and review responsibilities.", accessed: "Accessed 23 Sep 2026" },
    { category: "Developer AI", title: "Storefront MCP", url: "https://shopify.dev/docs/apps/build/storefront-mcp", note: "Official tools for AI agents to search catalogs, inspect products, manage carts, and use policy information with governed storefront data.", accessed: "Accessed 23 Sep 2026" },
    { category: "Customer AI", title: "Shopify Inbox agent", url: "https://help.shopify.com/en/manual/inbox/assigning-your-ai-staff-member", note: "Customer-facing AI agent requirements, data sources, operating modes, accuracy responsibility, and human handoff.", accessed: "Accessed 23 Sep 2026" },
    { category: "AI knowledge", title: "Shopify Knowledge Base", url: "https://help.shopify.com/en/manual/promoting-marketing/knowledge-base", note: "Governed facts and FAQs, matched sources, and visibility into answered and unanswered AI questions.", accessed: "Accessed 23 Sep 2026" },
    { category: "Merchant AI", title: "Sidekick capabilities and controls", url: "https://help.shopify.com/en/manual/ai-powered-tools/sidekick", note: "Official documentation for analysis, content, products, workflows, apps, and review-oriented changes.", accessed: "Accessed 23 Sep 2026" },
    { category: "AI commerce data", title: "Shopify agentic commerce executive guide", url: "https://www.shopify.com/enterprise/blog/agentic-commerce-executive-guide", note: "Reports AI-referred orders up nearly 13x and referral sessions up more than 8x year over year in Q1 2026.", accessed: "Accessed 23 Sep 2026" },
    { category: "AI visibility", title: "Microsoft Copilot and Shopify Catalog", url: "https://about.ads.microsoft.com/en/blog/post/april-2026/win-across-all-three-eras-of-the-web", note: "Reports nearly 90% relative Copilot impression-share growth for the top 100,000 Shopify merchants by GMV in the US and Canada; not a Veneta forecast.", accessed: "Accessed 23 Sep 2026" },
    { category: "European adoption", title: "Deloitte: state of agentic commerce in Europe", url: "https://www.deloitte.com/nl/en/Industries/retail/perspectives/ai-x-retail-the-state-of-agentic-commerce-in-europe.html", note: "Reports 56% of European consumers have used AI to shop at least once; methodology should be reviewed before external reuse.", accessed: "Accessed 23 Sep 2026" }
  ]
};
