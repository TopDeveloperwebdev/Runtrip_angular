(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");




var routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n\n    Test Angular Site\n</nav>\n\n<router-outlet></router-outlet>\n<footer class=\"bg-clr footer\">\n    <div class=\"col-lg-12 two-card-section\">\n        <div class=\"padding\">\n            <div>submit</div>\n            <button class=\"button button-full button-assertive\" type=\"submit\">\n        Salvar\n      </button>\n\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  height: 100px;\n  background: red;\n  text-align: center;\n  color: white;\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n\n.footer {\n  height: 100px;\n  background: blue;\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n\n.footer .button.disabled,\n  .footer .button[disabled] {\n    opacity: 0.4;\n    cursor: default !important;\n    pointer-events: none; }\n\n.footer .button.button-assertive {\n    border-color: transparent;\n    background-color: #ef473a;\n    color: #fff; }\n\n.footer .button.button-block,\n  .footer .button.button-full {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n\n.footer .padding {\n    display: flex;\n    justify-content: space-between; }\n\n.footer .padding > div {\n      width: 100px;\n      margin: auto 15px;\n      font-size: 20px;\n      color: white; }\n\n.footer .padding > button {\n      width: 100px;\n      margin: auto 25px;\n      height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXFBhc3RQcm9qZWN0c1xcTmV3IGZvbGRlclxcYW5ndWxhcnRlc3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFMMUI7O0lBUVEsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixvQkFBb0IsRUFBQTs7QUFWNUI7SUFhUSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVcsRUFBQTs7QUFmbkI7O0lBbUJRLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFwQjNCO0lBdUJRLGFBQWE7SUFDYiw4QkFBOEIsRUFBQTs7QUF4QnRDO01BMEJZLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFlBQVksRUFBQTs7QUE3QnhCO01BZ0NZLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuYnV0dG9uLmRpc2FibGVkLFxyXG4gICAgLmJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIC5idXR0b24uYnV0dG9uLWFzc2VydGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NzNhO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi5idXR0b24tYmxvY2ssXHJcbiAgICAuYnV0dG9uLmJ1dHRvbi1mdWxsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+YnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angulartest';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\n    <div class=\"bg\">\n        <h4 class=\"assertive padding\">Form</h4>\n        <section class=\"section pt-lg-0 mt--200\">\n\n            <div class=\"container\">\n                <form novalidate id=\"formCliente\">\n\n                    <div class=\"list list-inset\">\n                        <label class=\"item item-input\">\n              <!-- <i class=\"icon ion-search placeholder-icon\"></i> -->\n              <input [(ngModel)]=\"form.text\" type=\"text\" placeholder=\"Nome Fantasia\" name=\"cli_fantasia\" maxlength=\"50\"\n                required (blur)=\"getValidation(form.text , false)\" />\n\n            </label>\n                    </div>\n                    <div class=\"form-errors\" *ngIf=\"isValidationText\">\n                        <div class=\"form-error\" *ngIf=\"isValidationText\">{{isValidationText}}</div>\n                    </div>\n                    <div class=\"list list-inset\">\n                        <label class=\"item item-input\">\n              <!-- <i class=\"icon ion-search placeholder-icon\"></i> -->\n              <input [(ngModel)]=\"form.number\" type=\"number\" placeholder=\"Razão Social\" min=\"0\" max=\"10000\"\n                name=\"cli_razaosocial\" required (blur)=\"getValidation(form.number , true)\" />\n\n            </label>\n                    </div>\n                    <div class=\"form-errors\" *ngIf=\"isValidationNumber\">\n                        <div class=\"form-error\" *ngIf=\"isValidationNumber\">{{isValidationNumber}}</div>\n                    </div>\n\n\n                    <div class=\"list list-inset content\">\n                        <label class=\"item item-input\" *ngFor=\"let t of types\">\n                          {{t}}\n              <!-- <i class=\"icon ion-search placeholder-icon\"></i> -->\n\n\n            </label>\n                    </div>\n\n\n                </form>\n            </div>\n        </section>\n    </div>\n\n</main>"

/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  min-height: calc(100vh - 200px); }\n  main .bg {\n    background: #f0f0f0;\n    width: 400px;\n    height: 600px; }\n  main .bg h4 {\n      text-align: center;\n      font-size: 30px;\n      color: red; }\n  main .bg .item-row {\n      width: 100%; }\n  main .bg .content {\n      height: 181px;\n      overflow: hidden;\n      overflow-y: scroll; }\n  .list {\n  position: relative;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 0;\n  margin-bottom: 20px;\n  font-size: 13px !important;\n  font-family: \"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif !important; }\n  .card,\n.list-inset {\n  overflow: hidden;\n  margin: 20px 10px;\n  border-radius: 2px;\n  background-color: #fff; }\n  .item {\n  border-color: #ddd;\n  background-color: #fff;\n  color: #444;\n  position: relative;\n  z-index: 2;\n  display: block;\n  margin: 0px;\n  padding: 16px;\n  border-width: 0.55px;\n  border-style: solid;\n  font-size: 16px;\n  --inner-border-width: 0px; }\n  .item-input {\n  display: -moz-flex;\n  display: flex;\n  -moz-align-items: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  padding: 12px 0 12px 16px; }\n  input,\nselect {\n  border-radius: var(--border-radius);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: inline-block;\n  flex: 1;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  select,\ntextarea {\n  margin: 0;\n  font-size: 100%;\n  font-family: inherit;\n  outline-offset: 0;\n  outline-style: none;\n  outline-width: 0;\n  -webkit-font-smoothing: inherit;\n  background-image: none; }\n  .form-errors {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9HOlxcUGFzdFByb2plY3RzXFxOZXcgZm9sZGVyXFxhbmd1bGFydGVzdC9zcmNcXGFwcFxcY29udGVudFxcY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCLEVBQUE7RUFObkM7SUFRUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQVZyQjtNQVlZLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsVUFBVSxFQUFBO0VBZHRCO01BaUJZLFdBQVcsRUFBQTtFQWpCdkI7TUFvQlksYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQUs5QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDJGQUEyRixFQUFBO0VBRy9GOztFQUVJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBcUIsRUFBQTtFQUd6QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBO0VBRzdCOztFQUVJLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QscUJBQXFCO0VBRXJCLE9BQU87RUFDUCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUV2QixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtFQUdwQjs7RUFFSSxTQUFTO0VBQ1QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isc0JBQXNCLEVBQUE7RUFHMUI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgbWFpbiB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XHJcbiAgICAgLmJnIHtcclxuICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5pdGVtLXJvdyB7XHJcbiAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDE4MXB4O1xyXG4gICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gLmxpc3Qge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1mYW1pbHk6IFwiLWFwcGxlLXN5c3RlbVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuY2FyZCxcclxuIC5saXN0LWluc2V0IHtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gfVxyXG4gXHJcbiAuaXRlbSB7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHotaW5kZXg6IDI7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgcGFkZGluZzogMTZweDtcclxuICAgICBib3JkZXItd2lkdGg6IDAuNTVweDtcclxuICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xyXG4gfVxyXG4gXHJcbiAuaXRlbS1pbnB1dCB7XHJcbiAgICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgcGFkZGluZzogMTJweCAwIDEycHggMTZweDtcclxuIH1cclxuIFxyXG4gaW5wdXQsXHJcbiBzZWxlY3Qge1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1zdGFydCk7XHJcbiAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1lbmQpO1xyXG4gICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLXRvcCk7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctYm90dG9tKTtcclxuICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgICAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XHJcbiAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG4gICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAtbXMtZmxleDogMTtcclxuICAgICBmbGV4OiAxO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgIGJvcmRlcjogMDtcclxuICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuIH1cclxuIFxyXG4gc2VsZWN0LFxyXG4gdGV4dGFyZWEge1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgb3V0bGluZS1vZmZzZXQ6IDA7XHJcbiAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICAgICBvdXRsaW5lLXdpZHRoOiAwO1xyXG4gICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuIH1cclxuIFxyXG4gLmZvcm0tZXJyb3JzIHtcclxuICAgICBjb2xvcjogcmVkO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.form = {
            number: null,
            text: ''
        };
        this.types = ['content1', 'content2', 'content3', 'content4'];
        this.isValidationNumber = '';
        this.isValidationText = '';
    };
    ContentComponent.prototype.getValidation = function (value, isNumber) {
        if (isNumber) {
            if (value) {
                if (0 < value && 10000 >= value) {
                    this.isValidationNumber = '';
                }
                else {
                    this.isValidationNumber = "Invalide Number";
                }
            }
            else {
                this.isValidationNumber = "Require number";
            }
        }
        else {
            if (value == '') {
                this.isValidationText = "Require Text";
            }
        }
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\PastProjects\New folder\angulartest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map