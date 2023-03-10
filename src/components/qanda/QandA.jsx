import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";

import Topbar from '../topbar/Topbar';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { TextField, Typography } from '@mui/material';

const QandA = () => {
  const [propmt, setPromt] = useState("");
  const [answerUrl, setAnswerUrl] = useState("");


  const configuration = new Configuration({
    organization: "org-GOgOqEbg9oJpjeM0MTMM0Vgv",
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  const answerHandler = async (e) => {
    
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: propmt,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });
    
    setAnswerUrl(res.data.choices[0].text);
    e.target.value="";

  }
  return (
    <>
    <Topbar />

    <Container maxWidth="" 
                sx={{
                    width:"720px",
                }} 
            >
                <Grid   container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        sx={{marginTop:"200px"}}
                        >
                        <Typography variant="h3" sx={{color:"#e582e5"}}>AI will answer any question!</Typography>
                       
                            
                </Grid>
                
                <Grid   container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={0}
                        sx={{
                            width:"auto",
                            marginTop:"50px",
                        }} 
                >
                    
                    < TextField
                      required
                      label="Required"
                      variant="outlined"
                        
                      sx={{
                          width:"500px",
                          marginBottom:"50px"
                      }} 
                      onChange={(e) => (setPromt(e.target.value))}
                      placeholder="Type in here???"
                        
                      />
                      <Grid container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={0}
                      >
                        {answerUrl.length > 0 ? 
                                              <Typography sx={{width:"100%", height:"auto", marginTop:"25px", marginBottom:"25px", textAlign:"center"}}>
                                                  {answerUrl}  
                                              </Typography> 
                                            : 
                                            <>
                                            </>
                        } 
                      </Grid>
                      <Button onClick={answerHandler} >Ask Question</Button>
                      
                      
                </Grid>
            </Container>
    </>
      
  )
}

export default QandA