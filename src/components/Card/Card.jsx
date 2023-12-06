import "./Card.css";
export default function Card({cardIcon,cardXp,cardDate}) {
    return(
        <div className="card">
            <div className="card__top">
                {cardDate}
            </div>
            <div className="card__header">
                <div className="card__icon">{cardIcon}</div>
            </div>
            <div className="card__footer">
                {cardXp} xp
            </div>
        </div>
    )
}