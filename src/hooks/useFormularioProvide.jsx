import {useContext} from "react"
import ContextFormulario from "../context/FormularioProvide"

const useFormulario = _ => {
	return useContext(ContextFormulario)
}
export default useFormulario
