import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Simple SVG Icon for Handshake
const HandshakeIcon = () => (
  <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CommoditiesSection = () => {
  const cards = [
    {
      title: "SELL SIDE DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    {
      title: "SELL SIDE DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    {
      title: "SELL SIDE DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    },
    {
      title: "SELL SIDE DEAL FACILITATION",
      description: "We facilitate transactions by linking buyers and sellers in the energy and marine industries."
    }
  ];

  return (
    <section className="py-16 px-8 bg-blue-900 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Commodities</h2>
          <button className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold hover:bg-white/20 transition-colors">
            →
          </button>
        </div>

        {/* Swiper */}
        <Swiper
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
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center border border-white/20">
                <HandshakeIcon />
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{card.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CommoditiesSection;