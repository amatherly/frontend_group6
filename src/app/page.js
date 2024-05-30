import Image from "next/image";
import BookCard from "@/components/BookCard";
import Nav from "@/components/Nav";
import AllBooks from "@/pages/AllBooks";
import createBook from "@/pages/CreateBook";
import '../app/globals.css';

export default function Home() {
    const book = {
        "isbn13": "9780439023480",
        "authors": "Suzanne Collins",
        "publication": 2008,
        "original_title": "The Hunger Games",
        "title": "The Hunger Games (The Hunger Games, #1)",
        "ratings": {
            "average": 4.34,
            "count": 4780653,
            "rating_1": 66715,
            "rating_2": 127936,
            "rating_3": 560092,
            "rating_4": 1481305,
            "rating_5": 2706317
        },
        "icons": {
            "large": "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
            "small": "https://images.gr-assets.com/books/1447303603s/2767052.jpg"
        }
    }
    return (

        <>
            <Nav/>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <bookDetails/>
                <createBook/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <BookCard book={
                        book
                    }/>
                </div>
            </main>
        </>
    )
        ;
}
