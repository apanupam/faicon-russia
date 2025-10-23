import React from 'react'

function PrivacyPolicy() {
  return (
    <section className="py-16 px-8 bg-white">
        <div className="container mx-auto py-4 ttt">
            <div className="mb-16 max-w-4xl mx-auto">
                <h1 className="text-5xl text-center text-bold text-[#091F5B] mb-3">Privacy Policy</h1>
                <p className='text-xl text-center text-normal text-[#444444]'>This Privacy Policy explains how Falcon Russia collects, uses, and protects personal and business information provided by website visitors and clients.</p>
            </div>

            <div className="gap-7 flex flex-col max-w-4xl mx-auto">
                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>1. Information We Collect</h3>
                    <p className='text-xl text-normal text-[#444444] mb-1'>We may collect:</p>
    
                    <ul className='text-xl text-normal text-[#444444] list-disc ps-6 '>
                        <li className='mb-1'>Name, company name, designation, and contact details </li> 
                        <li className='mb-1'>Email address and phone number </li> 
                        <li className='mb-1'>Location and browser information (for site analytics)</li>
                    </ul>
                </div>


                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>2. Purpose of Data Collection</h3>
                    <p className='text-xl text-normal text-[#444444] mb-1'>Collected data is used to:</p>
    
                    <ul className='text-xl text-normal text-[#444444] list-disc ps-6 '>
                        <li className='mb-1'>Process inquiries and quotations </li> 
                        <li className='mb-1'>Maintain business communication </li> 
                        <li className='mb-1'>Improve our website, services, and customer experience</li>
                    </ul>
                </div>


                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>3. Data Protectiont</h3>
                    <p className='text-xl text-normal text-[#444444] mb-1'> We use appropriate security systems and encrypted communication to protect data from unauthorized access.</p>
                </div>


                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>4. Sharing of Data</h3>
                    <p className='text-xl text-normal text-[#444444] mb-1'> Falcon Russia does not sell, rent, or trade personal information.  Data may be shared only with trusted partners for delivery, logistics, or compliance purposes</p>
                </div>


                <div className="">
                    <h3 className='text-3xl text-semibold text-[#444444] mb-1'>5. Your Rights</h3>
                    <p className='text-xl text-normal text-[#444444] mb-1'> Users can request to access, correct, or delete their personal information by contacting enquiry@falconrussia.live</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default PrivacyPolicy