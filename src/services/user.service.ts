import type { IFullUser } from '../types/user.types'

import { instance } from '@/src/api/axios'

class UserService {
	private _USERS = '/users'

	getProfile() {
		return instance.get<IFullUser>(`${this._USERS}/profile`)
	}
}

export const userService = new UserService()
