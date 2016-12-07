'use strict';
import * as Hapi from 'hapi';
import ProductController from './controllers/ProductController';
import { Database } from './database/Database';
import * as Bluebird from 'bluebird';
import mongoose = require('mongoose');
mongoose.Promise = Bluebird;
class Index {
    private _productController: ProductController;
    constructor() {
        this._productController = new ProductController();
    }
    init() {
        const server = new Hapi.Server();
        server.connection({ port: 3000 });
        server.route(this.routes());
        server.start(() => {
            console.log('Servidor iniciado!');
        });
        new Database().connect();
    }

    routes(): Hapi.IRouteConfiguration[] {
        var listRoute = <Hapi.IRouteConfiguration>{
            handler: (req, reply) => {
                return reply(this._productController.list());
            },
            method: 'GET',
            path: '/products'

        };
        var createRoute = <Hapi.IRouteConfiguration>{
            handler: (req, reply) => {
                return reply(this._productController.create());
            },
            method: 'POST',
            path: '/products'

        };
        return [listRoute, createRoute];
    }
}

new Index().init();