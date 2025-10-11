import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <>
    <section className="py-16 px-8 bg-[#FCFCFC]">
        <div className="container mx-auto py-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#091F5B] mb-4">Contact Us</h2>
                <p className="text-md text-[#444444] font-normal max-w-2xl mx-auto mb-2">
                All inquiries will be thoroughly reviewed and evaluated. If your inquiry meets requirements for a response, a member of our team will contact you.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-[#EDF0F5] border border-[#D9D9D9] rounded-md relative h-13">
                    <input type="text" placeholder='Your Name' className='h-full w-full text-md bg-transparent border-0 outline-0 p-4 text-[#818181] font-normal' />
                    <span className="text-md text-[#818181] font-normal absolute top-0 right-0 me-2 mt-2">*</span>
                </div>

                <div className="bg-[#EDF0F5] border border-[#D9D9D9] rounded-md relative h-13">
                    <input type="email" placeholder='Email address' className='h-full w-full text-md bg-transparent border-0 outline-0 p-4 text-[#818181] font-normal' />
                    <span className="text-md text-[#818181] font-normal absolute top-0 right-0 me-2 mt-2">*</span>
                </div>

                <div className="bg-[#EDF0F5] border border-[#D9D9D9] rounded-md relative h-13">
                    <input type="tel" placeholder='99999-99999' className='h-full w-full text-md bg-transparent border-0 outline-0 p-4 text-[#818181] font-normal' />
                    <span className="text-md text-[#818181] font-normal absolute top-0 right-0 me-2 mt-2">*</span>
                </div>

                <div className="bg-[#EDF0F5] border border-[#D9D9D9] rounded-md relative h-13 pe-3">
                    <select name="" id="" className='h-full w-full text-md bg-transparent border-0 outline-0 p-4 text-[#818181] font-normal'>
                        <option value="demo1">Subject </option>
                        <option value="demo1">Subject Demo1</option>
                        <option value="demo1">Subject Demo1</option>
                        <option value="demo1">Subject Demo1</option>
                        <option value="demo1">Subject Demo1</option>
                        <option value="demo1">Subject Demo1</option>
                    </select>
                    <span className="text-md text-[#818181] font-normal absolute top-0 right-0 me-2 mt-2">*</span>
                </div>

                <div className="bg-[#EDF0F5] border border-[#D9D9D9] rounded-md relative h-40 col-span-2">
                    <textarea name="" placeholder='Email address' className='h-full w-full text-md bg-transparent border-0 outline-0 p-4 text-[#818181] font-normal'></textarea>
                    <span className="text-md text-[#818181] font-normal absolute top-0 right-0 me-2 mt-2">*</span>
                </div>

                <div className="col-span-2">
                   <button className="bg-[#818181] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition flex items-center cursor-pointer w-fit mx-auto">Sen your message <MdArrowOutward  className="ms-2"/></button>
                </div>
                
            </div>
        </div>

        <div className="container mx-auto pb-10 pt-18">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-md overflow-hidden h-[427px]">
                    <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.2911402009577!2d37.72159187678505!3d55.68392589729423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4f54ab9ad5b%3A0xfea208d66644c260!2sShosseynaya%20St%2C%20Moskva%2C%20Russia!5e0!3m2!1sen!2sin!4v1760163899548!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="bg-[#344EAD] rounded-md p-8">
                    <ul className='flex flex-col justify-start items-start gap-4 text-[#EDF0F5] mt-5'>
                        <li>
                            <span className='font-semibold text-md block mb-1'>Address:</span>
                            <span className='font-normal text-xl'>Shosseynay St. House 58 Moscow. Russia</span>
                        </li>
                        <li>
                            <span className='font-semibold block text-md mb-1'>Contact:</span>
                            <Link to='mailto:captain.nandi@hotmail.com' className='font-normal text-xl'>captain.nandi@hotmail.com</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactUs