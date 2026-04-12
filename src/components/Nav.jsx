import React from 'react'

const Nav = () => {
  return (
     <nav className="w-full px-8 py-6 flex items-center justify-between">
  {/* Left Logo */}
  <div className="text-3xl font-bold">
    PORTFOLIO
  </div>

  {/* Center Nav Links */}
  <ul className="hidden md:flex items-center gap-10 text-lg font-medium absolute left-1/2 transform -translate-x-1/2">
    <li className="cursor-pointer hover:text-gray-500">Home</li>
    <li className="cursor-pointer hover:text-gray-500">My Work</li>
    <li className="cursor-pointer hover:text-gray-500">Testimonials</li>
    <li className="cursor-pointer hover:text-gray-500">Contact</li>
    <li className="cursor-pointer hover:text-gray-500">FAQ</li>
  </ul>

  {/* Right Menu Icon */}
  <div className="text-3xl font-bold cursor-pointer">
    =
  </div>
</nav>
  )
}

export default Nav