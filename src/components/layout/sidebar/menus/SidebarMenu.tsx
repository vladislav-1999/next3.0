import { MenuItem } from '@/src/components/layout/sidebar/menus/MenuItem'
import type { ISudebarItem } from '@/src/components/layout/sidebar/sidebar.types'

interface Props {
	title?: string
	menu: ISudebarItem[]
}

export function SidebarMenu({ menu, title }: Props) {
	return (
		<nav>
			{title && <div>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.link}
						item={menuItem}
					/>
				))}
			</ul>
		</nav>
	)
}
