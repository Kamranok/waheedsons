import React from 'react'
import avatarAnisha from '../img/avatar-anisha.png'
import avatarAli from '../img/avatar-ali.png'
import avatarRichard from '../img/avatar-richard.png'

const Testimonials = () => {
  return (
    <>
      <section id='testimonials'>
        <main className='max-w-6xl px-5 mx-auto mt-32 text-center '>
          {/* Heading */}
          <h2 className='text-4xl font-bold text-center '>
            What's Different About Manage?
          </h2>
          {/* Testimonials Container */}
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            {/* Testimonial 1 */}
            <div className='flex flex-col items-center p-6 rounded-lg bg-veryLightGray md:w-1/3'>
              <img src={avatarAnisha} className='w-16 -mt-14' alt='anisha' />
              <h5 className='text-lg font-bold '>Anisha Li</h5>
              <p
                className='text-sm text=darkGrayishBlue
              '
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                sapiente itaque eum quam dignissimos rerum mollitia, facere
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className='hidden  flex-col items-center p-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
              <img src={avatarAli} className='w-16 -mt-14' alt='Ali' />
              <h5 className='text-lg font-bold '>Ali Bravo</h5>
              <p
                className='text-sm text=darkGrayishBlue
              '
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                sapiente itaque eum quam dignissimos rerum mollitia, facere
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className='hidden  flex-col items-center p-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
              <img src={avatarRichard} className='w-16 -mt-14' alt='Richard' />
              <h5 className='text-lg font-bold '>Richard Watts</h5>
              <p
                className='text-sm text=darkGrayishBlue
              '
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                sapiente itaque eum quam dignissimos rerum mollitia, facere
              </p>
            </div>
          </div>
          {/* Button */}
          <div className='my-16'>
            {' '}
            <a
              href='/'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </a>
          </div>
        </main>
      </section>
    </>
  )
}

export default Testimonials
