export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: Record<string, never>
    // Add your table types here when you create them
    // Example:
    // Tables: {
    //   users: {
    //     Row: {
    //       id: string
    //       email: string
    //       created_at: string
    //     }
    //     Insert: {
    //       id?: string
    //       email: string
    //       created_at?: string
    //     }
    //     Update: {
    //       id?: string
    //       email?: string
    //       created_at?: string
    //     }
    //   }
    // }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
