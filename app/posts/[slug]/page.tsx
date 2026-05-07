import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "未找到文章" };
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:py-16">
        <Link
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
        >
          ← 返回列表
        </Link>
        <header className="mb-10 mt-8">
          <time className="text-sm text-zinc-500 dark:text-zinc-400">
            {post.meta.date}
          </time>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            {post.meta.title}
          </h1>
          {post.meta.description && (
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.meta.description}
            </p>
          )}
        </header>
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10 dark:border-zinc-800 dark:bg-zinc-900/60">
          <ArticleMarkdown>{post.content}</ArticleMarkdown>
        </div>
      </div>
    </article>
  );
}
