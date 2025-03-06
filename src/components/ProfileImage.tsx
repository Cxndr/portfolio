import Image from "next/image";

interface ProfileImageProps {
  size?: 'medium' | 'large';
}

export default function ProfileImage({ size = 'large' }: ProfileImageProps) {
  const sizeValue = size === 'medium' ? "80%" : "100%";
  
  return (    
    <div 
      className="aspect-square fixed -right-[9%] -bottom-[22%] rounded-full overflow-hidden border-24 border-th-blue-500"
      style={{ height: sizeValue }}
    >
      <Image 
        src="/img/profilepic.jpg" 
        alt="Matt Vandersluys playing Pokemon TCG at European International Championships 2022" 
        width={2185}
        height={2576} 
        className="-scale-x-100 object-cover -translate-y-16"
      />
    </div>
  )
}