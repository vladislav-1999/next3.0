import { axiosClassic } from '@/src/api/axios'
import type { IVideo } from '@/src/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'

	getAll(searchTerm?: string | null) {
		return axiosClassic.get<{ videos: IVideo[] }>(
			this._VIDEOS,
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	getVideoGames() {
		return axiosClassic.get<{ videos: IVideo[] }>(`${this._VIDEOS}/games`)
	}
	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
	}
	getExploreVideos() {
		return axiosClassic.get<{ videos: IVideo[] }>(`${this._VIDEOS}/explore`)
	}
}

export const videoService = new VideoService()
