import React from 'react'

interface ImgPlanetProps {
  srcUrl: string | undefined
}

const ImgPlanet: React.FC<ImgPlanetProps> = ({srcUrl}) => {
  return (
    <>
      <img className='w-full' src={srcUrl} alt="img planet" />
    </>
  )
}

export default ImgPlanet
