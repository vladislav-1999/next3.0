import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/src/components/ui/Heading'
import { VideoItem } from '@/src/components/ui/video-item/VideoItem'
import { PAGE } from '@/src/config/public-page.config'
import { videoService } from '@/src/services/video.service'
import type { IVideo } from '@/src/types/video.types'

export const revalidate = 100

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending page',
	alternates: {
		canonical: PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending'
	}
}

export default async function TrendingPage() {
	const videos = await videoService.getTrendingVideos()

	return (
		<section className='mb-10'>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='grid-6-cols'>
				{videos.data.length ? (
					videos.data.map((video: IVideo) => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<div>Trends temrorary unavailable</div>
				)}
			</div>
		</section>
	)
}
