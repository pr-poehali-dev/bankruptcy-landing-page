import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" size={28} className="text-blue-700" />
              <span className="text-xl font-bold text-gray-900">БанкротПрав</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Главная</a>
              <a href="#procedure" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Процедура</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Преимущества</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-700 hover:bg-blue-800">Бесплатная консультация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Профессиональная помощь</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Банкротство физических лиц
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Законное освобождение от долгов с минимальными рисками. 
                Опытные юристы помогут пройти процедуру банкротства быстро и надежно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Бесплатная консультация
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="mr-1 text-green-600" />
                  Гарантия результата
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-1 text-blue-600" />
                  6-8 месяцев
                </div>
                <div className="flex items-center">11000+ клиентов</div>
              </div>
            </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right" delay={200}>
            <div className="lg:text-center">
              <img 
                src="/img/2d229ba8-1e69-4142-8953-5ac4b5a7471a.jpg" 
                alt="Юрист по банкротству" 
                className="rounded-lg shadow-2xl mx-auto max-w-md w-full"
              />
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section id="procedure" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Процедура банкротства
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Пошаговый процесс освобождения от долгов согласно законодательству РФ
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Консультация и анализ",
                description: "Изучаем вашу ситуацию, анализируем долги и активы, определяем возможность банкротства",
                icon: "FileSearch"
              },
              {
                step: "02", 
                title: "Подготовка документов",
                description: "Собираем и подготавливаем полный пакет документов для подачи заявления в суд",
                icon: "FileText"
              },
              {
                step: "03",
                title: "Подача заявления",
                description: "Подаем заявление о банкротстве в арбитражный суд и сопровождаем процесс",
                icon: "Send"
              },
              {
                step: "04",
                title: "Реструктуризация",
                description: "Попытка погашения долгов в рамках плана реструктуризации (3 года)",
                icon: "RefreshCw"
              },
              {
                step: "05",
                title: "Реализация имущества",
                description: "При невозможности реструктуризации - продажа имущества для погашения долгов",
                icon: "Home"
              },
              {
                step: "06",
                title: "Освобождение от долгов",
                description: "Получение определения суда об освобождении от оставшихся долгов",
                icon: "CheckCircle"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="relative overflow-hidden hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl font-bold text-blue-100">{item.step}</span>
                    <Icon name={item.icon} size={24} className="text-blue-700" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Преимущества банкротства
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Законный способ решения финансовых проблем с защитой ваших прав
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Полное освобождение от долгов",
                description: "Списание всех долгов перед банками, МФО и другими кредиторами",
                icon: "Banknote"
              },
              {
                title: "Остановка начисления процентов",
                description: "Проценты и штрафы перестают начисляться с момента подачи заявления",
                icon: "PauseCircle"
              },
              {
                title: "Защита от коллекторов",
                description: "Запрет на взыскание долгов во внесудебном порядке",
                icon: "Shield"
              },
              {
                title: "Сохранение жилья",
                description: "Единственное жилье остается у должника при соблюдении условий",
                icon: "Home"
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name={benefit.icon} size={24} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={400}>
          <Card className="bg-blue-700 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">2000+</div>
                  <div className="text-blue-100">Успешных дел</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-blue-100">Положительных решений</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">12</div>
                  <div className="text-blue-100">Лет опыта</div>
                </div>
              </div>
            </CardContent>
          </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Реальные истории людей, которые решили свои финансовые проблемы
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Предприниматель",
                text: "Благодаря профессиональной помощи смогла освободиться от долгов в 2.5 млн рублей. Процедура прошла без осложнений.",
                rating: 5
              },
              {
                name: "Михаил Сидоров",
                role: "Менеджер",
                text: "Долги по кредитам душили семью. Банкротство помогло начать жизнь с чистого листа. Спасибо за профессионализм!",
                rating: 5
              },
              {
                name: "Елена Иванова",
                role: "Учитель",
                text: "Процедура заняла 8 месяцев. Юристы сопровождали на каждом этапе. Результат - полное освобождение от долгов.",
                rating: 5
              }
            ].map((review, index) => (
              <AnimatedSection key={index} animation="fade-in-left" delay={index * 100}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={20} className="text-gray-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Необходимые документы
            </h2>
            <p className="text-xl text-gray-600">
              Полный список документов для процедуры банкротства
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="scale-in" delay={0}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="FileText" size={24} className="mr-2 text-blue-700" />
                  Основные документы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Паспорт гражданина РФ",
                    "СНИЛС и ИНН",
                    "Справка о семейном положении",
                    "Трудовая книжка или справка с места работы",
                    "Справка о доходах за 3 года",
                    "Выписка из ЕГРП на недвижимость"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={100}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-2 text-blue-700" />
                  Документы по обязательствам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Кредитные договоры",
                    "Справки о задолженности",
                    "Исполнительные листы",
                    "Договоры займа",
                    "Документы по алиментам",
                    "Налоговые уведомления"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения бесплатной консультации
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-in-up" delay={0}>
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500">Работаем 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@bankrotprav.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Тверская, д. 12, стр. 1</p>
                    <p className="text-sm text-gray-500">м. Тверская, 3 минуты пешком</p>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
            <Card>
              <CardHeader>
                <CardTitle>Бесплатная консультация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Сумма долга</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Примерная сумма задолженности"
                  />
                </div>
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  Получить консультацию
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">БанкротПрав</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональная помощь в процедуре банкротства физических лиц
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Банкротство физлиц</li>
                <li>Реструктуризация долгов</li>
                <li>Юридическое сопровождение</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Наши гарантии</li>
                <li>Отзывы клиентов</li>
                <li>Вопросы и ответы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@bankrotprav.ru
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 БанкротПрав. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;