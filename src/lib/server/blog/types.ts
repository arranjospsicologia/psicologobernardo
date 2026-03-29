import type { BLOG_CATEGORIES, VALID_LOCATION_SCOPES, VALID_NEIGHBORHOODS } from "./constants";

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export type BlogCategorySlug = BlogCategory["slug"];

export type LocationScope = (typeof VALID_LOCATION_SCOPES)[number];
export type Neighborhood = (typeof VALID_NEIGHBORHOODS)[number];

export type BlogSchemaType = "Article" | "BlogPosting";

export interface BlogFaqItem {
    question: string;
    answer: string;
}

export interface BlogFrontmatter {
    slug: string;
    title: string;
    description: string;
    category: BlogCategorySlug;
    date: string;
    dateLabel?: string;
    publishedOrder: number;
    readTime: string;
    image: string;
    tags: string[];
    published: boolean;
    altText?: string;
    categoryLabel?: string;
    schemaType?: BlogSchemaType;
    lastReviewed?: string;
    faq?: BlogFaqItem[];
    references?: string[];
    featured?: boolean;
    locationScope?: LocationScope;
    neighborhood?: Neighborhood;
}

export interface BlogPostIndexItem {
    slug: string;
    title: string;
    description: string;
    categorySlug: BlogCategorySlug;
    categoryLabel: string;
    tags: string[];
    date: string;
    dateLabel: string;
    publishedOrder: number;
    readTime: string;
    image: string;
    altText?: string;
    schemaType?: BlogSchemaType;
    lastReviewed?: string;
    references?: string[];
    featured?: boolean;
    locationScope?: LocationScope;
    neighborhood?: Neighborhood;
    source: "markdown";
}

export interface BlogPostFull extends BlogPostIndexItem {
    htmlContent: string;
    faq?: BlogFaqItem[];
}

export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean;
    prevUrl: string | null;
    nextUrl: string | null;
    canonicalUrl: string;
    basePath: string;
}

export interface PaginatedPostsResult {
    posts: BlogPostIndexItem[];
    pagination: PaginationInfo;
}
