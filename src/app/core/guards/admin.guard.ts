import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RoleService } from '../services/role.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  private roleService = inject(RoleService);
  private router = inject(Router);

  canActivate() {
    return this.roleService.isAdmin$().pipe(
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/']); // redirect if not admin
        }
      }),
      map(isAdmin => isAdmin)
    );
  }
}

