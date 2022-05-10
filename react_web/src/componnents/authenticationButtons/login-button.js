import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../css/Home-Page.css';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (

  
      <button
        className="rainbow-box in" id='login'
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
  
  );
};

export default LoginButton;