import Error from "./components/error/Error.jsx"
import Formulario from "./components/Formulario"
import useFormulario from "./hooks/useFormularioProvide"
import spinner from "../public/spinner.svg"
import Resulatdo from "./components/Resulatado.jsx"

const App = _ => {
	const {error, cargando} = useFormulario()
	return (
		<>
			<header>
				<h1>cotizador de seguros de auto </h1>
			</header>
			<main>
				<div className="contenedor">
					<div className="caja_padre">
						<Formulario />
						<div className="caja_resulatado">
							{cargando ? (
								<img src={spinner} alt="spinner mola" width={100} height={100} />
							) : (
								<Resulatdo />
							)}
						</div>
					</div>
				</div>
				{error && <Error />}
			</main>
		</>
	)
}
export default App
