
import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CharacterFilters from "@/components/CharacterFilters";
import CharactersTabs from "@/components/CharactersTabs";
import PageFooter from "@/components/PageFooter";
import { featuredCharacters, popularCharacters, newCharacters } from "@/data/charactersData";
import { CharacterProps } from "@/components/CharacterCard";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };

  const filterCharacters = (characters: CharacterProps[]) => {
    if (activeFilter === "all") return characters;
    return characters.filter(character => character.type === activeFilter);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <section className="mb-12">
          <HeroSection />
          <CharacterFilters 
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </section>

        <CharactersTabs 
          featuredCharacters={featuredCharacters}
          popularCharacters={popularCharacters}
          newCharacters={newCharacters}
          filterCharacters={filterCharacters}
        />
      </main>

      <PageFooter />
    </div>
  );
};

export default Index;
