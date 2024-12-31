export interface IProject {
  title: string;
  description: string;
  image: string;
  appUrl: string;
  codeUrl: string;
  technologies: string[];
}

export const projects: IProject[] = [
  {
    title: "Walletoo - Personal Finance Manager",
    description:
      "Walletoo is a personal finance management assistant. It enables straightforward financial management by simply logging in and entering monthly income and expenses. Walletoo calculates disposable income and provides suggestions for savings, graphs, etc.",
    image: "/webps/walletoo.webp",
    appUrl: "",
    codeUrl: "https://github.com/brazillierjo/wallet",
    technologies: ["React", "NodeJS", "TypeScript"],
  },
  {
    title: "Workout Session Generator [mobile-friendly only]",
    description:
      "ma-sante.fr is a workout session generator 💪. This web app generates sessions with different exercises to optimize results. Accompanied by an animated GIF, the exercises are easy to reproduce.",
    image: "/webps/workoutGenerator.webp",
    appUrl: "https://ma-seance.vercel.app/",
    codeUrl: "https://github.com/brazillierjo/ma-seance",
    technologies: ["Vue", "TailwindCSS", "Firebase"],
  },
  {
    title: "Piano",
    description:
      "From recording the sound of the keys to design, this project taught me how to handle events and performance! Plus, you can spend hours on it without needing to buy one 🤓",
    image: "/webps/piano.webp",
    appUrl: "https://brazillierjo.github.io/piano/",
    codeUrl: "https://github.com/brazillierjo/piano",
    technologies: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Web Calculator",
    description:
      "Project carried out to deepen my knowledge of Vanilla JavaScript. You can choose between basic calculations or advanced calculations. Learning light/night mode.",
    image: "/webps/calculator.webp",
    appUrl: "https://brazillierjo.github.io/calculator/",
    codeUrl: "https://github.com/brazillierjo/calculator",
    technologies: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Markdown Previewer",
    description: "Markdown project created for a React training. Deployed on GitHub Pages.",
    image: "/webps/markdown.webp",
    appUrl: "https://brazillierjo.github.io/markdown/",
    codeUrl: "https://github.com/brazillierjo/markdown",
    technologies: ["React", "TailwindCSS", "Vite"],
  },
];
