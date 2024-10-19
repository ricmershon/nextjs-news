import NewsList from "@/ui/news-list/news-list";
import {
    getNewsForYear,
    getNewsForYearAndMonth
} from "@/lib/news";

export default async function FilteredNews({ year, month }) {
    let news;

    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month)
    }

    let newsContent = <p>No news available for the slected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return newsContent;
}