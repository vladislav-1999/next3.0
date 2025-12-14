import type { PropsWithChildren } from 'react'

import { Header } from '@/src/components/layout/content/header/Header'

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Header />
			<section>{children}</section>
		</div>
	)
}
