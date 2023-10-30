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
	address: Address;
}

interface Address {
    [key: string]: string | undefined;
	zipCode: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: string;
}
