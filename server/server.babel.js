import path from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import graphQLHTTP from 'express-graphql';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import {
  setupReducers,
  renderHTMLString,
} from '@sketchpixy/rubix/lib/node/redux-router';
import RubixAssetMiddleware from '@sketchpixy/rubix/lib/node/RubixAssetMiddleware';

import mongoose from 'mongoose';

import schema from './db/schema.js';

import signup from './db/routes/signup.js';

import reducers from '../src/redux/reducers/reducers';
setupReducers(reducers);

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gottems');

mongoose.connection.on('error', console.error.bind(console, 'Connection error!'));

let app = express();
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.urlencoded({extended: true, limit: '25mb'}))
app.use(bodyParser.json({limit: '25mb', extended: true}))
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

app.use('/signup', signup);

function renderHTML(req, res) {
  renderHTMLString(App, req, (error, redirectLocation, data) => {
    if (error) {
      if (error.message === 'Not found') {
        res.status(404).send(error.message);
      } else {
        res.status(500).send(error.message);
      }
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else {
      res.render('index', {
        content: data.content,
        data: JSON.stringify(data.data).replace(/\//g, '\\/')
      });
    }
  });
}

// graphQL stuff, figure out how to use later

/*
app.use('/graphql', graphQLHTTP({
  schema,
  pretty: true,
  graphiql: true,
})); */

app.get('*', RubixAssetMiddleware('ltr'), (req, res, next) => {
  renderHTML(req, res);
});

app.listen(port, () => {
  console.log(`Node.js app is running at http://localhost:${port}/`);
});
