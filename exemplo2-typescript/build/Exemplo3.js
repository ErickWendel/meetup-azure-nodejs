'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class Product {
    constructor() {
        this.products = [];
    }
    listar() {
        return new Promise((resolve, reject) => {
            resolve(this.products);
        });
    }
    cadastrar() {
        return new Promise((resolve, reject) => {
            this.products.push({ descricao: 'Teste', valor: 12 });
            return resolve(true);
        });
    }
}
class Service {
    constructor() {
        this.product = new Product();
    }
    executar() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.product.cadastrar();
            const items = yield this.product.listar();
            return items;
        });
    }
}
class Init {
    static run() {
        const result = new Service();
        result.executar().then(resultado => {
            console.log(resultado);
        });
    }
}
Init.run();
