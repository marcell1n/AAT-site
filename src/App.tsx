import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Catalogue from './pages/Catalogue'
import Home from './pages/Home'
import Services from './pages/Services'
import VehicleDetail from './pages/VehicleDetail'
import Login from './admin/Login'
import VehicleEdit from './admin/VehicleEdit'
import VehicleList from './admin/VehicleList'

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/:id" element={<VehicleDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/a-propos" element={<About />} />

        <Route path="/admin/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/vehicules" element={<VehicleList />} />
          <Route path="/admin/vehicules/nouveau" element={<VehicleEdit />} />
          <Route path="/admin/vehicules/:id" element={<VehicleEdit />} />
        </Route>

        <Route path="*" element={<p className="container py-5">Page introuvable.</p>} />
      </Route>
    </Routes>
  )
}