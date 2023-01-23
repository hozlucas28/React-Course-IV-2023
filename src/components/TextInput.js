/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Ejemplo de un <input> personalizado de tipo <text> utilizando
 * 		   la librería Formik.
 *
 *
 * IMPORTANTE:
 *  			  - <useField> = Se utiliza para crear un <input>
 * 								 personalizado utilizando la librería Formik.
 * 								 El mismo debe recibir las <props> y el tipo
 * 								 de <input> personalizado.
-------------------------------------------------------------------------- */

import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	console.log({ field, meta });

	return (
		<div>
			<label className="label">{label}</label>
			<input
				className="input"
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className="Error">{meta.error}</div>
			) : null}
		</div>
	);
};

export default TextInput;
