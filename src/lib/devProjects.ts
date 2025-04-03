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
  shortDescription: string,
  longDescription: string,
  imageSrcDesktop: string,
  imageSrcMobile: string,
  thumbnailSrc: string,
}


export const devProjects: DevProject[] = [
  {
    title: "OPTCG Sim Themer",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/optcgsimthemer.png",
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
    shortDescription: "Create themes for <b>One Piece TCG Sim.</b>",
    longDescription: "get this from the dev copy page",
    imageSrcDesktop: "/img/optcgsimthemer.png",
    imageSrcMobile: "/img/optcgsimthemer-mobile.png"
  },

  {
    title: "Twich Auto-Clipper",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/twitchclips.png",
    whatList: [
      "Automatically generate <b>Twitch clips</b> based on chat activity.",
      "Run on multiple channels with a single instance.",
      "Hands free, set it and forget it.",
      "Command line tool that writes to CSV file.",
    ],
    whyList: [
      "Automating a time-consuming task.",
      "No need to watch streams or manually search for clips.",
      "Get highlights automatically that can be missed by social media propogation.",
    ],
    howList: [
      "Python script that runs locally.",
      "Utilizes <b>Twitch API</b> to trigger clips and retrieve chat activity.",
      "Monitors chat activity and triggers clips based on a spike in activity compared to a running average threshold.",
    ],
    technologies: ["Python", "Twitch API"],
    skillsGained: [
      "🐍 Python Scripting.",
      "🔑 Twitch API Integration.",
      "🔍 Averaging Algorithm.",
      "📊 Data Handling.",
    ],
    liveSiteLink: "",
    githubLink: "https://github.com/Cxndr/TwitchAutoClipper",
    shortDescription: "Automatically generate <b>Twitch clips</b> based on spikes in chat activity.",
    longDescription: "get this from the dev copy page",
    imageSrcDesktop: "/img/optcgsimthemer.png",
    imageSrcMobile: "/img/optcgsimthemer-mobile.png"
  },

  {
    title: "Twitch-Tok",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/twitchtok.png",
    whatList: [
      "Tik-Tok style web app for twitch clips.",
      "Follow channels and categories to generate a feed of clips.",
      "Algorithmless feed generation.",
      "Save clips to your own favorites list.",
    ],
    whyList: [
      "Get highlights automatically in a scrollable feed.",
      "Twitch's UI and goals are not focused on creating a good user experience for watching only clips.",
      "Not already offered by Twitch itself or other services.",
    ],
    howList: [
      "Python script that runs locally.",
      "Utilizes <b>Twitch API</b> to trigger clips and retrieve chat activity.",
      "Monitors chat activity and triggers clips based on a spike in activity compared to a running average threshold.",
    ],
    technologies: ["NextJS" ,"Tailwind", "Tailwind", "Typescript", "Postgres", "Supabase"],
    skillsGained: [],
    liveSiteLink: "twitchtok.com",
    githubLink: "https://github.com/Cxndr/twitch-tok",
    shortDescription: "Tik-Tok style web app for twitch clips.",
    longDescription: "",
    imageSrcDesktop: "",
    imageSrcMobile: "",
  },

  {
    title: "Promptr",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/promptr.png",
    whatList: [
      "Word game web app inspired by <b>Ransom Notes</b> board game and <b>Dark Souls</b> message system",
      "Create humourous responses to prompts using only a randomly generated list of words",
      "View and vote on other users responses in a feed",
    ],
    whyList: [
      "Unique game design not offered by other services",
      "Utilizes social media style interfaces to extend dynamics of a game",
      "It's fun :)",
    ],
    howList: [
      "NextJS web app with shadcn ui components",
      "Dyslexic friendly font option and colorblind filters to capture accessibility starved market",
      "Dynamic svg generator for unique randomized background leaning into themes of the game.",
    ],
    technologies: ["NextJS", "Tailwind", "Typescript", "Postgres", "Supabase"],
    skillsGained: [],
    liveSiteLink: "promptr.com",
    githubLink: "https://github.com/Cxndr/promptr",
    shortDescription: "Word game web app inspired by <b>Ransom Notes</b> and <b>Dark Souls</b>.",
    longDescription: "",
    imageSrcDesktop: "",
    imageSrcMobile: "",
  },

  {
    title: "clouds&waves",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/cloudsandwaves.png",
    whatList: [
      "Social media web app for sharing and discovering music in niche internet genres",
      "Stylized to market aesthetics",
      "Full profile, feed and filtering capabilities.",
    ],
    whyList: [
      "Provide a dedicated space for niche communities away from mainstream social media",
      "Capitalize on progressive anamosity towards traditional social media within music subculture communities",
      "Dedicated spaces have been progressively lost in favor of large social media sites but offer a different experience",
    ],
    howList: [
      "NextJS web app using server side rendering",
      "Postgres database for basic CRUD functionality.",
      "Custom design aesthetics for each genre niche."
    ],
    technologies: ["NextJS", "Tailwind", "Typescript", "Postgres", "Supabase"],
    skillsGained: [],
    liveSiteLink: "cloudsandwaves.com",
    githubLink: "https://github.com/Cxndr/submission-social-network",
    shortDescription: "Aesthetic driven social media site for sharing and discovering niche music",
    longDescription: "",
    imageSrcDesktop: "",
    imageSrcMobile: "",
  },

  {
    title: "PokeRogue",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/poke-rogue.png",
    whatList: [
      "Pokemon rouge-like auto-battler web game",
      "Gameplay inspired by <b>Balatro</b>, <b>The Bazaar</b> and <b>Pokemon</b> battle systems.",
      "<b>Javascript/React Only</b> game development (no canvas or webgl)",
    ],
    whyList: [
      "Unique game design not offered by other auto-battlers or roguelikes",
      "Explore possibility of using React basic web app workflows for game development tasks",
      "Exploration of complex data API usage and implementation",
    ],
    howList: [
      "NextJS web app using server side rendering",
      "Postgres database for basic CRUD functionality.",
      "Custom design aesthetics for each genre niche."
    ],
    technologies: ["NextJS", "Tailwind", "Typescript", "Pokemon API"],
    skillsGained: [],
    liveSiteLink: "pokerogue.gg",
    githubLink: "https://github.com/Cxndr/poke-rogue",
    shortDescription: "React only Pokemon auto-battler roguelike game that doesn't use canvas, webgl or similar technologies",
    longDescription: "",
    imageSrcDesktop: "",
    imageSrcMobile: "",
  }, 

  {
    title: "Pomodoro Timer",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/pomodoro.gif",
    whatList: [
      "Simple and easy to usePomodoro timer web app",
      "Youtube playlist integration for seperate work and break music",
      "Aesthetically pleasing interface",
    ],
    whyList: [
      "Explore modern javascript in a frameworkless environment",
      "Explore modern css animations and transitions",
      "Help me focus",
    ],
    howList: [
      "Vanilla javascript",
      "Vanilla css",
      "Youtube api integration",
    ],
    technologies: ["Javascript", "CSS Animation", "Youtube API"],
    skillsGained: [],
    liveSiteLink: "pomodorotimer.com",
    githubLink: "https://github.com/Cxndr/PomodoroTimer",
    shortDescription: "Simple and aethetically focused Pomodoro Timer web application",
    longDescription: "",
    imageSrcDesktop: "",
    imageSrcMobile: "",
  },
  
  {
    title: "MAHS (Auction House Software)",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/mahs.gif",
    whatList: [
      "All in one auction house software for managing and running all aspects of an auction house business",
      "Manage items, catalogues, vendors and buyers",
      "Track payments, generate reports and analytics",
    ],
    whyList: [
      "Existing solutions have outdated and messy UI/UX and are not focused on usability",
      "I was getting sick of using existing solutions on daily basis and so knew which problems needed to be addressed",
      "All in one offline solution works best for fixed location auction houses",
    ],
    howList: [
      "Heavily customized MS Access database",
      "Stylized frontend form views focused on usability",
      "Deployment across shared on site windows server",
    ],
    technologies: ["VBA", "MS Access", "Windows"],
    skillsGained: [],
    liveSiteLink: "",
    githubLink: "",
    shortDescription: "All in one auction house software for managing and running all aspects of an auction house business",
    longDescription: "",
    imageSrcDesktop: "",
    imageSrcMobile: "",
  },

  {
    title: "Item Shop Game",
    imagesSrc: ["/img/optcgsimthemer.png"],
    thumbnailSrc: "/img/dev/itemshop.png",
    whatList: [
      "Item shop game loosely inspired by <b>Recettear</b> in a 2D pixel art style.",
      "Sell to customers who visit your shop in a rotating day cycle.",
      "Fully customizable shop system, draw in counters and furniture.",
    ],
    whyList: [
      "Recettear is my favorite video game but is very old and dated and it's niche genre has not been explored much in modern games.",
      "Modern shop-based games move away from the core gameplay loops of older games within the niche genre that I love.",
      "Cute and wholesome aesthetics with simple gameplay loops are relaxing",
    ],
    howList: [
      "GameMaker Studio 2 2D Game Engine",
      "Custom bespoke scripts.",
      "GML Language",
    ],
    technologies: ["GameMaker Studio", "GML"],
    skillsGained: [],
    liveSiteLink: "",
    githubLink: "",
    shortDescription: "Item shop game loosely inspired by <b>Recettear</b> in a 2D pixel art style.",
    longDescription: "",
    imageSrcDesktop: "",
    imageSrcMobile: "",
  }
]





