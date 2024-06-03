'use client'
import Image from "next/image";
import BookDetails from "@/pages/BookDetails";
import Nav from "@/components/Nav";
import AllBooks from "@/pages/AllBooks";
import createBook from "@/pages/CreateBook";
import '../app/globals.css';
import CreateBook from "@/pages/CreateBook";

export default function Home() {
    const book = {
        
        
            "isbn13": "9780316160190",
            "authors": "Stephenie Meyer",
            "publication": 2006,
            "original_title": "New Moon (Twilight, #2)",
            "title": "New Moon (Twilight, #2)",
            "ratings": {
                "average": 3.52,
                "count": 1149630,
                "rating_1": 102837,
                "rating_2": 160660,
                "rating_3": 294207,
                "rating_4": 290612,
                "rating_5": 350684
            },
            "icons": {
                "large": "https://images.gr-assets.com/books/1361039440m/49041.jpg",
                "small": "https://images.gr-assets.com/books/1361039440s/49041.jpg"
            }

  }
    return (

        <>
            <Nav/>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                Group 6
            </main>
        </>
    )
        ;
}
