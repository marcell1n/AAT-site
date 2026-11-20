import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import VehicleForm from '../components/VehicleForm'
import {
  createVehicle,
  getVehicle,
  removeVehicleImage,
  updateVehicle,
  uploadVehicleImage,
} from '../services/vehicleService'
import { errorMessage } from '../lib/format'
import type { Vehicle, VehicleInput } from '../types/vehicle'

export default function VehicleEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [vehicle, setVehicle] = useState<Vehicle | undefined>()
  const [loading, setLoading] = useState(Boolean(id))
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    getVehicle(id)
      .then(setVehicle)
      .catch((e) => setError(errorMessage(e)))
      .finally(() => setLoading(false))
  }, [id])

  const handleSubmit = async (values: VehicleInput, file: File | null) => {
    setSubmitting(true)
    setError(null)
    try {
      let imageUrl = vehicle?.image_url ?? null
      let oldImageUrl: string | null = null

      if (file) {
        oldImageUrl = imageUrl
        imageUrl = await uploadVehicleImage(file)
      }

      const payload = { ...values, image_url: imageUrl }
      if (id) await updateVehicle(id, payload)
      else await createVehicle(payload)

      if (oldImageUrl) await removeVehicleImage(oldImageUrl)
      navigate('/admin/vehicules')
    } catch (e) {
      setError(errorMessage(e))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container py-4" style={{ maxWidth: 800 }}>
      <Link to="/admin/vehicules" className="text-decoration-none">
        <i className="bi bi-arrow-left" /> Retour à la liste
      </Link>
      <h1 className="h3 my-3">{id ? 'Modifier le véhicule' : 'Ajouter un véhicule'}</h1>

      {loading && <div className="spinner-border" role="status" />}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && (!id || vehicle) && (
        <VehicleForm initial={vehicle} submitting={submitting} onSubmit={handleSubmit} />
      )}
    </div>
  )
}