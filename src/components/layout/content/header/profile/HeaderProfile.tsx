import { LogIn } from 'lucide-react'

import { HeaderAvatar } from './HeaderAvatar'
import { LinkButton } from '@/src/components/ui/button/LinkButton'
import { PAGE } from '@/src/config/public-page.config'
import { useTypedSelector } from '@/src/store'

export function HeaderProfile() {
	const { isLoggedIn } = useTypedSelector(state => state.auth)
	return isLoggedIn ? (
		<HeaderAvatar />
	) : (
		<LinkButton
			href={PAGE.AUTH}
			className='flex items-center gap-1'
		>
			<LogIn size={20} /> Login
		</LinkButton>
	)
}
