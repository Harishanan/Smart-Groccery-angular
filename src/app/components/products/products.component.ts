import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {

  public showAddProduct !: boolean;
  public isRowSelected !: boolean;
  public rowIndex !: number;
  public products : Product[]=[];
  public isLoading : boolean = false;
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void{
    this.getProducts();
  }

  /*public products =[{
    'productId' : "001",
    'productName' : "White Basmathi Rice",
    'createdDate' : "01.01.2025",
    'unitPrice' : "400",
    'quantity' : 100,
    'productDescription' : "White Basmathi rice improted from Paksitan" 
  },
  {
    'productId' : "002",
    'productName' : "Flour",
    'createdDate' : "01.04.2025",
    'unitPrice' : "190",
    'quantity' : 50,
    'productDescription' : "Super fine whole grain general purpsoe flour" 
  },
  {
    'productId' : "003",
    'productName' : "Sugar",
    'createdDate' : "02.02.2025",
    'unitPrice' : "200",
    'quantity' : 1200,
    'productDescription' : "White sugar manufactured by Palwatte Factory" 
  },
  {
    'productId' : "004",
    'productName' : "Dhal",
    'createdDate' : "03.02.2025",
    'unitPrice' : "200",
    'quantity' : 10,
    'productDescription' : "Imported mysoor dhaal drom India" 
  }]*/

    /* public firstProductItemName ="White Basmathi Rice";

  public getPriceofRice(){
    return 350;
  } */

  public selectProduct(selectedRow: number){
    this.isRowSelected = true;
    this.rowIndex = selectedRow
  }

  public showAddProducts(){
    this.showAddProduct =  true;
  }

  public hideAddProducts(){
    this.showAddProduct = false;
  }

  refresh(){
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) =>{
      this.products = res.data;
      this.isLoading = false;
    })
  }

}
