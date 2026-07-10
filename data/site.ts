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
];

export const caseStudies: CaseStudy[] = [
  {
    id: "beard-growth-ugc",
    title: "AI UGC Storytelling Ad for Beard Growth Serum",
    client: "DTC Beauty & Grooming Brand",
    category: "AI UGC / Video Production",
    year: "2026",
    challenge:
      "The brand needed UGC-style creative for a beard-growth serum without a UGC creator on retainer, and needed it fast enough to keep pace with a weekly testing cadence.",
    research:
      "Reviewed top-performing grooming ads on Meta and TikTok, read through community discussion on grooming forums and Reddit, and mapped the core objection standing between the audience and a purchase: 'does this actually work, or is it another empty promise.'",
    strategy:
      "Rather than lead with product features, the angle was built around a believable before-and-after story — a first-person account structure that mirrors how real UGC testimonials are told, front-loaded with the skepticism the viewer already feels.",
    creativeDirection:
      "Directed the piece as a single-take, handheld-style testimonial with natural pacing, on-screen captions for silent autoplay, and a hook built entirely around the viewer's internal doubt in the first two seconds.",
    execution:
      "Produced using AI UGC video generation tools, refined through several iterations of voice, pacing, and framing to remove anything that read as synthetic or overly polished.",
    deliverables: [
      "AI-generated UGC video ad (9:16, Reels/Stories/TikTok)",
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
    challenge:
      "The client's media buyer needed a continuous supply of fresh static creative — over 100 variations a week — to keep multiple test campaigns from going stale.",
    research:
      "Audited the account's existing creative library and competitor ads weekly to spot fatigue signals early and identify which visual and messaging patterns still had headroom.",
    strategy:
      "Built a variation framework rather than one-off designs: a small set of proven angles, each pushed through multiple visual treatments, offers, and hook lines so testing volume never depended on finding a brand-new idea every day.",
    creativeDirection:
      "Established a consistent static ad system — grid, type, and product-photography treatment — so variations stayed on-brand while still reading as distinct tests to the algorithm and the audience.",
    execution:
      "Ran a weekly production cycle: brief, batch design in Canva and Figma, internal review against the brand system, then delivery in ad-ready formats sized for Feed, Stories, and Reels placements.",
    deliverables: [
      "100+ static ad variations per week",
      "Organized delivery by angle, offer, and placement",
      "Creative naming convention for media-buyer tracking",
    ],
    results: [
      "Sustained a 100+ creative/week output for months without missing a cycle",
      "Gave the media buyer enough fresh volume to run continuous A/B tests",
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
    challenge:
      "The brand's existing ads looked polished but weren't converting — a sign the message, not the visuals, was the problem.",
    research:
      "Went back to the customer before touching the design tool: mapped what the audience already believed about the product category, and where competitor ads were making the same tired claims.",
    strategy:
      "Reframed the offer around a specific belief shift rather than a feature list, then built the visual hierarchy to make that one belief the first thing a scrolling thumb registers.",
    creativeDirection:
      "Stripped each ad down to a single dominant message with minimal supporting elements — favoring bold typography and high-contrast layouts over decorative visuals that compete for attention.",
    execution:
      "Delivered a full set of static variations per angle, each tuned for a specific placement and funnel stage, ready for direct upload into Meta Ads Manager.",
    deliverables: [
      "Angle-based static ad sets",
      "Placement-specific sizing (Feed, Story, Reels)",
      "Creative rationale notes for each concept",
    ],
    results: [
      "Improved scroll-stopping performance versus the brand's prior creative batch",
      "Gave the media buying team clearer signal on which belief-driven angles to scale",
      "Established a repeatable brief structure for future static batches",
    ],
    lessonsLearned:
      "A beautiful ad with the wrong message still loses — the highest-leverage design decision happens before anything gets opened in Canva or Figma.",
    gallery: 5,
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
