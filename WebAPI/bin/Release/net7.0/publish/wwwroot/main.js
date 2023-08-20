"use strict";
(self["webpackChunkhspa"] = self["webpackChunkhspa"] || []).push([["main"],{

/***/ 7152:
/*!**************************************!*\
  !*** ./src/app/Pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FilterPipe {
  transform(value, filterString = '', propName = '') {
    const resultArray = [];
    if (value.length === 0 || filterString === '' || propName === '') {
      return value;
    }
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};
FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: true
});

/***/ }),

/***/ 6499:
/*!************************************!*\
  !*** ./src/app/Pipes/sort.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortPipe": () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortPipe {
  transform(value, args) {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = 1;
    if (sortDirection === 'desc') {
      multiplier = -1;
    }
    value.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    });
    return value;
  }
}
SortPipe.ɵfac = function SortPipe_Factory(t) {
  return new (t || SortPipe)();
};
SortPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sort",
  type: SortPipe,
  pure: true
});

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);



class AppComponent {
  constructor() {
    this.title = 'my-first-app';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "container", 2, "margin-top", "70px"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 2184);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9300);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _property_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property/property-card/property-card.component */ 134);
/* harmony import */ var _property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property/property-list/property-list.component */ 1887);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _services_housing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/housing.service */ 9382);
/* harmony import */ var _property_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property/add-property/add-property.component */ 5369);
/* harmony import */ var _property_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property/property-detail/property-detail.component */ 2548);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-login/user-login.component */ 2418);
/* harmony import */ var _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user-register/user-register.component */ 1998);
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user-service.service */ 9682);
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/alertify.service */ 3856);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _property_property_detail_property_detail_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./property/property-detail/property-detail-resolver.service */ 5807);
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 5197);
/* harmony import */ var _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Pipes/filter.pipe */ 7152);
/* harmony import */ var _Pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pipes/sort.pipe */ 6499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);




























const appRoutes = [{
  path: '',
  component: _property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_2__.PropertyListComponent
}, {
  path: 'rent-property',
  component: _property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_2__.PropertyListComponent
}, {
  path: 'add-property',
  component: _property_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_5__.AddPropertyComponent
}, {
  path: 'property-detail/:id',
  component: _property_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_6__.PropertyDetailComponent,
  resolve: {
    prp: _property_property_detail_property_detail_resolver_service__WEBPACK_IMPORTED_MODULE_12__.PropertyDetailResolverService
  }
}, {
  path: 'user/login',
  component: _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__.UserLoginComponent
}, {
  path: 'user/register',
  component: _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__.UserRegisterComponent
}, {
  path: '**',
  component: _property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_2__.PropertyListComponent
}];
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [_services_housing_service__WEBPACK_IMPORTED_MODULE_4__.HousingService, _services_user_service_service__WEBPACK_IMPORTED_MODULE_9__.UserServiceService, _services_alertify_service__WEBPACK_IMPORTED_MODULE_10__.AlertifyService, _services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService, _property_property_detail_property_detail_resolver_service__WEBPACK_IMPORTED_MODULE_12__.PropertyDetailResolverService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_20__.BsDropdownModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot(appRoutes), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_22__.TabsModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_23__.ButtonsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__.BsDatepickerModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_25__.NgxGalleryModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _property_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_1__.PropertyCardComponent, _property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_2__.PropertyListComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavBarComponent, _property_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_5__.AddPropertyComponent, _property_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_6__.PropertyDetailComponent, _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__.UserLoginComponent, _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__.UserRegisterComponent, _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_13__.FilterPipe, _Pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__.SortPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_20__.BsDropdownModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_22__.TabsModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_23__.ButtonsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__.BsDatepickerModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_25__.NgxGalleryModule]
  });
})();

/***/ }),

/***/ 6538:
/*!***********************************!*\
  !*** ./src/app/model/property.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Property": () => (/* binding */ Property)
/* harmony export */ });
class Property {}

/***/ }),

/***/ 1108:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/alertify.service */ 3856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 2184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function NavBarComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " View Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " My Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_div_21_div_3_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_div_21_Template_a_click_1_listener() {
      return false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NavBarComponent_div_21_div_3_Template, 13, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Welcome ", ctx_r2.loggedinUser, " ");
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
class NavBarComponent {
  constructor(alertify) {
    this.alertify = alertify;
  }
  ngOnInit() {}
  loggedin() {
    this.loggedinUser = localStorage.getItem('token') || '{}';
    return this.loggedinUser;
  }
  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success('You are logout');
  }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alertify_service__WEBPACK_IMPORTED_MODULE_0__.AlertifyService));
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-nav-bar"]],
  decls: 22,
  vars: 5,
  consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "ms-lg-4"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "me-lg-3"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", "aria-current", "page", "routerLink", "/", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/rent-property", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/add-property", 1, "nav-link"], [1, "me-lg-2"], [1, "nav", "navbar-nav"], ["class", "nav-item", 4, "ngIf"], ["class", "dropdown mr-5", "dropdown", "", 4, "ngIf"], ["routerLink", "user/register", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "user/login", "routerLinkActive", "active", 1, "nav-link"], ["dropdown", "", 1, "dropdown", "mr-5"], ["href", "#", "dropdownToggle", "", 1, "dropdown-toggle", "text-light", 3, "click"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "fas", "fa-tachometer-alt"], [1, "far", "fa-user-circle"], [1, "fas", "fa-key"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "HSPA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Buy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "List Property (Free)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11)(18, "ul", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NavBarComponent_li_19_Template, 3, 0, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavBarComponent_li_20_Template, 3, 0, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavBarComponent_div_21_Template, 4, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedin() == "{}");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedin() == "{}");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedin() != "{}");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5369:
/*!*****************************************************************!*\
  !*** ./src/app/property/add-property/add-property.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPropertyComponent": () => (/* binding */ AddPropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_model_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/property */ 6538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/housing.service */ 9382);
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alertify.service */ 3856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9300);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property-card/property-card.component */ 134);












const _c0 = ["formTabs"];
function AddPropertyComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select sell or rent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_label_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bhk_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("btnRadio", bhk_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](bhk_r20);
  }
}
function AddPropertyComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select BHK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_label_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ptype_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("btnRadio", ptype_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ptype_r21);
  }
}
function AddPropertyComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select property type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_label_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ftype_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("btnRadio", ftype_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ftype_r22);
  }
}
function AddPropertyComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select furnishing type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select building, society or project name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", city_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](city_r23.name);
  }
}
function AddPropertyComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_label_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Price (in USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_label_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Rent (in USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_div_60_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_div_60_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "rent");
  }
}
function AddPropertyComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AddPropertyComponent_div_60_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AddPropertyComponent_div_60_ng_template_3_Template, 1, 0, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.SellRent.value == 1)("ngIfElse", _r25);
  }
}
function AddPropertyComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 27)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Security (in USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 27)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Maintenance (in USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AddPropertyComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select built up area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AddPropertyComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select ready to move ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return {
    containerClass: "theme-dark-blue",
    dateInputFormat: "DD-MM-YYYY"
  };
};
function AddPropertyComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 69)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Possession/Avaialble From");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c1));
  }
}
function AddPropertyComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Age of Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c2 = function () {
  return [1, 2, 3, 4];
};
class AddPropertyComponent {
  constructor(fb, router, housingService, alertify) {
    this.fb = fb;
    this.router = router;
    this.housingService = housingService;
    this.alertify = alertify;
    this.propertyType = ['House', 'Apartment', 'Duplex'];
    this.furnishType = ['Fully', 'Semi', 'Unfurnished'];
    this.entranceTypes = ['East', 'West', 'South', 'North'];
    this.propertyView = {
      Id: null,
      SellRent: null,
      Name: null,
      PType: null,
      Price: null,
      FType: null,
      BHK: null,
      BuiltArea: null,
      City: '',
      RTM: null
    };
    this.property = new src_app_model_property__WEBPACK_IMPORTED_MODULE_0__.Property();
  }
  ngOnInit() {
    this.CreateAddPropertyForm();
    this.housingService.getAllCities().subscribe(data => {
      this.cityList = data;
      console.log(data);
    });
  }
  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        BHK: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        PType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        FType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        City: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        BuiltArea: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null]
      }),
      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        LandMark: [null]
      }),
      OtherInfo: this.fb.group({
        RTM: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
    });
  }
  //#region <Getter method>
  //#region <FormGroup>
  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'];
  }
  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'];
  }
  get AddressInfo() {
    return this.addPropertyForm.controls['AddressInfo'];
  }
  get OtherInfo() {
    return this.addPropertyForm.controls['OtherInfo'];
  }
  get SellRent() {
    return this.BasicInfo.controls['SellRent'];
  }
  get BHK() {
    return this.BasicInfo.controls['BHK'];
  }
  get PType() {
    return this.BasicInfo.controls['PType'];
  }
  get FType() {
    return this.BasicInfo.controls['FType'];
  }
  get Name() {
    return this.BasicInfo.controls['Name'];
  }
  get City() {
    return this.BasicInfo.controls['City'];
  }
  get Price() {
    return this.PriceInfo.controls['Price'];
  }
  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'];
  }
  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'];
  }
  get Security() {
    return this.PriceInfo.controls['Security'];
  }
  get Maintenance() {
    return this.PriceInfo.controls['Maintenance'];
  }
  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'];
  }
  get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'];
  }
  get Address() {
    return this.AddressInfo.controls['Address'];
  }
  get LandMark() {
    return this.AddressInfo.controls['LandMark'];
  }
  get RTM() {
    return this.OtherInfo.controls['RTM'];
  }
  get PossessionOn() {
    return this.OtherInfo.controls['PossessionOn'];
  }
  get AOP() {
    return this.OtherInfo.controls['AOP'];
  }
  get Gated() {
    return this.OtherInfo.controls['Gated'];
  }
  get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'];
  }
  get Description() {
    return this.OtherInfo.controls['Description'];
  }
  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    this.nextClicked = true;
    if (this.allTabsValid()) {
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success("Successfully listed a property");
      console.log(this.addPropertyForm);
      if (this.SellRent.value === '2') {
        this.router.navigate(['/rent-property']);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.alertify.error("Please review the form");
    }
  }
  mapProperty() {
    this.property.Id = this.housingService.newPropId();
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.PType = this.PType.value;
    this.property.Name = this.Name.value;
    this.property.City = this.City.value;
    this.property.FType = this.FType.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
    this.property.Maintenance = this.Maintenance.value;
    this.property.BuiltArea = this.BuiltArea.value;
    this.property.CarpetArea = this.CarpetArea.value;
    this.property.FloorNo = this.FloorNo.value;
    this.property.TotalFloor = this.TotalFloor.value;
    this.property.Address = this.Address.value;
    this.property.Address2 = this.LandMark.value;
    this.property.RTM = this.RTM.value;
    this.property.AOP = this.AOP.value;
    this.property.Gated = this.Gated.value;
    this.property.MainEntrance = this.MainEntrance.value;
    this.property.Possession = this.PossessionOn.value;
    this.property.Description = this.Description.value;
    this.property.PostedOn = new Date().toString();
  }
  allTabsValid() {
    if (this.BasicInfo.invalid) {
      if (this.formTabs) this.formTabs.tabs[0].active = true;
      return false;
    }
    if (this.PriceInfo.invalid) {
      if (this.formTabs) this.formTabs.tabs[1].active = true;
      return false;
    }
    if (this.AddressInfo.invalid) {
      if (this.formTabs) this.formTabs.tabs[2].active = true;
      return false;
    }
    if (this.OtherInfo.invalid) {
      if (this.formTabs) this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }
  selectTab(tabId, IsCurrentTabValid) {
    this.nextClicked = true;
    if (this.formTabs?.tabs[tabId] && IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
AddPropertyComponent.ɵfac = function AddPropertyComponent_Factory(t) {
  return new (t || AddPropertyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_1__.HousingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__.AlertifyService));
};
AddPropertyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddPropertyComponent,
  selectors: [["app-add-property"]],
  viewQuery: function AddPropertyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.formTabs = _t.first);
    }
  },
  decls: 160,
  vars: 30,
  consts: [[1, "row", "mb-5"], [1, "col-8", "shadow-lg", "p-0", "bg-white"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "tab-panel"], [1, "member-tabset"], ["formTabs", ""], ["heading", "Basic Info", "formGroupName", "BasicInfo"], [1, "form-group", "col-12", "mt-3"], ["btnRadioGroup", "", "ngModel", "", "formControlName", "SellRent", "required", "", 1, "btn-group"], ["btnRadio", "1", "tabindex", "0", "role", "button", "name", "SellRent", 1, "btn", "btn-outline-primary", "me-1"], ["btnRadio", "2", "tabindex", "0", "role", "button", "name", "SellRent", 1, "btn", "btn-outline-primary"], ["class", "error-block", 4, "ngIf"], ["btnRadioGroup", "", "formControlName", "BHK", "name", "BHK", 1, "btn-group", 3, "ngModel", "ngModelChange"], ["class", "btn btn-outline-primary me-1", "tabindex", "0", "role", "button", "name", "BHK", 3, "btnRadio", 4, "ngFor", "ngForOf"], ["btnRadioGroup", "", "formControlName", "PType", 1, "btn-group", 3, "ngModel", "ngModelChange"], ["class", "btn btn-outline-primary me-1", "tabindex", "0", "role", "button", "name", "SellRent", 3, "btnRadio", 4, "ngFor", "ngForOf"], ["btnRadioGroup", "", "formControlName", "FType", 1, "btn-group", 3, "ngModel", "ngModelChange"], ["class", "btn btn-outline-primary me-1", "tabindex", "0", "role", "button", "name", "FurnishType", 3, "btnRadio", 4, "ngFor", "ngForOf"], ["type", "text", "ngModel", "", "formControlName", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "City", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "me-3", "mt-3", 3, "click"], ["heading", "Pricing and Area", "formGroupName", "PriceInfo"], [1, "form-group", "col-12"], [4, "ngIf"], ["type", "text", "formControlName", "Price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "BuiltArea", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "CarpetArea", 1, "form-control"], ["heading", "Address", "formGroupName", "AddressInfo"], ["type", "text", "formControlName", "FloorNo", 1, "form-control"], ["type", "text", "formControlName", "TotalFloor", 1, "form-control"], ["type", "text", "formControlName", "Address", 1, "form-control"], ["type", "text", "formControlName", "LandMark", 1, "form-control"], ["heading", "Other Details", "formGroupName", "OtherInfo"], ["btnRadioGroup", "", "formControlName", "RTM", 1, "btn-group"], ["btnRadio", "1", "tabindex", "0", "role", "button", "name", "RTM", 1, "btn", "btn-outline-primary", "mr-2"], ["btnRadio", "2", "tabindex", "0", "role", "button", "name", "RTM", 1, "btn", "btn-outline-primary"], ["class", "form-group col-6", 4, "ngIf"], ["class", "form-group col-3", 4, "ngIf"], ["btnRadioGroup", "", "formControlName", "Gated", 1, "btn-group"], ["btnRadio", "1", "tabindex", "0", "role", "button", "name", "Gated", 1, "btn", "btn-outline-primary", "mr-2"], ["btnRadio", "2", "tabindex", "0", "role", "button", "name", "Gated", 1, "btn", "btn-outline-primary"], ["btnRadioGroup", "", "formControlName", "MainEntrance", 1, "btn-group"], ["btnRadio", "1", "tabindex", "0", "role", "button", "name", "Entrance", 1, "btn", "btn-outline-primary", "mr-2"], ["btnRadio", "2", "tabindex", "0", "role", "button", "name", "Entrance", 1, "btn", "btn-outline-primary"], ["btnRadio", "3", "tabindex", "0", "role", "button", "name", "Entrance", 1, "btn", "btn-outline-primary"], ["btnRadio", "4", "tabindex", "0", "role", "button", "name", "Entrance", 1, "btn", "btn-outline-primary"], ["type", "text", "formControlName", "Description", "rows", "6", 1, "form-control"], ["heading", "Photos"], [1, "photo-control"], ["type", "button", 1, "mt-5"], ["type", "reset", 1, "btn", "btn-primary", "btn-block", "me-3", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "me-3", "mt-3"], [1, "col-4"], [1, "shadow-lg", "p-3", "bg-white"], [3, "property", "hideIcons"], [1, "error-block"], ["tabindex", "0", "role", "button", "name", "BHK", 1, "btn", "btn-outline-primary", "me-1", 3, "btnRadio"], ["tabindex", "0", "role", "button", "name", "SellRent", 1, "btn", "btn-outline-primary", "me-1", 3, "btnRadio"], ["tabindex", "0", "role", "button", "name", "FurnishType", 1, "btn", "btn-outline-primary", "me-1", 3, "btnRadio"], [3, "value"], [4, "ngIf", "ngIfElse"], ["ShowRent", ""], ["type", "text", "formControlName", "Security", 1, "form-control"], ["type", "text", "formControlName", "Maintenance", 1, "form-control"], [1, "form-group", "col-6"], ["type", "text", "formControlName", "PossessionOn", "bsDatepicker", "", 1, "form-control", 3, "bsConfig"], [1, "form-group", "col-3"], ["type", "text", "formControlName", "AOP", 1, "form-control"]],
  template: function AddPropertyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "List your Property");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddPropertyComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "tabset", 7, 8)(11, "tab", 9)(12, "div", 10)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "I want to");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11)(16, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Sell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Rent");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AddPropertyComponent_div_20_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10)(22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "BHK");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddPropertyComponent_Template_div_ngModelChange_24_listener($event) {
        return ctx.propertyView.BHK = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AddPropertyComponent_label_25_Template, 2, 2, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AddPropertyComponent_div_26_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10)(28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Property Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddPropertyComponent_Template_div_ngModelChange_30_listener($event) {
        return ctx.propertyView.PType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AddPropertyComponent_label_31_Template, 2, 2, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AddPropertyComponent_div_32_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 10)(34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Furnishing Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddPropertyComponent_Template_div_ngModelChange_36_listener($event) {
        return ctx.propertyView.FType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AddPropertyComponent_label_37_Template, 2, 2, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, AddPropertyComponent_div_38_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 10)(40, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "in Building/Society/Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddPropertyComponent_Template_input_ngModelChange_42_listener($event) {
        return ctx.propertyView.Name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, AddPropertyComponent_div_43_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 10)(45, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddPropertyComponent_Template_select_ngModelChange_47_listener($event) {
        return ctx.propertyView.City = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "--Select City--");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, AddPropertyComponent_option_50_Template, 2, 2, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, AddPropertyComponent_div_51_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 10)(53, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_53_listener() {
        return ctx.selectTab(1, ctx.BasicInfo.valid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "tab", 26)(56, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, AddPropertyComponent_label_57_Template, 2, 0, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, AddPropertyComponent_label_58_Template, 2, 0, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddPropertyComponent_Template_input_ngModelChange_59_listener($event) {
        return ctx.propertyView.Price = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, AddPropertyComponent_div_60_Template, 5, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, AddPropertyComponent_div_61_Template, 9, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 27)(63, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Built Area (in Sqr Feet)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddPropertyComponent_Template_input_ngModelChange_65_listener($event) {
        return ctx.propertyView.BuiltArea = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, AddPropertyComponent_div_66_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 27)(68, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Carpet Area (in Sqr Feet)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 27)(72, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_72_listener() {
        return ctx.selectTab(2, ctx.PriceInfo.valid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_74_listener() {
        return ctx.selectTab(0, ctx.PriceInfo.valid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "tab", 32)(77, "div", 27)(78, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Floor");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 27)(82, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Total Floor");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 27)(86, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, AddPropertyComponent_div_89_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 27)(91, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Landmark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 27)(95, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_95_listener() {
        return ctx.selectTab(3, ctx.AddressInfo.valid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_97_listener() {
        return ctx.selectTab(1, ctx.AddressInfo.valid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "tab", 37)(100, "div", 27)(101, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Ready to Move");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 38)(104, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Yes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "No ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, AddPropertyComponent_div_108_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, AddPropertyComponent_div_109_Template, 4, 2, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, AddPropertyComponent_div_110_Template, 4, 0, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 27)(112, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Gated Community");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 43)(115, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 27)(120, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Main Entrance");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 46)(123, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "East");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "West");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "South");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "North");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 27)(132, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "textarea", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 27)(136, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_136_listener() {
        return ctx.selectTab(4, ctx.OtherInfo.valid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_138_listener() {
        return ctx.selectTab(2, ctx.OtherInfo.valid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "tab", 52)(141, "div", 27)(142, "div", 53)(143, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, " This is under construction ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "div", 27)(148, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPropertyComponent_Template_button_click_148_listener() {
        return ctx.selectTab(3, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 57)(155, "div", 3)(156, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "Your Property Preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](159, "app-property-card", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.addPropertyForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.SellRent.invalid && ctx.nextClicked);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertyView.BHK);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.BHK.invalid && ctx.nextClicked);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertyView.PType);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.propertyType);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.PType.invalid && ctx.nextClicked);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertyView.FType);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.furnishType);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FType.invalid && ctx.nextClicked);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertyView.Name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Name.invalid && (ctx.nextClicked || ctx.Name.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertyView.City);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cityList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.City.invalid && (ctx.nextClicked || ctx.City.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.SellRent.value == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.SellRent.value == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertyView.Price);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Price.invalid && (ctx.nextClicked || ctx.Price.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.SellRent.value == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertyView.BuiltArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.BuiltArea.invalid && ctx.nextClicked);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Address.invalid && (ctx.nextClicked || ctx.Address.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.RTM.invalid && ctx.nextClicked);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.RTM.value == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.RTM.value == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("property", ctx.propertyView)("hideIcons", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabsetComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonRadioDirective, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonRadioGroupDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_3__.PropertyCardComponent],
  styles: [".photo-control[_ngcontent-%COMP%] {\r\n  min-height: 300px;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  border: 1px dashed blue;\r\n  margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvcGVydHkvYWRkLXByb3BlcnR5L2FkZC1wcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi5waG90by1jb250cm9sIHtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgYmx1ZTtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 134:
/*!*******************************************************************!*\
  !*** ./src/app/property/property-card/property-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyCardComponent": () => (/* binding */ PropertyCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function PropertyCardComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx_r0.property.Image, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function PropertyCardComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
  }
}
function PropertyCardComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13)(1, "li", 14)(2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 14)(5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/property-detail/", ctx_r2.property.Id, "");
  }
}
function PropertyCardComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PropertyCardComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Furnished");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class PropertyCardComponent {}
PropertyCardComponent.ɵfac = function PropertyCardComponent_Factory(t) {
  return new (t || PropertyCardComponent)();
};
PropertyCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PropertyCardComponent,
  selectors: [["app-property-card"]],
  inputs: {
    property: "property",
    hideIcons: "hideIcons"
  },
  decls: 23,
  vars: 12,
  consts: [[1, "card"], [1, "card-img-wrapper"], ["class", "card-img-top", 3, "src", 4, "ngIf"], ["class", "card-img-top", "src", "assets/images/house_default.jpg", 4, "ngIf"], ["class", "list-inline text-center member-icons animate", 4, "ngIf"], [1, "card-body", "p-1"], [1, "mb-0"], [4, "ngIf"], [1, "mt-2"], [1, "mt-0", "mb-2"], [1, "font-highlight"], [1, "card-img-top", 3, "src"], ["src", "assets/images/house_default.jpg", 1, "card-img-top"], [1, "list-inline", "text-center", "member-icons", "animate"], [1, "list-inline-item"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa-solid", "fa-pen-to-square"], [1, "btn", "btn-primary"], [1, "fa-solid", "fa-address-book"]],
  template: function PropertyCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyCardComponent_img_2_Template, 1, 1, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PropertyCardComponent_img_3_Template, 1, 0, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyCardComponent_ul_4_Template, 7, 1, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PropertyCardComponent_span_9_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PropertyCardComponent_span_13_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | Ready to Move");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " | Area: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property.Image);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.property.Image);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideIcons);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.property.BHK, " BHK ", ctx.property.PType, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" in ", ctx.property.Name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property.Name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.property.City, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.property.FType, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property.FType !== "Unfurnished");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.property.Price, " USD.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.property.BuiltArea, " Sq Ft ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".card[_ngcontent-%COMP%]{\n  min-height: 400px;\n}\n\n.card-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-family: fantasy;\n  color: #0069d9;\n}\n\n.font-highlight[_ngcontent-%COMP%]{\n  font-style: italic;\n  color: red;\n}\n.card-img-wrapper[_ngcontent-%COMP%]{\n  overflow: hidden;\n  position: relative;\n}\n\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n  transform: scale(1.1,1.1);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n  height: 250px;\n  opacity: 0.5;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  transform: scale(1,1);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n  height: 250px;\n}\n\n.member-icons[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: -10;\n  left: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  opacity: 0;\n}\n\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%]{\n  bottom: 0;\n  opacity: 1;\n}\n\n.animate[_ngcontent-%COMP%]{\n  transition: all 0.6s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvcGVydHkvcHJvcGVydHktY2FyZC9wcm9wZXJ0eS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLmNhcmQtYm9keSBoMXtcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gIGNvbG9yOiAjMDA2OWQ5O1xufVxuXG4uZm9udC1oaWdobGlnaHR7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHJlZDtcbn1cbi5jYXJkLWltZy13cmFwcGVye1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkOmhvdmVyIGltZ3tcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2FyZCBpbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLm1lbWJlci1pY29uc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYXJkLWltZy13cmFwcGVyOmhvdmVyIC5tZW1iZXItaWNvbnN7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFuaW1hdGV7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5807:
/*!******************************************************************************!*\
  !*** ./src/app/property/property-detail/property-detail-resolver.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyDetailResolverService": () => (/* binding */ PropertyDetailResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/housing.service */ 9382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);




class PropertyDetailResolverService {
  constructor(housingServive, router) {
    this.housingServive = housingServive;
    this.router = router;
  }
  resolve(route, state) {
    const propId = route.params['id'];
    return this.housingServive.getProperty(+propId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      this.router.navigate(['/']);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
    }));
  }
}
PropertyDetailResolverService.ɵfac = function PropertyDetailResolverService_Factory(t) {
  return new (t || PropertyDetailResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_0__.HousingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
PropertyDetailResolverService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PropertyDetailResolverService,
  factory: PropertyDetailResolverService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2548:
/*!***********************************************************************!*\
  !*** ./src/app/property/property-detail/property-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyDetailComponent": () => (/* binding */ PropertyDetailComponent)
/* harmony export */ });
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 5197);
/* harmony import */ var src_app_model_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/property */ 6538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/housing.service */ 9382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);








function PropertyDetailComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx_r0.property.Image, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function PropertyDetailComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 25);
  }
}
class PropertyDetailComponent {
  constructor(route, router, housingService) {
    this.route = route;
    this.router = router;
    this.housingService = housingService;
    this.property = new src_app_model_property__WEBPACK_IMPORTED_MODULE_0__.Property();
  }
  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(data => {
      this.property = data['prp'];
    });
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: any) => {
    //         this.property = data;
    //       },error => this.router.navigate(['/'])
    //     )
    //   }
    // );
    this.galleryOptions = [{
      width: '100%',
      height: '470px',
      thumbnailsColumns: 4,
      imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_3__.NgxGalleryAnimation.Slide,
      preview: true
    }];
    this.galleryImages = [{
      small: 'assets/images/internal-1.jpg',
      medium: 'assets/images/internal-1.jpg',
      big: 'assets/images/internal-1.jpg'
    }, {
      small: 'assets/images/internal-2.jpg',
      medium: 'assets/images/internal-2.jpg',
      big: 'assets/images/internal-2.jpg'
    }, {
      small: 'assets/images/internal-3.jpg',
      medium: 'assets/images/internal-3.jpg',
      big: 'assets/images/internal-3.jpg'
    }, {
      small: 'assets/images/internal-4.jpg',
      medium: 'assets/images/internal-4.jpg',
      big: 'assets/images/internal-4.jpg'
    }, {
      small: 'assets/images/internal-5.jpg',
      medium: 'assets/images/internal-5.jpg',
      big: 'assets/images/internal-5.jpg'
    }, {
      small: 'assets/images/internal-6.jpg',
      medium: 'assets/images/internal-6.jpg',
      big: 'assets/images/internal-6.jpg'
    }];
  }
}
PropertyDetailComponent.ɵfac = function PropertyDetailComponent_Factory(t) {
  return new (t || PropertyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_1__.HousingService));
};
PropertyDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PropertyDetailComponent,
  selectors: [["app-property-detail"]],
  decls: 108,
  vars: 24,
  consts: [[1, "row", "shadow"], [1, "col-sm-4", "p-0"], [1, "card"], [1, "card-img-wrapper"], ["class", "card-img-top", 3, "src", 4, "ngIf"], ["class", "card-img-top", "src", "assets/images/house_default.jpg", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-footer"], [1, "btn-group", "d-flex"], [1, "btn", "btn-primary"], [1, "btn", "btn-success"], [1, "col-sm-8", "p-0"], [1, "tab-panel", "p-3"], [1, "member-tabset"], ["heading", "Overview"], [1, "row"], [1, "col-sm-6"], [1, "heading"], [1, "col-sm-12"], ["heading", "Address"], ["heading", "Photos"], [1, "ngx-gallery", 3, "options", "images"], ["heading", "Contact"], [1, "card-img-top", 3, "src"], ["src", "assets/images/house_default.jpg", 1, "card-img-top"]],
  template: function PropertyDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PropertyDetailComponent_img_4_Template, 1, 1, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PropertyDetailComponent_img_5_Template, 1, 0, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Build Area: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Carpet Area: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Furnishing Type: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8)(29, "div", 9)(30, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Like");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12)(35, "div", 13)(36, "tabset", 14)(37, "tab", 15)(38, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16)(41, "div", 17)(42, "div", 18)(43, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Floor Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 18)(53, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Age of Property");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 18)(58, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Posession");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 17)(63, "div", 18)(64, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Main Entrance");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 18)(69, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Gated Community");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 18)(74, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Security Deposit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 18)(79, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Maintenance");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 19)(84, "div", 18)(85, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "About Property");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "tab", 20)(90, "div", 19)(91, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 18)(94, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "tab", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "ngx-gallery", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "tab", 23)(105, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Contact Detail");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " This should be restricted area and only registered user should be able to see seller contact details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.property.Image);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.property.Image);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.property.BHK, " BHK ", ctx.property.PType, " @ $", ctx.property.Price, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("in ", ctx.property.City, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.property.BuiltArea, " Sqft ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.property.CarpetArea, " Sqft ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.property.FType, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.FloorNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.AOP);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Possession);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.MainEntrance);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Gated);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Security);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Maintenance);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Description);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Address);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.Address2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property.City);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.galleryOptions)("images", ctx.galleryImages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsetComponent, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_3__.NgxGalleryComponent],
  styles: [".card[_ngcontent-%COMP%] {\r\n  min-height: 600px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  height: 260px;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n}\r\n\r\n.ngx-gallery[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvcGVydHkvcHJvcGVydHktZGV0YWlsL3Byb3BlcnR5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkIGltZ3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy13cmFwcGVye1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5uZ3gtZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1887:
/*!*******************************************************************!*\
  !*** ./src/app/property/property-list/property-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyListComponent": () => (/* binding */ PropertyListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/housing.service */ 9382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../property-card/property-card.component */ 134);
/* harmony import */ var _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Pipes/filter.pipe */ 7152);
/* harmony import */ var _Pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Pipes/sort.pipe */ 6499);








function PropertyListComponent_i_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 8);
  }
}
function PropertyListComponent_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 9);
  }
}
function PropertyListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-property-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const property_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("property", property_r3);
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
class PropertyListComponent {
  constructor(route, housingService) {
    this.route = route;
    this.housingService = housingService;
    this.SellRent = 1;
    this.properties = [];
    this.Today = new Date();
    this.City = '';
    this.SortbyParam = '';
    this.SortDirection = 'asc';
  }
  ngOnInit() {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(data => {
      this.properties = data;
      console.log(data);
    }, error => {
      console.log('httperror');
      console.log(error);
    });
  }
  onCityFilter() {
    this.SearchCity = this.City;
  }
  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }
  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
PropertyListComponent.ɵfac = function PropertyListComponent_Factory(t) {
  return new (t || PropertyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_housing_service__WEBPACK_IMPORTED_MODULE_0__.HousingService));
};
PropertyListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PropertyListComponent,
  selectors: [["app-property-list"]],
  decls: 22,
  vars: 15,
  consts: [[3, "ngModel", "ngModelChange"], ["type", "button", 3, "click"], ["value", "City"], ["value", "Price"], ["class", "fas fa-sort-alpha-down", 4, "ngIf"], ["class", "fas fa-sort-alpha-up", 4, "ngIf"], [1, "row"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "fas", "fa-sort-alpha-down"], [1, "fas", "fa-sort-alpha-up"], [1, "col-sm-4"], [1, "shadow-lg", "p-3", "mb-4"], [3, "property"]],
  template: function PropertyListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Filter City: \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyListComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.City = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PropertyListComponent_Template_button_click_3_listener() {
        return ctx.onCityFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PropertyListComponent_Template_button_click_5_listener() {
        return ctx.onCityFilterClear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sort by \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PropertyListComponent_Template_select_ngModelChange_9_listener($event) {
        return ctx.SortbyParam = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PropertyListComponent_Template_button_click_14_listener() {
        return ctx.onSortDirection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Sort ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, PropertyListComponent_i_16_Template, 1, 0, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PropertyListComponent_i_17_Template, 1, 0, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PropertyListComponent_div_19_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.City);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.SortbyParam);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.SortDirection === "asc");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.SortDirection === "desc");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](20, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](21, 8, ctx.properties, ctx.SearchCity, "City"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](12, _c0, ctx.SortbyParam, ctx.SortDirection)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_1__.PropertyCardComponent, _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _Pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__.SortPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3856:
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertifyService": () => (/* binding */ AlertifyService)
/* harmony export */ });
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alertifyjs */ 7472);
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class AlertifyService {
  constructor() {}
  success(message) {
    alertifyjs__WEBPACK_IMPORTED_MODULE_0__.success(message);
  }
  warning(message) {
    alertifyjs__WEBPACK_IMPORTED_MODULE_0__.warning(message);
  }
  error(message) {
    alertifyjs__WEBPACK_IMPORTED_MODULE_0__.error(message);
  }
}
AlertifyService.ɵfac = function AlertifyService_Factory(t) {
  return new (t || AlertifyService)();
};
AlertifyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AlertifyService,
  factory: AlertifyService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AuthService {
  constructor() {}
  authUser(user) {
    debugger;
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users') || '{}');
    }
    return UserArray.find(p => p.userName === user.userName && p.password === user.password);
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)();
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9382:
/*!*********************************************!*\
  !*** ./src/app/services/housing.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HousingService": () => (/* binding */ HousingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class HousingService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  getAllCities() {
    return this.http.get(this.baseUrl + '/city/cities');
  }
  getProperty(id) {
    return this.getAllProperties().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(propertiesArray => {
      //throw new Error('Some error');
      return propertiesArray.find(p => p.Id === id);
    }));
  }
  getAllProperties(SellRent) {
    return this.http.get('data/properties.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
      const propertiesArray = [];
      const jsonData = JSON.stringify(data);
      const tmp = JSON.parse(jsonData);
      const localProperties = JSON.parse(localStorage.getItem('newProp') || '{}');
      if (localProperties) {
        for (const id in localProperties) {
          if (SellRent) {
            if (localProperties[id].SellRent == SellRent) {
              propertiesArray.push(localProperties[id]);
            }
          } else {
            propertiesArray.push(localProperties[id]);
          }
        }
      }
      for (const id in tmp) {
        if (SellRent) {
          if (tmp[id].SellRent == SellRent) {
            propertiesArray.push(tmp[id]);
          }
        } else {
          propertiesArray.push(tmp[id]);
        }
      }
      return propertiesArray;
    }));
  }
  addProperty(property) {
    let newProp = [property];
    //Add new property in array if newProp already exist in local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp') || '{}')];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }
  newPropId() {
    if (localStorage.getItem('PID')) {
      return +(localStorage.getItem('PID') ?? 0) + 1;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
HousingService.ɵfac = function HousingService_Factory(t) {
  return new (t || HousingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
HousingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: HousingService,
  factory: HousingService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9682:
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserServiceService": () => (/* binding */ UserServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UserServiceService {
  constructor() {}
  addUser(user) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [...users, user];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
UserServiceService.ɵfac = function UserServiceService_Factory(t) {
  return new (t || UserServiceService)();
};
UserServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UserServiceService,
  factory: UserServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2418:
/*!*********************************************************!*\
  !*** ./src/app/user/user-login/user-login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginComponent": () => (/* binding */ UserLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alertify.service */ 3856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





class UserLoginComponent {
  constructor(authService, alertify, router) {
    this.authService = authService;
    this.alertify = alertify;
    this.router = router;
  }
  ngOnInit() {}
  onLogin(loginForm) {
    console.log(loginForm);
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login Success');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('User not exist');
    }
  }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) {
  return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
UserLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserLoginComponent,
  selectors: [["app-user-login"]],
  decls: 22,
  vars: 1,
  consts: [[1, "row"], [1, "col-6", "m-auto"], [1, "card", "m-auto"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group", "col-12"], ["required", "", "ngModel", "", "name", "userName", 1, "form-control"], ["required", "", "type", "password", "ngModel", "", "name", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", "m-2"]],
  template: function UserLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "form", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UserLoginComponent_Template_form_ngSubmit_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onLogin(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7)(18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1998:
/*!***************************************************************!*\
  !*** ./src/app/user/user-register/user-register.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegisterComponent": () => (/* binding */ UserRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user-service.service */ 9682);
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alertify.service */ 3856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function UserRegisterComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserRegisterComponent_span_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserRegisterComponent_span_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserRegisterComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserRegisterComponent_span_17_span_1_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserRegisterComponent_span_17_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.email.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.email.hasError("email"));
  }
}
function UserRegisterComponent_span_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserRegisterComponent_span_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password should be minimun 8 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserRegisterComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserRegisterComponent_span_22_span_1_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserRegisterComponent_span_22_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.password.errors == null ? null : ctx_r2.password.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.password.errors == null ? null : ctx_r2.password.errors["minlength"]);
  }
}
function UserRegisterComponent_span_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please confirm password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserRegisterComponent_span_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password not matched ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserRegisterComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserRegisterComponent_span_27_span_1_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserRegisterComponent_span_27_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.confirmpassword.hasError == null ? null : ctx_r3.confirmpassword.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.confirmpassword.hasError == null ? null : ctx_r3.confirmpassword.hasError("notmatched")) || ctx_r3.confirmpassword.valid);
  }
}
class UserRegisterComponent {
  constructor(fb, userService, alertify) {
    this.fb = fb;
    this.userService = userService;
    this.alertify = alertify;
    this.userSubmitted = false;
  }
  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required ),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmpassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    // this.registrationForm.controls['userName'].setValue("Ravindu");
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
      confirmpassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10)]]
    }, {
      Validators: this.passwordMatchingValidator
    });
  }
  passwordMatchingValidator(fc) {
    return fc.get('password')?.value === fc.get('confirmpassword')?.value ? null : {
      notmatched: true
    };
  }
  onSubmit() {
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('Congratz, You are successfully registered');
    } else {
      this.alertify.error('Kindly provide the required fields');
    }
  }
  userData() {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }
  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmpassword() {
    return this.registrationForm.get('confirmpassword');
  }
  get mobile() {
    return this.registrationForm.get('mobile');
  }
}
UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) {
  return new (t || UserRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__.AlertifyService));
};
UserRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserRegisterComponent,
  selectors: [["app-user-register"]],
  decls: 41,
  vars: 9,
  consts: [[1, "row"], [1, "col-6", "m-auto"], [1, "card", "m-auto"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "col-12"], ["for", "name", 1, "form-label"], ["type", "text", "formControlName", "userName", 1, "form-control"], ["class", "error-block", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "text", "formControlName", "email", 1, "form-control"], ["for", "passwrod", 1, "form-label"], ["type", "password", "formControlName", "password", 1, "form-control"], ["for", "cpassword", 1, "form-label"], ["type", "password", "formControlName", "confirmpassword", 1, "form-control"], ["for", "mobile", 1, "form-label"], ["type", "text", "formControlName", "mobile", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "reset", 1, "btn", "btn-secondary", "m-2"], [1, "error-block"], [4, "ngIf"]],
  template: function UserRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UserRegisterComponent_span_12_Template, 2, 0, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, UserRegisterComponent_span_17_Template, 3, 2, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6)(19, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, UserRegisterComponent_span_22_Template, 3, 2, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6)(24, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, UserRegisterComponent_span_27_Template, 3, 2, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6)(29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registrationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.userName.valid && ctx.userName.touched || ctx.userSubmitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.email.valid && ctx.email.touched || ctx.userSubmitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.password.valid && ctx.password.touched || ctx.userSubmitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.confirmpassword.valid && ctx.confirmpassword.touched || ctx.userSubmitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Form value : ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 7, ctx.registrationForm.value), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Form status : ", ctx.registrationForm.valid, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  baseUrl: "https://localhost:4200/api"
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map