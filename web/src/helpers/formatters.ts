import { FormInputData } from '@/interfaces/form'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

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
}: FormInputData) => ({ name, cpf, birthday, phone, gender })

export const formatAddressData = ({ address }: FormInputData) => ({
	zipCode: address.zipCode,
	number: address.number,
})

export const formatForm = (formData: FormInputData) => {
	return {
		...formData,
		cpf: formData.cpf.replace(/\D/g,''),
		birthday: dayjs(formData.birthday, 'DD/MM/YYYY', true).toDate(),
		phone: formData.phone.replace(/\D/g,''),
		address: {
			...formData.address,
			zipCode: formData.address.zipCode.replace(/\D/g,''),
		},
	}
}
