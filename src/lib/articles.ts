import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const ARTICLES_PATH = path.join(process.cwd(), 'src/articles');

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  tagline: string;
  content: string;
};

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_PATH)
    .filter((fileName) => fileName.endsWith('.mdx'));
}

export function getArticleBySlug(slug: string): Article {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(ARTICLES_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description || data.intro || '',
    date: data.date || data.published || '',
    author: data.author || '',
    tags: data.tags || [],
    coverImage: data.coverImage || data.image || '',
    featured: data.featured || false,
    tagline: data.tagline || '',
    content: content,
  };
}

export function getAllArticles(limit?: number): Article[] {
  const slugs = getArticleSlugs();
  const posts = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((post1, post2) => {
      const dateA = new Date(post1.date);
      const dateB = new Date(post2.date);
      return dateB.getTime() - dateA.getTime();
    });
  return limit ? posts.slice(0, limit) : posts;
}
