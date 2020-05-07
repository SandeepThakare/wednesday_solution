/* eslint-disable consistent-return */
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import indexRouter from './route';
import { baseURL, excludePath } from './common/constants';
import { validateToken } from './logic/auth';

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, '../public')));

app.use(async (req, res, next) => {
  if (!excludePath.includes(req.originalUrl)) {
    const headerToken = req.get('Authorization');
    if (headerToken) {
      const decodeResponse = await validateToken(headerToken);

      if (!decodeResponse.status) {
        return res.send(decodeResponse);
      }

      next();
    } else {
      return res.send({
        status: false,
        message: 'missing required authorization header',
      });
    }
  } else {
    next();
  }
});

app.use(baseURL, indexRouter);

// io.on('message', (data) => {
//     console.log('Message Called ---- ', data);
// })

export default app;
