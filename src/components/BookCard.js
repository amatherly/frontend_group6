import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Rating} from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";
import Link from "next/link";

const BookCard = ({book}) => {
    const maxLength = 40;
    const shorten = (text) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text;
    }

    const displayBook = (isbn) => {
        // Display the book details modal
        console.log("Book: " + isbn);
    }

    return (
        <React.Fragment>
            <div>
                <Link href="#" onClick={() => displayBook(book.isbn13)}>
                    <Card variant="outlined" style={{
                        width: '350px',
                        height: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px 0 rgba(1, 1, 1, .75)',
                    }}>
                        <CardContent style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: 'black',
                            padding: '20px',
                            textAlign: 'center',
                        }}>
                            <Image
                                src={book.icons?.large || '/default-book-cover.png'}
                                width={150}
                                height={200}
                                alt="Picture of the book cover"
                                style={{
                                    marginBottom: '20px',
                                    display: 'block',
                                }}
                            />
                            <Typography variant="h6" component="div" style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                marginBottom: '10px',
                            }}>
                                {shorten(book.title)}
                            </Typography>
                            <Typography variant="body2" component="div">
                                ISBN: {book.isbn13}
                            </Typography>
                            <Typography variant="body2" component="div" style={{color: 'grey'}}>
                                {book.authors}
                            </Typography>
                            <Typography variant="body2" component="div">
                                Publication Year: {book.publication}
                            </Typography>
                            <Typography variant="body2" component="div">
                                Average Rating: {book.ratings?.average}
                            </Typography>
                            <Rating name="read-only" value={book.ratings?.average} precision={0.1} readOnly/>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default BookCard;
