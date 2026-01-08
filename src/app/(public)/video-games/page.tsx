import { Flame } from 'lucide-react'
import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/src/components/ui/Heading'
import { VideoItem } from '@/src/components/ui/video-item/VideoItem'
import { PAGE } from '@/src/config/public-page.config'
import { videoService } from '@/src/services/video.service'
import type { IVideo } from '@/src/types/video.types'

export const revalidate = 100

export const metadata: Metadata = {
	title: 'Video games',
	description: 'Video games page',
	alternates: {
		canonical: PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Video games'
	}
}

export default async function VideoGamesPage() {
	const videos = await videoService.getVideoGames()

	return (
		<section className='mb-10'>
			<Heading Icon={Gamepad2}>Game Videos</Heading>
			<div className='grid-6-cols'>
				{videos.data.videos ? (
					videos.data.videos.map((video: IVideo) => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<div>Game videos temrorary unavailable</div>
				)}
			</div>
		</section>
	)
}
