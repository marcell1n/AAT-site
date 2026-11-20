import { supabase } from '../lib/supabase'
import type { Vehicle, VehicleInput } from '../types/vehicle'

const BUCKET = 'vehicle-images'

export async function getVehicles(limit?: number): Promise<Vehicle[]> {
  let query = supabase
    .from('vehicles')
    .select('*')
    .order('created_at', { ascending: false })
  if (limit) query = query.limit(limit)
  const { data, error } = await query
  if (error) throw new Error(error.message)
  return data as Vehicle[]
}

export async function getVehicle(id: string): Promise<Vehicle> {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw new Error(error.message)
  return data as Vehicle
}

export async function getSimilarVehicles(
  brand: string,
  excludeId: string,
  limit = 3,
): Promise<Vehicle[]> {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .eq('brand', brand)
    .neq('id', excludeId)
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw new Error(error.message)
  return data as Vehicle[]
}

export async function createVehicle(input: VehicleInput): Promise<Vehicle> {
  const { data, error } = await supabase
    .from('vehicles')
    .insert(input)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data as Vehicle
}

export async function updateVehicle(id: string, input: Partial<VehicleInput>): Promise<Vehicle> {
  const { data, error } = await supabase
    .from('vehicles')
    .update(input)
    .eq('id', id)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data as Vehicle
}

export async function deleteVehicle(vehicle: Vehicle): Promise<void> {
  const { error } = await supabase.from('vehicles').delete().eq('id', vehicle.id)
  if (error) throw new Error(error.message)
  await removeVehicleImage(vehicle.image_url)
}

export async function uploadVehicleImage(file: File): Promise<string> {
  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
  const path = `${crypto.randomUUID()}.${ext}`
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: '31536000',
    contentType: file.type,
  })
  if (error) throw new Error(error.message)
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl
}

export async function removeVehicleImage(url: string | null): Promise<void> {
  if (!url) return
  const marker = `/${BUCKET}/`
  const index = url.indexOf(marker)
  if (index === -1) return
  const path = decodeURIComponent(url.slice(index + marker.length))
  await supabase.storage.from(BUCKET).remove([path])
}