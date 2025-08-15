import { MapPin, GraduationCap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 purple-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou estudante de Engenharia de Software com foco em Garantia da Qualidade (QA) 
              e Design de Interfaces. Tenho experiência em testes funcionais e exploratórios, 
              criação de protótipos e melhoria da experiência do usuário.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha motivação é entregar produtos digitais com alta qualidade, usabilidade 
              e estética, garantindo que cada detalhe contribua para uma experiência 
              excepcional do usuário.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Curitiba - Paraná</span>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="hover-lift card-shadow border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Formação</h3>
                    <p className="text-muted-foreground">Engenharia de Software</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Foco</h3>
                    <p className="text-muted-foreground">QA & UI/UX Design</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;