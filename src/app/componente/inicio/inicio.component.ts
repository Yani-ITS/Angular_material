import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  service = new FormControl('')
  lista_servicios= ['Capping', 'Soft Gel', 'Belleza de Pies', 'Podocosmiatría'];

  constructor() { }

  ngOnInit(): void {
  }

}
