import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:Producto[]=[
    {idproducto:1,nomproducto:"aceite",precio:5,cantidad:100},
    {idproducto:2,nomproducto:"leche",precio:3,cantidad:200},
    {idproducto:3,nomproducto:"arroz",precio:50,cantidad:300},
    {idproducto:4,nomproducto:"azucar",precio:60,cantidad:400}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
