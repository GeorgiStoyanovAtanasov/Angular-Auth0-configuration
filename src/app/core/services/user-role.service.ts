import { Injectable, inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private auth = inject(AuthService);
  private readonly namespace = 'https://radev.dev/roles';

  roles$: Observable<string[]> = this.auth.idTokenClaims$.pipe(
    map((claims: any) => claims?.[this.namespace] || [])
  );

  isAdmin$ = this.roles$.pipe(
    map((roles: string[]) => roles.includes('Admin'))
  );
}
