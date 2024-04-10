import React, { useContext,useState } from 'react'
import { Dialog,styled,Box } from '@mui/material'
import Header from './menu/Header'
import SearchMenu from './menu/SearchMenu'
import EmptyChat from './EmptyChat'
import Conversation from './menu/Conversation'
import ChatBox from './chatbox/ChatBox'
import { AccountContext } from '../../context/AccountProvider'


const DialogStyle ={
    height:"95%",
    width:"100%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    borderRadius:0,
    margin:"20px"
    }

    const Component =styled(Box)`
    display:flex;
    `

    const LeftComponent =styled(Box)`
    width:450px;
    `

    const RightComponent =styled(Box)`
    width:73%;
    border-left:1px solid rgba(0, 0, 0, 0.14);
    min-width:350px;
    height:100%;
    `


const ChatDialog = () => {

    const {person} = useContext(AccountContext);
    const [text,setText] =useState('')

  return (
    <>
    <Dialog  open={true} PaperProps={{sx:DialogStyle}} hideBackdrop={true}>
    <Component>
        <LeftComponent>
       <Header />
       <SearchMenu  text={text}/>
       <Conversation setText={setText} />
        </LeftComponent>
        <RightComponent>
        {Object.keys(person).length?<ChatBox />:<EmptyChat /> }
        </RightComponent>
    </Component>
    
   </Dialog>
   </>
     
  )
}

export default ChatDialog
