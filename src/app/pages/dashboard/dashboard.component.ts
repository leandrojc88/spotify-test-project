import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackSpotifyModel } from 'src/app/model/spotify';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tracksList!: TrackSpotifyModel[];
  search!: string;
  limit: number = 20;
  total: number = 0;
  offset: number = 0;
  page: number = 1;

  searchForm = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    // load spotify data by queryParams
    this.route.queryParams
      .pipe(
        map((queryParam) => {

          this.search = queryParam["search"];
          this.page = queryParam["page"];

          if (!this.search) return;

          this.searchForm.get('search')?.setValue(this.search);
          this.offset = (this.page - 1) * this.limit;

          this.spotifyService.findTracks(this.search, this.offset)
            .subscribe(rep => {
              this.tracksList = rep.tracks.items;

              this.limit = rep.tracks.limit;
              this.total = rep.tracks.total;
            });

        })
      )
      .subscribe();

  }

  /**
   * configure query params for search, or clear search if input is empty 
   */
  onSearch() {

    if (!this.searchForm.valid) {
      this.searchForm.markAllAsTouched()
      this.tracksList = [];
      this.router.navigate([this.router.url.split('?')[0]])
      return;
    }

    this.search = this.searchForm.get('search')?.value || "";
    this.limit = 20;
    this.total = 0;
    this.offset = 0;

    this.page = 1;
    this.navigate();

  }

  getTotalPages() {
    return Math.ceil(this.total / this.limit)
  }

  prev() {
    if (this.page == 1) return;
    this.page--;
    this.navigate();
  }
  next() {
    if (this.page == this.getTotalPages()) return;
    this.page++;
    this.navigate();
  }

  navigate() {
    this.router.navigate(
      [this.router.url.split('?')[0]],
      {
        queryParams: {
          search: this.search,
          page: this.page
        },
        queryParamsHandling: 'merge'
      }
    );
  }

}
