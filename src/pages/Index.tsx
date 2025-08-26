import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const predefinedAmounts = [500, 1000, 5000, 10000];

  const categories = [
    {
      id: 'poor',
      title: 'Помощь нуждающимся',
      description: 'Поддержка семей и людей, оказавшихся в трудной жизненной ситуации. Обеспечение питанием, одеждой и базовыми потребностями.',
      image: '/img/f9f55a48-cb73-49bd-aade-0def8f65cd9e.jpg',
      icon: 'Heart'
    },
    {
      id: 'medical',
      title: 'Медицинская поддержка',
      description: 'Финансовая помощь для лечения, приобретения лекарств и медицинского оборудования. Поддержка больниц и хосписов.',
      image: '/img/b2065097-b5d9-4f64-9d79-fcb80e1e3159.jpg',
      icon: 'Stethoscope'
    },
    {
      id: 'education',
      title: 'Образование',
      description: 'Стипендии для талантливых студентов, поддержка школ в отдаленных регионах, программы развития детей.',
      image: '/img/0aa3549d-01b3-48d3-9ac6-d3ce6e8faf67.jpg',
      icon: 'GraduationCap'
    }
  ];

  const successStories = [
    {
      id: 1,
      title: 'Сбор на лечение Александра',
      description: 'Благодаря вашей помощи мы собрали необходимую сумму на операцию для 8-летнего Александра.',
      raised: 2500000,
      target: 2500000,
      progress: 100
    },
    {
      id: 2,
      title: 'Школа в отдаленном регионе',
      description: 'Строительство школы для 200 детей в отдаленном районе. Осталось совсем немного!',
      raised: 7500000,
      target: 10000000,
      progress: 75
    },
    {
      id: 3,
      title: 'Помощь бездомным зимой',
      description: 'Обеспечили питанием и временным жильем 500 человек в зимний период.',
      raised: 3000000,
      target: 3000000,
      progress: 100
    }
  ];

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsThankYouOpen(true);
  };

  const scrollToDonation = () => {
    document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={32} className="text-accent" />
              <span className="text-2xl font-inter font-bold">
                Доброе <span className="text-accent">Сердце</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-accent transition-colors">Главная</a>
              <a href="#categories" className="hover:text-accent transition-colors">Категории</a>
              <a href="#stories" className="hover:text-accent transition-colors">Истории успеха</a>
              <a href="#" className="hover:text-accent transition-colors">О нас</a>
              <a href="#" className="hover:text-accent transition-colors">Контакты</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Войти
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Регистрация
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/f9f55a48-cb73-49bd-aade-0def8f65cd9e.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-6 animate-fade-in">
            Помогать тем, кто в этом нуждается
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Присоединяйтесь к сообществу людей, меняющих мир к лучшему. Ваша помощь может изменить чью-то жизнь сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
              onClick={scrollToDonation}
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Пожертвовать сейчас
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-4">Направления помощи</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <Icon name={category.icon as any} size={24} />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {category.description}
                  </CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Помочь сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation-section" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-4">Сделать пожертвование</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 animate-scale-in">
              <form onSubmit={handleDonation} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Выберите категорию</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите направление помощи" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="poor">Помощь нуждающимся</SelectItem>
                      <SelectItem value="medical">Медицинская поддержка</SelectItem>
                      <SelectItem value="education">Образование</SelectItem>
                      <SelectItem value="emergency">Экстренная помощь</SelectItem>
                      <SelectItem value="any">Любая категория</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Сумма пожертвования</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={donationAmount === amount ? "default" : "outline"}
                        className="p-4"
                        onClick={() => {
                          setDonationAmount(amount);
                          setCustomAmount('');
                        }}
                      >
                        {amount.toLocaleString()} ₽
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="text-sm">Или своя сумма:</label>
                    <Input
                      type="number"
                      placeholder="Сумма в рублях"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount(null);
                      }}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" required />
                  <Input type="email" placeholder="Email" required />
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Способ оплаты</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите способ оплаты" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Банковская карта</SelectItem>
                      <SelectItem value="applepay">Apple Pay / Google Pay</SelectItem>
                      <SelectItem value="bank">Банковский перевод</SelectItem>
                      <SelectItem value="crypto">Криптовалюты</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-4">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Пожертвовать
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-4">Истории успеха</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {story.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <Progress value={story.progress} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Собрано: {story.raised.toLocaleString()} ₽</span>
                      <span>Цель: {story.target.toLocaleString()} ₽</span>
                    </div>
                    <div className="text-center">
                      <span className={`text-sm font-medium ${story.progress === 100 ? 'text-secondary' : 'text-muted-foreground'}`}>
                        {story.progress}% собрано
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" size={28} className="text-accent" />
                <span className="text-xl font-inter font-bold">Доброе Сердце</span>
              </div>
              <p className="text-primary-foreground/80">
                Платформа для благотворительности, соединяющая тех, кто нуждается в помощи, и тех, кто может помочь.
              </p>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold mb-4 text-accent">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Главная</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#categories" className="text-primary-foreground/80 hover:text-accent transition-colors">Категории</a></li>
                <li><a href="#stories" className="text-primary-foreground/80 hover:text-accent transition-colors">Истории успеха</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold mb-4 text-accent">Помощь</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Как пожертвовать</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Частые вопросы</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Поддержка</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Безопасность</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold mb-4 text-accent">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@dobroeserdce.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 555-12-34</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Благотворительная, 1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © 2024 Доброе Сердце. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {/* Thank You Dialog */}
      <Dialog open={isThankYouOpen} onOpenChange={setIsThankYouOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-primary flex items-center justify-center space-x-2">
              <Icon name="Heart" size={24} className="text-accent" />
              <span>Спасибо за вашу помощь!</span>
            </DialogTitle>
            <DialogDescription className="text-center pt-4">
              Ваше пожертвование поможет изменить чью-то жизнь к лучшему. 
              Вы получите email с деталями вашего взноса в течение нескольких минут.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setIsThankYouOpen(false)} className="px-8">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;