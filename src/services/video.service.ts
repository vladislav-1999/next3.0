import axios from 'axios'

import type { IVideo } from '@/src/types/video.types'

class VideoService {
	getExploreVideos() {
		return axios.get<{ videos: IVideo[] }>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()
