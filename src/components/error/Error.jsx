import useFormulario from "../../hooks/useFormularioProvide"
const Error = _ => {
	const {error} = useFormulario()
	return (
		<div className="caja_error" role="alert">
			{error}
		</div>
	)
}
export default Error
