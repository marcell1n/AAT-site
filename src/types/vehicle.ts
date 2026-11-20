export type Fuel = 'essence' | 'diesel' | 'hybride' | 'hybride_rechargeable' | 'electrique'
export type Transmission = 'manuelle' | 'automatique'

export const FUEL_OPTIONS: { value: Fuel; label: string }[] = [
  { value: 'essence', label: 'Essence' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'hybride', label: 'Hybride' },
  { value: 'hybride_rechargeable', label: 'Hybride rechargeable' },
  { value: 'electrique', label: 'Électrique' },
]

export const TRANSMISSION_OPTIONS: { value: Transmission; label: string }[] = [
  { value: 'manuelle', label: 'Manuelle' },
  { value: 'automatique', label: 'Automatique' },
]

export interface Vehicle {
  id: string
  brand: string
  model: string
  version: string | null
  year: number
  price_min: number
  price_max: number
  fuel: Fuel
  image_url: string | null
  description: string | null
  transmission: Transmission | null
  mileage_km: number | null
  color: string | null
  seats: number | null
  engine: string | null
  created_at: string
  updated_at: string
}

export type VehicleInput = Omit<Vehicle, 'id' | 'created_at' | 'updated_at'>