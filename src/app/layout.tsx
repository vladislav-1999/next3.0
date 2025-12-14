import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Layout } from '@/src/components/layout/Layout'

import './globals.scss'

const notoSans = Noto_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-noto-sans'
})

export const metadata: Metadata = {
	title: 'NewTube',
	description: 'Video Hosting Platform'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={notoSans.variable}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
