import React from 'react'

function Partnership() {
  return (
    <section className="py-16 px-8 bg-white">
        <div className="container mx-auto py-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#091F5B] mb-4">WE ARE THE PARTNERS</h2>
            <p className="text-lg text-[#444444] font-normal max-w-3xl mx-auto mb-2">
            We have done deals with and have regular contact with accredited investors, <span className='font-bold'>family offices</span>, and
the some of the largest names in <span className='font-bold'>Private Equity including</span>:
            </p>
        </div>

          <div className="mx-w-6xl m-auto grid grid-cols-7 gap-8 ">
            <div><img src="/client1.png" className="w-full h-auto"/></div>
            <div className='mt-40'><img src="/client2.png" className="w-full h-auto"/></div>
            <div><img src="/client3.png" className="w-full h-auto"/></div>
            <div className='mt-40'><img src="/client4.png" className="w-full h-auto"/></div>
            <div><img src="/client5.png" className="w-full h-auto"/></div>
            <div className='mt-40'><img src="/client6.png" className="w-full h-auto"/></div>
            <div><img src="/client7.png" className="w-full h-auto"/></div>
          </div>
        </div>
      </section>
  )
}

export default Partnership