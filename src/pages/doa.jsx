import { useEffect, useState } from "react";
import TitlePage from '../elements/TitlePage'
import Index from '../fragments/Doa/Index'
import { getDoa } from '../services/doa.services'

const Doa = () => {

  const [doaData, setDoaData] = useState([]);

  useEffect(() => {
    getDoa((data) => {
    //  console.log(realData);
     setDoaData(data.data)
     console.log(doaData);
    });
  }, []);



  return (
    <div className="text-center w-10/12 mx-auto py-10">
      <TitlePage>{`Do'a - Do'a Harian`}</TitlePage>
      <hr />
      <div className='flex justify-center  flex-wrap'>
       
        {doaData.length > 0  && (
          doaData.map((data,index) => (
            <Index data={data} key={index}/>
          ))
        )}
      </div>
    </div>
  );
}

export default Doa