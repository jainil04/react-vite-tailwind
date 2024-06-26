import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      {/* object-left scale-x[-1] */}
      <img className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:item-start place-items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Jainil Chauhan</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
          <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex space-x-8 pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20}/>
            <FaFacebookF className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaLinkedinIn className="cursor-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
