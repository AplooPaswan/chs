import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SocietyMenu from './SocietyMenu'
import AddNewSociety from './AddNewSociety'
import { Avatar } from '@mui/material';
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import SwipeableEdgeDrawer from '../Before/Login'

export default function SimpleAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} m={-1} p={0}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ApartmentIcon />
          </IconButton>
          {/* <Avatar alt="Aploo Paswan" src="/static/images/avatar/1.jpg" /> */}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box sx={{display: { xs: 'none',md:'block',lg:'block' }}}>
            Society Management
            </Box>
          </Typography>

          <Box display='flex' >
            <SocietyMenu />
            {/* <IconButton color="inherit"> <AddBusinessIcon/> </IconButton> */}
            <AddNewSociety/>
            {/* <Button  color="inherit">Login</Button> */}
            <SwipeableEdgeDrawer/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
