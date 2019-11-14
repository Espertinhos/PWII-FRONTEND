import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Projeto } from '../model/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {

  apiURL: string = "/proxy/Projetos";

  constructor( private httpClient: HttpClient) { }

  handleError(error) {
    let errorMessage = `Código de error: ${error.status}\nMensagem: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage); 
  }    

  getProjetos() : Observable<Projeto[]> {
    return this.httpClient.get<Projeto[]>(this.apiURL)
                          .pipe(retry(1),
                           catchError(this.handleError))
  }

}
