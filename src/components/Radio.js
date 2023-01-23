/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Ejemplo de un <input> personalizado de tipo <radio> utilizando
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

const Radio = ({ label, ...props }) => {
	const [field] = useField({ ...props, type: 'radio' });

	return (
		<div>
			<label>
				<input
					type="radio"
					{...field}
					{...props}
				/>
				{label}
			</label>
		</div>
	);
};

export default Radio;
