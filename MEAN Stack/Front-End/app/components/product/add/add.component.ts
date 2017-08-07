import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../entities/product.entities';

import { ProductService } from '../../../services/product.service';

@Component({
	moduleId: module.id,
	templateUrl: 'add.component.html'
})

export class ProductAddComponent implements OnInit {

	productForm: any;

	constructor(
		private formBuilder: FormBuilder,
		private productService: ProductService,
		private router: Router
	) {
	}

	ngOnInit() {
		this.productForm = this.formBuilder.group({
			name: ['', [Validators.required]],
			price: [0, [Validators.required]],
			status: [true]
		});
	}

	save(event: any) {
		this.productService.create(this.productForm.value).subscribe(data => {
			alert('Success');
		});
	}



}




