import Image from "next/image";

interface ProfileImageProps {
  size?: 'medium' | 'large';
}

export default function ProfileImage({ size = 'large' }: ProfileImageProps) {
  const sizeValue = size === 'medium' ? "80%" : "100%";
  
  return (
    <div 
      className="
        aspect-square fixed
        scale-75 md:scale-100
        -left-1/3 bottom-0 translate-y-2/5 md:translate-y-0
        md:left-auto md:-right-[9%] md:-bottom-[22%] 
        rounded-full overflow-hidden 
        border-24 border-th-blue-500
      "
      style={{ height: sizeValue }}
    >
      <Image 
        src="/img/cartoonprofile01.png" 
        alt="Matt Vandersluys playing Pokemon TCG at European International Championships 2022" 
        width={1440}
        height={1440} 
        className="object-cover -translate-y-16 -translate-x-20"
      />
    </div>
  )
}