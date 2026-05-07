import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          示例博客
        </Link>
        <nav className="text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="transition-colors hover:text-foreground">
            文章列表
          </Link>
        </nav>
      </div>
    </header>
  );
}
