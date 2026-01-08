import axios, { type CreateAxiosDefaults } from 'axios'

import { API_URL } from '@/src/constants/constants'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

export const axiosClassic = axios.create(options)
