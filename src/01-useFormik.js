/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como utilizar el Hook de la
 * 		   librería Formik.
 *
 *
 * IMPORTANTE:
 *  			  - <useFormik> = Me permite aplicar Formik a formularios
 * 								  existentes, evitando una gran refactorización.
-------------------------------------------------------------------------- */

// Librerías
import { useFormik } from 'formik';

// Validaciones
const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Requerido';
	} else if (values.name.length < 5) {
		errors.name = 'El nombre es muy corto';
	}

	if (!values.lastName) {
		errors.lastName = 'Requerido';
	} else if (values.lastName.length < 5) {
		errors.lastName = 'El apellido es muy corto';
	}

	if (!values.email) {
		errors.email = 'Requerido';
	} else if (values.email.length < 5) {
		errors.email = 'El email es muy corto';
	}

	return errors;
};

// Aplicación
function App() {
	const formik = useFormik({
		// Valores iniciales de los campos
		initialValues: {
			name: '',
			lastName: '',
			email: ''
		},

		// Función de validación
		validate,

		// Función de envío
		onSubmit: (values) => console.log(values)
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label>Nombre</label>
			<input
				type="text"
				{...formik.getFieldProps('name')}
			/>
			{formik.touched.name && formik.errors.name ? (
				<div>{formik.errors.name}</div>
			) : null}
			<br />

			<label>Apellido</label>
			<input
				type="text"
				{...formik.getFieldProps('lastName')}
			/>
			{formik.touched.lastName && formik.errors.lastName ? (
				<div>{formik.errors.lastName}</div>
			) : null}
			<br />

			<label>Email</label>
			<input
				type="email"
				{...formik.getFieldProps('email')}
			/>
			{formik.touched.email && formik.errors.email ? (
				<div>{formik.errors.email}</div>
			) : null}
			<br />

			<button type="submit">Enviar</button>
		</form>
	);
}

export default App;
