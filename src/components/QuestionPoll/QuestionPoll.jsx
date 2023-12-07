import { useContext, useEffect, useState } from "react";
import "./QuestionPoll.css";
import { getRandomEmojiWithXp } from "../../services/emojiGenerator";
import { insert, updateXp } from "../../services/supabase";
import { SessionContext } from "../../App";

export default function QuestionPoll() {

    const [response, setResponse] = useState({});
    const [session, setSession] = useState(true);

    // reward emoji 
    const [emoji, setEmoji] = useState("");
    const [xp, setXp] = useState(0);
    const [date, setDate] = useState("");

    // session 
    const sess = useContext(SessionContext);
    const email = sess?.user?.user_metadata.email;

    useEffect(() => {
        const isEmpty = Object.keys(response).length === 0;

        if (!isEmpty) {
            const emojiObj = getRandomEmojiWithXp();
            setEmoji(emojiObj.emoji);
            setXp(emojiObj.xp);
            setDate(emojiObj.date);

            // Store the emoji in the Database
            const insertObject = { ...emojiObj, ...response, email };
            console.log(insertObject);
            insert(insertObject); // insert in DB 
            updateXp({email : email, xp : insertObject.xp, ...response}) // update the Xp
            setSession(false);
        }

    }, [response]);

    return (
        <div className="question-container">
            {session ?
                <div>
                    <h1 className="question__title">Did you achieve great things today?</h1>
                    <div className="answer__container">
                        <button onClick={() => { setResponse({ isPositive: true }) }} className="btn yes__btn">Yes, I accomplished a lot today.</button>
                        <button onClick={() => { setResponse({ isPositive: false }) }} className="btn no__btn">No, today didn't go as planned, but I'll make tomorrow better.</button>
                    </div>
                </div> :

                <div>
                    <h1 className="question__title">You have already Completed for Today</h1>
                    <p className="date__desc">{new Date().toString()}</p>
                </div>}
        </div>
    )
}
