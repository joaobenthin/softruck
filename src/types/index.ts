export type Languages = 'pt' | 'en' | 'es'

export interface Gps {
  latitude: number
  longitude: number
  address?: string
}

export interface Course {
  gps: Gps[]
  start_at: string
  end_at: string
  distance: number
  stops: number
}

export interface GpsData {
  course: Course[]
}
