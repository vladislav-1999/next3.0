import { LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { LinkButton } from '@/src/components/ui/button/LinkButton'
import { PAGE } from '@/src/config/public-page.config'
import { STUDIO_PAGE } from '@/src/config/studio-page.config'
import { useTypedSelector } from '@/src/store'

export function HeaderProfile() {
	const { isLoggedIn } = useTypedSelector(state => state.auth)
	return isLoggedIn ? (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className='shrink-0'
		>
			<Image
				src='/uploads/avatars/redgroup.jpg'
				alt='#'
				width={40}
				height={40}
				className='rounded-lg'
			/>
		</Link>
	) : (
		<LinkButton
			href={PAGE.AUTH}
			className='flex items-center gap-1'
		>
			<LogIn size={20} /> Login
		</LinkButton>
	)
}
