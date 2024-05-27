import './App.css'
import FooterTitleHome from './components/Footer/FooterTitleHome'
import FooterTitleIn from './components/Footer/FooterTitleIn'
import NextTravelTitle from './components/NextTravel/NextTravelTitle'
import TravelRoadMap from './components/TravelRoadMap/TravelRoadMap'
import ExploreOtherOptionsTitle from './components/ExploreOtherOptions/ExploreOtherOptionsTitle'

function App() {
  return (
    <div className='App'>
      <TravelRoadMap />
      <ExploreOtherOptionsTitle />
      <FooterTitleIn />

      <NextTravelTitle />
      <FooterTitleHome />
    </div>
  )
}

export default App
