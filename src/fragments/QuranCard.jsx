import { Link } from "react-router-dom";
import Button from "../elements/Button"
        // eslint-disable-next-line
const QuranCard = ({data}) => {
          // eslint-disable-next-line
            // eslint-disable-next-line
            let {number,description,revelation,name,translation} = data;
        // eslint-disable-next-line
    let keterangan = description.substring(0,200)+'...'
   
  return (
    <div className="p-5 m-2 rounded-lg border-slate-600 flex flex-col text-center items-center justify-between md:w-3/12 border">
        <h1 className="text-lg">{name} ({revelation})</h1>
        <hr className="my-2" />
        <p>{translation} </p>
        <p dangerouslySetInnerHTML={{ __html: keterangan }} className="text-xs mb-5 text-gray-400"/>
        <Link to={`/quran/${number}`}><Button>Detail</Button></Link>
    </div>
  )
}

export default QuranCard