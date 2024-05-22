import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Rating} from "@mui/material";
import Image from "next/image";

const BookCard = ({book}) => {
    const maxLength = 40;
    const shorten = (text) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text;
    }
    return (
        <React.Fragment>
            <div style={
                {
                    margin: '30px',
                }
            }>
                <CardContent>
                    <Typography variant="h5" component="div" style={
                        {
                            height: '80px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginBottom: '10px'
                        }
                    }>
                        {shorten(book.title)}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {book.authors}
                    </Typography>
                    <Image
                        src={book.icons?.large}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                    <Typography variant="h8" component="div">
                        Publication Year: {book.publication}
                    </Typography>
                    <Typography variant="h8" component="div">
                        Average Rating: {book.ratings?.average}
                    </Typography>
                    <Typography variant="h8" component="div">
                        <Rating name="read-only" value={book.ratings?.average} precision={0.1} readOnly/>
                    </Typography>
                    <Typography variant="h9" component="div">
                        ISBN: {book.isbn13}
                    </Typography>

                </CardContent>
            </div>
        </React.Fragment>
    );
}


export default BookCard;