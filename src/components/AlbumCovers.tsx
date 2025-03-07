import Image from "next/image";

export default function AlbumCovers() {
  return (
    <div className="flex flex-row">

          <div className="flex flex-col items-center justify-center -rotate-11 z-10">
            <Image 
              src="/img/albumcover-fgb.png" 
              alt="feelgoodbad album cover" 
              width={132} 
              height={132} 
              className="rounded-lg border-2 border-th-neutral-950 shadow-th-sm shadow-th-pink-500"
            />
            <span className="label text-center mt-3 text-th-neutral-950">feelgoobad</span>
          </div>

          <div className="flex flex-col items-center justify-center rotate-9 z-20 -translate-x-1 translate-y-4">
            <Image 
              src="/img/albumcover-trash.png" 
              alt="feelgoodbad album cover" 
              width={132} 
              height={132} 
              className="rounded-lg border-2 border-th-neutral-950 shadow-th-sm shadow-th-blue-500"
            />
            <span className="label text-center mt-3 text-th-neutral-950">trxsh</span>
          </div>

    </div>
  );
}