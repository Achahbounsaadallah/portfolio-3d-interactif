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
  { name: 'Java', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'C / C++', level: 75 },
  { name: 'JavaScript', level: 50 },
  { name: 'React', level: 85 },
  { name: 'Spring Boot', level: 80 },
  { name: 'Flask', level: 75 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'SQL (MySQL / Oracle)', level: 85 },
  { name: 'MongoDB / Cassandra / Neo4j', level: 80 },
];

export const timeline: TimelineItem[] = [
  {
    id: '1',
    type: 'education',
    title: 'Élève Ingénieur en Informatique',
    organization: 'ENSA Fès',
    period: '2022 - Présent',
    description:
      'Formation en ingénierie informatique avec focus sur développement logiciel, bases de données et systèmes distribués.',
  },
  {
    id: '2',
    type: 'work',
    title: 'Stage d’initiation (Développeur Full Stack)',
    organization: 'EMS, Fès',
    period: 'Juin - Juillet 2025',
    description:
      'Développement d’une application web full-stack pour la collecte et la gestion de données (React, Flask, PostgreSQL).',
  },
  {
    id: '3',
    type: 'project',
    title: 'VisionGuard (Projet académique)',
    organization: 'Projet en équipe',
    period: '2024 - 2025',
    description:
      'Système intelligent de sécurité avec reconnaissance faciale en temps réel, dashboard web et API (React, Python, OpenCV, C#, .NET).',
  },
  {
    id: '4',
    type: 'project',
    title: 'Applications Web & Big Data',
    organization: 'Projets académiques',
    period: '2023 - 2024',
    description:
      'Développement d’applications web (Spring Boot, JSF) et systèmes Big Data avec MongoDB, Cassandra et Neo4j.',
  },
  {
    id: '5',
    type: 'education',
    title: 'Baccalauréat Sciences Mathématiques A',
    organization: 'Lycée Tarik Ibn Zyad, Azrou',
    period: '2019 - 2022',
    description:
      'Formation scientifique avec spécialisation en mathématiques.',
  },
];

export const aboutInfo = {
  name: 'Achahboun Saad Allah',
  title: 'Full-Stack & Data Engineer – BI & Analytics',
  bio: `Passionné par le développement web et les technologies data, je conçois et développe des applications modernes qui allient performance, esthétique et innovation.

En tant que Full-Stack Developer, je travaille principalement avec Java (Spring Boot) et React pour créer des solutions complètes, du backend au frontend.

Je possède également des compétences en Business Intelligence et Analytics, avec une forte capacité à transformer les données en insights exploitables à travers des dashboards et des modèles d’analyse.

À l’aise avec différents types de bases de données (SQL Server, MongoDB, Cassandra, Neo4j), j’adapte mes choix technologiques selon les besoins et la scalabilité des projets.

Curieux et orienté solution, je m’intéresse aux architectures modernes, aux design patterns et aux systèmes orientés data.

🚀 Mon objectif est de concevoir des systèmes intelligents, performants et centrés sur l’utilisateur.`,
  avatar: 'public/images/image_cv.jpg',
  location: 'Fes, Maroc',
  email: 'achahbounsaadallah@gmail.com',
  availability: 'Disponible pour freelance',
};
