
import { SITE } from '../config/site'
import { telHref, whatsappHref } from '../lib/contact'
import './About.css'

const VALUES = [
  {
    icon: 'bi-shield-check',
    title: 'Confiance',
    text: 'Des informations claires et transparentes pour vous aider à acheter en toute sérénité.',
  },
  {
    icon: 'bi-star-fill',
    title: 'Qualité',
    text: 'Une attention particulière portée à la sélection et aux caractéristiques de nos véhicules.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Proximité',
    text: 'Une équipe disponible et à votre écoute pour vous accompagner à chaque étape.',
  },
]

const BENEFITS = [
  {
    icon: 'bi-car-front-fill',
    title: 'Un choix de véhicules',
    text: 'Découvrez différents modèles et trouvez celui qui correspond à vos besoins.',
  },
  {
    icon: 'bi-headset',
    title: 'Un accompagnement personnalisé',
    text: 'Nous prenons le temps de comprendre votre projet et de vous orienter.',
  },
  {
    icon: 'bi-search',
    title: 'Une recherche sur mesure',
    text: 'Nous pouvons vous accompagner dans la recherche du véhicule que vous souhaitez.',
  },
  {
    icon: 'bi-chat-square-text',
    title: 'Une équipe à votre écoute',
    text: 'Nous restons disponibles pour répondre à vos questions et vous conseiller.',
  },
]

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="container">
            <div className="about-hero-content">
              <span className="about-eyebrow">
                <span /> QUI SOMMES-NOUS ?
              </span>

              <h1>
                Bienvenue chez <span>Mobility</span>
              </h1>

              <p>
                Votre partenaire automobile pour trouver le véhicule
                qui correspond à vos envies, à vos besoins et à votre budget.
              </p>

              <a href="#about-presentation" className="about-hero-btn">
                Découvrir Mobility
                <i className="bi bi-arrow-down-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="about-intro section-padding" id="about-presentation">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="about-intro-image">
                <img
                  src="/images/about-showroom.jpg"
                  alt="Présentation de l'activité automobile AAT"
                  loading="lazy"
                />

                <div className="about-image-label">
                  <i className="bi bi-car-front-fill" />
                  <div>
                    <strong>Votre projet automobile</strong>
                    <span>Notre priorité</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-section-heading">
                <span className="about-section-tag">À PROPOS DE NOUS</span>
                <h2>
                  Bien plus qu'une vente,
                  <span> un accompagnement.</span>
                </h2>
              </div>

              <p className="about-description">
                Mobility est une entreprise spécialisée dans la vente de véhicules.
                Notre objectif est de vous aider à trouver le véhicule qui
                répond réellement à vos attentes.
              </p>

              <p className="about-description">
                Que vous recherchiez un véhicule pour vos déplacements
                quotidiens, votre famille ou votre activité professionnelle,
                nous mettons notre disponibilité et notre sens du conseil
                à votre service.
              </p>

              <p className="about-description">
                De la découverte des modèles à votre décision d'achat,
                nous souhaitons vous proposer une expérience simple,
                transparente et adaptée à votre projet.
              </p>

              <div className="about-intro-highlight">
                <i className="bi bi-check-circle-fill" />
                <span>Votre satisfaction au cœur de notre engagement.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values section-padding">
        <div className="container">

          <div className="about-centered-heading">
            <span className="about-section-tag">CE QUI NOUS GUIDE</span>
            <h2>Les valeurs qui nous définissent</h2>
            <p>
              Chaque projet automobile mérite une attention particulière.
              Voici les principes qui guident notre approche.
            </p>
          </div>

          <div className="row g-4 mt-3">
            {VALUES.map((value, index) => (
              <div className="col-md-4" key={value.title}>
                <article className="about-value-card">
                  <div className="about-card-number">
                    0{index + 1}
                  </div>

                  <div className="about-value-icon">
                    <i className={`bi ${value.icon}`} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.text}</p>

                  <div className="about-card-line" />
                </article>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY AAT */}
      <section className="about-benefits section-padding">
        <div className="container">

          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about-section-heading">
                <span className="about-section-tag">POURQUOI Mobility ?</span>
                <h2>
                  Votre satisfaction,
                  <span> notre priorité.</span>
                </h2>
              </div>

              <p className="about-description">
                Choisir un véhicule est une décision importante.
                C'est pourquoi nous accordons une importance particulière
                à l'écoute, au conseil et à l'accompagnement de nos clients.
              </p>

              <a href="#about-contact" className="about-text-link">
                Parlons de votre projet
                <i className="bi bi-arrow-right" />
              </a>
            </div>

            <div className="col-lg-7">
              <div className="row g-3">
                {BENEFITS.map((benefit) => (
                  <div className="col-md-6" key={benefit.title}>
                    <article className="about-benefit-card">
                      <div className="about-benefit-icon">
                        <i className={`bi ${benefit.icon}`} />
                      </div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="about-commitment">
        <div className="container">
          <div className="about-commitment-content">
            <span>NOTRE ENGAGEMENT</span>
            <h2>Votre prochain véhicule commence ici.</h2>
            <p>
              Faites-nous part de votre projet. Notre équipe est disponible
              pour vous renseigner et vous accompagner.
            </p>
            <a href="#about-contact" className="about-commitment-btn">
              Contactez-nous
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="about-contact section-padding" id="about-contact">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <div className="about-section-heading">
                <span className="about-section-tag">RESTONS EN CONTACT</span>
                <h2>
                  Parlons de votre
                  <span> projet automobile.</span>
                </h2>
              </div>

              <p className="about-description">
                Une question, une recherche particulière ou besoin d'un
                renseignement ? Contactez notre équipe.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="about-contact-card">
                <h3>Nos coordonnées</h3>
                <p className="about-contact-subtitle">
                  Nous sommes à votre disposition.
                </p>

                <div className="about-contact-item">
                  <div className="about-contact-icon">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <span>Adresse</span>
                    <strong>{SITE.address}</strong>
                  </div>
                </div>

                <div className="about-contact-item">
                  <div className="about-contact-icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div>
                    <span>Téléphone</span>
                    <strong>{SITE.phoneDisplay}</strong>
                  </div>
                </div>

                <div className="about-contact-item">
                  <div className="about-contact-icon">
                    <i className="bi bi-envelope-fill" />
                  </div>
                  <div>
                    <span>Email</span>
                    <strong>{SITE.email}</strong>
                  </div>
                </div>

                <div className="about-contact-item">
                  <div className="about-contact-icon">
                    <i className="bi bi-clock-fill" />
                  </div>
                  <div>
                    <span>Horaires</span>
                    <strong>{SITE.hours}</strong>
                  </div>
                </div>

                <div className="about-contact-actions">
                  <a href={telHref} className="about-call-btn">
                    <i className="bi bi-telephone-fill" />
                    Appeler
                  </a>

                  <a
                    href={whatsappHref(
                      `Bonjour ${SITE.name}, j'aimerais avoir des informations.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-whatsapp-btn"
                  >
                    <i className="bi bi-whatsapp" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
