"use client";

import Image from "next/image";


export default function TapeCollection() {
  return (
    <div className="translate-y-12 hover:scale-110 transition-all duration-300 cursor-pointer" onClick={() => {
      window.open("https://bandcamp.com/cxndrfux", "_blank");
    }}>
      <Image src="/img/cassette.gif" alt="gif of a cassette tape" width={200} height={200} />
      <span 
        className="text-th-neutral-950 text-lg leading-2.5 text-center font-bold font-caveat absolute top-3.5 left-14"
      >
        Tape Collection
      </span>
    </div>
  );
}