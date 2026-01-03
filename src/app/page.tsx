import { Flame } from 'lucide-react'

import { Explore } from './explore/Explore'
import { VideoItem } from '@/src/components/ui/video-item/VideoItem'
import { videoService } from '@/src/services/video.service'
import type { IVideo } from '@/src/types/video.types'

export const revalidate = 100

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0, 6)

	return (
		<section>
			<section>
				<h2>Trending</h2>
				<div className='grid grid-cols-6 gap-6'>
					{trendingVideos.length &&
						trendingVideos.map((video: IVideo) => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
				</div>
			</section>
			<Explore />
		</section>
	)
}
