import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { ERROR_MESSAGES } from '@/utils/constants/errorsMessages'
import {
	alphaNumMatch,
	cepMatch,
	emailMatch,
	nameMatch,
	numericMatch,
	passwordMatch,
	phoneMatch,
} from '@/utils/regex'
import isValidCpf from '@/utils/validators/validateCpf'

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
	zipCode: (value: string) => validateZipCode(value),
	phone: (value: string) => validatePhone(value),
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
	const actualDate = dayjs(new Date())

	const birthdayDate = dayjs(birthday, 'DD/MM/YYYY', true)

	if (!birthdayDate.isValid()) return ERROR_MESSAGES.birthday.invalidInput

	return actualDate.diff(birthdayDate, 'year', true) < 18
		? ERROR_MESSAGES.birthday.notAllowedAge
		: ''
}

function validatePhone(phone: string) {
	return !phoneMatch.test(phone) ? ERROR_MESSAGES.phone.invalidInput : ''
}

function validateZipCode(zipCode: string){
	return !cepMatch.test(zipCode) ? ERROR_MESSAGES.zipCode.invalidInput : ''
}

function validateNumber(number: string) {
	return !numericMatch.test(number) ? ERROR_MESSAGES.number.invalidInput : ''
}
