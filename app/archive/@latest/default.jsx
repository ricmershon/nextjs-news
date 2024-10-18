import { getLatestNews } from "@/lib/news"
import NewsList from "@/ui/news-list/news-list";

export default function LatestNewsPage() {
    const latestNews = getLatestNews();

    return (
        <>
            <h2>Latest Page</h2>
            <NewsList news={latestNews} />
        </>
    )
}