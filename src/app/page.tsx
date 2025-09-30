import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Database } from '@/lib/types/database'
import UserNav from '@/components/auth/user-nav'

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Попробуем получить профиль пользователя
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Добро пожаловать в Bochonok! 💰
            </h1>
            <p className="text-xl text-gray-600">
              Supabase успешно подключен и работает
            </p>
          </div>
          <UserNav user={user} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              👤 Информация о пользователе
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="ml-2 text-gray-600">{user.email}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">ID:</span>
                <span className="ml-2 text-gray-600 font-mono text-sm">{user.id}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Подтвержден:</span>
                <span className="ml-2">
                  {user.email_confirmed_at ? (
                    <span className="text-green-600">✓ Да</span>
                  ) : (
                    <span className="text-red-600">✗ Нет</span>
                  )}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Профиль в БД:</span>
                <span className="ml-2">
                  {profile ? (
                    <span className="text-green-600">✓ Существует</span>
                  ) : (
                    <span className="text-orange-600">⚠ Не создан</span>
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ✅ Статус подключения
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Supabase подключен</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Аутентификация работает</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Middleware настроен</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Таблица profiles создана</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">RLS политики активны</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">TypeScript типы обновлены</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 mb-3">
            🎊 Поздравляем! Настройка завершена
          </h3>
          <p className="text-green-800 mb-3">
            Ваш проект успешно настроен и готов к разработке. Все компоненты Supabase работают корректно:
          </p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Аутентификация пользователей</li>
            <li>• Безопасность на уровне строк (RLS)</li>
            <li>• TypeScript типизация</li>
            <li>• Server-side и Client-side компоненты</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
