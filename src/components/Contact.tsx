import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "liviaazumamarques@gmail.com",
      href: "mailto:liviaazumamarques@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lívia-marques",
      href: "https://www.linkedin.com/in/lívia-marques"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/livinha1306",
      href: "https://github.com/livinha1306"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Curitiba - Paraná",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 purple-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e conexões. Entre em contato!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover-lift card-shadow border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                  {contact.href !== "#" ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="inline-block card-shadow border-primary/10 purple-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronta para o próximo desafio!
                </h3>
                <p className="text-white/90 mb-6 max-w-md">
                  Procurando oportunidades em QA, Design ou desenvolvimento. 
                  Vamos construir algo incrível juntos?
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <a href="mailto:liviaazumamarques@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Entre em Contato
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;