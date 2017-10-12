webpackJsonp(["main"],{

/***/ "../../../../../client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">About</h4>\n  <div class=\"card-block\">\n    <ul>\n      <li><b>Author:</b> <a href=\"https://github.com/cenkozan\" target=\"_blank\">Cenk Ozan Kahraman </a>of Too Good Application Solutions Ltd.</li>\n      <li><b>Project:</b> Nurses Gathering - Weekly planning, tracking, and billing software for Dromm Healthcare Ltd.</li>\n      <li><b>GitHub:</b> <a href=\"https://github.com/cenkozan/nurses-gathering\" target=\"_blank\">project repository</a></li>\n      <li><b>Basic Functionality Implementation</b></li>\n      <li><b>Might not reflect the whole project</b></li>\n      <li><b>This project uses the MEAN stack:</b></li>\n      <ul>\n        <li><a href=\"http://www.mongoosejs.com\" target=\"_blank\"><b>M</b>ongoose.js</a> (<a href=\"https://www.mongodb.com\" target=\"_blank\">MongoDB</a>)</li>\n        <li><a href=\"http://www.expressjs.com\" target=\"_blank\"><b>E</b>xpress.js</a></li>\n        <li><a href=\"https://www.angular.io\" target=\"_blank\"><b>A</b>ngular 2+</a></li>\n        <li><a href=\"https://www.nodejs.org\" target=\"_blank\"><b>N</b>ode.js</a></li>\n      </ul>\n      <li><b>Other tools and technologies used:</b></li>\n      <ul>\n        <li><a href=\"https://cli.angular.io\" target=\"_blank\">Angular CLI</a></li>\n        <li><a href=\"http://www.getbootstrap.com\" target=\"_blank\">Bootstrap</a></li>\n        <li><a href=\"http://www.fontawesome.io\" target=\"_blank\">Font Awesome</a></li>\n        <li><a href=\"https://jwt.io\" target=\"_blank\">JSON Web Token</a></li>\n        <li><a href=\"https://github.com/auth0/angular2-jwt\" target=\"_blank\">Angular 2 JWT</a></li>\n        <li><a href=\"https://github.com/dcodeIO/bcrypt.js\" target=\"_blank\">Bcrypt.js</a></li>\n        <li><a href=\"https://fullcalendar.io\" target=\"_blank\">Full Calendar</a></li>\n        <li><a href=\"https://developers.google.com/maps/\" target=\"_blank\">Google Maps API</a></li>\n      </ul>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../client/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../client/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../client/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Account settings</h4>\n  <div class=\"card-block\">\n    <form #accountForm=\"ngForm\" (ngSubmit)=\"save(user)\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" [(ngModel)]=\"user.role\">\n          <option value=\"\" disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!accountForm.form.valid\">\n        <i class=\"fa fa-save\"></i> Save\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.user = {};
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.auth.currentUser).subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AccountComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.editUser(user).subscribe(function (res) { return _this.toast.setMessage('account settings saved!', 'success'); }, function (error) { return console.log(error); });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../client/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../client/app/account/account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Registered users ({{users.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Username</th>\n          <th>Email</th>\n          <th>Role</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"users.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no registered users.</td>\n        </tr>  \n      </tbody>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.username}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.role}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </td>\n        </tr>  \n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).subscribe(function (data) { return _this.toast.setMessage('user deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getUsers(); });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../client/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../client/app/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <nav class=\"navbar navbar-dark bg-primary\">\n    <div class=\"nav navbar-nav\">\n      <a routerLink=\"/\" class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <i class=\"fa fa-home\"></i> Home\n      </a>\n      <!--<a routerLink=\"/cats\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n        <!--<i class=\"fa fa-list\"></i> Cats-->\n      <!--</a>-->\n      <a routerLink=\"/clients\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-list\"></i> Clients\n      </a>\n      <a routerLink=\"/carers\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-list\"></i> Carers\n      </a>\n      <a routerLink=\"/planning\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-list\"></i> Planning\n      </a>\n      <a routerLink=\"/reports\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-list\"></i> Reports\n      </a>\n      <a routerLink=\"/billing\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-list\"></i> Billing\n      </a>\n      <!--<a routerLink=\"/tracking\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">-->\n        <!--<i class=\"fa fa-list\"></i> Tracking-->\n      <!--</a>-->\n      <a routerLink=\"/login\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n        <i class=\"fa fa-sign-in\"></i> Login\n      </a>\n      <a routerLink=\"/register\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n        <i class=\"fa fa-user-plus\"></i> Register\n      </a>\n      <a routerLink=\"/account\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-user\"></i> Account ({{auth.currentUser.username}})\n      </a>\n      <a routerLink=\"/admin\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn && auth.isAdmin\">\n        <i class=\"fa fa-lock\"></i> Admin\n      </a>\n      <a routerLink=\"/logout\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-sign-out\"></i> Logout\n      </a>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_module__ = __webpack_require__("../../../../../client/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__clients_clients_component__ = __webpack_require__("../../../../../client/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__carers_carers_component__ = __webpack_require__("../../../../../client/app/carers/carers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_carer_service__ = __webpack_require__("../../../../../client/app/services/carer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__planning_planning_component__ = __webpack_require__("../../../../../client/app/planning/planning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__reports_reports_component__ = __webpack_require__("../../../../../client/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__billing_billing_component__ = __webpack_require__("../../../../../client/app/billing/billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tracking_tracking_component__ = __webpack_require__("../../../../../client/app/tracking/tracking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_appointment_service__ = __webpack_require__("../../../../../client/app/services/appointment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__cats_cats_component__["a" /* CatsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_19__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_20__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_21__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_22__clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__carers_carers_component__["a" /* CarersComponent */],
            __WEBPACK_IMPORTED_MODULE_26__planning_planning_component__["a" /* PlanningComponent */],
            __WEBPACK_IMPORTED_MODULE_27__reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__billing_billing_component__["a" /* BillingComponent */],
            __WEBPACK_IMPORTED_MODULE_29__tracking_tracking_component__["a" /* TrackingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["InputMaskModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["SelectButtonModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["ScheduleModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["GMapModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["ChartModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */],
            __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */],
            __WEBPACK_IMPORTED_MODULE_7__services_cat_service__["a" /* CatService */],
            __WEBPACK_IMPORTED_MODULE_8__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_25__services_carer_service__["a" /* CarerService */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_30__services_appointment_service__["a" /* AppointmentService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/billing/billing.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <p-calendar [(ngModel)]=\"startDate\" name=\"start\" id=\"start\" dateFormat=\"yy-mm-dd\">\n  </p-calendar>\n  <p-calendar [(ngModel)]=\"endDate\" name=\"end\" id=\"end\" dateFormat=\"yy-mm-dd\">\n  </p-calendar>\n  <button type=\"submit\" pButton icon=\"fa-caret-right\" (click)=\"generateBills()\" label=\"Generate Bills\"></button>\n  <h2>Clients</h2>\n  <p-dataTable [immutable]=\"false\" [value]=\"carerBills\">\n    <p-column field=\"userName\" header=\"User Name\"></p-column>\n    <p-column field=\"hours\" header=\"Hours\"></p-column>\n    <p-column field=\"rate\" header=\"Rate\"></p-column>\n    <p-column field=\"total\" header=\"Amount\"></p-column>\n  </p-dataTable>\n  <p></p>\n  <h2>Carers</h2>\n  <p-dataTable [immutable]=\"false\" [value]=\"clientBills\">\n    <p-column field=\"userName\" header=\"User Name\"></p-column>\n    <p-column field=\"hours\" header=\"Hours\"></p-column>\n    <p-column field=\"rate\" header=\"Rate\"></p-column>\n    <p-column field=\"total\" header=\"Amount\"></p-column>\n  </p-dataTable>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/billing/billing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/billing/billing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_carer_service__ = __webpack_require__("../../../../../client/app/services/carer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_appointment_service__ = __webpack_require__("../../../../../client/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_model__ = __webpack_require__("../../../../../client/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BillingComponent = (function () {
    function BillingComponent(carerService, clientService, toast, cd, appointmentService) {
        this.carerService = carerService;
        this.clientService = clientService;
        this.toast = toast;
        this.cd = cd;
        this.appointmentService = appointmentService;
        this.isLoading = false;
        this.startDate = new Date();
        this.endDate = new Date();
    }
    BillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointmentService.getAppointments().subscribe(function (data) { return _this.appointments = data; }, function (error) { return console.log(error); });
        this.clientService.getClients().subscribe(function (data) { return _this.clients = data; }, function (error) { return console.log(error); });
        this.carerService.getCarers().subscribe(function (data) { return _this.carers = data; }, function (error) { return console.log(error); });
        this.clientBills = [];
        this.carerBills = [];
        this.appointmentsInRange = [];
    };
    BillingComponent.prototype.generateBills = function () {
        var _this = this;
        console.log(this.appointments);
        console.log(this.startDate, this.endDate);
        this.appointments.forEach(function (appointment) {
            // if (moment(appointment.start).isAfter(this.startDate) && moment(appointment.end).isBefore(this.endDate)) {
            if (__WEBPACK_IMPORTED_MODULE_6_moment__(appointment.start).isAfter(_this.startDate) && __WEBPACK_IMPORTED_MODULE_6_moment__(appointment.end).isBefore(_this.endDate)) {
                _this.appointmentsInRange.push(appointment);
            }
        });
        // this.appointmentsInRange = this.appointments.filter( ap => ap.start >= this.startDate && ap.end <= this.endDate);
        console.log(this.appointmentsInRange);
        // for clients
        this.appointmentsInRange.forEach(function (a) {
            if (a.allDay) {
                _this.clientBills.push(new __WEBPACK_IMPORTED_MODULE_5__data_model__["b" /* Bill */](_this.findClientUserName(a.client), 8, a.rate, 8 * a.rate, false));
                _this.carerBills.push(new __WEBPACK_IMPORTED_MODULE_5__data_model__["b" /* Bill */](_this.findCarerUserName(a.client), 8, a.rate, 8 * a.rate, true));
            }
            else {
                var endDay = __WEBPACK_IMPORTED_MODULE_6_moment__(a.end);
                var startDay = __WEBPACK_IMPORTED_MODULE_6_moment__(a.start);
                if (endDay.isAfter(startDay)) {
                    var dayDiff = endDay.diff(startDay, 'day');
                    console.log('dayDiff: ', dayDiff);
                    var hourDiff = endDay.hours() - startDay.hours();
                    console.log('hourDiff: ', hourDiff);
                    _this.clientBills.push(new __WEBPACK_IMPORTED_MODULE_5__data_model__["b" /* Bill */](_this.findClientUserName(a.client), (dayDiff + 1) * hourDiff, a.rate, (dayDiff + 1) * hourDiff * a.rate, false));
                    _this.carerBills.push(new __WEBPACK_IMPORTED_MODULE_5__data_model__["b" /* Bill */](_this.findCarerUserName(a.carer), (dayDiff + 1) * hourDiff, a.rate, (dayDiff + 1) * hourDiff * a.rate, true));
                }
            }
        });
        console.log('done');
        console.log(this.clientBills);
        console.log(this.carerBills);
        this.cd.detectChanges();
    };
    BillingComponent.prototype.findCarerUserName = function (_id) {
        var x = this.carers.filter(function (c) { return c._id === _id; });
        if (x.length > 0) {
            return x[0].userName;
        }
    };
    BillingComponent.prototype.findClientUserName = function (_id) {
        var x = this.clients.filter(function (c) { return c._id === _id; });
        if (x.length > 0) {
            return x[0].userName;
        }
    };
    return BillingComponent;
}());
BillingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-billing',
        template: __webpack_require__("../../../../../client/app/billing/billing.component.html"),
        styles: [__webpack_require__("../../../../../client/app/billing/billing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_carer_service__["a" /* CarerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_carer_service__["a" /* CarerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_appointment_service__["a" /* AppointmentService */]) === "function" && _e || Object])
], BillingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=billing.component.js.map

/***/ }),

/***/ "../../../../../client/app/carers/carers.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current carers ({{carers.length}})</h4>\n  <button type=\"button\" style=\"margin: 10px 20px;\" class=\"btn\" data-toggle=\"modal\" data-target=\"#addCarerModal\">\n    <i class=\"fa fa-plus-circle fa-4x\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n      <tr>\n        <th>Names</th>\n        <th>Surname</th>\n        <th>Phone Number</th>\n        <th>Email</th>\n        <th>Gender</th>\n        <th>Date of Birth</th>\n        <th>Address</th>\n        <th>User Name</th>\n        <th>Actions</th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"carers.length === 0\">\n      <tr>\n        <td style=\"text-align: center;\" colspan=\"9\">There are no carers in the system. Add a new carer.</td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n      <tr *ngFor=\"let carer of carers\">\n        <td>{{carer.names}}</td>\n        <td>{{carer.surname}}</td>\n        <td>{{carer.phoneNumber}}</td>\n        <td>{{carer.email}}</td>\n        <td>{{carer.gender}}</td>\n        <td>{{carer.dob | date: 'dd MMM yyyy'}}</td>\n        <td>{{carer.address}}</td>\n        <td>{{carer.userName}}</td>\n        <td>\n          <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(carer)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCarer(carer)\"><i class=\"fa fa-trash\"></i> Delete</button>\n        </td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n      <tr>\n        <td colspan=\"9\">\n          <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editCarer(carer)\" style=\"display:inline\">\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"carer.names\" placeholder=\"Names\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"surname\" [(ngModel)]=\"carer.surname\" placeholder=\"Surname\">\n            </div>\n            <div class=\"form-group\">\n              <p-inputMask class=\"form-control\" name=\"phoneNumber\" [(ngModel)]=\"carer.phoneNumber\" mask=\"9999-999999\" placeholder=\"Phone Number\"></p-inputMask>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"carer.email\" placeholder=\"Email\">\n            </div>\n            <div class=\"form-group\">\n              <p-selectButton [options]=\"genders\" class=\"form-control\" name=\"gender\" [(ngModel)]=\"carer.gender\" placeholder=\"Gender\"></p-selectButton>\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" [rows]=\"5\" name=\"address\" [(ngModel)]=\"carer.address\" type=\"text\" pInputTextarea></textarea>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"carer.userName\" placeholder=\"Username\">\n            </div>\n            <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n          </form>\n          <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div id=\"addCarerModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Add New Carer</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-check\" name=\"addCarerForm\" novalidate [formGroup]=\"addCarerForm\" (ngSubmit)=\"addCarer()\">\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"names\" type=\"text\" size=\"40\" formControlName=\"names\" pInputText>\n                <label for=\"names\">Names</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"surname\" type=\"text\" size=\"40\" formControlName=\"surname\" pInputText>\n                <label for=\"surname\">Surname</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <p-inputMask formControlName=\"phoneNumber\" id=\"phoneNumber\" size=\"40\" mask=\"9999-999999\"></p-inputMask>\n                <label for=\"phoneNumber\">Phone Number</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"email\" type=\"text\" size=\"40\" formControlName=\"email\" pInputText>\n                <label for=\"email\">Email</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"gender\">Gender</label>\n            <p-selectButton [options]=\"genders\" class=\"form-control\" id=\"gender\" type=\"text\" size=\"20\" formControlName=\"gender\"></p-selectButton>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <p-calendar id=\"dob\" size=\"40\" formControlName=\"dob\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1920:2000\"></p-calendar>\n                <label for=\"dob\">Date of Birth</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <textarea class=\"form-control\" [rows]=\"5\" id=\"address\" type=\"text\" size=\"40\" formControlName=\"address\" pInputTextarea></textarea>\n                <label for=\"address\">Address</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"username\" type=\"text\" size=\"40\" formControlName=\"userName\" pInputText>\n                <label for=\"username\">Username</label>\n              </span>\n          </div>\n          <button pButton class=\"btn btn-primary\" type=\"submit\" label=\"Add\"></button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/carers/carers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/carers/carers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_carer_service__ = __webpack_require__("../../../../../client/app/services/carer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarersComponent = (function () {
    function CarersComponent(carerService, formBuilder, http, toast) {
        this.carerService = carerService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.carer = {};
        this.carers = [];
        this.isLoading = true;
        this.isEditing = false;
        this.names = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.surname = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.phoneNumber = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email);
        this.gender = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.dob = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.address = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.userName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.genders = [];
        this.genders.push({ label: 'Male', value: 'M' });
        this.genders.push({ label: 'Female', value: 'F' });
        this.genders.push({ label: 'Other', value: 'O' });
    }
    CarersComponent.prototype.ngOnInit = function () {
        this.getCarers();
        this.addCarerForm = this.formBuilder.group({
            names: this.names,
            surname: this.surname,
            phoneNumber: this.phoneNumber,
            email: this.email,
            gender: this.gender,
            dob: this.dob,
            address: this.address,
            userName: this.userName,
        });
    };
    CarersComponent.prototype.getCarers = function () {
        var _this = this;
        this.carerService.getCarers().subscribe(function (data) { return _this.carers = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    CarersComponent.prototype.addCarer = function () {
        var _this = this;
        this.carerService.addCarer(this.addCarerForm.value).subscribe(function (res) {
            var newCarer = res.json();
            _this.carers.push(newCarer);
            _this.addCarerForm.reset();
            _this.toast.setMessage('Carer added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CarersComponent.prototype.enableEditing = function (carer) {
        this.isEditing = true;
        this.carer = carer;
    };
    CarersComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.carer = {};
        this.toast.setMessage('Carer editing cancelled.', 'warning');
        // reload the carers to reset the editing
        this.getCarers();
    };
    CarersComponent.prototype.editCarer = function (carer) {
        var _this = this;
        this.carerService.editCarer(carer).subscribe(function (res) {
            _this.isEditing = false;
            _this.carer = carer;
            _this.toast.setMessage('Carer edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CarersComponent.prototype.deleteCarer = function (carer) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.carerService.deleteCarer(carer).subscribe(function (res) {
                var pos = _this.carers.map(function (elem) { return elem._id; }).indexOf(carer._id);
                _this.carers.splice(pos, 1);
                _this.toast.setMessage('Carer deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return CarersComponent;
}());
CarersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carers',
        template: __webpack_require__("../../../../../client/app/carers/carers.component.html"),
        styles: [__webpack_require__("../../../../../client/app/carers/carers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_carer_service__["a" /* CarerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_carer_service__["a" /* CarerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], CarersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=carers.component.js.map

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current cats ({{cats.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Weight</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"cats.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no cats in the DB. Add a new cat below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of cats\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.age}}</td>\n          <td>{{cat.weight}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"cat.age\" placeholder=\"Age\" min=\"0\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"weight\" [(ngModel)]=\"cat.weight\" placeholder=\"Weight\" step=\"any\" min=\"0\" required>\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new cat</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addCat()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"age\" formControlName=\"age\" placeholder=\"Age\" min=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"weight\" formControlName=\"weight\" placeholder=\"Weight\" step=\"any\" min=\"0\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatsComponent = (function () {
    function CatsComponent(catService, formBuilder, http, toast) {
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.cat = {};
        this.cats = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.getCats();
        this.addCatForm = this.formBuilder.group({
            name: this.name,
            age: this.age,
            weight: this.weight
        });
    };
    CatsComponent.prototype.getCats = function () {
        var _this = this;
        this.catService.getCats().subscribe(function (data) { return _this.cats = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    CatsComponent.prototype.addCat = function () {
        var _this = this;
        this.catService.addCat(this.addCatForm.value).subscribe(function (res) {
            var newCat = res.json();
            _this.cats.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.enableEditing = function (cat) {
        this.isEditing = true;
        this.cat = cat;
    };
    CatsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.cat = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getCats();
    };
    CatsComponent.prototype.editCat = function (cat) {
        var _this = this;
        this.catService.editCat(cat).subscribe(function (res) {
            _this.isEditing = false;
            _this.cat = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.deleteCat = function (cat) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.catService.deleteCat(cat).subscribe(function (res) {
                var pos = _this.cats.map(function (elem) { return elem._id; }).indexOf(cat._id);
                _this.cats.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return CatsComponent;
}());
CatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cats',
        template: __webpack_require__("../../../../../client/app/cats/cats.component.html"),
        styles: [__webpack_require__("../../../../../client/app/cats/cats.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], CatsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cats.component.js.map

/***/ }),

/***/ "../../../../../client/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current patients ({{clients.length}})</h4>\n  <button type=\"button\" style=\"margin: 10px 20px;\" class=\"btn\" data-toggle=\"modal\" data-target=\"#addClientModal\">\n    <i class=\"fa fa-plus-circle fa-4x\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n      <tr>\n        <th>Names</th>\n        <th>Surname</th>\n        <th>Phone Number</th>\n        <th>Email</th>\n        <th>Gender</th>\n        <th>Date of Birth</th>\n        <th>Address</th>\n        <th>User Name</th>\n        <th>Services</th>\n        <th>Actions</th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"clients.length === 0\">\n      <tr>\n        <td style=\"text-align: center;\" colspan=\"10\">There are no clients in the system. Add a new client.</td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n      <tr *ngFor=\"let client of clients\">\n        <td>{{client.names}}</td>\n        <td>{{client.surname}}</td>\n        <td>{{client.phoneNumber}}</td>\n        <td>{{client.email}}</td>\n        <td>{{client.gender}}</td>\n        <td>{{client.dob | date: 'dd MMM yyyy'}}</td>\n        <td>{{client.address}}</td>\n        <td>{{client.userName}}</td>\n        <td>{{client.services}}</td>\n        <td>\n          <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(client)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n          <button class=\"btn btn-sm btn-danger\" (click)=\"deleteClient(client)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          <button class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#addTemperatureModal\" (click)=\"enterClientRelatedData(client)\"><i class=\"fa fa-thermometer\"></i> Enter temperature</button>\n          <button class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#addWeightModal\" (click)=\"enterClientRelatedData(client)\"><i class=\"fa fa-balance-scale\"></i> Enter weight</button>\n        </td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n      <tr>\n        <td colspan=\"10\">\n          <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editClient(client)\" style=\"display:inline\">\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"client.names\" placeholder=\"Names\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"surname\" [(ngModel)]=\"client.surname\" placeholder=\"Surname\">\n            </div>\n            <div class=\"form-group\">\n              <p-inputMask class=\"form-control\" name=\"phoneNumber\" [(ngModel)]=\"client.phoneNumber\" mask=\"9999-999999\" placeholder=\"Phone Number\"></p-inputMask>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"client.email\" placeholder=\"Email\">\n            </div>\n            <div class=\"form-group\">\n              <p-selectButton [options]=\"genders\" class=\"form-control\" name=\"gender\" [(ngModel)]=\"client.gender\" placeholder=\"Gender\"></p-selectButton>\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" [rows]=\"5\" name=\"address\" [(ngModel)]=\"client.address\" type=\"text\" pInputTextarea></textarea>\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"client.userName\" placeholder=\"Username\">\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" [rows]=\"5\" name=\"services\" [(ngModel)]=\"client.services\" type=\"text\" pInputTextarea></textarea>\n            </div>\n            <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n          </form>\n          <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div id=\"addWeightModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">x</button>\n        <h4 class=\"modal-title\">Enter Weight</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-check\" name=\"addWeightForm\" novalidate [formGroup]=\"addWeightForm\" (ngSubmit)=\"addClientWeight(client)\">\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"weight\" size=\"10\" type=\"number\" formControlName=\"weight\" pInputText>\n                <label for=\"temperature\">Weight</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <p-calendar id=\"dateOfTakingWeight\" size=\"40\" name=\"dateOfTakingWeight\" formControlName=\"dateOfTakingWeight\"></p-calendar>\n                <label for=\"dateOfTakingWeight\">Date of Taking Weight</label>\n              </span>\n          </div>\n          <button pButton class=\"btn btn-primary\" type=\"submit\" label=\"Add\"></button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"addTemperatureModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">x</button>\n        <h4 class=\"modal-title\">Enter temperature</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-check\" name=\"addTemperatureForm\" novalidate [formGroup]=\"addTemperatureForm\" (ngSubmit)=\"addClientTemperature(client)\">\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"temperature\" size=\"10\" type=\"number\" min=30 max=50 step=1 formControlName=\"temperature\" pInputText>\n                <label for=\"temperature\">Temperature</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <p-calendar id=\"dateOfTakingTemperature\" size=\"40\" name=\"dateOfTakingTemperature\" formControlName=\"dateOfTakingTemperature\"></p-calendar>\n                <label for=\"dateOfTakingTemperature\">Date of Taking Temperature</label>\n              </span>\n          </div>\n          <button pButton class=\"btn btn-primary\" type=\"submit\" label=\"Add\"></button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"addClientModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Add New Client</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-check\" name=\"addClientForm\" novalidate [formGroup]=\"addClientForm\" (ngSubmit)=\"addClient()\">\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"names\" type=\"text\" size=\"40\" formControlName=\"names\" pInputText>\n                <label for=\"names\">Names</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"surname\" type=\"text\" size=\"40\" formControlName=\"surname\" pInputText>\n                <label for=\"surname\">Surname</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <p-inputMask formControlName=\"phoneNumber\" id=\"phoneNumber\" size=\"40\" mask=\"9999-999999\"></p-inputMask>\n                <label for=\"phoneNumber\">Phone Number</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"email\" type=\"text\" size=\"40\" formControlName=\"email\" pInputText>\n                <label for=\"email\">Email</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"gender\">Gender</label>\n            <p-selectButton [options]=\"genders\" class=\"form-control\" id=\"gender\" type=\"text\" size=\"20\" formControlName=\"gender\"></p-selectButton>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <p-calendar id=\"dob\" size=\"40\" formControlName=\"dob\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1920:2000\"></p-calendar>\n                <label for=\"dob\">Date of Birth</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <textarea class=\"form-control\" [rows]=\"5\" id=\"address\" type=\"text\" size=\"40\" formControlName=\"address\" pInputTextarea></textarea>\n                <label for=\"address\">Address</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <input class=\"form-control\" id=\"username\" type=\"text\" size=\"40\" formControlName=\"userName\" pInputText>\n                <label for=\"username\">Username</label>\n              </span>\n          </div>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                <textarea class=\"form-control\" [rows]=\"5\" id=\"services\" type=\"text\" size=\"40\" formControlName=\"services\" pInputTextarea></textarea>\n                <label for=\"services\">Services</label>\n              </span>\n          </div>\n          <button pButton class=\"btn btn-primary\" type=\"submit\" label=\"Add\"></button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<app-add-edit-client [client]=\"{ names: 'hello', surname: 'there'}\"></app-add-edit-client>-->\n"

/***/ }),

/***/ "../../../../../client/app/clients/clients.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_model__ = __webpack_require__("../../../../../client/app/data-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientsComponent = (function () {
    function ClientsComponent(clientService, formBuilder, http, toast) {
        this.clientService = clientService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.isLoading = true;
        this.isEditing = false;
        this.names = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.surname = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.phoneNumber = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email);
        this.gender = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.dob = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.address = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.userName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.services = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.temperature = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.dateOfTakingTemperature = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.weight = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.dateOfTakingWeight = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.genders = [];
        this.genders.push({ label: 'Male', value: 'M' });
        this.genders.push({ label: 'Female', value: 'F' });
        this.genders.push({ label: 'Other', value: 'O' });
        this.clients = [];
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.addClientForm = this.formBuilder.group({
            names: this.names,
            surname: this.surname,
            phoneNumber: this.phoneNumber,
            email: this.email,
            gender: this.gender,
            dob: this.dob,
            address: this.address,
            userName: this.userName,
            services: this.services,
        });
        this.addTemperatureForm = this.formBuilder.group({
            dateOfTakingTemperature: this.dateOfTakingTemperature,
            temperature: this.temperature
        });
        this.addWeightForm = this.formBuilder.group({
            dateOfTakingWeight: this.dateOfTakingWeight,
            weight: this.weight
        });
    };
    ClientsComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) { return _this.clients = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    ClientsComponent.prototype.enableEditing = function (client) {
        this.isEditing = true;
        this.client = client;
    };
    ClientsComponent.prototype.deleteClient = function (client) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.clientService.deleteClient(client).subscribe(function (res) {
                var pos = _this.clients.map(function (elem) { return elem._id; }).indexOf(client._id);
                _this.clients.splice(pos, 1);
                _this.toast.setMessage('Client deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    ClientsComponent.prototype.enterClientRelatedData = function (client) {
        this.client = client;
    };
    ClientsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.client = new __WEBPACK_IMPORTED_MODULE_5__data_model__["c" /* Client */]();
        this.toast.setMessage('Client editing cancelled.', 'warning');
        // reload the clients to reset the editing
        this.getClients();
    };
    ClientsComponent.prototype.editClient = function (client) {
        var _this = this;
        this.clientService.editClient(client).subscribe(function (res) {
            _this.isEditing = false;
            _this.client = client;
            _this.toast.setMessage('Client edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    ClientsComponent.prototype.addClient = function () {
        var _this = this;
        this.clientService.addClient(this.addClientForm.value).subscribe(function (res) {
            var newClient = res.json();
            _this.clients.push(newClient);
            _this.addClientForm.reset();
            _this.toast.setMessage('Client added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    ClientsComponent.prototype.addClientWeight = function (client) {
        var weight = new __WEBPACK_IMPORTED_MODULE_5__data_model__["e" /* Weight */]();
        weight.date = this.addWeightForm.value.dateOfTakingWeight;
        weight.weight = this.addWeightForm.value.weight;
        if (!this.client.weights || this.client.weights.length === 0) {
            this.client.weights = [];
        }
        this.client.weights.push(weight);
        this.editClient(this.client);
    };
    ClientsComponent.prototype.addClientTemperature = function (client) {
        var temperature = new __WEBPACK_IMPORTED_MODULE_5__data_model__["d" /* Temperature */]();
        temperature.date = this.addTemperatureForm.value.dateOfTakingTemperature;
        temperature.temperature = this.addTemperatureForm.value.temperature;
        if (!this.client.temperatures || this.client.temperatures.length === 0) {
            this.client.temperatures = [];
        }
        this.client.temperatures.push(temperature);
        this.editClient(this.client);
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clients',
        template: __webpack_require__("../../../../../client/app/clients/clients.component.html"),
        styles: [__webpack_require__("../../../../../client/app/clients/clients.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], ClientsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ "../../../../../client/app/data-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
/* unused harmony export Carer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Bill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Weight; });

var Client = (function () {
    function Client() {
    }
    return Client;
}());

var Appointment = (function () {
    function Appointment() {
        this.allDay = false;
        this.rate = 50;
    }
    return Appointment;
}());

var Carer = (function () {
    function Carer() {
    }
    return Carer;
}());

var Bill = (function () {
    function Bill(userName, hours, rate, total, expense) {
        this.userName = userName;
        this.hours = hours;
        this.rate = rate;
        this.total = total;
        this.expense = expense;
    }
    return Bill;
}());

var Temperature = (function () {
    function Temperature() {
    }
    return Temperature;
}());

var Weight = (function () {
    function Weight() {
    }
    return Weight;
}());

//# sourceMappingURL=data-model.js.map

/***/ }),

/***/ "../../../../../client/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Login</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../client/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../client/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../client/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: '',
        styles: ['']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">404 Not Found</h4>\n  <div class=\"card-block\">\n    <p>The page you requested was not found.</p>\n    <p>Go to <a routerLink=\"/\">Homepage</a>.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../client/app/not-found/not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../client/app/planning/planning.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <div>\n    <p-dropdown [options]=\"carerSelectItems\" (onChange)=\"carersDropDownChanged()\" [(ngModel)]=\"selectedCarer\"\n                placeholder=\"Please select a Carer\" [style]=\"{'width':'250px'}\"></p-dropdown>\n    <p-dropdown *ngIf=\"selectedCarer\" style=\"float:right;\" [options]=\"clientSelectItems\" [(ngModel)]=\"selectedClient\"\n                placeholder=\"Please select a Client\" [style]=\"{'width':'250px'}\"></p-dropdown>\n  </div>\n  <div *ngIf=\"selectedCarer\">\n    <p-schedule [events]='appointments' [header]=\"header\" [eventLimit]=\"4\" [editable]=\"true\"\n                (onDayClick)=\"handleDayClick($event)\" (onEventClick)=\"handleEventClick($event)\">\n    </p-schedule>\n    <p-dialog header=\"Event Details\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\"\n              [modal]=\"false\" [contentStyle]=\"{'overflow':'visible'}\" [style]=\"{'overflow':'visible'}\" [resizable]=\"false\">\n      <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"appointment\">\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-4\"><label for=\"vin\">Title</label></div>\n          <div class=\"ui-grid-col-8\"><input pInputText name=\"title\" id=\"title\" [(ngModel)]=\"appointment.title\" id=\"vin\" dataType=\"string\"/></div>\n        </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-4\"><label for=\"start\">Start</label></div>\n        <div class=\"ui-grid-col-8\">\n          <p-calendar [(ngModel)]=\"appointment.start\" name=\"start\" id=\"start\" showTime=\"showTime\" hourFormat=\"24\" dateFormat=\"yy-mm-dd\">\n          </p-calendar>\n        </div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-4\"><label for=\"end\">End</label></div>\n        <div class=\"ui-grid-col-8\">\n          <p-calendar [(ngModel)]=\"appointment.end\" name=\"end\" id=\"end\" showTime=\"showTime\" hourFormat=\"24\" dateFormat=\"yy-mm-dd\">\n          </p-calendar>\n        </div>\n      </div>\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-4\"><label for=\"allDay\">All Day</label></div>\n          <div class=\"ui-grid-col-8\">\n            <p-checkbox [(ngModel)]=\"appointment.allDay\" (onClick)=\"allDayClicked()\" id=\"allDay\" name=\"all\" binary=\"checkbox\">\n            </p-checkbox>\n          </div>\n        </div>\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-4\"><label for=\"client\">Client</label></div>\n          <div class=\"ui-grid-col-8\">\n            <p-dropdown [options]=\"clientSelectItems\" [(ngModel)]=\"selectedClient\" placeholder=\"Select a Client\"\n                        [style]=\"{'width':'175px'}\" id=\"client\" name=\"client\">\n            </p-dropdown>\n          </div>\n        </div>\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-4\"><label for=\"rate\">Rate</label></div>\n          <div class=\"ui-grid-col-8\">\n            <input pInputText [(ngModel)]=\"appointment.rate\" placeholder=\"Enter a Rate\" id=\"rate\" name=\"rate\" required/>\n          </div>\n        </div>\n      </div>\n      <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n          <button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteEvent()\" label=\"Delete\" [disabled]=\"!appointment?._id\"></button>\n          <button type=\"submit\" pButton icon=\"fa-check\" (click)=\"saveEvent()\" label=\"Save\" [disabled]=\"!appointment?.start\"></button>\n        </div>\n      </p-footer>\n    </p-dialog>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/planning/planning.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/planning/planning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fullcalendar__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_carer_service__ = __webpack_require__("../../../../../client/app/services/carer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_model__ = __webpack_require__("../../../../../client/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_appointment_service__ = __webpack_require__("../../../../../client/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlanningComponent = (function () {
    function PlanningComponent(carerService, clientService, toast, cd, appointmentService) {
        this.carerService = carerService;
        this.clientService = clientService;
        this.toast = toast;
        this.cd = cd;
        this.appointmentService = appointmentService;
        this.carers = [];
        this.clients = [];
        this.idGen = 100;
        this.dialogVisible = false;
        this.showTime = false;
    }
    PlanningComponent.prototype.ngOnInit = function () {
        this.carerSelectItems = [];
        this.clientSelectItems = [];
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        this.refreshData();
    };
    PlanningComponent.prototype.refreshData = function () {
        var _this = this;
        this.getCarers();
        this.getClients();
        if (this.selectedCarer) {
            this.appointmentService.getCarersAppointments(this.selectedCarer).subscribe(function (data) { return _this.appointments = data; }, function (error) { return console.log(error); });
        }
    };
    PlanningComponent.prototype.carersDropDownChanged = function () {
        var _this = this;
        if (!this.selectedCarer.appointments) {
            this.selectedCarer.appointments = [];
        }
        this.appointmentService.getCarersAppointments(this.selectedCarer).subscribe(function (data) { return _this.appointments = data; }, function (error) { return console.log(error); });
    };
    PlanningComponent.prototype.getCarers = function () {
        var _this = this;
        this.carerService.getCarers().subscribe(function (data) { return _this.carers = data; }, function (error) { return console.log(error); }, function () { return _this.fillCarerSelectItems(); });
    };
    PlanningComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) { return _this.clients = data; }, function (error) { return console.log(error); }, function () { return _this.fillClientSelectItems(); });
    };
    PlanningComponent.prototype.fillCarerSelectItems = function () {
        var _this = this;
        this.isLoading = false;
        if (this.carers) {
            this.carers.forEach(function (carer1) {
                return _this.carerSelectItems.push({ label: carer1.userName, value: carer1 });
            });
        }
    };
    PlanningComponent.prototype.fillClientSelectItems = function () {
        var _this = this;
        this.isLoading = false;
        if (this.clients) {
            this.clients.forEach(function (client1) {
                return _this.clientSelectItems.push({ label: client1.userName, value: client1 });
            });
        }
    };
    PlanningComponent.prototype.saveEvent = function () {
        this.appointment.carer = this.selectedCarer._id;
        this.appointment.client = this.selectedClient._id;
        // update
        if (this.appointment._id) {
            // const index: number = this.findEventIndexById(this.appointment._id);
            // if (index >= 0) {
            // this.appointments[index] = this.appointment;
            this.appointmentService.editAppointment(this.appointment).subscribe(function (data) { }, function (error) { return console.log(error); });
            // }
        }
        else {
            // this.appointment._id = this.idGen++;
            // this.selectedCarer.appointments.push(this.appointment);
            this.appointmentService.addAppointment(this.appointment).subscribe(function (data) { }, function (error) { return console.log(error); });
        }
        this.appointment = null;
        this.dialogVisible = false;
        this.refreshData();
    };
    PlanningComponent.prototype.deleteEvent = function () {
        // const index: number = this.findEventIndexById(this.appointment._id);
        // if (index >= 0) {
        //   this.selectedCarer.appointments.splice(index, 1);
        // }
        this.appointmentService.deleteAppointment(this.appointment).subscribe(function (done) { }, function (error) { return console.log(error); });
        this.dialogVisible = false;
        this.refreshData();
        this.cd.detectChanges();
    };
    // findEventIndexById(id: string) {
    //   let index = -1;
    //   for (let i = 0; i < this.selectedCarer.appointments.length; i++) {
    //     if (id === this.selectedCarer.appointments[i]._id) {
    //       index = i;
    //       break;
    //     }
    //   }
    //   return index;
    // }
    PlanningComponent.prototype.handleDayClick = function (event) {
        this.appointment = new __WEBPACK_IMPORTED_MODULE_6__data_model__["a" /* Appointment */]();
        // console.log(event.date);
        this.appointment.start = new Date(event.date);
        // this.appointment.
        this.dialogVisible = true;
        // trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    };
    PlanningComponent.prototype.handleEventClick = function (e) {
        this.appointment = new __WEBPACK_IMPORTED_MODULE_6__data_model__["a" /* Appointment */]();
        this.appointment.title = e.calEvent.title;
        // const start = e.calEvent.start;
        // const end = e.calEvent.end;
        // if (e.view.name === 'month') {
        //   start.stripTime();
        // }
        // if (end) {
        //   end.stripTime();
        //   this.appointment.end = end.format();
        // }
        this.appointment._id = e.calEvent._id;
        // this.appointment.start = start.format();
        this.appointment.start = new Date(e.calEvent.start);
        this.appointment.end = new Date(e.calEvent.end);
        this.appointment.allDay = e.calEvent.allDay;
        this.appointment.client = e.calEvent.client;
        this.appointment.carer = e.calEvent.carer;
        this.appointment.rate = e.calEvent.rate;
        this.dialogVisible = true;
        this.cd.detectChanges();
    };
    PlanningComponent.prototype.allDayClicked = function () {
        if (this.appointment.allDay) {
            this.showTime = false;
        }
    };
    return PlanningComponent;
}());
PlanningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-planning',
        template: __webpack_require__("../../../../../client/app/planning/planning.component.html"),
        styles: [__webpack_require__("../../../../../client/app/planning/planning.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_carer_service__["a" /* CarerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_carer_service__["a" /* CarerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_client_service__["a" /* ClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_appointment_service__["a" /* AppointmentService */]) === "function" && _e || Object])
], PlanningComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=planning.component.js.map

/***/ }),

/***/ "../../../../../client/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Register</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n      <div class=\"input-group\" [ngClass]=\"setClassUsername()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" formControlName=\"role\">\n          <option value=\"\" selected disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!registerForm.valid\"><i class=\"fa fa-user-plus\"></i> Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z0-9_-\\s]*')]);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
    };
    RegisterComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/login']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../client/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../client/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../client/app/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <div>\n    <p-dropdown [options]=\"clientSelectItems\" [(ngModel)]=\"selectedClient\" placeholder=\"Please select a Client\" [style]=\"{'width':'250px'}\">\n    </p-dropdown>\n  </div>\n  <button (click)=\"generateTemperatureReport()\" formnovalidate>Show Temperature Report</button>\n  <button (click)=\"generateWeightReport()\" formnovalidate>Show Weight Report</button>\n  <p-chart type=\"line\" [data]=\"data\" [options]=\"options\"></p-chart>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/reports/reports.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsComponent = (function () {
    function ReportsComponent(clientService, formBuilder, http, toast) {
        this.clientService = clientService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.isLoading = false;
        var joe = {
            title: {
                text: 'Simple Date-Time Chart'
            },
            axisX: {
                title: 'timeline',
                gridThickness: 2
            },
            axisY: {
                title: 'Downloads'
            },
            data: [
                {
                    type: 'area',
                    dataPoints: [
                        { x: new Date(2012, 1, 1), y: 26 },
                        { x: new Date(2012, 1, 3), y: 38 },
                        { x: new Date(2012, 1, 5), y: 43 },
                        { x: new Date(2012, 1, 7), y: 29 },
                        { x: new Date(2012, 1, 11), y: 41 },
                        { x: new Date(2012, 1, 13), y: 54 },
                        { x: new Date(2012, 1, 20), y: 66 },
                        { x: new Date(2012, 1, 21), y: 60 },
                        { x: new Date(2012, 1, 25), y: 53 },
                        { x: new Date(2012, 1, 27), y: 60 }
                    ]
                }
            ]
        };
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) { return _this.clients = data; }, function (error) { return console.log(error); });
        this.clientSelectItems = [];
        // this.reportSelectItems = [];
        // this.reportSelectItems.push({label: 'Temperature Report', value: 0})
        this.getClients();
    };
    ReportsComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) { return _this.clients = data; }, function (error) { return console.log(error); }, function () { return _this.fillClientSelectItems(); });
    };
    ReportsComponent.prototype.generateWeightReport = function () {
        var weightData = [];
        this.selectedClient.weights.forEach(function (t) {
            var x = __WEBPACK_IMPORTED_MODULE_5_moment__(t.date);
            weightData.push({ x: t.date, y: t.weight });
        });
        console.log(weightData);
        this.data = {
            labels: [new Date(2017, 8), new Date(2017, 9), new Date(2017, 10), new Date(2017, 11)],
            datasets: [
                {
                    label: 'Weight',
                    data: weightData
                }
            ]
        };
        this.options = {
            title: {
                display: true,
                text: 'Weight',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            responsive: true,
            scales: {
                xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'month',
                            tooltipFormat: 'lll',
                        }
                    }],
                yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'value'
                        }
                    }]
            }
        };
    };
    ReportsComponent.prototype.generateTemperatureReport = function () {
        var temperatureData = [];
        this.selectedClient.temperatures.forEach(function (t) {
            var x = __WEBPACK_IMPORTED_MODULE_5_moment__(t.date);
            temperatureData.push({ x: t.date, y: t.temperature });
        });
        console.log(temperatureData);
        this.data = {
            labels: [new Date(2017, 8), new Date(2017, 9), new Date(2017, 10), new Date(2017, 11)],
            datasets: [
                {
                    label: 'Temperature',
                    data: temperatureData
                }
            ]
        };
        this.options = {
            title: {
                display: true,
                text: 'Temperature',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            responsive: true,
            scales: {
                xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'month',
                            tooltipFormat: 'lll',
                        }
                    }],
                yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'value'
                        }
                    }]
            }
        };
    };
    ReportsComponent.prototype.fillClientSelectItems = function () {
        var _this = this;
        this.isLoading = false;
        if (this.clients) {
            this.clients.forEach(function (client1) {
                return _this.clientSelectItems.push({ label: client1.userName, value: client1 });
            });
        }
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../client/app/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../client/app/reports/reports.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], ReportsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../client/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__ = __webpack_require__("../../../../../client/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__carers_carers_component__ = __webpack_require__("../../../../../client/app/carers/carers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__planning_planning_component__ = __webpack_require__("../../../../../client/app/planning/planning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reports_reports_component__ = __webpack_require__("../../../../../client/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__billing_billing_component__ = __webpack_require__("../../../../../client/app/billing/billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tracking_tracking_component__ = __webpack_require__("../../../../../client/app/tracking/tracking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'cats', component: __WEBPACK_IMPORTED_MODULE_2__cats_cats_component__["a" /* CatsComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__["a" /* ClientsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'carers', component: __WEBPACK_IMPORTED_MODULE_13__carers_carers_component__["a" /* CarersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'planning', component: __WEBPACK_IMPORTED_MODULE_14__planning_planning_component__["a" /* PlanningComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_15__reports_reports_component__["a" /* ReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'billing', component: __WEBPACK_IMPORTED_MODULE_16__billing_billing_component__["a" /* BillingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
    { path: 'tracking', component: __WEBPACK_IMPORTED_MODULE_17__tracking_tracking_component__["a" /* TrackingComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */]] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/notfound' },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../client/app/services/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentService = (function () {
    function AppointmentService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    AppointmentService.prototype.getAppointments = function () {
        return this.http.get('/api/appointments').map(function (res) { return res.json(); });
    };
    AppointmentService.prototype.addAppointment = function (appointment) {
        return this.http.post('/api/appointment', JSON.stringify(appointment), this.options);
    };
    AppointmentService.prototype.getAppointment = function (appointment) {
        return this.http.get("/api/appointment/" + appointment._id).map(function (res) { return res.json(); });
    };
    AppointmentService.prototype.editAppointment = function (appointment) {
        return this.http.put("/api/appointment/" + appointment._id, JSON.stringify(appointment), this.options);
    };
    AppointmentService.prototype.deleteAppointment = function (appointment) {
        return this.http.delete("/api/appointment/" + appointment._id, this.options);
    };
    AppointmentService.prototype.getCarersAppointments = function (carer) {
        return this.http.get("/api/appointment/carer/" + carer._id).map(function (res) { return res.json(); });
    };
    return AppointmentService;
}());
AppointmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AppointmentService);

var _a;
//# sourceMappingURL=appointment.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.auth.isAdmin;
    };
    return AuthGuardAdmin;
}());
AuthGuardAdmin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuardAdmin);

var _a, _b;
//# sourceMappingURL=auth-guard-admin.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    return AuthGuardLogin;
}());
AuthGuardLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuardLogin);

var _a, _b;
//# sourceMappingURL=auth-guard-login.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.currentUser = { _id: '', username: '', role: '' };
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', username: '', role: '' };
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/carer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarerService = (function () {
    function CarerService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CarerService.prototype.getCarers = function () {
        return this.http.get('/api/carers').map(function (res) { return res.json(); });
    };
    CarerService.prototype.addCarer = function (carer) {
        return this.http.post('/api/carer', JSON.stringify(carer), this.options);
    };
    CarerService.prototype.getCarer = function (carer) {
        return this.http.get("/api/carer/" + carer._id).map(function (res) { return res.json(); });
    };
    CarerService.prototype.editCarer = function (carer) {
        return this.http.put("/api/carer/" + carer._id, JSON.stringify(carer), this.options);
    };
    CarerService.prototype.deleteCarer = function (carer) {
        return this.http.delete("/api/carer/" + carer._id, this.options);
    };
    return CarerService;
}());
CarerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CarerService);

var _a;
//# sourceMappingURL=carer.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/cat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatService = (function () {
    function CatService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CatService.prototype.getCats = function () {
        return this.http.get('/api/cats').map(function (res) { return res.json(); });
    };
    CatService.prototype.countCats = function () {
        return this.http.get('/api/cats/count').map(function (res) { return res.json(); });
    };
    CatService.prototype.addCat = function (cat) {
        return this.http.post('/api/cat', JSON.stringify(cat), this.options);
    };
    CatService.prototype.getCat = function (cat) {
        return this.http.get("/api/cat/" + cat._id).map(function (res) { return res.json(); });
    };
    CatService.prototype.editCat = function (cat) {
        return this.http.put("/api/cat/" + cat._id, JSON.stringify(cat), this.options);
    };
    CatService.prototype.deleteCat = function (cat) {
        return this.http.delete("/api/cat/" + cat._id, this.options);
    };
    return CatService;
}());
CatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CatService);

var _a;
//# sourceMappingURL=cat.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    ClientService.prototype.getClients = function () {
        return this.http.get('/api/clients').map(function (res) { return res.json(); });
    };
    ClientService.prototype.addClient = function (client) {
        return this.http.post('/api/client', JSON.stringify(client), this.options);
    };
    ClientService.prototype.getClient = function (client) {
        return this.http.get("/api/client/" + client._id).map(function (res) { return res.json(); });
    };
    ClientService.prototype.editClient = function (client) {
        return this.http.put("/api/client/" + client._id, JSON.stringify(client), this.options);
    };
    ClientService.prototype.deleteClient = function (client) {
        return this.http.delete("/api/client/" + client._id, this.options);
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/api/login', JSON.stringify(credentials), this.options);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users').map(function (res) { return res.json(); });
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('/api/users/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get("/api/user/" + user._id).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put("/api/user/" + user._id, JSON.stringify(user), this.options);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete("/api/user/" + user._id, this.options);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"condition\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "condition", void 0);
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../client/app/shared/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/loading/loading.component.scss")]
    })
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__ = __webpack_require__("../../../../../client/app/shared/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        exports: [
            // Shared Modules
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            // Shared Components
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <strong>Message:</strong> {{message.body}}\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  z-index: 999;\n  position: fixed;\n  bottom: 15px;\n  left: 25%;\n  width: 50%;\n  opacity: 0.9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    return ToastComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "message", void 0);
ToastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__("../../../../../client/app/shared/toast/toast.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/toast/toast.component.scss")]
    })
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../../client/app/tracking/tracking.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <p-gmap [options]=\"options\" [style]=\"{'width':'100%','height':'320px'}\" ></p-gmap>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/tracking/tracking.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/tracking/tracking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackingComponent = (function () {
    function TrackingComponent(toast) {
        this.toast = toast;
    }
    TrackingComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
        this.options = {
            center: { lat: 51.5074, lng: 0.12787 },
            zoom: 1
        };
    };
    return TrackingComponent;
}());
TrackingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tracking',
        template: __webpack_require__("../../../../../client/app/tracking/tracking.component.html"),
        styles: [__webpack_require__("../../../../../client/app/tracking/tracking.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object])
], TrackingComponent);

var _a;
//# sourceMappingURL=tracking.component.js.map

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map