import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mes projets
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une sélection de mes travaux récents. Chaque projet représente un défi unique 
              que j'ai relevé avec passion et expertise.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border">
              <p className="text-lg text-muted-foreground mb-4">
                Vous avez un projet en tête ?
              </p>
              <a 
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Discutons-en ensemble →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
