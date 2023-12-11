import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Demande} from "../Demande";
import {orgs} from "../orgs";
import {AdminE} from "../AdminE";

const AUTH_API = 'http://localhost:8083/clients/';
const AUTH_API_E = 'http://localhost:8083/AdminOrg/';
const AUTH_API_L = 'http://localhost:8083/livreur/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8083/demande";
  private url2 = "http://localhost:8083/organizations/create";
  private url3 = "http://localhost:8083/AdminOrg/create";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string ,password: string, orgId:string): Observable<any> {
    return this.http.post( AUTH_API_E + 'create', {
      username,
      email,
      password,
      orgId,
    }, httpOptions);
  }
  registerLivreur(username: string, email: string ,password: string, orgId:string): Observable<any> {
    return this.http.post( AUTH_API_L + 'create', {
      username,
      email,
      password,
      orgId,
    }, httpOptions);
  }
  AjoutDemande(demande: Demande){
    return this.http.post<Demande>(`${this.url}`, demande)
  }
  Ajoutorgs(entreprise: orgs){
    return this.http.post<orgs>(`${this.url2}`, entreprise)
  }
  AjoutorgsAdmin(adminOrg: AdminE){
    return this.http.post<orgs>(`${this.url3}`, adminOrg)
  }


}
