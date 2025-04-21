import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  productForm! : FormGroup;
  isDataUploading : boolean = false;


  constructor(private fb: FormBuilder,
    private productService: ProductService
  ){}

  ngOnInit(): void{
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      expiredDate: ['', Validators.required],
      manufacturedDate: ['', Validators.required],
      batchNumber: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(50)]],
      createdDate: ['', Validators.required],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit(){
    const values = this.productForm.value as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res) =>{
      debugger;
      this.isDataUploading = false;
      this.productForm.reset();
    });
  }
}
  


  
  /* ngOnInit(): void{
    alert("ngOnInit called.");
    console.log("triggered ngOnInit");
  }

  ngAfterContentInit(){
    console.log("triggered ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("triggere ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("triggered ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("triggered ngAfterViewChecked");
  }

  ngOnDestroy(){
    alert("ngDestroy Called");
    console.log("triggered ngOnDestry");
  } */
