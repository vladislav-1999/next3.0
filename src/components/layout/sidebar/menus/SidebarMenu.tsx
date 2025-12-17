import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { MenuItem } from '@/src/components/layout/sidebar/menus/MenuItem'
import type { ISudebarItem } from '@/src/components/layout/sidebar/sidebar.types'

interface Props {
	title?: string
	menu: ISudebarItem[]
}

export function SidebarMenu({ menu, title }: Props) {
	const pathname = usePathname()

	return (
		<nav>
			{title && <div className='mb-3 text-xs uppercase opacity-45'>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.link}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}
