import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [dailyRewardClaimed, setDailyRewardClaimed] = useState(false);

  const mockNFTs = [
    {
      id: 1,
      name: "Cyber Punk #001",
      price: "150 XRP",
      rarity: "Rare",
      image: "https://v3.fal.media/files/lion/iBo0ILrM1oCXaWwuvs6LW_output.png",
    },
    {
      id: 2,
      name: "Neo Genesis #042",
      price: "250 XRP",
      rarity: "Epic",
      image: "https://v3.fal.media/files/lion/iBo0ILrM1oCXaWwuvs6LW_output.png",
    },
    {
      id: 3,
      name: "Digital Samurai #007",
      price: "300 XRP",
      rarity: "Legendary",
      image: "https://v3.fal.media/files/lion/iBo0ILrM1oCXaWwuvs6LW_output.png",
    },
  ];

  const mockStats = {
    totalNFTs: 23,
    totalValue: "2,450 XRP",
    dailyRewards: "15.5 XRP",
    totalEarned: "1,205 XRP",
  };

  return (
    <div className="min-h-screen bg-cyber-dark font-mono text-cyber-neon">
      {/* Header */}
      <header className="border-b border-cyber-gray/30 bg-cyber-dark/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon
                name="Zap"
                className="h-8 w-8 text-cyber-neon animate-neon-flicker"
              />
              <h1 className="text-3xl font-bold cyber-text">XRPL NEXUS</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-cyber-pink transition-colors">
                Главная
              </a>
              <a href="#" className="hover:text-cyber-pink transition-colors">
                Кошелек
              </a>
              <a href="#" className="hover:text-cyber-pink transition-colors">
                NFT
              </a>
              <a href="#" className="hover:text-cyber-pink transition-colors">
                Награды
              </a>
              <a href="#" className="hover:text-cyber-pink transition-colors">
                Статистика
              </a>
            </nav>
            <Button
              onClick={() => setWalletConnected(!walletConnected)}
              className={`${walletConnected ? "bg-cyber-neon text-cyber-dark" : "bg-cyber-purple"} hover:bg-cyber-pink transition-all duration-300 cyber-glow`}
            >
              {walletConnected ? "Кошелек подключен" : "Подключить кошелек"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 cyber-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 cyber-text animate-glow-pulse">
            Добро пожаловать в будущее NFT
          </h2>
          <p className="text-xl mb-8 text-cyber-neon/80 max-w-2xl mx-auto">
            Торгуйте NFT на XRPL блокчейне, получайте ежедневные награды и
            управляйте своим цифровым портфолио
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-cyber-neon text-cyber-dark hover:bg-cyber-pink transition-all duration-300 cyber-glow"
            >
              <Icon name="Rocket" className="mr-2 h-5 w-5" />
              Начать торговлю
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-cyber-dark transition-all duration-300"
            >
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="wallet" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-cyber-purple/20 border-cyber-gray/30">
            <TabsTrigger
              value="wallet"
              className="data-[state=active]:bg-cyber-neon data-[state=active]:text-cyber-dark"
            >
              <Icon name="Wallet" className="mr-2 h-4 w-4" />
              Кошелек
            </TabsTrigger>
            <TabsTrigger
              value="nft"
              className="data-[state=active]:bg-cyber-neon data-[state=active]:text-cyber-dark"
            >
              <Icon name="Image" className="mr-2 h-4 w-4" />
              NFT Маркет
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="data-[state=active]:bg-cyber-neon data-[state=active]:text-cyber-dark"
            >
              <Icon name="Gift" className="mr-2 h-4 w-4" />
              Награды
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className="data-[state=active]:bg-cyber-neon data-[state=active]:text-cyber-dark"
            >
              <Icon name="BarChart3" className="mr-2 h-4 w-4" />
              Статистика
            </TabsTrigger>
          </TabsList>

          {/* Wallet Tab */}
          <TabsContent value="wallet" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader>
                  <CardTitle className="text-cyber-neon flex items-center">
                    <Icon name="Wallet" className="mr-2 h-5 w-5" />
                    Xaman Wallet
                  </CardTitle>
                  <CardDescription className="text-cyber-neon/70">
                    Основной кошелек для XRPL
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Статус:</span>
                      <Badge
                        className={
                          walletConnected
                            ? "bg-cyber-neon text-cyber-dark"
                            : "bg-cyber-pink"
                        }
                      >
                        {walletConnected ? "Подключен" : "Отключен"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Баланс:</span>
                      <span className="font-bold text-cyber-neon">
                        {walletConnected ? "1,234.56 XRP" : "---"}
                      </span>
                    </div>
                    <Button
                      onClick={() => setWalletConnected(!walletConnected)}
                      className="w-full bg-cyber-purple hover:bg-cyber-pink transition-all duration-300"
                    >
                      {walletConnected ? "Отключить" : "Подключить"} Xaman
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader>
                  <CardTitle className="text-cyber-neon flex items-center">
                    <Icon name="Link" className="mr-2 h-5 w-5" />
                    WalletConnect
                  </CardTitle>
                  <CardDescription className="text-cyber-neon/70">
                    Альтернативный способ подключения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Статус:</span>
                      <Badge className="bg-cyber-gray text-cyber-neon">
                        Скоро
                      </Badge>
                    </div>
                    <Button
                      className="w-full bg-cyber-gray hover:bg-cyber-purple transition-all duration-300"
                      disabled
                    >
                      Подключить WalletConnect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* NFT Tab */}
          <TabsContent value="nft" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockNFTs.map((nft) => (
                <Card
                  key={nft.id}
                  className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="aspect-square bg-cyber-gray/20 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={nft.image}
                        alt={nft.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-cyber-neon">
                      {nft.name}
                    </CardTitle>
                    <CardDescription className="text-cyber-neon/70">
                      <Badge
                        className={`${nft.rarity === "Legendary" ? "bg-cyber-pink" : nft.rarity === "Epic" ? "bg-cyber-blue" : "bg-cyber-purple"}`}
                      >
                        {nft.rarity}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-cyber-neon/70">Цена:</span>
                      <span className="font-bold text-cyber-neon">
                        {nft.price}
                      </span>
                    </div>
                    <Button className="w-full bg-cyber-neon text-cyber-dark hover:bg-cyber-pink transition-all duration-300 cyber-glow">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Купить NFT
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader>
                  <CardTitle className="text-cyber-neon flex items-center">
                    <Icon name="Gift" className="mr-2 h-5 w-5" />
                    Ежедневные награды
                  </CardTitle>
                  <CardDescription className="text-cyber-neon/70">
                    Получайте награды каждый день
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Сегодняшняя награда:</span>
                      <span className="font-bold text-cyber-neon">
                        15.5 XRP
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Статус:</span>
                      <Badge
                        className={
                          dailyRewardClaimed
                            ? "bg-cyber-gray"
                            : "bg-cyber-neon text-cyber-dark"
                        }
                      >
                        {dailyRewardClaimed ? "Получено" : "Доступно"}
                      </Badge>
                    </div>
                    <Button
                      onClick={() => setDailyRewardClaimed(true)}
                      disabled={dailyRewardClaimed}
                      className="w-full bg-cyber-neon text-cyber-dark hover:bg-cyber-pink transition-all duration-300 cyber-glow disabled:bg-cyber-gray"
                    >
                      {dailyRewardClaimed
                        ? "Награда получена"
                        : "Получить награду"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader>
                  <CardTitle className="text-cyber-neon flex items-center">
                    <Icon name="TrendingUp" className="mr-2 h-5 w-5" />
                    Прогресс недели
                  </CardTitle>
                  <CardDescription className="text-cyber-neon/70">
                    Ваш прогресс за текущую неделю
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Дней подряд:</span>
                      <span className="font-bold text-cyber-neon">5/7</span>
                    </div>
                    <Progress value={71} className="h-2 bg-cyber-gray/30" />
                    <div className="text-sm text-cyber-neon/70">
                      Получите бонус за 7 дней подряд!
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-cyber-neon/70">
                    Всего NFT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyber-neon">
                    {mockStats.totalNFTs}
                  </div>
                  <div className="text-xs text-cyber-neon/50">В коллекции</div>
                </CardContent>
              </Card>

              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-cyber-neon/70">
                    Общая стоимость
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyber-neon">
                    {mockStats.totalValue}
                  </div>
                  <div className="text-xs text-cyber-neon/50">Портфолио</div>
                </CardContent>
              </Card>

              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-cyber-neon/70">
                    Дневные награды
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyber-neon">
                    {mockStats.dailyRewards}
                  </div>
                  <div className="text-xs text-cyber-neon/50">Сегодня</div>
                </CardContent>
              </Card>

              <Card className="bg-cyber-purple/20 border-cyber-gray/30 cyber-glow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-cyber-neon/70">
                    Всего заработано
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyber-neon">
                    {mockStats.totalEarned}
                  </div>
                  <div className="text-xs text-cyber-neon/50">За все время</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-cyber-gray/30 bg-cyber-dark/90 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-cyber-neon/70">
            <p>&copy; 2024 XRPL Nexus. Powered by XRPL Blockchain.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
