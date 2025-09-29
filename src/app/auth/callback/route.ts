import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import type { Database } from '@/lib/types/database'

// Обработчик GET запроса для Supabase Auth callback
// Этот роут вызывается после подтверждения email при регистрации
export async function handleAuthCallback(request: NextRequest) {
  // Получаем URL запроса для извлечения параметров
  const requestUrl = new URL(request.url)
  
  // Извлекаем код подтверждения из URL параметров
  // Этот код приходит от Supabase после клика по ссылке в email
  const code = requestUrl.searchParams.get('code')

  // Если код подтверждения присутствует, обрабатываем его
  if (code) {
    // Получаем доступ к cookies для сохранения сессии
    const cookieStore = await cookies()
    
    // Создаем серверный клиент Supabase с настройками для работы с cookies
    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          // Функция для получения всех cookies
          getAll() {
            return cookieStore.getAll()
          },
          // Функция для установки cookies (нужна для сохранения сессии)
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          },
        },
      }
    )
    
    // Обмениваем код подтверждения на полноценную сессию пользователя
    // После этого пользователь будет считаться авторизованным
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Перенаправляем пользователя на главную страницу после завершения процесса входа
  // requestUrl.origin возвращает базовый URL сайта (например, https://mysite.com)
  return NextResponse.redirect(requestUrl.origin)
}
