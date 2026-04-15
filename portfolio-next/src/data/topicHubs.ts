import { getAllStories, getTopicDefinition, type StoryIndexItem } from "./newsTopics";

export interface TopicHubDefinition {
  slug: string;
  label: string;
  title: string;
  description: string;
  summary: string;
  searchIntent: string;
  topicSlugs: string[];
  storySlugs: string[];
  keyQuestions: string[];
  featuredQuestionSlug?: string;
  glossary: Array<{ term: string; definition: string }>;
  faq: Array<{ question: string; answer: string }>;
}

export interface TopicHubView extends TopicHubDefinition {
  stories: StoryIndexItem[];
  topics: Array<NonNullable<ReturnType<typeof getTopicDefinition>>>;
}

const storyIndex = new Map<string, StoryIndexItem>(
  getAllStories().map((story) => [story.slug, story])
);

const hubDefinitions: TopicHubDefinition[] = [
  {
    slug: "stablecoins-payments",
    label: "Stablecoins & Payments",
    title: "Stablecoins and payments are turning into a stack ownership fight",
    description:
      "A reading hub on stablecoin rails, payment networks, treasury workflows, and the compliance layer that now decides who captures the margin.",
    summary:
      "This hub follows the money above and around the stablecoin itself. The question is no longer whether on-chain payments work. It is who owns custody, routing, treasury controls, and liability when regulated payment rails become programmable.",
    searchIntent:
      "stablecoin infrastructure, payment rails, treasury management, bank charters, liability",
    topicSlugs: [
      "stablecoins",
      "payments",
      "fintech",
      "regulation",
      "treasury",
      "agentic-commerce",
    ],
    storySlugs: [
      "stablecoin-stack-race-2026",
      "genius-act-stablecoins-payment-infrastructure",
      "stablecoin-treasury-management-2026",
      "revolut-us-bank-charter",
      "agentic-commerce-liability-stack-2026",
    ],
    keyQuestions: [
      "Who owns the custody and routing layers around stablecoins?",
      "Why does regulatory clarity compress the window for new entrants?",
      "Where does margin move when treasury and payment workflows go programmable?",
    ],
    glossary: [
      {
        term: "Custody",
        definition:
          "The regulated holding of assets on behalf of customers or institutions, usually the layer where trust and compliance sit.",
      },
      {
        term: "Routing",
        definition:
          "The logic that decides how value moves across counterparties, chains, or payment rails.",
      },
      {
        term: "Treasury workflow",
        definition:
          "The internal process a company uses to manage cash, liquidity, settlement, and working capital.",
      },
    ],
    faq: [
      {
        question: "Why does the stack matter more than the coin itself?",
        answer:
          "Because the margin sits in custody, routing, compliance, and treasury services, not in minting the token.",
      },
      {
        question: "Who tends to win once regulation becomes clearer?",
        answer:
          "The firms with balance-sheet strength, compliance infrastructure, and existing customer relationships usually have the advantage.",
      },
    ],
  },
  {
    slug: "agents-governance",
    label: "Agents & Governance",
    title: "Agents are moving into production, and governance is now part of the product",
    description:
      "A reading hub on MCP, enterprise deployment, autonomous coding, evals, and the safety layer that keeps agent systems usable in production.",
    summary:
      "This hub tracks the shift from AI assistance to AI execution. The important questions are no longer only model quality and benchmark scores. They are permissions, evals, auditability, and whether the agent can be trusted inside existing enterprise systems.",
    searchIntent:
      "MCP, autonomous agents, evals, enterprise AI governance, software engineering",
    topicSlugs: [
      "mcp",
      "agents",
      "enterprise-ai",
      "ai-governance",
      "software-engineering",
    ],
    storySlugs: [
      "mcp-97-million-installs-standard",
      "claude-code-autonomous-software-agent",
      "microsoft-frontier-suite",
      "openai-promptfoo-evals-infrastructure",
      "anthropic-enterprise-dominance-2026",
    ],
    keyQuestions: [
      "What separates a helpful assistant from a production agent?",
      "Why are evals and governance becoming part of the buying decision?",
      "Which enterprise vendors benefit from distribution plus control?",
    ],
    glossary: [
      {
        term: "MCP",
        definition:
          "The Model Context Protocol, used to connect agents to tools and external systems in a standardised way.",
      },
      {
        term: "Evals",
        definition:
          "Structured tests that measure how well an AI system behaves under expected and adversarial conditions.",
      },
      {
        term: "Governance",
        definition:
          "The permissions, approvals, logging, and auditability that make agent systems usable in enterprise settings.",
      },
    ],
    faq: [
      {
        question: "What makes an agent production-ready?",
        answer:
          "It needs reliable tool use, clear permissions, test coverage, and an audit trail for failures.",
      },
      {
        question: "Why are evals becoming a buying criterion?",
        answer:
          "Because enterprises want proof that failures are measured before systems touch real workflows.",
      },
    ],
  },
  {
    slug: "power-markets-data-centres",
    label: "Power Markets & Data Centres",
    title: "AI load is forcing electricity markets to price capacity, allocation, and off-grid power differently",
    description:
      "A reading hub on PJM capacity pricing, data-centre load growth, dedicated generation, and the macro effects of energy shocks.",
    summary:
      "This hub links power-market structure to AI load growth. It starts with capacity prices, then moves to cost allocation, and ends with the off-grid power stack that is emerging around hyperscale demand.",
    searchIntent:
      "PJM capacity pricing, data centre load growth, rate design, off-grid power, oil shocks",
    topicSlugs: [
      "power-markets",
      "electricity",
      "rate-design",
      "load-growth",
      "data-centres",
      "energy-islands",
      "oil",
      "macro",
    ],
    storySlugs: [
      "ai-power-market-reset-2026",
      "why-pjm-capacity-prices-matter",
      "pjm-capacity-prices-data-centers-2026",
      "energy-islands-shadow-grid-2026",
      "oil-supply-shock-math",
    ],
    keyQuestions: [
      "Why does capacity pricing matter more than spot pricing for AI load?",
      "How do rate design and interconnection delay change who pays?",
      "When does dedicated generation become the rational answer?",
    ],
    featuredQuestionSlug: "pjm-capacity-pricing-explained",
    glossary: [
      {
        term: "Capacity price",
        definition:
          "The price paid for being available in advance so the grid can meet future demand reliably.",
      },
      {
        term: "Reserve margin",
        definition:
          "The extra amount of capacity the system keeps above forecast demand for reliability.",
      },
      {
        term: "Behind the meter",
        definition:
          "Generation that serves a customer directly rather than flowing through the public grid.",
      },
    ],
    faq: [
      {
        question: "Why are capacity prices more important than spot prices here?",
        answer:
          "Because AI load stresses the system's ability to guarantee future supply, not just the price of current electricity.",
      },
      {
        question: "Why do data centres accelerate this problem?",
        answer:
          "They add large blocks of demand quickly and often in places where firm supply and transmission are already constrained.",
      },
    ],
  },
];

function lookupStory(slug: string) {
  return storyIndex.get(slug) ?? null;
}

export function getTopicHubDefinition(hubSlug: string) {
  return hubDefinitions.find((hub) => hub.slug === hubSlug) ?? null;
}

export function getHubTopics(hubSlug: string) {
  const hub = getTopicHubDefinition(hubSlug);
  if (!hub) {
    return [];
  }

  return hub.topicSlugs
    .map((topicSlug) => getTopicDefinition(topicSlug))
    .filter((topic): topic is NonNullable<ReturnType<typeof getTopicDefinition>> =>
      Boolean(topic)
    );
}

export function getStoriesForHub(hubSlug: string) {
  const hub = getTopicHubDefinition(hubSlug);
  if (!hub) {
    return [];
  }

  return hub.storySlugs
    .map((storySlug) => lookupStory(storySlug))
    .filter((story): story is StoryIndexItem => Boolean(story));
}

export function getTopicHubs(): TopicHubView[] {
  return hubDefinitions.map((hub) => ({
    ...hub,
    stories: getStoriesForHub(hub.slug),
    topics: getHubTopics(hub.slug),
  }));
}
