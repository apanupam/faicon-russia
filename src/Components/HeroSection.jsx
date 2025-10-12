import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Simple Counter Hook for count-up animation
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.floor((target * progress) / duration);
      setCount(Math.min(currentCount, target));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
};

// Badge Component
const StatBadge = ({ number, label }) => {
  const count = useCounter(number);
  return (
    <div className="px-4 py-2">
      <div className="text-4xl font-bold tet-[#FCFCFC]">{count.toLocaleString()}+</div>
      <div className="text-md text-[#D9D9D9] font-normal">{label}</div>
    </div>
  );
};

const HeroSlider = () => {
  // Placeholder background image URL - replace with actual oil rig image
  const bgImage = '/hero.jpg';

  return (
    <section className="bg-[#091F5B] py-7">
      <div className="relative container mx-auto overflow-hidden rounded-md border border-[#363636] p-12">
        <span className='absolute top-0 start-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_54.74%,rgba(0,0,0,0.8)_90.95%),linear-gradient(283.51deg,rgba(0,0,0,0)_50.81%,rgba(0,0,0,0.8)_98.43%)] z-10 block'></span>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative flex flex-col justify-center items-start text-white z-10">
          {/* Title */}
          <h1 className="text-2xl font-medium mb-4 text-white">Falcon Russia</h1>

          {/* Subtitle */}
          <h2 className="text-6xl font-bold mb-2 text-white">
            A DEPENDABLE PARTNER
          </h2>
          <p className="text-lg font-normal mb-4 text-[#CFD2D7]">FOR THE OIL AND GAS INDUSTRY</p>

          {/* Contact Button */}
          <Link to='/contactus' className="bg-white w-fit text-blue-900 px-6 py-3 rounded-sm font-semibold hover:bg-gray-100 transition-colors mb-12 flex items-center">
            Contact Us <MdArrowOutward  className="ms-2"/>
          </Link>

          {/* Industries Section */}
          <div className="w-full grid grid-cols-2 mt-30">
            <div className="mb-4">
              <Swiper
               modules={[Navigation, Pagination, Autoplay]}
               spaceBetween={0}
               autoplay={{
                 delay: 2000, // adjust delay speed
                 disableOnInteraction: false,
                 reverseDirection: false, // ✅ move only forward
               }}
               pagination={{ clickable: true }}
               loop={true} // ✅ keep going forward infinitely
               allowTouchMove={false} // optional: disable manual swipe
               className="mx-h-30"
              >
                <SwiperSlide>
                  <span className='text-[#D9D9D9] font-bold mb-2 inline-block text-sm uppercase'>Industries</span>
                  <h3 className="text-4xl font-medium mb-2">OIL</h3>
                  <p className="text-md text-[#D9D9D9] font-normal leading-relaxed">
                    Leading organizations count on us for successful M&A transactions,
                    <br />
                    expert debt advisory services, accurate valuations.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <span className='text-[#D9D9D9] font-bold mb-2 inline-block text-sm uppercase'>Industries</span>
                  <h3 className="text-4xl font-medium mb-2">OIL</h3>
                  <p className="text-md text-[#D9D9D9] font-normal leading-relaxed">
                    Leading organizations count on us for successful M&A transactions,
                    <br />
                    expert debt advisory services, accurate valuations.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <span className='text-[#D9D9D9] font-bold mb-2 inline-block text-sm uppercase'>Industries</span>
                  <h3 className="text-4xl font-medium mb-2">OIL</h3>
                  <p className="text-md text-[#D9D9D9] font-normal leading-relaxed">
                    Leading organizations count on us for successful M&A transactions,
                    <br />
                    expert debt advisory services, accurate valuations.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Stats Badges */}
            <div className="flex space-x-4 h-fit">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-[#81818180] grid grid-cols-3">
                <StatBadge number={580} label="Projects Completed" />
                <StatBadge number={2584} label="Factory Worldwide" />
                <StatBadge number={468} label="Jobs Done" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSlider;