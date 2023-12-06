import './App.css'
import Auth from './components/Auth/Auth'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import StatusCard from './components/StatusCard/StatusCard'
import { FolderContainer } from './components/FolderContainer/FolderContainer'

function App() {

  return (
    <>
    <Navbar username={"Kishor"}></Navbar>
    <FolderContainer></FolderContainer>
    {/* <Auth></Auth> */}
    {/* <StatusCard username={"Kishor"}></StatusCard> */}
    {/* <Card cardIcon={"😃"} cardXp={214} cardDate={"1st Day"}></Card>
    <Card cardIcon={"😎"} cardXp={414} cardDate={"2nd Day"}></Card>
    <Card cardIcon={"🌻"} cardXp={414} cardDate={"3rd Day"}></Card> */}
    </>
  )
}

export default App
