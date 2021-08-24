import React from 'react'
import {FaUserCircle, FaStarOfLife} from 'react-icons/fa'

const Header = () => {
    return (
        <header className="fixed top-0 w-11/12 bg-gray-50 z-20">
        <div className="flex my-4 relative">
        <FaUserCircle className="text-3xl"/>
          <h2 className="font-extrabold pl-6">Home</h2>
          <FaStarOfLife className="absolute right-2 top-1"/>
          </div>
          <hr className="mt-4"/>
        </header>
    )
}

export default Header
