import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'achahbounsaadallah@gmail.com',
    href: 'mailto:achahbounsaadallah@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Fes, Maroc',
    href: null,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+212770287463',
    href: 'tel:+212770287463',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Achahbounsaadallah', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/saad-allah-achahboun-727041316/', label: 'LinkedIn' }
];

export default function Contact() {
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
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travaillons ensemble
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ou simplement envie de discuter ? 
              N'hésitez pas à me contacter, je vous répondrai rapidement.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover-lift"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Me suivre</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium">Disponible pour freelance</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Je suis actuellement ouvert à de nouvelles opportunités de collaboration.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
