export interface UriTokenSpotifyModel {
    access_token: string,
    expires_in: string,
    token_type: string
}

export interface TrackSpotifyModel {
    album: Album,
    name: string
}

interface Image {
    height: number,
    url: string,
    width: number
}

interface Album {
    album_type: string,
    images: Image[],
    name: string
}