import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';


import "./topbar.css"

const Topbar = () => {
    return (
        
        <Container maxWidth="" 
            sx={{
                width:"720px",
            }} 
        >
            
            
            <Grid   container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={0}
                    sx={{
                        width:"auto",
                        marginTop:"25px"
                    }} 
            >
                
                
                   
                <Grid>
                    <Link to="/" className="link">
                        <Button variant="outlined">Home</Button>
                    </Link>
                </Grid>

                <Grid>
                    <Link to="/generateImage" className="link">
                        <Button variant="outlined">Generate Image</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to="/translation" className="link">
                        <Button variant="outlined">English to Japanese</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to="/qa" className="link">
                        <Button variant="outlined">Q&A</Button>
                    </Link>
                    
                </Grid>
            </Grid>
        </Container>
)
}

export default Topbar