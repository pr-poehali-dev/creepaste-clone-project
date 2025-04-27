
import { Skull, TrendingUp, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CharactersGrid from "@/components/CharactersGrid";
import { CharacterProps } from "@/components/CharacterCard";

interface CharactersTabsProps {
  featuredCharacters: CharacterProps[];
  popularCharacters: CharacterProps[];
  newCharacters: CharacterProps[];
  filterCharacters: (characters: CharacterProps[]) => CharacterProps[];
}

const CharactersTabs = ({ 
  featuredCharacters, 
  popularCharacters, 
  newCharacters,
  filterCharacters
}: CharactersTabsProps) => {
  return (
    <Tabs defaultValue="featured" className="mb-12">
      <TabsList className="mb-6">
        <TabsTrigger value="featured">
          <Skull className="mr-2 h-4 w-4" />
          Избранные
        </TabsTrigger>
        <TabsTrigger value="popular">
          <TrendingUp className="mr-2 h-4 w-4" />
          Популярные
        </TabsTrigger>
        <TabsTrigger value="new">
          <Sparkles className="mr-2 h-4 w-4" />
          Новые
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="featured">
        <CharactersGrid characters={filterCharacters(featuredCharacters)} />
      </TabsContent>
      
      <TabsContent value="popular">
        <CharactersGrid characters={filterCharacters(popularCharacters)} />
      </TabsContent>
      
      <TabsContent value="new">
        <CharactersGrid characters={filterCharacters(newCharacters)} />
      </TabsContent>
    </Tabs>
  );
};

export default CharactersTabs;
