import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {IconButton, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Image from 'next/image';
import Fab from '@material-ui/core/Fab';
import IconeWhatsApp from '@material-ui/icons/WhatsApp';
import { WhatsApp } from '@material-ui/icons';
import Link from 'next/link';

import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) =>({
    root : {
      minHeight: '100vh',      
    },
    title:{
        color: '#fff',
      },
    goDown:{
        color: '#eccd5f',
        fontSize: '1.5em',
      },
    container:{
        textAlign: 'center',
        justifyContent : 'center',
        alignItems:'center',
        fontFamily: 'Pinyon Script',

    },
    whats: {
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      backgroundColor : '#25d366',
    }   
}) );



function corpo(){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
      setChecked(true);
    },[])  
    return (
        <div className={classes.root}>
          <Collapse in={checked} {...(checked?{timeout:2500}:{})} collapsedHeight={50}>
          <div className={classes.container}>
              <h1 className={classes.title}>Bem vindo a<br/><span><Image src='/logo.svg' height={350} width={350}  /></span></h1>
              <Scroll to='equipe' smooth={true} >
                <IconButton>
                  <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>
              </Scroll>
              <Typography>
              Av. Leopoldo de Bulhões Q qi3 Lt8, N 141 - Conj. Vera Cruz, Goiânia - GO
              </Typography>
          </div>
          </Collapse>
          <Link href="https://wa.me/556236021162" >
            <Fab className={classes.whats} aria-label="add">
                <IconeWhatsApp />
            </Fab>
          </Link>
        </div>
    )

}

export default corpo