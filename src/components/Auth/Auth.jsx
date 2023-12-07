import supabase, { Login } from "../../services/supabase";
import { useState } from "react";
import "./Auth.css";

export default function Auth() {

    return(
        <div className="auth-container">
            <button onClick={()=> { Login() }} className="auth__btn">Signup with Google <ion-icon name="logo-google"></ion-icon></button>
            <p className="auth__desc">Join the RewardMonk Community in single Click 😉.</p>
        </div>
    )
}