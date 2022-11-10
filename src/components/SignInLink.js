import { useState } from 'react';
import SignIn from './SignIn'
import Products from './Products';
import Contractors from './Contractors';


function SignInLink() {
  const [token, setToken] = useState();
  const [isAdmin, setAdmin] = useState();

  if(!token) {
    return <SignIn setToken={setToken} setAdmin={setAdmin} />
  }
  
  return (
   
   <div>               
       {
         token && <Contractors isAdmin={isAdmin} />       
       }
    </div> 
    
  );
}

export default SignInLink;