import { Eye, Clock, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface StoryProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  views: number;
  tags: string[];
  imageUrl?: string;
}

const StoryCard = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  views, 
  tags, 
  imageUrl 
}: StoryProps) => {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 group">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
      )}
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">{excerpt}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-muted-foreground text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="h-3 w-3" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{views}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;