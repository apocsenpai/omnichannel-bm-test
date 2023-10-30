import Input from "@/components/Input";

export default function ProfileInput() {
	return (
		<>
			<Input
				type="text"
				placeholder="Digite seu apelido :P"
				label="Nome de usuário"
			/>
			<Input type="text" placeholder="Digite seu email" label="Email" />
		</>
	)
}
