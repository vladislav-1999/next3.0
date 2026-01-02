import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/src/config/public-page.config'
import type { IVideo } from '@/src/types/video.types'
import { transformDate } from '@/src/utils/transform-date'
import { transformViews } from '@/src/utils/transform-views'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<div>
			<div className='relative mb-1.5'>
				<Link href={PAGE.VIDEO(video.id)}>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
						className='rounded-md'
					/>
				</Link>
				<Link href={PAGE.CHANNEL(video.channel.slug)}>
					<Image
						src={video.channel.avatarUrl}
						width={35}
						height={35}
						alt={video.channel.name}
						className='absolute bottom-2 left-2 rounded-full shadow'
					/>
				</Link>
			</div>

			<div className='mb-1.5 flex items-center justify-between'>
				<div className='flex items-center gap-0.5'>
					{Icon && (
						<Icon
							className='text-secondary'
							size={20}
						/>
					)}
					<span className={styles.span}>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className={styles.span}>{transformDate(video.createdAt)}</span>
				</div>
			</div>

			<div className='mb-1'>
				<Link
					href={PAGE.VIDEO(video.id)}
					className='line-clamp-2 leading-[1.3]'
				>
					{video.title}
				</Link>
			</div>
			<div>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className='flex items-center gap-1'
				>
					{video.channel.user.name}
					<span></span>
					<span>
						{video.channel.isVerified && (
							<BadgeCheck
								className='text-green-500'
								size={15}
							/>
						)}
					</span>
				</Link>
			</div>
		</div>
	)
}

const styles = {
	span: 'text-gray-400 text-sm'
}
