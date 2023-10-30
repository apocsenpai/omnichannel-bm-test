import Input from '@/components/Input'
import { FormInputData } from '@/interfaces/form';
import { ChangeEventHandler } from 'react';

interface UserInputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
	values: FormInputData;
}

export default function UserInput({
	onChange,
	values,
}: UserInputProps) {
	return (
		<>
			<Input
				type="text"
				onChange={onChange}
				value={values.username}
				name="username"
				placeholder="Digite seu apelido :P"
				label="Nome de usuário"
			/>
			<Input
				type="text"
				onChange={onChange}
				value={values.email}
				name="email"
				placeholder="Digite seu email"
				label="Email"
			/>
			<Input
				type="password"
				onChange={onChange}
				value={values.password}
				name="password"
				placeholder="Digite sua senha"
				label="Senha"
			/>
			<Input
				type="password"
				onChange={onChange}
				value={values.confirmedPassword}
				name="confirmedPassword"
				placeholder="Confirme sua senha"
				label="Confirmação de senha"
			/>
		</>
	)
}
