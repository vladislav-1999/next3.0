import Link from 'next/link'

import type { ISudebarItem } from '@/src/components/layout/sidebar/sidebar.types'

interface Props {
	item: ISudebarItem
}

export function MenuItem({ item }: Props) {
	return (
		<li>
			<Link href={item.link}>
				<item.icon />
				<span>{item.label}</span>
			</Link>
		</li>
	)
}
