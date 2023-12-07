import { useContext, useEffect, useState } from "react";
import "./Card.css";
import { SessionContext } from "../../App";
import { getUsers } from "../../services/supabase";
import { useResolvedPath } from "react-router-dom";

export default function Card({cardIcon,cardXp,cardDate,isPositive}) {

    return(
        <div className={`card ${ !isPositive ? "grayscale" : "" }`}>
            <div className="card__top">
                {cardDate}
            </div>
            <div className="card__header">
                <div className="card__icon">{cardIcon}</div>
            </div>
            <div className="card__footer">
               { isPositive ? "" : "-" }{cardXp} xp
            </div>
        </div>
    )
}

export function CardContainer() {
    //  get list of emoji objs from database and display it here;
    const session = useContext(SessionContext);
    const email = session?.user?.user_metadata?.email;
    const [users,setUsers] = useState([]);

    useEffect(()=> {
        getUsers(email).then(user => {
            console.log(user);
            setUsers(user);
        })

        return () => {}
    },[useResolvedPath])

    
    return(
        <div className="card-container">

        {/* {JSON.stringify(users)} */}

        {users.map(user => {
            return <Card key={user?.emoji} cardIcon={user?.emoji} cardXp={user?.xp} cardDate={user?.date} isPositive={user?.isPositive}></Card>
        })}


        </div>
    )
}