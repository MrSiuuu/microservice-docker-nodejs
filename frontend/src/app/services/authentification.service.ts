import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSigninDTO, UserSignupDTO } from '../DTOs/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}
  
  register(data: UserSignupDTO): Observable<UserSignupDTO>{
    return this.http.post<UserSignupDTO>(`${this.apiUrl}/users/create`, data);
  }

  login(data: UserSigninDTO): Observable<UserSigninDTO> {
    return this.http.post<UserSigninDTO>(`${this.apiUrl}/login`, data);
  }
}