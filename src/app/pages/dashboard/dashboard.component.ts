import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotifyService.findTracks('rap es guerra').subscribe(rep => {
      console.log(rep);
    });
  }

}
