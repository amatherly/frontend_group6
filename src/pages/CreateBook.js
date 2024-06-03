import * as React from "react";
import '../app/globals.css';
import {useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import {Alert} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Nav from "@/components/Nav";

const CreateBook = () => {
    const [age, setAge] = React.useState("");
    const [successfull, setSuccessfull] = useState(false);

    const [formData, setFormData] = useState({
        isbn13: null,
        authors: '',
        publication: null,
        original_title: '',
        title: '',
        large: '',
        small: '',
        count: null,
        average: null,
        rating_1: null,
        rating_2: null,
        rating_3: null,
        rating_4: null,
        rating_5: null
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/book/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Book added successfully');
            setSuccessfull(true)
        } else {
            console.log('Failed to add book');
            console.error(data.message);
        }
    };

    return (
        <>
            <Nav/>
        <React.Fragment>

            <Paper elevation={3} sx={{marginRight: "15%", marginLeft: "15%"}}>
                <Box sx={{padding: 5}}>
                    <Typography variant="h6" gutterBottom sx={{paddingBottom: 5}}>
                        Add A Book
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                ISBN
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                id="isbn13"
                                name="isbn13"
                                label="ISBN"
                                fullWidth
                                size="small"
                                autoComplete="on"
                                variant="outlined"
                                value={formData.isbn13}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Authors
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                id="authors"
                                name="authors"
                                label="Authors"
                                fullWidth
                                size="small"
                                autoComplete="on"
                                variant="outlined"
                                value={formData.authors}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Publication
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                id="publication"
                                name="publication"
                                label="Publication"
                                fullWidth
                                size="small"
                                autoComplete="on"
                                variant="outlined"
                                value={formData.publication}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Original Title
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                id="original_title"
                                name="original_title"
                                label="Original_title"
                                fullWidth
                                size="small"
                                autoComplete="on"
                                variant="outlined"
                                value={formData.original_title}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Title
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                label="Title"
                                fullWidth
                                size="small"
                                autoComplete="on"
                                variant="outlined"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </Grid>
                        {/*<Grid item xs={12} sm={2}>*/}
                        {/*    <InputLabel*/}
                        {/*        sx={{*/}
                        {/*            display: "flex",*/}
                        {/*            justifyContent: "center",*/}
                        {/*            fontWeight: 700*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        Category*/}
                        {/*    </InputLabel>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12} sm={4}>*/}
                        {/*    <FormControl fullWidth size="small">*/}
                        {/*        <InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                        {/*        <Select*/}
                        {/*            labelId="demo-simple-select-label"*/}
                        {/*            id="demo-simple-select"*/}
                        {/*            value={age}*/}
                        {/*            label="Age"*/}
                        {/*            onChange={handleChange}*/}
                        {/*        >*/}
                        {/*            {categories.map((item) => (*/}
                        {/*                <MenuItem value={item}>{item}</MenuItem>*/}
                        {/*            ))}*/}
                        {/*        </Select>*/}
                        {/*    </FormControl>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Small Img
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="small"
                                name="small"
                                label="Small_image URL"
                                fullWidth
                                size="small"
                                autoComplete="on"
                                variant="outlined"
                                value={formData.small}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Large Img
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="large"
                                name="large"
                                label="Large_image URL"
                                fullWidth
                                size="small"
                                autoComplete="on"
                                variant="outlined"
                                value={formData.large}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}/>
                        <Grid item xs={12} sm={5}/>
                        <Grid item xs={12} sm={4}>
                            <Button variant="contained" sx={{color: "#ff781f"}
                            }
                                    onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={5}/>
                    </Grid>
                </Box>
            </Paper>
            {successfull &&
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Book added Successfully
                </Alert>}
        </React.Fragment>
        </>
    );
}

export default CreateBook;