
import { Link } from 'react-router-dom'
import type { Vehicle } from '../types/vehicle'
import {
  formatMileage,
  formatPriceRange,
  fuelLabel,
  transmissionLabel,
} from '../lib/format'
import ContactButtons from './ContactButtons'

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const title = `${vehicle.brand} ${vehicle.model}`

  return (
    <article className="featured-card card h-100 border-0 position-relative">

      {/* IMAGE */}
      <div className="featured-img-wrap position-relative">
        {vehicle.image_url ? (
          <img
            src={vehicle.image_url}
            alt={title}
            loading="lazy"
          />
        ) : (
          <div className="featured-image-placeholder">
            <i className="bi bi-car-front" />
          </div>
        )}

        <span className="featured-badge-year">
          {vehicle.year}
        </span>

        <span className="featured-badge-fuel">
          {fuelLabel(vehicle.fuel)}
        </span>
      </div>

      {/* CONTENU */}
      <div className="card-body p-4 pb-2">

        <p className="featured-brand mb-1">
          {vehicle.brand}
        </p>

        <h3 className="h5 fw-bold mb-1">
          <Link
            to={`/catalogue/${vehicle.id}`}
            className="stretched-link text-reset text-decoration-none"
          >
            {vehicle.model}
          </Link>
        </h3>

        {vehicle.version && (
          <p className="featured-version mb-0">
            {vehicle.version}
          </p>
        )}

        {/* CARACTERISTIQUES */}
        <div className="featured-specs">

          {vehicle.transmission && (
            <span>
              <i className="bi bi-gear" />
              {transmissionLabel(vehicle.transmission)}
            </span>
          )}

          {vehicle.mileage_km != null && (
            <span>
              <i className="bi bi-speedometer2" />
              {formatMileage(vehicle.mileage_km)}
            </span>
          )}

          {vehicle.seats != null && (
            <span>
              <i className="bi bi-people" />
              {vehicle.seats} places
            </span>
          )}

        </div>

        {/* PRIX */}
        <p className="featured-price mb-0">
          {formatPriceRange(vehicle.price_min, vehicle.price_max)}
        </p>

      </div>

      {/* BOUTONS DE CONTACT */}
      <div
        className="px-4 pb-4 pt-3 position-relative"
        style={{ zIndex: 2 }}
      >
        <ContactButtons vehicle={vehicle} />
      </div>

    </article>
  )
}
