import earthImg from '../assets/images/planet-earth.svg'
import mercuryImg from '../assets/images/planet-mercury.svg'
import venusImg from '../assets/images/planet-venus.svg'
import marsImg from '../assets/images/planet-mars.svg'
import jupiterImg from '../assets/images/planet-jupiter.svg'
import saturnImg from '../assets/images/planet-saturn.svg'
import uranusImg from '../assets/images/planet-uranus.svg'
import neptuneImg from '../assets/images/planet-neptune.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
    >
      <div className="grid grid-cols-4 gap-20">
        <Link to="/mercury">
          <img
            src={mercuryImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
        <Link to="/venus">
          <img
            src={venusImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
        <Link to="/earth">
          <img
            src={earthImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
        <Link to="/mars">
          <img
            src={marsImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
        <Link to="/jupiter">
          <img
            src={jupiterImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
        <Link to="/saturn">
          <img
            src={saturnImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
        <Link to="/uranus">
          <img
            src={uranusImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
        <Link to="/neptune">
          <img
            src={neptuneImg}
            alt="earth"
            className="w-96 hover:scale-105 duration-300 cursor-pointer"
          />
        </Link>
      </div>
    </motion.div>
  )
}

export default Home
