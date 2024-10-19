import { getLatestNews } from "@/lib/news"
import NewsList from "@/ui/news-list/news-list";

export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();

    return (
        <>
            <h2>Latest Page</h2>
            <NewsList news={latestNews} />
        </>
    )
}