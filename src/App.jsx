import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavBar from './components/MyNavBar'
import SecondNavBar from './components/SecondNavBar'
import MainContent from './components/MainContent'
import MovieDetails from './components/MovieDetails'
import TVShows from './components/TVShows'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  return (
    <Router>
      <Loading />
      <MyNavBar />
      <SecondNavBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
