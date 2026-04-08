const brands = [
  "Python",
  "SQL",
  "Test Modules",
  "MATLAB",
  "Git",
  "AWS",
  "Advanced Mathematics",
  "Optimization",
  "Probability Theory",
  "Statistics",
  "Mathematical Modelling",
  "Feature Engineering",
  "Harness Engineering",
  "Time-Series",
  "AI/ML",
  "RAG / FAISS",
  "LLM Apps",
  "MCP",
  "ETL",
  "Power Markets",
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
