import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  cartoes:{
      justifyContent:'center',
  },
  media: {
    height: 240,
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
        <CardActionArea>
            <CardContent>
            <CardMedia
            className={classes.media}
            image={funcionario.foto}
            title={funcionario.nome}
            />
            </CardContent>
            <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
                {funcionario.nome}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
                {funcionario.descricao}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p" align="center">
                {funcionario.observacao}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Compartilhar
            </Button>
            <Button size="small" color="primary">
            Leia Mais
            </Button>
        </CardActions>
        </Card>
  );
}
