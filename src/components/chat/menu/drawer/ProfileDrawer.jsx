import React, { useContext } from 'react'
import { Drawer,Box, Typography,styled } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const DrawerStyle ={
    margin:'14px 20px ',
    height:'100%',
    width:'408px',

}

const Header =styled(Box)`
height:65px;
background:#00bf8a;
display:flex;
& > svg, & > p{
margin-top:auto;
padding:5px;
}
`





const ProfileDrawer = ({open,setOpen}) => {

    
    const handleClose =()=>{
        setOpen(false);
    }
  return (
      
<Drawer open={open} setOpen={setOpen} onClose={handleClose} PaperProps={{sx:DrawerStyle}} style={{zIndex:'1500'}} >
 <Header>
  <ArrowBack onClick={handleClose} />
  <Typography>Profile</Typography>
 </Header>
 <Profile />
</Drawer>
    
  )
}

export default ProfileDrawer
