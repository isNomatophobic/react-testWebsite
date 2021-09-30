import { red,white } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const light = createTheme({
  palette: {
    background: {
      default: `#ffffff`
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    button:{
      bg:"#FFFFFF",
      text:"#556cd6"
    },
    card:{
      default:`#ffffff`
    },
    footer:{
      name:"linear-gradient(45deg, #FF7A00 0%, #F52205 100%)"
    },
    error: {
      main: red.A400,
    },
  },
});
const dark = createTheme({
  palette: {
    background: {
      default: `#32373E`,
    },
    card:{
      default:`#27292B`
    },
    text: {
      primary: "#ffffff",
      secondary: "#556CD6",
      button:"ffffff"
    },
    button:{
      bg:"#19857b",
      text:"#ffffff"
    },
    primary: {
      main: '#1E2021',
    },
    footer:{
      name:"linear-gradient(45deg, #00ccf0 0%, #9700d0 100%)"
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export {light,dark};
