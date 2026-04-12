import React from 'react'



const Hero = () => {
  return (
     <section className="relative bg-[#f5f5f3] min-h-screen overflow-hidden px-6 md:px-10 py-10">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="font-['Inter'] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.02em] text-black">
          WE PROVIDE SERVICES
          <br />
          WEB PLUS APP DEV
          <br />
          TO 2000+ PARTNERS{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-green-200 rounded-full -z-10 px-6 py-2"></span>
            SECURED
          </span>{" "}
          STAY CONNECTED
        </h1>

        <div className="w-72 h-2 bg-yellow-300 mx-auto mt-2 rounded-full"></div>

        <p className="mt-10 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          We are a team of developers, designers communicators, researchers.
          Together, we belive that progress only happens when you refuse to
          play things safe.
        </p>
      </div>
       </section>
  )
}

export default Hero