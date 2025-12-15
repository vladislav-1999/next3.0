import { SidebarHeader } from '@/src/components/layout/sidebar/header/SidebarHeader'
import { SidebarMenu } from '@/src/components/layout/sidebar/menus/SidebarMenu'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from '@/src/components/layout/sidebar/sidebar.data'

export function Sidebar({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<aside className='p-layout border-border overflow-hidden border-r whitespace-nowrap'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA} />
			{/* <SidebarSubscriptions title='Subscriptions' /> */}
			<SidebarMenu
				title='More from NewTube'
				menu={MORE_SIDEBAR_DATA}
			/>
		</aside>
	)
}
