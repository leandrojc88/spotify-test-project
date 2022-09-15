import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrackSpotifyModel } from 'src/app/model/spotify';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tracksList!: TrackSpotifyModel[];
  searchForm = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void { }

  onSearch() {

    // validate form
    if (!this.searchForm.valid) {
      this.searchForm.markAllAsTouched()
      return;
    }

    const search: string = this.searchForm.get('search')?.value || "";

    this.spotifyService.findTracks(search)
      .subscribe(rep => {
        this.tracksList = rep.tracks.items;
      });

  }

}
