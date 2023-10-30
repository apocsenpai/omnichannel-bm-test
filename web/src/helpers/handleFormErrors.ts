import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { ERROR_MESSAGES } from '@/utils/constants/errorsMessages'
import {
	alphaNumMatch,
	cepMatch,
	dateMatch,
	emailMatch,
	nameMatch,
	numericMatch,
	passwordMatch,
} from '@/utils/regex'
import isValidCpf from '@/utils/validators/validateCpf'
import { getCep } from '@/services/cepApi'
import { ViaCep } from '@/interfaces/viaCep'

dayjs.extend(customParseFormat)

interface ErrorsValidator {
	[key: string]: (...args: string[]) => string;
}

interface FormErros {
	[key: string]: string;
}

const errorsValidator: ErrorsValidator = {
	username: (value: string) => validateUsername(value),
	email: (value: string) => validateEmail(value),
	password: (password: string) => validatePassword(password),
	confirmedPassword: (password: string, confirmedPassword: string) =>
		validateConfirmedPassword(password, confirmedPassword),
	name: (value: string) => validateName(value),
	cpf: (value: string) => validateCpf(value),
	birthday: (value: string) => validateBirthday(value),
	gender: (value: string) => validateGender(value),
	number: (value: string) => validateNumber(value),
}

export const handleFormErrors = (formData: FormErros) => {
	const errors: FormErros = {}

	const formKeyList = Object.keys(formData)

	formKeyList.forEach((key) => {
		const keyValue: string = formData[key]

		if (!keyValue) {
			errors[key] = ERROR_MESSAGES.general.empty
			return
		}

		const messagesError =
			key === 'confirmedPassword'
				? errorsValidator.confirmedPassword(
						formData['password'],
						formData['confirmedPassword'],
				  )
				: errorsValidator[key](keyValue)

		if (messagesError) errors[key] = messagesError
	})

	return Object.keys(errors).length ? errors : null
}

function validateUsername(username: string) {
	return !alphaNumMatch.test(username)
		? ERROR_MESSAGES.username.invalidInput
		: ''
}

function validateEmail(email: string) {
	return !emailMatch.test(email) ? ERROR_MESSAGES.email.invalidInput : ''
}

function validatePassword(password: string) {
	return !passwordMatch.test(password)
		? ERROR_MESSAGES.password.invalidInput
		: ''
}

function validateConfirmedPassword(
	password: string,
	confirmedPassword: string,
) {
	return password !== confirmedPassword
		? ERROR_MESSAGES.confirmedPassword.notEqual
		: ''
}

function validateName(name: string) {
	return !nameMatch.test(name) ? ERROR_MESSAGES.name.invalidInput : ''
}

function validateCpf(cpf: string) {
	return !isValidCpf(cpf) ? ERROR_MESSAGES.cpf.invalidInput : ''
}

function validateBirthday(birthday: string) {
	return !(
		dateMatch.test(birthday) && dayjs(birthday, 'DD/MM/YYYY', true).isValid()
	)
		? ERROR_MESSAGES.birthday.invalidInput
		: ''
}

function validateGender(gender: string) {
	return ''
}

async function validateZipCode(zipCode: string) {
	if (!cepMatch.test(zipCode)) return ERROR_MESSAGES.zipCode.invalidInput

	try {
		const viaCepResponse: ViaCep = await getCep(zipCode.replace('-', ''))

		if (viaCepResponse.erro) throw new Error(ERROR_MESSAGES.zipCode.notExist)

		return ''
	} catch (error: any) {
		return error.message
	}
}

function validateNumber(number: string) {
	return !numericMatch.test(number) ? ERROR_MESSAGES.number.invalidInput : ''
}
