import type { Metadata } from 'next'

import SearchPage from './SearchPage'
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Search',
	...NO_INDEX_PAGE
}

export default function SearchPageRoute() {
	return <SearchPage />
}
