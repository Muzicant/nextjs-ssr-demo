export default function AboutPage() {
  const buildTime = new Date().toLocaleString('ru-RU')
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          О проекте
        </h1>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
          <p className="text-purple-700">
            <strong>SSG в действии:</strong> Эта страница была сгенерирована на этапе сборки.
            Время сборки: {buildTime}
          </p>
        </div>

        <div className="prose max-w-none">
          <section className="bg-white rounded-lg shadow-md border p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Чем Next.js отличается от обычного React?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">
                  Обычный React (CSR)
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Рендеринг только на клиенте</li>
                  <li>• Пустой HTML изначально</li>
                  <li>• Медленная первая загрузка</li>
                  <li>• Проблемы с SEO</li>
                  <li>• Ручная настройка роутинга</li>
                  <li>• Дополнительные библиотеки для всего</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">
                  Next.js
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Серверный рендеринг (SSR/SSG)</li>
                  <li>• Готовый HTML с данными</li>
                  <li>• Мгновенная загрузка контента</li>
                  <li>• Отличное SEO из коробки</li>
                  <li>• Автоматический роутинг</li>
                  <li>• Все настроено по умолчанию</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md border p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Основные возможности Next.js
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">SSR & SSG</h3>
                <p className="text-gray-600 text-sm">
                  Серверный рендеринг и статическая генерация
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛣️</span>
                </div>
                <h3 className="font-semibold mb-2">Автороутинг</h3>
                <p className="text-gray-600 text-sm">
                  Файловая система = структура маршрутов
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Оптимизация</h3>
                <p className="text-gray-600 text-sm">
                  Автоматическое разделение кода и кеширование
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md border p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Демонстрация в этом проекте
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                <div>
                  <strong>Главная страница:</strong> Простой компонент с переменной окружения
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                <div>
                  <strong>Страница новостей:</strong> SSR с загрузкой данных при каждом запросе
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                <div>
                  <strong>Эта страница:</strong> SSG - сгенерирована на этапе сборки
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}