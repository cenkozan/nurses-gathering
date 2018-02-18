"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var path = require("path");
var routes_1 = require("./routes");
var app = express();
exports.app = app;
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// const uristring = process.env.MONGODB_URI || 'mongodb://heroku_b5c981xq:s1u79ld0j7kcrd0cu8b9i6di7f@ds239988.mlab.com:39988/heroku_b5c981xq';
// mongoose.createConnection(uristring, function (err, response) {
//   if (err) {
//     console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   } else {
routes_1.default(app);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
if (!module.parent) {
    app.listen(app.get('port'), function () {
        console.log('Angular Full Stack listening on port ' + app.get('port'));
    });
}
//# sourceMappingURL=app.js.map