import Input from '@/components/Input'
import { InputProps } from '@/interfaces/form'

export default function AddressInput({
	onChange,
	values,
	formErrors,
}: InputProps) {
	return (
		<>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="zipCode"
					placeholder="Digite seu CEP"
					label="CEP"
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="city"
					placeholder="Cidade"
					label="Cidade"
					readOnly
				/>
			</div>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="state"
					placeholder="Estado"
					label="Estado"
					readOnly
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="neighborhood"
					placeholder="Bairro"
					label="Bairro"
					readOnly
				/>
			</div>
			<Input
				type="text"
				onChange={onChange}
				value={values.username}
				name="street"
				placeholder="Rua"
				label="Rua"
				readOnly
			/>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="number"
					placeholder="Digite o número da casa"
					label="Número"
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.username}
					name="complement"
					placeholder="Digite o complemento"
					label="Complemento"
				/>
			</div>
		</>
	)
}
