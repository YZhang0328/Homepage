import { getAllStories, type StoryIndexItem } from "./newsTopics";

export interface SearchQuestionDefinition {
  slug: string;
  question: string;
  title: string;
  summary: string;
  answer: string;
  searchIntent: string;
  hubSlug: string;
  relatedStorySlugs: string[];
  keyTakeaways: string[];
  glossary: Array<{ term: string; definition: string }>;
  followUpQuestions: string[];
  refreshedAt: string;
}

const storyIndex = new Map<string, StoryIndexItem>(
  getAllStories().map((story) => [story.slug, story])
);

const questionDefinitions: SearchQuestionDefinition[] = [
  {
    slug: "pjm-capacity-pricing-explained",
    question: "What is PJM capacity pricing?",
    title: "What is PJM capacity pricing? A practical explanation",
    summary:
      "A direct answer for readers trying to understand why PJM capacity prices matter more than spot prices when AI load grows and reserve margins tighten.",
    answer:
      "PJM capacity pricing is the market signal that pays generators and other qualified resources for being available three years ahead of time, so the grid has enough firm capacity when demand spikes, outages hit, or weather gets extreme. In other words, it is not the price of electricity you are using right now; it is the price of making sure electricity still exists when the system is stressed.",
    searchIntent:
      "PJM capacity pricing explained, capacity market, reserve margin, data centres",
    hubSlug: "power-markets-data-centres",
    relatedStorySlugs: [
      "why-pjm-capacity-prices-matter",
      "pjm-capacity-prices-data-centers-2026",
      "ai-power-market-reset-2026",
      "energy-islands-shadow-grid-2026",
    ],
    keyTakeaways: [
      "Capacity prices pay for reliability, not immediate energy consumption.",
      "When the auction clears near the cap, the system is signaling scarcity ahead of time.",
      "AI load matters because it is large, fast-growing, and often lands in constrained regions.",
    ],
    glossary: [
      {
        term: "Capacity market",
        definition:
          "The part of the power market that pays for availability in advance, so the system can meet future peak demand reliably.",
      },
      {
        term: "Reserve margin",
        definition:
          "The cushion of extra supply above expected demand that helps keep the grid stable during stress events.",
      },
      {
        term: "Interconnection queue",
        definition:
          "The pipeline of generation and storage projects waiting to connect to the grid, often measured in years rather than months.",
      },
      {
        term: "Rate design",
        definition:
          "The rules that determine how grid costs are allocated across customer classes and who ultimately pays for reliability.",
      },
    ],
    followUpQuestions: [
      "Why does a higher capacity price usually matter more than a higher spot price?",
      "How do data centres change the economics of the PJM auction?",
      "What happens when capacity costs are pushed into retail bills?",
    ],
    refreshedAt: "2026-04-15",
  },
];

function lookupStory(slug: string) {
  return storyIndex.get(slug) ?? null;
}

export function getQuestionDefinition(questionSlug: string) {
  return questionDefinitions.find((question) => question.slug === questionSlug) ?? null;
}

export function getQuestions() {
  return questionDefinitions;
}

export function getQuestionStories(questionSlug: string) {
  const question = getQuestionDefinition(questionSlug);
  if (!question) {
    return [];
  }

  return question.relatedStorySlugs
    .map((slug) => lookupStory(slug))
    .filter((story): story is StoryIndexItem => Boolean(story));
}

export function getQuestionForStory(storySlug: string) {
  return questionDefinitions.find((question) =>
    question.relatedStorySlugs.includes(storySlug)
  ) ?? null;
}

