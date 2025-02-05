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
  longDescription: string
}


export const devProjects: DevProject[] = [
  {
    title: "One Piece TCG Sim Themer",
    imagesSrc: ["/img/optcgsimthemer.png"],
    whatList: [
      "Create themes for One Piece TCG Sim.",
      "Intuitive for non-technical users.",
      "Free to deliver to 10k users.",
      "Desktop-first UI.",
    ],
    whyList: [
      "Default visuals are not aesthetically focused.",
      "Creating themes with Photoshop/GIMP is slow and technical.",
      "Real-world user base.",
    ],
    howList: [
      "JIMP (Javascript Image Manipulation Program).",
      "Web workers for image manipulation.",
      "Client-side focused development.",
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
    longDescription: "get this from the dev copy page"
  }
]





