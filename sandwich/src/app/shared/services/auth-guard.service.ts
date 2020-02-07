import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('userid') === '') {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
