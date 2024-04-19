
const Select = ({qurans}) => {


    const redirectOnChange = (e) => {
        console.log(e.target.value);
        const number = e.target.value;
        window.location.href = `/quran/${number}`
    }

    const redirectOnClick = (e) => {
        if (qurans.length > 1) {
            e.preventDefault()
        } else {
            console.log(e.target.value);
        const number = e.target.value;
        window.location.href = `/quran/${number}`
        }
    }


  return (
    <>
 <select onClick={redirectOnClick} onChange={redirectOnChange} className="cursor-pointer 
 border w-2/12 border-blue-300 bg-base-300 py-3 px-2 rounded-lg my-5 " name="" id="">
    {qurans.length > 0 && qurans.map((quran) => (
        <option key={quran.number} value={quran.number}>{quran.name}</option>
    ))}
</select>
    </>
  )
}

export default Select