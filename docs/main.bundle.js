webpackJsonp([3,6],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL;
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this._token = null;
    }
    ApiService.getSearchParams = function (query) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* URLSearchParams */]();
        for (var i in query) {
            if (query.hasOwnProperty(i)) {
                params.set(i, query[i]);
            }
        }
        return params;
    };
    ApiService.prototype.get = function (url, query) {
        if (query === void 0) { query = {}; }
        var search = ApiService.getSearchParams(query);
        var request = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Request */]({
            url: url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get,
            search: search
        });
        return this._request(request);
    };
    ApiService.prototype.post = function (url, body) {
        var request = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Request */]({
            url: url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post,
            body: body
        });
        return this._request(request);
    };
    ApiService.prototype.del = function (url, body) {
        var request = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Request */]({
            url: url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Delete,
            body: body
        });
        return this._request(request);
    };
    ApiService.prototype.patch = function (url, body) {
        var request = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Request */]({
            url: url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Patch,
            body: body
        });
        return this._request(request);
    };
    ApiService.prototype._request = function (request) {
        if (!request.headers) {
            request.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Headers */]({ 'x-token': this.token });
        }
        else {
            request.headers.append('x-token', this.token);
        }
        request.url = "" + API_URL + request.url;
        return this.http.request(request).map(function (response) { return response.json(); });
    };
    Object.defineProperty(ApiService.prototype, "token", {
        get: function () {
            if (!this._token) {
                this._token = window.localStorage.getItem('x-token');
            }
            return this._token;
        },
        set: function (token) {
            this._token = token;
            window.localStorage.setItem('x-token', token);
        },
        enumerable: true,
        configurable: true
    });
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/api.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(api, router) {
        this.api = api;
        this.router = router;
        this.loggedIn = false;
    }
    AuthService.prototype.signIn = function (login, password) {
        var _this = this;
        return this.api.post('/login', { login: login, password: password })
            .map(function (response) {
            if (response.token) {
                _this.api.token = response.token;
                _this.loggedIn = true;
                return response;
            }
        }).toPromise();
    };
    AuthService.prototype.canActivate = function () {
        var _this = this;
        if (!this.api.token) {
            this.router.navigate(['auth']);
            return false;
        }
        if (this.loggedIn) {
            return true;
        }
        return this.api.get('/api/me')
            .map(function (payload) { return payload.loggedIn; })
            .map(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigate(['auth']);
            }
            return loggedIn;
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/auth.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    API_URL: 'https://common-todo-api.herokuapp.com'
};
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/environment.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module.ts": [
		823,
		1
	],
	"./dashboard/dashboard.module.ts": [
		824,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 375;


/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(496);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_model__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoService = (function () {
    function TodoService(api) {
        this.api = api;
        this._todos = [];
        this.loaded = false;
        this.state = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"]([]);
        this.stateUpdate = this.state.asObservable();
    }
    Object.defineProperty(TodoService.prototype, "todos", {
        get: function () {
            return this._todos.slice();
        },
        set: function (todos) {
            this.state.next(todos.slice());
            this._todos = todos;
        },
        enumerable: true,
        configurable: true
    });
    TodoService.prototype.get = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        if (this.loaded) {
            this.todos = TodoService.sortTodos(this.todos);
            return Promise.resolve(this.todos);
        }
        return this.api.get('/api/todo', filter)
            .map(function (payload) {
            _this._todos = payload.map(function (todo) { return (new __WEBPACK_IMPORTED_MODULE_1__todo_model__["a" /* default */](todo)); });
            _this.loaded = true;
            return _this._todos;
        }).toPromise();
    };
    TodoService.sortTodos = function (todos) {
        return todos.sort(function (a, b) {
            if (a.done !== b.done) {
                return a.done ? 1 : -1;
            }
            return a.createdAt < b.createdAt ? 1 : -1;
        });
    };
    TodoService.prototype.add = function (data) {
        var _this = this;
        return this.api.post('/api/todo', data)
            .map(function (response) {
            var model = new __WEBPACK_IMPORTED_MODULE_1__todo_model__["a" /* default */](response);
            _this._todos.push(model);
            return model;
        }).toPromise();
    };
    TodoService.prototype.check = function (todo) {
        var _this = this;
        return this.api.patch("/api/todo/" + todo.id + "/toggle", todo)
            .map(function (response) {
            var model = new __WEBPACK_IMPORTED_MODULE_1__todo_model__["a" /* default */](response);
            Object.assign(todo, model);
            _this.todos = TodoService.sortTodos(_this.todos);
            return model;
        }).toPromise();
    };
    TodoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], TodoService);
    return TodoService;
    var _a;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/todo.service.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(555),
            styles: [__webpack_require__(554)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/app.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_auth_service__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'auth',
                        pathMatch: 'prefix',
                        loadChildren: './auth/auth.module.ts#AuthModule'
                    },
                    {
                        path: '',
                        loadChildren: './dashboard/dashboard.module.ts#DashboardModule',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_services_auth_auth_service__["a" /* AuthService */]],
                        pathMatch: 'prefix'
                    },
                    {
                        path: '**',
                        redirectTo: ''
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/app.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var TodoModel = (function () {
    function TodoModel(data) {
        this.id = null;
        this.title = '';
        this.description = '';
        this.done = false;
        this.createdAt = null;
        this.updatedAt = null;
        Object.assign(this, data, {
            createdAt: data.createdAt ? new Date(data.createdAt) : null,
            updatedAt: data.createdAt ? new Date(data.updatedAt) : null
        });
    }
    return TodoModel;
}());
/* harmony default export */ __webpack_exports__["a"] = TodoModel;
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/todo.model.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_todo_todo_service__ = __webpack_require__(380);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__services_todo_todo_service__["a" /* TodoService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/shared.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(376);


/***/ })

},[820]);
//# sourceMappingURL=main.bundle.map