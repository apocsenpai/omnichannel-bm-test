'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Step from './Step'
import ProfileInput from './ProfileInput'
import UserInput from './UserInput'
import Button from '@/components/Button'
import { FormInputData } from '@/interfaces/form'
import AddressInput from './AddressInput'
import { handleFormErrors } from '@/helpers/handleFormErrors'
import { formatAddressData, formatProfileData, formatUserData } from '@/helpers/formatters'
import normalize from '@/utils/validators/normalizeMasks'
import { getCep } from '@/services/cepApi'
import { ERROR_MESSAGES } from '@/utils/constants/errorsMessages'
import { ViaCep } from '@/interfaces/viaCep'

export default function FormWrapper() {
	const [step, setStep] = useState<number>(1)

	const [formData, setFormData] = useState<FormInputData>({
		username: '',
		email: '',
		password: '',
		confirmedPassword: '',
		name: '',
		cpf: '',
		birthday: '',
		gender: '',
		phone: '',
		address: {
			zipCode: '',
			street: '',
			number: '',
			complement: '',
			neighborhood: '',
			city: '',
			state: '',
		},
	})

	const [formErrors, setFormErrors] = useState<{ [key: string]: string }>()

	const goToNextFormStep = () => setStep(step === 3 ? step : step + 1)

	const backPreviousFormStep = () => setStep(step === 1 ? step : step - 1)

	const handleSelectOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFormData({ ...formData, gender: e.target.value })
		setFormErrors({ ...formErrors, [e.target.name]: '' })
	}

	const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
		const mask = normalize[e.target.name]

		const inputValue = {
			[e.target.name]: mask ? mask(e.target.value) : e.target.value,
		}

		const isAddressValue = formData.address[e.target.name] !== undefined

		setFormErrors({ ...formErrors, [e.target.name]: '' })

		if (isAddressValue)
			return setFormData({
				...formData,
				address: { ...formData.address, ...inputValue },
			})

		setFormData({ ...formData, ...inputValue })
	}

	const handleUserData = () => {
		const userData = formatUserData(formData)

		const errors = handleFormErrors(userData)

		if (errors) return setFormErrors(errors)

		goToNextFormStep()
	}

	const handleProfileData = () => {
		const profileData = formatProfileData(formData)

		const errors = handleFormErrors(profileData)

		if (errors) return setFormErrors(errors)

		goToNextFormStep()
	}

	const handleAddressData = () => {
		const addressData = formatAddressData(formData)

		const errors = handleFormErrors(addressData)

		if (errors) return setFormErrors(errors)
	}

	const handleCepChanges = async (e: ChangeEvent<HTMLInputElement>) => {
		handleOnChangeEvent(e)

		const zipCode = e.target.value

		if (zipCode.length !== 9) return

		try {
			const viaCepResponse: ViaCep = await getCep(zipCode.replace('-', ''))

			if (viaCepResponse.erro) throw new Error(ERROR_MESSAGES.zipCode.notExist)

			if(viaCepResponse.uf !== "AM") throw new Error(ERROR_MESSAGES.zipCode.notAllowedState)

			const {
				cep,
				logradouro: street,
				complemento: complement,
				bairro: neighborhood,
				localidade: city,
				uf: state,
			} = viaCepResponse

			setFormData({
				...formData,
				address: {
					...formData.address,
					zipCode: cep,
					street,
					complement,
					neighborhood,
					city,
					state,
				},
			})
		} catch (error: any) {
			setFormErrors({ ...formErrors, zipCode: error.message })
		}
	}

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (step === 1) return handleUserData()

		if (step === 2) return handleProfileData()

		handleAddressData()

	}

	return (
		<>
			<Step step={step} />
			<form
				onSubmit={handleFormSubmit}
				className="w-full mt-12 flex flex-col justify-center"
			>
				{step === 1 && (
					<>
						<UserInput
							values={formData}
							formErrors={formErrors}
							onChange={handleOnChangeEvent}
						/>
						<Button>Continuar</Button>
					</>
				)}
				{step === 2 && (
					<>
						<ProfileInput
							values={formData}
							formErrors={formErrors}
							onChange={handleOnChangeEvent}
							selectChange={handleSelectOnChange}
						/>
						<Button>Continuar</Button>
						<Button variant type="button" onClick={backPreviousFormStep}>
							Voltar
						</Button>
					</>
				)}

				{step === 3 && (
					<>
						<AddressInput
							values={formData}
							formErrors={formErrors}
							onChange={handleOnChangeEvent}
							cepOnChange={handleCepChanges}
						/>{' '}
						<Button>Registrar</Button>
						<Button variant type="button" onClick={backPreviousFormStep}>
							Voltar
						</Button>
					</>
				)}
			</form>
		</>
	)
}
