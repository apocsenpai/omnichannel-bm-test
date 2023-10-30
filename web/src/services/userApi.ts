import { Address } from '@/interfaces/form'
import api from './api'

export interface BodyRequest {
	username: string;
	email: string;
	password: string;
	confirmedPassword: string;
	name: string;
	cpf: string;
	birthday: Date;
	gender: string;
	phone: string;
	address: Address;
}

export async function createUser(user: BodyRequest) {
	await api.post('/users', user)
}
