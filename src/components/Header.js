import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import IconeMenu from '@material-ui/icons/Menu';
import IconeWhatsApp from '@material-ui/icons/WhatsApp';
import IconeInstagram from '@material-ui/icons/Instagram';
import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import Menu from '../components/Menu';

const useStyles = makeStyles((theme) =>({
    root:{
        display :'flex',
        //justifyContent : 'center',
        //alignItems:'center',


    },
    appbar:{
        background: 'none',
        position: 'unset', 
        boxShadow : 'none',
        fontFamily: 'Pinyon Script',
        
    },
    appbarTitle:{
        flexGrow: '1',
        fontFamily: 'Pinyon Script',
        fontSize:'3vw',
    },
    spanicon:{
        color: '#000',
        fontSize: 'small',
    },
    appbarWrapper:{
        //width: '70%',
        //margin : '0 auto',
        justifyContent: 'space-between',

    },
    span:{
        color: '#eccd5f',
    },

}) );

function Header(){
    const classes = useStyles();
    return (
    <div className={classes.root} >
        <AppBar className={classes.appbar} elavation={0}>
            <Toolbar className={classes.appbarWrapper}>
            
                <div style={{float:'left'}} ><h1 className={classes.appbarTitle}>Clínica <span className={classes.span}>Barros Odontologia</span></h1></div>
                <div style={{width: '10%' , height: 'relative'}}></div>
                <div style={{display:'flex', float:'right'}}>
                    <div><IconButton ><Link href="instagram://media?id=434784289393782000_15903882" ><div><IconeInstagram color="primary" /><span className={classes.spanicon}> @barros_odontologia</span></div></Link></IconButton></div>
                    <div><IconButton ><Link href="https://wa.me/556236021162" ><div><IconeWhatsApp color="primary" /><span className={classes.spanicon} > (62) 36021162</span></div></Link></IconButton></div>
                    <div><Menu /></div>
                    
                </div>
                
            </Toolbar>
        </AppBar>
    </div>
    )

}

export default Header