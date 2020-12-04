import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankappService {
  private url = 'http://bankapp.endcom.mx/api/bankappTest/';
  constructor(private http:HttpClient) { }

 getCuenta():Observable<any>{
    return this.http.get(this.url+'cuenta');
  }

  getSaldos():Observable<any>{
    return this.http.get(this.url+'saldos');
  }

  getTarjetas():Observable<any>{
    return this.http.get(this.url+'tarjetas');
  }

  getMovimientos():Observable<any>{
    return this.http.get(this.url+'movimientos');
  }
}
