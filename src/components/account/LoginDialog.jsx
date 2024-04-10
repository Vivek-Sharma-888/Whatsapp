import React, { useContext } from 'react'
import { Dialog, Typography,Box, List, ListItem,styled} from '@mui/material'
import { qrCodeImage } from '../../constants/constant'
import {jwtDecode} from "jwt-decode";
import { AccountContext } from '../../context/AccountProvider';
import { GoogleLogin } from '@react-oauth/google';
import { addUsers } from '../../services/apis';

const DialogStyle ={
height:"96%",
width:"60%",
maxWidth:"100%",
maxHeight:"100%",
overflow:"none",
boxShadow:"none",
marginTop:"12%"

}

const Component = styled(Box)`
display:flex;
`
const Container =styled(Box)`
padding:56px 0 56px 56px ;
`
const Image =styled('img')({
    width:264,
     height:264,
     margin:'50px 0 0 50px'
})

const Title =styled(Typography)`
font-size:26px;
font-weight:300;
font-family:inherit;
color:#525252;
margin-bottom:25px;

`

const ListStyle =styled(List)`
& > li{
    padding:0;
    margin-top:15px;
    line-height:28px;
    color:#4a4a4a;
    font-size:18px;
}
`

const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess =async(res)=>{
        const decoded = jwtDecode(res.credential)
     setAccount(decoded) ;
     await addUsers(decoded);
    }

    const onLoginError =(res)=>{
     console.log("Login Failed",res)
    }
  return (
    <>
      <Dialog  open={true} PaperProps={{sx:DialogStyle}} hideBackdrop={true}>
     <Component>
        <Container>
        <Title>Use WhatsApp on your computer</Title>
        <ListStyle>
          <ListItem >
          1. Open WhatsApp on your phone
          </ListItem>  
          <ListItem >
          2. Tap Menu on Android, or Settings on iPhone
          </ListItem> 
          <ListItem >
          3. Tap Linked devices and then Link a device
          </ListItem> 
          <ListItem >
          4. Point your phone at this screen to capture the QR code
          </ListItem> 
        </ListStyle>
        </Container>
        <Box style={{position:'relative'}}>
        <Image  src={qrCodeImage} alt='QRcode'/>
        
<Box style={{position:"absolute",top:'50%',transform:'translate(25%,-25%)'}}>
<GoogleLogin 
  onSuccess={onLoginSuccess}
  onError={onLoginError}
/>
</Box>

        </Box>
     </Component>
    </Dialog>
    </>
  )
}

export default LoginDialog
