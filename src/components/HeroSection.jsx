import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-20">
      <h1 className="text-center text-4xl tracking-wide sm:text-6xl lg:text-7xl">
        VirtualR build tools{' '}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          {' '}
          for developers
        </span>
      </h1>
      <p className="mt-10 max-w-4xl text-center text-lg text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="mt-8 flex items-center justify-center space-x-8 text-center">
        <div className="rounded-md border bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 text-lg">
          <a href="#">Start for free</a>
        </div>
        <div className="rounded-md border px-3 py-2 text-lg">
          <a href="#">Documention</a>
        </div>
      </div>
      <div className="mt-8 flex justify-center ">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="mx-2 w-1/2 rounded-lg shadow-sm shadow-orange-400 border border-orange-700 py-4"
        ></video>
        <video
          src={video2}
          autoPlay
          loop
          muted
          className="mx-2 w-1/2 rounded-lg  shadow-sm shadow-orange-400 border border-orange-700 py-4"
        ></video>
      </div>
    </div>
  );
}

export default HeroSection;
