import { styled,Box } from '@mui/material'
import React, { useContext, useEffect,useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import ChatFooter from './ChatFooter'
import { getMessage, newMessage, uploadFile } from '../../../services/apis'
import MessageDisplay from './MessageDisplay'

const Component = styled(Box)`
background-image:url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
background-size:50%;
`
const Wrapper =styled(Box)`
height:79vh;
overflow-y:scroll;

`

const Messages = ({convId}) => {
 
    const {account,person} =useContext(AccountContext) ;
    const [msg,setMsg] = useState(''); 
    const [flag,setFlag] = useState(false)
    const [displaymessage,setDisplaymessage] =useState([])
    const [file,setFile] = useState();
       console.log(convId);

       useEffect(()=>{

        const getMessages =async()=>{

           const allmsg = await getMessage(convId);
           console.log(allmsg)
           setDisplaymessage(allmsg)

        }
       convId && getMessages();

       },[convId,person.sub,flag])

const sendText = async(e)=>{
    const code = e.keyCode || e.which ;
    console.log(code);
    const uploadData = new FormData();
    uploadData.append('file',file);
    uploadData.append('name',file.name);
    if(code===13){
        const messageData ={
            senderId:account.sub ,
            recieverId:person.sub , 
            messageId:convId,
            type:'text',
            text:msg,
        }
      console.log(messageData)  
   await newMessage(messageData)
   setFlag(!flag);
   await uploadFile(uploadData);
 }

}
    
  return (
    <>
    <Component>
        <Wrapper>
 {
    displaymessage?.map((message)=>{
        return (
            < MessageDisplay message={message} />
        )
    })
 }
        </Wrapper>
        <ChatFooter sendText={sendText} msg={msg} setMsg={setMsg} file={file} setFile={setFile} />
    </Component>
    
    </>
  )
}

export default Messages
