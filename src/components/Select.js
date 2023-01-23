/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Ejemplo de un <select> personalizado de tipo utilizando la
 * 		   librería Formik.
 *
 *
 * IMPORTANTE:
 *  			  - <useField> = Se utiliza para crear un <input>
 * 								 personalizado utilizando la librería Formik.
 * 								 El mismo debe recibir las <props> y el tipo
 * 								 de <input> personalizado.
-------------------------------------------------------------------------- */

import { useField } from 'formik';

const Select = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	console.log(field);

	return (
		<div>
			<label>{label}</label>
			<select
				{...field}
				{...props}
			></select>
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</div>
	);
};

export default Select;
