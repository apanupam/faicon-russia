import React from 'react';

function Commodities({ bg, textc, title, sub, desc }) {
  return (
    <div className={`commodities-main rounded-md ${bg || 'bg-white'}`}>
      <div className="pt-4 pb-2 border-b border-[#EDF0F5]">
        <img src={`${ textc ? 'mdi_deal_white.svg' : '/mdi_deal.svg'}`} className="h-15 mx-auto" alt="" />
      </div>
      <div className="px-8 py-6">
        <h4 className={`text-sm font-normal mb-2 uppercase ${textc ? 'text-white': 'text-[#344EAD]'}`}>{sub}</h4>
        <h3 className={`text-lg font-bold text-[#091F5B] mb-2 ${textc ? 'text-white': 'text-[#344EAD]'}`}>{title}</h3>
        <p className={`text-sm font-normal ${textc ? 'text-white' : 'text-[#818181]'}`}>{desc}</p>
      </div>
    </div>
  );
}

export default Commodities;
