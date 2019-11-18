import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Projeto } from '../model/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {
  
  createProjeto(projeto: Projeto): Observable<Projeto> {
    //throw new Error("Method not implemented.");
    return this.httpClient.post<Projeto>(this.apiURL, projeto)
                          .pipe(retry(1),
                           catchError(this.handleError));
  }

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
