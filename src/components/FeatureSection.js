import React from 'react'

const FeatureSection = () => {
  return (
    <>
      <section id='features'>
        <main className='container flex flex-col-reverse md:flex-row px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          {/* Left Side */}
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl mt-10 md:mt-0 font-bold text-center md:text-5xl md:text-left'>
              What's Different About Manage?
            </h1>
            <p className='max-w-md md:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              praesentium reiciendis optio, asperiores veniam est assumenda at,
              labore vero doloribus nisi hic.
            </p>
          </div>
          {/* Right Side - Numbered List */}
          <div className='flex flex-col space-y-8 md:w-1/2'>
            {/* List Item 1 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row '>
              {/* Heading */}
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent '>
                <div className='flex items-center space-x-2 '>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed '>
                    01
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden '>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Track company-wide progress
                </h3>
                <p className='text-darkGrayishBlue'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  non inventore accusantium? Molestiae, corporis. Animi
                  aspernatur voluptas exercitationem rerum vero!
                </p>
              </div>
            </div>
            {/* List Item 2 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row '>
              {/* Heading */}
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent '>
                <div className='flex items-center space-x-2 '>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed '>
                    02
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden '>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Track company-wide progress
                </h3>
                <p className='text-darkGrayishBlue'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  non inventore accusantium? Molestiae, corporis. Animi
                  aspernatur voluptas exercitationem rerum vero!
                </p>
              </div>
            </div>
            {/* List Item 3 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row '>
              {/* Heading */}
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent '>
                <div className='flex items-center space-x-2 '>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed '>
                    03
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden '>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Track company-wide progress
                </h3>
                <p className='text-darkGrayishBlue'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  non inventore accusantium? Molestiae, corporis. Animi
                  aspernatur voluptas exercitationem rerum vero!
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default FeatureSection
