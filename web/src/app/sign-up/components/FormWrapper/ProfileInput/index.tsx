import Input from '@/components/Input'
import { FormInputData } from '@/interfaces/form'
import { ChangeEventHandler } from 'react'

interface ProfileInputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
	values: FormInputData;
}

export default function ProfileInput({ onChange, values }: ProfileInputProps) {
	return (
		<>
			<Input
				type="text"
				onChange={onChange}
				value={values.username}
				name="name"
				placeholder="Como você se chama?"
				label="Nome completo"
			/>
			<Input
				type="text"
				onChange={onChange}
				value={values.username}
				name="cpf"
				placeholder="Digite seu CPF"
				label="CPF"
			/>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="birthday"
					placeholder="Quando você nasceu?"
					label="Data de nascimento"
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="gender"
					placeholder="LEMBRA DE COLOCAR O SELECT"
					label="Gênero"
				/>
			</div>
		</>
	)
}
