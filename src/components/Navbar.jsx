import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between md:justify-around items-center py-4 px-12">
      <h1 className="text-black text-2xl lg:text-4xl font-light">NFT MarketPlace</h1>
      <ul className="hidden md:flex text-black ">
        <Link to="/"><li className="mx-4 cursor-pointer lg:text-xl text-lg font-light">Home</li></Link>       
        <Link to="/mint"><li className="mx-4 cursor-pointer lg:text-xl text-lg font-light">Mint NFT</li></Link>
        <Link to="/"><li className="mx-4 cursor-pointer lg:text-xl text-lg font-light">Listed NFT</li></Link>
        <li onClick={() => alert("Haven't added the Functionality :(")} className="mx-4 cursor-pointer lg:text-xl text-lg font-light">Bought NFT</li>
      </ul>
    </div>
  )
}

export default Navbar