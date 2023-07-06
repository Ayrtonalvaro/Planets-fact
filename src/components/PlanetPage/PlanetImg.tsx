import earthImg01 from '../../assets/images/planet-earth.svg'
import mercuryImg01 from '../../assets/images/planet-mercury.svg'
import venusImg01 from '../../assets/images/planet-venus.svg'
import marsImg01 from '../../assets/images/planet-mars.svg'
import jupiterImg01 from '../../assets/images/planet-jupiter.svg'
import saturnImg01 from '../../assets/images/planet-saturn.svg'
import uranusImg01 from '../../assets/images/planet-uranus.svg'
import neptuneImg01 from '../../assets/images/planet-neptune.svg'
import earthImg02 from '../../assets/images/planet-earth-internal.svg'
import mercuryImg02 from '../../assets/images/planet-mercury-internal.svg'
import venusImg02 from '../../assets/images/planet-venus-internal.svg'
import marsImg02 from '../../assets/images/planet-mars-internal.svg'
import jupiterImg02 from '../../assets/images/planet-jupiter-internal.svg'
import saturnImg02 from '../../assets/images/planet-saturn-internal.svg'
import uranusImg02 from '../../assets/images/planet-uranus-internal.svg'
import neptuneImg02 from '../../assets/images/planet-neptune-internal.svg'


interface PlanetImgProps {
  namePlanet: string | undefined
}

const PlanetImg: React.FC<PlanetImgProps> = ({namePlanet}) => {
  return (
    <div>
      <>
        <img className="w-80" src={earthImg01}  alt="img planet" />
      </>
    </div>
  )
}

export default PlanetImg
