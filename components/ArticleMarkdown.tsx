import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-8 text-2xl font-bold text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-3 mt-10 text-xl font-semibold text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-8 text-lg font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-4 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-600 dark:text-zinc-400">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isBlock = Boolean(className);
    if (!isBlock) {
      return (
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-[0.9em] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          {children}
        </code>
      );
    }
    return (
      <code className={className}>{children}</code>
    );
  },
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-black">
      {children}
    </pre>
  ),
  hr: () => (
    <hr className="my-10 border-zinc-200 dark:border-zinc-800" />
  ),
};

export function ArticleMarkdown({ children }: { children: string }) {
  return (
    <div className="article-markdown">
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
}
