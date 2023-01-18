import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
  return (
    <Box >
        
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" >
            POOL DETAILS
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}