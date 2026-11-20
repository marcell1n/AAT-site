import { SITE } from '../config/site'

export const telHref = `tel:${SITE.phoneTel}`

export const whatsappHref = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`