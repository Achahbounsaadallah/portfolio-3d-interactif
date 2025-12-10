import { Project } from '@/components/ProjectCard';
import { TimelineItem } from '@/components/Timeline';

export const projects: Project[] = [
  {
    id: 'ecommerce-react',
    title: 'E-Commerce React',
    description: 'Une plateforme e-commerce moderne avec panier dynamique, paiement Stripe et gestion des stocks en temps réel. Interface responsive et optimisée pour les conversions.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour visualiser les données commerciales avec graphiques dynamiques, filtres avancés et exports PDF automatisés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Chart.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
  {
    id: 'app-mobile-fitness',
    title: 'App Mobile Fitness',
    description: 'Application de suivi fitness avec programmes personnalisés, tracking des performances et intégration avec les montres connectées. PWA optimisée.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop',
    technologies: ['React Native', 'Expo', 'Redux', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
];

export const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Three.js / WebGL', level: 80 },
  { name: 'PostgreSQL / MongoDB', level: 85 },
  { name: 'Docker / DevOps', level: 75 },
];

export const timeline: TimelineItem[] = [
  {
    id: '1',
    type: 'work',
    title: 'Lead Developer',
    organization: 'Tech Startup',
    period: '2022 - Présent',
    description: 'Direction technique et développement de solutions SaaS innovantes. Management d\'une équipe de 5 développeurs.',
  },
  {
    id: '2',
    type: 'work',
    title: 'Développeur Full Stack',
    organization: 'Agence Digitale',
    period: '2020 - 2022',
    description: 'Création d\'applications web sur mesure pour des clients variés. Stack React, Node.js, PostgreSQL.',
  },
  {
    id: '3',
    type: 'education',
    title: 'Master Informatique',
    organization: 'Université de Paris',
    period: '2018 - 2020',
    description: 'Spécialisation en développement web et intelligence artificielle. Mention Très Bien.',
  },
  {
    id: '4',
    type: 'work',
    title: 'Stage Développeur',
    organization: 'Startup FinTech',
    period: '2018',
    description: 'Développement front-end React et intégration d\'APIs financières.',
  },
];

export const aboutInfo = {
  name: 'Alex Martin',
  title: 'Développeur Full Stack',
  bio: `Passionné par le développement web depuis plus de 5 ans, je crée des expériences digitales uniques qui allient performance, esthétique et innovation. 
  
  Spécialisé dans l'écosystème JavaScript moderne (React, Node.js, Three.js), j'aime relever des défis techniques et transformer des idées en produits concrets.
  
  Quand je ne code pas, vous me trouverez à explorer de nouvelles technologies, contribuer à des projets open source, ou perfectionner mes compétences en 3D.`,
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  location: 'Paris, France',
  email: 'alex@exemple.com',
  availability: 'Disponible pour freelance',
};
