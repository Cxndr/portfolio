export const techColors = {
  "JIMP": " bg-orange-400",
  "Next.js": " bg-blue-400",
  "DaisyUI": " bg-pink-400",
  "Tailwind": " bg-lime-500",
  "TypeScript": " bg-indigo-700",
}

export type DevProject = {
  title: string,
  imagesSrc: string[],
  whatList: string[],
  whyList: string[],
  howList: string[],
  technologies: string[],
  skillsGained: string[],
  liveSiteLink: string,
  githubLink: string,
  longDescription: string,
  imageSrcDesktop: string,
  imageSrcMobile: string,
}


export const devProjects: DevProject[] = [
  {
    title: "OPTCG Sim Themer",
    imagesSrc: ["/img/optcgsimthemer.png"],
    whatList: [
      "Create themes for <b>One Piece TCG Sim.</b>",
      "Intuitive for non-technical users.",
      "Free to deliver to 10k target userbase.",
      "<b><i>Desktop-first</i></b> UI.",
    ],
    whyList: [
      "Default visuals are not aesthetically focused.",
      "Creating themes with Photoshop/GIMP is slow and technical.",
      "<b><i>Real-world</i></b> user base to develop for.",
    ],
    howList: [
      "<b>JIMP</b> (Javascript Image Manipulation Program).",
      "Web workers for <b><i>speedy and unintrusive</i></b> image manipulation tasks in browser.",
      "<b><i>Client-side</i></b> focused development.",
    ],
    technologies: ["JIMP", "Next.js", "DaisyUI", "Tailwind", "TypeScript"],
    skillsGained: [
      "🖼️ Image Manipulation Algorithms.",
      "👤 Real-World User Base.",
      "🖱️ Client-Side Development.",
      "🖥️ Desktop-First Design.",
    ],
    liveSiteLink: "https://optcgsimthemer.com",
    githubLink: "https://github.com/Cxndr/optcgsim-themer",
    longDescription: "get this from the dev copy page",
    imageSrcDesktop: "/img/optcgsimthemer.png",
    imageSrcMobile: "/img/optcgsimthemer-mobile.png"
  },
  {
    title: "OPTCG Sim Themer",
    imagesSrc: ["/img/optcgsimthemer.png"],
    whatList: [
      "Create themes for <b>One Piece TCG Sim.</b>",
      "Intuitive for non-technical users.",
      "Free to deliver to 10k target userbase.",
      "<b><i>Desktop-first</i></b> UI.",
    ],
    whyList: [
      "Default visuals are not aesthetically focused.",
      "Creating themes with Photoshop/GIMP is slow and technical.",
      "<b><i>Real-world</i></b> user base to develop for.",
    ],
    howList: [
      "<b>JIMP</b> (Javascript Image Manipulation Program).",
      "Web workers for <b><i>speedy and unintrusive</i></b> image manipulation tasks in browser.",
      "<b><i>Client-side</i></b> focused development.",
    ],
    technologies: ["JIMP", "Next.js", "DaisyUI", "Tailwind", "TypeScript"],
    skillsGained: [
      "🖼️ Image Manipulation Algorithms.",
      "👤 Real-World User Base.",
      "🖱️ Client-Side Development.",
      "🖥️ Desktop-First Design.",
    ],
    liveSiteLink: "https://optcgsimthemer.com",
    githubLink: "https://github.com/Cxndr/optcgsim-themer",
    longDescription: "get this from the dev copy page",
    imageSrcDesktop: "/img/optcgsimthemer.png",
    imageSrcMobile: "/img/optcgsimthemer-mobile.png"
  }
]





