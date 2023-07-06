import { useEffect, useState } from 'react'
import GridData from './GridData'
import InfoPlanet from './InfoPlanet'
import { useParams } from 'react-router-dom'
import { planet } from '../../interface/planet'
import axios from 'axios'

const PlanetSection = () => {
  const { name } = useParams<{ name: string }>()
  const [infoPlanet, setInfoPlanet] = useState<planet>()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    axios
      .get(`http://localhost:8080/planet/filter/${name}`)
      .then((res) => setInfoPlanet(res.data))
      .then(() => setLoading(false))
  }, [ infoPlanet, loading, name])

  return loading ? (
    <main>
      <div className="flex justify-center p-20">
        <h1 className="text-white">...Loading</h1>
      </div>
    </main>
  ) : (
    <main>
      <div className="flex flex-col ">
        <div className="flex items-center">
          <InfoPlanet info={infoPlanet} />
        </div>
        <div className="p-10">
          <GridData
            title={infoPlanet?.name}
            rotationTime={infoPlanet?.rotationTime}
            revolutionTime={infoPlanet?.revolutionTime}
            radius={infoPlanet?.radius}
            averageTemp={infoPlanet?.averageTemp}
          />
        </div>
      </div>
    </main>
  )
}

export default PlanetSection
