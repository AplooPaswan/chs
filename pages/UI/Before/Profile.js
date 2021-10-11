import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GoogleIcon from '@mui/icons-material/Google';



const clientId = "427283001518-7r1m5ubnjjqh46neaaehg39f6eobgka0.apps.googleusercontent.com";
import { refreshTokenSetup } from '../Before/Google/refreshTocken'
import { useGoogleLogout } from 'react-google-login';
import { GoogleLogin, useGoogleLogin } from "react-google-login";
import AddNewSociety from './AddNewSociety';
import SocietyMenu from './SocietyMenu';

export default function Profile() {

    const [login, setLogIn] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [img, setImg ]= React.useState('');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Gogle login

    const onSuccess = (res) => {

        refreshTokenSetup(res);
        // alert(res.profileObj.email)
        // console.log("Login Success: currentUser:", res.profileObj.tokenId); 
        setLogIn(true)
        setImg(res.profileObj.imageUrl)
        setName(res.profileObj.name)
        setEmail(res.profileObj.email)

        refreshTokenSetup(res);

    }

    const onFailure = (res) => {
        console.log("Login failed: res:", res);
        // alert( `Failed to login. ` );
    };






    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    const onLogoutSuccess = (res) => {
        setImg("")
        setName("")
        setEmail("")
        setLogIn("")
        res = ""
        // alert('Logged out Successfully ✌');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,

    });



    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            
            <SocietyMenu />

            <AddNewSociety/>

                <Tooltip title="Account settings">
                    <IconButton color="inherit" onClick={ login ? handleClick : signIn} size="small" sx={{ ml: 2 }}>
                       
                        {  login ?
                            <Avatar src={img} sx={{ width: 32, height: 32 }}  alt={name} />
                            :
                            <GoogleIcon />
                        
                        }

                       
                        {/* <Avatar sx={{ width: 32, height: 32 }}>Aploo</Avatar> */}
                        {/* <AccountCircleIcon>login</AccountCircleIcon> */}
                    </IconButton>
                </Tooltip>
            </Box>



            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar src={img} /> {name}
                </MenuItem>

                <Divider />
                {/* <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem> */}
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={signOut}>
                    <ListItemIcon >
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
