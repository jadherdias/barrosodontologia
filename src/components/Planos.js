import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const styles = {
  root:{
    height:"100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxWidth: 700,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.root} id="planos">
      <CardContent className={classes.card} >
      <CardContent>
      <Grid container spacing={10}>
      <Grid item md={'auto'}>
        <CardMedia
          component="img"
          alt="Hapvida"
          className={classes.media}
          height="100"
          width="auto"
          image="hapvida.png"
          title="Plano Hapvida"
        />
        </Grid>
        <Grid item md={'auto'}>
        <CardMedia
          component="img"
          alt="Plano Clin"
          className={classes.media}
          height="100"
          width="auto"
          image="clin.png"
          title="Plano Hapvida"
        />
        </Grid>
        </Grid>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Convênios atendidos:
          </Typography>
          <Typography component="p">
            Atendemos os planos Hapvida e Plano Clin Odontológico.
            
          </Typography>
          <Typography component="p">
            Devido a alta procura de atendimento dos planos os mesmos devem ser agendados previamente pelo aplicativo do plano.
          </Typography>
        </CardContent>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Agendar
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
