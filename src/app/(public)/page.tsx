import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Explore } from './explore/Explore'
import { Heading } from '@/src/components/ui/Heading'
import { VideoItem } from '@/src/components/ui/video-item/VideoItem'
import { videoService } from '@/src/services/video.service'
import type { IVideo } from '@/src/types/video.types'

export const revalidate = 100

export const metadata: Metadata = {
	title: 'NewTube',
	description: 'Home page'
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0, 6)

	return (
		<section>
			{!!trendingVideos.length && (
				<section className='mb-10'>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='grid-6-cols'>
						{trendingVideos.map((video: IVideo) => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}

			<Explore />
		</section>
	)
}
