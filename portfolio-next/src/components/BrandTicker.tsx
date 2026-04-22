const brands = [
  "Python",
  "SQL",
  "MATLAB",
  "Git",
  "AWS",
  "Test Modules",
  "ETL",
  "Advanced Mathematics",
  "Optimization",
  "Probability Theory",
  "Stochastic Processes",
  "Statistics",
  "Time-Series",
  "Mathematical Modelling",
  "Financial Modelling",
  "Power Market analysis",
  "Algorithm development",
  "Feature Engineering",
  "Harness Engineering",
  "AI/ML",
  "RAG / FAISS",
  "LLM Apps",
  "MCP",
  "CFA Level I",
];

export default function BrandTicker() {
  const doubled = [...brands, ...brands];

  return (
    <section className="border-y border-border py-5 overflow-hidden">
      <div className="ticker-track flex items-center gap-10 whitespace-nowrap w-max">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="text-xs font-medium text-muted tracking-wide uppercase"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
