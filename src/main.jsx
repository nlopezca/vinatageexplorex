import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import App from './App.jsx'
// import './index.css'

const {VITE_ApiGatewayURL, VITE_UserPoolId, VITE_ClientId} = import.meta.env;

Amplify.configure({
  API: {
    REST: {
      baseURI: {
        endpoint: VITE_ApiGatewayURL,
      }
    }
  },
  Auth: {
    Cognito: {
      userPoolId: VITE_UserPoolId,
      userPoolClientId: VITE_ClientId
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authenticator hideSignUp={true}>
  {({ signOut, user }) => (
  <App />
  )}
  </Authenticator>
</React.StrictMode>,
)
