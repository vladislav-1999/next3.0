'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { PAGE } from '@/src/config/public-page.config'

// interface Props {
// }

export function SearchField() {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handkeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			searchTerm.trim() && router.push(PAGE.SEARCH(encodeURIComponent(searchTerm)))
		}
	}

	return (
		<div className='w-1/4'>
			<input
				type='search'
				placeholder='Type to search'
				className='w-full bg-transparent px-4 py-2'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handkeKeyDown}
			/>
		</div>
	)
}
