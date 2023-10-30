'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Step from './Step'
import ProfileInput from './ProfileInput'
import UserInput from './UserInput'
import Button from '@/components/Button'
import { FormInputData } from '@/interfaces/form'

export default function FormWrapper() {
	const [step, setStep] = useState<boolean>(true)

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

	const changeFormStep = () => setStep(!step)

	const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = {[e.target.name]: e.target.value}

		const isAddressValue = formData.address[e.target.name] !== undefined

		if(isAddressValue) return setFormData({...formData, address:{...formData.address, ...inputValue} })

		setFormData({ ...formData, ...inputValue})
	}

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(step) return changeFormStep()


	}

	return (
		<>
			<Step step={step} />
			<form onSubmit={handleFormSubmit} className="w-full mt-12 flex flex-col gap-2 justify-center">
				{step ? (
					<>
						<UserInput values={formData} onChange={handleOnChangeEvent}/>
						<Button>Continuar</Button>
					</>
				) : (
					<>
						<ProfileInput /> <Button>Registrar</Button>
					</>
				)}
			</form>
		</>
	)
}
