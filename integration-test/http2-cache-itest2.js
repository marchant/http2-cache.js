if (typeof exports !== 'undefined') {
    if (typeof XMLHttpRequest === 'undefined') {
        XMLHttpRequest = require("xhr2").XMLHttpRequest;
    }
    if (typeof WebSocket === 'undefined') {
        WebSocket = require('websocket').w3cwebsocket;
    }
} else {
    XMLHttpRequest = Window.XMLHttpRequest;
    WebSocket = Window.WebSocket;
}
var sinon = require('sinon');
var chai = require('chai');
require("../lib/http2-proxy");

describe('http2-proxy', function () {

    // TODO consider doing browser testing
    // if (browserConfig) {
    //     browserConfig.origin('http://localhost:8080').addResource("http://chaijs.com/chai.js");
    // }

    it('end.to.end.http2.cache', function (done) {
        XMLHttpRequest.proxy(["http://localhost:8080"], function(){
            console.log("got callback!");
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        done();
                    }
                }
            };
            xhr.open('GET', "http://localhost:8080/scores", true);
            xhr.send(null);
        });
    });

});
