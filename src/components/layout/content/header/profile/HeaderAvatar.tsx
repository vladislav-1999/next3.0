import Image from 'next/image'
import Link from 'next/link'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { STUDIO_PAGE } from '@/src/config/studio-page.config'
import { useProfile } from '@/src/hooks/useProfile'

export function HeaderAvatar() {
	const { profile, isLoading } = useProfile()

	if (isLoading)
		return (
			<SkeletonLoader
				count={1}
				className='mb-0 h-10 w-10 rounded-md'
			/>
		)

	return (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className='shrink-0'
		>
			<Image
				src={profile?.channel?.avatarUrl || '/avatar.png'}
				alt='#'
				width={40}
				height={40}
				className='rounded-lg'
			/>
		</Link>
	)
}
