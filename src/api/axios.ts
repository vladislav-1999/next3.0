import axios, { type CreateAxiosDefaults } from 'axios'
import Cookies from 'js-cookie'

import { EnumTokens } from '../types/auth.types'

import { API_URL } from '@/src/constants/constants'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

export const axiosClassic = axios.create(options)

export const instance = axios.create(options)

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})
