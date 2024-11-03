import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";


export default function HomePage() {
  return (
    <div className="flex gap-4 w-full max-w-5xl m-4">

      <div className="flex-[1_1_33%]">
        <AspectRatio ratio={9 / 16}>
          <Image
            src="/img/profilepic.jpg"
            alt="Picture of the myself playing pokemon trading card game at EUIC London 2023"
            height={5152}
            width={4370}
            className="rounded-3xl object-cover"
          />
        </AspectRatio>
      </div>

      <div className="flex-[2_1_66%] px-6 py-3 bg-foreground/80 rounded-3xl shadow-md shadow-shadowtheme text-background">
        <h1>Matt Vandersluys</h1>
        <h2>UX Focused Full Stack Web Developer</h2>
        <p>Hey! I&apos;m a full stack web developer with a particular interest in creating engaging and intuitive user experiences. My core ethos is that users having a smooth and intuitive experience should be the #1 priority when creating applications.</p>
        <p>I have a background in working in marketing for small businesses utilizing social media, graphic design and photography skills to engage audiences and cohesive branding. These experiences have helped provide me access to a wide range of user perspectives which has been very beneficial in my development work.</p>
        <p>In my spare time I also enjoy making computer music in a variety of styles (including cloud, dnb, vaporwave and future funk) and playing trading card games competatively, both of which i&apos;ve engaged in my entire life and have become leading aspects of my creative outlets.</p>
      </div>

    </div>


  );
}