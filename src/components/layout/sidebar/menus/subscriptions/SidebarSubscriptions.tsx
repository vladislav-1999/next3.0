import { MenuItem } from '@/src/components/layout/sidebar/menus/MenuItem'
import { SubItem } from '@/src/components/layout/sidebar/menus/subscriptions/SubItem'
import type { ISudebarItem } from '@/src/components/layout/sidebar/sidebar.types'

export function SidebarSubscriptions() {
	return (
		<div>
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
