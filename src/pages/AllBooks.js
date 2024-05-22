'use client'
import '../app/globals.css';

import BookCard from "@/components/BookCard";
import Nav from "@/components/Nav";
import {useEffect, useState} from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AllBooks = () => {
    const [name, setName] = React.useState('');
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const [pagenum, setPageNum] = useState(1);
    const [numBooks, setNumBooks] = useState(10);

    const fetchBooks = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:4000/book/title?pagenum=${pagenum}&perpage=${numBooks}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBooks(data.entries || []);
            console.log(data.entries);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log("Books: " + books);
    }, [books]);

    return (
        <>
            <Nav />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1>Search for Books</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="on"
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchBooks();
                    }}
                >
                    <TextField
                        id="outlined-controlled"
                        label="Page Number"
                        value={pagenum}
                        onChange={(event) => {
                            setPageNum(event.target.value);
                        }}
                    />
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="on"
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchBooks();
                    }}
                >
                    <TextField
                        id="outlined-controlled"
                        label="Number of Books per Page"
                        value={numBooks}
                        onChange={(event) => {
                            setNumBooks(event.target.value);
                        }}
                    />
                </Box>
                <Button variant="outlined" onClick={fetchBooks}>Search</Button>

                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                {books.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                        {books.map(book => (
                            <BookCard key={book.isbn13} book={book} />
                        ))}
                    </div>
                )}
                {books.length === 0 && !loading && !error && (
                    <div>
                        <h1>No books found</h1>
                    </div>
                )}
            </main>
        </>
    );
};

export default AllBooks;
