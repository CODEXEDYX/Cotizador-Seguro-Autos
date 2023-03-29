const useLabel = textoLabel => {
	const Label = _ => (
		<div className="formulario_grupo">
			<label>{textoLabel}</label>
		</div>
	)
	return [Label]
}
export default useLabel
