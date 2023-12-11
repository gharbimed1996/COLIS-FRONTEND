import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Cart } from './Cart';
import { Colis } from './Colis';
import { Ad } from './ad';
import { Announce } from './Announce';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8091/commands/Colis";
  private url2 = "http://localhost:8091/query";
  private url3 = "http://localhost:8091/commands/Demande";
  private url4 = "http://localhost:8091/query/Demande";
  private baseUrl = 'http://localhost:8090/commands/ad/create';

  private url11 = "http://localhost:8091/query/announces/";
  private url12 = "http://localhost:8091/commands/announce/";



  constructor(private http: HttpClient) { }

  // Add Colis - Create
  adduser(colis: Colis){
    return this.http.post<Colis>(`${this.url}/create`, colis)
  }

   // Get Users - Read
   getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url2+'/AllColis')
  }

  getUserById(id: string): Observable<Colis>{
    return this.http.get<Colis>(`${this.url2}/Colis/${id}`)
  }
// Add Cart - Create
addcart(Cart: Cart){
  return this.http.post<Cart>(`${this.url3}/create`, Cart)
}
acceptColis(colis: Colis) {
  return this.http.put<Colis>(`${this.url}/EnDepot`, colis);
}
encoursColis(colis: Colis) {
  return this.http.put<Colis>(`${this.url}/EnCours`, colis);
}
enretourColis(colis: Colis) {
  return this.http.put<Colis>(`${this.url}/Retour`, colis);
}
livreColis(colis: Colis) {
  return this.http.put<Colis>(`${this.url}/Livré`, colis);
}


  // Get Users - Read
  getcart(): Observable<any[]>{
    return this.http.get<any[]>(this.url4+'/AllDemande')
  }
  getCartById(id: string): Observable<Cart>{
    return this.http.get<Cart>(`${this.url4}/${id}`)
  }
  acceptCart(cart: Cart) {
    return this.http.put<Cart>(`${this.url3}/Accepter`, cart);
  }
  refuserCart(cart: Cart) {
    return this.http.put<Cart>(`${this.url3}/Refuser`, cart);
  }






  public EndepotColis(colis?: any) {
    return this.http.put(`${this.url}/EnDepot`, colis);
  }
  public EncoursColis(colis: Colis) {
    return this.http.put(`${this.url}/EnCours`, colis);
  }
  createAd(ad: Ad) {
    return this.http.post(`${this.baseUrl}`, ad);
    }

  
  // Add User - Create
  createAnnounce(announce: Announce){
    return this.http.post<Announce>(`${this.url12}create`, announce)
  }

  // Get Users - Read
  announceList(): Observable<any[]>{
    return this.http.get<any[]>(this.url11+'GetAllAnnounces')
  }

  // Get User by Id - Read
  getAnnounce(id: String): Observable<Announce>{
    return this.http.get<Announce>(`${this.url11}GetAnnounceById/${id}`)
  }

  // Update User - Update
  updateAnnounce(id?: String ,announce?: any): Observable<any>{
    return this.http.put<any>(`${this.url12}update/${id}`, announce)
  }

  // Delete User - Delete
  deleteAnnounce(id: String): Observable<any>{
    return this.http.delete<any>(`${this.url12}/${id}`)
  }
  search(query: string): Observable<Announce[]> {
    return this.http.get<Announce[]>(`${this.url11}search?q=${query}`);
  }

}


