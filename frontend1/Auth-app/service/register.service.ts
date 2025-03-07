import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://ec2-3-110-220-58.ap-south-1.compute.amazonaws.com/api/api/register';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
