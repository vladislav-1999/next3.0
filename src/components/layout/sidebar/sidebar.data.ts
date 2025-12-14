import {
	CircleAlert,
	CirclePlay,
	Compass,
	Flame,
	FolderHeart,
	Gamepad2,
	History,
	Settings,
	TvMinimalPlay
} from 'lucide-react'

import type { ISudebarItem } from './sidebar.types'
import { PUBLIC_PAGE } from '@/src/config/public-page.config'

export const SIDEBAR_DATA: ISudebarItem[] = [
	{
		icon: Compass,
		label: 'Explore',
		link: PUBLIC_PAGE.HOME
	},
	{
		icon: Flame,
		label: 'Trending',
		link: PUBLIC_PAGE.TRENDING
	},
	{
		icon: Gamepad2,
		label: 'Video Games',
		link: PUBLIC_PAGE.VIDEO_GAMES,
		isBottomBorder: true
	},
	{
		icon: TvMinimalPlay,
		label: 'My channel',
		link: PUBLIC_PAGE.MY_CHANNEL
	},
	{
		icon: CirclePlay,
		label: 'Subscriptions',
		link: PUBLIC_PAGE.SUBSCRIPTIONS
	},
	{
		icon: History,
		label: 'History',
		link: PUBLIC_PAGE.HISTORY
	},
	{
		icon: FolderHeart,
		label: 'Liked videos',
		link: PUBLIC_PAGE.LIKED_VIDEOS,
		isBottomBorder: true
	}
]

export const MORE_SIDEBAR_DATA: ISudebarItem[] = [
	{
		icon: Settings,
		label: 'Settings',
		link: PUBLIC_PAGE.SETTINGS
	},
	{
		icon: CircleAlert,
		label: 'Send feedback',
		link: PUBLIC_PAGE.FEEDBACK
	}
]
