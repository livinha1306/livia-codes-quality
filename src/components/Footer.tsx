import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-white/70">
            <span>© 2024 Lívia Azuma Marques. Feito com</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>em Curitiba - PR</span>
          </div>
          <p className="text-xs text-white/50 mt-2">
            Desenvolvido com React, TypeScript e muito carinho
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;