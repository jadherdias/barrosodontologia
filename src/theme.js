import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eccd5f',
    },
    secondary: {
      main: '#000',
    },
    whatsapp : {
      main: '#25D366',
      backgroundColor: '#25d366',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  corpo:{
    background: {
      minHeight: '100vh',
      backgroundImage: `url('clinica-interior.jpg')`,
      backgroundRepeat: 'no-repeat',
       
      backgroundSize: 'cover',
    }
  }
});

export default theme;
