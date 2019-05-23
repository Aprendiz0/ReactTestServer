const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');
const serverUtils = require('../serverUtils')

module.exports = (req, res, next) => {

    /*
    There is no way to delete a cookie according to the HTTP specification. To effectively "delete" a cookie, you set the expiration date to some date in the past. Essentially, this would result in the following for you (according to the cookies module documentation):
    
    cookies.set('testtoken', {maxAge: Date.now()});
    Or according to the HTTP specification:
    
    cookies.set('testtoken', {expires: Date.now()});
    */

    const authHeader = req.cookies.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'auth/bad-token', message: 'No token provided' });

    const parts = authHeader.split(' ');

    if (!parts === 2)
        return res.status(401).send({ error: 'auth/bad-token', message: 'Token error' });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'auth/bad-token', message: 'Bad format' });

    jwt.verify(token, authConfig.hashCodeSecret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'auth/bad-token', message: 'Invalid token' });

        serverUtils.renewToken(res, { userId: decoded.userId });

        req.userId = decoded.userId;

        return next();
    });
};