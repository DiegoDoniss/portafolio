import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface mail {
  name: string;
  tel: string;
  email: string;
  message: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApisService {
  private base = 'https://apis.kaizet.com/';
  constructor(private http: HttpClient) {}
  sendEmail(body: mail) {
    return this.http.post(this.base + 'php/mail', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
