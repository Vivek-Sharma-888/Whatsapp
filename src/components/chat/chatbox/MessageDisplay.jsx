import React, { useContext } from 'react'
import {Box,styled,Typography} from '@mui/material'
import { formatDate } from '../../utils/FormatDate'
import { AccountContext } from '../../../context/AccountProvider'

const Comp =styled(Box)`
background:#f2f2f2;
max-width:60%;
padding:5px;
width:fit-content;
display:flex;
word-break:break-word;
margin-left:auto;
border-radius:10px;

`
const LeftComp =styled(Box)`
background:#f2f2f2;
max-width:60%;
padding:5px;
width:fit-content;
display:flex;
word-break:break-word;
border-radius:10px;

`

const MessageDisplay = ({message}) => {

 const {account}=useContext(AccountContext);

  return ( <>
    { account.sub === message.senderId ? <Comp>
      <Typography>{message.text}</Typography>
      <Typography>{formatDate(message.createdAt)}</Typography>
    </Comp> :
    <LeftComp>
    <Typography>{message.text}</Typography>
    <Typography>{formatDate(message.createdAt)}</Typography>
  </LeftComp>
    
  }
  </>
  )
}

export default MessageDisplay
