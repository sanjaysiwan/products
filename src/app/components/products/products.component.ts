import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productForm:FormGroup;
  products = ['Apparels', 'Mobile Phones',
            'Books', 'Footwear', 'Food Items'];

    constructor(){
        this.productForm = new FormGroup({
            product_id:new FormControl(null, Validators.required),
            product_name: new FormControl(null, Validators.required),
            product_categorie: new FormControl(null, Validators.required),
            avail_quant: new FormControl(null, Validators.required),
            product_descrip: new FormControl(null, Validators.required)
        });
    }

  ngOnInit() {
  }

}
