import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor( private http: HttpClient) { }

  summary(){

    let params = new HttpParams();
    params = params.append('client_id', '3');
    params = params.append('span', '30days');


    return this.http.get<any>(`${environment.apiUrl}/analytics/summary`, {params: params})
      .pipe(map(result => result));
  }
}
