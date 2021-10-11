import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ApartmentIcon from '@mui/icons-material/Apartment';


const options = [
  
  'Atria Society',
  'Callisto  Society Society',
  'Dione  Society Society',
  'Ganymede  Society Society',
  'Hangouts Call  Society Society',
  'Luna  Society Society',
  'Oberon  Society Society',
  'Phobos  Society Society',
  'Pyxis  Society Society',
  'Sedna  Society Society',
  'Titania  Society Society',
  'Triton  Society Society',
  'Umbriel  Society Society',
];

const ITEM_HEIGHT = 85;

export default function SocietyMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
        endIcon={ <ArrowDropDownIcon />}
      >
        <ApartmentIcon/>
      </Button>


      
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      
      
    </div>
  );
}
