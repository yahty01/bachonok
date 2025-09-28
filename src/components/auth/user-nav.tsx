'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

interface UserNavProps {
  user: User
}

export default function UserNav({ user }: UserNavProps) {
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="text-right">
        <div className="text-sm font-medium text-gray-900">
          {user.email}
        </div>
        <div className="text-xs text-gray-500">
          Авторизован
        </div>
      </div>
      <button
        onClick={handleSignOut}
        className="text-sm bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
      >
        Выйти
      </button>
    </div>
  )
}
