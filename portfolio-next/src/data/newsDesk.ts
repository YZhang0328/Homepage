export type DeskId = "finance" | "ai" | "markets";

export interface SourceAnchor {
  label: string;
  url: string;
}

export interface PublishingPacket {
  audience: string;
  briefing: string;
  targetKeyword: string;
  tone: string;
  targetWordCount: number;
  backlinkPath: string;
  publicationTargets: string[];
  sourceAnchors: SourceAnchor[];
  keyPoints: string[];
}

export interface FeaturePanelData {
  label: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageClassName?: string;
}

export interface NewsStory {
  slug: string;
  kicker: string;
  date: string;
  headline: string;
  dek: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  paragraphs: string[];
  modelView: string;
  bottomLine: string;
  packet: PublishingPacket;
}

export interface NewsDesk {
  id: DeskId;
  label: string;
  intro: string;
  feature: FeaturePanelData;
  stories: NewsStory[];
}

export interface EventListing {
  title: string;
  date: string;
  venue: string;
  price: string;
  description: string;
  link: string;
  source: string;
  type: string;
}

const publicationTargets = ["website", "medium", "dev.to", "hashnode"];
const defaultAudience =
  "Investors, operators, product leaders, and technically literate readers who want institutional-quality analysis.";
const defaultTone =
  "Bloomberg-style lead, professional analytical body, mathematically literate framing, and a concise strategic close.";

export const aiFinanceEvents: EventListing[] = [
  {
    title: "AI Power Platform Bootcamp",
    date: "April 24, 2026",
    venue: "Microsoft London, 2 Kingdom Street, London W2 6BD",
    price: "Free",
    description:
      "A practical Microsoft-hosted day for teams who want hands-on exposure to enterprise AI, Copilot agents, Power Platform, and implementation workflows.",
    link: "https://www.eventbrite.co.uk/e/ai-power-platform-bootcamp-microsoft-london-paddington-24th-april-2026-tickets-1976355017058",
    source: "Eventbrite / Microsoft",
    type: "AI Bootcamp",
  },
  {
    title: "Build Your Own Custom AI Copilot Agent",
    date: "April 24, 2026",
    venue: "Microsoft London Paddington, London",
    price: "Free",
    description:
      "Focused on custom Copilot agents, Copilot Studio, Power Platform, and MCP-adjacent workflow design.",
    link: "https://www.eventbrite.co.uk/cc/microsoft-london-paddington-2026-4810925",
    source: "Eventbrite / Microsoft",
    type: "AI Builder Event",
  },
  {
    title: "London FinTechs April Networking at the Gherkin",
    date: "April 21, 2026",
    venue: "The Sterling in the Gherkin, London",
    price: "Paid",
    description:
      "A long-running City networking format for fintech operators, founders, investors, and service providers.",
    link: "https://www.eventbrite.co.uk/e/london-fintechs-april-2026-networking-make-connections-at-the-gherkin-tickets-1979043908605",
    source: "London FinTechs",
    type: "Finance Networking",
  },
  {
    title: "FinTech Connect 2026",
    date: "December 1-2, 2026",
    venue: "ExCeL London",
    price: "Registration",
    description:
      "Large enterprise-focused London event covering payments, digital transformation, compliance, and financial infrastructure.",
    link: "https://www.fintechconnect.com/",
    source: "FinTech Connect",
    type: "Conference",
  },
  {
    title: "Tokenize: LDN",
    date: "December 1-2, 2026",
    venue: "ExCeL London",
    price: "Registration",
    description:
      "Capital markets infrastructure, tokenisation, and institutional market architecture.",
    link: "https://tokenize-event.com/",
    source: "Tokenize",
    type: "Capital Markets",
  },
];

export const desks: NewsDesk[] = [
  {
    id: "finance",
    label: "Financial Infrastructure",
    intro:
      "Financial infrastructure is where payment trust, regulatory control, and balance-sheet economics are being rebuilt.",
    feature: {
      label: "Financial Infrastructure",
      title:
        "The new finance moat is being built in charters, payment protocols, and network-level trust.",
      summary:
        "The strongest signals are no longer about interface polish. They are about who controls deposits, who can authenticate machine-initiated payments, and who can turn transaction data into a durable operating edge.",
      tags: ["charter economics", "agentic payments", "network trust", "unit economics"],
      image:
        "https://images.unsplash.com/photo-1642605185249-377b3d935f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxiYW5rJTIwdG93ZXJ8ZW58MHwwfHx8MTc3NTAwMTE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Cluster of modern bank towers in a city skyline",
      imageClassName: "object-center",
    },
    stories: [
      {
        slug: "revolut-us-bank-charter",
        kicker: "Banking",
        date: "March 5, 2026",
        headline:
          "Revolut's U.S. charter push says the next fintech prize is balance-sheet control",
        dek:
          "The filing matters less as a branding event than as a structural move. Once a fintech can gather deposits and own more of the economics, product speed and margin structure both change.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmFua2luZ3xlbnwwfDB8fHwxNzc1MDAwMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Customer using a laptop while holding a payment card",
        imageClassName: "object-[center_48%]",
        paragraphs: [
          "A bank charter changes the optimization problem for a fintech. Without one, growth is often mediated through partner-bank arrangements, fragmented compliance responsibilities, and narrower product economics. With one, the company can move closer to the core functions that determine customer lifetime value: deposit gathering, funding control, product pacing, and a more direct relationship with regulators.",
          "That matters because the fintech margin stack is multiplicative, not additive. A small improvement in funding cost, loss visibility, or cross-sell conversion can change contribution economics across millions of accounts. When management controls more of the balance sheet, it also controls more of the levers that determine whether growth is merely expensive distribution or a durable banking franchise.",
          "There is also a strategic timing component. In a higher-volatility macro environment, investors are rewarding revenue that looks repeatable and funded, not just user growth that depends on marketing velocity. A charter does not remove credit or compliance risk, but it can reduce dependency risk by shrinking the number of critical third-party constraints in the operating model.",
          "For fintech broadly, the signal is that regulation is no longer a side condition. It is part of the product. The companies that win the next cycle may be the ones that can combine software speed with the capital discipline and governance demanded of actual financial institutions.",
        ],
        modelView:
          "Expected customer value can be framed as fees plus net interest margin plus option value from product expansion, minus funding cost, operating cost, and expected loss. A charter changes several of those coefficients at once.",
        bottomLine:
          "The real leverage in fintech is moving toward control of the balance sheet, not just control of the interface.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300 to 1500 word professional analysis explaining why Revolut's U.S. charter filing is strategically important. Lead with the news, then explain the implications for funding costs, deposit economics, regulatory reach, and competitive positioning. Include one quantitative frame on customer economics and close with what investors and operators should monitor next.",
          targetKeyword: "Revolut U.S. bank charter analysis",
          tone: defaultTone,
          targetWordCount: 1450,
          backlinkPath: "/news?desk=finance&story=revolut-us-bank-charter",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Revolut U.S. charter announcement",
              url: "https://www.revolut.com/en-US/news/revolut_files_u_s_bank_charter_application_names_new_u_s_ceo/",
            },
          ],
          keyPoints: [
            "Why balance-sheet control matters for fintech unit economics",
            "How national reach under one regulatory framework changes expansion logic",
            "Why charters create both strategic leverage and new risk discipline",
          ],
        },
      },
      {
        slug: "mastercard-agentic-payments",
        kicker: "Payments",
        date: "March 24, 2026",
        headline:
          "Live agentic payments have moved the commerce story from prototype to network design",
        dek:
          "Mastercard's live transactions matter because they shift the conversation away from AI demos and toward the harder question: how autonomous spend is identified, authorized, and governed inside real payment rails.",
        image:
          "https://images.unsplash.com/photo-1556741564-a0e2cc7e2b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxjb250YWN0bGVzcyUyMHBheW1lbnR8ZW58MHwxfHx8MTc3NTAwMDE4MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Retail customer completing a contactless payment transaction",
        imageClassName: "object-[center_46%]",
        paragraphs: [
          "The interesting part of agentic payments is not that an AI system can buy something. The interesting part is that a payment network can see, recognize, and control that machine-initiated action inside existing authorization flows. That is a much more operational question, involving tokenization, consent, identity, issuer visibility, merchant recognition, and dispute management.",
          "This is why live transactions are more informative than product demos. A controlled transaction running across issuers, processors, merchants, and the card network reveals whether the system can survive contact with the real constraint set. Payment infrastructure is unforgiving. If one part of the chain cannot classify or trust the transaction, the whole automation promise starts to break down.",
          "From a market-structure perspective, agentic commerce creates a new liability graph. The classic checkout model assumes a human click path. An agentic model inserts a delegated actor that can search, rank, decide, and execute. The value is lower friction and higher conversion. The cost is a larger surface area for mistaken intent, policy violation, or ambiguous accountability.",
          "That makes governance the product. The winner will not be the loudest AI shopping demo. It will be the protocol that can preserve consent, observability, and recovery when transactions fail or users challenge outcomes. In finance, trust does not emerge from a better prompt. It emerges from a better control plane.",
        ],
        modelView:
          "A network-level objective can be expressed as automation lift minus fraud externality minus dispute cost minus control latency. Agentic payments scale only if governance keeps the negative terms bounded.",
        bottomLine:
          "The hard problem in agentic commerce is not intelligence. It is trustworthy execution across the payment stack.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1200 to 1400 word article on why Mastercard's live agentic transactions matter beyond publicity. Explain the operational importance of cardholder consent, visibility across the payment flow, network authentication, and dispute management. Include one mathematical framing for automation value versus fraud and control costs.",
          targetKeyword: "Mastercard agentic payments analysis",
          tone: defaultTone,
          targetWordCount: 1350,
          backlinkPath: "/news?desk=finance&story=mastercard-agentic-payments",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Mastercard live agentic payments in Latin America and the Caribbean",
              url: "https://www.mastercard.com/news/latin-america/en/newsroom/press-releases/pr-en/2026/march/mastercard-advances-agentic-payments-in-latin-america-and-the-caribbean-with-live-transactions-completed-across-the-region/",
            },
          ],
          keyPoints: [
            "Why real transactions matter more than sandbox demos",
            "How network recognition and consent alter the agentic payments design problem",
            "What this means for fraud, liability, and merchant readiness",
          ],
        },
      },
      {
        slug: "visa-secure-ai-transactions",
        kicker: "Protocol Layer",
        date: "December 18, 2025",
        headline:
          "Visa is framing AI commerce as a trust-and-protocol problem, not a checkout feature",
        dek:
          "Visa's secure AI transactions underline a simple point: mainstream agentic commerce will depend less on conversational flair and more on identity, authorization, and merchant confidence.",
        image:
          "https://images.unsplash.com/photo-1726056652582-7c9d202d4018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwcGF5bWVudHN8ZW58MHwwfHx8MTc3NTAwMDE3OXww&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Hand holding a smartphone for a digital payment workflow",
        imageClassName: "object-[center_52%]",
        paragraphs: [
          "Visa's positioning is strategically important because it defines agentic commerce as a payment-standard problem rather than a user-interface problem. If agents are going to spend on behalf of consumers or finance teams, the system needs robust ways to express permissions, budgets, merchant acceptance, transaction traceability, and post-trade accountability.",
          "That is a deeper challenge than simply letting a chatbot complete checkout. The economics of agentic commerce improve when the agent can search more broadly, compare better, and finish the transaction faster. But the downside risk also scales if verification quality, contextual authorization, or merchant recognition is weak. In finance, false positives and false negatives are both expensive.",
          "Seen through a quant lens, this is a calibration problem. A network wants to maximize automated conversion without allowing misaligned autonomy to blow out fraud, reimbursement, or regulatory cost. The optimal point is not maximum automation. It is automation constrained by reliable identity and bounded error.",
          "That is why the market signal from Visa matters. The company is effectively arguing that the next payment primitive is not just a card or a token. It is a machine actor with explicit trust properties. Whoever sets those trust properties well will shape the economics of AI-led commerce.",
        ],
        modelView:
          "Expected value of agentic checkout rises with conversion lift, but decays quickly when verification error, dispute probability, and merchant rejection increase. Secure protocols are what keep the payoff positive.",
        bottomLine:
          "In payments, the best agent is not the most fluent one. It is the one the network can verify and settle with confidence.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1200 to 1400 word market-facing article explaining why Visa's secure AI transactions are a protocol milestone. Focus on identity, delegated authorization, merchant trust, and transaction observability rather than generic AI hype. Add one compact quantitative framework for automation value under bounded error.",
          targetKeyword: "Visa secure AI transactions analysis",
          tone: defaultTone,
          targetWordCount: 1325,
          backlinkPath: "/news?desk=finance&story=visa-secure-ai-transactions",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Visa and partners complete secure AI transactions",
              url: "https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21961.html",
            },
          ],
          keyPoints: [
            "Why trust and identity are the real bottlenecks in agentic commerce",
            "How merchant recognition and observability affect adoption",
            "Why secure transaction design matters more than conversational UX",
          ],
        },
      },
    ],
  },
  {
    id: "ai",
    label: "AI News",
    intro:
      "The AI stack is maturing around governed execution, evaluation discipline, and standardized access to tools and data.",
    feature: {
      label: "AI News",
      title:
        "The next AI race is being fought in orchestration, control, and evaluation, not just model quality.",
      summary:
        "The strongest enterprise signals now point to the same conclusion: the durable edge is not only better reasoning, but the systems that let agents operate safely, measurably, and at scale inside real workflows.",
      tags: ["agent control planes", "evals", "tool access", "deployment trust"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tfGVufDB8MHx8fDE3NzUwMDExMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Blue-lit cables and racks in a server room",
      imageClassName: "object-center",
    },
    stories: [
      {
        slug: "microsoft-frontier-suite",
        kicker: "Enterprise AI",
        date: "March 9, 2026",
        headline:
          "Microsoft is packaging agents as governed office infrastructure, not experimental software",
        dek:
          "The Frontier Suite matters because it turns enterprise AI into a familiar budget line: productivity software with identity, security, and oversight already embedded.",
        image:
          "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDB8MHx8fDE3NzUwMDExNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "People working together at desks in a modern office",
        imageClassName: "object-center",
        paragraphs: [
          "Microsoft's latest move is notable because it reduces one of the biggest frictions in enterprise AI: distribution into existing work. Rather than asking organizations to adopt yet another standalone AI surface, it is folding agentic behavior into the productivity, identity, and security systems that companies already budget for and administer.",
          "That changes the adoption equation. A capable agent is interesting, but a governable agent inside Word, Excel, Outlook, and Copilot Chat is operationally different. The closer agent behavior sits to an existing permissions model and observability stack, the lower the coordination cost for deployment and the easier it becomes for management to think in terms of rollout rather than experimentation.",
          "The strategic insight is that office software is becoming a control plane for labor. Once agents are embedded inside the interfaces where knowledge work already happens, the question shifts from whether AI can assist to how much workflow share it can capture without creating unacceptable error or oversight costs.",
          "For competitors, this is difficult to replicate because the advantage is not just model access. It is the combination of channel, policy surface, and administrative familiarity. In enterprise software, trust compounds when it is attached to an installed base.",
        ],
        modelView:
          "Enterprise AI adoption can be framed as productivity gain minus orchestration friction minus governance overhead minus error cost. Bundling agents into existing software reduces two of those penalties immediately.",
        bottomLine:
          "Distribution plus governance is what turns agents from pilots into infrastructure.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300 to 1500 word article on Microsoft's Frontier Suite and Agent 365 as an enterprise operating model shift. Explain why distribution, identity, and control matter as much as raw model quality. Include one quantitative deployment framework and close with implications for CIOs and software vendors.",
          targetKeyword: "Microsoft Frontier Suite analysis",
          tone: defaultTone,
          targetWordCount: 1450,
          backlinkPath: "/news?desk=ai&story=microsoft-frontier-suite",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Microsoft Frontier Suite announcement",
              url: "https://news.microsoft.com/source/emea/2026/03/microsoft-365-copilot-introducing-the-frontier-suite/",
            },
          ],
          keyPoints: [
            "Why bundling matters more than isolated AI features",
            "How Agent 365 changes governance and observability",
            "Why installed distribution remains the strongest moat in enterprise AI",
          ],
        },
      },
      {
        slug: "openai-promptfoo",
        kicker: "AI Security",
        date: "March 9, 2026",
        headline:
          "OpenAI's Promptfoo deal puts evaluation and red-teaming at the center of the agent stack",
        dek:
          "The acquisition is a signal that agent quality is no longer judged only by fluency. It is judged by whether organizations can test, document, and govern failure before deployment.",
        image:
          "https://images.unsplash.com/photo-1773966071293-bea3d7646fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBzY3JlZW58ZW58MHwxfHx8MTc3NTAwMDE4MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Laptop screen showing code and software tools for AI development",
        imageClassName: "object-[center_50%]",
        paragraphs: [
          "When AI systems are connected to tools, data, and production workflows, average-case quality stops being enough. What matters is the tail of the distribution: prompt injection, tool misuse, hidden data leakage, escalation pathways, and brittle behavior under edge conditions. Those are not branding problems. They are operational risk problems.",
          "That is what makes Promptfoo strategically important. It represents the institutionalization of evals, security testing, and reporting into the build cycle itself. In other words, the agent stack is acquiring the equivalent of a serious QA and risk function. This is exactly what happens when a technology moves from experimentation to managed production.",
          "From a mathematical perspective, the case is straightforward. A system with high average productivity but fat-tailed failure modes can still have negative expected value once deployed into sensitive workflows. Evaluation is the discipline of shrinking that loss distribution before it shows up in incidents, compliance issues, or broken customer journeys.",
          "The deeper implication is competitive. Platform providers that can make testing native will be better positioned than those that leave safety and oversight to external wrappers. Enterprises do not merely want clever agents. They want agents whose behavior can be inspected, challenged, and defended.",
        ],
        modelView:
          "Agent ROI is not driven by mean output alone. It depends on the full loss distribution. Evaluation and red-teaming are attempts to reduce tail risk so expected value remains positive in production.",
        bottomLine:
          "The next phase of the AI platform race is about failure containment as much as capability.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1200 to 1400 word article on OpenAI's Promptfoo acquisition as a signal about enterprise AI maturity. Focus on evaluation, red-teaming, governance, and tail-risk management. Include one quantitative explanation of why production AI requires loss-distribution thinking, not just benchmark gains.",
          targetKeyword: "OpenAI Promptfoo acquisition analysis",
          tone: defaultTone,
          targetWordCount: 1350,
          backlinkPath: "/news?desk=ai&story=openai-promptfoo",
          publicationTargets,
          sourceAnchors: [
            {
              label: "OpenAI to acquire Promptfoo",
              url: "https://openai.com/index/openai-to-acquire-promptfoo/",
            },
          ],
          keyPoints: [
            "Why evals have become core platform infrastructure",
            "How red-teaming affects enterprise deployment confidence",
            "Why tail-risk framing is better than average benchmark framing",
          ],
        },
      },
      {
        slug: "google-mcp-support",
        kicker: "Agent Standards",
        date: "December 10, 2025",
        headline:
          "Google is treating MCP as enterprise infrastructure, which is a bigger signal than a feature launch",
        dek:
          "Google's managed MCP support shows that tool access is becoming standardized, governed, and observable. That is exactly what agents need if they are going to move from demos to systems.",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MHwwfHx8MTc3NTAwMTE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Blue network cable representing connected infrastructure",
        imageClassName: "object-center",
        paragraphs: [
          "One of the hidden constraints in agent adoption has been brittle integration. An agent may reason well, but if its access to tools depends on custom local glue, fragile parsers, or scattered permission logic, the workflow does not scale. Standardized, managed access layers are therefore more important than they first appear.",
          "Google's MCP support is a useful example. By treating tool access as an enterprise-ready layer with IAM, audit logging, and Model Armor, Google is effectively saying that the future of agents is not just better model reasoning. It is better structured interaction with the world. That is a more durable product thesis.",
          "This matters for organizations because agent reliability depends on constraint clarity. When tools are discoverable, governed, and observable, the system becomes easier to reason about. That lowers debugging cost and reduces the entropy that usually accumulates when teams bolt AI behavior onto existing systems without a common protocol surface.",
          "For the market, the signal is that standards are no longer academic. They are becoming commercial infrastructure. The next wave of AI value may come from reducing the integration tax that sits between model capability and useful action.",
        ],
        modelView:
          "Action quality is a product of model quality, tool quality, and interface reliability. If the interface layer is unstable, overall system performance remains bounded even when the model improves.",
        bottomLine:
          "In enterprise AI, standardized tool access is becoming a source of performance, not just convenience.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1200 to 1400 word article on why Google's managed MCP support matters strategically. Explain MCP as infrastructure for governed tool use, not just a developer convenience. Include one simple systems model showing how interface reliability constrains end-to-end agent performance.",
          targetKeyword: "Google MCP support analysis",
          tone: defaultTone,
          targetWordCount: 1325,
          backlinkPath: "/news?desk=ai&story=google-mcp-support",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Google Cloud MCP support announcement",
              url: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-official-mcp-support-for-google-services",
            },
          ],
          keyPoints: [
            "Why governed tool access is an AI scaling problem",
            "How MCP reduces integration fragility",
            "Why standards become competitive infrastructure once agents reach production",
          ],
        },
      },
    ],
  },
  {
    id: "markets",
    label: "Markets & Power",
    intro:
      "Energy, inflation, and cross-asset positioning are moving together again, with power-market structure back in the pricing conversation.",
    feature: {
      label: "Markets & Power",
      title:
        "Energy transmission is back in the system, and markets are repricing persistence, not just headlines.",
      summary:
        "Oil, inflation expectations, retail energy costs, and portfolio hedges are interacting again. The key question is no longer whether the shock is real, but how long it remains embedded in the pricing of everything else.",
      tags: ["energy transmission", "term premium", "cross-asset math", "power markets"],
      image:
        "https://images.unsplash.com/photo-1604352704611-cce8fe2a4e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMGZpbmFuY2V8ZW58MHwwfHx8MTc3NTAwMTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Aerial view of a dense financial district skyline",
      imageClassName: "object-center",
    },
    stories: [
      {
        slug: "oil-supply-shock-math",
        kicker: "Oil",
        date: "March 31, 2026",
        headline:
          "Oil's return to the center of the tape is forcing portfolios back into supply-shock math",
        dek:
          "With U.S. gas prices above $4 and crude back above $100, the market is once again treating energy as a regime variable rather than a sector detail.",
        image:
          "https://images.unsplash.com/photo-1602056820935-316884c035f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeXxlbnwwfDB8fHwxNzc1MDAwMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Night view of an industrial energy complex",
        imageClassName: "object-[center_42%]",
        paragraphs: [
          "When oil moves far enough and long enough, it stops behaving like a commodity story and starts behaving like a market regime variable. The reason is simple: energy feeds into transport, production, consumer budgets, inflation expectations, and policy assumptions at the same time. Once those channels move together, the shock propagates through the whole discounting system.",
          "That is why spot price alone is a poor summary statistic. The relevant variable is persistence. A short-lived spike can often be absorbed as noise. A sustained move changes margin assumptions, hedging behavior, and the cross-asset relationship between rates and equities. Investors then have to price not only a higher input cost, but the duration of that higher-cost state.",
          "For equity portfolios, the effect is nonlinear. Sectors with pricing power and energy leverage can benefit, while energy-intensive businesses face a double squeeze from costs and softer demand. For multi-asset portfolios, the more difficult issue is that supply shocks can weaken the traditional stock-bond hedge if inflation expectations rise at the same time growth expectations weaken.",
          "This is why energy deserves a more explicit place in market models again. The current move is not merely about oil. It is about the reappearance of a transmission mechanism that many portfolios had treated as background rather than as a first-order driver of valuation.",
        ],
        modelView:
          "Asset repricing depends on three variables at once: shock size, shock persistence, and pass-through elasticity. Spot oil is only one input into that system.",
        bottomLine:
          "When energy becomes a regime variable, portfolio construction matters as much as sector selection.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300 to 1500 word markets article on why oil above $100 and gas above $4 change portfolio math. Explain the supply-shock transmission into inflation, sector margins, and stock-bond correlation. Include one compact mathematical explanation of persistence and pass-through.",
          targetKeyword: "oil supply shock market analysis",
          tone: defaultTone,
          targetWordCount: 1450,
          backlinkPath: "/news?desk=markets&story=oil-supply-shock-math",
          publicationTargets,
          sourceAnchors: [
            {
              label: "AP on U.S. gas prices above $4 and crude above $100",
              url: "https://apnews.com/article/gas-prices-4-gallon-iran-war-de8b7ccea254a1585cab86f336db57a6",
            },
          ],
          keyPoints: [
            "Why persistence matters more than the spot print",
            "How energy shocks alter cross-asset correlation assumptions",
            "Which portfolio exposures are most sensitive to pass-through",
          ],
        },
      },
      {
        slug: "euro-inflation-energy-pass-through",
        kicker: "Europe",
        date: "March 31, 2026",
        headline:
          "Europe's inflation print shows how quickly energy can re-enter the policy function",
        dek:
          "March inflation at 2.5% and the ECB's warnings on higher energy prices point to the same issue: investors now have to think about second-round effects, not just a mechanical headline bump.",
        image:
          "https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwzfHxtYXJrZXQlMjBzY3JlZW5zfGVufDB8MHx8fDE3NzUwMDA5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Computer screen filled with market data and charts",
        imageClassName: "object-[center_50%]",
        paragraphs: [
          "The first-round effect of an energy shock is arithmetic. Fuel goes up, and the inflation index reflects it. The harder question is what happens next. If firms, households, and markets start to treat higher energy costs as persistent, the pass-through can spread into transport, services, wage bargaining, and the term structure of rates.",
          "That is the real policy risk embedded in the latest European inflation data. A 2.5% print matters not because it is catastrophic in isolation, but because it arrives alongside a central bank warning that higher energy prices may lift inflation above target in the near term and may create broader indirect effects if the shock persists.",
          "For investors, the debate is about the area under the inflation path, not just one observation. A one-month jump can often be discounted. A re-anchoring of short-horizon inflation expectations is more consequential, because it changes how the market thinks about future rates, corporate pricing power, and the earnings multiple attached to cyclical sectors.",
          "This is where lessons from 2022 still matter. Once energy feeds into behavior rather than only into the index, the transmission becomes more stubborn. The market will spend the next phase trying to infer whether the current move is a temporary distortion or the start of a broader repricing of the inflation process.",
        ],
        modelView:
          "A useful framework is the integral of expected inflation over time. Markets react less to a single point estimate than to the cumulative path implied by energy, wages, and second-round effects.",
        bottomLine:
          "The key risk is not the print itself. It is whether energy starts to reshape expectations.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300 to 1500 word euro-area markets piece on why March inflation and the ECB's energy warning matter. Distinguish first-round from second-round effects, explain how expectation shifts affect rates and equities, and include one concise mathematical framing based on the area under the inflation path.",
          targetKeyword: "Europe inflation energy pass-through analysis",
          tone: defaultTone,
          targetWordCount: 1425,
          backlinkPath: "/news?desk=markets&story=euro-inflation-energy-pass-through",
          publicationTargets,
          sourceAnchors: [
            {
              label: "AP on euro area inflation rising to 2.5%",
              url: "https://apnews.com/article/eurozone-inflation-european-central-bank-60235b6abb95eed27ad3f30280f8fa71",
            },
            {
              label: "ECB March 19, 2026 monetary policy statement",
              url: "https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260319~93b1cbad97.en.html",
            },
          ],
          keyPoints: [
            "Why one inflation print can still change rate expectations",
            "How indirect and second-round effects enter the market narrative",
            "What investors should monitor beyond the headline CPI number",
          ],
        },
      },
      {
        slug: "uk-power-price-cap-signal",
        kicker: "UK Power",
        date: "April 1, 2026",
        headline:
          "A lower UK price cap does not mean the power story has become benign",
        dek:
          "Ofgem's 7% cut relieves households, but it also shows how retail tariffs can move out of phase with wholesale volatility, hedging costs, and the broader economics of the power system.",
        image:
          "https://images.unsplash.com/photo-1690780473941-f6a55a5fc420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTE5NzB8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2l0eSUyMHRyYW5zbWlzc2lvbiUyMHRvd2Vyc3xlbnwwfDF8fHwxNzc1MDAwMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageAlt: "Electricity transmission towers across a rural landscape",
        imageClassName: "object-[center_58%]",
        paragraphs: [
          "Retail price caps are easy to misread because they smooth a system that is inherently volatile. A lower cap feels like an all-clear signal, but the retail bill is only a filtered output of a more complex underlying process involving wholesale procurement, network charges, policy costs, and supplier hedging.",
          "That distinction matters for anyone thinking about the power market as an economic signal. A household-facing tariff can fall even while wholesale risk remains elevated or while industrial users continue to face pressure through different contract structures. The apparent calm at the retail layer may therefore conceal continued stress elsewhere in the system.",
          "For market observers, the useful insight is that electricity is not a single price. It is a stack of prices and constraints. Capacity conditions, interconnection, fuel inputs, balancing costs, and regulatory smoothing all shape what consumers eventually pay. The cap reduces immediate household pain, but it does not eliminate the structural importance of energy in inflation, competitiveness, or margin planning.",
          "In that sense, the cap move is best read as partial relief rather than regime change. It improves the consumer arithmetic in the short run, yet it leaves intact the broader question of how power-market volatility is transmitted through the economy and into business decision-making.",
        ],
        modelView:
          "Retail tariffs are a filtered signal: cap_t = smoothing(wholesale costs, network charges, policy costs, and hedging). They are not a real-time price of underlying energy risk.",
        bottomLine:
          "The absence of immediate retail pain is not the same thing as the absence of power-market risk.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1200 to 1400 word UK power-market article on why Ofgem's lower price cap should not be mistaken for a benign energy backdrop. Explain the lag between retail tariffs and wholesale stress, the role of hedging and policy charges, and include one compact model for retail-price smoothing.",
          targetKeyword: "UK energy price cap power market analysis",
          tone: defaultTone,
          targetWordCount: 1325,
          backlinkPath: "/news?desk=markets&story=uk-power-price-cap-signal",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Ofgem April 2026 price cap announcement",
              url: "https://www.ofgem.gov.uk/press-release/energy-price-cap-will-fall-7-april",
            },
          ],
          keyPoints: [
            "Why retail caps smooth rather than remove market volatility",
            "How wholesale, hedging, and policy costs interact",
            "Why power-market risk still matters for inflation and margins",
          ],
        },
      },
    ],
  },
];
