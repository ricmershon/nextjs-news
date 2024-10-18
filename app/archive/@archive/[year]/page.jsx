import { getNewsForYear } from "@/lib/news";
import NewsList from "@/ui/news-list/news-list";

export default function FilteredNewsPage({params}) {
    const news = getNewsForYear(params.year)
    return (
        <NewsList news={news} />
    )
}