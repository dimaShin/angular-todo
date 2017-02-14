webpackJsonp([0,6],{

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_list_todo_list_component__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_details_todo_details_component__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(379);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__todo_list_todo_list_component__["a" /* TodoListComponent */]
                    },
                    {
                        path: 'details/:id',
                        component: __WEBPACK_IMPORTED_MODULE_4__todo_details_todo_details_component__["a" /* TodoDetailsComponent */]
                    },
                    {
                        path: 'details',
                        component: __WEBPACK_IMPORTED_MODULE_4__todo_details_todo_details_component__["a" /* TodoDetailsComponent */]
                    },
                    {
                        path: '**',
                        redirectTo: ''
                    }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__todo_list_todo_list_component__["a" /* TodoListComponent */], __WEBPACK_IMPORTED_MODULE_4__todo_details_todo_details_component__["a" /* TodoDetailsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/dashboard.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_todo_todo_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDetailsComponent = (function () {
    function TodoDetailsComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
        this.title = '';
        this.description = '';
    }
    TodoDetailsComponent.prototype.ngOnInit = function () {
    };
    TodoDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this, title = _a.title, description = _a.description;
        this.todoService.add({ title: title, description: description })
            .then(function () { return _this.router.navigate(['']); });
    };
    TodoDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-todo-details',
            template: __webpack_require__(832),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_todo_todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_todo_todo_service__["a" /* TodoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], TodoDetailsComponent);
    return TodoDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/todo-details.component.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_todo_todo_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoListComponent = (function () {
    function TodoListComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
        this.filterForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('pending')
        });
        this.todos = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.get().then(function (todos) { return _this.todos = _this.getFilteredTodos(todos, _this.filterForm.value); });
        this.todoService.stateUpdate.subscribe(function (todos) { return _this.todos = _this.getFilteredTodos(todos, _this.filterForm.value); });
        this.filterForm.valueChanges.debounceTime(150).subscribe(function () { return _this.onFilterChange(_this.filterForm.value); });
    };
    TodoListComponent.prototype.onFilterChange = function (filter) {
        this.todos = this.getFilteredTodos(this.todoService.todos, filter);
    };
    TodoListComponent.prototype.getFilteredTodos = function (todos, _a) {
        var search = _a.search, status = _a.status;
        return todos.filter(function (todo) {
            if (status === 'pending' && todo.done) {
                return false;
            }
            if (!search) {
                return true;
            }
            return todo.title.includes(search);
        });
    };
    TodoListComponent.prototype.onToggleTodo = function (todo) {
        this.todoService.check(todo);
    };
    TodoListComponent.prototype.onAddClicked = function () {
        this.router.navigateByUrl('details/');
    };
    TodoListComponent.prototype.setStatusFilter = function (status) {
        this.filterForm.controls['status'].setValue(status);
    };
    TodoListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-todo-list',
            template: __webpack_require__(833),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_todo_todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_todo_todo_service__["a" /* TodoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], TodoListComponent);
    return TodoListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/iashindmytro/projects/todo/angular-todo/src/todo-list.component.js.map

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = ".todo-container .todo-list .todo-item.done {\n  text-decoration: line-through; }\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-details-container\">\n\n  <form class=\"todo-details\" name=\"form\" #form=\"ngForm\" (submit)=\"onSubmit()\">\n\n    <div class=\"form-control\">\n      <label>\n        Title:\n        <input\n          type=\"text\"\n          name=\"title\"\n          [(ngModel)]=\"title\"\n          required\n        >\n      </label>\n    </div>\n    <div class=\"form-control\">\n      <label>\n        Description:\n        <input\n          type=\"text\"\n          name=\"description\"\n          [(ngModel)]=\"description\"\n        >\n      </label>\n    </div>\n\n    <div class=\"form-control\">\n      <button type=\"submit\" [disabled]=\"form.invalid\">Save</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-container\">\n\n  <div class=\"todo-filter\">\n    <form\n      name=\"filterForm\"\n      [formGroup]=\"filterForm\">\n\n      <div class=\"form-control\">\n        <input\n          type=\"text\"\n          formControlName=\"search\"\n          placeholder=\"search...\"\n        >\n      </div>\n\n      <div class=\"form-control\">\n        <span class=\"radio-span\" (click)=\"setStatusFilter('pending')\">Pending</span>\n        <span class=\"radio-span\" (click)=\"setStatusFilter('all')\">All</span>\n      </div>\n\n    </form>\n  </div>\n\n  <ul class=\"todo-list\">\n    <li\n      *ngFor=\"let todo of todos\"\n      (click)=\"onToggleTodo(todo)\"\n    >\n      <div class=\"todo-item\"\n           [ngClass]=\"{done: todo.done}\"\n      >\n        <span class=\"todo-title\">{{todo.title}}</span>\n        <span class=\"todo-description\">{{todo.description}}</span>\n      </div>\n    </li>\n  </ul>\n\n  <button type=\"button\" (click)=\"onAddClicked()\">Add</button>\n</div>\n"

/***/ })

});
//# sourceMappingURL=0.bundle.map