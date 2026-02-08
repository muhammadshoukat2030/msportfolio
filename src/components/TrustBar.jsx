import React from 'react';

const TrustBar = () => {
 

  return (
    <div className="w-full bg-[#030303] py-0 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Bottom Rating Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-6 border-y border-white/9">
          {/* Star Rating */}
          <div className="flex items-center gap-4">
            <div className="flex text-yellow-500 text-xl">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <div>
              <p className="text-white font-bold leading-none">5.0 Rating</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-tighter">From 30+ clients</p>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Fixed Pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Money-Back Guarantee
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> 100% Code Ownership
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;