import {createContext, useState} from "react"
import {
	optenerDiferenciaYear,
	calcularMarca,
	calcularPlan,
	formatearDinero,
} from "../helper/datos"

const ContextFormulario = createContext()

const FormularioProvide = ({children}) => {
	const [dato, setDato] = useState({
		marca: "",
		año: "",
		plan: "",
	})
	const [error, setError] = useState("")
	const [resulatado, setResulatado] = useState(0)
	const [cargando, setCargando] = useState(false)

	const handleDato = e => {
		setDato({
			...dato,
			[e.target.name]: e.target.value,
		})
	}

	const contCliente = _ => {
		let resulatado = 2000
		const diferncia = optenerDiferenciaYear(dato.año)
		console.log(diferncia)

		resulatado -= (diferncia * 4 * resulatado) / 100

		resulatado *= calcularMarca(dato.marca)

		resulatado *= calcularPlan(dato.plan)

		resulatado = formatearDinero(resulatado)

		setCargando(true)
		setTimeout(() => {
			setResulatado(resulatado)
			setCargando(false)
		}, 3000)
	}

	return (
		<ContextFormulario.Provider
			value={{handleDato, dato, error, setError, contCliente, resulatado, cargando}}
		>
			{children}
		</ContextFormulario.Provider>
	)
}
export {FormularioProvide}
export default ContextFormulario
