interface ErrosMessages {
	[type: string]: { [category: string]: string };
}

export const ERROR_MESSAGES: ErrosMessages = {
	general:{
		empty: '* Campo obrigatório',
	},
	username: {
		invalidInput: 'O Nome de usuário deve conter apenas letras ou números.'
	},
	email: {
		invalidInput: 'O email deve ser válido. Ex.: example@example.com'
	},
	password: {
		invalidInput: 'A senha não obedece os parâmetros.'
	},
	confirmedPassword: {
		notEqual: 'As senhas divergem.',
	},
	name: {
		invalidInput: 'O nome deve conter apenas letras.'
	},
	cpf: {
		invalidInput: 'Por favor, digite um CPF válido.'
	},
	birthday: {
		invalidInput: 'Digite uma data válida',
		notAllowedAge: 'Você deve ser maior de idade para acessar!'
	},
	gender: {
		invalidInput: 'Selecione o gênero'
	},
	phone: {
		invalidInput: 'Digite um telefone válido'
	},
	zipCode: {
		invalidInput: 'CEP inválido.',
		notAllowedState: 'Apenas CEPs do Amazonas são válidos.',
		notExist: 'CEP inexistente.'
	},
	number: {
		invalidInput: 'Digite somente números.'
	},
}
