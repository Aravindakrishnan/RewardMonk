import "./StatusCard.css";
export default function StatusCard({username}) {
    return(
        <div className="status-card">
            <h2>Good Morning {username}! 🌅</h2>
        </div>
    )
}