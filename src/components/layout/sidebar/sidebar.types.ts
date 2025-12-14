import type { LucideIcon } from 'lucide-react'

export interface ISudebarItem {
	icon: LucideIcon
	label: string
	link: string
	isBottomBorder?: boolean
}

export interface ISideBarSubItem {
	avatar: string
	label: string
	link: string
	isLiveNow: boolean
	isRecentUpload: boolean
}
