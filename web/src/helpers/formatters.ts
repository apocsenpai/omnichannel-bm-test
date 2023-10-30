import { FormInputData } from '@/interfaces/form'

export const formatUserData = ({
	username,
	email,
	password,
	confirmedPassword,
}: FormInputData) => ({ username, email, password, confirmedPassword })

export const formatProfileData = ({
	name,
	cpf,
	birthday,
	phone,
}: FormInputData) => ({ name, cpf, birthday, phone })

export const formatAddressData = ({ address }: FormInputData) => ({
	zipCode: address.zipCode,
	number: address.number,
})
