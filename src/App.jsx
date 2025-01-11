
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import SecondNavBar from './components/SecondNavBar'
import MainContent from './components/MainContent'
import Recensioni from './components/MainContent'

function App() {


  return (
    <>
      <MyNavBar/> 
      <SecondNavBar/>
      <MainContent/>
      <Recensioni/>
      <App/>
    </>
  )
}

export default App
