



const cards = [
  {
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Booking',
    desc: 'Secure shelter reservations, guide bookings, and park entries with a single tap.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Offline Payments',
    desc: 'Store digital passes and complete offline-verified transactions without cell reception.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Stay in Touch',
    desc: 'Share live locations with trail friends and send distress alerts without active network signals.',
  },
];

function MobileApp() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.12),transparent_50%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* TEXT BOX & FEATURES */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="self-start inline-block text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
                Mobile Experience
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Plan your travels from anywhere with our mobile app
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                Get full access to offline routing, real-time safety tracking, and instant shelter booking. Take the best guide for your outdoor journeys.
              </p>

              {/* CARDS BOX */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 p-5 rounded-2xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/85 hover:border-slate-700/50 transition duration-300 group shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-950/60 border border-sky-800/30 group-hover:scale-110 transition duration-300">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-sky-300 transition duration-300">
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
              <div className="relative mx-auto border-8 border-slate-800 bg-slate-950 rounded-[3rem] h-[550px] w-[265px] shadow-2xl overflow-hidden ring-12 ring-slate-900/30 select-none">
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-slate-950 rounded-full absolute left-4" />
                  <div className="w-1.5 h-1.5 bg-slate-950 rounded-full absolute right-6" />
                </div>

                {/* Status Bar */}
                <div className="absolute top-1.5 left-0 right-0 px-6 flex justify-between items-center text-[10px] text-slate-400 font-bold z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    {/* Signal icon */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 3c-1.2 0-2.4.2-3.5.7l10.8 10.8c.5-1.1.7-2.3.7-3.5 0-4.4-3.6-8-8-8zm-8 4.7C3.2 8.8 3 10.1 3 11.5c0 5 4 9 9 9 1.4 0 2.7-.2 3.8-1L4 7.7z" />
                    </svg>
                    {/* Battery icon */}
                    <span className="border border-slate-400 rounded-sm px-0.5 py-px text-[8px] scale-75">100%</span>
                  </div>
                </div>

                {/* Mock Application Screen */}
                <div className="h-full flex flex-col bg-slate-900 text-white relative pt-12 overflow-hidden">
                  {/* App Header */}
                  <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none">ACTIVE TRAIL</p>
                      <h4 className="text-xs font-bold mt-0.5">High Tatras Valley</h4>
                    </div>
                    <span className="text-[10px] bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Live
                    </span>
                  </div>

                  {/* Topographic Map Canvas Mock */}
                  <div className="flex-1 relative bg-slate-950 flex flex-col justify-center items-center p-4">
                    {/* Topo Curves */}
                    <svg className="absolute inset-0 w-full h-full stroke-slate-800/40" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M-10,20 Q30,10 50,40 T110,30" strokeWidth="0.5" />
                      <path d="M-10,40 Q40,30 60,60 T110,50" strokeWidth="0.5" />
                      <path d="M-10,60 Q30,50 70,80 T110,70" strokeWidth="0.5" />
                      <path d="M-10,80 Q50,70 80,95 T110,90" strokeWidth="0.5" />
                    </svg>

                    {/* Active Track Path */}
                    <svg className="absolute inset-0 w-full h-full stroke-emerald-400" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 20 80 C 35 70, 30 50, 45 40 C 60 30, 55 20, 80 15" strokeWidth="2" strokeDasharray="3,3" />
                    </svg>

                    {/* Hiker marker (Current User) */}
                    <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-10">
                      <span className="flex h-4 w-4 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-md"></span>
                      </span>
                    </div>

                    {/* Mountain Friend Marker */}
                    <div className="absolute top-[18%] left-[78%] -translate-x-1/2 -translate-y-1/2 z-10 group">
                      <div className="relative h-6 w-6 rounded-full border-2 border-sky-400 overflow-hidden bg-slate-700 shadow-md">
                        {/* Mock avatar */}
                        <div className="text-[8px] flex items-center justify-center h-full font-bold bg-sky-900 text-sky-200">
                          JD
                        </div>
                      </div>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900/90 text-[7px] px-1 py-0.5 rounded border border-slate-700 text-white whitespace-nowrap">
                        Jan
                      </span>
                    </div>

                    {/* Mini Stats HUD overlay */}
                    <div className="absolute top-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl p-2.5 flex justify-between shadow-lg">
                      <div className="text-center flex-1 border-r border-slate-800">
                        <p className="text-[8px] text-slate-400">Altitude</p>
                        <p className="text-xs font-bold mt-0.5 text-sky-400">1,842 m</p>
                      </div>
                      <div className="text-center flex-1 border-r border-slate-800">
                        <p className="text-[8px] text-slate-400">Distance</p>
                        <p className="text-xs font-bold mt-0.5 text-sky-400">4.2 km</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-[8px] text-slate-400">ETA</p>
                        <p className="text-xs font-bold mt-0.5 text-sky-400">1h 15m</p>
                      </div>
                    </div>

                    {/* Floating Shelter Card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 border border-slate-800 rounded-xl p-3 shadow-xl flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-sky-950 border border-sky-900 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-[10px] font-bold truncate">Murowaniec Shelter</h5>
                        <p className="text-[8px] text-slate-400 truncate">Reservations secured for today</p>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* Safety Alert bottom HUD */}
                  <div className="px-4 py-3 bg-indigo-950/60 border-t border-indigo-900/50 backdrop-blur-md flex justify-between items-center text-[9px]">
                    <span className="text-indigo-300 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      Live group connection active
                    </span>
                    <button className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded font-bold cursor-pointer transition">
                      SOS
                    </button>
                  </div>

                  {/* Safe Area Indicator */}
                  <div className="w-20 h-1 bg-slate-800 rounded-full mx-auto my-1.5 shrink-0" />
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