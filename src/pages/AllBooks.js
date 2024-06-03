'use client'
import '../app/globals.css';

import BookCard from "@/components/BookCard";
import Nav from "@/components/Nav";
import {useEffect, useState, useRef} from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// added this line
import BookDetails from './BookDetails';  // Imported BookDetails

const AllBooks = () => {
    const [name, setName] = React.useState('');
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [pagenum, setPageNum] = useState(1);
    const [numBooks, setNumBooks] = useState(10);

    // added thise 3 lines
    const [selectedBook, setSelectedBook] = React.useState(null); // SelectedBook state
    const [zoomedBook, setZoomedBook] = React.useState(null); // ZoomedBook state
    const containerRef = React.useRef(null); // useRef hook to create a ref for the container

    const fetchBooks = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:4000/book/getAll?pagenum=${pagenum}&perpage=${numBooks}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Network response was not ok');
            }

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

     // added these lines
     const handleBookClick = (book) => {  // handle book click
        setSelectedBook(book); // update selected book state
        setZoomedBook(book); // update zoomed book state
    }
    // mouse effect lines
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setSelectedBook(null); // Reset selected book state
                setZoomedBook(null); // Reset zoomed book state
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <Nav/>
            <div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1, width: '25ch'},
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
                            '& .MuiTextField-root': {m: 1, width: '25ch'},
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

                </div>

                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                {books.length > 0 && (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                        {books.map(book => (
                            <BookCard key={book.isbn13} book={book}/>
                        ))}
                    </div>
                )}
                {books.length === 0 && !loading && !error && (
                    <div>
                        <h1>No books found</h1>
                    </div>
                )}

                   {/* Added this */}
                   <div ref={containerRef} className="grid mx-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6" id="book-grid"> {/* Added id attribute with "book-grid" value */}
                    {books.map(book => (
                        <div 
                            key={book.isbn13} 
                            onClick={() => handleBookClick(book)}
                            className={zoomedBook === book ? 'zoomed' : ''} // Apply zoom effect
                            id={`book-${book.isbn13}`} 
                        > 
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
                        {/* Added this */}
                        {selectedBook && (
                <div className={`book-details ${zoomedBook ? 'show' : ''}`}>
                    <BookDetails book={selectedBook} />
                </div>
            )}
        </>
    );
};

export default AllBooks;
