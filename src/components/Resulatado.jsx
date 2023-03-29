import useFormulario from "../hooks/useFormularioProvide"
import {MARCAS, PLANES} from "../data/select.js"
import {useRef, useMemo} from "react"
const Resulatdo = _ => {
	const {resulatado, dato} = useFormulario()
	const {marca, año, plan} = dato

	const yearRef = useRef(año)

	const [marcas] = useMemo(
		() => MARCAS.filter(m => m.id === Number(marca)),
		[resulatado],
	)

	const [planes] = useMemo(
		() => PLANES.filter(p => p.id === Number(plan)),
		[resulatado],
	)

	if (resulatado === 0) return null
	return (
		<div>
			<h2>resultado</h2>
			<div>
				<p>
					marca: <span>{marcas.nombre}</span>
				</p>
				<p>
					año del auto: <span>{yearRef.current}</span>
				</p>
				<p>
					plan: <span>{planes.nombre}</span>
				</p>
				<p>
					resulatdo: <span>{resulatado}</span>
				</p>
			</div>
		</div>
	)
}
export default Resulatdo
