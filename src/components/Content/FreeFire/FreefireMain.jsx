import { authService } from '../../../Config/myFB'
import React, { useState,useEffect } from 'react'
import FreefireContent from './FreefireContent'
import FreefireAuth from './FreefireAuth'

const FreefireMain = () => {
    const [init, setinit] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(()=>{
        authService.onAuthStateChanged((user)=>{
            if(user){
                setisLoggedIn(true);
            }else{
                setisLoggedIn(false);
            }
            setinit(true);
        });
    },[]);
/*     setInterval(()=>{
        console.log(authService.currentUser);

    },2000); */

    return (
        <>  
            {init? isLoggedIn? <FreefireContent/>: <FreefireAuth/>: "Initalizing..."}
        </>
    );
}

export default FreefireMain;