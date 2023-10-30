'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Step from './Step'
import ProfileInput from './ProfileInput'
import UserInput from './UserInput'
import Button from '@/components/Button'
import { FormInputData } from '@/interfaces/form'
import AddressInput from './AddressInput'

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

	const [formErrors, setFormErrors] = useState<FormInputData>()

	const goToNextFormStep = () => setStep(step === 3 ? step : step + 1)
	const backPreviousFormStep = () => setStep(step === 1 ? step : step - 1)

	const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = { [e.target.name]: e.target.value }

		const isAddressValue = formData.address[e.target.name] !== undefined

		if (isAddressValue)
			return setFormData({
				...formData,
				address: { ...formData.address, ...inputValue },
			})

		setFormData({ ...formData, ...inputValue })
	}

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		 goToNextFormStep()
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
						<UserInput values={formData} onChange={handleOnChangeEvent} />
						<Button>Continuar</Button>
					</>
				)}
				{step === 2 && (
					<>
						<ProfileInput values={formData} onChange={handleOnChangeEvent} />{' '}
						<Button>Continuar</Button>
						<Button variant type='button' onClick={backPreviousFormStep}>Voltar</Button>
					</>
				)}

				{step === 3 && (
					<>
						<AddressInput values={formData} onChange={handleOnChangeEvent} />{' '}
						<Button>Registrar</Button>
						<Button variant type='button' onClick={backPreviousFormStep}>Voltar</Button>
					</>
				)}
			</form>
		</>
	)
}
