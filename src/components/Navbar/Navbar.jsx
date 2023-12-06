import "./Navbar.css";
export default function Navbar({username}) {
    return(
        <>
        <nav className="navbar">
            <ul className="navbar__nav">
                <h2 className="navbar__title">RewardMonk</h2>
            </ul>
            <div className="navbar__user">
            <div className="navbar__icon">
                <img className="icon" src={`https://api.dicebear.com/7.x/identicon/svg?seed=${username}`} alt={`${username}_profile`} />
            </div>
            <div className="navbar__xp">
                0 Xp
            </div>
            </div>
        </nav>
        </>
    )
}