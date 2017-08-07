"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var product_service_1 = require("../../../services/product.service");
var ProductEditComponent = (function () {
    function ProductEditComponent(formBuilder, productService, activatedRoute) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        this.id = params.id;
        this.productService.find(params.id).subscribe(function (product) {
            _this.productForm = _this.formBuilder.group({
                name: [product.name, [forms_1.Validators.required]],
                price: [product.price, [forms_1.Validators.required]],
                status: [product.status]
            });
        });
    };
    ProductEditComponent.prototype.save = function (event) {
        this.productService.update(this.id, this.productForm.value).subscribe(function (data) {
            alert('Success');
        });
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'edit.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        product_service_1.ProductService,
        router_1.ActivatedRoute])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=edit.component.js.map