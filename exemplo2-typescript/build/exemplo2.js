'use strict';
class UsuarioModel {
}
class CRUD {
    constructor() {
        this.items = [];
    }
    listar() {
        return this.items;
    }
    cadastrar(item) {
        this.items.push(item);
    }
}
class Funcionario extends CRUD {
}
let funcionario = new Funcionario();
funcionario.cadastrar({ dataNascimento: new Date(), idade: 13, nome: 'Erick' });
let result = funcionario.listar();
console.log('result', result);
