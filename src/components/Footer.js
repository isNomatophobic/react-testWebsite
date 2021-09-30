import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles"
import data from "../data/socialLinks";

export default function Footer() {
    const theme = useTheme()
    const links = data.map((social)=>{
        return <a href={social.link} target="_blank" style={{textDecoration:"none",color:"inherit"}}>{social.id}</a>
    })
    return (
        <Box sx={{ bgcolor: theme.palette.primary.main, p: 6,mt:`20px` }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Made by <span key={Math.random(1,10000)} style={{background:theme.palette.footer.name,backgroundClip:`text`, color:`transparent`}}>Kristian Petrov</span> in 4 hours!

        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary" component="p">
          {links}
        </Typography>
      </Box>
    )
}
