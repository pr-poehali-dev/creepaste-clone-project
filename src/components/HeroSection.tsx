
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-lg h-80 mb-8">
      <img 
        src="https://images.unsplash.com/photo-1544029213-a1dc6d5e986e?q=80&w=1476&auto=format&fit=crop" 
        alt="HorrisLady" 
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">HorrisLady</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl">
          Исследуйте мрачный мир легенд, страшилок и городских мифов через коллекцию самых известных персонажей
        </p>
        <Link to="/create">
          <Button size="lg" className="w-fit animate-pulse">
            <Sparkles className="mr-2 h-4 w-4" />
            Создать персонажа
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
