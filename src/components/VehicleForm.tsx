
import { useEffect, useMemo, useState, type FormEvent } from 'react'
import {
  FUEL_OPTIONS,
  TRANSMISSION_OPTIONS,
  type Fuel,
  type Transmission,
  type Vehicle,
  type VehicleInput,
} from '../types/vehicle'

import './VehicleForm.css'

interface Props {
  initial?: Vehicle
  submitting: boolean
  onSubmit: (values: VehicleInput, file: File | null) => void | Promise<void>
}

export default function VehicleForm({ initial, submitting, onSubmit }: Props) {
  const [brand, setBrand] = useState(initial?.brand ?? '')
  const [model, setModel] = useState(initial?.model ?? '')
  const [version, setVersion] = useState(initial?.version ?? '')
  const [year, setYear] = useState(String(initial?.year ?? new Date().getFullYear()))
  const [priceMin, setPriceMin] = useState(initial ? String(initial.price_min) : '')
  const [priceMax, setPriceMax] = useState(initial ? String(initial.price_max) : '')
  const [fuel, setFuel] = useState<Fuel>(initial?.fuel ?? 'essence')
  const [transmission, setTransmission] = useState<Transmission | ''>(initial?.transmission ?? '')
  const [mileage, setMileage] = useState(initial?.mileage_km != null ? String(initial.mileage_km) : '')
  const [color, setColor] = useState(initial?.color ?? '')
  const [seats, setSeats] = useState(initial?.seats != null ? String(initial.seats) : '')
  const [engine, setEngine] = useState(initial?.engine ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const newPreview = useMemo(() => (file ? URL.createObjectURL(file) : null), [file])

  useEffect(() => {
    return () => {
      if (newPreview) URL.revokeObjectURL(newPreview)
    }
  }, [newPreview])

  const preview = newPreview ?? initial?.image_url ?? null

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const y = Number(year)
    const min = Number(priceMin)
    const max = Number(priceMax)
    const km = mileage.trim() === '' ? null : Number(mileage)
    const st = seats.trim() === '' ? null : Number(seats)

    if (!brand.trim() || !model.trim())
      return setError('La marque et le modèle sont obligatoires.')

    if (!Number.isInteger(y) || y < 1990 || y > 2100)
      return setError('Année invalide.')

    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0)
      return setError('Les prix doivent être des nombres entiers positifs.')

    if (max < min)
      return setError('Le prix maximum doit être supérieur ou égal au prix minimum.')

    if (km !== null && (!Number.isInteger(km) || km < 0))
      return setError('Kilométrage invalide.')

    if (st !== null && (!Number.isInteger(st) || st < 1 || st > 20))
      return setError('Nombre de places invalide (entre 1 et 20).')

    if (file && !file.type.startsWith('image/'))
      return setError('Le fichier doit être une image.')

    if (file && file.size > 5 * 1024 * 1024)
      return setError('Image trop lourde (5 Mo maximum).')

    setError(null)

    onSubmit(
      {
        brand: brand.trim(),
        model: model.trim(),
        version: version.trim() || null,
        year: y,
        price_min: min,
        price_max: max,
        fuel,
        image_url: initial?.image_url ?? null,
        transmission: transmission || null,
        mileage_km: km,
        color: color.trim() || null,
        seats: st,
        engine: engine.trim() || null,
        description: description.trim() || null,
      },
      file,
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="vehicle-form">

      {error && (
        <div className="alert alert-danger vehicle-form-error">
          <i className="bi bi-exclamation-circle-fill me-2" />
          {error}
        </div>
      )}

      <div className="row g-4">

        <div className="col-md-6">
          <label className="form-label">Marque *</label>
          <input
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Ex. Toyota"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Modèle *</label>
          <input
            className="form-control"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Ex. Land Cruiser"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Version</label>
          <input
            className="form-control"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            placeholder="Ex. Premium, Luxury..."
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Année *</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Carburant *</label>
          <select
            className="form-select"
            value={fuel}
            onChange={(e) => setFuel(e.target.value as Fuel)}
          >
            {FUEL_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Prix minimum (FCFA) *</label>
          <input
            type="number"
            min={0}
            className="form-control"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            placeholder="Ex. 5000000"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prix maximum (FCFA) *</label>
          <input
            type="number"
            min={0}
            className="form-control"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            placeholder="Ex. 10000000"
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Transmission</label>
          <select
            className="form-select"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value as Transmission | '')}
          >
            <option value="">Non précisée</option>
            {TRANSMISSION_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Kilométrage (km)</label>
          <input
            type="number"
            min={0}
            className="form-control"
            placeholder="0 pour un véhicule neuf"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Couleur</label>
          <input
            className="form-control"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Ex. Noir"
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Nombre de places</label>
          <input
            type="number"
            min={1}
            max={20}
            className="form-control"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            placeholder="Ex. 5"
          />
        </div>

        <div className="col-md-8">
          <label className="form-label">Moteur</label>
          <input
            className="form-control"
            placeholder="Ex. 2.0 L turbo, 190 ch"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Décrivez les caractéristiques du véhicule..."
          />
        </div>

        <div className="col-12">
          <label className="form-label">Image</label>

          <div className="vehicle-image-upload">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />

            {preview && (
              <div className="vehicle-image-preview">
                <img src={preview} alt="Aperçu" />
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="vehicle-form-actions">
        <button
          type="submit"
          className="btn vehicle-submit-btn"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" />
              Enregistrement…
            </>
          ) : (
            <>
              <i className="bi bi-check-circle me-2" />
              {initial ? 'Enregistrer les modifications' : 'Ajouter le véhicule'}
            </>
          )}
        </button>
      </div>

    </form>
  )
}
