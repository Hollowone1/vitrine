import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';
import 'localstorage-polyfill';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
const domino = require('domino');
const cookieParser = require('cookie-parser');

import { environment } from './src/environments/environment';
const auth = require('./htpasswd');

// import forceSSL from 'heroku-ssl-redirect';


// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  if (environment.secureAccess)
    server.use(auth);
  server.use(cookieParser()); // cookie parser middleware, to get an easy access to cookies data
  server.use(compression());
  let distFolder = '';
  if (environment.production && !environment.heroku)
    distFolder = '/var/www/vhosts/idnet.co/httpdocs/browser';
  else
    distFolder = join(process.cwd(), 'dist/idnet/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // make window and document objects accesible from server side rendering
  const window = domino.createWindow(indexHtml);
  global['window'] = window;
  global['document'] = window.document;
  global['localStorage'] = localStorage;

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        { provide: REQUEST, useValue: req },
        { provide: RESPONSE, useValue: res },
      ],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';