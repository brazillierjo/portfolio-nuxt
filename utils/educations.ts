export type IEducation = {
  company: string;
  title: string;
  years: string;
  description: string;
  technologies: string[];
};

export const educations: IEducation[] = [
  {
    company: "3WAcademy",
    title: "(BSc) Web and Mobile Applications Integration/Development",
    years: "2020 - 2021",
    technologies: ["React", "NodeJS", "MySQL"],
  },
  {
    company: "OpenClassrooms",
    title: "Web Developer - Level 5 RNCP Certification",
    years: "2020",
    description:
      "Earned a professional certification in web development with hands-on projects covering essential web technologies and frameworks.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Vue"],
  },
  {
    company: "University of Toulon",
    title: "(BSc) E-commerce & Digital Marketing",
    years: "2016 - 2017",
    description:
      "Specialized in e-commerce and digital marketing strategies, with a focus on SEO, team management, and online store optimization.",
    technologies: ["Team Management", "Marketing", "Digital Marketing", "SEO", "E-commerce"],
  },
  {
    company: "Défi83 - Toulon",
    title: "(Associate's Degree) Business Unit Management",
    years: "2014 - 2016",
    description:
      "Studied business unit management, focusing on marketing strategies and team leadership in a corporate environment.",
    technologies: ["Team Management", "Marketing", "Digital Marketing"],
  },
  {
    company: "Jean Aicard - Hyères",
    title: "Baccalaureate in Business Science & Technology",
    years: "2010 - 2012",
    description: "Focused on foundational business practices, including accounting and financial management.",
    technologies: ["Accounting"],
  },
];
