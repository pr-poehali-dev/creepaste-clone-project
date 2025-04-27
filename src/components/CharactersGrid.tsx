
import CharacterCard, { CharacterProps } from "@/components/CharacterCard";

interface CharactersGridProps {
  characters: CharacterProps[];
}

const CharactersGrid = ({ characters }: CharactersGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </div>
  );
};

export default CharactersGrid;
