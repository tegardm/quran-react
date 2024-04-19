import Button from "../../elements/Button"

const HeroHome = () => {
  return (
    <div className="hero w-10/12 mx-auto  min-h-screen bg-base-300">
    <div className="hero-content flex-col  lg:flex-row">
      <img src="/gambar.png" className="max-w-sm rounded-lg shadow-2xl" />
      <div className="ml-5">
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <Button>Baca</Button>
      </div>
    </div>
  </div>
  )
}

export default HeroHome