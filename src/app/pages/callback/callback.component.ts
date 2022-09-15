import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriTokenSpotifyModel } from 'src/app/model/spotify';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-callback',
  template: ``,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.generateToken()

  }


  /**
   * read token from spotify api and process token
   */
  generateToken() {
    let hashParams: any = {};
    let loop
    const regexp = /([^&;=]+)=?([^&;]*)/g
    const queryHashParams = window.location.hash.substring(1);

    if (queryHashParams) {

      while (loop = regexp.exec(queryHashParams)) {
        hashParams[loop[1]] = decodeURIComponent(loop[2]);
      }

      const params: UriTokenSpotifyModel = hashParams;
      this.authService.login(params.access_token);
    }

    this.router.navigate(["/dashboard"]);

  }

}
