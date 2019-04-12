var request = require('superagent');
var Promise = require('es6-promise').Promise; // jshint ignore:line

/**
 * Wrapper for calling a API
 */
var Api = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            request
       // .get("http://"+window.location.hostname+":8080/SecondRestApi" + url)
	    .get("http://192.168.1.159:8080/SecondRestApi" + url)
        .end(function (res) {
              if (res.status === 404) {
                reject();
            } else {
                resolve(JSON.parse(res.text));
            }
        });
        });
    }
};

module.exports = Api;
