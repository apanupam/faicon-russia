import React from 'react'

function About() {
  return (
    <>
        <section className="py-4 px-8 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 ">
                    <div className="col-span-3 relative z-1 h-[529px] overflow-hidden rounded-md">
                      <img src="/about1.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
                    </div>
        
                    <div className="col-span-3 relative z-1 flex flex-col justify-end">
                      <div className="bg-[#EBF5FF] py-25 px-12 rounded-md mb-4">
                        <h4 className="text-xl font-medium text-[#4A5C6D] mb-2">A little about the company</h4>
                        <h2 className="text-8xl font-medium text-[#012A36] mb-3">About Us</h2>
                        
                        <p className="text-md text-[#4A5C6D] font-normal">
                        Falcon Russia is a sister company of Falcon Aerospace Pvt. Ltd. company, Soliel Power and Energy Company Pvt. Ltd., Lao International company. Its Managing Director, Rajeev Nandi has been active in Aviation Industry, Mining, Hydropower, Gas and Oil since 2007, when he began his career with the formation of his first company, Falcon Aerospace Pvt. Ltd.about All companies sold its products in many countries throughout the world. Over the years we have been represented and introduced to Southeastern Asian, India, Chinese, French, German, United States market. Falcon Russia strives to keep pace with the changing world of Gas and Oil, Textile and Ayurveda medicine. Another area that has grown in the last year is French wine and XO. Trough group buying we supply French wines, where we personally know the growers. Many make award winning wines are available through us. Dedicating to provide high quality of service in every field of business, our company masters its destiny through creative problem solving and innovative solution based on its values. Company’s strong, broad technical and commercial efficiency will help to find solutions to complex problems. There is no higher priority for us than realizing the most value to our clients.
                        Turnover of the company in the last 5 years was 465 million USD & official representative of Gazprom & Rosneft.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 px-8 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h5 className="text-sm font-normal mb-2 text-[#344EAD] uppercase">A line about the company</h5>
                    <h2 className="text-4xl font-bold text-[#091F5B] mb-4">How We Work</h2>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-[#EBF5FF] p-7">
                        <span className='text-[#091F5B] text-4xl font-medium mb-5'>01</span>
                        <h3 className='text-[#344EAD] text-2xl font-medium mb-3 mt-3'>Onboarding</h3>
                        <p className='text-[#444444] text-lg font-normal'>Our team consists of highly credentialed leaders in mergers and acquisitions, law, and real estate advisory. We bring extensive knowledge and expertise to every transaction.</p>
                    </div>

                    <div className="bg-[#EBF5FF] p-7">
                        <span className='text-[#091F5B] text-4xl font-medium mb-5'>02</span>
                        <h3 className='text-[#344EAD] text-2xl font-medium mb-3 mt-3'>Onboarding</h3>
                        <p className='text-[#444444] text-lg font-normal'>Our team consists of highly credentialed leaders in mergers and acquisitions, law, and real estate advisory. We bring extensive knowledge and expertise to every transaction.</p>
                    </div>

                    <div className="bg-[#EBF5FF] p-7">
                        <span className='text-[#091F5B] text-4xl font-medium mb-5'>03</span>
                        <h3 className='text-[#344EAD] text-2xl font-medium mb-3 mt-3'>Onboarding</h3>
                        <p className='text-[#444444] text-lg font-normal'>Our team consists of highly credentialed leaders in mergers and acquisitions, law, and real estate advisory. We bring extensive knowledge and expertise to every transaction.</p>
                    </div>

                    <div className="bg-[#EBF5FF] p-7">
                        <span className='text-[#091F5B] text-4xl font-medium mb-5'>04</span>
                        <h3 className='text-[#344EAD] text-2xl font-medium mb-3 mt-3'>Onboarding</h3>
                        <p className='text-[#444444] text-lg font-normal'>Our team consists of highly credentialed leaders in mergers and acquisitions, law, and real estate advisory. We bring extensive knowledge and expertise to every transaction.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 px-8 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    <div className="py-14 px-10 col-span-3 border border-[#D7EBFF] rounded-2xl">
                        <span className='text-[#4A5C6D] text-lg font-medium'>A little about the company</span>
                        <h2 className='text-[#091F5B] text-8xl font-medium mt-2'>Why We’re Different</h2>
                        <p className='text-[#444444] text-md font-normal'>Ardent Consumer is a premier independent investment bank dedicated to maximizing value for consumer business owners through strategic mergers and acquisitions, as well as growth capital transactions.</p>
                    </div>

                    <div className="bg-[#EBF5FF] p-7 rounded-2xl">
                        <span className='text-[#091F5B] text-8xl font-medium'>100+</span>
                        <h3 className='text-[#012A36] text-4xl font-normal mb-3 mt-3'>Transactions</h3>
                        <p className='text-[#4A5C6D] text-lg font-normal'>Our team consists of highly credentialed leaders in mergers and acquisitions, law, and real estate advisory. We bring extensive knowledge and expertise to every transaction.</p>
                    </div>

                    <div className="bg-[#0276E1] p-7 rounded-2xl">
                        <span className='text-white text-8xl font-medium'>$10B</span>
                        <h3 className='text-white text-4xl font-normal mb-3 mt-3'>Value Created</h3>
                        <p className='text-white text-lg font-normal'>Our team consists of highly credentialed leaders in mergers and acquisitions, law, and real estate advisory. We bring extensive knowledge and expertise to every transaction.</p>
                    </div>

                    <div className="bg-[#012A36] p-7 rounded-2xl">
                        <span className='text-white text-8xl font-medium'>50+</span>
                        <h3 className='text-white text-4xl font-normal mb-3 mt-3'>Years in Business</h3>
                        <p className='text-white text-lg font-normal'>Our team consists of highly credentialed leaders in mergers and acquisitions, law, and real estate advisory. We bring extensive knowledge and expertise to every transaction.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 px-8 bg-white">
            <div className="container mx-auto">
                <div className="text-start mb-12">
                    <h5 className="text-sm font-normal mb-2 text-[#344EAD] uppercase">Have a Tour</h5>
                    <h2 className="text-8xl font-bold text-[#012A36] mb-4">Explore Our Products</h2>
                
                    <ul className='flex gap-3 items-center mt-12'>
                        <li className='border border-[#0276E1] bg-[#0276E1] px-7 py-2 text-md font-normal text-white rounded-sm'>All Products</li>
                        <li className='border border-[#0276E1] px-7 py-2 text-md font-normal text-[#0276E1] rounded-sm'>Copper Products</li>
                        <li className='border border-[#0276E1] px-7 py-2 text-md font-normal text-[#0276E1] rounded-sm'>Aluminium Products</li>
                    </ul>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img1.jpg' className='h-full w-full object-cover'/>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img2.jpg' className='h-full w-full object-cover'/>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img1.jpg' className='h-full w-full object-cover'/>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img2.jpg' className='h-full w-full object-cover'/>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img1.jpg' className='h-full w-full object-cover'/>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img2.jpg' className='h-full w-full object-cover'/>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img1.jpg' className='h-full w-full object-cover'/>
                    </div>

                    <div className="rounded-xl overflow-hidden h-[412px]">
                        <img src='/img2.jpg' className='h-full w-full object-cover'/>
                    </div>

                    
                </div>
            </div>
        </section>
    </>
  )
}

export default About