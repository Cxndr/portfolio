import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";



export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">

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

        <div className="flex-[2_1_66%] px-6 text-zinc-900">
          <h1 className="text-4xl font-bold mb-3 text-cs-1-muted">Matt Vandersluys</h1>
          <h2 className="text-2xl mb-3 text-cs-2-muted">UX focused full stack web developer</h2>
          <p>Hey! 🙋‍♂️ </p>
          <p>I&apos;m a full stack web developer with a particular interest in creating engaging and intuitive user experiences. My current core ethos is that users having a smooth and intuitive experience should be the #1 priority when creating applications.</p>
          <p>I have a background in working in marketing for small businesses utilizing social media, graphic design and photography skills to engage audiences and convey cohesive branding.</p>
          <p>In my spare time I also enjoy making computer music in a variety of styles and playing trading card games competatively, both of which i&apos;ve engaged in my entire life and have become fruitful creative outlets for me.</p>
        </div>

      </div>

      <div className="flex justify-center items-center">
        <Link href="/dev">
          <MdKeyboardDoubleArrowDown className="text-4xl text-cs-1-muted animate-bounce" />
        </Link>
      </div>

    </div>

  );
}