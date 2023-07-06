interface Props {
  title: string | undefined
  data: number | undefined
}

const CardData: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="text-white border border-slate-400 p-10 w-full ">
      <h5 className="text-slate-400 uppercase">{title}</h5>
      <p className="text-4xl uppercase">{data}</p>
    </div>
  )
}

export default CardData
