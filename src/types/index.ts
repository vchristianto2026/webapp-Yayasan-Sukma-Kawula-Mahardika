export type Language = 'id' | 'en' | 'zh' | 'tl';

export interface BoardMember {
  role: string;
  name: string;
  title?: string;
  bio?: string;
}

export interface ArticleChapter {
  id: string;
  title: string;
  content: string[];
  keyQuote?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  author: Record<Language, string>;
  date: string;
  readTime: Record<Language, string>;
  category: Record<Language, string>;
  summary: Record<Language, string>;
  keyScriptures: string[];
  chapters: Record<Language, ArticleChapter[]>;
  references?: string[];
  pdfPageRange?: string;
}

export interface FAQItem {
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: string;
}
