
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Skull, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <Skull className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">HorrisLady</span>
          </Link>
        </div>

        <nav className={`absolute md:static left-0 right-0 top-16 md:top-0 p-4 md:p-0 bg-background/95 backdrop-blur md:backdrop-blur-none border-b md:border-0 transition-all duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        } md:translate-y-0 md:opacity-100 md:pointer-events-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <li>
              <Link to="/" className="block py-2 md:py-0 hover:text-primary transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/characters" className="block py-2 md:py-0 hover:text-primary transition-colors">
                Персонажи
              </Link>
            </li>
            <li>
              <Link to="/categories" className="block py-2 md:py-0 hover:text-primary transition-colors">
                Категории
              </Link>
            </li>
            <li>
              <Link to="/creators" className="block py-2 md:py-0 hover:text-primary transition-colors">
                Авторы
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск персонажей..."
              className="w-64 pl-8 bg-muted/50 focus-visible:ring-primary"
            />
          </div>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <UserCircle className="h-5 w-5" />
          </Button>
          <Button variant="default" size="sm">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
