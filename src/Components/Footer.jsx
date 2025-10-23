import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="px-8 bg-[#091F5B] relative z-1">
        <div className="container mx-auto">
            <div className="flex justify-between flex-wrap sm:flex-nowrap gap-8 py-20">
                <div className="">
                    <ul className='flex flex-col gap-3 text-xl md:text-2xl text-[#EDF0F5] font-medium'>
                        <li><Link to='/' className='hover:text-gray'>Home</Link></li>
                        <li><Link to='/about' className='hover:text-gray'>About Us</Link></li>
                        <li><Link to='#' className='hover:text-gray'>Our Other Fields</Link></li>
                        <li><Link to='#' className='hover:text-gray'>Port of Delivery & Logistics</Link></li>
                        <li><Link to='/ourteam' className='hover:text-gray'>Our Team</Link></li>
                    </ul>
                </div>
    
                <div className="">
                    <Link to='/'>
                        <img src="/f-logo.svg" alt="Falcon Logo"/>
                    </Link>
                    
                    <ul className='flex flex-col justify-start items-start gap-4 text-[#EDF0F5] mt-5'>
                        <li className='font-normal'>
                            <span className='font-semibold block mb-1'>Address:</span>
                            Shosseynay St. House 58 Moscow. Russia
                        </li>
                        <li className='font-normal'>
                            <span className='font-semibold block mb-1'>Contact:</span>
                            <Link to='mailto:captain.nandi@hotmail.com'>captain.nandi@hotmail.com</Link>
                        </li>
                    </ul>
                    <ul className='flex items-center gap-3 text-2xl text-white mt-10'> 
                        <li><Link to='#'><FaFacebook/></Link></li>
                        <li><Link to='#'><FaInstagram/></Link></li>
                        <li><Link to='#'><FaXTwitter/></Link></li>
                        <li><Link to='#'><FaLinkedin/></Link></li>
                        <li><Link to='#'><FaYoutube/></Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center gap-3 sm:justify-between flex-wrap sm:flex-nowrap py-8 border-t border-[#455B97]">
                <p className='text-sm  mb-0 font-normal text-[#EDF0F5]'>Copyright © 2018 <Link to='#' target='_blank' className='underline'> Falcon Russia</Link>. All Rights Reserved.</p>
                <ul className='flex items-center mb-0 gap-3 text-sm text-[#EDF0F5] font-normal'>
                    <li><Link to='/privacy-policy' className='hover:text-gray underline'>Privacy Policy</Link></li>
                    <li><Link to='/terms-service' className='hover:text-gray underline'>Terms of Service</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer