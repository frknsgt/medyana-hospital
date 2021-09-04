import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  constructor(private _http: HttpClient) {}

  async getAll() {
    return new Promise((resolve, reject) => {
      this._http.request<any>('GET', 'http://localhost:3000/clinics').subscribe(
        (res) => resolve(res),
        (error) =>
          reject({
            status: error.status,
            message:
              error.error != undefined ? error.error.message : error.message,
          })
      );
    });
  }

  async getFind(request) {
    return new Promise((resolve, reject) => {
      this._http
        .request<any>('GET', 'http://localhost:3000/clinics' + request)
        .subscribe(
          (res) => resolve(res),
          (error) =>
            reject({
              status: error.status,
              message:
                error.error != undefined ? error.error.message : error.message,
            })
        );
    });
  }
}
