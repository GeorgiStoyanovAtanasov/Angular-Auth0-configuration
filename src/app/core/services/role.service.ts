import { Injectable, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private auth = inject(AuthService);
  private readonly namespace = 'https://radev.dev/roles';

  getRoles$(): Observable<string[]> {
    return this.auth.idTokenClaims$.pipe(
      map((claims: any) => claims?.[this.namespace] || [])
    );
  }

  isAdmin$(): Observable<boolean> {
    return this.getRoles$().pipe(
      map((roles: string[]) => roles.includes('Admin'))
    );
  }
}
