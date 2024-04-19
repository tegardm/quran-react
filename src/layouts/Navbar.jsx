
const Navbar = () => {
  return (
    <>
 <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost text-xl">BacaQuran</a>
  </div>
  <div className="flex-none">
    <ul className="menu flex items-center menu-horizontal px-1">
      <li><a href="/quran">Quran</a></li>
      <li><a href="/doa">Doa</a></li>
      <li><a href="/author">Author</a></li>
      <li><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full">
          <a href="https://www.instagram.com/tegar_deyustian/">
          <img src="https://cdn.discordapp.com/attachments/1169305806651535505/1230849770692546640/file.jpg?ex=6634d12d&is=66225c2d&hm=29fa2da1aea3d016a9779625799b26b5d8823b36ed4f8b8ffe8b436f7082c6e9&" />
          </a>
        </div>
      </div></li>

    
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar