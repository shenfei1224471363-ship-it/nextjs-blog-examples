import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(
  slug: string,
): { meta: PostMeta; content: string } | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const title = data.title as string | undefined;
  const date = data.date as string | undefined;
  if (!title || !date) return null;
  return {
    meta: {
      slug,
      title,
      date,
      description: data.description as string | undefined,
    },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();
  const posts: PostMeta[] = [];
  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post) posts.push(post.meta);
  }
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
