import React, { useContext } from 'react'
import {AppBar,Toolbar} from '@mui/material'
import LoginDialog from './account/LoginDialog'
import styled from '@emotion/styled'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from './chat/ChatDialog'

const LoginHeader =styled(AppBar)`
height:180px;
background-color:#00bf8a;
box-shadow:none;
`
const Header =styled(AppBar)`
height:100px;
background-color:#00bf8a;
box-shadow:none;
`

const Messenger = () => {

    const {account} =useContext(AccountContext)

  return (
    <div>
       { account ? 
        <><Header>
        <Toolbar>

        </Toolbar>
      </Header>
    
      <ChatDialog />
        </>
        : 
       
       <><LoginHeader>
        <Toolbar>

        </Toolbar>
      </LoginHeader>
    
        <LoginDialog />
        </>
        }
    </div>
  )
}

export default Messenger
