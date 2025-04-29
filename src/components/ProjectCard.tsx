import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 hover:bg-secondary/10 transition-colors">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {link && (
          <Button asChild variant="outline" size="sm">
            <Link href={link} target="_blank">
              Ver Proyecto
            </Link>
          </Button>
        )}
        {github && (
          <Button asChild variant="outline" size="sm">
            <Link href={github} target="_blank">
              GitHub
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
} 