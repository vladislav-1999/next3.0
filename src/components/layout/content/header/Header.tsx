import dynamic from 'next/dynamic'

import { HeaderLinks } from './HeaderLinks'
import { SearchField } from './SearchField'
import { SkeletonLoader } from '@/src/components/ui/SkeletonLoader'

const DynamicHeaderProfile = dynamic(
	() => import('./HeaderProfile').then(mod => mod.HeaderProfile),
	{
		ssr: false,
		loading: () => (
			<SkeletonLoader
				count={1}
				className='mb-0 h-10 w-10 rounded-md'
			/>
		)
	}
)

export function Header() {
	return (
		<header className='p-layout border-border flex items-center justify-between border-b'>
			<SearchField />
			<div className='flex items-center gap-6'>
				<HeaderLinks />

				<DynamicHeaderProfile />
			</div>
		</header>
	)
}
