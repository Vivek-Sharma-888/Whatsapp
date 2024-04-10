import { Search } from '@mui/icons-material'
import { InputBase,Box, styled } from '@mui/material'
import React from 'react'

const SearchMenu = ({setText}) => {
    const Component =styled(Box)`
    display:flex ;
    background:#fff;
    align-items:center;
    height:44px;
    border-bottom:1px solid #f2f2f2 ;
    `

const Wrapper =styled(Box)`
position:relative;
background:#f2f2f2;
width:100%;
margin:0 5px;
height:36px;
border-radius:4px;

` 
const Icon =styled(Box)`
position:absolute;
padding:8px;
height:100%;
color:#919191;
`   
const InputBaseStyle =styled(InputBase)`
margin-left:20px;
height:15px ;
padding-left:65px;
width:100%;
font-size:15px;


`

  return (
    <Component>
        <Wrapper>
            <Icon>
                <Search fontSize='small' />
            </Icon>
            <InputBaseStyle placeholder='Search or Start new chat'  onChange={(e)=>setText(e.target.value)}/>
        </Wrapper>
    </Component>
  )
}

export default SearchMenu
