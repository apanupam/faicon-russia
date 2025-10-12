import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto py-4">
          <div className="text-center mb-12">
            <h5 className="text-sm font-normal mb-2 text-[#344EAD] uppercase">ABOut us</h5>
            <h2 className="text-4xl font-bold text-[#091F5B] mb-4">Flexible services for every stage of your business</h2>
            <p className="text-md text-[#444444] font-normal max-w-4xl mx-auto mb-7">
            Falcon Russia is a sister company of Falcon Aerospace Pvt. Ltd. company, Soliel Power and Energy Company Pvt. Ltd., Lao International company. Its Managing Director, Rajeev Nandi has been active in Aviation Industry, Mining, Hydropower, Gas and Oil since 2007, when he began his career with the formation of his first company, Falcon Aerospace Pvt. Ltd. about All companies sold its products in many countries throughout the world.
            </p>
            <Link className="text-sm text-[##091F5B] font-normal border border-[#091F5B] rounded-sm py-2 p-4">Learn More</Link>
          </div>
          <div className="grid grid-cols-5 gap-8 ">
            <div className="col-span-3 relative z-1 py-15 px-12 rounded-md overflow-hidden group">
              <div className="">
                <h2 className="font-medium text-4xl text-[#EDF0F5] mb-2">OIL & GAS</h2>
                <p className="text-xs text-white font-normal leading-relaxed mb-8">
                  Falcon Russia is a sister company of Falcon Aerospace Ltd company, Solar Power and Energy
                  Company Pvt. Ltd, Mining, Hydro Power, Gas and Oil Managing Director, when Rajeev Nandi has been active in
                  the formation of his first company, Falcon Aerospace Pvt. Ltd about all companies sold products in many
                  countries throughout the world.
                </p>
                <button className="bg-white text-[#091F5B] px-6 py-3 rounded-md hover:bg-blue-800 hover:text-white transition flex items-center cursor-pointer">
                  Learn More <MdArrowOutward  className="ms-2"/>
                </button>
              </div>
              
              <img src="/about1.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
              <span className="absolute hidden top-0 start-0 h-full w-full group-hover:block -z-1" style={{background:'linear-gradient(45deg, #1c398e, transparent)'}}></span>
            </div>

            <div className="col-span-2 relative z-1 flex flex-col group justify-end py-15 px-12 overflow-hidden rounded-md">
              <div className="h-fit">
                <h2 className="font-medium text-4xl text-[#EDF0F5] mb-2">For Partners</h2>
                <p className="text-xs text-white font-normal leading-relaxed mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                </p>
                <button className="bg-white text-[#091F5B] px-6 py-3 rounded-md hover:bg-blue-800 hover:text-white transition flex items-center cursor-pointer">
                  Learn More <MdArrowOutward  className="ms-2"/>
                </button>
              </div>
              <img src="/about2.jpg" className="absolute top-0 start-0 h-full w-full object-cover -z-1"/>
              <span className="absolute hidden top-0 start-0 h-full w-full group-hover:block -z-1" style={{background:'linear-gradient(45deg, #1c398e, transparent)'}}></span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;