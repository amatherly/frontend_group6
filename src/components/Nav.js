import React from "react";
import Link from "next/link";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black-500 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
                <span className="font-semibold text-xl tracking-tight">BooksNStuff</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-black hover:border-black">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Home</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/CreateBook">
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4">
                            Add a Book
                        </p>
                    </Link>
                    <Link href="/AllBooks">
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4">
                            Browse All
                        </p>
                    </Link>
                    <Link href="/SearchedBooks">
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black">
                            Search Books
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
