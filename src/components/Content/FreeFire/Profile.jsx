import React from 'react'
import { authService } from '../../../Config/myFB'
import { navigate } from "gatsby"

const FreeProfile=()=>{

   
    const OnLogoutClick=()=>{
        authService.signOut();
        navigate('/app/Freefire');
    }


    return(
        <>  
  
            Profile
            <button onClick={OnLogoutClick}>Logout</button>
        </>
    )
}

export default FreeProfile;