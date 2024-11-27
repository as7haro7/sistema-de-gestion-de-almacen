import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  
  links: [
    {
      text: 'Generalidades',
      links: [
        {
          text: 'Introducción',
          href: getPermalink('/generalidades/introduccion'),
        },
        {
          text: 'Antecedentes',
          href: getPermalink('/generalidades/antecedentes'),
        },
        {
          text: 'Planteamiento del Problema',
          href: getPermalink('/generalidades/planteamiento-del-problema'),
        },
        {
          text: 'Árbol de Problemas',
          href: getPermalink('/generalidades/arbol-de-problemas'),
        },
        {
          text: 'Formulación del Problema',
          href: getPermalink('/generalidades/formulacion-del-problema'),
        },
        {
          text: 'Objetivo General',
          href: getPermalink('/generalidades/objetivo-general'),
        },
        {
          text: 'Objetivos Específicos',
          href: getPermalink('/generalidades/objetivos-especificos'),
        },
        {
          text: 'Método, Medios e Instrumentos de Investigación',
          href: getPermalink('/generalidades/metodo-medios-instrumentos'),
        },
        {
          text: 'Justificación del método elegido',
          href: getPermalink('/generalidades/justificacion-metodo'),
        },
        {
          text: 'Herramientas y técnicas utilizadas',
          href: getPermalink('/generalidades/herramientas-tecnicas'),
        },
        {
          text: 'Alcances del proyecto',
          href: getPermalink('/generalidades/alcances-del-proyecto'),
        },
        {
          text: 'Planificación de Actividades',
          href: getPermalink('/generalidades/planificacion-actividades'),
        }
      ]
      
    },
    {
      text: 'Análisis y Diseño Estructurado',
      links: [
        {
          text: 'Modelo Ambiental',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Modelo de Comportamiento',
          href: getPermalink('/homes/startup'),
        },
        
      ],
    },
    {
      text: 'Análisis y Diseño Orientado a Objetos',
      links: [
        {
          text: 'Diagrama de Casos de Uso',
          href: getPermalink('/#features'),
        },
        {
          text: 'Diagramas de Secuencia',
          href: getPermalink('/services'),
        },
        {
          text: 'Diagrama de Clases     ',
          href: getPermalink('/pricing'),
        },
        // {
        //   text: 'About us',
        //   href: getPermalink('/about'),
        // },
        // {
        //   text: 'Contact',
        //   href: getPermalink('/contact'),
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    
   
    {
      text: 'Video',
      href: '/video',
    },
   
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('#') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
  
    La Paz - Bolivia  2024.
  `,
};
