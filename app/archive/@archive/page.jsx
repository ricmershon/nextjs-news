import { getAvailableNewsYears } from "@/lib/news"
import Link from "next/link";

export default function ArchivePage() {
    const archiveYears = getAvailableNewsYears();

    return (
        <header id='archive-header'>
            <nav>
                <ul>
                    {archiveYears.map((year) => (
                        <li key={year}>
                            <Link href={`/archive/${year}`}>{year}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}