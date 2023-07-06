import GridLinks from "./GridLinks"
import Logo from "./Logo"

const Nav = () => {
  return (
    <nav className="p-10 flex justify-between">
      <Logo />
      <GridLinks />
    </nav>
  )
}

export default Nav
