import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'

import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../services/apis'


const ChatBox = () => {
     const [convId,setConvId] = useState({})
    const {person,account} =useContext(AccountContext);
   
    useEffect(()=>{
        const getConversationDetails =async()=>{
            const idData ={senderId:account.sub ,
                recieverId:person.sub} 
            const resdata = await getConversation(idData )
            console.log(resdata);

            setConvId(resdata._id);
            console.log(convId);
        }
        getConversationDetails();
    },[person.sub])

    return (
    <div>
      <ChatHeader person={person} />
      <Messages person={person} convId={convId}  />
      
    </div>
  )
}

export default ChatBox
