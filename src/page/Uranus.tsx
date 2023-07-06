import { useEffect, useState } from 'react'
import { planet } from '../interface/planet'
import axios from 'axios'
import { motion } from 'framer-motion'
import uranusImg01 from '../assets/images/planet-uranus.svg'
import uranusImg02 from '../assets/images/planet-uranus-internal.svg'
import uranusImg03 from '../assets/images/planet-uranus-geology.png'
const Uranus = () => {
  const [info, setInfo] = useState<planet | undefined>(undefined)
  const [description, setDescription] = useState<string | undefined>('')

  useEffect(() => {
    axios
      .get('http://localhost:8080/planet/filter/uranus')
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err))
  }, [description])

  const handleDescription = (infoNav: string) => {
    if (infoNav === 'overview') {
      setDescription(info?.overview)
    } else if (infoNav === 'internalStructure') {
      setDescription(info?.internalStructure)
    } else if (infoNav === 'surfaceGeology') {
      setDescription(info?.surfaceGeology)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="container mx-auto mt-12  "
    >
      <div className="grid grid-cols-3  items-center">
        <div className="col-span-2">
          <div className="flex justify-center">
            {description === '' && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="w-90"
                src={uranusImg01}
                alt="img planet"
              />
            )}
            {description === info?.overview && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="w-90"
                src={uranusImg01}
                alt="img planet"
              />
            )}
            {description === info?.internalStructure && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="w-90"
                src={uranusImg02}
                alt="img planet"
              />
            )}
            {description === info?.surfaceGeology && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <div>
                  <img className="w-90" src={uranusImg02} />
                  <img
                    className="absolute ml-36 mt-48 top-96 w-48"
                    src={uranusImg03}
                    alt="img planet"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="w-80 col-span-1">
          <h1 className="text-white uppercase text-8xl">{info?.name}</h1>
          {description === '' ? (
            <p className="text-slate-400 text-xl h-36 mt-5">{info?.overview}</p>
          ) : (
            <p className="text-slate-400 text-xl h-36 mt-5">{description}</p>
          )}
          <p className="text-slate-500 text-lg mt-20">
            Source:
            <span className="text-slate-400 hover:text-emerald-400">
              Wikipedia
            </span>
          </p>
          <div className="flex flex-col gap-4 mt-10">
            <button
              onClick={() => handleDescription('overview')}
              className="text-white uppercase flex gap-8 text-2xl border border-emerald-400 w-full px-8 py-2 hover:bg-emerald-600 duration-500"
            >
              <p>01</p>
              <span>overview</span>
            </button>
            <button
              onClick={() => handleDescription('internalStructure')}
              className="text-white uppercase flex gap-8 text-2xl border border-emerald-400 w-full px-8 py-2 hover:bg-emerald-600 duration-500"
            >
              <p>02</p>
              <span>Internal structure</span>
            </button>
            <button
              onClick={() => handleDescription('surfaceGeology')}
              className="text-white uppercase flex gap-8 text-2xl border border-emerald-400 w-full px-8 py-2 hover:bg-emerald-600 duration-500"
            >
              <p>03</p>
              <span>Surface geology</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-20 px-10 mt-20 ">
        <div className="text-white border border-slate-400 p-10 w-full ">
          <h5 className="text-emerald-400 uppercase">rotation time</h5>
          <p className="text-5xl uppercase">{info?.rotationTime}</p>
        </div>
        <div className="text-white border border-slate-400 p-10 w-full ">
          <h5 className="text-slate-400 uppercase">revolution time</h5>
          <p className="text-5xl uppercase">{info?.revolutionTime}</p>
        </div>
        <div className="text-white border border-slate-400 p-10 w-full ">
          <h5 className="text-slate-400 uppercase">radius</h5>
          <p className="text-5xl uppercase">{info?.radius}</p>
        </div>
        <div className="text-white border border-slate-400 p-10 w-full ">
          <h5 className="text-slate-400 uppercase">average temp</h5>
          <p className="text-5xl uppercase">{info?.averageTemp}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Uranus
