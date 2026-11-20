
import { Link } from 'react-router-dom'
import { SITE } from '../config/site'
import { telHref } from '../lib/contact'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="aat-footer">
      <div className="container">
        <div className="row g-5 footer-main">

          {/* Présentation */}
          <div className="col-lg-5 col-md-6">
            <Link to="/" className="footer-brand">
  <span className="footer-logo-container">
    <img src={logo} alt="Logo AAT" className="footer-logo" />
  </span>
</Link>

            <p className="footer-description">
              {SITE.tagline}
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Contactez-nous</h5>

            <ul className="footer-contact">
              <li>
                <span className="footer-icon">
                  <i className="bi bi-telephone" />
                </span>
                <a href={telHref}>{SITE.phoneDisplay}</a>
              </li>

              <li>
                <span className="footer-icon">
                  <i className="bi bi-envelope" />
                </span>
                <span>{SITE.email}</span>
              </li>

              <li>
                <span className="footer-icon">
                  <i className="bi bi-geo-alt" />
                </span>
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Liens utiles</h5>

            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/catalogue">Notre catalogue</Link></li>
              <li><Link to="/services">Nos services</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {SITE.name}.
            Tous droits réservés.
          </p>
          <p>Votre partenaire automobile de confiance.</p>
        </div>
      </div>
    </footer>
  )
}
