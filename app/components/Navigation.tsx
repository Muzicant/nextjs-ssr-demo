import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="text-xl font-bold hover:text-blue-200 transition-colors"
          >
            Next.js Demo
          </Link>
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors"
            >
              Главная
            </Link>
            <Link 
              href="/news" 
              className="hover:text-blue-200 transition-colors"
            >
              Новости
            </Link>
            <Link 
              href="/about" 
              className="hover:text-blue-200 transition-colors"
            >
              О проекте
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}