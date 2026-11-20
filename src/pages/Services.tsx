
import { Link } from 'react-router-dom'
import './Services.css'

const SERVICES = [
  {
    number: '01',
    icon: 'bi-car-front-fill',
    title: 'Vente de véhicules',
    text: 'Découvrez une sélection de véhicules adaptés à différents besoins et budgets. Consultez les modèles disponibles, leurs caractéristiques et leurs prix pour faire un choix éclairé.',
    points: ['Catalogue de véhicules', 'Caractéristiques détaillées', 'Informations sur les prix'],
  },
  {
    number: '02',
    icon: 'bi-search',
    title: 'Recherche sur demande',
    text: 'Vous recherchez un modèle particulier ? Faites-nous part de votre besoin. Nous vous accompagnons dans la recherche du véhicule correspondant à vos critères.',
    points: ['Recherche selon vos critères', 'Prise en compte de votre budget', 'Proposition de modèles adaptés'],
  },
  {
    number: '03',
    icon: 'bi-chat-dots-fill',
    title: 'Conseil personnalisé',
    text: 'Choisir un véhicule est une décision importante. Notre équipe vous aide à comparer les possibilités et à identifier le modèle qui répond le mieux à vos attentes.',
    points: ['Écoute de vos besoins', 'Conseils selon votre budget', 'Orientation dans votre choix'],
  },
  {
    number: '04',
    icon: 'bi-file-earmark-text-fill',
    title: 'Accompagnement administratif',
    text: 'Nous vous apportons un appui dans les démarches administratives liées à votre acquisition afin de vous aider à avancer plus sereinement.',
    points: ['Informations sur les formalités', 'Orientation dans les démarches', 'Accompagnement lié à votre achat'],
  },
  {
    number: '05',
    icon: 'bi-truck',
    title: 'Livraison de véhicules',
    text: 'Après votre acquisition, nous organisons avec vous les modalités de livraison de votre véhicule selon les conditions convenues.',
    points: ['Organisation de la livraison', 'Coordination avec le client', 'Informations sur la remise du véhicule'],
  },
  {
    number: '06',
    icon: 'bi-shield-check',
    title: 'Suivi après-vente',
    text: 'Notre accompagnement ne s’arrête pas à la remise des clés. Nous restons disponibles pour répondre à vos questions après votre achat.',
    points: ['Disponibilité de notre équipe', 'Réponses à vos questions', 'Accompagnement après acquisition'],
  },
]

const STEPS = [
  {
    number: '01',
    icon: 'bi-chat-square-text',
    title: 'Exprimez votre besoin',
    text: 'Indiquez-nous le type de véhicule recherché, vos préférences et votre budget.',
  },
  {
    number: '02',
    icon: 'bi-car-front',
    title: 'Découvrez les possibilités',
    text: 'Parcourez notre catalogue ou échangez avec notre équipe pour trouver le modèle adapté.',
  },
  {
    number: '03',
    icon: 'bi-clipboard-check',
    title: 'Préparez votre achat',
    text: 'Bénéficiez de nos conseils et de notre accompagnement dans les étapes de votre acquisition.',
  },
  {
    number: '04',
    icon: 'bi-key-fill',
    title: 'Recevez votre véhicule',
    text: 'Organisez la livraison avec notre équipe et profitez de votre nouveau véhicule.',
  },
]

export default function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay" />

        <div className="container services-hero-content">
          <div className="services-eyebrow">
            <span />
            NOS SERVICES
            <span />
          </div>

          <h1>
            Votre projet automobile,
            <strong> notre engagement.</strong>
          </h1>

          <div className="services-hero-line" />

          <p>
            De la recherche de votre véhicule jusqu'à sa livraison,
            AAT vous accompagne à chaque étape pour vous aider à
            concrétiser votre projet en toute sérénité.
          </p>

          <div className="services-hero-actions">
            <Link to="/catalogue" className="services-btn services-btn-orange">
              Découvrir nos véhicules
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>

        <div className="services-hero-bottom">
          <span>UN ACCOMPAGNEMENT À CHAQUE ÉTAPE</span>
          <i className="bi bi-chevron-down" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="services-intro section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="services-intro-visual">
                <img
  src="/images/services-showroom.jpg"
  alt="Showroom automobile"
  loading="lazy"
/>

                <div className="services-image-caption">
                  <i className="bi bi-car-front-fill" />
                  <div>
                    <strong>Votre satisfaction</strong>
                    <span>Au cœur de nos priorités</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="services-section-label">
                <span /> L'EXPÉRIENCE Mobility
              </div>

              <h2 className="services-section-heading">
                Un partenaire à vos côtés pour chaque décision.
              </h2>

              <p className="services-intro-text">
                Acheter un véhicule ne se résume pas à choisir un modèle.
                C'est un projet qui demande de bonnes informations,
                des conseils adaptés et un accompagnement sérieux.
              </p>

              <p className="services-intro-text">
                C'est pourquoi AAT met à votre disposition plusieurs
                services pour faciliter votre parcours automobile :
                de la première recherche jusqu'à l'après-vente.
              </p>

              <Link to="/a-propos" className="services-text-link">
                En savoir plus sur Mobility
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list-section section-padding">
        <div className="container">
          <div className="services-heading-block">
            <div className="services-section-label">
              <span /> CE QUE NOUS PROPOSONS
            </div>

            <h2 className="services-section-heading">
              Des services pensés pour <span>vous simplifier la vie.</span>
            </h2>

            <p>
              Découvrez comment notre équipe vous accompagne
              tout au long de votre parcours automobile.
            </p>
          </div>

          <div className="row g-4">
            {SERVICES.map((service) => (
              <div className="col-md-6 col-lg-4" key={service.number}>
                <article className="service-card">
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <div className="service-icon">
                      <i className={`bi ${service.icon}`} />
                    </div>
                  </div>

                  <h3>{service.title}</h3>
                  <p className="service-description">{service.text}</p>

                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}>
                        <i className="bi bi-check-circle-fill" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-bottom">
                    <span>ACCOMPAGNEMENT Mobility</span>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="services-process section-padding">
        <div className="container">
          <div className="services-heading-block">
            <div className="services-section-label services-label-light">
              <span /> NOTRE MÉTHODE
            </div>

            <h2 className="services-section-heading text-white">
              Votre parcours automobile <span>en 4 étapes.</span>
            </h2>

            <p className="services-process-intro">
              Un processus simple et un accompagnement à chaque moment
              important de votre projet.
            </p>
          </div>

          <div className="row g-4">
            {STEPS.map((step) => (
              <div className="col-md-6 col-lg-3" key={step.number}>
                <div className="process-card">
                  <div className="process-card-top">
                    <div className="process-icon">
                      <i className={`bi ${step.icon}`} />
                    </div>
                    <span>{step.number}</span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="services-commitment section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="services-section-label">
                <span /> POURQUOI Mobility ?
              </div>

              <h2 className="services-section-heading">
                Une expérience automobile basée sur la confiance.
              </h2>

              <p className="services-intro-text">
                Nous plaçons l'écoute, la disponibilité et
                l'accompagnement au centre de notre relation avec
                chaque client.
              </p>

              <Link to="/catalogue" className="services-btn services-btn-dark">
                Explorer le catalogue
                <i className="bi bi-arrow-right" />
              </Link>
            </div>

            <div className="col-lg-7">
              <div className="commitment-grid">
                <div className="commitment-item">
                  <i className="bi bi-person-check-fill" />
                  <h3>Écoute attentive</h3>
                  <p>Nous prenons le temps de comprendre vos attentes.</p>
                </div>

                <div className="commitment-item">
                  <i className="bi bi-lightbulb-fill" />
                  <h3>Conseils adaptés</h3>
                  <p>Des orientations selon votre projet et votre budget.</p>
                </div>

                <div className="commitment-item">
                  <i className="bi bi-chat-square-heart-fill" />
                  <h3>Proximité</h3>
                  <p>Une équipe disponible pour échanger avec vous.</p>
                </div>

                <div className="commitment-item">
                  <i className="bi bi-shield-check" />
                  <h3>Suivi client</h3>
                  <p>Un accompagnement qui continue après votre achat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta-content">
            <div className="services-section-label services-label-light">
              <span /> VOTRE PROCHAIN VÉHICULE VOUS ATTEND
            </div>

            <h2>
              Prêt à concrétiser
              <span> votre projet automobile ?</span>
            </h2>

            <p>
              Parcourez notre sélection de véhicules et trouvez
              celui qui correspond à vos envies et à votre budget.
            </p>

            <Link to="/catalogue" className="services-btn services-btn-orange">
              Voir notre catalogue
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
