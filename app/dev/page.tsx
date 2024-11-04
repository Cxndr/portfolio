import Image from "next/image"

export default function DevPage() {

  return (
    <div className="flex gap-4">
      
      <div className="w-2/3 flex flex-col">
        <Image>Project Image</Image>
      </div>
      
      <div className="flex-grow h-full flex flex-col">
        {/* projects.map((project) => {}*/}
      </div>

    </div>
  )
}