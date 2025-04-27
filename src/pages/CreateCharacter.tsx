
import { useState } from "react";
import { Check, Info, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

const CreateCharacter = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Вместо реальной отправки, просто показываем уведомление
    toast({
      title: "Заявка отправлена!",
      description: "Ваша заявка на создание персонажа будет рассмотрена администратором.",
      variant: "default",
    });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Создание персонажа</h1>
            <p className="text-muted-foreground">
              Заполните форму для отправки заявки на добавление нового персонажа
            </p>
          </div>

          <Alert className="mb-6 border-amber-500/50 bg-amber-500/10">
            <Info className="h-4 w-4 text-amber-500" />
            <AlertTitle className="text-amber-500">Важное примечание</AlertTitle>
            <AlertDescription>
              Создание персонажей доступно только с разрешения администратора. 
              Все заявки проходят модерацию и утверждение.
            </AlertDescription>
          </Alert>

          {formSubmitted ? (
            <Card className="border-green-500/20 bg-green-500/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Заявка успешно отправлена!
                </CardTitle>
                <CardDescription>
                  Ваша заявка на создание персонажа была отправлена на рассмотрение.
                  Мы уведомим вас о решении администратора.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center pt-4">
                <Button variant="outline" onClick={() => navigate("/")}>
                  Вернуться на главную
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Информация о персонаже</CardTitle>
                  <CardDescription>
                    Заполните все поля, чтобы ваша заявка была рассмотрена.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя персонажа</Label>
                    <Input id="name" placeholder="Например: Тень из шкафа" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Тип персонажа</Label>
                    <Select defaultValue="Призрак">
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Призрак">Призрак</SelectItem>
                        <SelectItem value="Монстр">Монстр</SelectItem>
                        <SelectItem value="Демон">Демон</SelectItem>
                        <SelectItem value="Человек">Человек</SelectItem>
                        <SelectItem value="Существо">Существо</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="origin">Происхождение</Label>
                    <Input id="origin" placeholder="Например: Городская легенда" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Описание персонажа</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Подробное описание вашего персонажа, его история и особенности..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">Ссылка на изображение</Label>
                    <Input 
                      id="imageUrl" 
                      placeholder="https://example.com/image.jpg" 
                      type="url"
                    />
                    <p className="text-xs text-muted-foreground">
                      Необязательно. Если не указать, будет использовано изображение по умолчанию.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactInfo">Контактная информация</Label>
                    <Input 
                      id="contactInfo" 
                      placeholder="Email или имя пользователя для связи" 
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => navigate("/")}>
                    Отмена
                  </Button>
                  <Button type="submit">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </CardFooter>
              </form>
            </Card>
          )}
        </div>
      </main>

      <footer className="bg-black/50 py-6 mt-auto">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 HorrisLady. Все персонажи вымышлены.</p>
        </div>
      </footer>
    </div>
  );
};

export default CreateCharacter;
