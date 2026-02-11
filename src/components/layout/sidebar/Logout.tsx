import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'

import { authService } from '@/src/services/auth.service'
import { useTypedSelector } from '@/src/store'

export function Logout() {
	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout()
	})

	const { isLoggedIn } = useTypedSelector(state => state.auth)

	if (!isLoggedIn) return null

	return (
		<button
			onClick={() => mutate()}
			className='group group flex cursor-pointer items-center gap-5 py-3 duration-300 ease-in-out'
		>
			<LogOut className={`min-w-6 duration-300 ease-in-out group-hover:rotate-12`} />
			<span className='group-hover:text-primary'>{isPending ? 'Wait...' : 'Logout'}</span>
		</button>
	)
}
