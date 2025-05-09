export const techColors = {
  "JIMP": " bg-orange-400",
  "Next.js": " bg-blue-400",
  "Tailwind": " bg-lime-500",
  "TypeScript": " bg-indigo-700",
  "Python": " bg-teal-500",
  "Twitch API": " bg-purple-500",
  "Youtube API": " bg-red-500",
  "GameMaker Studio": " bg-green-500",
  "GML Script": " bg-emerald-500",
  "VBA": " bg-cyan-500",
  "MS Access": " bg-rose-500",
  "Javascript": " bg-amber-500",
  "CSS Animation": " bg-sky-500",
  "Postgres": " bg-fuchsia-500",
  "Windows": " bg-blue-700",
}

const techIconsPath = "/img/icons/tech/";

export const techIcons = {
  "JIMP": `${techIconsPath}/jimp.svg`,
  "Next.js": `${techIconsPath}/nextjs.svg`,
  "Tailwind": `${techIconsPath}/tailwind.svg`,
  "TypeScript": `${techIconsPath}/typescript.svg`,
  "Python": `${techIconsPath}/python.svg`,
  "Twitch API": `${techIconsPath}/twitch.svg`,
  "Youtube API": `${techIconsPath}/youtube.svg`,
  "GameMaker Studio": `${techIconsPath}/gamemaker.svg`,
  "GML Script": `${techIconsPath}/gml.svg`,
  "VBA": `${techIconsPath}/visualbasic.svg`,
  "MS Access": `${techIconsPath}/msaccess.svg`,
  "Javascript": `${techIconsPath}/javascript.svg`,
  "CSS Animation": `${techIconsPath}/css3.svg`,
  "Postgres": `${techIconsPath}/postgres.svg`,
  "Windows": `${techIconsPath}/windows.svg`,
}

export const techLinks = {
  "JIMP": "https://jimp-dev.github.io/jimp/",
  "Next.js": "https://nextjs.org/",
  "Tailwind": "https://tailwindcss.com/",
  "TypeScript": "https://www.typescriptlang.org/",
  "Python": "https://www.python.org/",
  "Twitch API": "https://dev.twitch.tv/docs/api/",
  "Youtube API": "https://developers.google.com/youtube/v3",
  "GameMaker Studio": "https://gamemaker.io/",
  "GML Script": "https://manual.gamemaker.io/monthly/en/GameMaker_Language/GameMaker_Language_Index.htm",
  "VBA": "https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office",
  "MS Access": "https://www.microsoft.com/en-gb/microsoft-365/access",
  "Javascript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "CSS Animation": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations",
  "Postgres": "https://www.postgresql.org/",
  "Windows": "https://www.microsoft.com/en-us/windows",
}

export type DevProject = {
  title: string,
  slug: string,
  imageDir: string,
  imageDirMobile?: string,
  whatList: string[],
  whyList: string[],
  howList: string[],
  technologies: string[],
  skillsGained: string[],
  liveSiteLink?: string,
  githubLink: string,
  shortDescription: string,
  longDescription: string,
  thumbnailSrc: string,
}

// Helper function to generate slugs
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const devProjects: DevProject[] = [
  {
    title: "OPTCG Sim Themer",
    slug: generateSlug("OPTCG Sim Themer"),
    imageDir: "/img/dev/optcgsimthemer",
    imageDirMobile: "/img/dev/optcgsimthemer/mobile",
    thumbnailSrc: "/img/dev/optcgsimthemer.png",
    whatList: [
      "Create themes for <b>One Piece TCG Sim.</b>",
      "Intuitive for non-technical users.",
      "Free to deliver to 10k target userbase.",
      "<b>Desktop-first</b> UI (target audience is almost entirely desktop users).",
    ],
    whyList: [
      "Default visuals are not aesthetically focused.",
      "Creating themes with Photoshop/GIMP is slow and technical.",
      "<b>Real-world</b> user base to develop for.",
    ],
    howList: [
      "<b>JIMP</b> (Javascript Image Manipulation Program).",
      "Web workers for <b><i>smooth and speedy</i> image manipulation</b> in browser.",
      "<b>Client-side</b> focused development.",
    ],
    technologies: ["JIMP", "Next.js", "Tailwind", "TypeScript"],
    skillsGained: [
      "🖼️ Image Manipulation Algorithms.",
      "👤 Real-World User Base.",
      "🖱️ Client-Side Development.",
      "🖥️ Desktop-First Design.",
    ],
    liveSiteLink: "https://optcgsimthemer.com",
    githubLink: "https://github.com/Cxndr/optcgsim-themer",
    shortDescription: "Create themes for <b>One Piece TCG Sim.</b>",
    longDescription: "get this from the dev copy page",
  },

  {
    title: "Twich Auto-Clipper",
    slug: generateSlug("Twich Auto-Clipper"),
    imageDir: "/img/dev/twitchclips",
    imageDirMobile: "/img/dev/twitchclips/mobile",
    thumbnailSrc: "/img/dev/twitchclips.png",
    whatList: [
      "Automatically generate <b>Twitch clips</b> based on chat activity.",
      "Run on <b>multiple channels</b> with a single instance.",
      "<b>Hands free</b> - set it and forget it.",
    ],
    whyList: [
      "Automating a time-consuming task.",
      "No need to watch streams or manually search for clips.",
      "Get highlights automatically that can be missed by social media propogation.",
    ],
    howList: [
      "<b>CLI Python script</b> that runs locally and saves clip URLs to a CSV file.",
      "Utilizes <b>Twitch API</b> to trigger clips and retrieve chat activity.",
      "Triggers clips on chat activity spikes compared to a running threshold.",
    ],
    technologies: ["Python", "Twitch API"],
    skillsGained: [
      "🐍 Python Scripting.",
      "🔑 Twitch API Integration.",
      "🔍 Averaging Algorithm.",
      "📊 Data Handling.",
    ],
    githubLink: "https://github.com/Cxndr/twitch-auto-clipper",
    shortDescription: "Automatically generate <b>Twitch clips</b> based on spikes in chat activity.",
    longDescription: "get this from the dev copy page",
  },

  {
    title: "Twitch-Tok",
    slug: generateSlug("Twitch-Tok"),
    imageDir: "/img/dev/twitchtok",
    imageDirMobile: "/img/dev/twitchtok/mobile",
    thumbnailSrc: "/img/dev/twitchtok.png",
    whatList: [
      "Tik-Tok style web app for twitch clips.",
      "Follow channels and categories to generate a feed of clips.",
      "Algorithmless feed generation.",
      "Save clips to your own favorites list.",
    ],
    whyList: [
      "Get highlights automatically in a scrollable feed.",
      "Twitch itself is not focused on creating a good UX for clips-only viewing.",
      "Not already offered by Twitch or other services.",
    ],
    howList: [
      "NextJS web app with basic login system and user profile.",
      "Utilizes <b>Twitch API</b> to pull clips from past few days and sort by views.",
      "Minimal user interface focused on maximizing viewing experience.",
    ],
    technologies: ["Next.js" , "Tailwind", "TypeScript", "Postgres"],
    skillsGained: [],
    liveSiteLink: "https://twitch-tok-client.onrender.com",
    githubLink: "https://github.com/Cxndr/twitch-tok",
    shortDescription: "Tik-Tok style web app for twitch clips.",
    longDescription: "",
  },

  {
    title: "MAHS Auction House",
    slug: generateSlug("MAHS Auction House"),
    imageDir: "/img/dev/mahs",
    imageDirMobile: "/img/dev/mahs/mobile",
    thumbnailSrc: "/img/dev/mahs.png",
    whatList: [
      "All-in-one software for all aspects of running an auction house business.",
      "Manage items, catalogues, vendors and buyers.",
      "Track payments, generate reports and analytics.",
    ],
    whyList: [
      "Existing solutions have complex UI/UX that isn't focused on usability.",
      "I was using existing solutions on daily basis.",
      "All in one offline solution works best for fixed location small auction houses.",
    ],
    howList: [
      "Heavily customized MS Access database.",
      "Stylized frontend form views focused on usability and UX.",
      "Deployed using on site windows server for offline uptime in remote locations.",
    ],
    technologies: ["VBA", "MS Access", "Windows"],
    skillsGained: [],
    githubLink: "https://github.com/Cxndr/MAHS",
    shortDescription: "All-in-one software for managing all aspects of an auction house.",
    longDescription: "",
  },

  {
    title: "Promptr",
    slug: generateSlug("Promptr"),
    imageDir: "/img/dev/promptr",
    imageDirMobile: "/img/dev/promptr/mobile",
    thumbnailSrc: "/img/dev/promptr.png",
    whatList: [
      "Word game web app - create humourous responses to prompts using only randomly generated words.",
      "Inspired by <b>Ransom Notes</b> board game and <b>Dark Souls</b> message system",
      "Vote on other users responses.",
    ],
    whyList: [
      "Unique game design not offered by existing games.",
      "Utilizes social media style interfaces to extend dynamics of a game.",
      "Accessibility features to stand out and appeal to a largely neglected market.",
    ],
    howList: [
      "Next.js web app with shadcn ui components.",
      "Dyslexic friendly font option and colorblind filters.",
      "Dynamic SVG generater for unique randomized background.",
    ],
    technologies: ["Next.js", "Tailwind", "TypeScript", "Postgres"],
    skillsGained: [],
<<<<<<< HEAD
    liveSiteLink: "https://promptr-omega.vercel.app/",
=======
    liveSiteLink: "https://promptr-omega.vercel.app",
>>>>>>> 7997c184df4a0614999920070cf9730e3c1ce327
    githubLink: "https://github.com/Cxndr/promptr",
    shortDescription: "Word game web app inspired by <b>Ransom Notes</b> and <b>Dark Souls</b>.",
    longDescription: "",
  },

  {
    title: "clouds&waves",
    slug: generateSlug("clouds&waves"),
    imageDir: "/img/dev/cloudsandwaves",
    imageDirMobile: "/img/dev/cloudsandwaves/mobile",
    thumbnailSrc: "/img/dev/cloudsandwaves.png",
    whatList: [
      "Social media web app for sharing and discovering music in niche internet genres",
      "Stylized to market aesthetics",
      "Full profile, feed and filtering capabilities.",
    ],
    whyList: [
      "Dedicated space for niche communities away from social media.",
      "Capitalize on anamosity toward social media in music subcultures.",
      "Dedicated spaces have been lost over time but offer a different experience.",
    ],
    howList: [
      "Next.js web app using server side rendering",
      "Postgres database for basic CRUD functionality.",
      "Custom design aesthetics for each genre niche."
    ],
    technologies: ["Next.js", "Tailwind", "TypeScript", "Postgres"],
    skillsGained: [],
    liveSiteLink: "https://cloudsandwaves2.vercel.app/",
    githubLink: "https://github.com/Cxndr/submission-social-network",
    shortDescription: "Aesthetic driven social media site for sharing and discovering niche music.",
    longDescription: "",
  },

  {
    title: "PokeRogue",
    slug: generateSlug("PokeRogue"),
    imageDir: "/img/dev/poke-rogue",
    imageDirMobile: "/img/dev/poke-rogue/mobile",
    thumbnailSrc: "/img/dev/poke-rogue.png",
    whatList: [
      "Pokemon rouge-like auto-battler web game.",
      "Gameplay inspired by <b>Balatro</b>, <b>The Bazaar</b> and <b>Pokemon</b> battle systems.",
      "<b>Javascript/React Only</b> game development (no canvas or webgl).",
    ],
    whyList: [
      "Unique game design not offered by other auto-battlers or roguelikes.",
      "Explore using React basic web app workflows for game development.",
      "Exploration of complex data API usage and implementation.",
    ],
    howList: [
      "Next.js server side rendering with client side interactivity.",
      "Seperate routes for different game screens.",
      "Utility files for handling data passing, game logic and state management.",
    ],
    technologies: ["Next.js", "Tailwind", "TypeScript", "Postgres"],
    skillsGained: [],
    liveSiteLink: "https://poke-rogue-gules.vercel.app/",
    githubLink: "https://github.com/Cxndr/poke-rogue",
    shortDescription: "Web roguelike game that doesn't use canvas, webgl or similar technologies.",
    longDescription: "",
  }, 

  {
    title: "Pomodoro Timer",
    slug: generateSlug("Pomodoro Timer"),
    imageDir: "/img/dev/pomodoro",
    imageDirMobile: "/img/dev/pomodoro/mobile",
    thumbnailSrc: "/img/dev/pomodoro.gif",
    whatList: [
      "Simple and easy to use pomodoro timer web app.",
      "Youtube playlist integration for seperate work and break music.",
      "Aesthetically pleasing simple user interface.",
    ],
    whyList: [
      "Explore building functionality with vanilla Javascript.",
      "Explore modern css animation and layout techniques.",
      "To use personally to help with focus and productivity.",
    ],
    howList: [
      "Precise and highly accurate timing functions using datetime comparison.",
      "Vanilla Javascript and CSS for basic functionality and animations.",
      "Youtube API for background music integration using a user's playlist.",
    ],
    technologies: ["Javascript", "CSS Animation", "Youtube API"],
    skillsGained: [],
    githubLink: "https://github.com/Cxndr/PomodoroTimer",
    liveSiteLink: "https://cxndr.github.io/PomodoroTimer/",
    shortDescription: "Simple and aethetically focused Pomodoro Timer web application.",
    longDescription: "",
  },

  {
    title: "Item Shop Game",
    slug: generateSlug("Item Shop Game"),
    imageDir: "/img/dev/itemshop",
    imageDirMobile: "/img/dev/itemshop/mobile",
    thumbnailSrc: "/img/dev/itemshop.png",
    whatList: [
      "Item shop game loosely inspired by <b>Recettear</b> in a 2D pixel art style.",
      "Sell to customers who visit your shop in a rotating day cycle.",
      "<b>Fully customizable</b> shop system: <i><b>'draw in'</b></i> counters and furniture.",
    ],
    whyList: [
      "<b>Recettear</b> is my favorite game but is dated and in a niche unexplored genre.",
      "Modern shop-based games moved away from core gameplay loop I like.",
      "Gameplay concept fits well into the emerging <b>cosy games</b> supergenre.",
    ],
    howList: [
      "<b>GameMaker Studio 2</b> - proven 2D game engine with extensive documentation and wide range of accessible community resources.",
      "<b>Custom GML scripts</b> for unique, performant gameplay mechanics.",
    ],
    technologies: ["GameMaker Studio", "GML Script"],
    skillsGained: [],
    githubLink: "https://github.com/Cxndr/ItemShop",
    shortDescription: "Item shop game loosely inspired by <b>Recettear</b> in a 2D pixel art style.",
    longDescription: "",
  }
]





