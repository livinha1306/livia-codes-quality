import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Fundamentos de QA",
      institution: "Udemy",
      hours: 40,
      completedDate: "2024-01-15",
      certificate: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "UI/UX Design Essentials",
      institution: "Coursera",
      hours: 32,
      completedDate: "2023-11-22",
      certificate: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Metodologias Ágeis",
      institution: "Alura",
      hours: 24,
      completedDate: "2023-09-10",
      certificate: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "JavaScript Fundamentals",
      institution: "FreeCodeCamp",
      hours: 60,
      completedDate: "2024-02-28",
      certificate: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Cursos e Certificações
          </h2>
          <div className="w-24 h-1 purple-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Formações e especializações que complementam minha jornada profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover-lift card-shadow border-primary/10 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.certificate}
                  alt={`Certificado do curso ${course.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground line-clamp-2">
                  {course.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {course.institution}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-primary/10 text-primary border-primary/20"
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {course.hours}h
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-primary/5 text-primary border-primary/20"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(course.completedDate)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Constantemente em busca de novos conhecimentos e especializações para aprimorar minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;