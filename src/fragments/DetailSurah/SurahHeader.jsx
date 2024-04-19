// import React from 'react'
        // eslint-disable-next-line
const SurahHeader = ({data}) => {
            // eslint-disable-next-line
    let {name,description,bismillah,number,numberOfAyahs,revelation} = data;
  
    {
        return (
           <>
            <div className="text-center  ">
                <h1 className="text-5xl font-bold tracking-widest pt-5 pb-1">Surat {name}</h1>

            <hr className="my-5 border-1 border-slate-500" />
                <div className="flex justify-center gap-x-5 text-lg pb-2  text-gray-500">
                    <span>Jumlah Ayat : {numberOfAyahs}</span>
                    <span>Nomor surat : {number}</span>
                    <span>Revelation : {revelation}</span>
                </div>
                <p className="text-sm text-gray-400">{description}</p>
                <br />
                <div className="p-3 w-6/12 mx-auto border rounded-lg">
                {bismillah && <h1 className="text-3xl mb-2">{bismillah.arab}</h1>}
                {bismillah && <p className="text-gray-400 text-sm italic">{bismillah.translation}</p>
}
                </div>

            </div>
            

           </>
          )
    }
}

export default SurahHeader