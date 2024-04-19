
const SurahCard = ({data}) => {
    const ayats = data;
  return (
    <div className="border-b-2 border-slate-500 pb-5">
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-center text-gray-3400 text-sm  gap-x-5">
          
            {ayats && <span>Juz : {ayats.meta.juz}</span>}
            {ayats && <span>Nomor Surat : {ayats.number.inSurah}</span>}
            {ayats && <span>Nomor Quran : {ayats.number.inQuran}</span>}
        </div>
        </div>

        <div className="flex flex-col gap-y-5">
        {ayats && <h1 className="mt-3 text-right pr-5  text-3xl">{ayats.arab}</h1>}
            <div className="flex mb-3 justify-between  items-center">
            {ayats && <span className="text-sm w-8/12 italic font-bold text-gray-500">{ayats.translation}</span>}
            {ayats && <audio className="scale-75" controls type="audio/mpeg" src={ayats.audio.alafasy}></audio>}

            </div>
            {ayats && <span className="text-xs text-gray-400">{ayats.tafsir.kemenag.short}</span>}
        </div>
    </div>
  )
}

export default SurahCard