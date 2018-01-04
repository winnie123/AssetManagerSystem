"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = require("../filters/notfound");
const exception = require("../filters/exception");
let index = require('../controllers/index');
let users = require('../controllers/users');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
function injectBeforeRouters(app) {
    // TODO inject logger
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));// 设置静态文件地址
}
exports.injectBeforeRouters = injectBeforeRouters;
function injectRouters(app) {
    app.use('/', index);
    app.use('/users/', users);
}
exports.injectRouters = injectRouters;
function injectAfterRouters(app) {
    app.use(notFound.notFoundHandler);
    app.use(exception.exceptionHandler);
}
exports.injectAfterRouters = injectAfterRouters;
