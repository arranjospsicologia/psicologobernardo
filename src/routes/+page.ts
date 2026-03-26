import type { PageLoad } from "./$types";

const MAX_HOME_REVIEWS = 6;

type ReviewItem = {
    name: string;
    rating: number;
    date: string;
    text: string;
    initial?: string;
    photo?: string;
};

function normalizeReviewList(input: unknown): ReviewItem[] {
    if (!Array.isArray(input)) return [];

    const normalized: ReviewItem[] = [];

    for (const candidate of input) {
        if (!candidate || typeof candidate !== "object") continue;

        const raw = candidate as Record<string, unknown>;
        const name = typeof raw.name === "string" ? raw.name.trim() : "";
        const date = typeof raw.date === "string" ? raw.date.trim() : "";
        const text = typeof raw.text === "string" ? raw.text.trim() : "";
        const rating =
            typeof raw.rating === "number"
                ? raw.rating
                : Number.parseInt(String(raw.rating ?? "0"), 10);

        if (!name || !date || !text || !Number.isFinite(rating) || rating <= 0) {
            continue;
        }

        const review: ReviewItem = {
            name,
            date,
            text,
            rating,
        };

        if (typeof raw.initial === "string" && raw.initial.trim()) {
            review.initial = raw.initial.trim();
        }

        if (typeof raw.photo === "string" && raw.photo.trim()) {
            review.photo = raw.photo.trim();
        }

        normalized.push(review);
    }

    return normalized.slice(0, MAX_HOME_REVIEWS);
}

async function fetchReviewList(
    fetchFn: typeof fetch,
    url: string
): Promise<ReviewItem[]> {
    try {
        const response = await fetchFn(url);
        if (!response.ok) return [];

        const payload = (await response.json()) as unknown;
        return normalizeReviewList(payload);
    } catch {
        return [];
    }
}

export const load: PageLoad = async ({ fetch }) => {
    const [doctoraliaReviews, googleReviews] = await Promise.all([
        fetchReviewList(fetch, "/data/doctoralia-reviews.json"),
        fetchReviewList(fetch, "/data/reviews.json"),
    ]);

    return {
        doctoraliaReviews,
        googleReviews,
    };
};
