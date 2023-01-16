// Librerías
import { Formik, Form, ErrorMessage } from 'formik';

// Componentes
import TextInput from './components/TextInput.js';
import Select from './components/Select.js';
import Checkbox from './components/Checkbox.js';
import Radio from './components/Radio.js';

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

	if (!values.myRadio) {
		errors.myRadio = 'Requerido';
	}

	return errors;
};

// Aplicación
function App() {
	return (
		<Formik
			initialValues={{
				name: '',
				lastName: '',
				email: '',
				mySelect: 'happy',
				myRadio: '2'
			}}
			validate={validate}
			onSubmit={(values) => console.log(values)}
		>
			<Form>
				<TextInput
					name="name"
					label="Nombre"
				/>
				<br />

				<TextInput
					name="lastName"
					label="Apellido"
				/>
				<br />

				<TextInput
					name="email"
					label="Email"
				/>
				<br />

				<Select
					name="mySelect"
					label="Tipo de cerdo"
				>
					<option value="happy">Feliz</option>
					<option value="sad">Triste</option>
					<option value="funny">Divertido</option>
				</Select>
				<br />

				<Checkbox name="myCheckbox">Aceptar terminos y condiciones</Checkbox>
				<br />

				<Radio
					name="myRadio"
					value="1"
					label="1"
				/>
				<Radio
					name="myRadio"
					value="2"
					label="2"
				/>
				<Radio
					name="myRadio"
					value="3"
					label="3"
				/>
				<ErrorMessage name="myRadio" />
				<br />

				<button type="submit">Enviar</button>
			</Form>
		</Formik>
	);
}

export default App;
