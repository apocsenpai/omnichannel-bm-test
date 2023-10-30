import Input from '@/components/Input'
import { InputProps } from '@/interfaces/form'

export default function UserInput({
	onChange,
	values,
	formErrors,
}: InputProps) {
	return (
		<>
			<Input
				type="text"
				onChange={onChange}
				value={values.username}
				error={formErrors?.username}
				name="username"
				placeholder="Digite seu apelido :P"
				label="Nome de usuário"
			/>
			<Input
				type="text"
				onChange={onChange}
				value={values.email}
				error={formErrors?.email}
				name="email"
				placeholder="Digite seu email"
				label="Email"
			/>
			<Input
				type="password"
				onChange={onChange}
				value={values.password}
				error={formErrors?.password}
				name="password"
				placeholder="Digite sua senha"
				label="Senha"
			/>
			<Input
				type="password"
				onChange={onChange}
				value={values.confirmedPassword}
				error={formErrors?.confirmedPassword}
				name="confirmedPassword"
				placeholder="Confirme sua senha"
				label="Confirmação de senha"
			/>
		</>
	)
}
