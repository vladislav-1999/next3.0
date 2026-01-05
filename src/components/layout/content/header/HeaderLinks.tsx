import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/src/config/studio-page.config'

export function HeaderLinks() {
	return (
		<div className='flex items-center gap-4'>
			<Link
				href={STUDIO_PAGE.UPLOAD_VIDEO}
				className={styles.link}
			>
				<PlusSquare size={20} />
			</Link>
			<Link
				href='#'
				className={styles.link}
			>
				<LayoutGrid size={20} />
			</Link>
			<Link
				href='#'
				className={styles.link}
			>
				<Bell size={20} />
			</Link>
		</div>
	)
}

const styles = {
	link: 'opacity-50 transition-opacity hover:opacity-100'
}
