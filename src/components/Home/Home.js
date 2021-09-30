import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useFetchCards from "../../hooks/useFetchCards"
import Header from "./Header"
import Cards from "./Cards"
export default function Home() {
    const cards = useFetchCards()
    return (
        <main style={{minHeight:`90vh`}}>
          <Header/>
          {cards.length>0? <Cards cards={cards}/> :<Box display="flex" justifyContent="center" alignItems="center"><CircularProgress size={100}/></Box>}
    </main>
    )
}
