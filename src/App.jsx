import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AccountProvider from './context/AccountProvider'

function App() {
  const clientId ='500981305866-ojidmq5m94u0n2elif5h374utau3pnhh.apps.googleusercontent.com' ;

  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <Messenger />
    </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
