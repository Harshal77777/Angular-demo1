import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userobj: any = { email: '', password: '' };
  router = inject(Router);
  http = inject(HttpClient);

  constructor() {}

  onLogin() {
    this.http.post('http://localhost:3002/api/login', this.userobj).subscribe(
      (res: any) => {
        console.log(res, "response obj");

        
          console.log("redirecting to product page");
          this.router.navigateByUrl("/dashboard"); 
          localStorage.setItem('loginUser', JSON.stringify(res.user)); 
          alert(res.message);
      },
      (error) => {
        alert('Login failed: ' + (error.error?.message || 'Server error'));
      }
    );
  }
}
