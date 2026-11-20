import { FUEL_OPTIONS, TRANSMISSION_OPTIONS } from '../types/vehicle'

export const formatPrice = (n: number) => `${n.toLocaleString('fr-FR')} FCFA`

export const formatPriceRange = (min: number, max: number) =>
  min === max ? formatPrice(min) : `${min.toLocaleString('fr-FR')} – ${formatPrice(max)}`

export const fuelLabel = (fuel: string) =>
  FUEL_OPTIONS.find((o) => o.value === fuel)?.label ?? fuel

export const transmissionLabel = (value: string) =>
  TRANSMISSION_OPTIONS.find((o) => o.value === value)?.label ?? value

export const formatMileage = (km: number) =>
  km === 0 ? 'Neuf (0 km)' : `${km.toLocaleString('fr-FR')} km`

export const errorMessage = (e: unknown) =>
  e instanceof Error ? e.message : 'Une erreur est survenue.'