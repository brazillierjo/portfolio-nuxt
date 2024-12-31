import { useI18n } from 'vue-i18n'
import type { ITimelineItem } from '~/utils/types/timeline'

export const useTranslatedEducations = () => {
  const { t } = useI18n()

  const educations: ITimelineItem[] = [
    {
      company: t('educations.items[0].company'),
      title: t('educations.items[0].title'),
      years: t('educations.items[0].years'),
      description: t('educations.items[0].description'),
      technologies: ['React', 'NodeJS', 'MySQL'],
    },
    {
      company: t('educations.items[1].company'),
      title: t('educations.items[1].title'),
      years: t('educations.items[1].years'),
      description: t('educations.items[1].description'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Vue'],
    },
    {
      company: t('educations.items[2].company'),
      title: t('educations.items[2].title'),
      years: t('educations.items[2].years'),
      description: t('educations.items[2].description'),
      technologies: [
        'Team Management',
        'Marketing',
        'Digital Marketing',
        'SEO',
        'E-commerce',
      ],
    },
    {
      company: t('educations.items[3].company'),
      title: t('educations.items[3].title'),
      years: t('educations.items[3].years'),
      description: t('educations.items[3].description'),
      technologies: ['Team Management', 'Marketing', 'Digital Marketing'],
    },
    {
      company: t('educations.items[4].company'),
      title: t('educations.items[4].title'),
      years: t('educations.items[4].years'),
      description: t('educations.items[4].description'),
      technologies: ['Accounting'],
    },
  ]

  return educations
}
