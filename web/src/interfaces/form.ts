import { ChangeEventHandler } from 'react'

export interface FormInputData {
	[key: string]: string | Address;
	username: string;
	email: string;
	password: string;
	confirmedPassword: string;
	name: string;
	cpf: string;
	birthday: string;
	gender: string;
	phone: string;
	address: Address;
}

export interface Address {
	[key: string]: string | undefined;
	zipCode: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: string;
}

export interface InputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
	cepOnChange?: ChangeEventHandler<HTMLInputElement>;
	selectChange?: ChangeEventHandler<HTMLSelectElement>;
	values: FormInputData;
	formErrors: { [key: string]: string } | undefined;
}
