import React,{useState} from 'react'
import {MoreVert } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

const HeaderMenu = ({setOpen}) => {

    const [menuopen,setMenuopen] =useState()
    const handleClose =()=>{
        setMenuopen(false)
    }
    const handleClick =(e)=>{
        setMenuopen(e.currentTarget)
    }
  return (
    <div>
      <MoreVert  onClick={handleClick}/>
      <Menu
        
        anchorEl={menuopen}
        keepMounted
        open={menuopen}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
        
      >
        <MenuItem onClick={()=>{handleClose(); setOpen(true); }} >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default HeaderMenu
