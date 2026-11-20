import { SITE } from '../config/site'
import { telHref, whatsappHref } from '../lib/contact'
import type { Vehicle } from '../types/vehicle'

interface Props {
  vehicle: Vehicle
  size?: 'sm' | 'lg'
}

export default function ContactButtons({ vehicle, size }: Props) {
  const name = [vehicle.brand, vehicle.model, vehicle.version, vehicle.year]
    .filter(Boolean)
    .join(' ')
  const message =
    `Bonjour ${SITE.name}, je suis intéressé(e) par ce véhicule : ${name}.\n` +
    `${window.location.origin}/catalogue/${vehicle.id}`
  const sizeClass = size ? `btn-${size}` : ''

  return (
    <div className="d-flex gap-2">
      <a href={telHref} className={`btn btn-outline-primary flex-fill ${sizeClass}`}>
        <i className="bi bi-telephone-fill me-1" /> Appeler
      </a>
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-success flex-fill ${sizeClass}`}
      >
        <i className="bi bi-whatsapp me-1" /> WhatsApp
      </a>
    </div>
  )
}