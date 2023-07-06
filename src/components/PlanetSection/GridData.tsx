import CardData from "./CardData"

interface Props {
  title: string | undefined
  rotationTime: number | undefined
  revolutionTime: number | undefined
  radius: number | undefined
  averageTemp: number | undefined
}

const GridData: React.FC<Props> = ({rotationTime, revolutionTime, radius, averageTemp}) => {
  return (
    <div className="flex justify-around ">
      <CardData title="rotation time" data={rotationTime}/>
      <CardData title="revolution time" data={revolutionTime}/>
      <CardData title="radius" data={radius}/>
      <CardData title="average temp." data={averageTemp}/>
    </div>
  )
}

export default GridData
