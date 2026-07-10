import type {
  CaseStudy,
  FaqItem,
  ProcessStep,
  Service,
  Stat,
  TechItem,
  Testimonial,
  WorkItem,
} from "@/types";

export const site = {
  name: "Heart Field Lamadrid",
  shortName: "Heart Field",
  role: "Performance Creative for DTC Brands",
  company: "HF Creative",
  location: "Cadiz, Negros Occidental, Philippines",
  email: "heartfieldlamadrid@gmail.com",
  upworkUrl:
    "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?mp_source=share",
  linkedinUrl: "https://www.linkedin.com/in/heart-field-lamadrid-03b360166",
  tagline:
    "Helping DTC & e-commerce brands scale through high-converting Meta and TikTok ad creatives.",
};

export const stats: Stat[] = [
  { value: "100%", label: "Job success score" },
  { value: "Top Rated", label: "Upwork status" },
  { value: "27", label: "Projects delivered" },
  { value: "495+", label: "Hours on production" },
  { value: "0–4h", label: "Avg. response time" },
  { value: "100+", label: "Creatives / week capacity" },
];

export const services: Service[] = [
  {
    index: "01",
    title: "Meta Ad Creatives",
    description:
      "Static and video ad creatives for Meta built on customer psychology, not just visual polish — designed to stop the scroll and move belief.",
    tags: ["Feed", "Reels", "Stories"],
  },
  {
    index: "02",
    title: "Static Ads",
    description:
      "High-volume static ad design for e-commerce and DTC brands — built for rapid testing, iteration, and weekly refreshes at scale.",
    tags: ["A/B Testing", "Batch Production"],
  },
  {
    index: "03",
    title: "AI Creative Production",
    description:
      "AI-assisted UGC and product videos that cut production time without cutting the strategy — built with modern generative workflows.",
    tags: ["AI UGC", "AI Product Video"],
  },
  {
    index: "04",
    title: "UGC Concepts",
    description:
      "Native-feeling UGC concepts and scripts engineered to blend into the feed while still carrying a clear commercial hook.",
    tags: ["Scripts", "Hooks", "Native Ads"],
  },
  {
    index: "05",
    title: "Creative Strategy",
    description:
      "Research-driven angle development — competitor teardown, customer belief mapping, and messaging built to move a specific audience.",
    tags: ["Research", "Angles", "Positioning"],
  },
  {
    index: "06",
    title: "Landing Page Creatives",
    description:
      "Conversion-focused visual assets for landing pages that carry the ad's promise through to the point of purchase.",
    tags: ["CRO", "Funnel Assets"],
  },
  {
    index: "07",
    title: "Motion Graphics",
    description:
      "Direct-response video editing and motion design for Reels, TikTok, and Stories — paced for retention, built for performance.",
    tags: ["Editing", "Captions", "Pacing"],
  },
  {
    index: "08",
    title: "Creative Systems",
    description:
      "Repeatable creative pipelines — briefs, variation frameworks, and testing structures that keep media buyers supplied every week.",
    tags: ["Frameworks", "Weekly Pipelines"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Research Competitors",
    description:
      "Study what's already running — top ads, landing pages, and creative strategy frameworks in the category.",
  },
  {
    index: "02",
    title: "Identify Customer Beliefs",
    description:
      "Map what the customer currently believes and what belief has to shift before they'll buy.",
  },
  {
    index: "03",
    title: "Develop Winning Angles",
    description:
      "Turn research into a shortlist of angles worth testing — grounded in psychology, not guesswork.",
  },
  {
    index: "04",
    title: "Build Multiple Concepts",
    description:
      "Draft several distinct creative concepts per angle so the strongest idea has room to surface.",
  },
  {
    index: "05",
    title: "Design Creative Variations",
    description:
      "Produce static, UGC, and motion variations built for rapid A/B testing across placements.",
  },
  {
    index: "06",
    title: "Test",
    description:
      "Ship variations into live testing environments alongside the media buyer's account structure.",
  },
  {
    index: "07",
    title: "Analyze Results",
    description:
      "Read performance data to separate what actually moved metrics from what just looked good.",
  },
  {
    index: "08",
    title: "Double Down",
    description:
      "Scale what works into new variations and angles, keeping the creative pipeline compounding weekly.",
  },
];

export const workItems: WorkItem[] = [
  {
    id: "beard-growth-ugc",
    title: "AI UGC Storytelling Ad for Beard Growth Serum",
    category: "AI UGC / Video",
    year: "2026",
    summary:
      "A story-led AI UGC ad built to carry a beard-growth serum's promise through a believable, native-feeling narrative.",
  },
  {
    id: "high-volume-meta",
    title: "High-Volume Meta Ad Creatives",
    category: "Static / Batch Production",
    year: "2026",
    summary:
      "100+ static ad variations produced weekly for an e-commerce brand's continuous testing pipeline.",
  },
  {
    id: "scroll-stopping-static",
    title: "Scroll-Stopping Static Ads for E-Commerce",
    category: "Creative Strategy / Static",
    year: "2025–2026",
    summary:
      "Angle-driven static ad concepts for a DTC brand, built around customer belief shifts rather than templates.",
  },
  {
    id: "sunglasses-testing-angles",
    title: "High-CTR Sunglasses Ad Creatives",
    category: "Creative Strategy / Static",
    year: "2026",
    summary:
      "Four parallel creative angles for a sunglasses brand, built to let performance data pick the winner.",
  },
  {
    id: "promo-static-supplement",
    title: "High-Converting Promo & Static Ads",
    category: "Static / Promotional",
    year: "2025–2026",
    summary:
      "Transformation and reaction-driven promo creative for an e-commerce supplement brand.",
  },
  {
    id: "native-style-realistic-models",
    title: "Native-Style Ads with Realistic Models",
    category: "AI Creative / Native Ads",
    year: "2025–2026",
    summary:
      "AI-generated lifestyle models and natural product integration, built to blend into the feed.",
  },
  {
    id: "talking-head-ai-avatar",
    title: "Talking-Head AI Avatar Ads",
    category: "AI Video / UGC-Style",
    year: "2025–2026",
    summary:
      "AI avatar talking-head video ads built to replicate authentic, trust-building UGC content.",
  },
  {
    id: "advertorial-wellness",
    title: "Advertorial-Style Ad for Health & Wellness",
    category: "Creative Strategy / Advertorial",
    year: "2025–2026",
    summary:
      "Editorial-style ad creative built to earn trust in a skeptical wellness category.",
  },
  {
    id: "tiktok-productivity-app",
    title: "TikTok UGC Ad for a Productivity App",
    category: "AI UGC / App Demo",
    year: "2025–2026",
    summary:
      "AI avatar review paired with a live screen recording to prove the app's core benefit.",
  },
  {
    id: "branded-carousels",
    title: "High-Converting Branded Carousel Designs",
    category: "Graphic Design / Carousel Ads",
    year: "2025–2026",
    summary:
      "A repeatable, hook-first carousel system built to keep the swipe going card to card.",
  },
  {
    id: "auriona-evening-calm",
    title: "Auriona Evening Calm — AI UGC Meta Ads",
    category: "AI UGC / Video",
    year: "2025–2026",
    summary:
      "A relatable-nighttime-struggle narrative built for a sleep and wellness supplement brand.",
  },
  {
    id: "streetwear-ai-fashion",
    title: "AI-Generated Fashion Ads for a Streetwear Brand",
    category: "AI Creative / Fashion",
    year: "2025–2026",
    summary:
      "Photoshoot-free fashion marketing visuals using realistic AI-generated lifestyle models.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "beard-growth-ugc",
    title: "AI UGC Storytelling Ad for Beard Growth Serum",
    client: "DTC Beauty & Grooming Brand",
    category: "AI UGC / Video Production",
    year: "2026",
    role: "AI Ad Creative Specialist",
    tools: ["Canva", "CapCut", "ElevenLabs", "AI Image/Video Generation"],
    publishedOn: "Jun 27, 2026",
    images: ["/work/beard-growth-ugc/1.png"],
    challenge:
      "The brand needed UGC-style creative for a beard-growth serum without a UGC creator on retainer, and needed it fast enough to keep pace with a weekly testing cadence.",
    research:
      "Reviewed top-performing grooming ads on Meta and TikTok, read through community discussion on grooming forums and Reddit, and mapped the core objection standing between the audience and a purchase: 'does this actually work, or is it another empty promise.'",
    strategy:
      "Rather than lead with product features, the angle was built around a believable before-and-after story following a simple direct-response flow — Problem → Product Reveal → Solution → CTA — front-loaded with the skepticism the viewer already feels.",
    creativeDirection:
      "Directed the piece as a single-take, handheld-style testimonial with natural pacing, on-screen captions for silent autoplay, and a hook built entirely around the viewer's internal doubt in the first two seconds.",
    execution:
      "Produced the full ad using AI UGC video generation tools, with an AI voice-over built in ElevenLabs and video editing and pacing finished in CapCut — refined through several iterations to remove anything that read as synthetic or overly polished.",
    deliverables: [
      "AI-generated UGC video ad (9:16, Reels/Stories/TikTok)",
      "ElevenLabs AI voice-over track",
      "Caption-timed cutdown for silent autoplay feeds",
      "Hook variation set for testing",
    ],
    results: [
      "Delivered within the client's rapid testing timeline",
      "Approved on first review with no reshoot cycles",
      "Used as a template for follow-up AI UGC batches",
    ],
    lessonsLearned:
      "AI UGC only reads as authentic when the script is written like a real testimonial first — the tools handle execution, but belief and pacing still have to be designed by hand.",
    gallery: 4,
  },
  {
    id: "high-volume-meta",
    title: "High-Volume Meta Ad Creatives",
    client: "E-Commerce Brand — Ongoing Retainer",
    category: "Static Ads / Weekly Production Pipeline",
    year: "2026",
    role: "Ad Creative Designer",
    tools: ["Canva", "Figma"],
    publishedOn: "Mar 29, 2026",
    link: {
      label: "Watch a Sample on Drive",
      url: "https://drive.google.com/file/d/1cL9gSdoJXIFdsZj_YyEM2ljIXx6sreoZ/view?usp=drive_link",
    },
    challenge:
      "The client's media buyer needed a continuous supply of fresh static creative — over 100 variations a week — to keep multiple test campaigns from going stale.",
    research:
      "Audited the account's existing creative library and competitor ads weekly to spot fatigue signals early and identify which visual and messaging patterns still had headroom.",
    strategy:
      "Built a variation framework rather than one-off designs: a small set of proven angles, each pushed through multiple visual treatments, offers, and hook lines so testing volume never depended on finding a brand-new idea every day.",
    creativeDirection:
      "Established a consistent static ad system — grid, type, and product-photography treatment — so variations stayed on-brand while still reading as distinct tests to the algorithm and the audience.",
    execution:
      "Ran a weekly production cycle: brief, rapid iteration of winning concepts across multiple hooks and angles per product, batch design in Canva and Figma, internal review against the brand system, then delivery in ad-ready formats sized for Feed, Stories, and Reels placements.",
    deliverables: [
      "100+ static ad variations per week",
      "Multiple hooks and angles per product",
      "Organized delivery by angle, offer, and placement",
      "Creative naming convention for media-buyer tracking",
    ],
    results: [
      "Sustained a 100+ creative/week output for months without missing a cycle",
      "Helped the brand avoid creative fatigue by constantly rotating angles",
      "Retained on the account long-term based on consistency and turnaround",
    ],
    lessonsLearned:
      "At high volume, systems beat inspiration — a reusable variation framework produces more usable tests per week than trying to invent a new concept every time.",
    gallery: 6,
  },
  {
    id: "scroll-stopping-static",
    title: "Scroll-Stopping Static Ads for E-Commerce Brands",
    client: "DTC E-Commerce Brand",
    category: "Creative Strategy / Static Ads",
    year: "2025–2026",
    role: "AI Static Ad Designer / Creative Visual Designer",
    tools: ["Canva", "CapCut", "AI Image Generation"],
    publishedOn: "Nov 30, 2025",
    link: {
      label: "View Full Ad Set on Drive",
      url: "https://drive.google.com/drive/folders/1ONCPjxhvtClciMDlLJvw4TgF4UUCy4gG?usp=drive_link",
    },
    challenge:
      "The brand's existing ads looked polished but weren't converting — a sign the message, not the visuals, was the problem.",
    research:
      "Went back to the customer before touching the design tool: mapped what the audience already believed about the product category, and where competitor ads were making the same tired claims.",
    strategy:
      "Reframed the offer around a specific belief shift rather than a feature list, then built the visual hierarchy to make that one belief the first thing a scrolling thumb registers.",
    creativeDirection:
      "Stripped each ad down to a single dominant message with minimal supporting elements — favoring bold typography, sharp product focus, and high-contrast layouts over decorative visuals that compete for attention.",
    execution:
      "Used AI-powered image generation alongside professional graphic design techniques to build clean, modern, product-focused layouts, then delivered a full set of static variations per angle, tuned for Facebook, Instagram, and TikTok.",
    deliverables: [
      "Angle-based static ad sets",
      "AI-generated, product-focused visuals",
      "Placement-specific sizing (Feed, Story, Reels)",
      "Creative rationale notes for each concept",
    ],
    results: [
      "Improved engagement, CTR, and overall brand visibility versus the brand's prior creative batch",
      "Gave the media buying team clearer signal on which belief-driven angles to scale",
      "Established a repeatable brief structure for future static batches",
    ],
    lessonsLearned:
      "A beautiful ad with the wrong message still loses — the highest-leverage design decision happens before anything gets opened in Canva or Figma.",
    gallery: 5,
  },
  {
    id: "sunglasses-testing-angles",
    title: "High-CTR Sunglasses Ad Creatives (Meta Ads Testing Angles)",
    client: "DTC Sunglasses Brand",
    category: "Creative Strategy / Static Ads",
    year: "2026",
    role: "Ad Creative Designer | Performance Marketing Creative Designer",
    tools: ["Canva", "Figma"],
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=1994961732258119680",
    },
    challenge:
      "The brand was leaning on a single ad design with no read on which angle actually earned clicks — engagement and CTR had plateaued.",
    research:
      "Mapped the buying triggers specific to sunglasses shoppers — functional need, aesthetic identity, and price-driven urgency — then checked which were already being said by competitors.",
    strategy:
      "Rather than pick one angle, built four in parallel — problem–solution hooks, lifestyle and aesthetic appeal, offer-focused creatives, and UGC-style layouts — so the account could let performance data pick the winner instead of guessing upfront.",
    creativeDirection:
      "Every angle kept a mobile-first, in-feed read: one clear visual idea, a hook line built for the first half-second, and layouts that hold up at thumbnail size.",
    execution:
      "Produced a full variation set per angle, sized for Feed and Stories, ready to load directly into Meta Ads Manager for a structured A/B test.",
    deliverables: [
      "4 distinct creative angles",
      "Multiple static variations per angle",
      "Feed and Stories sizing",
    ],
    results: [
      "Gave the media buyer a structured angle test instead of a single guess",
      "Helped identify which angle actually drove CTR once live",
      "Delivered multiple variations for ongoing A/B testing",
    ],
    lessonsLearned:
      "Testing angles, not just designs, is what actually moves CTR — the visual treatment matters less than which belief the ad leads with.",
    gallery: 4,
  },
  {
    id: "promo-static-supplement",
    title: "High-Converting Promo & Static Ads for E-Commerce Brands",
    client: "E-Commerce Supplement Brand",
    category: "Static Ads / Promotional Creative",
    year: "2025–2026",
    role: "Creative Ads Designer & Multimedia Editor",
    tools: ["Canva", "CapCut"],
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=2032695611820920832",
    },
    challenge:
      "The supplement brand needed promo creative that could stand out in a category crowded with near-identical before/after claims.",
    research:
      "Looked at what made competing supplement ads forgettable — flat product shots and generic promo banners with no emotional hook.",
    strategy:
      "Leaned into transformation and reaction-driven concepts instead of a straight promo banner, giving the scroll a reason to stop before the offer even lands.",
    creativeDirection:
      "Built each variation around a single visual device — a shocked reaction, a transformation concept, or a bold promo callout — kept clean enough to still read instantly at feed size.",
    execution:
      "Delivered multiple clean creative directions in Canva and CapCut, using bold visuals and strong promo messaging so the client could test different emotional entry points against the same offer.",
    deliverables: [
      "Multiple promo creative directions",
      "Transformation and reaction-style concepts",
      "Ad-ready static exports",
    ],
    results: [
      "Gave the client several distinct directions to test instead of one promo banner",
      "Helped identify which emotional angle performed best for scaling",
      "Improved variety in the brand's paid social creative library",
    ],
    lessonsLearned:
      "A promo offer needs an emotional entry point before the discount does the convincing — the reaction is what earns the click.",
    gallery: 4,
  },
  {
    id: "native-style-realistic-models",
    title: "Native-Style Ads with Realistic Models & Product Integration",
    client: "DTC Brand",
    category: "AI Creative Production / Native Ads",
    year: "2025–2026",
    role: "AI Ad Creative Designer / Native Ads Specialist",
    tools: ["AI Image Generation", "Canva"],
    publishedOn: "Dec 28, 2025",
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=1992114209286864896",
    },
    challenge:
      "Traditional-looking ads were getting tuned out by an audience that scrolls past anything that reads as an obvious promotion.",
    research:
      "Studied what makes organic lifestyle content feel trustworthy — natural lighting, believable settings, and product presence that doesn't dominate the frame.",
    strategy:
      "Built ads to look like real feed content first and an advertisement second, using realistic AI-generated models in natural settings rather than studio-style product shots.",
    creativeDirection:
      "Directed model selection, lighting realism, and product placement so nothing in the frame reads as staged — the product sits inside the scene instead of being presented to camera.",
    execution:
      "Produced a set of native-style static ads using AI-generated imagery, layout-optimized for Facebook, Instagram, and TikTok feeds.",
    deliverables: [
      "AI-generated native-style static ads",
      "Lighting and scene realism direction",
      "Multi-platform sizing (Facebook/Instagram/TikTok)",
    ],
    results: [
      "Ads blended into feed rather than reading as promotional",
      "Improved perceived authenticity versus studio-style creative",
      "Gave the brand a native ad option without a physical photoshoot",
    ],
    lessonsLearned:
      "Authenticity in native ads comes from restraint — the less the product looks 'presented,' the more the ad gets trusted.",
    gallery: 4,
  },
  {
    id: "talking-head-ai-avatar",
    title: "Talking-Head AI Avatar Ads for E-Commerce & UGC Campaigns",
    client: "E-Commerce Brand",
    category: "AI Video Production / UGC-Style",
    year: "2025–2026",
    role: "AI Video Ad Creator / Talking-Head Avatar Specialist",
    tools: ["AI Video Generation", "Scriptwriting"],
    publishedOn: "Dec 28, 2025",
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=2004961645977128960",
    },
    challenge:
      "The brand wanted authentic-feeling talking-head UGC video without booking and coordinating real creators for every batch.",
    research:
      "Studied what makes a talking-head UGC ad feel human rather than scripted — natural pacing, imperfect phrasing, and expressions that match what's being said.",
    strategy:
      "Used AI avatars as the on-camera 'creator,' but treated the script exactly like a real UGC brief — clear, persuasive, and built to build trust fast.",
    creativeDirection:
      "Directed avatar selection, expression, and gesture to avoid the flat, over-enunciated delivery that immediately signals 'AI-generated' to a viewer.",
    execution:
      "Handled scripting, avatar selection, voiceover, and pacing/editing optimized for TikTok, Facebook, and Instagram placements.",
    deliverables: [
      "AI avatar talking-head video ads",
      "Persuasive UGC-style scripts",
      "Platform-optimized cuts (TikTok/Facebook/Instagram)",
    ],
    results: [
      "Delivered UGC-style video without a live creator shoot",
      "Faster turnaround than coordinating real talent",
      "Maintained a human, trust-building feel on camera",
    ],
    lessonsLearned:
      "An AI avatar only feels human if the script and pacing are written like a real conversation — the avatar is the actor, not the writer.",
    gallery: 4,
  },
  {
    id: "advertorial-wellness",
    title: "Advertorial-Style Ad Creative for Health & Wellness Product",
    client: "Health & Wellness Brand",
    category: "Creative Strategy / Advertorial",
    year: "2025–2026",
    role: "Creative Designer | Advertorial Ad Creative Designer",
    tools: ["Figma"],
    publishedOn: "Mar 14, 2026",
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=2004963726666010624",
    },
    challenge:
      "Straight promotional ads were losing credibility in a wellness category where audiences are naturally skeptical of hard-sell claims.",
    research:
      "Looked at how advertorial and expert-backed editorial content earns more trust than a direct promotional ad in health-adjacent categories.",
    strategy:
      "Designed the creative to read like an informative article rather than an ad — leading with credibility signals before the product ever appears.",
    creativeDirection:
      "Combined product visuals, lifestyle imagery, and informative-style headlines to simulate a native, editorial-feeling placement.",
    execution:
      "Built the advertorial layout in Figma, balancing editorial credibility with clear product visibility so it still functioned as a paid social asset.",
    deliverables: [
      "Advertorial-style ad layout",
      "Editorial-style headline system",
      "Product + lifestyle visual integration",
    ],
    results: [
      "Increased perceived credibility versus a direct promotional format",
      "Gave the brand a native-feeling asset for paid social",
      "Improved fit for content-driven marketing placements",
    ],
    lessonsLearned:
      "In skeptical categories, borrowing the visual language of editorial content earns more trust than a stronger promotional claim.",
    gallery: 3,
  },
  {
    id: "tiktok-productivity-app",
    title: "TikTok UGC Ad for Productivity Notes App",
    client: "Productivity / Notes App",
    category: "AI UGC / App Demo",
    year: "2025–2026",
    role: "UGC Ad Creator | AI Avatar Video Editor | TikTok Ad Creative Designer",
    tools: ["AI Video Generation", "Screen Recording"],
    publishedOn: "Mar 14, 2026",
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=2032693972731191296",
    },
    challenge:
      "The app needed to demonstrate a fast, abstract benefit — 'capture ideas quickly' — inside a short-form format that can't afford a slow explanation.",
    research:
      "Reviewed how TikTok-native app ads earn attention in the first second and how creator-style reviews build trust faster than a feature list.",
    strategy:
      "Paired a natural, creator-style review with a live screen recording of the app in use, so the claim and the proof appear in the same breath.",
    creativeDirection:
      "Structured the ad around a scroll-stopping hook, a quick product demonstration, and a clear call-to-action — fast enough for a mobile-first, short-form audience.",
    execution:
      "Used an AI-generated UGC avatar to simulate a natural creator review, combined with screen recordings of the note-taking flow to show the product in action.",
    deliverables: [
      "TikTok-style AI avatar UGC ad",
      "Screen-recorded product demo cut into the ad",
      "Mobile-first short-form structure",
    ],
    results: [
      "Demonstrated the app's core benefit inside a short-form format",
      "Combined creator-style trust with real product proof",
      "Delivered without needing a live app demo shoot",
    ],
    lessonsLearned:
      "For app ads, showing the product doing the thing beats describing the thing — the demo is the proof.",
    gallery: 3,
  },
  {
    id: "branded-carousels",
    title: "High-Converting Branded Carousel Designs",
    client: "Multiple E-Commerce Brands",
    category: "Graphic Design / Carousel Ads",
    year: "2025–2026",
    role: "Graphic Designer",
    tools: ["Canva"],
    publishedOn: "Dec 13, 2025",
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=2032692729876893696",
    },
    challenge:
      "Carousel ads are easy to make forgettable — inconsistent branding across slides and no clear reason to keep swiping.",
    research:
      "Looked at what makes a carousel actually get swiped through versus abandoned after slide one: a clear visual hierarchy and a reason to see the next card.",
    strategy:
      "Treated each carousel as one continuous message split across cards, not a set of unrelated slides, with consistent branding carrying the eye forward.",
    creativeDirection:
      "Established a repeatable slide system — hook slide, supporting slides, close slide — so every carousel stayed on-brand while still building toward a conversion.",
    execution:
      "Designed each carousel in Canva to align seamlessly with each brand's existing visual identity, with strong hooks on the opening card to earn the swipe.",
    deliverables: [
      "Branded carousel ad sets",
      "Consistent slide-to-slide visual system",
      "Hook-first opening card design",
    ],
    results: [
      "Improved swipe-through consistency across carousel sets",
      "Kept brand identity consistent across multiple slides",
      "Gave brands a repeatable carousel structure to reuse",
    ],
    lessonsLearned:
      "A carousel only works if slide one earns the swipe to slide two — the hook card carries the entire format.",
    gallery: 4,
  },
  {
    id: "auriona-evening-calm",
    title: "Auriona Evening Calm – AI UGC Meta Ads Creative",
    client: "Auriona — Sleep & Nervous System Recovery Supplement",
    category: "AI UGC / Video Production",
    year: "2025–2026",
    role: "UGC Video Editor & Creative Designer",
    tools: ["AI Video Generation", "Video Editing"],
    publishedOn: "Mar 14, 2026",
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=1999858773011353600",
    },
    challenge:
      "Auriona's Evening Calm supplement needed ad creative that could make an invisible problem — an overactive nervous system at night — feel immediately recognizable.",
    research:
      "Focused on the specific, relatable nighttime struggle: overthinking and an active nervous system that won't switch off, rather than generic 'better sleep' messaging.",
    strategy:
      "Built the ad around that one relatable moment, then let the product resolve it — visualized through subtle, cinematic bedroom scenes instead of clinical supplement messaging.",
    creativeDirection:
      "Directed calm, cinematic nighttime scenes and wellness-style motion graphics to match the emotional register of the problem — quiet, not loud.",
    execution:
      "Developed the short-form ad concept, wrote the script, generated key scenes with AI assistance, and edited a complete sequence optimized for Meta performance.",
    deliverables: [
      "AI-assisted UGC-style video ad",
      "Full script and scene concept",
      "Meta-optimized edit",
    ],
    results: [
      "Gave the brand a relatable emotional entry point instead of a feature pitch",
      "Matched creative tone to a wellness/sleep audience",
      "Delivered a complete ad sequence ready for Meta testing",
    ],
    lessonsLearned:
      "For wellness products, naming the exact nightly struggle the audience already recognizes does more work than describing the ingredients.",
    gallery: 4,
  },
  {
    id: "streetwear-ai-fashion",
    title: "AI-Generated Fashion Ad Creatives for Streetwear Brand",
    client: "Streetwear Brand",
    category: "AI Creative Production / Fashion",
    year: "2025–2026",
    role: "AI Creative Designer | Ad Creative Designer",
    tools: ["AI Image Generation"],
    publishedOn: "Mar 14, 2026",
    link: {
      label: "View Project on Upwork",
      url: "https://www.upwork.com/freelancers/~01bcae5f9a1ed98580?p=2032690033398931456",
    },
    challenge:
      "The brand needed high-quality fashion marketing visuals without the cost and lead time of a traditional photoshoot.",
    research:
      "Looked at what makes AI-generated fashion imagery read as premium rather than artificial — realistic lifestyle staging and natural product fit.",
    strategy:
      "Used AI-generated models to wear and present the brand's products in realistic lifestyle contexts, replacing the photoshoot step without lowering visual quality.",
    creativeDirection:
      "Focused on strong branding, bold typography, and product-centered visuals so the AI-generated imagery still communicated the brand's identity clearly.",
    execution:
      "Generated realistic lifestyle models, integrated the streetwear products naturally, and composed the final ads for social media marketing.",
    deliverables: [
      "AI-generated fashion lifestyle imagery",
      "Product integration on generated models",
      "Branded ad layouts",
    ],
    results: [
      "Produced marketing visuals without a physical photoshoot",
      "Maintained a premium, on-brand look across creative",
      "Sped up creative turnaround for a fashion drop cycle",
    ],
    lessonsLearned:
      "AI-generated fashion imagery holds up when the brand's typography and layout system carry as much weight as the model shot itself.",
    gallery: 4,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hartfield goes the extra mile and was easy to work with on my project. I will be hiring him again for more edits.",
    client: "Client, AI Editing Reels",
    project: "AI Editing Reels",
  },
  {
    quote: "Good cooperation with the Field.",
    client: "Client, AI UGC Video Trial",
    project: "Test Trial — AI UGC Videos",
  },
  {
    quote: "Thank you sir Valentin, and for the opportunity.",
    client: "Valentin, Meta Ads Static Designer",
    project: "Recherche Designer Créatives Statiques pour Meta Ads",
  },
];

export const techStack: TechItem[] = [
  { name: "Meta Ads Manager", category: "Platform" },
  { name: "TikTok Ads Manager", category: "Platform" },
  { name: "Canva", category: "Design" },
  { name: "Figma", category: "Design" },
  { name: "CapCut", category: "Video" },
  { name: "Adobe Premiere", category: "Video" },
  { name: "AI UGC Generation", category: "AI" },
  { name: "AI Product Video", category: "AI" },
  { name: "ChatGPT / Claude", category: "AI Research" },
  { name: "Reddit & Forum Research", category: "Research" },
];

export const faqs: FaqItem[] = [
  {
    question: "What exactly do you deliver?",
    answer:
      "Static Meta ads, AI UGC and AI product videos, scroll-stopping hooks and concepts, and creative variations built for A/B testing — sized and formatted ad-ready for Meta and TikTok placements.",
  },
  {
    question: "What's your turnaround time?",
    answer:
      "Standard static batches turn around within a few days. High-volume weekly retainers are built around a fixed weekly cycle, so the media buyer always has fresh creative on schedule.",
  },
  {
    question: "Do you run the ad campaigns too?",
    answer:
      "I focus on creative — strategy, design, and production. I work directly alongside media buyers and can align tightly with account structure, but campaign management sits with your buyer or team.",
  },
  {
    question: "Which industries have you worked with?",
    answer:
      "eCommerce, DTC, lead generation, beauty, wellness, home services, fashion, and B2B — the strategy adapts per category, but the underlying process stays the same.",
  },
  {
    question: "Do you work from a creative brief, or develop the strategy too?",
    answer:
      "Both. If you have a brief, I'll execute it well. If you want a creative partner, I research competitors, map customer beliefs, and bring new angles to the table every cycle — not just what's asked for.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Reach out with your brand, offer, and current creative — I'll review what's live, flag quick opportunities, and outline how a first batch or ongoing retainer would work.",
  },
];

export const employment = [
  {
    title: "Founder",
    org: "HF Creative",
    period: "Present",
    description:
      "Producing high-converting Meta and TikTok ad creatives for DTC and e-commerce brands — static ads, AI UGC, and direct-response video — for international clients through freelance and contract partnerships.",
  },
  {
    title: "Freelance Creative Strategist",
    org: "Upwork",
    period: "2025 — Present",
    description:
      "Top Rated freelancer with a 100% Job Success Score, delivering ad creative and funnel design work across eCommerce, DTC, and lead-generation accounts.",
  },
];
