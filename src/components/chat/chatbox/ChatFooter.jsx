import { AttachFileOutlined, EmojiEmotionsOutlined, Mic } from '@mui/icons-material'
import { Box,InputBase,styled } from '@mui/material'
import React,{useState} from 'react'


const MainBox = styled(Box)`
display:flex;
align-items:center;
`
const InputBox =styled(Box)`
width:100%;
`

const ChatFooter = ({msg,setMsg,sendText,file,setFile}) => {
    
   const handleChange=(e)=>{
    setFile(e.target.files[0])
    setMsg(e.target.files[0].name)
   }  
   
        
        
    
  return (
    <MainBox>
        <EmojiEmotionsOutlined />
        <label htmlFor='selectedFile'>
        <AttachFileOutlined />    
        </label>
        
        <input type='file' id='selectedFile' style={{display:"none"}} onChange={(e)=>handleChange(e)}/>
        <InputBox>
            <InputBase placeholder='Type your message' onChange={(e)=>setMsg(e.target.value)} value={msg} onKeyDown={(e)=>sendText(e) }  />
        </InputBox>
        <Mic />
    </MainBox>
  )
}

export default ChatFooter
