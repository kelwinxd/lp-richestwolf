// Single source of truth for price, checkout and copy.
// Items marked TODO map to the [PREENCHER] / [DECIDIR] items in the spec.

export const site = {
  name: "Richest Wolf",
  url: "https://richestwolf.com", // TODO: final domain
  contactEmail: "hello@richestwolf.com", // TODO: real contact e-mail
  title: "Richest Wolf — The Money Playbook They Never Taught You",
  description:
    "A practical PDF guide to budgeting, saving and investing with a clear plan. Instant download, secure checkout, 30-day money-back guarantee.",
};

export const product = {
  title: "Richest Wolf",
  subtitle: "The Money Playbook They Never Taught You",
  price: 47, // TODO: confirm final price
  currency: "USD",
  // Only set this if the product was really sold at this price before.
  anchorPrice: null as number | null,
  pages: 120, // TODO: real page count
  readingTime: "~3 hrs", // TODO
  format: "PDF",
  refundDays: 30, // TODO: confirm 14 or 30
  coverFront: "/cover-front.svg", // TODO: replace with the real cover export (≥1600px tall, .webp)
};

// Swap the test link for the production one here before launch.
export const checkoutUrl =
  "https://YOUR-STORE.lemonsqueezy.com/checkout/buy/PRODUCT-ID?embed=1"; // TODO

export const priceLabel = `$${product.price}`;

export const hero = {
  headline: "Think like the wealthy. Build like a wolf.",
  // TODO: "A practical guide to [RESULT] in [TIMEFRAME]."
  subheadline:
    "A practical guide to taking control of your money, building savings and investing with a clear plan — starting this month.",
  trust: ["Instant PDF download", "Secure checkout", `${product.refundDays}-day guarantee`],
};

export const problem = [
  "Your paycheck arrives, and a few weeks later it's gone. You're not sure where.",
  "Debt keeps rolling over, and every month feels like starting from zero.",
  "You know you should be investing, but nobody ever showed you a plan.",
  "Meanwhile, people around you seem to be quietly getting ahead.",
];

// TODO: one sentence on the book's core method.
export const solution =
  "Wealth isn't a secret or a lottery ticket. It's a system: spend with intent, protect what you earn, and let disciplined investing do the heavy lifting over time.";

// TODO: replace with the real table of contents.
export const chapters = [
  { title: "The Wolf Mindset", benefit: "Why discipline beats income when it comes to building wealth." },
  { title: "Know Your Numbers", benefit: "Map where every dollar goes in under an hour." },
  { title: "The Budget You'll Actually Follow", benefit: "A simple system that survives real life." },
  { title: "Killing Debt", benefit: "A clear order of attack, from the most expensive debt down." },
  { title: "The Safety Net", benefit: "How big your emergency fund should be, and where to keep it." },
  { title: "Investing 101", benefit: "Index funds, compounding and risk, explained without jargon." },
  { title: "Building Your Portfolio", benefit: "Turn principles into a plan you can start this month." },
  { title: "Growing Your Income", benefit: "Practical ways to widen the gap between earning and spending." },
  { title: "Playing the Long Game", benefit: "Habits that keep you on track for decades, not weeks." },
];

export const benefits = [
  { title: "Build a budget you'll actually follow", text: "No spreadsheets you abandon in a week. A system that fits your life." },
  { title: "Know exactly where your money goes", text: "Clarity on every dollar, so nothing slips away unnoticed." },
  { title: "Get out of debt with a clear order", text: "Stop juggling payments and start closing accounts for good." },
  { title: "Start investing with a plan", text: "Understand what to buy, why, and how much risk you're taking." },
  { title: "Build a real safety net", text: "Sleep better knowing an emergency won't set you back years." },
  { title: "Think long-term", text: "Make decisions today that your future self will thank you for." },
];

// TODO: real author photo, name and story.
export const author = {
  name: "The Richest Wolf",
  photo: null as string | null,
  bio: [
    "I wrote this book because nobody taught me how money actually works. School didn't, and most of the advice online was either too complicated or too good to be true.",
    "These pages are the system I wish I'd had: practical, honest, and built for people who want steady progress rather than overnight miracles.",
  ],
};

// No real testimonials yet, so the page shows "Who this is for" instead.
// Only add real quotes from real readers here — never invented ones.
export const testimonials: { quote: string; name: string }[] = [];

export const audience = {
  forYou: [
    "You earn a decent income but never seem to keep much of it",
    "You want to start investing but don't know where to begin",
    "You prefer a clear plan over hype and get-rich-quick promises",
    "You're willing to put in steady effort over months and years",
  ],
  notForYou: [
    "You're looking for a trading system or guaranteed returns",
    "You want to get rich overnight",
  ],
};

// TODO: only list bonuses that actually exist.
export const included = [
  `The complete Richest Wolf ebook (${product.format}, ~${product.pages} pages)`,
  "Read on any device: phone, tablet or computer",
  "Instant download link sent to your e-mail",
  "Free updates to future editions",
];

export const faq = [
  {
    q: "Is this financial advice?",
    a: "No. The book is educational content only. It is not financial, investment, tax or legal advice. Consider talking to a licensed professional about your specific situation.",
  },
  {
    q: "Do I need any experience?",
    a: "Not at all. The book starts from the fundamentals and builds step by step, so it works whether you're starting from zero or want to organize what you already know.",
  },
  {
    q: "How do I receive the book?",
    a: "Right after checkout you'll get an e-mail with a download link to the PDF. You can start reading within minutes.",
  },
  {
    q: "Does it work outside the US?",
    a: "Yes. The principles — budgeting, debt, saving and long-term investing — apply anywhere. Where account types or rules differ by country, the book explains the idea so you can find the local equivalent.",
  },
  {
    q: "Are there any recurring charges?",
    a: `No. It's a one-time payment of ${priceLabel}. No subscriptions.`,
  },
  {
    q: "What if I don't like it?",
    a: `E-mail us within ${product.refundDays} days of purchase and we'll refund you in full. No hard feelings.`,
  },
];

export const disclaimer =
  "Richest Wolf is educational content only and does not constitute financial, investment, tax or legal advice. Results vary from person to person. Investing involves risk, including the possible loss of principal.";
