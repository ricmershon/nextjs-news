import { getAllNews } from "@/lib/news";
import NewsList from "@/ui/news-list/news-list";

export default async function NewsPage() {
    const news = getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    )
}