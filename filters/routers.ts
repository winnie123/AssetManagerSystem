
import * as core from "express-serve-static-core";
import * as notFound from '../filters/notfound';
import * as exception from '../filters/exception';

let index = require('../controllers/index');
let users = require('../controllers/users');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

function injectBeforeRouters(app : core.Express):void{
    // TODO inject logger
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));// 设置静态文件地址
}

function injectRouters(app : core.Express):void{
    app.use('/',index);
    app.use('/users/',users);
}

function injectAfterRouters(app : core.Express) : void{
    app.use(notFound.notFoundHandler);
    app.use(exception.exceptionHandler);
}

export {
    injectBeforeRouters,
    injectRouters,
    injectAfterRouters
}