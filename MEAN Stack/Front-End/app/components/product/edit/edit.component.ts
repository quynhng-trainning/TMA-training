import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../entities/product.entities';

import { ProductService } from '../../../services/product.service';

@Component({
	moduleId: module.id,
	templateUrl: 'edit.component.html'
})

export class ProductEditComponent implements OnInit {

	productForm: any;
	id: string;

	constructor(
		private formBuilder: FormBuilder,
		private productService: ProductService,
		private activatedRoute: ActivatedRoute
	) {
	}

	ngOnInit() {
		let params: any = this.activatedRoute.snapshot.params;
		this.id = params.id;
		this.productService.find(params.id).subscribe(product => {
			this.productForm = this.formBuilder.group({
				name: [product.name, [Validators.required]],
				price: [product.price, [Validators.required]],
				status: [product.status]
			});
		});  
	}

	save(event: any) {
		this.productService.update(this.id, this.productForm.value).subscribe(data => {
			
		});
	}



}




