import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';


function Scroll(props) {
  const { children} = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      
      <Scroll {...props}>
        
          <Toolbar>            
          </Toolbar>
        
      </Scroll>
      <Toolbar />      
    </React.Fragment>
  );
}