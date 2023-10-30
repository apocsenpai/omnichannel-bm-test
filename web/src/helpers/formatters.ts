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
}: FormInputData) => ({ name, cpf, birthday, gender })

export const formatAddressData = ({ address }: FormInputData) => ({
	zipCode: address.zipCode,
	number: address.number,
})
