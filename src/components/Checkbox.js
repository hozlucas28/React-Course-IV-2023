/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Ejemplo de un <input> personalizado de tipo <checkbox> utilizando
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

const Checkbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });

	console.log(field);

	return (
		<div>
			<label>
				<input
					type="checkbox"
					{...field}
					{...props}
				/>
				{children}
			</label>
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</div>
	);
};

export default Checkbox;
