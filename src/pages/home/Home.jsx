import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

import "./home.css"

const Home = () => {
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
                        sx={{marginTop:"300px"}}
                        >
                        <Typography variant="h3" sx={{color:"#e582e5"}}>ChatGPT</Typography>
                        <Typography variant="h5" sx={{color:blue[700]}}>with</Typography>
                         
                        <Typography variant="h3" sx={{color:"#5bcae8"}}>React</Typography> 
                         
                        <Typography variant="h5" sx={{color:blue[700]}}>using</Typography>
                        <Typography variant="h3" sx={{color:"#ffce26"}}>Vite</Typography> 
                            
                </Grid>
                
                <Grid   container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={0}
                        sx={{
                            width:"auto",
                            marginTop:"50px"
                        }} 
                >
                    
                    
                       
                   

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

export default Home