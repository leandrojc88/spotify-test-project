import { Component, OnInit, Input } from '@angular/core';
import { TrackSpotifyModel } from 'src/app/model/spotify';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {

  @Input() track!: TrackSpotifyModel;

  constructor() { }

  ngOnInit(): void { }

  getImg() {
    return this.track?.album?.images[0].url;
  }
}
