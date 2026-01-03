'use client'

import { useQuery } from '@tanstack/react-query'
import { Flame } from 'lucide-react'

import { VideoItem } from '@/src/components/ui/video-item/VideoItem'
import { videoService } from '@/src/services/video.service'
import type { IVideo } from '@/src/types/video.types'

export const Explore = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<h2>Explore</h2>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading
					? 'Loading...'
					: data?.data.videos.length &&
						data?.data.videos.map((video: IVideo) => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
			</div>
		</section>
	)
}
