import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVehicle, getVehicles } from '../services/vehicleService'
import { errorMessage, formatPriceRange, fuelLabel } from '../lib/format'
import type { Vehicle } from '../types/vehicle'

export default function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getVehicles()
      .then(setVehicles)
      .catch((e) => setError(errorMessage(e)))
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = async (vehicle: Vehicle) => {
    if (!window.confirm(`Supprimer ${vehicle.brand} ${vehicle.model} ?`)) return
    try {
      await deleteVehicle(vehicle)
      setVehicles((list) => list.filter((v) => v.id !== vehicle.id))
    } catch (e) {
      setError(errorMessage(e))
    }
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Véhicules</h1>
        <Link to="/admin/vehicules/nouveau" className="btn btn-primary">
          <i className="bi bi-plus-lg me-1" /> Ajouter
        </Link>
      </div>

      {loading && <div className="spinner-border" role="status" />}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && vehicles.length === 0 && <p className="text-muted">Aucun véhicule.</p>}

      {vehicles.length > 0 && (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Image</th>
                <th>Véhicule</th>
                <th>Année</th>
                <th>Prix</th>
                <th>Carburant</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((v) => (
                <tr key={v.id}>
                  <td style={{ width: 90 }}>
                    {v.image_url ? (
                      <img
                        src={v.image_url}
                        alt=""
                        style={{ width: 80, height: 50, objectFit: 'cover' }}
                        className="rounded"
                      />
                    ) : (
                      <i className="bi bi-image text-muted fs-4" />
                    )}
                  </td>
                  <td>
                    <div className="fw-semibold">{v.brand} {v.model}</div>
                    <div className="text-muted small">{v.version}</div>
                  </td>
                  <td>{v.year}</td>
                  <td>{formatPriceRange(v.price_min, v.price_max)}</td>
                  <td>{fuelLabel(v.fuel)}</td>
                  <td className="text-end text-nowrap">
                    <Link to={`/admin/vehicules/${v.id}`} className="btn btn-sm btn-outline-secondary me-2">
                      Modifier
                    </Link>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(v)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}