import { useContext, useEffect, useState } from "react";

// supabase
import { getXp, logOut } from "../../services/supabase";


// session context
import { SessionContext } from "../../App";

// router
import { Link, redirect } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {

    const session = useContext(SessionContext);
    const username = session?.user?.user_metadata.full_name;
    const email = session?.user?.email;

    const [score,setScore] = useState({});

    useEffect(()=> {
        getXp(email).then(xp => {
            setScore(xp);
        })

    },[session]);

    return(
        <>
        <nav className="navbar">
            <ul className="navbar__nav">
               <Link to={"/"}>
                    <h2 className="navbar__title">RewardMonk</h2>
               </Link>
            </ul>
            {
                !(session === null) ?  <div className="navbar__user">
                <div className="navbar__icon">
                    <img className="icon" src={`https://api.dicebear.com/7.x/identicon/svg?seed=${username}`} alt={`${username}_profile`} />
                </div>
                <div className="navbar__xp">
                    <Link to={"/rewards"}>
                        <p className="xp">{score?.xp} Xp</p>
                    </Link>
                </div>
                <div className="navbar__side">
                    <Link to={"/"}>
                        <button   button onClick={()=> { logOut() }} className="btn__logout">Logout</button>
                    </Link>
                </div>
                </div> : null          
            }
        </nav>
        </>
    )
}