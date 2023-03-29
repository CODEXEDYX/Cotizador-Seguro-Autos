import useLabel from "../hooks/useLabel"
import {MARCAS, YEARS, PLANES} from "../data/select"
import {Fragment} from "react"
import useFormulario from "../hooks/useFormularioProvide"
const Formulario = _ => {
	const [LabelMarca] = useLabel("marca")
	const [LabelAño] = useLabel("año")
	const {handleDato, dato, setError, contCliente} = useFormulario()

	const handleSubmit = e => {
		e.preventDefault()
		if (Object.values(dato).includes("")) {
			setError("Rellena el campo")
			setTimeout(() => {
				useError("")
			}, 1400)
			return
		}
		setError("")
		contCliente()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="formulario_grupo">
				<LabelMarca />
				<select name="marca" value={dato.marca} onChange={e => handleDato(e)}>
					<option value="">-- Selecciona Marca --</option>
					{MARCAS.map(marca => (
						<option value={marca.id} key={marca.id}>
							{marca.nombre}
						</option>
					))}
				</select>
			</div>

			<div className="formulario_grupo">
				<LabelAño />
				<select name="año" value={dato.año} onChange={e => handleDato(e)}>
					<option value="">-- Selecciona Año --</option>
					{YEARS.map(año => (
						<option value={año} key={año}>
							{año}
						</option>
					))}
				</select>
			</div>

			<div className="formulario_grupo">
				{PLANES.map(plan => (
					<Fragment key={plan.id}>
						<label>{plan.nombre}</label>
						<input type="radio" name="plan" value={plan.id} onChange={e => handleDato(e)} />
					</Fragment>
				))}
			</div>

			<input type="submit" value="cotizar" />
		</form>
	)
}
export default Formulario
