/* eslint-disable import/named */
/**
 * @desc the passport service module
 * @author sandeep thakare
 */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { TokenUtility } from '../common';
import auth from '../data_interaction/internal/queries';

/**
 * serialize the generated access token
 */
passport.serializeUser((token, done) => done(undefined, token));
/**
 * deserialize the generated token
 */
passport.deserializeUser((token, done) => {
  const payload = TokenUtility.decodeToken(token);
  done(undefined, payload);
});

passport.use('OnAuthenticate', new LocalStrategy(async (username, password, done) => {
  try {
    if (username && password) {
      /**
            * @todo call your authentication function here...
            * uncomment the below code and add your custom authentication
            */
      const { data, status } = await auth.checkValidUser({ username, password });

      if (data.length && status) {
        const user = { user: data[0], role: 'user' };
        done(undefined, { statusCode: 200, message: 'Authenticated', accessToken: TokenUtility.generateToken(user) });
      } else {
        done({ statusCode: 202, message: 'Username/password is incorrect', error: 'Unauthenticated' });
      }
    } else {
      done(null, false, { message: 'Missing required properties.' });
    }
  } catch (error) {
    console.log(error);
    done({ statusCode: 500, message: error.message });
  }
}));

/**
* @todo you can add as many passport services as you like.
* You can also include other login services like google, facebook etc login services
*/

passport.use('UserLogin', new LocalStrategy(async (username, password, done) => {
  try {
    if (username && password) {
      /**
            * @todo call your authentication function here...
            * uncomment the below code and add your custom authentication
            */
      const { data, status } = await auth.checkValidUser({ username, password });

      if (data.length && status) {
        const user = { user: data[0], role: 'user' };
        done(undefined, { statusCode: 200, message: 'Authenticated', accessToken: TokenUtility.generateToken(user) });
      } else {
        done({ statusCode: 202, message: 'Username or Password is incorrect', error: 'Unauthorized' });
      }
    } else {
      done(null, false, { message: 'Missing required properties.' });
    }
  } catch (error) {
    console.log(error);
    done({ statusCode: 500, message: error.message });
  }
}));

export const userLoginHandler = async (req, res, next) => {
  try {
    return new Promise((resolve, reject) => {
      passport.authenticate('UserLogin', (err, tokenResponse) => {
        if (tokenResponse) {
          resolve(tokenResponse);
        } else {
          reject(err);
        }
      })(req, res, next);
    });
  } catch (error) {
    return { statusCode: 500, message: error.message };
  }
};

export const validateToken = async (token) => {
  try {
    const decodeToken = await TokenUtility.decodeToken(token);

    if (new Date(decodeToken.exp).getTime() <= new Date().getTime()) {
      return {
        status: false,
        message: 'Token is expired',
      };
    }
    return {
      status: true,
      message: 'Valid Token',
    };
  } catch (error) {
    return { statusCode: 500, message: error.message };
  }
};

export default {
  passport,
  UserLoginHandler: userLoginHandler,
  validateToken,
};
