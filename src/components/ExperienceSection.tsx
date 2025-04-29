interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    company: "Motor0",
    role: "Desarrollador PHP",
    period: "2024 - Presente",
    description: "Sistema de gestión que ayuda a las empresas a contabilizar y optimizar sus gastos invisibles.",
    achievements: [
      "Desarrollo de un sistema robusto utilizando PHP y el framework CakePHP.",
      "Implementación de funcionalidades para el seguimiento y análisis de gastos empresariales.",
      "Creación de interfaces intuitivas para la visualización de datos y reportes financieros.",
    ],
  },
  {
    company: "Panzzy",
    role: "Desarrollador Full Stack",
    period: "2023",
    description: "Aplicación móvil enfocada en la fidelización de clientes mediante un sistema de cupones y puntos.",
    achievements: [
      "Desarrollo de la aplicación móvil utilizando FlutterFlow para una experiencia de usuario fluida.",
      "Implementación del panel de administración con React.js para la gestión de cupones y puntos.",
      "Integración de sistemas de recompensas y seguimiento de puntos para fidelización de clientes.",
    ],
  },
  {
    company: "Avenga",
    role: "Desarrollador .Net",
    period: "Mar 2021 - Feb 2024",
    description: "Colaboré en el desarrollo de una aplicación escalable diseñando e implementando APIs RESTful utilizando tecnologías Microsoft .NET para gestionar un sistema de seguros en el dominio Insurtech.",
    achievements: [
      "Implementé la arquitectura MVC (Modelo-Vista-Controlador) para desarrollar interfaces de usuario para aplicaciones web, asegurando una experiencia de usuario consistente y de alta calidad.",
      "Trabajé en estrecha colaboración con el equipo de frontend y backend para integrar las interfaces de usuario con las APIs RESTful, garantizando la entrega eficiente de los datos requeridos para el funcionamiento del portal.",
      "Utilicé tecnologías propietarias de la empresa (Natal Framework) para implementar estilos y funcionalidades específicas en las interfaces de usuario, manteniendo la consistencia con la identidad de marca de la empresa.",
    ],
  },
  {
    company: "Avenga",
    role: "Mentor en desarrollo",
    period: "Abri 2022 - Sep 2022",
    description: "Participé en un programa de mentoría de 6 meses con el objetivo de introducir de manera efectiva y enriquecedora a los desarrolladores en su primera experiencia laboral.",
    achievements: [
      "Durante este programa, tuve la oportunidad de desempeñar el rol de mentor, brindando orientación y apoyo a los nuevos desarrolladores. Específicamente, ofrecí mentoría en el proyecto en el que estaba trabajando en ese momento, el Portal de Cotizadores de Sancor Seguros.",
      "En nuestras sesiones de mentoría, exploramos el funcionamiento del portal, analizamos las diferentes capas de la aplicación y cómo se relacionaban entre sí. Además, compartí las mejores prácticas de desarrollo y discutimos el uso de servicios web para la integración del sistema.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="max-w-3xl mx-auto mb-32">
      <h2 className="text-2xl font-bold mb-8">Experiencia Laboral</h2>
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.company + exp.role} className="border-l-2 pl-6 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
            <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
            <p className="text-muted-foreground mb-2">{exp.role}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            {exp.achievements && (
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 