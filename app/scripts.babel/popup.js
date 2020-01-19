'use strict';

console.log('\'Allo \'Allo! Popup');


const bitcore = require("bitcore-lib");
var privateKey = new bitcore.PrivateKey();
var publicKey = privateKey.toPublicKey();
var address = publicKey.toAddress();

console.log("Private Key: " +address + " Public Key: " + " Address: " + address);
