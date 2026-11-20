import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FeaturedVehicleCard from '../components/FeaturedVehicleCard'
import { SITE } from '../config/site'
import { telHref, whatsappHref } from '../lib/contact'
import { getVehicles } from '../services/vehicleService'
import type { Vehicle } from '../types/vehicle'
import './Home.css'

const ADVANTAGES = [
  { icon: 'bi-patch-check-fill', title: 'Véhicules sélectionnés', text: 'Chaque véhicule est choisi avec soin pour sa qualité et sa fiabilité.' },
  { icon: 'bi-cash-coin', title: 'Prix transparents', text: 'Des prix clairs affichés, sans mauvaise surprise.' },
  { icon: 'bi-headset', title: 'Accompagnement', text: 'Une équipe disponible pour vous conseiller avant et après l’achat.' },
]

export default function Home() {
  const [latest, setLatest] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getVehicles(6)
      .then(setLatest)
      .catch(() => setLatest([]))
      .finally(() => setLoading(false))
  }, [])

  const generalMessage = `Bonjour ${SITE.name}, je souhaite des informations sur vos véhicules.`

  return (
    <>
      {/* Hero */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/hero-car.jpg')",
        }}
      >
        <div className="container hero-content">
          <h1>
            Bienvenue chez Mobility {' '}
           <span className="text-aat-yellow" style={{ color: '#FF8C00' }}>
  prenez la route vers votre prochain véhicule.
</span>
          </h1>

          <p className="lead text-white mt-3 mb-4">{SITE.tagline}</p>

          <div className="d-flex flex-wrap justify-content-center gap-3 hero-buttons">
            <Link to="/catalogue" className="btn btn-accent btn-lg btn-catalogue">
              Voir le catalogue
            </Link>

            <a
              href={whatsappHref(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg btn-whatsapp"
            >
              <i className="bi bi-whatsapp me-2" />
              Nous écrire
            </a>
          </div>
        </div>
      </section>

     
{/* AVANTAGES SECTION */}

<section className="advantages-section">

  <div className="container">

    {/* En-tête */}

    <div className="advantages-header text-center">

      <div className="advantages-label">
        <span className="advantages-label-line"></span>
        <span>POURQUOI NOUS CHOISIR ?</span>
        <span className="advantages-label-line"></span>
      </div>

      <h2 className="advantages-title fw-bold">
        Votre satisfaction,
        <br />
        <span>notre priorité.</span>
      </h2>

      <p className="advantages-description">
        Découvrez les avantages qui font de {SITE.name}
        votre partenaire de confiance pour l’achat de votre véhicule.
      </p>

    </div>

    {/* Cartes avantages */}

    <div className="row g-4 justify-content-center advantages-grid">

      {ADVANTAGES.map((a, index) => (

        <div className="col-md-6 col-lg-4" key={a.title}>

          <div className="advantage-card h-100">

            {/* Numéro */}

            <span className="advantage-number">
              0{index + 1}
            </span>

            {/* Icône */}

            <div className="advantage-icon">
              <i className={`bi ${a.icon}`} />
            </div>

            {/* Contenu */}

            <div className="advantage-content">

              <h3>{a.title}</h3>

              <div className="advantage-divider"></div>

              <p>{a.text}</p>

            </div>

            {/* Décoration */}

            <div className="advantage-card-decoration"></div>

          </div>

        </div>

      ))}

    </div>

    {/* Signature AAT */}

    <div className="advantages-footer">

      <div className="advantages-footer-line"></div>

      <div className="advantages-footer-content">
        <i className="bi bi-shield-check"></i>

        <span>
          QUALITÉ <b>•</b> CONFIANCE <b>•</b> ENGAGEMENT
        </span>
      </div>

      <div className="advantages-footer-line"></div>

    </div>

  </div>

</section>


      {/* Derniers véhicules */}
      {(loading || latest.length > 0) && (
        <section className="bg-light py-5">
          <div className="container py-3">
            <div className="section-heading">
              <div className="eyebrow">Nos nouveautés</div>
              <h2 className="display-6">Derniers véhicules</h2>
              <div className="bar" />
            </div>

            <div className="row g-4 g-xl-5">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div className="col-12 col-md-6 col-lg-4" key={i}>
                      <div
                        className="card border-0 shadow-sm h-100 placeholder-glow"
                        style={{ borderRadius: '1.25rem' }}
                      >
                        <div
                          className="placeholder w-100"
                          style={{ aspectRatio: '4 / 3', borderRadius: '1.25rem 1.25rem 0 0' }}
                        />
                        <div className="card-body p-4">
                          <span className="placeholder col-4 mb-2" />
                          <span className="placeholder col-8 mb-3" />
                          <span className="placeholder col-6" />
                        </div>
                      </div>
                    </div>
                  ))
                : latest.map((v) => (
                    <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                      <FeaturedVehicleCard vehicle={v} />
                    </div>
                  ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/catalogue" className="btn btn-primary btn-lg px-5 rounded-pill">
                Voir tout le catalogue <i className="bi bi-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Nous contacter */}
      <section className="container py-5">
        <div className="cta-banner p-4 p-md-5 text-center">
          <div className="position-relative" style={{ zIndex: 1 }}>
            <h2 className="display-6 fw-bold mb-2">Un véhicule vous intéresse ?</h2>
            <p className="lead mb-4 opacity-75">
              Contactez-nous, nous vous répondons rapidement.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href={telHref} className="btn btn-accent btn-lg px-4 rounded-pill">
                <i className="bi bi-telephone-fill me-2" />
                Appeler
              </a>

              <a
                href={whatsappHref(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg px-4 rounded-pill"
              >
                <i className="bi bi-whatsapp me-2" />
                WhatsApp
              </a>

              <Link to="/a-propos" className="btn btn-outline-light btn-lg px-4 rounded-pill">
                Plus d’infos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}