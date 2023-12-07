import { useContext } from "react";
import { getGreeting } from "../../services/greetings";
import "./StatusCard.css";
import { SessionContext } from "../../App";
export default function StatusCard() {

    const session = useContext(SessionContext);
    const username = session?.user?.user_metadata?.full_name;

    return(
        <div className="status-card">
            <h2>{getGreeting()} {username}! 🌅</h2>
        </div>
    )
}