'use strict';

class Service {
    constructor(){}

    firstService(data){
        return new Promise((success, reject) => {
            var sayHi = "Hello " + data;
            success(sayHi);
        })
    }
}

module.exports = Service;