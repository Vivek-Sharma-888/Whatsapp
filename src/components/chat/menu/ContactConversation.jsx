import { Box, Divider, styled } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation } from '../../../services/apis'

const Component =styled(Box)`
display:flex;
`
const Image = styled('img')({
    width:"40px",
    height:"40px",
    borderRadius:"50%"
})

const ContactConversation = ({user}) => {

    const {setPerson,account}= useContext(AccountContext);
    const conversationId ={senderId:account.sub,recieverId:user.sub}
    const getUser =async()=>{
        setPerson(user)
        await setConversation(conversationId)
    }

  return (
    <Component onClick={getUser}>
        <Box>
        <Image src={user.picture} alt='dp' />
        </Box>
        <Box>
        {user.name}
       </Box>
       
    </Component>
  )
}

export default ContactConversation
