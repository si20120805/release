import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const index = () => {

  

  
  const Dbouncing=(getData,d)=>{
   
    let timer;
    return function (...args){
      console.log('args',args)
      if(timer) clearTimeout(timer);
      timer=setTimeout(()=>{
        getData();
      },d)
    }
  }

  const getData=()=>{


    console.log('get Data')
    
  }
  const BetterFunction=Dbouncing(getData,1000);
  
  return (
    <>
    <Stack direction="row" spacing={2}>
    <Button color="secondary">Secondary</Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
  </Stack>
  <br/>
  <input type='text' onChange={BetterFunction}></input><span>Add text</span>
    
    
    </>
  )
}

export default index