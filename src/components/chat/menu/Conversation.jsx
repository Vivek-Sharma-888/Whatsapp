import React, { useEffect,useState,useContext } from 'react'
import { getUsers } from '../../../services/apis'
import ContactConversation from './ContactConversation'
import { AccountContext } from '../../../context/AccountProvider'
import { Box,Divider } from '@mui/material'

const Conversation = ({text}) => {
   const [users,setUsers] = useState([])
   const {account}=useContext(AccountContext)
    useEffect(()=>{
      const fetchUsers =async()=>{
       let response = await getUsers();
    //    const filteredUsers = response.filter((user)=>user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(response);
        console.log(response)
      }  
     fetchUsers();
     
    },[])


  return (
    <Box>
      {users?.map((user)=>(user.sub!==account.sub && <><ContactConversation user={user} /> <Divider /></>)
      )}
    </Box>
  )
}

export default Conversation
