import React from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../Components/ContactSection';
import { MdArrowOutward } from 'react-icons/md';

function OurTeam() {
  return (
    <>
    
    <section className="py-16 px-8 bg-[#FCFCFC]">
        <div className="container mx-auto py-4">
          <div className="text-center mb-12">
            <h5 className="text-sm font-normal mb-2 text-[#344EAD] uppercase">OUR TEAM</h5>
            <h2 className="text-4xl font-bold text-[#091F5B] mb-4">For founders ready to ditch the books and do business</h2>
            <p className="text-md text-[#444444] font-normal max-w-3xl mx-auto mb-2">
            Pedigree-High credentialed leaders in MA, Law, and Real Estate Advisory
 Connections-Deep network of private equity, family offices, and accredited investors
 Execution-100+ transactions closed across major consumer sectors
 Middle Market Consumer Focus: We don’t want to be everything to everyone, we know
 consumer businesses.
            </p>
            <Link className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition flex items-center cursor-pointer w-fit mx-auto mt-5">About Us <MdArrowOutward  className="ms-2"/></Link>
          </div>

          <div className="grid grid-cols-6 gap-8 ">
            <div className="col-span-3 relative z-1 py-15 px-12 overflow-hidden rounded-md">
              <img src="/cmd.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
            </div>

            <div className="col-span-3 relative z-1 flex flex-col justify-end">
              <div className="bg-[#EBF5FF] p-12 rounded-md mb-4">
                <p className="text-lg text-[#444444] font-normal mb-8">
                    Rajeev Nandi, CMD of Falcon Russia, is a dynamic leader with extensive experience in the oil, gas, and energy industries. With his strong vision and strategic approach, he has guided the company toward global partnerships and sustainable growth.
                </p>

                <p className="text-lg text-[#444444] font-normal">
                    Focused on innovation and value creation, Rajeev Nandi has played a key role in expanding Falcon Russia’s business across diverse sectors. His leadership continues to make the company a trusted name in energy and infrastructure worldwide.
                </p>
              </div>

              <h2 className="text-5xl font-normal text-[#012A36] p-12 border border-[#D7EBFF] rounded-md">Rajeev Nandi, CMD</h2>
            </div>
          </div>
        </div>
    </section>
    <ContactSection/>
    </>
  )
}

export default OurTeam;