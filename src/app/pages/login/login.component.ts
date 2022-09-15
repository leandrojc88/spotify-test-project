import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  onLoginSpotify() {

    const client_id = '55ced41badaa4a52839b3ceb5c1eaf32';
    const redirect_uri = environment.baseUrl + '/callback';
    const scope = 'user-read-private user-read-email';

    let url = environment.spotifyAccountUrl + '/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    window.location.href = url;
  }

}
