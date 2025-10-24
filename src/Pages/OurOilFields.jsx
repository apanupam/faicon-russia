import React from 'react'

function OurOilFields() {
  return (
    <>
        <section className="py-10 px-8 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8">

                    <div className="col-span-3 relative z-1 flex flex-col justify-end">
                      <div className="bg-[#EBF5FF] py-25 px-12 rounded-md mb-4">
                        <h2 className="text-8xl font-medium text-[#012A36] mb-3">Our Oil Fields in Russia</h2>
                        
                        <p className="text-md text-[#4A5C6D] font-normal">
                        Falcon Russia proudly operates across some of the most resource-rich oil regions of the Russian Federation.  Our oil fields are strategically located to ensure stable supply, consistent quality, and efficient delivery to our international buyers.  Through advanced extraction technology, sustainable practices, and rigorous quality control, Falcon Russia delivers petroleum products that meet GOST, ISO, and international refinery standards.
                        </p>
                      </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="py-10 px-8 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-7 gap-6 mb-6">

                    <div className="col-span-4 relative z-1 flex flex-col justify-end">
                      <div className="bg-[#EBF5FF] py-12 px-12 rounded-xl">
                        <h4 className="text-3xl font-medium text-[#4A5C6D] mb-3">1. Western Siberia</h4>
                        
                        <ul className='text-md text-normal text-[#4A5C6D] list-disc ps-6 '>
                            <li className='mb-1'>The heart of Falcon Russia’s upstream operations.</li> 
                            <li className='mb-1'>Known for producing high-grade crude oil and diesel fractions.</li> 
                            <li className='mb-1'>Our Western Siberian facilities include both onshore drilling platforms and centralized storage units.</li> 
                            <li className='mb-1'>Key focus: efficiency, environmental responsibility, and continuous innovation in extraction processes.</li> 
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-3 relative z-1 overflow-hidden rounded-xl">
                        <img src="/about1.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
                    </div>
        
                </div>

                <div className="grid grid-cols-7 gap-6">

                    <div className="col-span-3 relative z-1 overflow-hidden rounded-xl">
                      <img src="/about1.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
                    </div>

                    <div className="col-span-4 relative z-1 flex flex-col justify-end">
                      <div className="bg-[#EBF5FF] py-12 px-12 rounded-xl">
                        <h4 className="text-3xl font-medium text-[#4A5C6D] mb-3">2. Volga–Ural Basin</h4>
                        
                        <ul className='text-md text-normal text-[#4A5C6D] list-disc ps-6 '>
                            <li className='mb-1'>Offshore operations and new exploration zones managed under strategic partnerships.</li> 
                            <li className='mb-1'>Rich in condensate and light oil blends.</li> 
                            <li className='mb-1'>Connected to major export routes for Asia-Pacific clients.</li> 
                            <li className='mb-1'>Our logistics partners ensure stable year-round deliveries even in subarctic conditions.</li> 
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurOilFields