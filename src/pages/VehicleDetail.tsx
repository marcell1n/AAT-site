
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ContactButtons from '../components/ContactButtons'
import VehicleCard from '../components/VehicleCard'
import { SITE } from '../config/site'
import {
  formatMileage,
  formatPriceRange,
  fuelLabel,
  transmissionLabel,
} from '../lib/format'
import { getSimilarVehicles, getVehicle } from '../services/vehicleService'
import type { Vehicle } from '../types/vehicle'
import './VehicleDetail.css'

export default function VehicleDetail() {
  const { id } = useParams()
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)
  const [similar, setSimilar] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    let cancelled = false
    setLoading(true)
    setError(null)
    setVehicle(null)
    setSimilar([])

    async function load(vehicleId: string) {
      try {
        const v = await getVehicle(vehicleId)

        if (cancelled) return

        setVehicle(v)

        const others = await getSimilarVehicles(v.brand, v.id).catch(() => [])

        if (!cancelled) setSimilar(others)
      } catch {
        if (!cancelled) setError('Ce véhicule est introuvable.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load(id)

    return () => {
      cancelled = true
    }
  }, [id])

  useEffect(() => {
    if (vehicle) {
      document.title = `${vehicle.brand} ${vehicle.model} | ${SITE.name}`
    }

    return () => {
      document.title = SITE.name
    }
  }, [vehicle])

  if (loading) {
    return (
      <div className="vehicle-detail-loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
        <p>Chargement du véhicule...</p>
      </div>
    )
  }

  if (error || !vehicle) {
    return (
      <div className="vehicle-detail-error">
        <div className="vehicle-error-icon">
          <i className="bi bi-car-front" />
        </div>

        <h2>Véhicule introuvable</h2>

        <p>{error ?? 'Ce véhicule est introuvable.'}</p>

        <Link to="/catalogue" className="vehicle-back-button">
          <i className="bi bi-arrow-left" />
          Retour au catalogue
        </Link>
      </div>
    )
  }

  const title = `${vehicle.brand} ${vehicle.model}`

  const specs: [string, string | null][] = [
    ['Marque', vehicle.brand],
    ['Modèle', vehicle.model],
    ['Version', vehicle.version],
    ['Année', String(vehicle.year)],
    ['Carburant', fuelLabel(vehicle.fuel)],
    [
      'Transmission',
      vehicle.transmission
        ? transmissionLabel(vehicle.transmission)
        : null,
    ],
    [
      'Kilométrage',
      vehicle.mileage_km != null
        ? formatMileage(vehicle.mileage_km)
        : null,
    ],
    ['Couleur', vehicle.color],
    [
      'Nombre de places',
      vehicle.seats != null ? String(vehicle.seats) : null,
    ],
    ['Moteur', vehicle.engine],
  ]

  const visibleSpecs = specs.filter(([, value]) => value)

  return (
    <main className="vehicle-detail-page">

      {/* FIL D'ARIANE */}
      <div className="vehicle-detail-container">
        <nav aria-label="Fil d'Ariane" className="vehicle-breadcrumb">
          <Link to="/catalogue">
            <i className="bi bi-arrow-left" />
            Retour au catalogue
          </Link>
        </nav>

        {/* PRESENTATION PRINCIPALE */}
        <section className="vehicle-detail-main">

          {/* IMAGE DU VEHICULE */}
          <div className="vehicle-detail-image-wrapper">
            {vehicle.image_url ? (
              <img
                src={vehicle.image_url}
                alt={title}
                className="vehicle-detail-image"
              />
            ) : (
              <div className="vehicle-detail-no-image">
                <i className="bi bi-car-front" />
                <span>Image non disponible</span>
              </div>
            )}
          </div>

          {/* INFORMATIONS PRINCIPALES */}
          <div className="vehicle-detail-info">

            <span className="vehicle-detail-eyebrow">
              <span />
              DÉCOUVREZ CE VÉHICULE
            </span>

            <h1>{title}</h1>

            {vehicle.version && (
              <p className="vehicle-detail-version">
                {vehicle.version}
              </p>
            )}

            <div className="vehicle-detail-badges">
              <span className="vehicle-badge vehicle-badge-year">
                <i className="bi bi-calendar3" />
                {vehicle.year}
              </span>

              <span className="vehicle-badge">
                <i className="bi bi-fuel-pump" />
                {fuelLabel(vehicle.fuel)}
              </span>

              {vehicle.transmission && (
                <span className="vehicle-badge">
                  <i className="bi bi-gear" />
                  {transmissionLabel(vehicle.transmission)}
                </span>
              )}
            </div>

            <div className="vehicle-detail-price-box">
              <span className="vehicle-detail-price-label">
                Prix du véhicule
              </span>

              <strong>
                {formatPriceRange(vehicle.price_min, vehicle.price_max)}
              </strong>

              <small>
                <i className="bi bi-info-circle" />
                Le prix peut varier selon la version et les options.
                Contactez-nous pour un devis précis.
              </small>
            </div>

            <div className="vehicle-detail-contact">
              <ContactButtons vehicle={vehicle} size="lg" />
            </div>

            <div className="vehicle-detail-reassurance">
              <i className="bi bi-shield-check" />
              <span>Un accompagnement personnalisé pour votre achat.</span>
            </div>

          </div>
        </section>

        {/* DESCRIPTION ET CARACTERISTIQUES */}
        <section className="vehicle-detail-sections">

          <div className="vehicle-description-card">
            <div className="vehicle-section-heading">
              <span className="vehicle-section-icon">
                <i className="bi bi-card-text" />
              </span>

              <div>
                <span>EN SAVOIR PLUS</span>
                <h2>Description du véhicule</h2>
              </div>
            </div>

            {vehicle.description ? (
              <p className="vehicle-description-text">
                {vehicle.description}
              </p>
            ) : (
              <p className="vehicle-description-empty">
                Contactez-nous pour obtenir plus d’informations sur ce véhicule.
              </p>
            )}
          </div>

          <div className="vehicle-specs-card">
            <div className="vehicle-section-heading">
              <span className="vehicle-section-icon">
                <i className="bi bi-list-check" />
              </span>

              <div>
                <span>FICHE TECHNIQUE</span>
                <h2>Caractéristiques</h2>
              </div>
            </div>

            <div className="vehicle-specs-list">
              {visibleSpecs.map(([label, value]) => (
                <div className="vehicle-spec-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* VEHICULES SIMILAIRES */}
        {similar.length > 0 && (
          <section className="vehicle-similar-section">
            <div className="vehicle-similar-heading">
              <div>
                <span>NOTRE SÉLECTION</span>
                <h2>Autres véhicules {vehicle.brand}</h2>
                <p>Découvrez également ces modèles qui pourraient vous intéresser.</p>
              </div>

              <Link to="/catalogue" className="vehicle-similar-link">
                Voir le catalogue
                <i className="bi bi-arrow-right" />
              </Link>
            </div>

            <div className="row g-4">
              {similar.map((v) => (
                <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                  <VehicleCard vehicle={v} />
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}
