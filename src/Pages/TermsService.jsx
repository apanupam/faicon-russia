import React from 'react'

function TermsService() {
  return (
    <section className="py-16 px-8 bg-white">
        <div className="container mx-auto py-4 ttt">
            <div className="mb-16 max-w-4xl mx-auto">
                <h1 className="text-5xl text-center text-bold text-[#091F5B] mb-3">Terms of Service</h1>
                <p className='text-xl text-center text-normal text-[#444444]'>By accessing or using our website [www.falconrussia.live], you agree to comply with and be bound by these Terms of Service.</p>
            </div>

            <div className="gap-7 flex flex-col max-w-4xl mx-auto">
                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>1. Use of this Website</h3>
    
                    <ul className='text-xl text-normal text-[#444444] list-disc ps-6 '>
                        <li className='mb-1'>You agree to use this site only for lawful business purposes. </li> 
                        <li className='mb-1'>Reproduction, modification, or redistribution of website materials without written approval is strictly prohibited. </li> 
                        <li className='mb-1'>We reserve the right to limit or terminate access if misuse or unlawful activity is detected.</li>
                    </ul>
                </div>


                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>2. Products and Services</h3>
    
                    <ul className='text-xl text-normal text-[#444444] list-disc ps-6 '>
                        <li className='mb-1'>All product images, technical details, and descriptions are for general guidance. </li> 
                        <li className='mb-1'>Prices and specifications may change without prior notice. </li> 
                        <li className='mb-1'>Orders, quotations, or business offers are subject to final confirmation from Falcon Russia representatives.</li>
                    </ul>
                </div>


                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>3. Intellectual Property</h3>
                    <ul className='text-xl text-normal text-[#444444] list-disc ps-6 '>
                        <li className='mb-1'>All trademarks, visuals, and written content are the property of Falcon Russia. </li> 
                        <li className='mb-1'>Any unauthorized use of our materials may result in legal action.</li> 
                    </ul>
                </div>

                <div>
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>4. Limitation of Liability</h3>
                    <ul className='text-xl text-normal text-[#444444] list-disc ps-6'>
                        <li className='mb-1'>Falcon Russia shall not be liable for any direct or indirect damages arising from the use or inability to use this website or its services. </li> 
                    </ul>
                </div>


                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>5. Governing Law</h3>
                    <ul className='text-xl text-normal text-[#444444] list-disc ps-6 '>
                        <li className='mb-1'>These Terms are governed by the laws of the Russian Federation and interpreted accordingly.</li> 
                    </ul>
                </div>

            </div>
        </div>
    </section>
  )
}

export default TermsService