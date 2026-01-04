'use client'
import cn from 'clsx'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'

import { Content } from '@/src/components/layout/content/Content'
import { Sidebar } from '@/src/components/layout/sidebar/Sidebar'

import styles from '@/src/components/layout/Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)

	const toggleSidebar = () => {
		setIsShowedSidebar(prev => !prev)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen',
				styles.initialSidebar,
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}
