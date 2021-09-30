import React from 'react'
import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import useGetInformation from "../hooks/useGetInformation"
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import {useTheme} from "@mui/material/styles"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary'
export default function Currency() {
    let {id} = useParams()
    const information = useGetInformation(id)
    const theme = useTheme()

    return (
        <Container sx={{mt:3,minHeight:'80vh',position:'relative'}}>
            {information?
            <Container>
                <Card sx={{ height: "100%",display: "flex" , flexWrap:'wrap', mb:'20px'}} style={{background:theme.palette.card.default}}>
                <CardMedia component="img" image={information.image} alt="random" style={{maxWidth:300}}/> 
                    <CardContent sx={{ flexGrow: 1, display:`flex`,flexDirection:'column' }}>
                    <Typography gutterBottom variant="h4" component="h2">
                        {information.name}
                    </Typography>
                        <Typography variant="h5">
                            <ul style={{listStyle:'none'}}>
                                <li>{`Current Price: ${information.price}$`}</li>
                                <li>{`All time high price: ${information.allTime_high}$`}</li>
                                <li>{`Market Cap: ${information.market_cap}$`}</li>
                                <li>{`Market Cap Rank: ${information.market_cap_rank}`}</li>
                        </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Accordion >
                    <AccordionSummary sx={{color:theme.palette.text.primary,background:theme.palette.background.default}}><Typography variant="h5">Description</Typography></AccordionSummary>
                    <Typography variant="h6" sx={{padding:`30px`}} sx={{color:theme.palette.text.primary,background:theme.palette.background.default,padding:`30px`}}>{information.description.replace(/<[^>]*>?/gm, '')}</Typography>
                </Accordion>
            </Container>
            : <Box display="flex" justifyContent="center" alignItems="center"><CircularProgress size={100}/></Box>}
        </Container>
    )
}
