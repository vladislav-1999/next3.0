import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { PUBLIC_PAGE } from '@/src/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='mb-12 flex items-center gap-6'>
			<button
				onClick={toggleSidebar}
				className={`cursor-pointer opacity-80 duration-300 ease-in-out hover:opacity-100`}
			>
				<Menu />
			</button>

			<Link href={PUBLIC_PAGE.HOME}>
				<span className='flex items-center gap-1.5'>
					<SquarePlay
						size={29}
						className={`text-primary`}
					/>
					<span className='text-xl font-medium'>NewTube</span>
				</span>
			</Link>
		</div>
	)
}
