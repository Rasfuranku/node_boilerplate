'use strict';
/**
 * @author @rasfuranku
 */

 var ROUTES = require('./ROUTES').ROUTES();
 var Service = require('../services/service');

class Route {
    constructor(app) {
        this.initializeEndpoints(app);
        this.service = new Service();
    }

    /**
     * @function initializeEndpoints
     * @param {Object} app Represent the express framework attributes.
     * @description Initialize end points
     */
    initializeEndpoints(app){
        //One endpoint
        app.get(ROUTES.routes, (req, res) => {
            console.log(req);
            this.service.firstService(req.query.name).then((data) => {
                return res.send(data);
            }, (err) => {
                return res.status(err.code).send(err);
            })
        });
        
        //By group
        app.route('/groups')
            .get(function (req, res) {
                res.send("get groups");
            })
            .post(function(req, resp){
                resp.send("post groups");
            })
    }

}

module.exports = Route;