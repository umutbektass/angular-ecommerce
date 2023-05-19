import { Component } from '@angular/core';
import { ProductRepository } from './ProductRepository';
import { Product } from 'src/app/models/Product';



@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

veri:string;

 veriyazdir(){
this.veri="Alta componetten geldim"
return console.log(this.veri)
}
product:Product[];
  productRepository:ProductRepository;

constructor(){
  this.productRepository = new ProductRepository;
  this.product = this.productRepository.getAllPost();
}
}
