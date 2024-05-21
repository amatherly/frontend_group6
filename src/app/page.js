import Image from "next/image";
import BookCard from "@/components/book";

export default function Home() {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold text-gray-900">Books</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </main>
)
    ;
}
