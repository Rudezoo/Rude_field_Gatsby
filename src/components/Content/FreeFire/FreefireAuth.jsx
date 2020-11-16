import { authService, firebaseInstance } from '../../../Config/myFB'
import React, { useState } from 'react'
import { navigate } from "gatsby"

const Freefire = () => {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [newAccount, setnewAccount] = useState(true);
    const [error, seterror] = useState("");

    const OnChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setemail(value);
        } else if (name === "password") {
            setpassword(value);
        }
    }

    const OnSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                //create Account...
                data = await authService.createUserWithEmailAndPassword(email, password);
                navigate('/app/Freefire/Profile');
            } else {
                //Login...
                data = await authService.signInWithEmailAndPassword(email,password);
                navigate('/app/Freefire/Profile');
            }
            console.log(data);
        } catch (error) {
            seterror(error.message);
        }

    }

    const toggleAccount = () => {
        setnewAccount((prev) => !prev);
    }

    const OnSocialClick=async(e)=>{
        const {name}=e.target;

        let provider;

        if(name ==="Google"){
            console.log("Google");
            provider=new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name ==="Github"){
            console.log("Github");
            provider=new firebaseInstance.auth.GithubAuthProvider();
        }

        const data=await authService.signInWithPopup(provider);
        console.log(data);
    }
    
    return (
        <>  
            <div>
                <form onSubmit={OnSubmit}>
                    <input name="email" type="text" placeholder="Email" required value={email} onChange={OnChange}></input>
                    <input name="password" type="password" placeholder="password" required value={password} onChange={OnChange}></input>
                    <div>
                        <input type="submit" value={newAccount ? "Create Account" : "Log In"}></input>
                    </div>

                </form>
                <div>
                    <span onClick={toggleAccount}>{newAccount ? "sign in" : "create account"}</span>
                </div>

            </div>

            <div>
                <button name="Google" onClick={OnSocialClick}>Continue with Google</button>
                <button name="Github" onClick={OnSocialClick}>Continue with Github</button>
            </div>
            {error}
        </>
    );
}

export default Freefire;