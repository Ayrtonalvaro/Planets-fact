import Title from './Title'
import GridNavButton from './GridNavButton'
import { planet } from '../../interface/planet'
import { useEffect, useState } from 'react'
import ImgPlanet from './ImgPlanet'
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
import { useParams } from 'react-router-dom'


interface InfoPlanetProps {
  info: planet | undefined
}

const InfoPlanet: React.FC<InfoPlanetProps> = ({ info }) => {
  const { name } = useParams<{ name: string }>()
  const [srcUrl, setSrcUrl] = useState<string | undefined>(earthImg01)
  
  const [description, setDescription] = useState<string | undefined>(
    'loading...'
  )
  const handleData = (infoNav: string) => {
    if (infoNav === 'overview') {
      setDescription(info?.overview)
      setSrcUrl(handleImg(infoNav))
    } else if (infoNav === 'internalStructure') {
      setDescription(info?.internalStructure)
      setSrcUrl(handleImg(infoNav))
    } else if (infoNav === 'surfaceGeology') {
      setDescription(info?.surfaceGeology)
      setSrcUrl(handleImg(infoNav))
    }
  }
  const handleImg = (info: string) => {
    switch (name) {
      case 'earth':
        if (info === 'overview') return earthImg01
        if (info === 'internalStructure') return earthImg02
        if (info === 'surfaceGeology') return earthImg02
        break
      case 'mercury':
        if (info === 'overview') return mercuryImg01
        if (info === 'internalStructure') return mercuryImg02
        if (info === 'surfaceGeology') return mercuryImg02
        break
      case 'venus':
        if (info === 'overview') return venusImg01
        if (info === 'internalStructure') return venusImg02
        if (info === 'surfaceGeology') return venusImg02
        break
      case 'mars':
        if (info === 'overview') return marsImg01
        if (info === 'internalStructure') return marsImg02
        if (info === 'surfaceGeology') return marsImg02
        break
      case 'jupiter':
        if (info === 'overview') return jupiterImg01
        if (info === 'internalStructure') return jupiterImg02
        if (info === 'surfaceGeology') return jupiterImg02
        break
      case 'saturn':
        if (info === 'overview') return saturnImg01
        if (info === 'internalStructure') return saturnImg02
        if (info === 'surfaceGeology') return saturnImg02
        break
      case 'uranus':
        if (info === 'overview') return uranusImg01
        if (info === 'internalStructure') return uranusImg02
        if (info === 'surfaceGeology') return uranusImg02
        break
      case 'neptune':
        if (info === 'overview') return neptuneImg01
        if (info === 'internalStructure') return neptuneImg02
        if (info === 'surfaceGeology') return neptuneImg02
        break
    }
  }

  useEffect(() => {
    handleData('overview')
  }, [name])

  return info ? (
    <div className="flex items-center">
      <ImgPlanet srcUrl={srcUrl} />
      <div className="text-white px-36 flex flex-col gap-5">
        <Title name={`${info.name}`} />
        <p className="text-xl">{description}</p>
        <h6>
          Source{' '}
          <a target="blak_" href={`${info.sourceWiki} `}>
            Wikipedia
          </a>
        </h6>
        <GridNavButton handleData={handleData} />
        
      </div>
    </div>
  ) : (<div>loading...</div>)
}

export default InfoPlanet
