// import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleQuran } from "../services/qurans.services";
import SurahHeader from "../fragments/DetailSurah/SurahHeader"
import SurahCard from "../fragments/DetailSurah/SurahCard";
import SurahFooter from "../fragments/DetailSurah/SurahFooter";

 
  
const SuratLayout = () => {
    // eslint-disable-next-line
    const {number} = useParams(); 
    // eslint-disable-next-line
    const [quran,setQuran] = useState({})  
    // eslint-disable-next-line
    useEffect(()=>{
        getSingleQuran(number,(data)=>{
            setQuran(data)
        })
    
      },[])

  return (
    <div className="w-10/12 bg-base-300 mx-auto">
                <SurahFooter data={quran.number}/>

        <SurahHeader data={quran} />
        <div className="my-10 flex flex-col gap-y-5">

        {
            quran.ayahs && quran.ayahs.map((qrn) => {
                return (<SurahCard key={qrn.number.inSurah} data={qrn}/>)
            })
        }
        </div>
    </div>
  )
}

export default SuratLayout