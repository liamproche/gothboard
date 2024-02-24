import './MainComponent.css';
import { useState } from 'react';

function MainComponent() {
    const [auth, setAuth] = useState({})
    const getAuth = async(code) =>{
        try{
            const authResponse = await fetch("https://api.streamelements.com/oauth2/authorize" + 
            new URLSearchParams({
               'client_id': process.env.SE_CLIENT_ID,
               'client_secret': process.env.CLIENT_SECRET,
               'grant_type': 'authorization_code',
               'code': code,
               'redirect_uri': REDIRECT_URI
            })
            )
            console.log('Authentication data: ', data)
        }catch(err){
            console.log(err)
        }
    }
    getAuth(code)
  
  
  
    return (
   <div className='MainComponent'>
    <h1>This is the MainComponent</h1>
   </div>
  );
}

export default MainComponent;