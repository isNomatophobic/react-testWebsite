import React from 'react'
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import BarChartIcon from "@mui/icons-material/BarChart";
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {Link} from "react-router-dom"
import { Switch } from '@mui/material';
export default function Navbar({setLight,isLight}) {

    const toggleTheme = ()=>{
      setLight(p=>!p)
    }
    return (
        <AppBar position="relative">
        <Toolbar sx={{display:`flex`,justifyContent:'space-between'}}>
          <Link to="/" style={{display:`flex`,textDecoration:'none',color:'inherit'}}>
          <BarChartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            CoinGecko Market Pairs (USD)
          </Typography>
          </Link>
          <Box sx={{display:`flex`,alignItems:'center'}}>
            {isLight? <WbSunnyIcon/>:<NightlightIcon/> }
            <Switch onChange={toggleTheme} color="default"/>
          </Box>
        </Toolbar>
      </AppBar>
    )
}
