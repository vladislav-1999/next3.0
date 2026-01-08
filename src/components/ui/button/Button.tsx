import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export function Button({ isLoading, children, ...props }: Props) {
	return (
		<button
			className='bg-primary hover:bg-secondary cursor-pointer rounded px-5 py-2 font-semibold text-white transition-colors duration-200 disabled:bg-gray-400'
			disabled={isLoading}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}
