
import { Button } from "@/components/ui/button";

interface FiltersProps {
  activeFilter: string;
  onFilterChange: (value: string) => void;
}

const CharacterFilters = ({ activeFilter, onFilterChange }: FiltersProps) => {
  const filters = [
    { value: "all", label: "Все" },
    { value: "Призрак", label: "Призраки" },
    { value: "Монстр", label: "Монстры" },
    { value: "Демон", label: "Демоны" },
    { value: "Человек", label: "Люди" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          onClick={() => onFilterChange(filter.value)}
          className="text-sm"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default CharacterFilters;
