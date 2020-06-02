import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  public getCities() {
    return this.httpClient.get(this.apiUrl + '/citiesList')
  }
}
