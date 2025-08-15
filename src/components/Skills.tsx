import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bug, Palette, Code, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "QA & Testes",
      icon: Bug,
      skills: ["QA Manual", "Testes Funcionais", "Testes Exploratórios", "Selenium", "Jira", "TestRail"],
      color: "bg-red-500/10 text-red-600 border-red-500/20"
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Figma", "UI/UX Design", "Prototipação", "Design System", "Adobe XD", "Wireframes"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Desenvolvimento",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Git"],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      title: "Metodologias",
      icon: Users,
      skills: ["Metodologias Ágeis", "Scrum", "Kanban", "DevOps", "CI/CD", "Documentação"],
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Habilidades
          </h2>
          <div className="w-24 h-1 purple-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no meu dia a dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift card-shadow border-primary/10">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`text-xs ${category.color} transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Outras Competências</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Pensamento Crítico", "Atenção aos Detalhes", "Gestão de Tempo"].map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;