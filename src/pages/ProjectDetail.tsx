import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <p className="text-muted-foreground mb-8">
            Le projet que vous recherchez n'existe pas.
          </p>
          <Link to="/projets">
            <Button variant="outline-glow">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux projets
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      {/* Back Link */}
      <div className="container-wide px-4 md:px-8 py-4">
        <Link
          to="/projets"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux projets
        </Link>
      </div>

      {/* Hero Image */}
      <section className="container-wide px-4 md:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-3xl overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-padding pt-8">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Le défi</h2>
              <p className="text-muted-foreground">
                Ce projet a nécessité une approche innovante pour résoudre des problèmes 
                complexes tout en maintenant une expérience utilisateur fluide et intuitive. 
                L'objectif principal était de créer une solution scalable qui puisse 
                s'adapter aux besoins évolutifs des utilisateurs.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">La solution</h2>
              <p className="text-muted-foreground">
                J'ai opté pour une architecture moderne utilisant les dernières technologies 
                web. L'accent a été mis sur la performance, l'accessibilité et la maintenabilité 
                du code. Le résultat est une application robuste et évolutive.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Fonctionnalités clés</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Interface responsive et optimisée mobile</li>
                <li>Animations fluides et micro-interactions</li>
                <li>Architecture scalable et maintenable</li>
                <li>Tests automatisés et CI/CD</li>
                <li>Performance optimisée (Lighthouse 90+)</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="glow" size="lg">
                    <ExternalLink className="h-4 w-4" />
                    Voir la démo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Github className="h-4 w-4" />
                    Code source
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
