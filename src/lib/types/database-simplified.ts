// Упрощенная версия типов для базы данных
// Для новичков - содержит только самое необходимое

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Основная структура базы данных
export type Database = {
  public: {
    Tables: {
      profiles: {
        // Что мы получаем при чтении из БД
        Row: {
          id: string
          user_id: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string | null
        }
        // Что нужно указать при создании записи
        Insert: {
          id?: string
          user_id?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string | null
        }
        // Что можно изменить при обновлении
        Update: {
          id?: string
          user_id?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string | null
        }
      }
    }
  }
}

// Простые типы для удобства (без сложной магии TypeScript)
export type Profile = Database['public']['Tables']['profiles']['Row']
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']

// Пример использования:
// const profile: Profile = { id: '123', user_id: 'user123', ... }
// const newProfile: ProfileInsert = { full_name: 'Иван Иванов' }
// const updates: ProfileUpdate = { full_name: 'Новое имя' }
