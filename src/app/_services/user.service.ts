import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8083/organizations/orgs';
  private url2 = 'http://localhost:8083/demande';
  private url3='http://localhost:8083/organizations/member'
  constructor(private http: HttpClient) { }
  getorgs(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}`)
  }
  getdemande(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url2}`)
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getorgMembers(orgId: number) {
    return this.http.get<any[]>(`${this.url3}/${orgId}`);
  }
}
