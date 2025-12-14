import { SidebarHeader } from '@/src/components/layout/sidebar/header/SidebarHeader'
import { SidebarMenu } from '@/src/components/layout/sidebar/menus/SidebarMenu'
import { SidebarSubscriptions } from '@/src/components/layout/sidebar/menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from '@/src/components/layout/sidebar/sidebar.data'

export function Sidebar() {
	return (
		<aside>
			<SidebarHeader />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SidebarSubscriptions />
			<SidebarMenu menu={MORE_SIDEBAR_DATA} />
		</aside>
	)
}
