import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
//import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Cabecalho from '../src/components/Header.js';
import Corpo from '../src/components/LandBody.js';
import Card from '../src/components/Cards.js';
import Mapa from '../src/components/Mapa';
import Planos from '../src/components/Planos';
import Head from '../src/components/Head';

//import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default function Index() {
  return (
<main>
  <Head />
  <Cabecalho /> 
  <Corpo />
  <Card />
  <Mapa />
  <Planos/>
</main>

  );
}
