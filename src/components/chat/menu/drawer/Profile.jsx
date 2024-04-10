import { Box,Typography,styled } from '@mui/material'
import React,{useContext} from 'react'
import { AccountContext } from '../../../../context/AccountProvider'

const ImageBox =styled(Box)`
display:flex;
justify-content:center;
background:#f2f2f2;
`

const BoxWrapper =styled(Box)`
background:#fff;
padding:15px 10px;
& > :first-child{
    font-size:12px;
    font-weight:300;
    color:#000;
};
& > :last-child{
    font-size:16px;
    font-weight:500;
}

`

const DescriptionWrapper =styled(Box)`
    font-size:10px;
    font-weight:200;
    color:#000;
    padding:15px ;
    background:#f2f2f2;
`

const Image =styled('img')({
    width:'150px',
    height:'150px',
    borderRadius:'50%',
    padding:'20px 0'
})

const Profile = () => {

    const {account} = useContext(AccountContext)


  return (
    <>
        <ImageBox>
        <Image src={account.picture} alt='dp' />
        </ImageBox>
        <BoxWrapper >
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DescriptionWrapper>
            <Typography>
            This is not your username or pin. This name will be visible to your WhatsApp contacts.
            </Typography>
        </DescriptionWrapper>
        <BoxWrapper>
        <Typography>About</Typography>
            <Typography>Busy</Typography>
        </BoxWrapper>
    </>
  )
}

export default Profile
