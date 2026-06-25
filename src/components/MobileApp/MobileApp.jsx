'use client';

import { useState, useEffect } from "react";



const cards = [
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Trading',
    desc: 'Buy, sell, and swap cryptocurrencies instantly with real-time execution and deep liquidity.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Secure Wallet',
    desc: 'Store your digital assets with bank-grade encryption, cold storage, and multi-factor authentication.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Market Alerts',
    desc: 'Get real-time price notifications and personalized market insights directly on your phone.',
  },
];

function MobileApp() {

  const [time , setTime] = useState('');

  useEffect(()=>{

    const time = ()=>{

      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));


    }
    time();
    const interval = setInterval(time, 60000)

    return () => clearInterval(interval)
  }
  
  
  ,[])



  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-purple-950 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.12),transparent_50%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* TEXT BOX & FEATURES */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* SUBTITLE */}
              <span className="self-start inline-block text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
                Mobile Experience
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Manage your wallet from anywhere you want
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                Get full access to your crypto portfolio, real-time market data, and secure transactions on the go.
              </p>

              {/* CARDS BOX */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 p-5 rounded-2xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/85 hover:border-slate-700/50 transition duration-300 group shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-950/60 border border-cyan-800/30 group-hover:scale-110 transition duration-300">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition duration-300">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-normal text-slate-400">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* DOWNLOAD BUTTONS */}
              <div className="flex flex-wrap gap-4">
                {/* App Store Button */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl border border-slate-850 transition duration-300 shadow-lg text-left"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider leading-none">
                      Download on the
                    </p>
                    <p className="text-sm font-semibold leading-tight mt-0.5">
                      App Store
                    </p>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl border border-slate-850 transition duration-300 shadow-lg text-left"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M5 3.00005C4.64 3.00005 4.3 3.12005 4.04 3.32005L12.92 12.21L17.84 7.29005L5 3.00005ZM3.25 4.32005C3.09 4.60005 3 4.93005 3 5.30005V18.7001C3 19.0701 3.09 19.4001 3.25 19.6801L12.21 10.72L3.25 4.32005ZM18.71 8.16005L13.62 13.25L18.71 18.34C19.5 17.88 21 16.5 21 12.0001C21 7.50005 19.5 6.12005 18.71 8.16005ZM12.92 14.28L4.04 23.16C4.3 23.36 4.64 23.48 5 23.48L17.84 19.2L12.92 14.28Z" />
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider leading-none">
                      GET IT ON
                    </p>
                    <p className="text-sm font-semibold leading-tight mt-0.5">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* PHONE MOCKUP COLUMN */}
            <div className="lg:col-span-5 flex justify-center">
              {/* Phone Container */}
              <div className="relative mx-auto border-8 border-slate-800 bg-slate-950 rounded-[3rem] h-[570px] w-[265px] shadow-2xl overflow-hidden ring-12 ring-slate-900/30 select-none">
                {/* Status Bar with Dynamic Island */}
                <div className="absolute top-3 left-0 right-0 flex items-center px-6 text-[10px] text-slate-400 font-bold z-30">
                  {/* Time - left corner */}
                  <div className="flex-1 text-left">
                    <span>{time}</span>
                  </div>

                  {/* Dynamic Island - centered */}
                  <div className="w-[90px] h-[22px] bg-black rounded-full flex items-center shadow-sm flex-shrink-0">
                    <div className="ml-[18px] w-[7px] h-[7px] rounded-full bg-[#0a0a12] border border-[#1c1c2e] flex items-center justify-center">
                      <div className="w-[2.5px] h-[2.5px] rounded-full bg-indigo-500/25" />
                    </div>
                    <div className="ml-auto mr-[18px] w-[2.5px] h-[2.5px] rounded-full bg-slate-900" />
                  </div>

                  {/* Battery - right corner */}
                  <div className="flex-1 flex justify-end items-center gap-1">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 3c-1.2 0-2.4.2-3.5.7l10.8 10.8c.5-1.1.7-2.3.7-3.5 0-4.4-3.6-8-8-8zm-8 4.7C3.2 8.8 3 10.1 3 11.5c0 5 4 9 9 9 1.4 0 2.7-.2 3.8-1L4 7.7z" />
                    </svg>
                    <span className="border border-slate-400 rounded-sm px-0.5 py-px text-[8px] scale-75">100%</span>
                  </div>
                </div>

                {/* Mock Application Screen */}
                <div className="h-full flex flex-col bg-slate-900 text-white relative pt-16 overflow-hidden">
                  {/* App Header */}
                  <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none">PORTFOLIO</p>
                      <h4 className="text-xs font-bold mt-0.5">Total Balance</h4>
                    </div>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Live
                    </span>
                  </div>

                  {/* Candlestick Chart */}
                  <div className="flex-1 relative bg-slate-950 flex flex-col p-3">
                    {/* Chart SVG */}
                    <svg className="w-full h-full" viewBox="0 0 220 160" preserveAspectRatio="xMidYMid meet">
                      {/* Grid lines */}
                      <line x1="30" y1="20" x2="210" y2="20" stroke="#1e293b" strokeWidth="0.5" />
                      <line x1="30" y1="55" x2="210" y2="55" stroke="#1e293b" strokeWidth="0.5" />
                      <line x1="30" y1="90" x2="210" y2="90" stroke="#1e293b" strokeWidth="0.5" />
                      <line x1="30" y1="125" x2="210" y2="125" stroke="#1e293b" strokeWidth="0.5" />

                      {/* Y-axis labels */}
                      <text x="28" y="16" fill="#64748b" fontSize="6" textAnchor="end">48.2K</text>
                      <text x="28" y="51" fill="#64748b" fontSize="6" textAnchor="end">47.8K</text>
                      <text x="28" y="86" fill="#64748b" fontSize="6" textAnchor="end">47.4K</text>
                      <text x="28" y="121" fill="#64748b" fontSize="6" textAnchor="end">47.0K</text>

                      {/* Volume bars at bottom */}
                      <rect x="38" y="134" width="10" height="16" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="50" y="140" width="10" height="10" fill="#ef4444" opacity="0.2" rx="1" />
                      <rect x="62" y="130" width="10" height="20" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="74" y="136" width="10" height="14" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="86" y="142" width="10" height="8" fill="#ef4444" opacity="0.2" rx="1" />
                      <rect x="98" y="128" width="10" height="22" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="110" y="138" width="10" height="12" fill="#ef4444" opacity="0.2" rx="1" />
                      <rect x="122" y="126" width="10" height="24" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="134" y="132" width="10" height="18" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="146" y="140" width="10" height="10" fill="#ef4444" opacity="0.2" rx="1" />
                      <rect x="158" y="124" width="10" height="26" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="170" y="134" width="10" height="16" fill="#22c55e" opacity="0.2" rx="1" />
                      <rect x="182" y="144" width="10" height="6" fill="#ef4444" opacity="0.2" rx="1" />
                      <rect x="194" y="130" width="10" height="20" fill="#22c55e" opacity="0.2" rx="1" />

                      {/* Candlesticks */}
                      {/* C1: up */}
                      <line x1="43" y1="65" x2="43" y2="28" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="38" y="40" width="10" height="20" fill="#22c55e" rx="1" />

                      {/* C2: down */}
                      <line x1="55" y1="50" x2="55" y2="75" stroke="#ef4444" strokeWidth="1.5" />
                      <rect x="50" y="52" width="10" height="18" fill="#ef4444" rx="1" />

                      {/* C3: up */}
                      <line x1="67" y1="55" x2="67" y2="22" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="62" y="28" width="10" height="22" fill="#22c55e" rx="1" />

                      {/* C4: up */}
                      <line x1="79" y1="48" x2="79" y2="25" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="74" y="30" width="10" height="14" fill="#22c55e" rx="1" />

                      {/* C5: down */}
                      <line x1="91" y1="42" x2="91" y2="68" stroke="#ef4444" strokeWidth="1.5" />
                      <rect x="86" y="46" width="10" height="16" fill="#ef4444" rx="1" />

                      {/* C6: up */}
                      <line x1="103" y1="52" x2="103" y2="20" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="98" y="24" width="10" height="22" fill="#22c55e" rx="1" />

                      {/* C7: down */}
                      <line x1="115" y1="38" x2="115" y2="65" stroke="#ef4444" strokeWidth="1.5" />
                      <rect x="110" y="42" width="10" height="18" fill="#ef4444" rx="1" />

                      {/* C8: up */}
                      <line x1="127" y1="50" x2="127" y2="16" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="122" y="20" width="10" height="24" fill="#22c55e" rx="1" />

                      {/* C9: up */}
                      <line x1="139" y1="42" x2="139" y2="20" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="134" y="26" width="10" height="12" fill="#22c55e" rx="1" />

                      {/* C10: down */}
                      <line x1="151" y1="35" x2="151" y2="64" stroke="#ef4444" strokeWidth="1.5" />
                      <rect x="146" y="38" width="10" height="20" fill="#ef4444" rx="1" />

                      {/* C11: up */}
                      <line x1="163" y1="48" x2="163" y2="14" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="158" y="18" width="10" height="24" fill="#22c55e" rx="1" />

                      {/* C12: up */}
                      <line x1="175" y1="40" x2="175" y2="18" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="170" y="22" width="10" height="14" fill="#22c55e" rx="1" />

                      {/* C13: down */}
                      <line x1="187" y1="48" x2="187" y2="72" stroke="#ef4444" strokeWidth="1.5" />
                      <rect x="182" y="50" width="10" height="18" fill="#ef4444" rx="1" />

                      {/* C14: up */}
                      <line x1="199" y1="48" x2="199" y2="22" stroke="#22c55e" strokeWidth="1.5" />
                      <rect x="194" y="28" width="10" height="16" fill="#22c55e" rx="1" />
                    </svg>

                    {/* Mini Stats HUD overlay */}
                    <div className="absolute top-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl p-2.5 flex justify-between shadow-lg">
                      <div className="text-center flex-1 border-r border-slate-800">
                        <p className="text-[8px] text-slate-400">BTC</p>
                        <p className="text-xs font-bold mt-0.5 text-cyan-400">$42,580</p>
                      </div>
                      <div className="text-center flex-1 border-r border-slate-800">
                        <p className="text-[8px] text-slate-400">ETH</p>
                        <p className="text-xs font-bold mt-0.5 text-cyan-400">$2,310</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-[8px] text-slate-400">SOL</p>
                        <p className="text-xs font-bold mt-0.5 text-cyan-400">$145</p>
                      </div>
                    </div>

                 
                  </div>
                </div>

                {/* Safe Area Indicator */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
                  <div className="w-20 h-1 bg-slate-800 rounded-full animate-float transition" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;