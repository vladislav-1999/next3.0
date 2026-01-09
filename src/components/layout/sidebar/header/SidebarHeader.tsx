import { Menu } from 'lucide-react'

import { Logo } from '@/src/components/ui/logo/Logo'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='mb-12 flex items-center gap-6'>
			<button
				onClick={toggleSidebar}
				className={`cursor-pointer opacity-80 duration-300 ease-in-out hover:opacity-100`}
			>
				<Menu />
			</button>
			<Logo />
		</div>
	)
}
