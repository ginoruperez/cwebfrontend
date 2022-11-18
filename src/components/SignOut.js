import React from 'react';
import Main from './Main';

const SignOut = () => {
   return (
      <div className="App">
        
         <div>                        
            <div>{localStorage.removeItem('username')}</div>
            < Main />         
         </div>
      </div>
   );
};
export default SignOut;