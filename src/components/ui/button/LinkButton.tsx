import Link from 'next/link'
import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TLink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

interface Props extends TLink {
	isLoading?: boolean
	children: ReactNode
}

export function LinkButton({ isLoading, children, ...props }: Props) {
	return (
		<Link
			className='bg-primary hover:bg-secondary cursor-pointer rounded px-5 py-2 font-semibold text-white transition-colors duration-200 disabled:bg-gray-400'
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</Link>
	)
}
