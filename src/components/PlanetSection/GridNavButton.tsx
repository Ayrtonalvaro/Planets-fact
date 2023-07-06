import NavButton from "./NavButton"
const GridNavButton = ({handleData} : {handleData: any}) => {
  return (
    <div className="flex flex-col gap-5">
      <NavButton info="overview"  handeleData={handleData} title="overview" num="01" />
      <NavButton info="internalStructure" handeleData={handleData} title="internal structure" num="02" />
      <NavButton info="surfaceGeology" handeleData={handleData} title="surface geology" num="03" />
    </div>
  )
}

export default GridNavButton
