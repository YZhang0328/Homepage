import { Link, useParams } from "react-router-dom";

import Seo from "@/components/Seo";
import { absoluteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  getQuestionDefinition,
  getQuestionStories,
  getQuestions,
} from "@/data/searchQuestions";

type QuestionParams = {
  question?: string;
};

function QuestionCard({
  slug,
  question,
  summary,
  answered = false,
}: {
  slug: string;
  question: string;
  summary: string;
  answered?: boolean;
}) {
  return (
    <Link
      to={`/news/questions/${slug}`}
      className={cn(
        "rounded-3xl border border-border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg",
        answered ? "bg-card" : "bg-accent"
      )}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Question</p>
      <h3 className="mt-3 font-serif text-2xl font-bold leading-tight">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
        Read the answer
      </span>
    </Link>
  );
}

export default function QuestionPage() {
  const params = useParams<QuestionParams>();
  const questionSlug = params.question ?? null;
  const question = questionSlug ? getQuestionDefinition(questionSlug) : null;

  if (!question) {
    const questions = getQuestions();
    const pageTitle = "Search Questions | Signal Board";
    const pageDescription =
      "Direct answers to the search questions that fit Signal Board best: power markets, stablecoins, and enterprise AI governance.";

    return (
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Seo
          title={pageTitle}
          description={pageDescription}
          canonicalPath="/news/questions"
          imagePath="/images/background_picture.png"
          imageAlt="Signal Board question answers"
          type="website"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: pageTitle,
            description: pageDescription,
            url: absoluteUrl("/news/questions"),
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: questions.length,
              itemListElement: questions.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`/news/questions/${item.slug}`),
                name: item.question,
              })),
            },
          }}
        />

        <div className="max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-wide text-muted">Search questions</p>
          <h1 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
            Direct answers to high-intent search queries
          </h1>
          <p className="mt-4 max-w-3xl text-[1.02rem] leading-relaxed text-muted md:text-[1.08rem]">
            These pages are built to answer the question first, then guide the reader
            into the deeper hub and article cluster.
          </p>
        </div>

        <section className="mt-10 grid gap-6">
          {questions.map((item) => (
            <QuestionCard
              key={item.slug}
              slug={item.slug}
              question={item.question}
              summary={item.summary}
            />
          ))}
        </section>
      </div>
    );
  }

  const stories = getQuestionStories(question.slug);
  const pageTitle = question.title;
  const pageDescription = question.summary;
  const canonicalPath = `/news/questions/${question.slug}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        imagePath={stories[0]?.image ?? "/images/background_picture.png"}
        imageAlt={stories[0]?.imageAlt ?? question.title}
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "QAPage",
          mainEntity: {
            "@type": "Question",
            name: question.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: question.answer,
            },
          },
        }}
      />

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm uppercase tracking-wide text-muted">Question answer</p>
          <h1 className="max-w-[16ch] font-serif text-4xl font-bold leading-[0.96] md:text-5xl">
            {question.question}
          </h1>
          <p className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-muted md:text-[1.08rem]">
            {question.summary}
          </p>

          <div className="mt-6 rounded-3xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Short answer</p>
            <p className="mt-3 text-lg leading-relaxed">{question.answer}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {question.keyTakeaways.map((item, index) => (
                <div key={item} className="rounded-2xl border border-border bg-accent p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Takeaway {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">What to watch</p>
            <div className="mt-4 space-y-3">
              {question.followUpQuestions.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-0.5 text-xs font-mono text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-border bg-card p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Glossary</p>
          <div className="mt-5 space-y-4">
            {question.glossary.map((item) => (
              <div key={item.term} className="rounded-2xl border border-border bg-accent p-4">
                <p className="font-semibold">{item.term}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.definition}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-accent p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Refreshed</p>
            <p className="mt-2 text-sm leading-relaxed">
              Last reviewed for search intent on {question.refreshedAt}.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-accent p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Go deeper</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Follow the hub and the related articles if you want the full market context.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to={`/news/hub/${question.hubSlug}`}
                className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white"
              >
                Open hub
              </Link>
              <Link
                to="/news/archive"
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium"
              >
                Browse archive
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-12 space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Related reading</p>
            <h2 className="mt-2 font-serif text-2xl font-bold md:text-3xl">
              Articles that support the answer
            </h2>
          </div>
          <Link
            to={`/news/hub/${question.hubSlug}`}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            View hub
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {stories.map((story) => (
            <Link
              key={story.slug}
              to={story.packet.backlinkPath}
              className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{story.kicker}</p>
              <h3 className="mt-3 font-serif text-2xl font-bold leading-tight">
                {story.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{story.dek}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

