import path from "path";
import express from "express";
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controller/authController')(app);
require('./controller/projectController')(app);
require('./api/index')(app);

app.listen(4000);