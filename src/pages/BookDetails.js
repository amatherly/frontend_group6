
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from "@mui/material";
import Image from 'next/image';
import '../app/globals.css';

const BookDetails = ({ book }) => {

    const maxLength = 40;
    const shorten = (text) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <React.Fragment>
            <div style={{
                margin: '30px',
            }}>
                <Card variant="outlined" style={{
                    width: '400px',
                    height: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    boxShadow: '0 4px 6px 0 rgba(1, 1, 1, .75)',
                }}>
                    <CardContent style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'left',
                        flexGrow: 1,
                        color: 'white',
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
                        <Typography variant="h5" component="div">
                            Title: {book.title}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Author: {book.authors}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Ratings: {book.ratings?.average}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Publication Year: {book.publication}
                        </Typography>
                        <Typography variant="h5" component="div">
                            ISBN #: {book.isbn13}
                        </Typography>
                        <Typography variant="body2">
                            Qoute: {'" Reading is to the mind what exercise is to the body."'}
                            (by Joseph Addison)
                            <br />
                            
                        </Typography>
                        <Rating name="read-only" value={book.ratings?.average || 3} readOnly />
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" onClick={handleLearnMoreClick}>Learn More</Button>
                    </CardActions> */}
                </Card>
            </div>
        </React.Fragment>
    )
}

export default BookDetails;

