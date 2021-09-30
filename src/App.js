import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer"
import Currency from "./components/Currency"
import {BrowserRouter,Route,useHistory} from "react-router-dom"
import {light,dark} from './theme';

const theme = createTheme(light);

export default function Album() {

  const [isLight,setLight] = React.useState(true)
  return (
    <BrowserRouter>
      <ThemeProvider theme={isLight? light : dark}>
        <CssBaseline />
        <Navbar setLight={setLight} isLight={isLight}/>
          <Route component={Home} path="/" exact/>
          <Route component={Currency} path="/currency/:id" exact/>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}
