import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import qaProject from "@/assets/qa-project.jpg";
import designProject from "@/assets/design-project.jpg";
import webProject from "@/assets/web-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Testes Automatizados",
      description: "Desenvolvimento de uma suite completa de testes automatizados para aplicações web, incluindo testes funcionais, de regressão e performance.",
      technologies: ["Python", "Selenium", "Pytest", "Jenkins", "Jira"],
      githubUrl: "https://github.com/livinha1306/qa-automation-suite",
      liveUrl: "#",
      image: qaProject,
    },
    {
      title: "Design System Mobile",
      description: "Criação de um design system completo para aplicativo mobile, incluindo componentes reutilizáveis, guias de estilo e protótipos interativos.",
      technologies: ["Figma", "React Native", "TypeScript", "Storybook"],
      githubUrl: "https://github.com/livinha1306/mobile-design-system",
      liveUrl: "#",
      image: designProject,
    },
    {
      title: "Dashboard de Qualidade",
      description: "Aplicação web para monitoramento e análise de métricas de qualidade de software, com visualizações interativas e relatórios automatizados.",
      technologies: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/livinha1306/quality-dashboard",
      liveUrl: "#",
      image: webProject,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Projetos
          </h2>
          <div className="w-24 h-1 purple-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em QA e Design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift card-shadow border-primary/10 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;