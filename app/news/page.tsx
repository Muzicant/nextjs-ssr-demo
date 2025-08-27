interface Post {
  id: number
  title: string
  body: string
  userId: number
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store' // Это обеспечивает SSR - данные загружаются при каждом запросе
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  const posts: Post[] = await res.json()
  return posts.slice(0, 5) // Берем только первые 5 постов
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default async function NewsPage() {
  const posts = await getPosts()
  const currentDate = new Date()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Последние новости
        </h1>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
          <p className="text-green-700">
            <strong>SSR в действии:</strong> Эта страница рендерится на сервере при каждом запросе.
            Данные загружаются с API до отправки HTML клиенту.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                  {post.title}
                </h2>
                <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
                  ID: {post.id}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.body}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Автор: User {post.userId}</span>
                <time>
                  {formatDate(new Date(currentDate.getTime() - (index * 60 * 60 * 1000)))}
                </time>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Проверка SSR
          </h3>
          <div className="text-blue-700 text-sm">
            <p className="mb-2">
              <strong>Чтобы убедиться, что страница рендерится на сервере:</strong>
            </p>
            <ul className="space-y-1 ml-4">
              <li>1. Откройте DevTools → Network → отключите JavaScript</li>
              <li>2. Обновите страницу - новости все равно будут видны</li>
              <li>3. Или нажмите Ctrl+U (View Source) - HTML уже содержит данные</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}