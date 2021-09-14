import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  public lista = {
                   persona1: "finn", 
                   persona2:  "han", 
                   persona3: "rey", 
                   persona4: "luke", 
                   index: [1,2,3,4], 
                   descripcion: "Esto es una descripcion"
                  }

  constructor() { }

  ngOnInit() {
  }

}
