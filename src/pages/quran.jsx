import TitlePage from "../elements/TitlePage";
import { useEffect, useState } from "react";
import { getQurans } from "../services/qurans.services";
import QuranCard from "../fragments/QuranCard";
import { useSelector } from "react-redux";
import Paginator from "../fragments/Paginator";
import LiveSearchInput from "../fragments/LiveSearchInput";

const Quran = () => {
  const [qurans, setQurans] = useState([]);
  const currentPage = useSelector((state) => state.quran.quransPage);

  useEffect(() => {
    getQurans((data) => {
      const startIndex = (currentPage - 1) * 9;
      const endIndex = startIndex + 9;
      const slicedData = data.slice(startIndex, endIndex);
      setQurans(slicedData);
    });
  }, [currentPage]);

  return (
    <div className="text-center bg-base-300  ">
    
      <TitlePage>Halaman Quran</TitlePage>
      <Paginator />
      <LiveSearchInput/>
         <div className="justify-center flex flex-wrap">
        {qurans.length > 0 &&
          qurans.map((quran) => (
            <QuranCard key={quran.number} data={quran} />
          ))}
      </div>
    </div>
  );
};

export default Quran;
