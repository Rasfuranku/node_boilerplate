'use strict';
/**
 * @author @rasfuranku
 */

 var ROUTES = require('./ROUTES').ROUTES();

class Route {
    constructor(app) {
        this.initializeEndpoints(app);
    }

    /**
     * @function initializeEndpoints
     * @param {Object} app Represent the express framework attributes.
     * @description Initialize end points
     */
    initializeEndpoints(app){
        //One endpoint
        app.get(ROUTES.routes, (req, res) => {
            console.log('I am in a route');
            res.send('route');
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