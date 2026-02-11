import cn from 'clsx'
import Link from 'next/link'

import type { ISudebarItem } from '@/src/components/layout/sidebar/sidebar.types'

interface Props {
	item: ISudebarItem
	isActive: boolean
	isShowedSidebar: boolean
}

export function MenuItem({ item, isActive, isShowedSidebar }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className='group flex items-center gap-5 py-3'
			>
				<item.icon
					className={cn(`min-w-6 duration-300 ease-in-out group-hover:rotate-12`, {
						'text-primary': isActive && !isShowedSidebar
					})}
				/>
				<span
					className={cn(`group-hover:text-primary duration-300 ease-in-out`, {
						'text-primary': isActive,
						'border-transparent': !isActive
					})}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='bg-border my-5 block h-[1px] w-full' />}
		</li>
	)
}
