export default function SlothCSS({ className }: { className?: string }) {
  return (  
    <div className={` ${className}`}>
      
      {/* head shape */}
      <div className="w-48 h-48 bg-[#D79E78] rounded-full z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FFEFE9] rounded-full z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-0 w-40 h-20 bg-[#D79E78] z-20 rounded-t-full" />
      <div className="absolute top-0 left-1/2 -translate-x-20 translate-y-10 w-24 h-24 bg-[#FFEFE9] z-20 rounded-full" />
      <div className="absolute top-0 right-1/2 translate-x-20 translate-y-10 w-24 h-24 bg-[#FFEFE9] z-20 rounded-full" />

      {/* eye patches */}
      <div className="absolute top-0 left-1/2 -translate-x-23 translate-y-14 w-20 h-14 bg-[#AC6C44] -rotate-16 z-20 rounded-r-full rounded-tl-full" />
      <div className="absolute top-0 right-1/2 translate-x-23 translate-y-14 w-20 h-14 bg-[#AC6C44] rotate-16 z-20 rounded-l-full rounded-tr-full" />

      {/* eyes */}
      <div className="absolute top-0 left-1/2 -translate-x-14 translate-y-17 w-8 h-8 bg-[black] z-20 rounded-full" />
      <div className="absolute top-0 right-1/2 translate-x-14 translate-y-17 w-8 h-8 bg-[black] z-20 rounded-full" />

      {/* pupils */}
      <div className="absolute top-0 left-1/2 -translate-x-10.5 translate-y-20 w-3.5 h-3.5 bg-[white] z-20 rounded-full" />
      <div className="absolute top-0 right-1/2 translate-x-10.5 translate-y-20 w-3.5 h-3.5 bg-[white] z-20 rounded-full" />

      {/* nose */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 w-7 h-5 bg-[#52271F] rounded-[100%] z-20" />
      <div className="absolute -rotate-12 top-1/2 left-1/2 -translate-x-2 -translate-y-0 w-2 h-1 bg-[white] rounded-[100%] z-20" />

      {/* mouth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 w-10 h-1 bg-[black] rounded-[45%] z-20" />


      {/* head mask */}
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-17 border-[#D79E78] rounded-full z-200" />

    </div>
  )
}
