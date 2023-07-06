import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <>
      <Link to={`/`}>
        <h1 className="uppercase text-white text-2xl ">The planets</h1>
      </Link>
    </>
  )
}

export default Logo
