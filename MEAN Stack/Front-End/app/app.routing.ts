import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product/list/list.component';
import { ProductAddComponent } from './components/product/add/add.component';
import { ProductEditComponent } from './components/product/edit/edit.component';

const routes: Routes = [
	{ path: '', component: ProductListComponent }, 
    { path: 'list', component: ProductListComponent },
    { path: 'add', component: ProductAddComponent },
    { path: 'edit', component: ProductEditComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);


