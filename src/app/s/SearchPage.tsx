'use client'

import { useQuery } from '@tanstack/react-query'
import { Flame } from 'lucide-react'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/src/components/ui/Heading'
import { SkeletonLoader } from '@/src/components/ui/SkeletonLoader'
import { VideoItem } from '@/src/components/ui/video-item/VideoItem'
import { videoService } from '@/src/services/video.service'
import type { IVideo } from '@/src/types/video.types'

export default function SearchPage() {
	const searchParams = useSearchParams()

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchParams.get('term')],
		queryFn: () => videoService.getAll(searchParams.get('term'))
	})

	return (
		<section>
			<Heading Icon={Search}>Search &quot;{searchParams.get('term')}&quot;</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-35 rounded-md'
					/>
				) : data?.data.videos.length ? (
					data?.data.videos.map((video: IVideo) => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<div>No videos found</div>
				)}
			</div>
		</section>
	)
}
