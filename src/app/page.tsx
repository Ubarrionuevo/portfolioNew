import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import Link from "next/link";

const projects = [
  {
    title: "Cora",
    description: "Landing page moderna y atractiva desarrollada con las últimas tecnologías web.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://v0-cora-landing-page-bxxkjfaer-ulisesprogs-projects.vercel.app/",
  },
  {
    title: "1Minuto",
    description: "Solución para tiendas online que permite vender por WhatsApp de manera automatizada y eficiente.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://1minuto.vercel.app/",
  },
  {
    title: "Crédito Fácil",
    description: "Sistema integral para prestamistas y financieras que permite gestionar préstamos, realizar cotizaciones y verificar deudas en tiempo real.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    link: "https://creditofacil.netlify.app/",
  },
  {
    title: "DevGrowth",
    description: "Plataforma que ayuda a desarrolladores a crear proyectos únicos y rentables basados en su perfil y experiencia.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    link: "https://devs-growth.netlify.app/",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-3 py-4 md:px-4 md:py-12">
      <section className="max-w-5xl mx-auto mb-8 md:mb-24 mt-8 md:mt-0">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Ulises Barrionuevo</h1>
          <p className="text-base md:text-xl text-muted-foreground mb-2 md:mb-3">
            Desarrollador Full Stack
          </p>
          <p className="text-muted-foreground mb-4 md:mb-6">
            Córdoba, Argentina
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild variant="outline" size="sm" className="md:size-default">
              <Link href="mailto:ubarrionuevo137@gmail.com">Email</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="md:size-default">
              <Link href="https://www.linkedin.com/in/ulisesbarrionuevo/" target="_blank">LinkedIn</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-8 md:mb-32 bg-secondary/50 p-4 md:p-8 rounded-lg">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">¿Necesitas ayuda construyendo un producto?</h2>
          <Button asChild size="sm" className="w-full md:w-auto md:size-lg">
            <Link href="mailto:ubarrionuevo137@gmail.com">Contáctame, te puedo ayudar →</Link>
          </Button>
        </div>
      </section>

      <section id="sobre-mi" className="max-w-3xl mx-auto mb-8 md:mb-32">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center md:text-left">Sobre Mí</h2>
        <p className="text-sm md:text-base text-muted-foreground text-center md:text-left">
          Construyo productos digitales. En mi trabajo y en mi tiempo libre.
        </p>
      </section>

      <section id="proyectos" className="max-w-3xl mx-auto mb-8 md:mb-32">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center md:text-left">Proyectos</h2>
        <div className="grid gap-4 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <ExperienceSection />

      <section id="contacto" className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center md:text-left">Contacto</h2>
        <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 text-center md:text-left">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="flex justify-center md:justify-start">
          <Button asChild size="sm" className="md:size-default">
            <Link href="mailto:ubarrionuevo137@gmail.com">Enviar Email</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
