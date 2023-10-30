import Input from '@/components/Input'
import { InputProps } from '@/interfaces/form'

export default function ProfileInput({
	onChange,
	values,
	formErrors,
}: InputProps) {
	return (
		<>
			<Input
				type="text"
				onChange={onChange}
				value={values.name}
				name="name"
				placeholder="Como você se chama?"
				label="Nome completo"
			/>
			<Input
				type="text"
				onChange={onChange}
				value={values.cpf}
				name="cpf"
				placeholder="Digite seu CPF"
				label="CPF"
			/>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={onChange}
					value={values.birthday}
					name="birthday"
					placeholder="Quando você nasceu?"
					label="Data de nascimento"
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.gender}
					name="gender"
					placeholder="LEMBRA DE COLOCAR O SELECT"
					label="Gênero"
				/>
			</div>
		</>
	)
}
