import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserRoleService } from 'src/app/core/services/user-role.service';

@Component({
  selector: 'app-mobile-nav-bar-tabs',
  templateUrl: './mobile-nav-bar-tabs.component.html',
})
export class MobileNavBarTabsComponent {
  @Output() mobileNavBarTabClick = new EventEmitter<string>();

  private auth = inject(AuthService);
  private userRoles = inject(UserRoleService);

  isAuthenticated$ = this.auth.isAuthenticated$;
  isAdmin$ = this.userRoles.isAdmin$; // ✅ Add this

  onMobileNavBarTabClick(path: string): void {
    this.mobileNavBarTabClick.emit(path);
  }
}
