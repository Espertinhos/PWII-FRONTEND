import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Projeto } from '../model/projeto';
import { ProjetoApiService } from '../service/projeto-api.service';

@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {

  formProjeto: FormGroup;
  constructor(public formBuilder: FormBuilder, private service : ProjetoApiService) { }

  ngOnInit() {   
    this.formProjeto = this.formBuilder.group({
      Id : this.formBuilder.control(''),
      Nome : this.formBuilder.control(''),
      Orientadores : this.formBuilder.control(''),
      Sala : this.formBuilder.control(''),
      Turma : this.formBuilder.control('')
    })
  }
    


  onSalvar() {
    let projeto : Projeto = this.formProjeto.value;
    this.service.createProjeto(projeto)
        .subscribe(data => console.log(data),
                   error => console.log(error));
  }

}
