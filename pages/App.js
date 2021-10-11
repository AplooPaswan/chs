import React from 'react'
import Menu from './AppBar'
import SimpleAppBar from '../pages/UI/Before/AppBar'
import { Box } from '@mui/system'
import { Paper } from '@mui/material'
import top from '../pages/img/top.jpg';

const App = () => {
  return (
    <div>
      <SimpleAppBar />
      <br />
      <Paper

        component="img"
        sx={{
          height: '50%',
          width: '100%',
          maxHeight: { xs: 'auto', md: 'auto' },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        // src={require('../pages/img/top.jpg')}
      />

    </div>
  )
}

export default App
