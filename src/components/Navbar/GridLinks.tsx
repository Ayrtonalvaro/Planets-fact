import NavLink from "./NavLink"


const GridLinks = () => {
  return (
    <ul className="flex gap-5">
      <NavLink
        name="home"
        hoverColor="text-white uppercase hover:text-zinc-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="mercury"
        hoverColor="text-white uppercase hover:text-zinc-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="venus"
        hoverColor="text-white uppercase hover:text-yellow-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="earth"
        hoverColor="text-white uppercase hover:text-violet-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="mars"
        hoverColor="text-white uppercase hover:text-red-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="jupiter"
        hoverColor="text-white uppercase hover:text-orange-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="saturn"
        hoverColor="text-white uppercase hover:text-amber-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="uranus"
        hoverColor="text-white uppercase hover:text-emerald-400 hover:cursor-pointer duration-300 text-2xl"
      />
      <NavLink
        name="neptune"
        hoverColor="text-white uppercase hover:text-sky-400 hover:cursor-pointer duration-300 text-2xl"
      />
    </ul>
  )
}

export default GridLinks
