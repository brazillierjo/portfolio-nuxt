import { useI18n } from "vue-i18n";
import type { ITimelineItem } from "~/utils/types/timeline";

export const useTranslatedExperiences = () => {
  const { t } = useI18n();

  const experiences: ITimelineItem[] = [
    {
      company: t("experiences.items[0].company"),
      title: t("experiences.items[0].title"),
      years: t("experiences.items[0].years"),
      description: t("experiences.items[0].description"),
      technologies: ["TypeScript", "Next.js", "React", "TailwindCSS", "JEST", "Docker", "React Native", "AGILE"],
    },
    {
      company: t("experiences.items[1].company"),
      title: t("experiences.items[1].title"),
      years: t("experiences.items[1].years"),
      description: t("experiences.items[1].description"),
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "TailwindCSS",
        "JEST",
        "Docker",
        "api-platform",
        "Symfony",
        "AGILE",
      ],
    },
    {
      company: t("experiences.items[2].company"),
      title: t("experiences.items[2].title"),
      years: t("experiences.items[2].years"),
      description: t("experiences.items[2].description"),
      technologies: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React",
        "NodeJS",
        "Express",
        "REST API",
        "TailwindCSS",
        "Firebase",
        "MongoDB",
        "SQL",
      ],
    },
    {
      company: t("experiences.items[3].company"),
      title: t("experiences.items[3].title"),
      years: t("experiences.items[3].years"),
      description: t("experiences.items[3].description"),
      technologies: ["Wordpress", "JavaScript", "TypeScript", "React", "REST API", "Bootstrap"],
    },
    {
      company: t("experiences.items[4].company"),
      title: t("experiences.items[4].title"),
      years: t("experiences.items[4].years"),
      description: t("experiences.items[4].description"),
      technologies: ["HTML", "CSS", "JavaScript", "REST API", "NodeJS"],
    },
    {
      company: t("experiences.items[5].company"),
      title: t("experiences.items[5].title"),
      years: t("experiences.items[5].years"),
      description: t("experiences.items[5].description"),
      technologies: ["SEO", "Prestashop"],
    },
    {
      company: t("experiences.items[6].company"),
      title: t("experiences.items[6].title"),
      years: t("experiences.items[6].years"),
      description: t("experiences.items[6].description"),
      technologies: null,
    },
  ];

  return experiences;
};
