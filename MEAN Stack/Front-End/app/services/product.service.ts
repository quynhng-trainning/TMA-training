import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
	
    private BASE_URL: string = "http://localhost:3000/api/product/";
    
	constructor (
		private http: Http
	) {}
	
	findAll() {	
		return this.http.get(this.BASE_URL + 'find_all').map((res:Response) => res.json());		
	}

	find(id: string) {	
		return this.http.get(this.BASE_URL + 'find/' + id).map((res:Response) => res.json());		
	}
    
    create(product: any) {	
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify(product);
		return this.http.post(this.BASE_URL + 'create', body, options).map((res:Response) => res.json());	
	}

	update(id: string, product: any) {	
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify(product);
		return this.http.put(this.BASE_URL + 'update/' + id, body, options).map((res:Response) => res.json());	
	}
	
	delete(id: string) {
		return this.http.delete(this.BASE_URL + 'delete/' + id).map((res:Response) => res.json());
	}
	
}