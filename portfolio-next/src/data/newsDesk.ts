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
  "Investors, operators, energy modellers, and technically literate readers who want institutional-quality analysis at the intersection of AI, energy, and financial markets.";
const defaultTone =
  "Bloomberg-style lead, professional analytical body, mathematically literate framing, and a concise strategic close.";

// ── Events ────────────────────────────────────────────────────────────────────

export const aiFinanceEvents: EventListing[] = [
  {
    title: "AI Power Platform Bootcamp",
    date: "April 24, 2026",
    venue: "Microsoft London, 2 Kingdom Street, London W2 6BD",
    price: "Free",
    description:
      "A practical Microsoft-hosted day for teams who want hands-on exposure to enterprise AI, Copilot agents, Power Platform, and implementation workflows. Strong for practitioners who want to move from AI curiosity to deployment.",
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
      "Focused on custom Copilot agents, Copilot Studio, Power Platform, and MCP-adjacent workflow design. Directly relevant to anyone building agentic tools inside Microsoft's enterprise stack.",
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
      "A long-running City networking format for fintech operators, founders, investors, and service providers. Solid for meeting practitioners across payments, lending, and infrastructure.",
    link: "https://www.eventbrite.co.uk/e/london-fintechs-april-2026-networking-make-connections-at-the-gherkin-tickets-1979043908605",
    source: "London FinTechs",
    type: "Finance Networking",
  },
  {
    title: "AI Tinkerers London — Monthly Builder Meetup",
    date: "Monthly (check website for next session)",
    venue: "Various London venues — see website",
    price: "Free",
    description:
      "Monthly practitioner meetup for AI engineers and builders, featuring live code demos from local teams. Consistently high technical quality with no vendor pitches. One of the best free recurring events in London for hands-on AI development.",
    link: "https://london.aitinkerers.org/",
    source: "AI Tinkerers",
    type: "Engineering Meetup",
  },
  {
    title: "MLcon London 2026",
    date: "May 11–15, 2026",
    venue: "Park Plaza Victoria London",
    price: "Registration",
    description:
      "Multi-track technical conference covering machine learning engineering, LLM deployment, inference optimisation, and production ML systems. Expo on May 12–13 is open access.",
    link: "https://mlconference.ai/london/",
    source: "MLcon",
    type: "ML Conference",
  },
  {
    title: "The AI Summit London — Fringe Events",
    date: "June 8–14, 2026",
    venue: "Various London venues (London Tech Week)",
    price: "Free (fringe)",
    description:
      "Partner-led free events running alongside the main AI Summit during London Tech Week. Includes meetups, roundtables, and networking across AI in finance, energy, and enterprise. Free fringe access; main summit requires a pass.",
    link: "https://london.theaisummit.com/conference-agenda/fringe-events/",
    source: "The AI Summit London",
    type: "AI Conference Week",
  },
  {
    title: "Momentum AI London 2026",
    date: "June 23–24, 2026",
    venue: "London (venue TBC)",
    price: "Registration",
    description:
      "Reuters Events-produced gathering for senior decision-makers at the intersection of AI, finance, and enterprise operations. Features Chatham House roundtables, closed-door strategy labs, and multi-stakeholder panels. Strong signal-to-noise ratio for practitioners.",
    link: "https://events.reutersevents.com/momentum/london/ai-in-finance",
    source: "Reuters Events",
    type: "AI in Finance Summit",
  },
  {
    title: "Energy Intelligence Forum 2026",
    date: "October 2026 (dates TBC — check website)",
    venue: "London",
    price: "Registration",
    description:
      "The 47th Energy Intelligence Forum brings together 500+ delegates from 45+ countries — private sector, government, and civil society — to address global energy challenges. The premier annual gathering for energy market professionals, formerly known as Oil & Money.",
    link: "https://www.energyintelligenceforum.com/",
    source: "Energy Intelligence",
    type: "Energy Summit",
  },
  {
    title: "FinTech Connect 2026",
    date: "December 1–2, 2026",
    venue: "ExCeL London",
    price: "Registration",
    description:
      "Large enterprise-focused London event covering payments, digital transformation, compliance, and financial infrastructure. Good for understanding where regulated finance is heading on AI and stablecoin infrastructure.",
    link: "https://www.fintechconnect.com/",
    source: "FinTech Connect",
    type: "Conference",
  },
  {
    title: "Tokenize: LDN",
    date: "December 1–2, 2026",
    venue: "ExCeL London",
    price: "Registration",
    description:
      "Capital markets infrastructure, tokenisation, stablecoin settlement, and institutional market architecture. Directly relevant to the post-GENIUS Act regulatory landscape and the stablecoin infrastructure race.",
    link: "https://tokenize-event.com/",
    source: "Tokenize",
    type: "Capital Markets",
  },
];

// ── Desks ─────────────────────────────────────────────────────────────────────

export const desks: NewsDesk[] = [
  // ── Financial Infrastructure ──────────────────────────────────────────────
  {
    id: "finance",
    label: "Financial Infrastructure",
    intro:
      "The stablecoin infrastructure race has begun in earnest. The GENIUS Act provided the legal foundation; now FinTechs and traditional banks are competing to own the custody, liquidity, and compliance layers that will determine who captures the margin. Meanwhile, agentic commerce is forcing payment networks to rethink the liability architecture of every transaction.",
    feature: {
      label: "Financial Infrastructure",
      title:
        "Stablecoins are settled law — now FinTech and Big Finance are racing to own the stack.",
      summary:
        "The GENIUS Act resolved regulatory ambiguity. The FDIC proposed rules in April to implement it. And within weeks, Visa, Mastercard, BitGo, SoFi, and the major banks are all positioning for custody, liquidity routing, and compliance infrastructure. The real margin is not in minting stablecoins — it is in the connective tissue around them.",
      tags: [
        "stablecoin infrastructure",
        "GENIUS Act",
        "payment rails",
        "charter economics",
        "agentic payments",
      ],
      image:
        "https://images.unsplash.com/photo-1642605185249-377b3d935f9c?w=1080&q=80&auto=format&fit=crop",
      imageAlt: "Modern bank towers in a city skyline",
      imageClassName: "object-center",
    },
    stories: [
      {
        slug: "stablecoin-stack-race-2026",
        kicker: "Stablecoins",
        date: "April 8, 2026",
        headline:
          "FinTech and Big Finance are fighting to own the stablecoin stack — and it is not about the coins",
        dek:
          "Visa, Mastercard, BitGo, and SoFi have all moved on stablecoin infrastructure in the past fortnight. The competition is not over who issues the stablecoin. It is over who owns the custody, routing, and compliance layers that sit around it.",
        image:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Financial data and transaction analytics on a screen",
        imageClassName: "object-center",
        paragraphs: [
          "The pattern is becoming clear. Visa and Bridge expanded their cross-border stablecoin settlement capabilities. BitGo and SoFi announced a partnership around a 'stablecoin stack' infrastructure product, with Mastercard joining as a distribution partner. The UK Financial Conduct Authority identified stablecoin payments as a regulatory priority for 2026. In the space of two weeks, every major payment network has taken a position. The race to own stablecoin infrastructure has begun.",
          "The competitive logic is straightforward. Minting a stablecoin is cheap; the asset rapidly becomes commoditised once regulatory clarity exists. The durable margin in any payment infrastructure sits in the connective tissue: custody services, liquidity routing, interoperability across chains and jurisdictions, compliance verification, and on-ramp and off-ramp access. These are functions that require licensing, capital, and institutional trust — exactly the properties that incumbents already possess.",
          "The strategic calculus for traditional financial institutions is therefore more attractive than it first appeared. Rather than being displaced by stablecoin-native fintechs, banks can position as the compliance and custody layer that the new payment rail depends on. That is a more defensible position than the one they occupied in the first wave of mobile payments, where distribution and interface were the primary advantages.",
          "For FinTechs, the risk is a familiar one from adjacent markets. The phase of infrastructure competition that follows regulatory clarity tends to favour organisations with capital and compliance infrastructure over those with technical agility. Speed of engineering matters less when the bottleneck is regulatory licence, reserve management, and audited custody. This is the moment where the institutional advantages of banks reassert themselves.",
          "The investors watching most carefully are those with exposure to cross-border payment volumes. Cross-border settlement currently takes days and extracts significant margin through correspondent banking relationships. A stablecoin infrastructure layer that reduces settlement to minutes at lower cost would reallocate a meaningful portion of that margin — approximately $120 billion annually in global remittances alone — toward whichever entities control the new rails.",
        ],
        modelView:
          "Infrastructure margin = (payment volume × settlement fee advantage) × market share captured. In cross-border flows, the fee advantage of stablecoin settlement over correspondent banking is substantial; market share is the contest.",
        bottomLine:
          "The stablecoin infrastructure race is not about digital assets — it is about who captures the margin that correspondent banking currently extracts from global payments.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word analysis of the emerging competition to own stablecoin infrastructure between FinTechs and traditional financial institutions. Cover the Visa/Bridge, BitGo/SoFi/Mastercard moves, the regulatory context from the GENIUS Act and FCA, and explain why custody and compliance are the real prize. Include one quantitative frame on the addressable margin in cross-border flows.",
          targetKeyword: "stablecoin infrastructure race FinTech banks 2026",
          tone: defaultTone,
          targetWordCount: 1400,
          backlinkPath: "/news?desk=finance&story=stablecoin-stack-race-2026",
          publicationTargets,
          sourceAnchors: [
            {
              label: "PYMNTS — FinTech and Big Finance fight to own the stablecoin stack",
              url: "https://www.pymnts.com/cryptocurrency/2026/fintech-and-big-finance-fight-to-own-the-stablecoin-stack/",
            },
            {
              label: "FinTech Weekly — stablecoin infrastructure predictions 2026",
              url: "https://www.fintechweekly.com/news/stablecoin-predictions-2026-payments-infrastructure-regulation",
            },
          ],
          keyPoints: [
            "Why minting stablecoins is commoditised but infrastructure is not",
            "How incumbent banks can recapture advantage through compliance and custody",
            "What the cross-border margin opportunity means for infrastructure investors",
          ],
        },
      },
      {
        slug: "genius-act-stablecoins-payment-infrastructure",
        kicker: "Regulation",
        date: "April 7, 2026",
        headline:
          "The GENIUS Act has turned stablecoins from crypto experiments into regulated payment infrastructure",
        dek:
          "With the FDIC's April 7 proposed rulemaking implementing the GENIUS Act, the United States formally defined payment stablecoins as a new class of instrument — not securities, not commodities, but a new category of money.",
        image:
          "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Abstract digital representation of financial networks and transactions",
        imageClassName: "object-center",
        paragraphs: [
          "The regulatory categorisation of stablecoins has mattered enormously because ambiguity about whether they constitute securities, commodities, or something else has suppressed institutional adoption for years. The GENIUS Act resolves that ambiguity: payment stablecoins issued by permitted issuers are payment instruments. The FDIC's April 7, 2026 proposed rulemaking gives that categorisation its operational implementation, establishing the standards that FDIC-supervised institutions must meet to issue or custodise payment stablecoins.",
          "The commercial implications are immediate. Banks and insured depository institutions can now act as stablecoin issuers and custodians within a defined compliance perimeter. That opens the balance sheet of the regulated banking system to digital payment rails in a way that was previously unavailable at scale. Analysts project that stablecoins will represent approximately 3% of U.S. dollar payments in 2026 and 10% by 2031 — a trajectory that, if realised, makes them a material part of domestic and cross-border payment infrastructure.",
          "Cross-border settlement is the most structurally significant near-term application. The current correspondent banking system for international payments is expensive, slow, and layered with intermediary relationships that extract margin and introduce settlement latency. A regulated stablecoin that can move across borders in minutes, settle with cryptographic finality, and operate within a compliance-aware identity framework addresses most of those inefficiencies simultaneously.",
          "The constraint that matters most now is not regulatory clarity — the GENIUS Act provides that — but institutional infrastructure. Stablecoin custodians, on-ramps, off-ramps, smart contract auditing, and liquidity management across chains are not yet mature at the scale required for enterprise treasury adoption. The firms that build that infrastructure first will capture a significant portion of the margin that currently flows through correspondent banking.",
          "For fintech operators and traditional financial institutions, the strategic choice is whether to build stablecoin infrastructure early or wait for the technology to standardise. Waiting has historically been expensive in payments: the firms that built real-time domestic payment rails early captured structural advantages that were difficult to replicate once the market concentrated. The pattern is likely to repeat in cross-border stablecoin settlement.",
        ],
        modelView:
          "Expected payment infrastructure value = (payment volume × net settlement margin × market share) − compliance cost − technology investment. As volume grows from 3% to 10% of USD payments, first-mover advantage on infrastructure becomes multiplicative.",
        bottomLine:
          "The GENIUS Act has created the legal foundation for a parallel payment system — the race to build the infrastructure has already started.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word professional analysis of the GENIUS Act and its April 2026 FDIC rulemaking implementation. Explain what legal clarity means for bank participation, cross-border settlement, and infrastructure investment. Include one quantitative frame on stablecoin payment volume trajectories and close with the strategic implications for fintech operators.",
          targetKeyword: "GENIUS Act stablecoin payment infrastructure 2026",
          tone: defaultTone,
          targetWordCount: 1400,
          backlinkPath:
            "/news?desk=finance&story=genius-act-stablecoins-payment-infrastructure",
          publicationTargets,
          sourceAnchors: [
            {
              label: "FDIC proposed rulemaking on GENIUS Act",
              url: "https://www.fdic.gov/news/financial-institution-letters/2026/notice-proposed-rulemaking-establish-genius-act",
            },
            {
              label: "GENIUS Act explained — State Street Global Advisors",
              url: "https://www.ssga.com/us/en/intermediary/insights/genius-act-explained-what-it-means-for-crypto-and-digital-assets",
            },
          ],
          keyPoints: [
            "Why regulatory categorisation was the primary bottleneck to institutional adoption",
            "How the GENIUS Act changes what banks can do with stablecoin infrastructure",
            "Why cross-border settlement is the first major commercial application",
          ],
        },
      },
      {
        slug: "revolut-us-bank-charter",
        kicker: "Banking",
        date: "March 5, 2026",
        headline:
          "Revolut's U.S. charter push says the next fintech prize is balance-sheet control",
        dek:
          "The filing matters less as a branding event than as a structural move. Once a fintech can gather deposits and own more of the economics, product speed and margin structure both change.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Customer using a laptop while holding a payment card",
        imageClassName: "object-center",
        paragraphs: [
          "A bank charter changes the optimisation problem for a fintech. Without one, growth is often mediated through partner-bank arrangements, fragmented compliance responsibilities, and narrower product economics. With one, the company can move closer to the core functions that determine customer lifetime value: deposit gathering, funding control, product pacing, and a more direct relationship with regulators.",
          "That matters because the fintech margin stack is multiplicative, not additive. A small improvement in funding cost, loss visibility, or cross-sell conversion can change contribution economics across millions of accounts. When management controls more of the balance sheet, it also controls more of the levers that determine whether growth is merely expensive distribution or a durable banking franchise.",
          "There is also a strategic timing component. In a higher-volatility macro environment, investors are rewarding revenue that looks repeatable and funded, not just user growth that depends on marketing velocity. A charter does not remove credit or compliance risk, but it can reduce dependency risk by shrinking the number of critical third-party constraints in the operating model.",
          "For fintech broadly, the signal is that regulation is no longer a side condition. It is part of the product. The companies that win the next cycle may be the ones that can combine software speed with the capital discipline and governance demanded of actual financial institutions.",
        ],
        modelView:
          "Expected customer value = fees + net interest margin + product expansion optionality − funding cost − operating cost − expected loss. A charter changes several of those coefficients at once.",
        bottomLine:
          "The real leverage in fintech is moving toward control of the balance sheet, not just control of the interface.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word professional analysis explaining why Revolut's U.S. charter filing is strategically important. Lead with the news, explain the implications for funding costs, deposit economics, regulatory reach, and competitive positioning. Include one quantitative frame on customer economics and close with what investors and operators should monitor.",
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
    ],
  },

  // ── AI News ───────────────────────────────────────────────────────────────
  {
    id: "ai",
    label: "AI News",
    intro:
      "MCP has crossed 97 million installs in 16 months — faster than React reached comparable scale. The standard for agent-to-tool connectivity is settled. Meanwhile Anthropic holds 40% of enterprise LLM spend, Claude Code is in production, and every major AI vendor is competing on governance and deployment trust, not just benchmark scores.",
    feature: {
      label: "AI News",
      title:
        "The agent connectivity standard has been decided — and 97 million installs later, the infrastructure race begins.",
      summary:
        "MCP's adoption curve — from Anthropic launch in November 2024 to 97 million installs by March 2026, with every major AI vendor now backing it through the Linux Foundation — marks the end of the fragmented integration era for AI agents. The next competition is not over the protocol. It is over who builds the most valuable managed services on top of it.",
      tags: [
        "MCP standard",
        "agent connectivity",
        "enterprise AI",
        "Anthropic market share",
        "production agents",
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080&q=80&auto=format&fit=crop",
      imageAlt: "Blue-lit server racks in a data centre",
      imageClassName: "object-center",
    },
    stories: [
      {
        slug: "mcp-97-million-installs-standard",
        kicker: "Agent Standards",
        date: "April 2, 2026",
        headline:
          "MCP crossed 97 million installs in 16 months — the agent connectivity standard is settled",
        dek:
          "Anthropic's Model Context Protocol reached 97 million installs on March 25, 2026, with every major AI provider now shipping MCP-compatible tooling. The fragmentation era for agent-to-tool integration is over.",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Blue network cable representing connected infrastructure",
        imageClassName: "object-center",
        paragraphs: [
          "Technology standards rarely emerge this fast. The React npm package took approximately three years to reach 100 million monthly downloads. Anthropic's Model Context Protocol achieved comparable scale in 16 months — from launch in November 2024 to 97 million installs by March 25, 2026. The speed matters because it signals something unusual: MCP did not win on features. It won on timing and ecosystem alignment.",
          "The adoption timeline reflects a cascade of institutional endorsements that compressed the typical standards cycle. Anthropic launched MCP with roughly 2 million monthly downloads; OpenAI's adoption in April 2025 pushed that to 22 million; Microsoft's integration into Copilot Studio in July brought it to 45 million; AWS Bedrock support in November to 68 million. By March 2026, every major AI vendor — OpenAI, Google, Microsoft, AWS, and Cloudflare — was shipping MCP-compatible tooling, and the Linux Foundation's newly formed Agentic AI Foundation had formalised the governance structure.",
          "The significance is operational, not merely symbolic. One of the hidden constraints in AI agent deployment has been brittle, bespoke integration. An agent that reasons well but accesses tools through custom glue code, fragile parsers, and scattered permission logic does not scale. MCP provides a standardised, auditable surface for tool discovery, access, and execution. That reduces the integration tax that has slowed enterprise AI adoption and enables organisations to treat agent-to-tool connectivity as infrastructure rather than custom engineering.",
          "For the competitive landscape, the protocol question is now largely settled — which means the competition shifts to managed services on top of the standard. The analogy is TCP/IP: once the transport layer was agreed, the race moved to what ran over it. For MCP, the next competition is over managed gateways, enterprise IAM integration, audit tooling, and marketplace density of available tools. That is where platform advantage will accrue.",
          "For energy modellers and quant practitioners specifically, MCP's maturation opens a concrete workflow path: agents that can securely and reliably access market data APIs, optimisation solvers, and internal data warehouses through a single governed protocol, without requiring custom integration work for each tool. That shift from bespoke plumbing to standard infrastructure is exactly what has historically enabled scale in adjacent domains.",
        ],
        modelView:
          "Agent system performance = model quality × tool access quality × interface reliability. If the interface layer (MCP) is standardised and stable, overall system performance scales with the model and tooling rather than being bottlenecked by integration fragility.",
        bottomLine:
          "The agent connectivity standard is decided — the next race is over managed services, marketplace density, and who extracts value from the protocol layer above.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word analysis of MCP's 97 million install milestone as a standards-adoption signal. Explain the adoption cascade, what standardised tool access means for enterprise agent deployment, and where the next competition lies after a protocol standard is settled. Include one systems-model framing for how interface standardisation affects end-to-end agent performance.",
          targetKeyword: "Model Context Protocol MCP enterprise standard 2026",
          tone: defaultTone,
          targetWordCount: 1400,
          backlinkPath: "/news?desk=ai&story=mcp-97-million-installs-standard",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Model Context Protocol hits 97M installs — ByteIota",
              url: "https://byteiota.com/model-context-protocol-hits-97m-installs-standard-wins/",
            },
            {
              label: "Anthropic's MCP — AI Unfiltered",
              url: "https://www.arturmarkus.com/anthropics-model-context-protocol-hits-97-million-installs-on-march-25-mcp-transitions-from-experimental-to-foundation-layer-for-agentic-ai/",
            },
          ],
          keyPoints: [
            "Why MCP's 16-month adoption curve is historically anomalous and what drove it",
            "How standardised tool access reduces the integration tax on enterprise AI deployment",
            "Where platform advantage will accrue now that the protocol layer is settled",
          ],
        },
      },
      {
        slug: "anthropic-enterprise-dominance-2026",
        kicker: "Enterprise AI",
        date: "April 7, 2026",
        headline:
          "Anthropic's 40% enterprise share signals the LLM market has passed its first inflection point",
        dek:
          "When one model family controls more enterprise API spend than the incumbent that invented the category, the competitive dynamics of AI have structurally changed — and the reason is not just benchmarks.",
        image:
          "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Abstract AI network visualisation with glowing nodes",
        imageClassName: "object-center",
        paragraphs: [
          "Enterprise technology markets rarely flip market leadership in twelve months. The fact that Anthropic now accounts for approximately 40% of enterprise LLM API spend — while OpenAI has dropped to 27% from its 2023 position of around 50% — is therefore not just a product story. It is a signal about what enterprises actually value when they move AI from pilot to production.",
          "The shift is partly explained by the Claude model family's performance on evaluations that matter for enterprise use cases: instruction-following reliability, long-context handling, reduced hallucination rates, and the ability to operate within tool-augmented workflows. Claude Opus 4.6 now leads the LMSYS Chatbot Arena leaderboard and holds a record 65.3% resolution rate on SWE-bench Verified, which tests the ability to complete genuine software engineering tasks. That combination — conversation quality plus agentic engineering capability — maps closely to the workflows enterprises are most urgently trying to automate.",
          "But model quality alone does not explain a sustained market-share shift. Enterprise procurement decisions also reflect safety posture, API reliability, and organisational trust. Anthropic's Constitutional AI approach and its emphasis on interpretability have been consistent assets in regulated industries — finance, healthcare, and legal services — where the cost of a public model failure is high. A model that organisations can articulate to compliance teams is a different product from one they cannot.",
          "The competitive implication for the rest of the market is structural. OpenAI dropping to 27% does not mean the product has failed. It means the segment is diversifying, and that alternatives can now compete at scale. The second-order effect is pricing pressure: when multiple credible suppliers exist, enterprise buyers can extract better terms, more transparency on training data, and stronger SLA commitments.",
          "For the market more broadly, the takeaway is that the enterprise AI race is no longer just about raw capability. It is about governance, reliability, and the ability to build organisational trust at scale. Companies that treat safety as a product feature rather than a compliance constraint are demonstrating that it can be a durable commercial advantage.",
        ],
        modelView:
          "Market share dynamics can be modelled as a function of benchmark advantage, switching cost, trust premium, and distribution access. Anthropic's gain suggests that trust premium is now a primary term in enterprise purchasing, not a secondary one.",
        bottomLine:
          "The shift in enterprise LLM market share tells us that safety and reliability have moved from selling points to structural moats.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word enterprise AI market analysis on why Anthropic's rise to 40% of enterprise LLM spend matters. Explain the role of trust, safety posture, and benchmark performance in enterprise procurement. Include one market-share model and close with the competitive implications for OpenAI, Google, and open-source alternatives.",
          targetKeyword: "Anthropic enterprise AI market share 2026",
          tone: defaultTone,
          targetWordCount: 1400,
          backlinkPath: "/news?desk=ai&story=anthropic-enterprise-dominance-2026",
          publicationTargets,
          sourceAnchors: [
            {
              label: "AI Today: April 2026 model releases and developer impact",
              url: "https://www.searchcans.com/blog/ai-model-releases-april-2026-v2/",
            },
          ],
          keyPoints: [
            "Why enterprises chose Claude over GPT-class models at scale",
            "How safety posture became a commercial moat in regulated industries",
            "What the market-share shift means for pricing, SLAs, and open-source competition",
          ],
        },
      },
      {
        slug: "claude-code-autonomous-software-agent",
        kicker: "Agentic AI",
        date: "April 8, 2026",
        headline:
          "Claude Code is the first production-grade autonomous software agent to reach scale",
        dek:
          "Anthropic's terminal-native agent does not just assist developers — it completes software engineering tasks end to end: cloning repositories, writing tests, fixing CI pipelines, and opening pull requests.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Code displayed on a monitor in a dark development environment",
        imageClassName: "object-center",
        paragraphs: [
          "The distinction between an AI coding assistant and an autonomous software agent matters. An assistant produces suggestions for a human to evaluate and apply. An agent owns the loop: it reads the repository, writes code, runs tests, interprets failures, iterates, and delivers a working result. Claude Code, launched as a standalone product this week, sits firmly in the second category.",
          "The capability set reflects that ambition. Claude Code can clone repositories, write and execute tests, diagnose failing CI pipelines, fix the underlying issue, and open pull requests — without human intervention at individual steps. Integration with GitHub, GitLab, and Jira means it operates inside existing engineering workflows without requiring organisations to rebuild their tooling. This is designed to work on production codebases.",
          "The benchmark that matters here is not conversational fluency but task completion rate on real codebases. Claude Code's 65.3% resolution rate on SWE-bench Verified — which tests resolution of genuine open-source software issues — is a meaningful production signal. A 65% completion rate on a benchmark that distinguishes shallow pattern matching from genuine diagnostic reasoning is commercially material.",
          "The commercial implications follow from the economics of engineering effort. If an autonomous agent handles a meaningful fraction of backlog tasks that currently require human developer time — bug triage, test coverage, dependency updates, documentation — the marginal cost of that work falls substantially. That does not straightforwardly reduce headcount. It changes the distribution of what engineers spend time on, and what constitutes a meaningful engineering contribution.",
          "The governance question this raises is significant. When a system can push code to a shared repository autonomously, audit trails, permission boundaries, and review gating are preconditions for enterprise adoption at scale — not optional features. How platforms handle these constraints will partly determine how quickly the transition from assistant to agent happens inside organisations.",
        ],
        modelView:
          "Expected value of autonomous software agents = (task completion rate × average task value) − (error rate × error cost) − governance overhead. At a 65% completion rate on realistic tasks, the first term becomes commercially material.",
        bottomLine:
          "The autonomous software engineering agent has arrived in production — the remaining question is governance, not capability.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word article on Claude Code as the first production-scale autonomous software agent. Explain the distinction between assistant and agent, the commercial implications for engineering labour economics, and the governance infrastructure required for enterprise adoption. Include one quantitative frame on expected value under realistic completion rates.",
          targetKeyword: "Claude Code autonomous software agent production",
          tone: defaultTone,
          targetWordCount: 1400,
          backlinkPath: "/news?desk=ai&story=claude-code-autonomous-software-agent",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Claude Code — Anthropic",
              url: "https://www.anthropic.com/claude-code",
            },
          ],
          keyPoints: [
            "Why the assistant-to-agent transition is structurally different, not just better",
            "How 65% SWE-bench resolution translates into production task economics",
            "Why audit trails and permission boundaries are the real enterprise unlock",
          ],
        },
      },
      {
        slug: "microsoft-frontier-suite",
        kicker: "Enterprise AI",
        date: "March 9, 2026",
        headline:
          "Microsoft is packaging agents as governed office infrastructure, not experimental software",
        dek:
          "The Frontier Suite matters because it turns enterprise AI into a familiar budget line: productivity software with identity, security, and oversight already embedded.",
        image:
          "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "People working together in a modern office environment",
        imageClassName: "object-center",
        paragraphs: [
          "Microsoft's latest move is notable because it reduces one of the biggest frictions in enterprise AI: distribution into existing work. Rather than asking organisations to adopt yet another standalone AI surface, it is folding agentic behaviour into the productivity, identity, and security systems that companies already budget for and administer.",
          "That changes the adoption equation. A capable agent is interesting, but a governable agent inside Word, Excel, Outlook, and Copilot Chat is operationally different. The closer agent behaviour sits to an existing permissions model and observability stack, the lower the coordination cost for deployment and the easier it becomes for management to think in terms of rollout rather than experimentation.",
          "The strategic insight is that office software is becoming a control plane for labour. Once agents are embedded inside the interfaces where knowledge work already happens, the question shifts from whether AI can assist to how much workflow share it can capture without creating unacceptable error or oversight costs.",
          "For competitors, this is difficult to replicate because the advantage is not just model access. It is the combination of channel, policy surface, and administrative familiarity. In enterprise software, trust compounds when it is attached to an installed base.",
        ],
        modelView:
          "Enterprise AI adoption = productivity gain − orchestration friction − governance overhead − error cost. Bundling agents into existing software reduces two of those penalties immediately.",
        bottomLine:
          "Distribution plus governance is what turns agents from pilots into infrastructure.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word article on Microsoft's Frontier Suite as an enterprise operating model shift. Explain why distribution, identity, and control matter as much as raw model quality. Include one quantitative deployment framework and close with implications for CIOs and software vendors.",
          targetKeyword: "Microsoft Frontier Suite enterprise AI analysis",
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
        slug: "openai-promptfoo-evals-infrastructure",
        kicker: "AI Security",
        date: "March 9, 2026",
        headline:
          "OpenAI's Promptfoo deal puts evaluation and red-teaming at the centre of the agent stack",
        dek:
          "The acquisition signals that agent quality is no longer judged only by fluency — it is judged by whether organisations can test, document, and govern failure before deployment.",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Green matrix-style data stream on a screen representing code and security",
        imageClassName: "object-center",
        paragraphs: [
          "When AI systems are connected to tools, data, and production workflows, average-case quality stops being enough. What matters is the tail of the distribution: prompt injection, tool misuse, hidden data leakage, escalation pathways, and brittle behaviour under edge conditions. Those are not branding problems. They are operational risk problems — and they are exactly what evaluation frameworks like Promptfoo are designed to surface before deployment.",
          "That is what makes the acquisition strategically significant. It represents the institutionalisation of evals, security testing, and structured reporting into the build cycle itself. The agent stack is acquiring the equivalent of a serious QA and risk function. This is precisely what happens when a technology moves from experimentation into managed production: the discipline of testing catches up with the pace of capability.",
          "From a mathematical perspective, the case is direct. A system with high average productivity but fat-tailed failure modes can still have negative expected value once deployed into sensitive workflows. Evaluation is the discipline of shrinking that loss distribution before it shows up in incidents, compliance failures, or broken customer journeys. The ROI on evals is not benchmarks — it is avoided production incidents at scale.",
          "The deeper implication is competitive. Platform providers that can make testing native to the build cycle will be better positioned than those that leave safety and oversight to external wrappers. Enterprises do not merely want capable agents. They want agents whose behaviour can be inspected, challenged, and defended — to a compliance team, a regulator, or a customer who received an incorrect output.",
          "For practitioners in energy modelling and quantitative research — domains where model outputs feed directly into financial and operational decisions — the evals framing is already familiar. Backtesting, stress-testing, and out-of-sample validation are the analogue of red-teaming in quantitative work. The same discipline is now arriving, more formally, in the AI agent stack.",
        ],
        modelView:
          "Agent ROI is not driven by mean output alone — it depends on the full loss distribution. Evaluation and red-teaming are attempts to reduce tail risk so that expected value remains positive in production at scale.",
        bottomLine:
          "The next phase of the AI platform race is about failure containment as much as capability — and OpenAI just bought the leading tool for it.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1200–1400 word article on OpenAI's Promptfoo acquisition as a signal of enterprise AI maturity. Focus on evaluation, red-teaming, governance, and tail-risk management. Include one quantitative explanation of why production AI requires loss-distribution thinking, not just benchmark gains.",
          targetKeyword: "OpenAI Promptfoo evals red-teaming enterprise AI",
          tone: defaultTone,
          targetWordCount: 1350,
          backlinkPath: "/news?desk=ai&story=openai-promptfoo-evals-infrastructure",
          publicationTargets,
          sourceAnchors: [
            {
              label: "OpenAI to acquire Promptfoo",
              url: "https://openai.com/index/openai-to-acquire-promptfoo/",
            },
          ],
          keyPoints: [
            "Why evals have become core platform infrastructure, not an optional add-on",
            "How red-teaming affects enterprise deployment confidence and compliance",
            "Why tail-risk framing is more useful than average benchmark framing for production AI",
          ],
        },
      },
    ],
  },

  // ── Markets & Power ───────────────────────────────────────────────────────
  {
    id: "markets",
    label: "Markets & Power",
    intro:
      "Data centres drove a tenfold spike in PJM capacity prices, passing $9.3 billion in costs to consumers in a single auction cycle. Tech companies are responding by building private energy infrastructure — dedicated gas plants, nuclear PPAs, and solar farms — that amount to a parallel grid. The line between AI infrastructure and energy infrastructure is dissolving.",
    feature: {
      label: "Markets & Power",
      title:
        "Data centres have already repriced the U.S. electricity market — and the shadow grid is the response.",
      summary:
        "PJM capacity prices have risen nearly tenfold, with data centres responsible for 63% of the increase and $9.3 billion passed to consumers in one auction. Tech companies are bypassing the regulated grid by building on-site gas plants, signing nuclear PPAs, and contracting dedicated solar. Roughly 30% of all planned data centre capacity is now expected to be off-grid. This is not an energy transition story — it is a market structure story.",
      tags: [
        "PJM capacity market",
        "shadow grid",
        "AI power demand",
        "nuclear revival",
        "energy islands",
      ],
      image:
        "https://images.unsplash.com/photo-1604352704611-cce8fe2a4e0d?w=1080&q=80&auto=format&fit=crop",
      imageAlt: "Aerial view of a financial district skyline at night",
      imageClassName: "object-center",
    },
    stories: [
      {
        slug: "pjm-capacity-prices-data-centers-2026",
        kicker: "Power Markets",
        date: "April 7, 2026",
        headline:
          "Data centres drove a tenfold spike in PJM capacity prices — and passed $9.3 billion to consumers",
        dek:
          "Capacity prices in PJM rose from $28.92 to $329.17 per MW-day in two years. Data centres were responsible for 63% of the increase in the most recent auction — a redistribution of energy cost that is only beginning.",
        image:
          "https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Computer screen displaying energy market data and price charts",
        imageClassName: "object-center",
        paragraphs: [
          "Capacity markets exist to ensure there is enough generation available to meet peak demand — and to price the cost of that adequacy into the electricity system. What they are not designed to absorb is a single new demand category growing fast enough to reprice the entire market. That is what AI data centres have done to PJM Interconnection, the largest grid operator in the United States.",
          "Capacity prices in PJM rose from $28.92 per megawatt-day in the 2024/25 delivery year to $329.17/MW-day in 2026/27 — roughly a tenfold increase in two years. The independent market monitor for PJM estimated that data centres were responsible for 63% of the price increase in the 2025/2026 auction, translating to $9.3 billion in costs to be recovered from customers across the PJM region through higher electric rates. In the December 2026 capacity auction, data centre load accounted for $6.5 billion, or 40%, of the total $16.4 billion in auction costs.",
          "The transmission to retail bills is direct. Washington D.C. Pepco residential customers saw average monthly bills rise by $21 starting in June 2025, with roughly half of that increase attributable to the capacity price spike. PJM projects peak demand will grow by 32 gigawatts from 2024 to 2030 — with all but 2 gigawatts of that growth coming from data centres. The grid infrastructure that serves households and small businesses is being repriced by AI infrastructure investment at a rate that was not anticipated in any utility planning model.",
          "The market structure question this raises is acute. Capacity markets socialise the cost of grid adequacy across all ratepayers. When the incremental demand is almost entirely from large industrial users — data centres with dedicated substations and contracted capacity — the mechanism by which costs are distributed may need to change. Virginia has already created a new data centre electricity rate class in response. The policy debate about whether AI infrastructure should bear a larger share of capacity costs directly is accelerating.",
          "For energy market participants, the tenfold capacity price move in two years is a structural signal, not a cyclical one. PJM's demand growth forecast through 2030 is essentially a data centre forecast. The investors, utilities, and power generators that have positioned for sustained elevated capacity prices — and for the new generation assets needed to serve incremental AI load — are sitting on a structurally different set of forward exposures than those who treat this as a temporary distortion.",
        ],
        modelView:
          "Capacity price = f(demand growth, generation adequacy margin, transmission constraints). When demand growth is concentrated in a single category growing at 30%+ annually, the capacity price function is highly convex. The PJM spike is an empirical demonstration of that convexity.",
        bottomLine:
          "AI data centres have already repriced the U.S. electricity market — and the policy, infrastructure, and investment consequences are still propagating.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1400–1600 word power markets analysis on PJM's tenfold capacity price increase and its attribution to data centre demand. Explain how capacity markets work, why the cost socialisation mechanism is under pressure, and what this means for utilities, ratepayers, and energy investors. Include one mathematical framing of the capacity price function and close with the investment implications.",
          targetKeyword: "PJM capacity prices data centres electricity 2026",
          tone: defaultTone,
          targetWordCount: 1500,
          backlinkPath: "/news?desk=markets&story=pjm-capacity-prices-data-centers-2026",
          publicationTargets,
          sourceAnchors: [
            {
              label: "IEEFA — data centre growth spurs PJM capacity prices tenfold",
              url: "https://ieefa.org/resources/projected-data-center-growth-spurs-pjm-capacity-prices-factor-10",
            },
            {
              label: "Utility Dive — data centres drove 40% of PJM capacity costs",
              url: "https://www.utilitydive.com/news/data-centers-pjm-capacity-auction/808951/",
            },
            {
              label: "Canary Media — PJM record capacity costs and rising bills",
              url: "https://www.canarymedia.com/articles/data-centers/pjm-record-capacity-costs-rising-bills",
            },
          ],
          keyPoints: [
            "Why tenfold capacity price increases in two years signal structural, not cyclical, change",
            "How cost socialisation in capacity markets creates distributional equity pressure",
            "What the PJM repricing means for energy investors and utility planning",
          ],
        },
      },
      {
        slug: "energy-islands-shadow-grid-2026",
        kicker: "Infrastructure",
        date: "April 3, 2026",
        headline:
          "Tech companies are building a shadow grid — and 30% of data centre power may soon be off-grid",
        dek:
          "Chevron is building a dedicated gas plant for a Microsoft data centre in Texas. Amazon secured 1.5 GW of dedicated solar. Roughly 30% of all planned data centre capacity is now expected to be on-site. The regulated grid is being bypassed at scale.",
        image:
          "https://images.unsplash.com/photo-1690780473941-f6a55a5fc420?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Electricity transmission towers across a rural landscape",
        imageClassName: "object-center",
        paragraphs: [
          "The regulated electricity grid was designed around a simple topology: centralised generation, transmission across long distances, and distribution to a dispersed population of end users. What it was not designed for is a class of industrial users large enough to require the equivalent of a small city's power supply in a single location, growing fast enough to outpace any utility planning cycle. The response from those users has been to stop waiting for the grid and start building their own.",
          "Chevron is working on a deal to build a dedicated natural gas plant for a Microsoft data centre in Texas. Amazon secured 1.5 gigawatts of dedicated solar capacity in the same state. According to a February 2026 report by Cleanview, a market intelligence firm, roughly 30% of all planned data centre power capacity is now expected to be on-site — up from almost nothing a year earlier. Forty-six data centre projects with a combined planned capacity of 56 GW are pursuing dedicated generation infrastructure outright.",
          "This divergence — between AI infrastructure that is increasingly self-powered and everything else that depends on the regulated grid — has material consequences for both electricity markets and for the ratepayers who remain on it. Dedicated generation removes high-volume, technically predictable load from the grid's demand base, which would normally reduce capacity market costs. The complication is that it does not reduce the fixed infrastructure costs of the grid itself, which are then socialised over a smaller remaining customer base.",
          "The energy island model also creates a new category of infrastructure investment. Developers who can originate, finance, and build dedicated generation assets at data centre scale — whether gas, nuclear, or large-scale solar with storage — are operating in a market that did not meaningfully exist three years ago. The project economics are structurally attractive: long-dated offtake at contracted prices from creditworthy counterparties, with demand visibility that is orders of magnitude better than merchant generation.",
          "For energy modellers and power market practitioners, the shadow grid is already a significant modelling variable. The traditional assumption that data centre demand flows through the regulated grid is becoming incorrect at scale. Understanding the fraction of AI load that is off-grid, and how that changes marginal pricing, capacity market clearing, and transmission utilisation, is now a first-order input into any serious power market analysis.",
        ],
        modelView:
          "Grid demand D_grid(t) = total AI load L_AI(t) × (1 − shadow grid fraction f(t)). As f(t) approaches 30%, the capacity market clearing and transmission utilisation models that assume full grid dependency produce systematically biased forecasts.",
        bottomLine:
          "The shadow grid is not a future scenario — it is already changing the economics of the regulated grid for everyone who remains connected to it.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1400–1600 word analysis of the AI energy island phenomenon — dedicated off-grid power for data centres — and its consequences for regulated electricity markets. Cover the Chevron/Microsoft deal, the 30% off-grid projection, and explain the implications for capacity markets, ratepayer cross-subsidisation, and the investment opportunity in dedicated generation. Include one model showing how the shadow grid fraction affects regulated grid economics.",
          targetKeyword: "AI data centre shadow grid dedicated power infrastructure",
          tone: defaultTone,
          targetWordCount: 1500,
          backlinkPath: "/news?desk=markets&story=energy-islands-shadow-grid-2026",
          publicationTargets,
          sourceAnchors: [
            {
              label: "Axios — AI power boom drives clash between grid and energy islands",
              url: "https://www.axios.com/2026/04/03/ai-power-data-centers-energy-grid",
            },
            {
              label: "Morgan Stanley — powering AI energy market outlook",
              url: "https://www.morganstanley.com/insights/articles/powering-ai-energy-market-outlook-2026",
            },
          ],
          keyPoints: [
            "Why dedicated off-grid generation is rational for data centres at current capacity prices",
            "How the shadow grid creates cross-subsidisation pressure on remaining grid customers",
            "Why dedicated generation origination is a structurally attractive new infrastructure category",
          ],
        },
      },
      {
        slug: "oil-supply-shock-math",
        kicker: "Oil",
        date: "March 31, 2026",
        headline:
          "Oil's return to the centre of the tape is forcing portfolios back into supply-shock math",
        dek:
          "With U.S. gas prices above $4 and crude back above $100, the market is treating energy as a regime variable again — not a sector detail.",
        image:
          "https://images.unsplash.com/photo-1602056820935-316884c035f8?w=1080&q=80&auto=format&fit=crop",
        imageAlt: "Night view of an industrial energy facility",
        imageClassName: "object-center",
        paragraphs: [
          "When oil moves far enough and long enough, it stops behaving like a commodity story and starts behaving like a market regime variable. The reason is simple: energy feeds into transport, production, consumer budgets, inflation expectations, and policy assumptions at the same time. Once those channels move together, the shock propagates through the whole discounting system.",
          "That is why spot price alone is a poor summary statistic. The relevant variable is persistence. A short-lived spike can often be absorbed as noise. A sustained move changes margin assumptions, hedging behaviour, and the cross-asset relationship between rates and equities. Investors then have to price not only a higher input cost, but the duration of that higher-cost state.",
          "For equity portfolios, the effect is nonlinear. Sectors with pricing power and energy leverage can benefit, while energy-intensive businesses face a double squeeze from costs and softer demand. For multi-asset portfolios, the more difficult issue is that supply shocks can weaken the traditional stock-bond hedge if inflation expectations rise at the same time growth expectations weaken.",
          "This is why energy deserves a more explicit place in market models again. The current move is not merely about oil. It is about the reappearance of a transmission mechanism that many portfolios had treated as background rather than as a first-order driver of valuation.",
        ],
        modelView:
          "Asset repricing depends on three variables: shock size, shock persistence, and pass-through elasticity. Spot oil is only one input into that system.",
        bottomLine:
          "When energy becomes a regime variable, portfolio construction matters as much as sector selection.",
        packet: {
          audience: defaultAudience,
          briefing:
            "Write a 1300–1500 word markets article on why oil above $100 and gas above $4 change portfolio math. Explain the supply-shock transmission into inflation, sector margins, and stock-bond correlation. Include one compact mathematical explanation of persistence and pass-through.",
          targetKeyword: "oil supply shock portfolio analysis 2026",
          tone: defaultTone,
          targetWordCount: 1450,
          backlinkPath: "/news?desk=markets&story=oil-supply-shock-math",
          publicationTargets,
          sourceAnchors: [
            {
              label: "AP — U.S. gas prices above $4 and crude above $100",
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
    ],
  },
];
