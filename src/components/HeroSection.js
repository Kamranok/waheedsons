import React from 'react'
import illustrationIntro from '../img/illustration-intro.svg'

const HeroSection = () => {
  return (
    <>
      <section id='hero'>
        <main className='container flex flex-col-reverse md:flex-row px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:justify-between'>
          {/* Left Side */}
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
              Fahad Bhai kya haal hain everyone together to build better product
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              praesentium reiciendis optio, asperiores veniam est assumenda at,
              labore vero doloribus nisi hic, corporis modi nemo saepe corrupti
              sequi? Praesentium, natus?
            </p>

            {/* Button */}
            <div className='flex justify-center md:justify-start'>
              <a
                href='/'
                className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className='md:w/1/2'>
            <img src={illustrationIntro} alt='hero' />
          </div>
        </main>
      </section>
    </>
  )
}

export default HeroSection
