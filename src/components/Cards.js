import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ImageCard from './ImageCard';
import Funcionarios from '../data/funcionarios.js';


const useStyles = makeStyles((theme) =>({
    root:{
        height:"100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}) );



function Header(){
    const classes = useStyles();
    return( 
    <div className={classes.root} id='equipe'>
        <ImageCard funcionario={Funcionarios[0]} />
    </div>)
}

export default Header