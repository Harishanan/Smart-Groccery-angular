import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { AddProductResponse } from '../model/add-product-response.model';
import { ProductResponse } from '../model/product-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'https://host1.open.uom.lk/';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  };

  addProduct(product: Product){
    return this.http.post<AddProductResponse>(
      this.baseURL + 'api/products',
      product,
      this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse>{
    return this.http.get<ProductResponse>(this.baseURL + 'api/products')
  }  
}
