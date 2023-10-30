import { FormInputData } from '@/interfaces/form'
import api from './api'

export async function createUser(user: FormInputData) {
	await api.post('/users', user)
}
