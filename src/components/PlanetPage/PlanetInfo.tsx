import React, { useEffect, useState } from 'react'
import { planet } from '../../interface/planet'
import Title from '../PlanetSection/Title'
import PlanetImg from './PlanetImg'


interface Props {
  info : planet | undefined
}


const PlanetInfo: React.FC<Props> = ({info}) => {

  return info ? (
    <div className="container mx-auto  ">
      <div className="grid grid-cols-3  items-center">
        <div className="col-span-2">
          <div className="flex justify-center">
            <PlanetImg />
          </div>
        </div>
        <div className="w-96 col-span-1">
          <h1 className="text-white uppercase text-8xl">{info?.name}</h1>
          <p className="text-slate-400 text-xl">{info?.overview}</p>
          <p className="text-slate-500 text-lg">
            Source:
            <span className="text-slate-400">Wikipedia</span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>loading...</h1>
    </div>
  )
}

export default PlanetInfo
