import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface NavButtonProps {
  title: string
  num: string
  handeleData: any
  info: string
}


const NavButton: React.FC<NavButtonProps> = ({
  title,
  num,
  handeleData,
  info,
}) => {
  const { name } = useParams<{ name: string }>()
  const [select, setSelect] = useState<boolean>(false)
  const [buttonStyle, setButtonStyle] = useState<string>('')
  
  useEffect(() => {
    switch (name) {
      case 'mercury':
        setButtonStyle(
          'flex gap-2 items-center py-3 pl-10 border border-zinc-500  w-full h-full flex gap-5 text-xl duration-300 hover:bg-zinc-700'
        )
        break
      case 'venus':
        setButtonStyle(
          ' flex gap-2 items-center py-3 pl-10  border border-yellow-500 w-full h-full flex gap-5 text-xl duration-300 hover:bg-yellow-700'
        )
        break
      case 'earth':
        setButtonStyle(
          'flex gap-2 items-center py-3 pl-10  border border-violet-500  w-full h-full flex gap-5 text-xl duration-300 hover:bg-violet-700'
        )
        break
      case 'mars':
        setButtonStyle(
          'flex gap-2 items-center py-3 pl-10  border border-red-500 w-full h-full flex gap-5 text-xl duration-300 hover:bg-red-700'
        )
        break
      case 'jupiter':
        setButtonStyle(
          'flex gap-2 items-center py-3 pl-10  border border-orange-500  w-full h-full flex gap-5 text-xl duration-300 hover:bg-orange-700'
        )
        break
      case 'saturn':
        setButtonStyle(
          'flex gap-2 items-center py-3 pl-10 border border-amber-500 w-full h-full flex gap-5 text-xl duration-300 hover:bg-amber-700'
        )
        break
      case 'uranus':
        setButtonStyle(
          'flex gap-2 items-center py-3 pl-10  border border-emerald-500  w-full h-full flex gap-5 text-xl duration-300 hover:bg-emerald-700'
        )
        break
      case 'neptune':
        setButtonStyle(
          'flex gap-2 items-center py-3 pl-10  border border-sky-500  w-full h-full flex gap-5 text-xl duration-300 hover:bg-sky-700'
        )
        break
    }
  }, [name, select])

  return select ? (
    
      <button
        onClick={() => handeleData(info)}
        className={buttonStyle}
      >
        <span className="font-bold text-gray-400">{num}</span>
        <p className="font-bold text-md">{title}</p>
      </button>
    
  ) : (
    
      <button
        onClick={() => handeleData(info)}
        className={buttonStyle}
      >
        <span className="font-bold text-gray-400">{num}</span>
        <p className="font-bold text-md">{title}</p>
      </button>
  )
}

export default NavButton
