/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
const express = require('express');
const engine = require('consolidate');
// Consolidate contains all of the express view engines

// *** JUST SOME DUMMY DATA ***
const facts = [{text: "Life is Beautiful"},{text: "Life is Beautiful"},{text: "Life is Beautiful"},{text: "Life is Beautiful"},{text: "Life is Beautiful"}]
//*** NEVER MIND ***

// Setting server side app
const app = express();

// Creating engine for our handlebars
app.engine('hbs', engine.handlebars);
// Setting views folder
app.set('views', './views');
// Setting view engine
app.set('view engine', 'hbs');

// app.get('/timestamp',(request, response)=>{
//     response.send(`${Date.now()}`);
// });

// app.get('/timestamp-cached',(request, response)=>{

//     // We can cache the content on the CDN by setting the cache control header
//     // Cache-Control Header
//     //      a. public/private (We can actually cache these contents on a server/only on user's brwoser)
//     //      b. max-age (How long (s) we can store these contents in the user's browser)
//     //      c. s-maxage (How long (s) we can store these contents on the CDN)
//     response.set('Cache-Control', 'public, max-age=300, s-maxage=600');

//     response.send(`${Date.now()}`);
// });

app.get('/',(request, response)=>{
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    // Rendering index with those dummy data
    response.render('index', {facts});
});

app.get('/facts.json',(request, response)=>{
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.json(facts);
});

// Connecting server side app to the firebase
exports.app = functions.https.onRequest(app);
