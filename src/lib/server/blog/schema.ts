import { BLOG_CATEGORY_MAP } from "./constants";
import type {
    BlogCategorySlug,
    BlogFaqItem,
    BlogFrontmatter,
    BlogSchemaType,
} from "./types";

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function isIsoDate(value: string): boolean {
    return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function normalizeReadTime(value: unknown): string {
    if (typeof value === "number" && Number.isFinite(value) && value > 0) {
        return `${Math.round(value)} min de leitura`;
    }

    if (isNonEmptyString(value)) {
        return value.trim();
    }

    throw new Error("Frontmatter field 'readTime' is required");
}

function normalizePublishedOrder(value: unknown): number {
    if (typeof value === "number" && Number.isInteger(value) && value >= 0) {
        return value;
    }

    if (isNonEmptyString(value)) {
        const parsed = Number(value);
        if (Number.isInteger(parsed) && parsed >= 0) {
            return parsed;
        }
    }

    throw new Error(
        "Frontmatter field 'publishedOrder' must be an integer greater than or equal to zero",
    );
}

function normalizeTags(value: unknown): string[] {
    if (!Array.isArray(value)) {
        throw new Error("Frontmatter field 'tags' must be an array");
    }

    const tags = value
        .filter((item): item is string => isNonEmptyString(item))
        .map((item) => item.trim());

    if (tags.length === 0) {
        throw new Error("Frontmatter field 'tags' must contain at least one tag");
    }

    return tags;
}

function normalizeFaq(value: unknown): BlogFaqItem[] | undefined {
    if (value == null) return undefined;
    if (!Array.isArray(value)) {
        throw new Error("Frontmatter field 'faq' must be an array");
    }

    return value.map((item, index) => {
        if (!item || typeof item !== "object") {
            throw new Error(`FAQ item at index ${index} must be an object`);
        }

        const question = "question" in item ? item.question : undefined;
        const answer = "answer" in item ? item.answer : undefined;

        if (!isNonEmptyString(question) || !isNonEmptyString(answer)) {
            throw new Error(
                `FAQ item at index ${index} must contain question and answer`,
            );
        }

        return { question: question.trim(), answer: answer.trim() };
    });
}

function normalizeReferences(value: unknown): string[] | undefined {
    if (value == null) return undefined;
    if (!Array.isArray(value)) {
        throw new Error("Frontmatter field 'references' must be an array");
    }

    return value
        .filter((item): item is string => isNonEmptyString(item))
        .map((item) => item.trim());
}

function normalizeSchemaType(value: unknown): BlogSchemaType | undefined {
    if (value == null) return undefined;
    if (value === "Article" || value === "BlogPosting") return value;
    throw new Error("Frontmatter field 'schemaType' must be Article or BlogPosting");
}

export function validateFrontmatter(
    slugHint: string,
    input: Record<string, unknown>,
): BlogFrontmatter {
    const slug = isNonEmptyString(input.slug) ? input.slug.trim() : slugHint;
    const title = isNonEmptyString(input.title) ? input.title.trim() : null;
    const description = isNonEmptyString(input.description)
        ? input.description.trim()
        : null;
    const category = isNonEmptyString(input.category)
        ? input.category.trim()
        : null;
    const date = isNonEmptyString(input.date) ? input.date.trim() : null;
    const image = isNonEmptyString(input.image) ? input.image.trim() : null;
    const published =
        typeof input.published === "boolean" ? input.published : true;

    if (!isNonEmptyString(slug)) {
        throw new Error("Frontmatter field 'slug' is required");
    }
    if (!title) {
        throw new Error(`Post '${slug}' is missing required field 'title'`);
    }
    if (!description) {
        throw new Error(`Post '${slug}' is missing required field 'description'`);
    }
    if (!category || !BLOG_CATEGORY_MAP.has(category as BlogCategorySlug)) {
        throw new Error(`Post '${slug}' has invalid field 'category'`);
    }
    if (!date || !isIsoDate(date)) {
        throw new Error(`Post '${slug}' must use ISO date in field 'date'`);
    }
    if (!image) {
        throw new Error(`Post '${slug}' is missing required field 'image'`);
    }

    const lastReviewed = isNonEmptyString(input.lastReviewed)
        ? input.lastReviewed.trim()
        : undefined;
    if (lastReviewed && !isIsoDate(lastReviewed)) {
        throw new Error(`Post '${slug}' must use ISO date in field 'lastReviewed'`);
    }

    const altText = isNonEmptyString(input.altText)
        ? input.altText.trim()
        : undefined;
    const dateLabel = isNonEmptyString(input.dateLabel)
        ? input.dateLabel.trim()
        : undefined;
    const categoryLabel = isNonEmptyString(input.categoryLabel)
        ? input.categoryLabel.trim()
        : undefined;

    return {
        slug,
        title,
        description,
        category: category as BlogCategorySlug,
        date,
        dateLabel,
        publishedOrder: normalizePublishedOrder(input.publishedOrder),
        readTime: normalizeReadTime(input.readTime),
        image,
        tags: normalizeTags(input.tags),
        published,
        altText,
        categoryLabel,
        schemaType: normalizeSchemaType(input.schemaType),
        lastReviewed,
        faq: normalizeFaq(input.faq),
        references: normalizeReferences(input.references),
        featured: typeof input.featured === "boolean" ? input.featured : undefined,
    };
}
