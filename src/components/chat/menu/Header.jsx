import { Box, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import {Chat} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import ProfileDrawer from './drawer/ProfileDrawer/';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    justify-content:space-between;
`;

const Image =styled('img')({
    width:"44px",
    height:"44px",
    borderRadius:"50%"
})

const Wrapper =styled(Box)`
display:flex;

`

const Header = () => {
    const {account} = useContext(AccountContext)
    const [open,setOpen] =useState(false)

    const handleClick =()=>{

        setOpen(true)
    }

  return (
    <>
    <Component>
    
     <Image src={account.picture} alt='dp'  onClick={handleClick}/>
     <Wrapper >
     <Chat />
     <HeaderMenu setOpen={setOpen} />
     </Wrapper>
     
     </Component> 
     <ProfileDrawer open={open} setOpen={setOpen}/>
     </>
  )
}

export default Header
