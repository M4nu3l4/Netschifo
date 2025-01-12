
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import SecondNavBar from './components/SecondNavBar'
import MainContent from './components/MainContent'
import Recensioni from './components/MainContent'
import Loading from './components/Loading'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Loading/>
      <MyNavBar/> 
      <SecondNavBar/>
      <MainContent/>
      <Recensioni/>
      <Footer/>
     
    </>
  )
}

export default App
