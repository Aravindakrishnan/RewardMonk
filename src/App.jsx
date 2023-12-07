import './App.css'

// Supabase
import supabase, {getSession, getUsersEmoji, getXp} from './services/supabase';

// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Components
import Auth from './components/Auth/Auth'
import Card, { CardContainer } from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import StatusCard from './components/StatusCard/StatusCard'
import { FolderContainer } from './components/FolderContainer/FolderContainer'
import QuestionPoll from './components/QuestionPoll/QuestionPoll'
import { createContext, useContext, useEffect, useState } from 'react';

export const SessionContext = createContext();

function App() {

  const [session, setSession] = useState({});

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

  return (
    <SessionContext.Provider value={session}>
    <Navbar></Navbar>
    {!session ? null : <StatusCard></StatusCard> }
    {/* {JSON.stringify(session)} */}
    <Routes>
        <Route path="/" element={ !session ? <Auth></Auth> : <QuestionPoll></QuestionPoll> } />
        <Route path="/rewards" element={ !session ? null : <CardContainer></CardContainer>  } />
    </Routes>
    {/* <CardContainer></CardContainer> */}
    {/* <QuestionPoll></QuestionPoll> */}
    {/* <Card cardIcon={emoji} cardXp={xp} cardDate={date}></Card> */}
    {/* <Card cardIcon={"😎"} cardXp={414} cardDate={"2nd Day"}></Card>
    <Card cardIcon={"🌻"} cardXp={414} cardDate={"3rd Day"}></Card> */}
    </SessionContext.Provider>
  )
}

export default App
