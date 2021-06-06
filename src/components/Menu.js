import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconeMenu from '@material-ui/icons/Menu';
import { Link as Scroll } from 'react-scroll';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <IconeMenu />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Scroll to='equipe' smooth={true} >Equipe</Scroll></MenuItem>
        <MenuItem onClick={handleClose}><Scroll to='mapa' smooth={true} >Local</Scroll></MenuItem>
        <MenuItem onClick={handleClose}><Scroll to='planos' smooth={true} >Planos</Scroll></MenuItem>
        <MenuItem onClick={handleClose}>Consulta</MenuItem>
        <MenuItem onClick={handleClose}>Waze</MenuItem>
      </Menu>
    </div>
  );
}
