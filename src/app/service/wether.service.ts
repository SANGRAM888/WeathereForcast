import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WetherService {
  private apiKey = 'bd9462cf14msh155c51baf072938p114ac9jsn2bc975a056b1';
  private apiUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';
  constructor(private http:HttpClient) { }
  seachWeatherByCity(city: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.apiKey)
      .set('X-RapidAPI-Host', 'the-weather-api.p.rapidapi.com');
    const options = { headers };
    return this.http.get(`${this.apiUrl}/${city}`, options);
  }

}
