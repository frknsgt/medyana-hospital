import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor(private _http: HttpClient) {}

  async getAll() {
    return new Promise((resolve, reject) => {
      this._http
        .request<any>('GET', 'http://localhost:3000/equipments')
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

  async getfind(request) {
    return new Promise((resolve, reject) => {
      this._http
        .request<any>('GET', 'http://localhost:3000/equipments' + request)
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
