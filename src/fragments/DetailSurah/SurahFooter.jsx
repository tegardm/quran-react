
const SurahFooter = ({data}) => {
  return (
    <div className="flex py-4 justify-between">
        <a href={`/quran/${data-1}`}>
        <span className={`flex ${data - 1 == 0 ? 'hidden' : ''} gap-x-2 items-center font-bold text-gray-700
        cursor-pointer`}> {<i className="text-4xl text-gray-600 bi bi-arrow-left-square"></i>} Previous</span>
        </a>
        <a href={`/quran/${data + 1}`}>
        <span className={`flex gap-x-2 ${data + 1 == 115 ? 'hidden' : ''} items-center font-bold text-gray-700
        cursor-pointer`}>Next {<i className="text-4xl text-gray-600 bi bi-arrow-right-square"></i>}</span>
        </a>
        
    </div>
  )
}

export default SurahFooter