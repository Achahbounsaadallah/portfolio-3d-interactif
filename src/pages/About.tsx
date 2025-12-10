import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillBar from '@/components/SkillBar';
import Timeline from '@/components/Timeline';
import { aboutInfo, skills, timeline } from '@/data/portfolio';

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl animate-glow-pulse" />
                <img
                  src={aboutInfo.avatar}
                  alt={aboutInfo.name}
                  className="relative w-full h-full object-cover rounded-3xl border-4 border-background"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">{aboutInfo.availability}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                À propos de moi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {aboutInfo.name}
              </h1>
              <p className="text-xl text-primary mb-4">{aboutInfo.title}</p>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {aboutInfo.location}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {aboutInfo.email}
                </div>
              </div>

              <div className="prose prose-muted max-w-none mb-8">
                {aboutInfo.bio.split('\n').map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Button variant="glow" size="lg">
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compétences techniques
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mon expertise couvre l'ensemble du développement web moderne, du front-end au back-end.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SkillBar {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mon parcours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De mes études à mes expériences professionnelles, voici les étapes clés de ma carrière.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Timeline items={timeline} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
