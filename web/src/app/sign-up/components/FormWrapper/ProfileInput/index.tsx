import Input from '@/components/Input'
import Select from '@/components/Select'
import { InputProps } from '@/interfaces/form'

export default function ProfileInput({
	onChange,
	selectChange,
	values,
	formErrors,
}: InputProps) {
	return (
		<>
			<Input
				type="text"
				onChange={onChange}
				value={values.name}
				error={formErrors?.name}
				name="name"
				placeholder="Como você se chama?"
				label="Nome completo"
			/>
			<Input
				type="text"
				onChange={onChange}
				value={values.cpf}
				error={formErrors?.cpf}
				name="cpf"
				placeholder="Digite seu CPF"
				label="CPF"
			/>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={onChange}
					value={values.birthday}
					error={formErrors?.birthday}
					name="birthday"
					placeholder="DD/MM/AAAA"
					label="Data de nascimento"
				/>
				<Select
					onChange={selectChange}
					value={values.gender}
					error={formErrors?.gender}
					name="gender"
					label="Gênero"
				/>
			</div>
			<Input
				type="text"
				onChange={onChange}
				value={values.phone}
				error={formErrors?.phone}
				name="phone"
				placeholder="(99) 99999-9999"
				label="Celular"
			/>
		</>
	)
}
