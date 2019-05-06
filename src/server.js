import path from "path";
import express from "express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const port = 4000;

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controller/authController')(app);
require('./controller/projectController')(app);
require('./api/index')(app);

app.listen(port, () => console.log(`started on port: ${port}`));