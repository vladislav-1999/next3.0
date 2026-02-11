import dynamic from 'next/dynamic'

// import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { SidebarHeader } from '@/src/components/layout/sidebar/header/SidebarHeader'
import { SidebarMenu } from '@/src/components/layout/sidebar/menus/SidebarMenu'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from '@/src/components/layout/sidebar/sidebar.data'

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), { ssr: false })

export function Sidebar({
	toggleSidebar,
	isShowedSidebar
}: {
	toggleSidebar: () => void
	isShowedSidebar: boolean
}) {
	return (
		<aside className='p-layout border-border overflow-hidden border-r whitespace-nowrap'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu
				menu={SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			{/* <SidebarSubscriptions title='Subscriptions' /> */}
			<SidebarMenu
				title='More from NewTube'
				menu={MORE_SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<DynamicLogout />
		</aside>
	)
}
