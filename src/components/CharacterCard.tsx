
import { Heart, FileText, Share2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface CharacterProps {
  id: string;
  name: string;
  description: string;
  level: string;
  origin: string;
  type: string;
  imageUrl?: string;
}

const CharacterCard = ({ 
  name, 
  description, 
  level, 
  origin, 
  type, 
  imageUrl 
}: CharacterProps) => {
  const levelColorMap: Record<string, string> = {
    "Обычный": "bg-gray-500",
    "Необычный": "bg-green-600",
    "Редкий": "bg-blue-600",
    "Эпический": "bg-purple-600",
    "Легендарный": "bg-amber-500"
  };

  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 group">
      <div className="relative h-60 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
            <span className="text-muted-foreground">Нет изображения</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
        
        <div className="absolute bottom-4 left-4 flex gap-2">
          <Badge className={`${levelColorMap[level] || 'bg-gray-600'} text-white`}>
            {level}
          </Badge>
          <Badge variant="outline">{type}</Badge>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Добавить в избранное</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm text-muted-foreground">{origin}</p>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-2 flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <FileText className="h-4 w-4" />
          <span>Подробнее</span>
        </Button>
        
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;
