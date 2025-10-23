import React from 'react'

function ProductList() {
  return (
    <>
        <section className="py-10 px-8 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 ">

                    <div className="col-span-3 relative z-1 flex flex-col justify-end">
                      <div className="bg-[#EBF5FF] py-25 px-12 rounded-lg mb-4">
                        <h4 className="text-xl font-medium text-[#4A5C6D] mb-2">Falcon Russia — Global supplier of petroleum products, fuels and bulk industrial materials.</h4>
                        <h2 className="text-8xl font-medium text-[#012A36] mb-3">Product List</h2>
                        
                        <p className="text-md text-[#4A5C6D] font-normal">
                        We supply bulk quantities on monthly and annual contracts. Minimum and maximum quantities are shown per product. For quoted volumes marked with R/E, deliveries and schedules are subject to seller’s rolling/recurring execution terms and should be confirmed with our commercial team.<br/>
How to order
Please contact Falcon Russia commercial team with product name, required quantity, delivery port and preferred Incoterms. We will provide: commercial offer, technical specification (COA), inspection certificate, and shipping schedule.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-3 relative z-1 flex flex-col justify-end">
                      <div className="bg-[#EBF5FF] py-15 px-12 rounded-lg mb-4">
                        <h4 className="text-3xl font-medium text-[#4A5C6D] mb-2">How to order</h4>
                        
                        <p className="text-md text-[#4A5C6D] font-normal">
                        Please contact Falcon Russia commercial team with product name, required quantity, delivery port and preferred Incoterms. We will provide: commercial offer, technical specification (COA), inspection certificate, and shipping schedule.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-3 relative z-1 h-[529px] overflow-hidden rounded-lg">
                      <img src="/about1.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-10 px-8 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#091F5B] mb-4">What we have</h2>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    {[1,2,3,4,5,6,7,8,9].map((item, i)=>
                    <div className="bg-[#EBF5FF] p-8 rounded-md">
                        <span className='text-[#091F5B] text-4xl font-medium mb-5'>0{i+=1}</span>
                        <h3 className='text-[#344EAD] text-2xl font-medium mb-3 mt-3'>DIESEL-GAS OIL L0.2-62 GOST 305-82 (Diesel D2)</h3>
                        <p className='text-[#444444] text-lg font-normal'>Quantity: MIN 50.000MT — MAX 900.000MT × 12 months</p>
                    </div>)}
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductList