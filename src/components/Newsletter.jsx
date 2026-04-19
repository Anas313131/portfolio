import React from 'react'
import { DiaTextRevealDemo2 } from './DiaTextReveal'

const Newsletter = () => {
  return (
 <section className="relative bg-purple-200 py-24 px-6 text-center overflow-hidden">

      {/* Decorative red arrows (top) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-red-400 text-3xl">
        ↑ ↑
      </div>

      {/* Main Heading */}
      <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
        SUBSCRIBE TO <br /> OUR NEWSLETTER
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4">
        TO MAKE YOUR STAY SPECIAL AND EVEN MORE MEMORABLE
      </p>

      {/* Button */}
      <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition">
       SUBSCRIBE NOW
      </button>

      {/* Divider */}
      <div className="border-t border-gray-500 mt-20 pt-12"></div>

      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left mt-10">

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Home</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-4">Terms & Policies</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Explore</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Social */}
        <div className='cursor-pointer'>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="https://www.instagram.com/studio.scorp/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/anas-azam-618b1022b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
            <li><a href="https://github.com/Anas313131">Github</a></li>
            <li><a href="https://x.com/automateitanas">Twitter</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Terms & Policies</h3>
          <p className="text-gray-700">
            1498w Fulton ste, STE 2D Chicago, IL 63867.
          </p>
          <p className="mt-2 text-gray-700">(+91) 9289689745</p>
          <p className="mt-2 text-gray-700">anas.azam2001@gmail.com</p>
        </div>

      </div>

      {/* Bottom copyright */}
      <p className="text-center text-gray-700 mt-16 text-sm">
        ©2023 Elementum. All rights reserved
      </p>
    </section>
  )
}

export default Newsletter