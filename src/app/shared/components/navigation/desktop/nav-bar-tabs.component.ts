import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';
import { UserRoleService } from 'src/app/core/services/user-role.service';

@Component({
  selector: 'app-nav-bar-tabs',
  templateUrl: './nav-bar-tabs.component.html',
})
export class NavBarTabsComponent {
  private auth = inject(AuthService);
  private userRoles = inject(UserRoleService);

  isAuthenticated$ = this.auth.isAuthenticated$;
  isAdmin$ = this.userRoles.isAdmin$; 
}
