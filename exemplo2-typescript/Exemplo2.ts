'use strict';
class UsuarioModel {
    public nome: string;
    public idade: number;
    public dataNascimento: Date;
}

interface ICRUD<TModel> {
    listar(): TModel[];
    cadastrar(item: TModel): void;
}

interface IUsuario<TModel> extends ICRUD<TModel> {
}

class CRUD<TModel> implements IUsuario<TModel> {
    private items: TModel[] = [];
    listar(): TModel[] {
        return this.items;
    }
    cadastrar(item: TModel) {
        this.items.push(item);
    }
}

class Funcionario extends CRUD<UsuarioModel> {

}


let funcionario = new Funcionario();
funcionario.cadastrar(<UsuarioModel>{ dataNascimento: new Date(), idade: 13, nome: 'Erick' });
let result = funcionario.listar();
console.log('result', result);