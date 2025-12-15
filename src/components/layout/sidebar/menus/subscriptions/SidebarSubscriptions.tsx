import { MenuItem } from '@/src/components/layout/sidebar/menus/MenuItem'
import { SubItem } from '@/src/components/layout/sidebar/menus/subscriptions/SubItem'
import type { ISudebarItem } from '@/src/components/layout/sidebar/sidebar.types'

interface Props {
	title?: string
}

export function SidebarSubscriptions({ title }: Props) {
	return (
		<div>
			{title && <div className='mb-3 text-xs uppercase opacity-45'>{title}</div>}
			<ul>
				{/* {menu.map(menuItem => (
					<SubItem
						key={menuItem.link}
						item={menuItem}
					/>
				))} */}
			</ul>
		</div>
	)
}
