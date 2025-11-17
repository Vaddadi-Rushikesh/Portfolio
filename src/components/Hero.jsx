import React from 'react'


// Components
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 ">
  <div className="container flex flex-col-reverse items-center lg:grid lg:grid-cols-2 lg:gap-10">
    
    {/* TEXT SECTION */}
    <div className="mt-10 lg:mt-0">
      <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
        </span>
        Available for work
      </div>

      <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
        Hi, I'm <span className="text-sky-400">Rushikesh</span> — a <span className="text-sky-300">Web Developer</span> & <span className="text-sky-300">Data Analyst</span>.
      </h2>

      <div className="flex items-center gap-3">
        <ButtonPrimary 
          label="Download CV" 
          icon="download" 
          href="/images/Rushi Resume.pdf" 
          download
          />
        <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
      </div>
    </div>

    {/* IMAGE SECTION */}
    <div className="w-full mb-10 lg:mb-0 flex justify-center">
        <figure className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[480px] bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[40px] overflow-hidden">
            <img
            src="images/hero-banner-1.png"
            alt="Rushikesh V"
            className="w-full h-auto"
            />
        </figure>
    </div>
  </div>
</section>

  )
}

export default Hero