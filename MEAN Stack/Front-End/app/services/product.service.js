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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000/api/product/";
    }
    ProductService.prototype.findAll = function () {
        return this.http.get(this.BASE_URL + 'find_all').map(function (res) { return res.json(); });
    };
    ProductService.prototype.find = function (id) {
        return this.http.get(this.BASE_URL + 'find/' + id).map(function (res) { return res.json(); });
    };
    ProductService.prototype.create = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(product);
        return this.http.post(this.BASE_URL + 'create', body, options).map(function (res) { return res.json(); });
    };
    ProductService.prototype.update = function (id, product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(product);
        return this.http.put(this.BASE_URL + 'update/' + id, body, options).map(function (res) { return res.json(); });
    };
    ProductService.prototype.delete = function (id) {
        return this.http.delete(this.BASE_URL + 'delete/' + id).map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map