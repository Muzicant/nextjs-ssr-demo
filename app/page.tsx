import Link from 'next/link'

export default function Home() {
  const envVar = process.env.ENV_VAR || 'Переменная окружения не найдена'

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Next.js SSR Demo
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Добро пожаловать в демонстрационный проект, показывающий основные 
          преимущества Next.js: серверный рендеринг (SSR), быструю загрузку страниц, 
          автоматическую маршрутизацию и SEO-дружественный HTML.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Переменная окружения:
          </h3>
          <p className="text-blue-700 font-mono bg-blue-100 p-2 rounded">
            {envVar}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              🚀 Серверный рендеринг
            </h2>
            <p className="text-gray-600 mb-4">
              Страницы рендерятся на сервере, обеспечивая мгновенную загрузку 
              контента и отличное SEO.
            </p>
            <Link 
              href="/news" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Посмотреть новости →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ⚡ Статическая генерация
            </h2>
            <p className="text-gray-600 mb-4">
              Страницы генерируются на этапе сборки для максимальной 
              производительности.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              О проекте →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}