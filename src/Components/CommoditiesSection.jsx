import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Commodities from './Commodities';
import { MdArrowOutward } from 'react-icons/md';

// Simple SVG Icon for Handshake
const HandshakeIcon = () => (
  <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CommoditiesSection = () => {
  const cards = [
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    { 
      sub:'Sell side',
      title: "DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
  ];

  return (
    <section className="py-16 px-8 bg-blue-900 relative commoditiesSection">
      <div className="container mx-auto pt-4 pb-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="">
            <h4 className="text-sm font-normal text-[#D9D9D9] mb-2 uppercase">Demo</h4>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Our Commodities</h2>
          </div>
          
           <button className="bg-white text-[#091F5B] px-5 py-3 rounded-md hover:bg-blue-800 hover:text-white transition flex items-center cursor-pointer">
            <MdArrowOutward className='text-lg sm:text-xl'/>
          </button>
        </div>

        {/* Swiper */}
        {/* <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4}
          spaceBetween={24}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => `<span class="${className} bg-white/50 w-2 h-2 rounded-full"></span>`
          }}
          className="pb-8"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 }
          }}
        > */}
        <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         spaceBetween={0}
         autoplay={{
           delay: 2000, // adjust delay speed
           disableOnInteraction: false,
           reverseDirection: false, // ✅ move only forward
         }}
         pagination={{ clickable: true }}
         loop={true}
         allowTouchMove={false}
         breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 }
        }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Commodities
                 textc={false}
                 title="DEAL FACILITATION"
                 desc="We facilitate transactions by linking buyers and sellers in the energy and marine industries."
                 sub="Sell side"
               />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CommoditiesSection;