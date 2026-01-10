import Cookies from 'js-cookie'

import { axiosClassic } from '@/src/api/axios'
import type { IAuthData } from '@/src/app/auth/auth-form.types'
import { store } from '@/src/store'
import { clearAuthData, setAuthData } from '@/src/store/auth.slice'
import { EnumTokens } from '@/src/types/auth.types'
import type { IUser } from '@/src/types/user.types'

interface IAuthResponse {
	user: IUser
	accessToken: string
}

class AuthService {
	private _AUTH = '/auth'

	async main(type: 'login' | 'register', data: IAuthData, recaptchaToken?: string | null) {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken
			}
		})

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
			store.dispatch(setAuthData(response.data))
		}

		return response
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._AUTH}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`
				}
			}
		)

		return response.data
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

		if (response.data) {
			this._removeFromStorage()
			store.dispatch(clearAuthData())
		}

		return response
	}

	private _saveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: 'localhost',
			sameSite: 'strict',
			expires: 1,
			secure: true
		})
	}

	private _removeFromStorage() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN)
	}
}

export const authService = new AuthService()
