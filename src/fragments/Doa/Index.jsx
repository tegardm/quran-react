
const Index = ({data}) => {
    const {title,arabic,latin,translation} = data;
  return (
    <div tabIndex={0} className="collapse m-2 md:w-3/12 collapse-arrow border border-base-300 bg-base-200">
  <div className="collapse-title text-lg flex text-center items-center justify-center font-medium">
    {title}
  </div>
  <div className="collapse-content"> 
  <hr />
    <p className="mt-4 mb-2 text-right text-xl  ">{arabic}</p>
    <p className="text-left italic text-xs text-slate-600">{latin}</p>
    <br />
    <p className="text-left text-sm font-bold">Arti</p>
    <p className="text-xs text-left text-slate-400">{translation}</p>
  </div>
</div>
  )
}

export default Index