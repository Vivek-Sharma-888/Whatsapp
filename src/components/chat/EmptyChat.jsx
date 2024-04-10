import React from 'react'
import { emptyChatImage } from '../../constants/constant'
import { Box,styled } from '@mui/material'


const Wrapper =styled(Box)`
display:flex;
justify-content:center;
background: #f8f9fa;
    padding: 30px 0;
    height:100%;
    overflow-y:hidden;
`

const Image =styled('img')({
    marginTop:'100px',
    width:"400px",

})

const EmptyChat = () => {

  return (
    <Wrapper>
        <Box>
            <Image src={emptyChatImage} alt='empty' />
        </Box>
    </Wrapper>
  )
}

export default EmptyChat
