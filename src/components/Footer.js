import React from 'react'
import logoWhite from '../img/logo-white.svg'
import facebookIcon from '../img/icon-facebook.svg'
import youtubeIcon from '../img/icon-youtube.svg'
import pinterestIcon from '../img/icon-pinterest.svg'
import twitterIcon from '../img/icon-twitter.svg'
import instagramIcon from '../img/icon-instagram.svg'

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className='bg-veryDarkBlue'>
        {/* <!-- Flex Container --> */}
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0'>
          {/* <!-- Logo and social links container --> */}
          <div className='flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start'>
            <div className='mx-auto my-6 text-center text-white md:hidden'>
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <img src={logoWhite} className='h-8' alt='' />
            </div>
            {/* <!-- Social Links Container --> */}
            <div className='flex justify-center space-x-4'>
              {/* <!-- Link 1 --> */}
              <a href='/'>
                <img src={facebookIcon} alt='' className='h-8' />
              </a>
              {/* <!-- Link 2 --> */}
              <a href='/'>
                <img src={instagramIcon} alt='' className='h-8' />
              </a>
              {/* <!-- Link 3 --> */}
              <a href='/'>
                <img src={youtubeIcon} alt='' className='h-8' />
              </a>
              {/* <!-- Link 4 --> */}
              <a href='/'>
                <img src={pinterestIcon} alt='' className='h-8' />
              </a>
              {/* <!-- Link 5 --> */}
              <a href='/'>
                <img src={twitterIcon} alt='' className='h-8' />
              </a>
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div className='flex justify-around space-x-32'>
            <div className='flex flex-col space-y-3 text-white'>
              <a href='/' className='hover:text-brightRed'>
                Home
              </a>
              <a href='/' className='hover:text-brightRed'>
                Pricing
              </a>
              <a href='/' className='hover:text-brightRed'>
                Products
              </a>
              <a href='/' className='hover:text-brightRed'>
                About
              </a>
            </div>
            <div className='flex flex-col space-y-3 text-white'>
              <a href='/' className='hover:text-brightRed'>
                Careers
              </a>
              <a href='/' className='hover:text-brightRed'>
                Community
              </a>
              <a href='/' className='hover:text-brightRed'>
                Privacy Policy
              </a>
            </div>
          </div>

          {/* <!-- Input Container --> */}
          <div className='flex flex-col justify-between'>
            <form>
              <div className='flex space-x-3'>
                <input
                  type='text'
                  className='flex-1 px-4 rounded-full focus:outline-none'
                  placeholder='Updated in your inbox'
                />
                <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                  Go
                </button>
              </div>
            </form>
            <div className='hidden text-white lg:block'>
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
