import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { defaultProfilePicture } from '../../../constants/constant'
import { MoreVert, Search } from '@mui/icons-material'

const Image = styled('img')({
    width:"40px",
    height:"40px",
    borderRadius:"50%",
})

const LeftBox =styled(Box)`
display:flex;
align-items:center;

`
const RightBox =styled(Box)`
display:flex;
align-items:center;
margin-left:auto;
& > svg{
    font-size:24px;
    padding:2px;
}
`

const MainBox =styled(Box)`
display:flex;
align-items:center;
height:44px;
padding:8px 16px ;
background:#f2f2f2;

`


const ChatHeader = ({person}) => {


  return (
    <MainBox>
        <LeftBox>
        <Image src={person.picture} alt='dp'/>
        <Box>
        <Typography >{person.name}</Typography>
        <Typography>Status Online</Typography>
        </Box>
        
        </LeftBox>
        <RightBox>
            <Search />
            <MoreVert />
        </RightBox>
    </MainBox>
  )
}

export default ChatHeader
