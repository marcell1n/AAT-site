
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { SITE } from '../config/site'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { session, signOut } = useAuth()
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false)

  const close = () => setExpanded(false)

  const handleSignOut = async () => {
    await signOut()
    close()
    navigate('/')
  }

  return (
    <BsNavbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="aat-navbar sticky-top"
    >
      <Container fluid="lg">

        {/* LOGO */}
        <BsNavbar.Brand
          as={Link}
          to="/"
          onClick={close}
          className="aat-brand"
        >
          <img
            src={logo}
            alt={SITE.name}
            className="aat-logo"
          />
        </BsNavbar.Brand>

        {/* BOUTON MOBILE */}
        <BsNavbar.Toggle
          aria-controls="aat-navigation"
          className="aat-toggle"
        />

        {/* NAVIGATION */}
        <BsNavbar.Collapse id="aat-navigation">

          <Nav className="aat-nav mx-auto align-items-lg-center">

            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={close}
              className="aat-nav-link"
            >
              Accueil
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/catalogue"
              onClick={close}
              className="aat-nav-link"
            >
              Catalogue
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
              onClick={close}
              className="aat-nav-link"
            >
              Nos services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/a-propos"
              onClick={close}
              className="aat-nav-link"
            >
              À propos
            </Nav.Link>

            {session && (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/admin/vehicules"
                  onClick={close}
                  className="aat-nav-link"
                >
                  Administration
                </Nav.Link>

                <button
                  className="aat-logout"
                  onClick={handleSignOut}
                >
                  Déconnexion
                </button>
              </>
            )}

          </Nav>
        </BsNavbar.Collapse>

      </Container>
    </BsNavbar>
  )
}
