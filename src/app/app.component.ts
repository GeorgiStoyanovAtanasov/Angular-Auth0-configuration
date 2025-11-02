import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  private auth = inject(AuthService);
  isAuth0Loading$ = this.auth.isLoading$;
  
  ngOnInit() {
    this.auth.idTokenClaims$.subscribe((claims) => {
      console.log("ID TOKEN CLAIMS:", claims);
    });

    this.auth.getAccessTokenSilently().subscribe((token) => {
      console.log("ACCESS TOKEN:", token);
    });
  }
}