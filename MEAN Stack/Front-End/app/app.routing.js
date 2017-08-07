"use strict";
var router_1 = require("@angular/router");
var list_component_1 = require("./components/product/list/list.component");
var add_component_1 = require("./components/product/add/add.component");
var edit_component_1 = require("./components/product/edit/edit.component");
var routes = [
    { path: '', component: list_component_1.ProductListComponent },
    { path: 'list', component: list_component_1.ProductListComponent },
    { path: 'add', component: add_component_1.ProductAddComponent },
    { path: 'edit', component: edit_component_1.ProductEditComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map