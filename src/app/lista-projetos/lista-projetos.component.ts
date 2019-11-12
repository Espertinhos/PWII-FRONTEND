import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoApiService } from '../service/projeto-api.service';
import { Projeto } from '../model/projeto';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
projetos : Projeto[];
  constructor(private raiter : Router,
              private service : ProjetoApiService) { }

  ngOnInit() {
      this.service.getProjetos()
                  .subscribe((dados : Projeto[]) => this.projetos = dados,
                              error => console.log(error)); 
  }
  detalhes(id : number){
    this.raiter.navigate(['detalheprojeto',id]);
  }
}
