import React from 'react'
import avatarAnisha from '../img/avatar-anisha.png'
import avatarAli from '../img/avatar-ali.png'
import avatarRichard from '../img/avatar-richard.png'

const CTASection = () => {
  return (
    <>
      <section id='cta' className='bg-brightRed'>
        <main className='flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 '>
          {/* Heading */}
          <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
            Simplify how your team works today
          </h2>
          {/* Button */}
          <div className='my-16'>
            {' '}
            <a
              href='/'
              className='p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-gray-900 shadow-2xl'
            >
              Get Started
            </a>
          </div>
        </main>
      </section>
    </>
  )
}

export default CTASection
