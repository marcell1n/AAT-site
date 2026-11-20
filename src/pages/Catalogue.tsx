import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VehicleCard from '../components/VehicleCard'
import { getVehicles } from '../services/vehicleService'
import { errorMessage } from '../lib/format'
import type { Vehicle } from '../types/vehicle'
import './Catalogue.css'

export default function Catalogue() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getVehicles()
      .then(setVehicles)
      .catch((e) => setError(errorMessage(e)))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
     

{/* BANNIÈRE CATALOGUE */}
<section
  className="page-banner"
  style={{
    backgroundImage:
      "linear-gradient(120deg, rgba(6, 26, 51, 0.94), rgba(6, 26, 51, 0.72)), url('/images/catalogue-banner.jpg')",
  }}
>
  <div className="container page-banner-content">
    <div className="banner-main">

      <div className="eyebrow">
        <span className="eyebrow-line" />
        DÉCOUVREZ NOTRE SÉLECTION
        <span className="eyebrow-line" />
      </div>

      <h1>
        Trouvez le véhicule
        <span> qui vous correspond</span>
      </h1>

      <div className="banner-bar" />

      <p className="banner-description">
        Découvrez notre sélection de véhicules soigneusement choisis
        pour répondre à vos envies, vos besoins et votre budget.
      </p>

    </div>
  </div>
</section>


      {/* Liste des véhicules */}
      <section className="container py-5">
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border" role="status" />
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && vehicles.length === 0 && (
          <p className="text-muted text-center py-5">Aucun véhicule pour le moment.</p>
        )}

        <div className="row g-4">
          {vehicles.map((v) => (
            <div className="col-12 col-md-6 col-lg-4" key={v.id}>
              <VehicleCard vehicle={v} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}