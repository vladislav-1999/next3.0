import type { PropsWithChildren } from 'react'

import { Content } from '@/src/components/layout/content/Content'
import { Sidebar } from '@/src/components/layout/sidebar/Sidebar'

export function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<main>
			<Sidebar />
			<Content>{children}</Content>
		</main>
	)
}
