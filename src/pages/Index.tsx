
import { useState } from "react";
import { Sparkles, Skull, TrendingUp } from "lucide-react";
import NavBar from "@/components/NavBar";
import CharacterCard from "@/components/CharacterCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const featuredCharacters = [
    {
      id: "1",
      name: "Кровавая Мэри",
      description: "Призрак, появляющийся в зеркале после произнесения её имени три раза в тёмной комнате.",
      level: "Легендарный",
      origin: "Городская легенда",
      type: "Призрак",
      imageUrl: "https://images.unsplash.com/photo-1618092388874-e262a562887f?q=80&w=1287&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "Слендермен",
      description: "Высокий худой человек без лица в чёрном костюме, преследующий детей в лесу.",
      level: "Эпический",
      origin: "Интернет-фольклор",
      type: "Монстр",
      imageUrl: "https://images.unsplash.com/photo-1508661653111-d9efb84f0c1e?q=80&w=1287&auto=format&fit=crop"
    },
    {
      id: "3",
      name: "Джефф Убийца",
      description: "Обезображенный подросток с жуткой улыбкой и маниакальными наклонностями.",
      level: "Редкий",
      origin: "Creepypasta",
      type: "Человек",
      imageUrl: "https://images.unsplash.com/photo-1508440767412-59ce0b206bbc?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  const popularCharacters = [
    {
      id: "4",
      name: "Черный Пес",
      description: "Призрачная собака, предвещающая смерть тем, кто её увидит.",
      level: "Редкий",
      origin: "Британский фольклор",
      type: "Призрак",
      imageUrl: "https://images.unsplash.com/photo-1593089784911-d7a0ac71ea6d?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "5",
      name: "Баба Яга",
      description: "Ведьма, живущая в избушке на курьих ножках в глухом лесу.",
      level: "Эпический",
      origin: "Славянский фольклор",
      type: "Ведьма",
      imageUrl: "https://images.unsplash.com/photo-1635513539910-0ba13ccb3de1?q=80&w=1632&auto=format&fit=crop"
    },
    {
      id: "6",
      name: "Смайл Дог",
      description: "Собака с человеческой улыбкой, чье изображение преследует тех, кто его увидел.",
      level: "Необычный",
      origin: "Интернет-фольклор",
      type: "Существо",
      imageUrl: "https://images.unsplash.com/photo-1583337426008-2fef51aa2e26?q=80&w=1364&auto=format&fit=crop"
    }
  ];

  const newCharacters = [
    {
      id: "7",
      name: "Русалка Абисса",
      description: "Морское существо, заманивающее моряков в глубины океана своим пением.",
      level: "Необычный",
      origin: "Морской фольклор",
      type: "Морское существо",
      imageUrl: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?q=80&w=1468&auto=format&fit=crop"
    },
    {
      id: "8",
      name: "Тень Ночи",
      description: "Существо, появляющееся только в самые тёмные часы, чтобы красть души спящих.",
      level: "Редкий",
      origin: "Современная мифология",
      type: "Демон",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1469&auto=format&fit=crop"
    },
    {
      id: "9",
      name: "Заброшенный Автоматон",
      description: "Механическая кукла, обретшая сознание и жаждущая человеческой души.",
      level: "Легендарный",
      origin: "Стимпанк-мифология",
      type: "Механизм",
      imageUrl: "https://images.unsplash.com/photo-1561557944-6e5c4b751c71?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  const filters = [
    { value: "all", label: "Все" },
    { value: "Призрак", label: "Призраки" },
    { value: "Монстр", label: "Монстры" },
    { value: "Демон", label: "Демоны" },
    { value: "Человек", label: "Люди" }
  ];

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };

  const filteredCharacters = (characters: any[]) => {
    if (activeFilter === "all") return characters;
    return characters.filter(character => character.type === activeFilter);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-lg h-80 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1544029213-a1dc6d5e986e?q=80&w=1476&auto=format&fit=crop" 
              alt="Жуткие персонажи" 
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Галерея Жутких Персонажей</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl">
                Исследуйте мрачный мир легенд, страшилок и городских мифов через коллекцию самых известных персонажей
              </p>
              <Button size="lg" className="w-fit animate-pulse">
                <Sparkles className="mr-2 h-4 w-4" />
                Создать персонажа
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => handleFilterChange(filter.value)}
                className="text-sm"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </section>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCharacters(featuredCharacters).map((character) => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCharacters(popularCharacters).map((character) => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCharacters(newCharacters).map((character) => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-black/50 py-6 mt-auto">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Галерея Жутких Персонажей. Все персонажи вымышлены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
