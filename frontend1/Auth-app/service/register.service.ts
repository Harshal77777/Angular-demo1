import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = env.api.url +'/register';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
