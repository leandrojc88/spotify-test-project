import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  findTracks(search: string) {
    return this.http.get<any>(`${environment.spotifyApiUrl}/search?q=${search}&type=track`,
      { headers: this.auth.getHeaders(true) }
    );

  }
}