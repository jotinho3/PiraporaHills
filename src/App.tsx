// import Header from './components/Header/Header'
import FrontalCards from './components/FrontalCards/FrontalCards'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MapSection from './components/MapSection/MapSection'
import ThreeTowerSection from './components/ThreeTowerSection/ThreeTowerSection'
import VideoBlankSection from './components/VideoBlankSection/VideoBlankSection'
import './global.scss'


function App() {

  return (
    <>
   
   <Header />
   <Hero />
   <FrontalCards />
   <VideoBlankSection />
   <ThreeTowerSection />
   <MapSection />

      
    </>
  )
}

export default App
