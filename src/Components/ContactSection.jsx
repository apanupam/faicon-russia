import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

function ContactSection() {
  return (
    <section className="py-16 px-8 bg-white relative z-1">
        <div className="container mx-auto py-30">
            <div className="max-w-3xl xl:max-w-xl">
                <h2 className="font-medium text-4xl text-[#EDF0F5] mb-7">For founders ready to ditch the books and do business</h2>
                <button className="bg-white text-[#091F5B] px-6 py-3 rounded-md hover:bg-blue-800 hover:text-white transition flex items-center cursor-pointer">
                Contact Us <MdArrowOutward  className="ms-2"/>
                </button>
            </div>
        </div>
        <div className="grid grid-cols-6 gap-8 bg-[linear-gradient(101.07deg,#091F5B_0%,#0B215E_0%,#344EAD_100%)] absolute top-0 start-0 h-full w-full -z-1">
            <div className="col-span-2 relative z-1 py-15 px-12 rounded-s rounded-md"></div>

            <div className="col-span-4 relative z-1 flex flex-col justify-end py-15 px-12 rounded-s rounded-md">
               <img src="/footer.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
            </div>
          </div>
      </section>
  )
}

export default ContactSection