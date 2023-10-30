import Input from '@/components/Input'
import { InputProps } from '@/interfaces/form'

export default function AddressInput({
	onChange,
	cepOnChange,
	values,
	formErrors,
}: InputProps) {
	return (
		<>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={cepOnChange}
					value={values.address.zipCode}
					error={formErrors?.zipCode}
					name="zipCode"
					placeholder="Digite seu CEP"
					label="CEP"
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.address.city}
					error={formErrors?.city}
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
					value={values.address.state}
					error={formErrors?.state}
					name="state"
					placeholder="Estado"
					label="Estado"
					readOnly
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.address.neighborhood}
					error={formErrors?.neighborhood}
					name="neighborhood"
					placeholder="Bairro"
					label="Bairro"
					readOnly
				/>
			</div>
			<Input
				type="text"
				onChange={onChange}
				value={values.address.street}
				error={formErrors?.street}
				name="street"
				placeholder="Rua"
				label="Rua"
				readOnly
			/>
			<div className="grid sm:grid-cols-2 gap-2">
				<Input
					type="text"
					onChange={onChange}
					value={values.address.number}
					error={formErrors?.number}
					name="number"
					placeholder="Número"
					label="Número"
				/>
				<Input
					type="text"
					onChange={onChange}
					value={values.address.complement}
					error={formErrors?.complement}
					name="complement"
					placeholder="Complemento"
					label="Complemento"
				/>
			</div>
		</>
	)
}
