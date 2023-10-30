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
	gender,
	phone,
}: FormInputData) => ({ name, cpf, birthday, gender, phone })

export const formatAddressData = ({ address }: FormInputData) => ({
	zipCode: address.zipCode,
	number: address.number,
})
