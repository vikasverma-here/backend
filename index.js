const fs = require('fs');
const crypto = require('crypto');

crypto.pbkdf2("password", "salt", 700000, 50, 'sha512', (err,key) => {
    console.log("1-crypto pbkdf2") 
});
crypto.pbkdf2("password", "salt", 700000, 50, 'sha512', (err,key) => {
    console.log("2-crypto pbkdf2") 
});
crypto.pbkdf2("password", "salt", 700000, 50, 'sha512', (err,key) => {
    console.log("1-crypto pbkdf2") 
});
crypto.pbkdf2("password", "salt", 700000, 50, 'sha512', (err,key) => {
    console.log("2-crypto pbkdf2") 
});