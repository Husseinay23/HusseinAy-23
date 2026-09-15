import type { Project } from '../types/project';

export const projects: Project[] = [
  // FLAGSHIP PROJECTS
  {
    id: 'ecosouk',
    title: 'EcoSouk',
    role: 'Junior Full-Stack Developer',
    company: 'Harmonically Labs',
    period: 'Aug 2025 – Feb 2026',
    status: 'live-sold',
    statusLabel: 'Live, Sold',
    category: 'flagship',
    stack: ['TypeScript', 'Medusa JS', 'Next.js'],
    heroBlurb: 'Multi-tenant marketplace platform with client-facing storefront and separate merchant admin site.',
    detailedDescription: `Multi-tenant marketplace platform — a client-facing storefront paired with a separate merchant admin site. Multiple independent merchants log in to their own dashboard to post items, manage inventory, and run full CRUD on their own listings, without touching each other's data. Built on Medusa JS as the commerce backend with a TypeScript frontend.`,
    highlights: [
      'Multi-tenancy architecture with isolated merchant data',
      'Merchant permission boundaries and role-based access',
      'Real commercial outcome — platform sold to client',
      'Full CRUD workflows for vendor inventory management',
    ],
  },
  {
    id: 'asalyha',
    title: 'Asalyha',
    role: 'Junior Full-Stack Developer',
    company: 'Harmonically Labs',
    period: 'Aug 2025 – Feb 2026',
    status: 'live-sold',
    statusLabel: 'Live, Sold',
    category: 'flagship',
    stack: ['TypeScript', 'Medusa JS', 'Next.js'],
    heroBlurb: 'E-commerce platform for a Saudi Arabia-based retailer selling coffee, honey, herbs, and artisanal products.',
    detailedDescription: `Online shop for a Saudi Arabia-based retailer selling coffee, honey, herbs, and related niche/artisanal products. Same commerce stack as EcoSouk (TypeScript + Medusa JS), built and shipped as a standalone storefront.`,
    highlights: [
      'Second production build on the same stack — demonstrates range',
      'Single-brand shop vs. marketplace architecture comparison',
      'Full e-commerce functionality with Medusa JS backend',
      'Deployed and sold to client',
    ],
  },
  {
    id: 'rawaj',
    title: 'Rawaj',
    status: 'portfolio',
    statusLabel: 'Portfolio Piece',
    category: 'flagship',
    stack: ['Next.js 15', 'Firebase', 'WhatsApp Checkout'],
    heroBlurb: 'Luxury perfume e-commerce platform with two-repo architecture and WhatsApp-native checkout.',
    detailedDescription: `Luxury perfume e-commerce platform. Split into two Next.js 15 codebases — storefront + admin — both backed by one Firebase project, so data stays in sync without merging the two apps into a monolith. Checkout runs through WhatsApp rather than a payment gateway, which fits how a lot of regional luxury/boutique retail actually transacts. Addendum build includes customer accounts, a points-based rewards program, and a testimonials system.`,
    highlights: [
      'Luxury e-commerce visual standards',
      'Two-repo/one-backend architecture decision',
      'WhatsApp-native checkout pattern',
      'Customer accounts with points-based rewards system',
    ],
    repoUrl: 'https://github.com/Husseinay23/rawaj-store',
  },
  {
    id: 'cpj',
    title: 'Classic Pizza Joint',
    status: 'portfolio',
    statusLabel: 'Portfolio Piece',
    category: 'flagship',
    stack: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    heroBlurb: 'Full-stack restaurant build with bilingual support, custom pizza builder, and WhatsApp checkout.',
    detailedDescription: `First full-stack restaurant build. Bilingual Arabic/English with full language switching, WhatsApp checkout, a custom half-and-half pizza builder (interactive product configurator), and a Firebase-backed admin CMS so the owner could manage the menu without touching code.`,
    highlights: [
      'Custom half-and-half pizza builder — genuine interaction-design feature',
      'Bilingual Arabic/English with full RTL support',
      'Firebase-backed admin CMS for menu management',
      'WhatsApp checkout integration',
    ],
    liveUrl: 'https://classic-pizza-joint-client.vercel.app/en',
  },
  {
    id: 'shiraz',
    title: 'Shiraz',
    status: 'complete',
    statusLabel: 'Complete',
    category: 'flagship',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Static Export'],
    heroBlurb: 'Professional portfolio site for a Speech-Language Pathologist with static-first architecture.',
    detailedDescription: `A professional portfolio/practice site for a Speech-Language Pathologist. Went through several architecture pivots before landing on the final approach — started scoped for Payload CMS + Firebase, moved to a pure static export with typed data files for simplicity and speed. This is a good "process" story — shows decision-making, static-first instinct, then upgrading only when the requirement demands it.`,
    highlights: [
      'Architecture decision-making showcase',
      'Static-first approach for simplicity and performance',
      'Clean, professional, accessible presentation',
      'Typed TypeScript data files for content management',
    ],
  },
  {
    id: 'sarahs-bakery',
    title: "Sarah's Bakery",
    status: 'live',
    statusLabel: 'Live Preview, On Hold',
    category: 'flagship',
    stack: ['Next.js', 'Tailwind CSS', 'Firebase', 'WhatsApp Checkout'],
    heroBlurb: 'Full site for a home bakery business with custom Mini Box selector and WhatsApp checkout.',
    detailedDescription: `Full site for a friend's home cinnamon-roll business. Custom color palette, a hero marquee animation, a 12-piece "Signature Mini Box" visual selector (pick your own box of rolls), WhatsApp checkout, and a minimal admin panel. Reached a live preview and got sign-off before being paused at client's request.`,
    highlights: [
      '12-piece Mini Box interactive product selector',
      'Custom product configurator pattern (like CPJ pizza builder)',
      'Hero marquee animation',
      'Client-approved, live on Vercel',
    ],
    liveUrl: 'https://sarah-s-bakery.vercel.app/',
  },

  // IN PROGRESS
  {
    id: 'spades',
    title: 'Spades',
    status: 'in-progress',
    statusLabel: 'In Build — Deadline Sep 2026',
    category: 'in-progress',
    stack: ['Next.js', 'Tailwind CSS', 'Firebase'],
    heroBlurb: 'Multi-vendor marketplace with gamification layer — card games unlock randomized product discounts.',
    detailedDescription: `A multi-vendor marketplace for trendy products with a genuine gamification layer: users play card games (high-low, blackjack-style) to unlock randomized per-product discounts within admin-set ranges. Full admin dashboard (vendor management, discount ranges, order routing across vendors, sales analytics with charts), account-gated checkout, and a black/gold/red casino-card visual identity — suit icons rendered as glowing outlines drifting across the background.`,
    highlights: [
      'Most ambitious system to date',
      'Real business logic: per-vendor order splitting, attempt-lockout rules',
      'Gamification: card games for discount unlocks',
      'Full admin dashboard with analytics',
      'Black/gold/red casino-card visual identity',
    ],
  },

  // MOBILE
  {
    id: 'bayti',
    title: 'Bayti',
    status: 'in-progress',
    statusLabel: 'In Build',
    category: 'mobile',
    stack: ['Expo', 'React Native', 'Firebase'],
    heroBlurb: 'Mobile app for family grocery requests and expense tracking with LBP/USD currency support.',
    detailedDescription: `Mobile app — a family-oriented grocery/errand request-and-fulfillment system. Any family member posts a request (item, quantity, category); anyone else can claim and partially fulfill it, updating the list live as they shop. Money moves outside the app (Whish or card) but the app tracks who owes/paid whom, with a category-based spend chart and an LBP/USD currency toggle. A second module, Bills & Budget, handles recurring household bills with paid/unpaid tracking and due-date reminders.`,
    highlights: [
      'First mobile entry in portfolio',
      'Fintech angle: currency handling, request/settle flow',
      'Real-time family request fulfillment',
      'LBP/USD currency toggle',
      'Bills & Budget module with due-date reminders',
    ],
  },

  // RESEARCH / TECHNICAL
  {
    id: 'adi',
    title: 'Arabic Dialect Identification',
    role: 'Final Year Project',
    company: 'Phoenicia University',
    status: 'complete',
    statusLabel: 'Complete, Paper in Progress',
    category: 'research',
    stack: ['Python', 'CNN', 'ResNet-18', 'NLP', 'Machine Learning'],
    heroBlurb: 'Built a 22,000-clip corpus spanning 22 Arabic dialects and trained CNN classifiers for dialect identification.',
    detailedDescription: `Built a custom 22,000-clip corpus spanning 22 Arabic dialects from scratch (the "ADC" corpus), then trained CNN classifiers for country-level dialect identification, plus a web demo so the model could actually be tested live. Real-world testing exposed the classic gap between dataset accuracy and field accuracy — traced to limited data diversity, not a modeling flaw. Currently adding Modern Standard Arabic (MSA) data and retraining, both to improve accuracy and to test whether the model can correctly recognize when someone is speaking MSA rather than any dialect.`,
    highlights: [
      '22,000-clip original dataset built from scratch',
      '22 Arabic dialects covered',
      'CNN classifiers with ResNet-18 architecture',
      'Honest reporting of real-world accuracy gap',
      'Being extended into a publishable paper',
    ],
  },
  {
    id: 'toolkit',
    title: 'Personal Frontend Toolkit',
    status: 'live',
    statusLabel: 'Private, In Active Maintenance',
    category: 'research',
    stack: ['Next.js 15', 'Firebase', 'Directus', 'Tailwind CSS'],
    heroBlurb: 'Private hub of 39 visual component generators and workflow tools built for personal use.',
    detailedDescription: `A private hub of 39 visual component generators and workflow tools built for personal use — brand kit generator, color palette extractor, invoice PDF generator, WhatsApp QR generator, and more. Recently audited all 39 tools and triaged priority bugs (slow model load in the Subject Cut tool, color vibrancy loss in the Image Compressor, a non-functional CSS Clamp Calculator, and a shared Tailwind-output bug affecting every generator).`,
    highlights: [
      '39 tools built and maintained',
      'Proof of building tools for yourself, not just clients',
      'Brand kit generator, color palette extractor, invoice PDF generator',
      'Shows engineering mindset beyond client work',
    ],
  },
];

export const projectFilters = [
  { id: 'all' as const, label: 'All' },
  { id: 'flagship' as const, label: 'Flagship' },
  { id: 'in-progress' as const, label: 'In Progress' },
  { id: 'mobile' as const, label: 'Mobile' },
  { id: 'research' as const, label: 'Research' },
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
