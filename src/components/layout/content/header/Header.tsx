import { HeaderLinks } from './HeaderLinks'
import { HeaderProfile } from './HeaderProfile'
import { SearchField } from './SearchField'

export function Header() {
	return (
		<header className='p-layout border-border flex items-center justify-between border-b'>
			<SearchField />
			<div className='flex items-center gap-6'>
				<HeaderLinks />
				<HeaderProfile />
			</div>
		</header>
	)
}
