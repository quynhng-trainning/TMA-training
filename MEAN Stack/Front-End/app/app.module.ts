import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ProductService } from './services/product.service';

import { routing } from './app.routing';

import { ProductListComponent } from './components/product/list/list.component';
import { ProductAddComponent } from './components/product/add/add.component';
import { ProductEditComponent } from './components/product/edit/edit.component';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
		FormsModule,
        ReactiveFormsModule ,
        HttpModule,
        routing
    ],
    declarations: [
		AppComponent,
        ProductListComponent,
        ProductAddComponent,
        ProductEditComponent
    ],
    providers: [		
        ProductService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }