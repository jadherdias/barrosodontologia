import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MapaCard from './MapaCard';


const useStyles = makeStyles((theme) =>({
    root:{
        height:"100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}) );



function Mapa(){
    const classes = useStyles();
    return( 
    <div className={classes.root} id='equipe'>
        <MapaCard />
    </div>)
}

export default Mapa