import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  readonly baseUrl = environment.API_URL;

  readonly strainRoute: string;

  constructor(
    private http: HttpClient
  ) {
    this.strainRoute = "strain/"
  }
}
