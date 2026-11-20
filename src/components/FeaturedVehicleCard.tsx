
import { Link } from 'react-router-dom'
import './FeaturedVehicleCard.css'
import type { Vehicle } from '../types/vehicle'
import {
  formatMileage,
  formatPriceRange,
  fuelLabel,
  transmissionLabel,
} from '../lib/format'
import ContactButtons from './ContactButtons'

export default function FeaturedVehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const title = `${vehicle.brand} ${vehicle.model}`

  return (
    <article className="featured-card card h-100 border-0">

      {/* IMAGE DU VEHICULE */}

      <div className="featured-img-wrap position-relative">

        {vehicle.image_url ? (
          <img src={vehicle.image_url} alt={title} loading="lazy" />
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

      {/* INFORMATIONS DU VEHICULE */}

      <div className="card-body featured-card-body">

        <p className="featured-brand mb-2">
          {vehicle.brand}
        </p>

        <h3 className="featured-model">
          <Link
            to={`/catalogue/${vehicle.id}`}
            className="stretched-link text-decoration-none"
          >
            {vehicle.model}
          </Link>
        </h3>

        {vehicle.version && (
          <p className="featured-version">
            {vehicle.version}
          </p>
        )}

        {/* CARACTERISTIQUES */}

        <div className="featured-specs">

          {vehicle.transmission && (
            <span>
              <i className="bi bi-gear-fill" />
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
              <i className="bi bi-people-fill" />
              {vehicle.seats} places
            </span>
          )}

        </div>

        {/* PRIX */}

        <div className="featured-price-wrapper">
          <span className="featured-price-label">
            PRIX DU VÉHICULE
          </span>

          <p className="featured-price mb-0">
            {formatPriceRange(vehicle.price_min, vehicle.price_max)}
          </p>
        </div>

      </div>

      {/* BOUTONS DE CONTACT */}

      <div
        className="featured-card-actions position-relative"
        style={{ zIndex: 2 }}
      >
        <ContactButtons vehicle={vehicle} />
      </div>

    </article>
  )
}
