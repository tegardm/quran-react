import Button from "../../elements/Button"
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="hero w-10/12 mx-auto  min-h-screen bg-base-300">
    <div className="hero-content flex-col  lg:flex-row">
      <img src="/gambar.png" className="max-w-sm rounded-lg shadow-2xl" />
      <div className="ml-5">
        <h1 className="text-5xl font-bold">Selamat Datang <strong>BacaQuran</strong></h1>
        <p className="py-6">Website berisikan Qur'an dengan dilengkapi fitur live search dan terdapat audio media untuk setiap surah yang ada dan Doa secara Online Dan Gratis</p>
        <Link to='/quran'><Button >Baca</Button></Link>
      </div>
    </div>
  </div>
  )
}

export default HeroHome