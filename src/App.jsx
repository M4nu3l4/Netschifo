
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import SecondNavBar from './components/SecondNavBar'
import MainContent from './components/MainContent'
import Recensioni from './components/MainContent'
import Loading from './components/Loading'

function App() {


  return (
    <>
    <Loading/>
      <MyNavBar/> 
      <SecondNavBar/>
      <MainContent/>
      <Recensioni/>
     
    </>
  )
}

export default App
