import cn from 'clsx'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
	registration: UseFormRegisterReturn
}

export function Field({ label, error, registration, ...props }: Props) {
	return (
		<div className='mb-4'>
			<label>
				<span className='mb-2 block font-semibold text-gray-400'>{label}</span>
				<input
					className={cn(
						'w-full rounded border border-transparent bg-[#191b28] px-3 py-2 shadow-sm transition-colors focus:border-gray-500 focus:ring-0 focus:outline-none',
						error ? 'border-secondary' : 'border-border'
					)}
					{...registration}
					{...props}
				/>
			</label>
			{error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
		</div>
	)
}
