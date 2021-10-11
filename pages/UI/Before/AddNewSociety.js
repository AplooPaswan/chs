import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddNewSociety() {
    const [open, setOpen] = React.useState(false);

    // For City dropdown 
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };
    // end dropdown




    const handleClickOpen = () => {
        setOpen(true);
    };



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
            <IconButton color="inherit" onClick={handleClickOpen}> <AddBusinessIcon /> </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        {/*  */}
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Request society registration
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            Submit
                        </Button> */}

                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>

                    <ListItem >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="City"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>BhainderPada</MenuItem>
                                <MenuItem value={2}>Owale</MenuItem>
                                <MenuItem value={3}>kasar Wadvali</MenuItem>
                                <MenuItem value={4}>Sai Nagar</MenuItem>
                                <MenuItem value={5}>Anand Nagar</MenuItem>
                                <MenuItem value={6}>Panchamrut</MenuItem>
                                <MenuItem value={7}>Wagbhil</MenuItem>
                                <MenuItem value={8}>Patlipada</MenuItem>
                                <MenuItem value={9}>Hiranandani</MenuItem>
                                <MenuItem value={10}>Manpada</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>

                    <ListItem >
                        <TextField fullWidth id="outlined-basic" label="Society Name" variant="outlined" />
                    </ListItem>
                    <ListItem >
                        <TextField fullWidth id="outlined-basic" label="Building Name" variant="outlined" />
                    </ListItem>
                    <ListItem >
                        <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
                    </ListItem>
                    <ListItem >
                        <TextField fullWidth id="outlined-basic" label="Floor" variant="outlined" />
                    </ListItem>
                    <ListItem >
                        <TextField fullWidth id="outlined-basic" label="Member Name" variant="outlined" />
                    </ListItem>
                    <ListItem >
                        <TextField fullWidth id="outlined-basic" type="number" label="Member Mobile" variant="outlined" />
                    </ListItem>

                    {/* <Divider /> */}
                    <ListItem >
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Submit
                        </Button>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}
