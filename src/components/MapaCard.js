import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe';
import Map from '@material-ui/icons/Map'


const useStyles = makeStyles({
  cartoes:{
      justifyContent:'center',
  },
  media: {
    height: 540,
    backgroundSize: 'contain',
  },
  title: {
      fontFamily:'sans-serif',
  },
  content:{
      //ustifyContent : 'center',
      //display:'flex',
  }
});

export default function ImageCard({funcionario}) {
  const classes = useStyles();

  return (
        <Card className={classes.cartoes}>
        <CardContent>
            <Iframe
                url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.359375475755!2d-49.381584722461746!3d-16.658890467046398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5f2962d47a21%3A0xd0603ad350efaf90!2sBarros%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1622935334406!5m2!1spt-BR!2sbr' 
                width="450px"
                height="450px"
                id="mapa"
            />
            <CardContent className={classes.content}>
            <Typography variant="caption" color="textSecondary" component="p" align="center">
            Avenida Leopoldo de Bulhões Q qi3 Lt8, N 141 - Conj. Vera Cruz, Goiânia - GO, 74493-130
            </Typography>
            </CardContent>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
            Compartilhar
            </Button>
            <Button size="small" color="primary" href="https://ul.waze.com/ul?place=ChIJIXrUYilfXpMRkK_vUNM6YNA&ll=-16.65827080%2C-49.38144680&navigate=yes">
            <div><Map />Waze</div>
            </Button>
        </CardActions>
        </Card>
  );
}
