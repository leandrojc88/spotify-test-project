import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackSpotifyModel } from 'src/app/model/spotify';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  findTracks(search: string, offset = 0, limit = 20) {
    return this.http.get<any>(`${environment.spotifyApiUrl}/search?q=${search}&offset=${offset}&limit=${limit}&type=track`,
      { headers: this.auth.getHeaders(true) }
    );

  }
}