const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'auth/bad-token', message: 'No token provided' });

    const parts = authHeader.split(' ');

    if (!parts === 2)
        return res.status(401).send({ error: 'auth/bad-token', message: 'Token error' });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'auth/bad-token', message: 'Bad format' });

    jwt.verify(token, authConfig.hashCodeSecret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'auth/bad-token', message: 'Invalid token' });
        
        req.test = decoded.id;

        return next();
    });
};