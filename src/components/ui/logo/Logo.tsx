import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { PAGE } from '@/src/config/public-page.config'

export const Logo = () => {
	return (
		<Link href={PAGE.HOME}>
			<span className='flex items-center justify-center gap-1.5'>
				<SquarePlay
					size={29}
					className={`text-primary`}
				/>
				<span className='text-xl font-medium'>NewTube</span>
			</span>
		</Link>
	)
}
