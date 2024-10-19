import { Suspense } from "react";

import FilterHeader from "@/ui/filter-header/filter-header";
import FilteredNews from "@/ui/filter-header/filtered-news";

export default async function FilteredNewsPage({params}) {
    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    return (
        <>
            <Suspense fallback={<p>Loading filter...</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    )
}