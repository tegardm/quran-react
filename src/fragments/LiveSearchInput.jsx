import Select from "../elements/Select";
import InputSelect from "../elements/InputSelect";
import { useEffect, useState, useMemo } from "react";
import { getQurans } from "../services/qurans.services";

const LiveSearchInput = () => {
  const [qurans, setQurans] = useState([]);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    getQurans((data) => {
      setQurans(data);
    });
  }, []);

  const filteredQurans = useMemo(() => {
  return qurans.filter((quran) => quran.name.toLowerCase().includes(textInput));
}, [textInput, qurans]);

  const changeInput = (e) => {
    setTextInput(e.target.value.toLowerCase());
   
  };

  return (
    <div className="flex bg-base-300 justify-center flex-wrap gap-x-3 items-center">
      <Select qurans={filteredQurans} />
      <InputSelect placeholder={"Masukan Judul Surah"} changeInput={changeInput} />
    </div>
  );
};

export default LiveSearchInput;
