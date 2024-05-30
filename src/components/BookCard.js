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
        console.log("Book: " + book);
    }

    return (
        <React.Fragment>
            <div style={{
                margin: '30px',
            }}>
                <Link href={  '#'  } onClick={displayBook(book.isbn13)}>
                    <Card variant="outlined" style={{
                        width: '350px',
                        height: '700px',
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
                            alignItems: 'left',
                            flexGrow: 1,
                            color: 'black',
                        }}>
                            <Image
                                src={book.icons?.large}
                                width={200}
                                height={200}
                                alt="Picture of the book cover"
                                style={{
                                    marginBottom: '20px',
                                }}
                            />
                            <Typography variant="h6" component="div" style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                marginBottom: '10px',
                                textAlign: 'left',
                            }}>
                                {shorten(book.title)}
                            </Typography>

                            <Typography variant="h7" component="div" style={{textAlign: 'left'}}>
                                ISBN: {book.isbn13}
                            </Typography>

                            <Typography variant="h7" component="div" style={{
                                textAlign: 'left',
                                color: 'grey'
                            }}>
                                {book.authors}
                            </Typography>


                            <Typography variant="h8" component="div" style={{textAlign: 'left'}}>
                                Publication Year: {book.publication}
                            </Typography>

                            <Typography variant="h8" component="div" style={{textAlign: 'left'}}>
                                Average Rating: {book.ratings?.average}
                            </Typography>

                            <Typography variant="h8" component="div" style={{textAlign: 'left'}}>
                                <Rating name="read-only" value={book.ratings?.average} precision={0.1} readOnly/>
                            </Typography>

                        </CardContent>
                    </Card>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default BookCard;
