import Nav from './components/Navbar/Nav'
import PlanetSection from './components/PlanetSection/PlanetSection'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Mercury from './page/Mercury'
import Venus from './page/Venus'
import Earth from './page/Earth'
import Mars from './page/Mars'
import Jupiter from './page/Jupiter'
import Saturn from './page/Saturn'
import Uranus from './page/Uranus'
import Neptune from './page/Neptune'



function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full bg-black bg-[url('./assets/images/background-stars.svg')]">
        <Nav />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mercury" element={<Mercury />} />
            <Route path="/venus" element={<Venus />} />
            <Route path="/earth" element={<Earth />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/jupiter" element={<Jupiter />} />
            <Route path="/saturn" element={<Saturn />} />
            <Route path="/uranus" element={<Uranus />} />
            <Route path="/neptune" element={<Neptune />} />
            
          </Routes>
        </div>
        <footer>
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center py-10">
              <p className="text-white text-lg">created by</p>
              <p className="text-white text-lg">Ayrton Alvaro</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
