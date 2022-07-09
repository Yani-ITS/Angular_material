import { Component, OnInit } from '@angular/core';
import { Esmaltes } from './productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'
  ]
})
export class ProductosComponent implements OnInit {

  esmaltes= [
    {
    nombre: "Crema Proteder",
    precio: 1400,
    url: "https://optiumpodologia.com/wp-content/uploads/2021/03/proteder-plus-novo.jpg",
    disponibilidad: true ,
    descripcion: "Crema nutritiva y regeneradora, con antibiotico"
  },
  {
    nombre: "Crema CeroBac -Forte",
    precio: 1400,
    url: "https://optiumpodologia.com/wp-content/uploads/2021/03/cerobac-forte.jpg",
    disponibilidad: true,
    descripcion: "Crema con urea, queratoreguladora e hidratante"
  },
  {
    nombre: "Epidermax",
    precio: 1400,
    url: "https://optiumpodologia.com/wp-content/uploads/2021/03/epidermax.jpg",
    disponibilidad: true,
    descripcion: "Crema nutritiva y regeneradora, ideal para pie diabético"
  },
  {
    nombre: "Fung Talk Polvo",
    precio: 1200,
    url: "https://optiumpodologia.com/wp-content/uploads/2021/03/FUNG-TALK.jpg",
    disponibilidad: true,
    descripcion: "Talco con propiedades Antifungicas y Cicatrizantes"
  },
  {
    nombre: "Aero Fung Talk Polvo",
    precio: 1500,
    url: "https://optiumpodologia.com/wp-content/uploads/2021/03/AERO-FUNG-TALK-1.jpg",
    disponibilidad: true,
    descripcion: "Talco en aerosol. Antitranspirante, desodorante."
  },
  {
    nombre: "Locider",
    precio: 1800,
    url: "https://optiumpodologia.com/wp-content/uploads/2021/03/LOCIDER.jpg",
    disponibilidad: true,
    descripcion: "Loción descongestiva y resfrescante. 1 Lt."
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
