import { Link } from "react-router-dom"


interface NavLinkProps {
  name: string,
  hoverColor:string
}

const NavLink: React.FC<NavLinkProps> = ({name, hoverColor}) => {

  

  if(name === 'home') return (
    <>
      <Link to={`/`}>
        <p
          className={hoverColor}
        >
          {name}
        </p>
      </Link>
    </>
  )

  return (
    <>
      <Link to={`/${name}`}>
        <p
          className={`text-white uppercase hover:${hoverColor} hover:cursor-pointer duration-300 text-2xl`}
        >
          {name}
        </p>
      </Link>
    </>
  )
}

export default NavLink
