import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Nav from "@/components/Nav";
import BookCard from "@/components/BookCard";
import '../app/globals.css';
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// added this line
import BookDetails from './BookDetails';  // Imported BoodDetails

const SearchedBooks = () => {
    const [name, setName] = React.useState('');
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    // added thise 3 lines
    const [selectedBook, setSelectedBook] = React.useState(null); // SelectedBook state
    const [zoomedBook, setZoomedBook] = React.useState(null); // ZoomedBook state
    const containerRef = React.useRef(null); // useRef hook to create a ref for the container

    const [searchCategory, setSearchCategory] = React.useState('Title');

    const handleChange = (event) => {
        setSearchCategory(event.target.value);
    };

    const fetchBooks = async () => {
        setLoading(true);
        setError(null);

        try {
            let response;
            setBooks([]) // Clear books
            if (searchCategory === 'Title') {
                // Search by Title
                response = await fetch(`http://localhost:4000/book/title?title=${name}`);
            }

            if (searchCategory === 'Author') {
                // Search by Author
                response = await fetch(`http://localhost:4000/book/author?author=${name}`);
            }

            if (searchCategory === 'ISBN') {
                // Search by ISBN
                response = await fetch(`http://localhost:4000/book/isbn?isbn=${name}`);
            }

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
                    gap: '10px',
                    marginBottom: '30px',
                }}>
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Search By</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={searchCategory}
                                label="Title"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Title'}>Title</MenuItem>
                                <MenuItem value={'Author'}>Author</MenuItem>
                                <MenuItem value={'ISBN'}>ISBN</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 0, width: '40ch'},
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
                            label="Search"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </Box>
                    <Button variant="outlined" onClick={fetchBooks}>Search</Button>
                </div>


                {loading && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh'
                    }}>
                        <p>Loading...</p>
                    </div>
                )}
                {error && <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh'
                }}>
                    <p>Error: {error}</p>
                </div>
                }
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

                {books.length > 0 && (
                    <div style={{
                        margin: '30px',
                    }}>
                        {books.length} results
                        <div
                            className="grid mx-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                            {books.map(book => (
                                <BookCard key={book.isbn13} book={book}/>
                            ))}
                        </div>
                    </div>
                )}
                {books.length === 0 && !loading && !error && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh'
                    }}>
                        <h1>No books found</h1>
                    </div>
                )}
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

export default SearchedBooks;

