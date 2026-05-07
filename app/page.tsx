import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:py-16">
        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          Markdown 静态文章 · Next.js App Router
        </p>
        <h1 className="mb-10 text-4xl font-bold tracking-tight text-foreground">
          最新文章
        </h1>
        {posts.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">
            暂无文章。请在{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              content/posts
            </code>{" "}
            目录下添加 <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">.md</code>{" "}
            文件。
          </p>
        ) : (
          <ul className="flex flex-col gap-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="group block">
                  <time className="text-sm text-zinc-500 dark:text-zinc-400">
                    {post.date}
                  </time>
                  <h2 className="mt-1 text-xl font-semibold text-foreground transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {post.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
