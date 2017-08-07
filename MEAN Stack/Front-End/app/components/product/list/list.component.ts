import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../entities/product.entities';

import { ProductService } from '../../../services/product.service';

@Component({
	moduleId: module.id,
	templateUrl: 'list.component.html'
})

export class ProductListComponent implements OnInit {
	
    products: Product[];
    
	constructor(
        public productService: ProductService
       ) {		
	}
	
	ngOnInit() {
		this.productService.findAll().subscribe(data => this.products = data);
	}
	
	delete(id: string) {
		var result = confirm('Are you sure?');
		if(result) {
			this.productService.delete(id).subscribe(data => {
				this.productService.findAll().subscribe(data => this.products = data);
			});
		}
	}
	
	
}




