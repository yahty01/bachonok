import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Создает серверный клиент Supabase для использования в Server Components и API Routes
// Этот клиент автоматически управляет cookies для поддержания сессии пользователя
export async function createClient() {
  // Получаем доступ к cookies для чтения и записи данных сессии
  const cookieStore = await cookies()

  // Создаем серверный клиент Supabase с настройками для работы с cookies
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Функция для получения всех cookies (используется для чтения сессии)
        getAll() {
          return cookieStore.getAll()
        },
        // Функция для установки cookies (используется для сохранения сессии)
        setAll(cookiesToSet) {
          try {
            // Устанавливаем каждый cookie с соответствующими параметрами
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Метод `setAll` был вызван из Server Component.
            // Это можно игнорировать, если у вас есть middleware,
            // который обновляет пользовательские сессии.
          }
        }
      }
    }
  )
}
