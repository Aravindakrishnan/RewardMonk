import { useState } from "react";
import supabase from "../../services/supabase";
import "./Auth.css";


export default function Auth() {
    const [loading, setLoading] = useState(false);


    return(
        <div className="auth-container">
            <button className="auth__btn">Signup with Google <ion-icon name="logo-google"></ion-icon></button>
            <p className="auth__desc">Join the RewardMonk Community in single Click 😉.</p>
        </div>
    )
}