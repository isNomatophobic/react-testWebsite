import React from 'react'
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {Link} from "react-router-dom"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
import {useTheme} from "@mui/material/styles"


export default function Cards({cards}) {
    const theme = useTheme()
    return (
        <Container sx={{ py: 8}} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                style={{backgroundColor:theme.palette.card.default}}
              >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>
                    <ul>
                      <li>Current Price: {card.price}$ </li>
                      <li>24h High: {card.highPrice}$</li>
                      <li>24h Low: {card.lowPrice}$</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`currency/${card.id}`}><Button size="small" style={{background:theme.palette.button.bg,color:theme.palette.button.text}}>More</Button></Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}
