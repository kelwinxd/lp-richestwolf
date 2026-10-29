// Single source of truth for price, checkout and copy.
// Items marked TODO map to the [PREENCHER] / [DECIDIR] items in the spec.

export const site = {
  name: "Richest Wolf",
  url: "https://richestwolf.vercel.app", // TODO: switch to the custom domain once it exists
  contactEmail: "hello@richestwolf.com", // TODO: real contact e-mail
  title: "Alpha Investor by Richest Wolf — Practical Finance Guide",
  description:
    "Timeless economic principles meet the decisions of Buffett, Munger and Bogle. A practical PDF guide to saving, cutting costs and investing for the long term.",
};

export const product = {
  title: "Alpha Investor",
  subtitle: "Practical Finance Guide Featuring Old and Modern Investors",
  price: 12,
  currency: "USD",
  // Only set this if the product was really sold at this price before.
  anchorPrice: null as number | null,
  pages: 36,
  readingTime: "~20 min",
  format: "PDF",
  refundDays: 30, // TODO: confirm 14 or 30
  coverFront: "/cover-front.webp", // TODO: re-export at ≥1600px tall; the current file is 387×603
  coverWidth: 387,
  coverHeight: 603,
};

// TEST MODE link. Swap for the live-mode link ("Copy to Live Mode" in Lemon Squeezy) once the store is activated.
export const checkoutUrl =
  "https://richestwolf.lemonsqueezy.com/checkout/buy/774d9cae-b2b6-4022-b0e9-ba10b9aac776?embed=1";

export const priceLabel = `$${product.price}`;

export const hero = {
  eyebrow: "Alpha Investor · by Richest Wolf",
  headline: "Think like the wealthy. Build like a wolf.",
  subheadline:
    "A practical finance guide that pairs timeless economic principles with the decisions of history's greatest investors — so you can save with purpose, stop the leaks and invest for the long term.",
  trust: ["Instant PDF download", "Secure checkout", `${product.refundDays}-day guarantee`],
};

export const problem = [
  "Your income goes up, but somehow there's never more left at the end of the month.",
  "Small, unexamined expenses quietly eat everything that comes in.",
  "Consumer debt feels convenient today and costs you years of capital later.",
  "You know you should invest, but every source is either pure theory or tips without a foundation.",
];

export const method = [
  { step: "A real financial problem", text: "Starting from decisions households actually face." },
  { step: "An eternal economic principle", text: "The idea behind it, from the thinkers who defined economics." },
  { step: "A practical application", text: "Concrete actions you can take right away." },
  { step: "A modern case study", text: "How today's builders of wealth apply the same principle." },
];

export const thinkers = {
  classical: ["Adam Smith", "David Ricardo", "Frédéric Bastiat", "Carl Menger", "Walter Bagehot"],
  modern: ["Warren Buffett", "Charlie Munger", "Peter Lynch", "John Bogle", "Ray Dalio", "Jeff Bezos"],
};

export const chapters = [
  {
    title: "Foundations of Wealth",
    benefit: "Why wealth starts with how money is treated — before any strategy or market.",
    topics: [
      "Saving is the first act of wealth",
      "Value, choice and opportunity cost",
      "Income accelerates wealth, behavior determines it",
      "The unseen cost of bad decisions",
      "Capital allocation and rational thinking",
      "Temperament over intelligence",
    ],
  },
  {
    title: "Reducing Household Expenses",
    benefit: "Stop the leaks so a surplus can exist at all.",
    topics: [
      "Expenses are a system, not a list",
      "Marginal analysis and small decisions",
      "Opportunity cost and household trade-offs",
      "Fixed costs: the highest-leverage area",
      "Behavioral economics and consumption traps",
      "Discipline at scale",
    ],
  },
  {
    title: "Investing Money & Stocks",
    benefit: "Turn surplus into productive capital — as an owner, not a speculator.",
    topics: [
      "What investing really is",
      "Risk, probability and expected value",
      "The power of compounding",
      "Stocks as ownership, not bets",
      "Asset allocation and personal strategy",
      "Long-term vision",
    ],
  },
  {
    title: "Financial Independence",
    benefit: "Make capital, not labor, pay for your life — and know exactly what that takes.",
    topics: [
      "What financial independence really means",
      "The mathematics of financial independence",
      "Savings rate: the real accelerator",
      "Compounding and time discipline",
      "Income streams and capital stability",
      "Freedom over status",
    ],
  },
];

export const benefits = [
  { title: "Make saving non-negotiable", text: "Treat savings as a fixed expense and automate it before money reaches spending." },
  { title: "Plug the leaks for good", text: "Cut fixed and recurring costs first — the reductions that compound every month." },
  { title: "Think in opportunity cost", text: "See what each purchase really costs you in future capital before you make it." },
  { title: "Invest like an owner", text: "Understand businesses, cash flow and moats instead of chasing price movements." },
  { title: "Build a portfolio that endures", text: "Diversify with low-cost instruments and align allocation with your time horizon." },
  { title: "Know your freedom number", text: "Calculate the capital you need to cover your expenses and track your way there." },
];

// TODO: real author photo, name and story.
export const author = {
  name: "Richest Wolf",
  photo: null as string | null,
  bio: [
    "Most personal finance books are either too theoretical to use or tactical tips with no foundation. Alpha Investor was written to sit between those extremes.",
    "It stands on centuries of economic thought — not as authority to follow blindly, but as a companion for anyone who chooses patience over impulse, reason over noise, and long-term freedom over short-term comfort.",
  ],
};

// No real testimonials yet, so the page shows "Who this is for" instead.
// Only add real quotes from real readers here — never invented ones.
export const testimonials: { quote: string; name: string }[] = [];

export const audience = {
  forYou: [
    "You earn a decent income but never seem to keep much of it",
    "You want to start investing but want to understand the why, not just the how",
    "You'd rather learn from Smith, Buffett and Bogle than from internet gurus",
    "You think in decades, not months",
  ],
  notForYou: [
    "You're looking for trading signals or guaranteed returns",
    "You want to get rich overnight",
  ],
};

export const included = [
  `The complete ${product.title} ebook (${product.format}, ${product.pages} pages)`,
  `${chapters.length} chapters, from saving to financial independence`,
  "Practical application steps in every section",
  "Read on any device: phone, tablet or computer",
  "Instant download link sent to your e-mail",
];

export const faq = [
  {
    q: "Is this financial advice?",
    a: "No. The book is educational content only. It is not financial, investment, tax or legal advice. Consider talking to a licensed professional about your specific situation.",
  },
  {
    q: "Do I need any experience?",
    a: "No. The book starts with the foundations — saving and spending — and builds up to investing and financial independence, explaining each idea in plain language.",
  },
  {
    q: "How long is the book?",
    a: `${product.pages} pages. It's deliberately concise: you can read it in one sitting and come back to the practical steps whenever you need them.`,
  },
  {
    q: "How do I receive the book?",
    a: "Right after checkout you'll get an e-mail with a download link to the PDF. You can start reading within minutes.",
  },
  {
    q: "Does it work outside the US?",
    a: "Yes. The principles — saving, controlling costs, diversifying and compounding — apply anywhere. Some examples use US references such as the S&P 500 and US-listed companies; the reasoning carries over to your local equivalents.",
  },
  {
    q: "What if I don't like it?",
    a: `E-mail us within ${product.refundDays} days of purchase and we'll refund you in full. No hard feelings.`,
  },
];

export const disclaimer =
  "Alpha Investor is educational content only and does not constitute financial, investment, tax or legal advice. Results vary from person to person. Investing involves risk, including the possible loss of principal.";
