(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet>\n\n</router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid detail-review\">\n                        <div class=\"detail-img\">\n                            <div class=\"first-img\">\n\n                                <img src=\"{{selectedEvent.imgp}}\" />\n                                <div class=\"title-detail\">\n                                    <div class=\"title\">{{selectedEvent.nombre}}<span>{{selectedEvent.pais}}</span></div>\n                                    <div class=\"name\">Maratón Internacional de Buenos Aires Buenos AiresARGENTNA</div>\n                                    <div class=\"date\">{{selectedEvent.fecha}}</div>\n                                    <div class=\"calendar-bar\">\n                                        <div>DAYS\n                                            <div>46</div>\n                                        </div>\n                                        <div>DAYS\n                                            <div>46</div>\n                                        </div>\n                                        <div>DAYS\n                                            <div>46</div>\n                                        </div>\n                                        <div>DAYS\n                                            <div>46</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"second-img\">\n\n                                <div class=\"img\">\n                                    <ngb-carousel>\n                                        <ng-template ngbSlide *ngFor=\"let carousel of carousels\">\n                                            <div class=\"picsum-img-wrapper\">\n                                                <img src=\"{{carousel}}\" alt=\"Angular Carousel 1\">\n                                            </div>\n                                        </ng-template>\n                                    </ngb-carousel>\n                                </div>\n                                <div class=\"social-icons\">\n                                    <a> <img src=\"./assets/img/icon/facebook.png\" /></a>\n                                    <a> <img src=\"./assets/img/icon/twitter.png\" /></a>\n                                    <a> <img src=\"./assets/img/icon/instagram.png\" /></a>\n                                    <a> <img src=\"./assets/img/icon/zocial.png\" /></a>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"detail-text\">\n                            <div class=\"top-text\">\n                                <div>\n                                    <img src=\"./assets/img/icon/sun.png\" />\n                                    <div>Aver. air temp\n                                        <div>12º /22º</div>\n                                    </div>\n                                </div>\n                                <div><img src=\"./assets/img/icon/flight.png\" />\n                                    <div>EZE</div>\n                                </div>\n                            </div>\n                            <div class=\"bottom-text\">{{selectedEvent.desc}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid buttons\">\n                        <div>\n                            <img src=\"./assets/img/icon/RTx.png\">\n                            <div>experiences</div>\n                        </div>\n                        <div>\n                            <img src=\"./assets/img/icon/sign-in.png\">\n                            <div>sign in</div>\n                        </div>\n                        <div>\n                            <img src=\"./assets/img/icon/share.png\">\n                            <div>experiences</div>\n                        </div>\n                        <div>\n                            <img src=\"./assets/img/icon/save.png\">\n                            <div>experiences</div>\n                        </div>\n                    </div>\n                    <div class=\"mt-20 flex justify-content-center \"> <img class=\"ml-auto mr-auto line\" src=\"./assets/img/screen/line.png\"></div>\n                </div>\n                <div class=\"col-lg-12 info-search-section\">\n                    <div class=\"hotel-card col-lg-5\">\n                        <div>Hotel Holiday inn, Buenos Aires Argentina\n                        </div>\n                        <div>\n                            <div>Check In<br>Sep. 26</div>\n                            <div>Check out<br>Sep. 26</div>\n                        </div>\n                        <div>\n                            <div>3 noches con desayuno\n                            </div>\n                            <div>u$ 427.-</div>\n                        </div>\n                    </div>\n                    <div class=\"flight-card col-lg-5\">\n                        <div>\n                            <div>\n                                <div>from</div>\n                                <div>JFK</div>\n                                <div>Sep. 26</div>\n                            </div>\n                            <div>\n                                <div>to</div>\n                                <div>EZE</div>\n                                <div>Sep. 30</div>\n                            </div>\n                        </div>\n                        <div>\n                            <div>3 noches con desayuno\n                            </div>\n                            <div>u$ 427.-</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"youtube-section col-lg-12\">\n                    <div class=\"col-lg-12 two-card-section\">\n                        <div class=\"row row-grid buttons\">\n                            <div>\n                                <img src=\"./assets/img/icon/tab-1.png\">\n                                <div>12</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-2.png\">\n                                <div>36</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-3.png\">\n                                <div>0</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/icon-green-1.png\">\n                                <div>17</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-5.png\">\n                                <div>21</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-6.png\">\n                                <div>36</div>\n                            </div>\n                        </div>\n                        <div class=\"flex justify-content-center\"> <img class=\"ml-auto mr-auto line\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                    <div class=\"iframe-container\">\n                        <iframe width=\"100%\" height=\"730\" [src]=\"displayURL\">\n                        </iframe>\n                    </div>\n\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"mt-20 \"> <img class=\"main-img line\" src=\"./assets/img/screen/line.png\"></div>\n                        <div class=\" mt-20 \">\n                            <div class=\"title\">Las mejores</div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"row row-grid\">\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"small-title\">MORE LIKE THIS ...</div>\n                    <div class=\"row row-grid\">\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-1.png\"></div>\n                            </div>\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-2.png\"></div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20 \"> <img class=\"main-img line\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <img class=\"main-img\" src=\"./assets/img/screen/p3.png\">\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-lg-12 search-bar-section\">\n                    <img src=\"{{search_logo}}\" />\n                    <div class=\"search-bar\">\n                        <div class=\"search-section\">\n                            <input class=\"location-key\" />\n                            <input class=\"date-key\" />\n                            <a class=\"search-btn\"></a>\n                        </div>\n                        <img src=\"./assets/img/screen/ads_line.png\" />\n                    </div>\n\n                </div>\n\n\n                <div class=\"col-lg-12 map-section\">\n                    <agm-map [zoom]=\"zoom\" [disableDefaultUI]=\"true\" [scrollwheel]=\"false\" [styles]=\"darkstyle\">\n                        <agm-marker [iconUrl]=\"eventData.marker\" [latitude]=\"eventData.a_lat\" [longitude]=\"eventData.a_long\" *ngFor=\"let eventData of eventDatas\"></agm-marker>\n                        <agm-marker [iconUrl]=\"Black_point.marker\" [latitude]=\"Black_point.lat\" [longitude]=\"Black_point.lng\" *ngFor=\"let Black_point of Black_points\"></agm-marker>\n                    </agm-map>\n                </div>\n\n\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-1.png\"></div>\n                            </div>\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-2.png\"></div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-12 main-card\">\n                                <img class=\"main-img\" src=\"./assets/img/screen/flight_cover.png\">\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"icons-section\">\n                            <img src=\"./assets/img/icon/date.png\" />\n                            <img class=\"vertical-line\" src=\"./assets/img/icon/vertical_line.png\" />\n                            <img src=\"./assets/img/icon/map.png\" />\n                        </div>\n                        <div class=\"search-result-section col-lg-12\">\n                            <div class=\"main-card\" *ngFor=\"let event of eventDatas ; let indexOfelement=index;\" (click)='moveDetailPage(indexOfelement)'>\n                                <img src=\"{{event.imgp}}\" />\n                                <div class=\"detail\">\n                                    <p class=\"location\">{{event.nombre}}</p>\n                                    <p class=\"name\">{{event.pais}}</p>\n                                    <p class=\"date\">{{event.fecha}}</p>\n                                    <p class=\"peoples\">runtripers 566</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-lg-12 two-card-section\">\n                    <img class=\"main-img\" src=\"./assets/img/screen/ads-cover.png\">\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"position-relative\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero section-shaped\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\n        <div class=\"col px-0\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-lg-6 text-center\">\n              <img src=\"./assets/img/brand/argon-white.png\" style=\"width: 200px;\" class=\"img-fluid\">\n              <p class=\"lead text-white\">A beautiful Design System for Bootstrap 4 and Angular 7. It's Free and Open Source.</p>\n              <div class=\"btn-wrapper mt-5\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\n                  <span class=\"btn-inner--text\">Download Angular</span>\n                </a>\n                <a href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-github btn-icon mb-3 mb-sm-0\" target=\"_blank\">\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-github\"></i></span>\n                  <span class=\"btn-inner--text\">\n                    <span class=\"text-warning\">Star us</span> on Github</span>\n                </a>\n              </div>\n              <div class=\"mt-5\">\n                <small class=\"text-white font-weight-bold mb-0 mr-2\">*proudly coded by</small>\n                <img src=\"./assets/img/brand/creativetim-white-slim.png\" style=\"height: 28px;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n  </div>\n  <app-sections></app-sections>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"title\">Tu próxima</div>\n                <div class=\"col-lg-12\">\n                    <div class=\"row row-grid\">\n\n                        <div class=\"col-lg-3 main-card\" *ngFor=\"let ad of ads$\">\n                            <div class=\"img-section\"> <img class=\"main-img\" src=\"{{ad.img}}\"></div>\n                            <div class=\"custom-card\">\n                                <div>{{ad.desc}}</div>\n                                <div class=\"country-title\"> {{ad.ciudad}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 icons-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"col-lg-3 main-card\">\n                            <div> <img class=\"main-img\" src=\"./assets/img/icon/icon-1.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div> <img class=\"main-img\" src=\"./assets/img/icon/icon-1.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div> <img class=\"main-img\" src=\"./assets/img/icon/icon-1.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div> <img class=\"main-img\" src=\"./assets/img/icon/icon-1.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 map-section\">\n                    <agm-map [zoom]=\"zoom\" [disableDefaultUI]=\"true\" [scrollwheel]=\"false\" [styles]=\"darkstyle\">\n                        <agm-marker [iconUrl]=\"Ads_point.marker\" [latitude]=\"Ads_point.lat\" [longitude]=\"Ads_point.lng\" *ngFor=\"let Ads_point of Ads_points\"></agm-marker>\n                        <agm-marker [iconUrl]=\"Black_point.marker\" [latitude]=\"Black_point.lat\" [longitude]=\"Black_point.lng\" *ngFor=\"let Black_point of Black_points\"></agm-marker>\n                    </agm-map>\n                </div>\n                <div class=\"title\">RTx</div>\n\n                <div class=\"col-lg-12 icons-section bottim-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"col-lg-12 bottim-img-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-1.png\"></div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-2.png\"></div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-3.png\"></div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-4.png\"></div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-1.png\"></div>\n                            </div>\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-2.png\"></div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"search-section\">\n                        <input placeholder=\"NOMBRE / LOCACION\" [(ngModel)]='filter_data.location' />\n                        <input placeholder=\"FECHA\" date=\"dd/mm/yyyy\" [(ngModel)]='filter_data.date' type=\"date\" />\n                        <select [(ngModel)]='event_type'>                          \n                            <option *ngFor=\"let type of types\">{{type}}</option>\n                        </select>\n\n                        <a class=\"search-btn\" (click)='filter(event_type)'></a>\n                    </div>\n                    <div class=\"search-result-section col-lg-12\">\n                        <div class=\"col-lg-3\" *ngFor=\"let type of types ; let indexOfelement=index;\">\n                            <div class=\"main-card\" [class]=\"indexOfelement == 0 ? 'red' : '' || indexOfelement == 6 ? 'green' : '' \" (click)='filter(type)'>\n                                <img src=\"./assets/img/icon/ads-{{indexOfelement + 1}}.png\" />\n                            </div>\n                            <p>{{type}}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                        <div class=\" mt-20 \">\n                            <div class=\"title\">Las mejores</div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"row row-grid\">\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-1.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-2.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-1.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-2.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <img class=\"main-img\" src=\"./assets/img/screen/p3.png\">\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n              <div class=\"text-muted text-center mb-3\">\n                <small>Sign in with</small>\n              </div>\n              <div class=\"btn-wrapper text-center\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/github.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Github</span>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/google.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Google</span>\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n              <form role=\"form\">\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                    <span>Remember me</span>\n                  </label>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-6\">\n              <a href=\"javascript:void(0)\" class=\"text-light\">\n                <small>Forgot password?</small>\n              </a>\n            </div>\n            <div class=\"col-6 text-right\">\n              <a href=\"javascript:void(0)\" class=\"text-light\">\n                <small>Create new account</small>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"profile-page\">\n  <section class=\"section-profile-cover section-shaped my-0\">\n    <!-- Circles background -->\n    <div class=\"shape shape-style-1 shape-primary alpha-4\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <!-- SVG separator -->\n    <div class=\"separator separator-bottom separator-skew\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"card card-profile shadow mt--300\">\n        <div class=\"px-4\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-3 order-lg-2\">\n              <div class=\"card-profile-image\">\n                <a href=\"javascript:void(0)\">\n                  <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\n              <div class=\"card-profile-actions py-4 mt-lg-0\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a>\n              </div>\n            </div>\n            <div class=\"col-lg-4 order-lg-1\">\n              <div class=\"card-profile-stats d-flex justify-content-center\">\n                <div>\n                  <span class=\"heading\">22</span>\n                  <span class=\"description\">Friends</span>\n                </div>\n                <div>\n                  <span class=\"heading\">10</span>\n                  <span class=\"description\">Photos</span>\n                </div>\n                <div>\n                  <span class=\"heading\">89</span>\n                  <span class=\"description\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center mt-5\">\n            <h3>Jessica Jones\n              <span class=\"font-weight-light\">, 27</span>\n            </h3>\n            <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>Bucharest, Romania</div>\n            <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>Solution Manager - Creative Tim Officer</div>\n            <div><i class=\"ni education_hat mr-2\"></i>University of Computer Science</div>\n          </div>\n          <div class=\"mt-5 py-5 border-top text-center\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-lg-9\">\n                <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>\n                <a href=\"javascript:void(0)\">Show more</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <h3 class=\"mt-lg mb-4\">\n    <span>Alerts</span>\n  </h3>\n  <div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\n      <ng-container *ngIf=\"alert.icon\">\n        <div class=\"alert-inner--icon\">\n            <i class=\"{{alert.icon}}\"></i>\n        </div>\n      </ng-container>\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\n    </ngb-alert>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2 class=\"mt-lg mb-5\">\n    <span>Javascript Components</span>\n  </h2>\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\n       Default\n      </button>\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\n         Notification\n      </button>\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content bg-gradient-danger\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"py-3 text-center\">\n              <i class=\"ni ni-bell-55 ni-3x\"></i>\n              <h4 class=\"heading mt-4\">You should read this!</h4>\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\n         Form\n      </button>\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body p-0\">\n            <div class=\"card bg-secondary shadow border-0\">\n              <div class=\"card-header bg-white pb-5\">\n                <div class=\"text-muted text-center mb-3\">\n                  <small>Sign in with</small>\n                </div>\n                <div class=\"btn-wrapper text-center\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                    <span class=\"btn-inner--icon\">\n                      <img src=\"./assets/img/icons/common/github.svg\">\n                    </span>\n                    <span class=\"btn-inner--text\">Github</span>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                    <span class=\"btn-inner--icon\">\n                      <img src=\"./assets/img/icons/common/google.svg\">\n                    </span>\n                    <span class=\"btn-inner--text\">Google</span>\n                  </a>\n                </div>\n              </div>\n              <div class=\"card-body px-lg-5 py-lg-5\">\n                <div class=\"text-center text-muted mb-4\">\n                  <small>Or sign in with credentials</small>\n                </div>\n                <form role=\"form\">\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    </div>\n                  </div>\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                      <span>Remember me</span>\n                    </label>\n                  </div>\n                  <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <!-- Datepicker -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n          </div>\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8 mt-4 mt-md-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\n      <div class=\"input-daterange datepicker row align-items-center\">\n        <div class=\"col\">\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n              </div>\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp1\" [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" (select)=\"mama($event)\" type=\"text\" [dayTemplate]=\"t\" (dateSelect)=\"startDateChanged($event)\" autocomplete=\"off\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"/>\n              <ng-template #t let-date let-focused=\"focused\" >\n               <span class=\"custom-day\"\n                [class.text-white]=\"isActive(date)\"\n                [class.range-end]=\"isRangeEnd(date)\"\n                [class.range-start]=\"isRangeStart(date)\"\n                [class.btn-light]=\"isActive(date)\"\n                [class.bg-primary]=\"isActive(date)\"\n                [class.range]=\"isInRange(date)\"\n                [class.faded]=\"isInRange(date)\"\n               >\n                 {{ date.day }}\n               </span>\n             </ng-template>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n              </div>\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\n              <ng-template #t1 let-date let-focused=\"focused\" >\n               <span class=\"custom-day\"\n                [class.text-white]=\"isActive(date)\"\n                [class.range-end]=\"isRangeEnd(date)\"\n                [class.range-start]=\"isRangeStart(date)\"\n                [class.btn-light]=\"isActive(date)\"\n                [class.bg-primary]=\"isActive(date)\"\n                [class.range]=\"isInRange(date)\"\n                [class.faded]=\"isInRange(date)\"\n               >\n                 {{ date.day }}\n               </span>\n             </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Tooltips and Popovers -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\n    </div>\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-components pb-0\" id=\"section-components\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-12\">\n        <!-- Basic elements -->\n        <h2 class=\"mb-5\">\n          <span>Basic Elements</span>\n        </h2>\n        <!-- Buttons -->\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\n        <!-- Button styles -->\n        <div>\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\n            <span class=\"btn-inner--text\">With icon</span>\n          </button>\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\n          </button>\n          <!-- Button wizes -->\n          <div class=\"mb-3 mt-5\">\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\n          </div>\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\n        </div>\n        <!-- Button colors -->\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\n        </div>\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\n        </div>\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\n        <!-- Button links -->\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\n        </div>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\">\n  <div class=\"container\">\n    <!-- Custom controls -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\">\n        <!-- Checkboxes -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">\n            <span>Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\n          <label class=\"custom-control-label\" for=\"customCheck2\">\n            <span>Checked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\n          <label class=\"custom-control-label\" for=\"customCheck3\">\n            <span>Disabled Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\n          <label class=\"custom-control-label\" for=\"customCheck4\">\n            <span>Disabled Checked</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <!-- Radio buttons -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio1\">\n            <span>Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio2\">\n            <span>Checked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio3\">\n            <span>Disabled unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio4\">\n            <span>Disabled checkbox</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <!-- Toggle buttons -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\n        </div>\n        <label class=\"custom-toggle\">\n          <input type=\"checkbox\">\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\n        </label>\n        <span class=\"clearfix\"></span>\n        <label class=\"custom-toggle\">\n          <input type=\"checkbox\" checked>\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\n        </label>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\n        </div>\n        <!-- Simple slider -->\n        <div class=\"input-slider-container\">\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\n        </div>\n        <!-- Range slider -->\n        <div class=\"mt-5\">\n          <!-- Range slider container -->\n          <div id=\"input-slider-range\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row justify-content-center mt-md\">\n      <div class=\"col-lg-12\">\n        <!-- Menu -->\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\n            </div>\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\n                  <div class=\"navbar-collapse-header\">\n                    <div class=\"row\">\n                      <div class=\"col-6 collapse-brand\">\n                        <a href=\"javascript:void(0)\">\n                          <img src=\"./assets/img/brand/blue.png\">\n                        </a>\n                      </div>\n                      <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span></span>\n                          <span></span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <ul class=\"navbar-nav ml-lg-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\n                        <span class=\"sr-only\">(current)</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\n            </div>\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\n                  <div class=\"navbar-collapse-header\">\n                    <div class=\"row\">\n                      <div class=\"col-6 collapse-brand\">\n                        <a href=\"javascript:void(0)\">\n                          <img src=\"./assets/img/brand/blue.png\">\n                        </a>\n                      </div>\n                      <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span></span>\n                          <span></span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <ul class=\"navbar-nav ml-lg-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n                        <i class=\"ni ni-favourite-28\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n                        <i class=\"ni ni-notification-70\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"ni ni-settings-gear-65\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n                      </a>\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section pb-0 section-components\">\n  <div class=\"container mb-5\">\n    <!-- Inputs -->\n    <h3 class=\"h4 text-success font-weight-bold mb-4\">Inputs</h3>\n    <div class=\"mb-3\">\n      <small class=\"text-uppercase font-weight-bold\">Form controls</small>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n            </div>\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" disabled />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\n          <div class=\"input-group mb-4\">\n            <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"form-group has-success\">\n          <input type=\"text\" placeholder=\"Success\" class=\"form-control is-valid\" />\n        </div>\n        <div class=\"form-group has-danger\">\n          <input type=\"email\" placeholder=\"Error Input\" class=\"form-control is-invalid\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"py-5 bg-secondary\">\n    <div class=\"container\">\n      <!-- Inputs (alternative) -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">Form controls (alternative)</small>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative\" />\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n            <div class=\"input-group input-group-alternative mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative \" disabled />\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-alternative mb-4\">\n              <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"form-group has-success\">\n            <input type=\"text\" placeholder=\"Success\" class=\"form-control form-control-alternative is-valid\" />\n          </div>\n          <div class=\"form-group has-danger\">\n            <input type=\"email\" placeholder=\"Error Input\" class=\"form-control form-control-alternative is-invalid\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"\">\n  <div class=\"container\">\n    <!-- Navigation -->\n    <h2 class=\"mb-5\">\n      <span>Navbars</span>\n    </h2>\n  </div>\n  <!-- Navbar default -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-favourite-28\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-notification-70\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n            </a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar primary -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar success -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-favourite-28\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n            </a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar danger -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-instagram\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar warning -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar info -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-instagram\"></i>\n              <span class=\"nav-link-inner--text\">Instagram</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg section-nucleo-icons pb-250\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h2 class=\"display-3\">Nucleo Icons</h2>\n        <p class=\"lead\">\n          The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.\n        </p>\n        <div class=\"btn-wrapper\">\n          <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\" class=\"btn btn-primary\">View demo icons</a>\n          <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\" class=\"btn btn-default mt-3 mt-md-0\">View all icons</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"blur--hover\">\n      <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\n          <!-- Center -->\n          <i class=\"icon ni ni-diamond\"></i>\n          <!-- Right 1 -->\n          <i class=\"icon icon-sm ni ni-album-2\"></i>\n          <i class=\"icon icon-sm ni ni-app\"></i>\n          <i class=\"icon icon-sm ni ni-atom\"></i>\n          <!-- Right 2 -->\n          <i class=\"icon ni ni-bag-17\"></i>\n          <i class=\"icon ni ni-bell-55\"></i>\n          <i class=\"icon ni ni-credit-card\"></i>\n          <!-- Left 1 -->\n          <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\n          <i class=\"icon icon-sm ni ni-building\"></i>\n          <i class=\"icon icon-sm ni ni-button-play\"></i>\n          <!-- Left 2 -->\n          <i class=\"icon ni ni-calendar-grid-58\"></i>\n          <i class=\"icon ni ni-camera-compact\"></i>\n          <i class=\"icon ni ni-chart-bar-32\"></i>\n        </div>\n        <span class=\"blur-hidden h5 text-success\">Eplore all the 21.000+ Nucleo Icons</span>\n      </a>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-buttons-section></app-buttons-section>\n<app-inputs-section></app-inputs-section>\n<app-crs-section></app-crs-section>\n<app-navigation-section></app-navigation-section>\n<section class=\"section section-components\">\n  <app-tabs-section></app-tabs-section>\n  <app-alerts-section></app-alerts-section>\n  <app-typography-section></app-typography-section>\n  <app-angular-section></app-angular-section>\n</section>\n<section class=\"section section-shaped\">\n  <div class=\"shape shape-style-1 shape-default\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n  <div class=\"container py-md\">\n    <div class=\"row justify-content-between align-items-center\">\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\n        <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n        <p class=\"lead text-white mt-4\">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n        <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-bootstrap-carousel\" class=\"btn btn-white mt-4\">See all components</a>\n      </div>\n      <div class=\"col-lg-6 mb-lg-auto\">\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\n          <ngb-carousel>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\n              </ng-template>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\n              </ng-template>\n          </ngb-carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- SVG separator -->\n  <div class=\"separator separator-bottom separator-skew\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</section>\n<app-nucleo-section></app-nucleo-section>\n<section class=\"section section-lg section-shaped\">\n  <div class=\"shape shape-style-1 shape-default\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n  <div class=\"container py-md\">\n    <div class=\"row row-grid justify-content-between align-items-center\">\n      <div class=\"col-lg-6\">\n        <h3 class=\"display-3 text-white\">A beautiful Design System\n          <span class=\"text-white\">completed with examples</span>\n        </h3>\n        <p class=\"lead text-white\">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>\n        <div class=\"btn-wrapper\">\n          <a [routerLink]=\"['/login']\" class=\"btn btn-success\">Login Page</a>\n          <a [routerLink]=\"['/register']\" class=\"btn btn-white\">Register Page</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5 mb-lg-auto\">\n        <div class=\"transform-perspective-right\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n              <div class=\"text-muted text-center mb-3\">\n                <small>Sign in with</small>\n              </div>\n              <div class=\"btn-wrapper text-center\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/github.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Github</span>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/google.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Google</span>\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n              <form role=\"form\">\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\" customCheckLogin2\">\n                    <span>Remember me</span>\n                  </label>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- SVG separator -->\n  <div class=\"separator separator-bottom separator-skew\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</section>\n<app-versions-section></app-versions-section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6\">\n      <!-- Tabs with icons -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\n      </div>\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\n              </ng-template>\n                <ng-template ngbTabContent>\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\n              </ng-template>\n                <ng-template ngbTabContent>\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\n              </ng-template>\n                <ng-template ngbTabContent>\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\n      <!-- Menu -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\n      </div>\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\n          <ngb-tab title=\"Home\">\n            <ng-template ngbTabContent>\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Profile\">\n            <ng-template ngbTabContent>\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Messages\">\n            <ng-template ngbTabContent>\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n            </ng-template>\n          </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\n      <div class=\"progress-wrapper\">\n        <div class=\"progress-info\">\n          <div class=\"progress-label\">\n            <span>Task completed</span>\n          </div>\n          <div class=\"progress-percentage\">\n            <span>40%</span>\n          </div>\n        </div>\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\n      </div>\n      <div class=\"progress-wrapper\">\n        <div class=\"progress-info\">\n          <div class=\"progress-label\">\n            <span>Task completed</span>\n          </div>\n          <div class=\"progress-percentage\">\n            <span>60%</span>\n          </div>\n        </div>\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\n      </div>\n    </div>\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n      </nav>\n      <nav aria-label=\"Page navigation example\">\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\n        </ngb-pagination>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row row-grid justify-content-between\">\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\n            </ng-template>\n          </ngb-tab>\n      </ngb-tabset>\n    </div>\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2 class=\"mt-lg mb-5\">\n    <span>Typography</span>\n  </h2>\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h1 class=\"mb-0\">Argon Design System</h1>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h2 class=\"mb-0\">Argon Design System</h2>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h4 class=\"mb-0\">Argon Design System</h4>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h5 class=\"mb-0\">Argon Design System </h5>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h6 class=\"mb-0\">Argon Design System </h6>\n    </div>\n  </div>\n  <!-- Display titles -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\n    </div>\n  </div>\n  <!-- Specialized titles -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <div>\n        <h2 class=\"display-3\">Header with small subtitle </h2>\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\n      </div>\n    </div>\n  </div>\n  <!-- Paragraphs -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <blockquote class=\"blockquote\">\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n        <footer class=\"blockquote-footer\">Someone famous in\n          <cite title=\"Source Title\">Source Title</cite>\n        </footer>\n      </blockquote>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <!-- Images -->\n  <h2 class=\"mt-lg mb-5\">\n    <span>Images</span>\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg\">\n  <div class=\"container\">\n    <div class=\"row row-grid justify-content-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h2 class=\"display-3\">Do you love this awesome\n          <span class=\"text-success\">Design System for Angular?</span>\n        </h2>\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\n        <div class=\"btn-wrapper\">\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\n        </div>\n        <div class=\"text-center\">\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"bg-clr footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\n\n    <div class=\"col-lg-12 two-card-section\">\n        <img class=\"main-img\" src=\"./assets/img/screen/footer_line.png\">\n        <div class=\"justify-content-between container footer-section flex\">\n            <div class=\"col-lg-4 footer-text\">\n                <p>RunTrip Social Media © 2018</p>\n                <p class=\"red\">www.runtripsm.com</p>\n                <p class=\"font-weight\">info@runtripsm.com</p>\n            </div>\n            <div class=\"col-lg-3 footer-logo\">\n                <img class=\"main-img\" src=\"./assets/img/screen/footer-logo.png\">\n            </div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n    <div class=\"container\">\n        <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\n            <img src=\"./assets/img/icon/logo.png\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n            <div class=\"navbar-collapse-header\">\n                <div class=\"row\">\n                    <div class=\"col-6 collapse-brand\">\n                        <a [routerLink]=\"['/home']\">\n                            <img src=\"./assets/img/icon/logo.png\">\n                        </a>\n                    </div>\n                    <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n                            <span></span>\n                            <span></span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <ul class=\"navbar-nav align-items-lg-end ml-lg-auto\">\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/landing']\" class=\"dropdown-item\">ABOUT US</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"dropdown-item\">BLOG</a>\n\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"dropdown-item\">CONTACT</a>\n\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"dropdown-item\">Login</a>\n                </li>\n                <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n                    <img src=\"./assets/img/screen/user.png\">\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n              <div class=\"text-muted text-center mb-3\">\n                <small>Sign up with</small>\n              </div>\n              <div class=\"text-center\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/github.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Github</span>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/google.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Google</span>\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign up with credentials</small>\n              </div>\n              <form role=\"form\">\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                </div>\n                <div class=\"text-muted font-italic\">\n                  <small>password strength:\n                    <span class=\"text-success font-weight-700\">strong</span>\n                  </small>\n                </div>\n                <div class=\"row my-4\">\n                  <div class=\"col-12\">\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                      <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                      <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                        <span>I agree with the\n                          <a href=\"javascript:void(0)\">Privacy Policy</a>\n                        </span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_16__["EventComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBrEOZMUhqttzY_fHjF1a8XTckHUaJlZio'
                })
            ],
            providers: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__["PathLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"] },
    { path: 'event', component: _event_event_component__WEBPACK_IMPORTED_MODULE_10__["EventComponent"] },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/event/event.component.scss":
/*!********************************************!*\
  !*** ./src/app/event/event.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  width: 100% !important;\n  height: 605px !important;\n  background-repeat: no-repeat;\n}\n\n.marker {\n  background-color: red;\n}\n\n.search-section {\n  background: #9B9B9B;\n  padding: 20px;\n  border-radius: 15px 15px 15px 0px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.search-section input {\n  width: 30%;\n  height: 41px;\n}\n\n.search-section .search-btn {\n  background: url('search-btn.png');\n  width: 45px;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.search-result-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px auto;\n}\n\n.search-result-section .main-card {\n  width: 23%;\n  background-color: #444343;\n  box-shadow: 1px 2px 22px 4px #313030;\n  font-family: \"Woodford Bourne\";\n  font-weight: bold;\n  font-size: 14px;\n  color: #AEA19B;\n  padding: 5px;\n  margin: 10px;\n  position: relative;\n  height: 216px;\n  border-radius: 30px 30px 30px 0px;\n}\n\n.search-result-section .main-card img {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n.small-title {\n  font-size: 20;\n  color: #AEA19B;\n}\n\n.detail-review {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-img {\n  width: 48%;\n}\n\n.detail-review .detail-img .first-img {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-img .first-img img {\n  width: 43%;\n}\n\n.detail-review .detail-img .first-img .title-detail {\n  width: 45%;\n}\n\n.detail-review .detail-img .first-img .calendar-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 75%;\n}\n\n.detail-review .detail-img .first-img .calendar-bar > div {\n  font-family: \"Roboto-Thin\";\n  font-size: 14px;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.detail-review .detail-img .first-img .calendar-bar > div > div {\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.detail-review .detail-img .first-img .title-detail .title {\n  font-size: 30px;\n  font-family: \"SourceSansPro-ExtraLight\";\n  color: #19E68C;\n  font-weight: 100;\n  text-align: center;\n}\n\n.detail-review .detail-img .first-img .title-detail .title span {\n  font-family: \"SourceSansPro-Regular\";\n  font-size: 400;\n  color: white;\n}\n\n.detail-review .detail-img .first-img .title-detail .name {\n  font-family: \"WoodfordBournePRO-Regular\";\n  color: #AEA19B;\n  font-family: 25px;\n  text-align: center;\n}\n\n.detail-review .detail-img .first-img .title-detail .date {\n  color: #FF776B;\n  font-family: \"SourceSansPro-SemiBold\";\n  font-size: 35px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 3;\n}\n\n.detail-review .detail-img .second-img {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-img .second-img > .img {\n  width: 80%;\n  margin: 10px;\n  border-radius: 30px 30px 30px 0px;\n}\n\n.detail-review .detail-img .second-img .social-icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.detail-review .detail-text {\n  width: 48%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 81px;\n}\n\n.detail-review .detail-text .top-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-text .top-text > div {\n  display: -webkit-box;\n  display: flex;\n  width: 43%;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.detail-review .detail-text .top-text > div > div {\n  font-family: \"Roboto-Thin\";\n  font-size: 20px;\n  color: #AEA19B;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.detail-review .detail-text .top-text > div > div > div {\n  color: #FF776B;\n  font-family: \"Roboto-Regular\";\n  font-size: 30px;\n}\n\n.detail-review .detail-text .bottom-text {\n  margin-top: 50px;\n  color: #AEA19B;\n  font-family: \"Roboto-Regular\";\n  font-size: 20px;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 20px;\n  font-size: 20px;\n  font-weight: 100;\n  font-family: \"Roboto-Regular\";\n  color: #FF776B;\n}\n\n.buttons > div {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.buttons img {\n  max-width: 70px;\n}\n\n.info-search-section {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  min-height: 300px;\n}\n\n.info-search-section .hotel-card {\n  background: url('hotel-card.png');\n  background-size: 100%;\n  font-size: 15px;\n  font-weight: lighter;\n  color: white;\n  background-repeat: no-repeat;\n  height: auto;\n  min-height: 220px;\n  padding: 51px 87px 46px 98px;\n}\n\n.info-search-section .hotel-card > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 8px;\n  line-height: 2;\n}\n\n.info-search-section .flight-card {\n  background: url('flight-card.png');\n  background-size: 100%;\n  font-size: 15px;\n  font-weight: lighter;\n  color: white;\n  background-repeat: no-repeat;\n  height: auto;\n  min-height: 220px;\n  padding: 51px 87px 46px 98px;\n}\n\n.info-search-section .flight-card > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 8px;\n  line-height: 2;\n}\n\n.youtube-section .buttons {\n  color: white;\n  font-size: 42px;\n}\n\n.youtube-section .iframe-container {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 50px;\n}\n\n.youtube-section .iframe-container iframe {\n  border-radius: 30px;\n}\n\n.card-section {\n  background: none;\n  background-repeat: no-repeat;\n  width: 100%;\n  background-size: 100% 100%;\n  height: 100%;\n  min-height: 219px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.card-section > div {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10px;\n}\n\n.card-section > div .custom-card {\n  padding-left: 8px;\n  margin: 0px;\n  width: 80%;\n  border-radius: 0px 0px 0px 30px;\n}\n\nngb-carousel {\n  max-width: 700px;\n  margin: 50px auto;\n}\n\nngb-carousel img {\n  width: 100%;\n  outline: none;\n}\n\nngb-carousel {\n  width: inherit;\n  height: inherit;\n}\n\n.carousel-inner {\n  overflow: visible;\n}\n\n.carousel-item {\n  display: -webkit-box !important;\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n}\n\n.carousel-item.active {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev {\n  z-index: 20;\n}\n\n.carousel-control-next {\n  z-index: 20;\n}\n\n.carousel-indicators {\n  z-index: 20;\n}\n\n@media only screen and (max-width: 600px) {\n  .line {\n    width: 100%;\n  }\n\n  .section {\n    padding-bottom: 0px;\n  }\n\n  .detail-review {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .detail-review .detail-img {\n    width: 100%;\n  }\n  .detail-review .detail-img .first-img {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap-reverse;\n  }\n  .detail-review .detail-img .first-img img {\n    width: 100%;\n  }\n  .detail-review .detail-img .first-img .title-detail {\n    width: 100%;\n  }\n  .detail-review .detail-img .first-img .calendar-bar {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    width: 100%;\n  }\n  .detail-review .detail-img .second-img {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  .detail-review .detail-img .second-img > .img {\n    width: 70%;\n  }\n  .detail-review .detail-text {\n    width: 100%;\n  }\n  .detail-review .detail-text .top-text {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  .detail-review .detail-text .top-text > div {\n    display: -webkit-box;\n    display: flex;\n    width: 43%;\n  }\n  .detail-review .detail-text .top-text > div img {\n    height: 40%;\n  }\n  .detail-review .detail-text .bottom-text {\n    padding: 15px;\n  }\n\n  .info-search-section {\n    flex-wrap: wrap;\n  }\n\n  .buttons {\n    padding: 0px;\n    font-size: 12px;\n  }\n  .buttons > div {\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 16%;\n  }\n  .buttons img {\n    max-width: 55%;\n  }\n\n  .youtube-section .buttons {\n    color: white;\n    font-size: 15px;\n  }\n  .youtube-section .iframe-container {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 10px;\n  }\n  .youtube-section .iframe-container iframe {\n    border-radius: 30px;\n    height: 350px;\n  }\n\n  .info-search-section {\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    min-height: 300px;\n  }\n  .info-search-section .hotel-card {\n    font-size: 13px;\n    padding: 51px 70px 46px 71px;\n  }\n  .info-search-section .hotel-card > div {\n    line-height: 1.2;\n  }\n  .info-search-section .flight-card {\n    font-size: 13px;\n    padding: 51px 70px 46px 71px;\n  }\n  .info-search-section .flight-card > div {\n    line-height: 1.5;\n  }\n\n  .card-section {\n    background: url('card-bg.png');\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    max-height: 225px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  .card-section > div {\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .card-section > div .custom-card {\n    box-shadow: none;\n    background: none;\n  }\n  .card-section > div .custom-card img {\n    width: 20%;\n  }\n  .card-section > div .main-img {\n    width: 100%;\n    height: 88%;\n    margin: -20px 0px 0px -7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2V2ZW50L0c6XFxOb3dQcm9qZWN0c1xcQW5ndWxhcl93b3JrYW5hXzdfMVxccHJvamVjdFxcYXJnb24tZGVzaWduLXN5c3RlbS1hbmd1bGFyLW1hc3Rlclxcc3JjXFxhcHBcXGxhbmRpbmcvLi5cXGV2ZW50XFxldmVudC5jb21wb25lbnQuc2NzcyIsIi4uL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ0FKOztBRENJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDUjs7QURDSTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDQ1I7O0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUNDUjs7QURBUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNFWjs7QURHQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQUo7O0FEQ0k7RUFDSSxVQUFBO0FDQ1I7O0FEQVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRVo7O0FERFk7RUFDSSxVQUFBO0FDR2hCOztBRERZO0VBQ0ksVUFBQTtBQ0doQjs7QUREWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0FDR2hCOztBREZnQjtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSXBCOztBREhvQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0t4Qjs7QURBZ0I7RUFDSSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VwQjs7QUREb0I7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDR3hCOztBREFnQjtFQUNJLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFcEI7O0FEQWdCO0VBQ0ksY0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRXBCOztBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FaOztBRENZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQ0NoQjs7QURDWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NoQjs7QURHSTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURFUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNBWjs7QURDWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDQ2hCOztBREFnQjtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRXBCOztBRERvQjtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNHeEI7O0FERVE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNBWjs7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FDRko7O0FER0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDRFI7O0FER0k7RUFDSSxlQUFBO0FDRFI7O0FES0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDRko7O0FER0k7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNEUjs7QURFUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FaOztBREdJO0VBQ0ksa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDRFI7O0FERVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBWjs7QURNSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDSFI7O0FES0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7QUNIUjs7QURJUTtFQUNJLG1CQUFBO0FDRlo7O0FET0E7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0pKOztBREtJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0hSOztBRElRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FDRlo7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0FDSko7O0FET0E7RUFDSSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkRBQUE7RUFBQSxxREFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJO0lBQ0ksV0FBQTtFQ0pOOztFRE1FO0lBQ0ksbUJBQUE7RUNITjs7RURLRTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSxlQUFBO0VDRk47RURHTTtJQUNJLFdBQUE7RUNEVjtFREVVO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtJQUNBLHVCQUFBO0VDQWQ7RURDYztJQUNJLFdBQUE7RUNDbEI7RURDYztJQUNJLFdBQUE7RUNDbEI7RURDYztJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSxXQUFBO0VDQ2xCO0VERVU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0VDQWQ7RURDYztJQUNJLFVBQUE7RUNDbEI7RURHTTtJQUNJLFdBQUE7RUNEVjtFREVVO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtFQ0FkO0VEQ2M7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxVQUFBO0VDQ2xCO0VEQWtCO0lBQ0ksV0FBQTtFQ0V0QjtFREVVO0lBQ0ksYUFBQTtFQ0FkOztFRElFO0lBQ0ksZUFBQTtFQ0ROOztFREdFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNBTjtFRENNO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUNDVjtFRENNO0lBQ0ksY0FBQTtFQ0NWOztFREdNO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNBVjtFREVNO0lBQ0ksV0FBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7SUFDQSxhQUFBO0VDQVY7RURDVTtJQUNJLG1CQUFBO0lBQ0EsYUFBQTtFQ0NkOztFREdFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtFQ0FOO0VEQ007SUFDSSxlQUFBO0lBQ0EsNEJBQUE7RUNDVjtFREFVO0lBQ0ksZ0JBQUE7RUNFZDtFRENNO0lBQ0ksZUFBQTtJQUNBLDRCQUFBO0VDQ1Y7RURBVTtJQUNJLGdCQUFBO0VDRWQ7O0VERUU7SUFDSSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7RUNDTjtFREFNO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQ0VWO0VERFU7SUFJSSxnQkFBQTtJQUNBLGdCQUFBO0VDQWQ7RURKYztJQUNJLFVBQUE7RUNNbEI7RUREVTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7RUNHZDtBQUNGIiwiZmlsZSI6Ii4uL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MDVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIDtcclxufVxyXG5cclxuLm1hcmtlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOUI5QjlCO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogNDFweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29uL3NlYXJjaC1idG4ucG5nKTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgLm1haW4tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDIzJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMjJweCA0cHggIzMxMzAzMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJXb29kZm9yZCBCb3VybmVcIjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNBRUExOUI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNtYWxsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICBjb2xvcjogI0FFQTE5QjtcclxufVxyXG5cclxuLmRldGFpbC1yZXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5kZXRhaWwtaW1nIHtcclxuICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgIC5maXJzdC1pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZS1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FsZW5kYXItYmFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tVGhpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUtZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1FeHRyYUxpZ2h0JztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE5RTY4QztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvLVJlZ3VsYXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1dvb2Rmb3JkQm91cm5lUFJPLVJlZ3VsYXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQUVBMTlCO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGNzc2QjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tU2VtaUJvbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY29uZC1pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgID4uaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXRhaWwtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgxcHg7XHJcbiAgICAgICAgLnRvcC10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDMlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1UaGluJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBRUExOUI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY3NzZCO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1SZWd1bGFyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm90dG9tLXRleHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0FFQTE5QjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tUmVndWxhcic7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVJlZ3VsYXInO1xyXG4gICAgY29sb3I6ICNGRjc3NkI7XHJcbiAgICA+ZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmluZm8tc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAuaG90ZWwtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc2NyZWVuL2hvdGVsLWNhcmQucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA1MXB4IDg3cHggNDZweCA5OHB4O1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZsaWdodC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zY3JlZW4vZmxpZ2h0LWNhcmQucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA1MXB4IDg3cHggNDZweCA5OHB4O1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ueW91dHViZS1zZWN0aW9uIHtcclxuICAgIC5idXR0b25zIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgfVxyXG4gICAgLmlmcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC5jdXN0b20tY2FyZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbCB7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWwge1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS4ycyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAxLjJzO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsLXJldmlldyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5kZXRhaWwtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC5maXJzdC1pbWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhbGVuZGFyLWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY29uZC1pbWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgID4uaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXRhaWwtdGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAudG9wLXRleHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvdHRvbS10ZXh0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mby1zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTUlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnlvdXR1YmUtc2VjdGlvbiB7XHJcbiAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlmcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvLXNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIC5ob3RlbC1jYXJkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MXB4IDcwcHggNDZweCA3MXB4O1xyXG4gICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZsaWdodC1jYXJkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MXB4IDcwcHggNDZweCA3MXB4O1xyXG4gICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1zZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zY3JlZW4vY2FyZC1iZy5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAuY3VzdG9tLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1haW4taW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4OCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IC0yMHB4IDBweCAwcHggLTdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImFnbS1tYXAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYXJrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM5QjlCOUI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uc2VhcmNoLXNlY3Rpb24gaW5wdXQge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDQxcHg7XG59XG4uc2VhcmNoLXNlY3Rpb24gLnNlYXJjaC1idG4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29uL3NlYXJjaC1idG4ucG5nKTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiAubWFpbi1jYXJkIHtcbiAgd2lkdGg6IDIzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcbiAgYm94LXNoYWRvdzogMXB4IDJweCAyMnB4IDRweCAjMzEzMDMwO1xuICBmb250LWZhbWlseTogXCJXb29kZm9yZCBCb3VybmVcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNBRUExOUI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDBweDtcbn1cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG59XG5cbi5zbWFsbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIGNvbG9yOiAjQUVBMTlCO1xufVxuXG4uZGV0YWlsLXJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIHtcbiAgd2lkdGg6IDQ4JTtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuZmlyc3QtaW1nIGltZyB7XG4gIHdpZHRoOiA0MyU7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuZmlyc3QtaW1nIC50aXRsZS1kZXRhaWwge1xuICB3aWR0aDogNDUlO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAuY2FsZW5kYXItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzUlO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAuY2FsZW5kYXItYmFyID4gZGl2IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVRoaW5cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuZmlyc3QtaW1nIC5jYWxlbmRhci1iYXIgPiBkaXYgPiBkaXYge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuZmlyc3QtaW1nIC50aXRsZS1kZXRhaWwgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJTb3VyY2VTYW5zUHJvLUV4dHJhTGlnaHRcIjtcbiAgY29sb3I6ICMxOUU2OEM7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcgLnRpdGxlLWRldGFpbCAudGl0bGUgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZVNhbnNQcm8tUmVndWxhclwiO1xuICBmb250LXNpemU6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAudGl0bGUtZGV0YWlsIC5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiV29vZGZvcmRCb3VybmVQUk8tUmVndWxhclwiO1xuICBjb2xvcjogI0FFQTE5QjtcbiAgZm9udC1mYW1pbHk6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcgLnRpdGxlLWRldGFpbCAuZGF0ZSB7XG4gIGNvbG9yOiAjRkY3NzZCO1xuICBmb250LWZhbWlseTogXCJTb3VyY2VTYW5zUHJvLVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDM7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuc2Vjb25kLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5zZWNvbmQtaW1nID4gLmltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMHB4O1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLnNlY29uZC1pbWcgLnNvY2lhbC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC10ZXh0IHtcbiAgd2lkdGg6IDQ4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4MXB4O1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC10ZXh0IC50b3AtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCAudG9wLXRleHQgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDMlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCAudG9wLXRleHQgPiBkaXYgPiBkaXYge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tVGhpblwiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQUVBMTlCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC10ZXh0IC50b3AtdGV4dCA+IGRpdiA+IGRpdiA+IGRpdiB7XG4gIGNvbG9yOiAjRkY3NzZCO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQgLmJvdHRvbS10ZXh0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6ICNBRUExOUI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgY29sb3I6ICNGRjc3NkI7XG59XG4uYnV0dG9ucyA+IGRpdiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4uYnV0dG9ucyBpbWcge1xuICBtYXgtd2lkdGg6IDcwcHg7XG59XG5cbi5pbmZvLXNlYXJjaC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuLmluZm8tc2VhcmNoLXNlY3Rpb24gLmhvdGVsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zY3JlZW4vaG90ZWwtY2FyZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgcGFkZGluZzogNTFweCA4N3B4IDQ2cHggOThweDtcbn1cbi5pbmZvLXNlYXJjaC1zZWN0aW9uIC5ob3RlbC1jYXJkID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLmluZm8tc2VhcmNoLXNlY3Rpb24gLmZsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc2NyZWVuL2ZsaWdodC1jYXJkLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBwYWRkaW5nOiA1MXB4IDg3cHggNDZweCA5OHB4O1xufVxuLmluZm8tc2VhcmNoLXNlY3Rpb24gLmZsaWdodC1jYXJkID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4ueW91dHViZS1zZWN0aW9uIC5idXR0b25zIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDQycHg7XG59XG4ueW91dHViZS1zZWN0aW9uIC5pZnJhbWUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnlvdXR1YmUtc2VjdGlvbiAuaWZyYW1lLWNvbnRhaW5lciBpZnJhbWUge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uY2FyZC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIxOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FyZC1zZWN0aW9uID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZC1zZWN0aW9uID4gZGl2IC5jdXN0b20tY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMzBweDtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbm5nYi1jYXJvdXNlbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS4ycyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAxLjJzO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmRldGFpbC1yZXZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcgLnRpdGxlLWRldGFpbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAuY2FsZW5kYXItYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuc2Vjb25kLWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLnNlY29uZC1pbWcgPiAuaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC10ZXh0IC50b3AtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC10ZXh0IC50b3AtdGV4dCA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDMlO1xuICB9XG4gIC5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCAudG9wLXRleHQgPiBkaXYgaW1nIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgfVxuICAuZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQgLmJvdHRvbS10ZXh0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmluZm8tc2VhcmNoLXNlY3Rpb24ge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5idXR0b25zID4gZGl2IHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgd2lkdGg6IDE2JTtcbiAgfVxuICAuYnV0dG9ucyBpbWcge1xuICAgIG1heC13aWR0aDogNTUlO1xuICB9XG5cbiAgLnlvdXR1YmUtc2VjdGlvbiAuYnV0dG9ucyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAueW91dHViZS1zZWN0aW9uIC5pZnJhbWUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLnlvdXR1YmUtc2VjdGlvbiAuaWZyYW1lLWNvbnRhaW5lciBpZnJhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuXG4gIC5pbmZvLXNlYXJjaC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB9XG4gIC5pbmZvLXNlYXJjaC1zZWN0aW9uIC5ob3RlbC1jYXJkIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogNTFweCA3MHB4IDQ2cHggNzFweDtcbiAgfVxuICAuaW5mby1zZWFyY2gtc2VjdGlvbiAuaG90ZWwtY2FyZCA+IGRpdiB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuICAuaW5mby1zZWFyY2gtc2VjdGlvbiAuZmxpZ2h0LWNhcmQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA1MXB4IDcwcHggNDZweCA3MXB4O1xuICB9XG4gIC5pbmZvLXNlYXJjaC1zZWN0aW9uIC5mbGlnaHQtY2FyZCA+IGRpdiB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5jYXJkLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL3NjcmVlbi9jYXJkLWJnLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5jYXJkLXNlY3Rpb24gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jYXJkLXNlY3Rpb24gPiBkaXYgLmN1c3RvbS1jYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgLmNhcmQtc2VjdGlvbiA+IGRpdiAuY3VzdG9tLWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5jYXJkLXNlY3Rpb24gPiBkaXYgLm1haW4taW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg4JTtcbiAgICBtYXJnaW46IC0yMHB4IDBweCAwcHggLTdweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var EventComponent = /** @class */ (function () {
    function EventComponent(sanitizer, Router) {
        this.sanitizer = sanitizer;
        this.Router = Router;
        this.carousels = [];
        this.displayURL = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY');
    }
    EventComponent.prototype.ngOnInit = function () {
        var self = this;
        this.selectedEvent = JSON.parse(localStorage.getItem('dataSource'));
        console.log('se', this.selectedEvent.linkvideo);
        console.log(' this.selectedEvent.imgs', this.selectedEvent.imgs);
        var imgs = new Object();
        imgs = this.selectedEvent.imgs;
        Object.keys(imgs).forEach(function (rkey, row) {
            console.log(imgs[rkey].img);
            self.carousels.push(imgs[rkey].img);
        });
        console.log(self.carousels);
    };
    EventComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __importDefault(__webpack_require__(/*! raw-loader!./event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./event.component.scss */ "./src/app/event/event.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.scss":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  width: 100% !important;\n  height: 605px !important;\n  background-repeat: no-repeat;\n}\n\n.marker {\n  background-color: red;\n}\n\n.search-bar-section {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 35px;\n}\n\n.search-bar-section .search-bar {\n  width: 90%;\n}\n\n.search-bar-section .search-bar .search-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.search-bar-section .search-bar .search-section .location-key {\n  border-radius: 7px 7px 7px 0px;\n  width: 60%;\n  height: 38px;\n  background: #585757d9;\n  border: none;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.6);\n  margin: 10px 0px 25px 0px;\n}\n\n.search-bar-section .search-bar .search-section .date-key {\n  border-radius: 7px 7px 7px 0px;\n  width: 20%;\n  height: 38px;\n  background: #585757d9;\n  border: none;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.6);\n  margin: 10px 0px 25px 0px;\n}\n\n.search-bar-section .search-bar .search-section .search-btn {\n  background: url('search-btn.png');\n  width: 9%;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.search-bar-section .search-bar img {\n  width: 100% !important;\n}\n\n.search-result-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px auto;\n}\n\n.search-result-section .main-card {\n  width: 31%;\n  background-color: #444343;\n  font-family: \"Woodford Bourne\";\n  font-weight: bold;\n  font-size: 14px;\n  color: #AEA19B;\n  padding: 5px;\n  margin: 10px;\n  position: relative;\n  height: auto;\n  border-radius: 30px 30px 30px 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.search-result-section .main-card img {\n  max-width: 45%;\n  border-radius: 30px;\n}\n\n.search-result-section .main-card .detail {\n  width: 50%;\n}\n\n.search-result-section .main-card p {\n  line-height: 1;\n}\n\n.search-result-section .main-card .location {\n  color: #FF776B;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.icons-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 77%;\n}\n\n.icons-section .vertical-line {\n  position: absolute;\n  height: 50%;\n  right: 35%;\n}\n\n@media only screen and (max-width: 600px) {\n  .section {\n    padding-bottom: 0px;\n  }\n\n  .search-bar-section {\n    display: -webkit-box;\n    display: flex;\n    margin-top: 0px;\n  }\n\n  .search-result-section .main-card {\n    width: 100%;\n  }\n\n  .icons-section .vertical-line {\n    position: absolute;\n    height: 23%;\n    right: 54%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbHRlci9HOlxcTm93UHJvamVjdHNcXEFuZ3VsYXJfd29ya2FuYV83XzFcXHByb2plY3RcXGFyZ29uLWRlc2lnbi1zeXN0ZW0tYW5ndWxhci1tYXN0ZXJcXHNyY1xcYXBwXFxsYW5kaW5nLy4uXFxmaWx0ZXJcXGZpbHRlci5jb21wb25lbnQuc2NzcyIsIi4uL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNDUjs7QURHSTtFQUNJLHFCQUFBO0FDQVI7O0FER0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ0FSOztBRENRO0VBQ0ksVUFBQTtBQ0NaOztBREFZO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDRWhCOztBRERnQjtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FDR3BCOztBRERnQjtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FDR3BCOztBRERnQjtFQUNJLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDR3BCOztBREFZO0VBQ0ksc0JBQUE7QUNFaEI7O0FER0k7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7O0FEQ1E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NaOztBREFZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDRWhCOztBREFZO0VBQ0ksVUFBQTtBQ0VoQjs7QURBWTtFQUNJLGNBQUE7QUNFaEI7O0FEQVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRWhCOztBRE1JO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFVBQUE7QUNKUjs7QURLUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNIWjs7QURPSTtFQUNJO0lBQ0ksbUJBQUE7RUNKVjs7RURNTTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLGVBQUE7RUNIVjs7RURNVTtJQUNJLFdBQUE7RUNIZDs7RURPVTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNKZDtBQUNGIiwiZmlsZSI6Ii4uL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgYWdtLW1hcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDYwNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXJrZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC1iYXItc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgIC5zZWFyY2gtYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbi1rZXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggN3B4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTg1NzU3ZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAyNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXRlLWtleSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCA3cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ODU3NTdkOTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDI1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb24vc2VhcmNoLWJ0bi5wbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgICAubWFpbi1jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29vZGZvcmQgQm91cm5lXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQUVBMTlCO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGNzc2QjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1lIHt9XHJcbiAgICAgICAgICAgIC5kYXRlIHt9XHJcbiAgICAgICAgICAgIC5wZW9wbGVzIHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaWNvbnMtc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDc3JTtcclxuICAgICAgICAudmVydGljYWwtbGluZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgLnNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWJhci1zZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLXJlc3VsdC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgLm1haW4tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbnMtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjMlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDU0JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCJhZ20tbWFwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubWFya2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc2VhcmNoLWJhci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5zZWFyY2gtYmFyLXNlY3Rpb24gLnNlYXJjaC1iYXIge1xuICB3aWR0aDogOTAlO1xufVxuLnNlYXJjaC1iYXItc2VjdGlvbiAuc2VhcmNoLWJhciAuc2VhcmNoLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnNlYXJjaC1iYXItc2VjdGlvbiAuc2VhcmNoLWJhciAuc2VhcmNoLXNlY3Rpb24gLmxvY2F0aW9uLWtleSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggN3B4IDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjNTg1NzU3ZDk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWFyZ2luOiAxMHB4IDBweCAyNXB4IDBweDtcbn1cbi5zZWFyY2gtYmFyLXNlY3Rpb24gLnNlYXJjaC1iYXIgLnNlYXJjaC1zZWN0aW9uIC5kYXRlLWtleSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggN3B4IDBweDtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjNTg1NzU3ZDk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWFyZ2luOiAxMHB4IDBweCAyNXB4IDBweDtcbn1cbi5zZWFyY2gtYmFyLXNlY3Rpb24gLnNlYXJjaC1iYXIgLnNlYXJjaC1zZWN0aW9uIC5zZWFyY2gtYnRuIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaWNvbi9zZWFyY2gtYnRuLnBuZyk7XG4gIHdpZHRoOiA5JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG4uc2VhcmNoLWJhci1zZWN0aW9uIC5zZWFyY2gtYmFyIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQge1xuICB3aWR0aDogMzElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MzQzO1xuICBmb250LWZhbWlseTogXCJXb29kZm9yZCBCb3VybmVcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNBRUExOUI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQgaW1nIHtcbiAgbWF4LXdpZHRoOiA0NSU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQgLmRldGFpbCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiAubWFpbi1jYXJkIC5sb2NhdGlvbiB7XG4gIGNvbG9yOiAjRkY3NzZCO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmljb25zLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3NyU7XG59XG4uaWNvbnMtc2VjdGlvbiAudmVydGljYWwtbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHJpZ2h0OiAzNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cblxuICAuc2VhcmNoLWJhci1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaWNvbnMtc2VjdGlvbiAudmVydGljYWwtbGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjMlO1xuICAgIHJpZ2h0OiA1NCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landing/landing.component */ "./src/app/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var FilterComponent = /** @class */ (function () {
    function FilterComponent(route, Router, CrudService, LandingComponent) {
        this.route = route;
        this.Router = Router;
        this.CrudService = CrudService;
        this.LandingComponent = LandingComponent;
        this.zoom = 2;
        this.filter_data = {
            location: '',
            date: '',
            event_type: ''
        };
        this.search_logo = '';
        this.eventDatas = [];
        this.Black_points = [];
        this.darkstyle = [
            {
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#444343"
                    }
                ]
            },
        ];
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.Black_points = this.LandingComponent.Black_points;
        this.filter_data.location = this.route.snapshot.params['location'];
        this.filter_data.event_type = this.route.snapshot.params['event_type'];
        this.filter_data.date = this.route.snapshot.params['date'];
        this.getEvents(this.filter_data);
        this.search_logo = './assets/img/icon/event_type_' + this.filter_data.event_type + '.png';
    };
    FilterComponent.prototype.getEvents = function (filter_data) {
        var _this = this;
        this.CrudService.getEvents().subscribe(function (snapshot) {
            _this.events = snapshot;
            _this.events.forEach(function (res) {
                if ((res.a_lugar == filter_data.location || filter_data.location == '') &&
                    (res.fecha == filter_data.date || filter_data.date == 'undefined/undefined/') &&
                    (res.t_tipo == filter_data.event_type || filter_data.event_type == '')) {
                    var eventData = res;
                    eventData.marker = { url: './assets/img/icon/marker_' + res.t_pos + '.gif', scaledSize: { height: 40, width: 40 } };
                    _this.eventDatas.push(eventData);
                }
            });
            console.log('evebnts', _this.eventDatas);
        });
    };
    FilterComponent.prototype.moveDetailPage = function (event_index) {
        this.Router.navigate(['/event']);
        localStorage.setItem('dataSource', JSON.stringify(this.eventDatas[event_index]));
    };
    FilterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
        { type: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] }
    ]; };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads',
            template: __importDefault(__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./filter.component.scss */ "./src/app/filter/filter.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/sections.module */ "./src/app/sections/sections.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  width: 100% !important;\n  height: 605px !important;\n  background-repeat: no-repeat;\n}\n\n.marker {\n  background-color: red;\n}\n\n.search-section {\n  background: #9B9B9B;\n  padding: 20px;\n  border-radius: 15px 15px 15px 0px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.search-section input,\n.search-section select {\n  width: 30%;\n  height: 41px;\n}\n\n.search-section .search-btn {\n  background: url('search-btn.png');\n  width: 45px;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.search-result-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px auto;\n}\n\n.search-result-section .red {\n  background: #FF776B !important;\n}\n\n.search-result-section .green {\n  background: #19E68C !important;\n}\n\n.search-result-section .main-card {\n  background-color: #585757;\n  box-shadow: 1px 2px 22px 4px #313030;\n  font-family: \"Woodford Bourne\";\n  font-weight: bold;\n  font-size: 14px;\n  color: #AEA19B;\n  padding: 5px;\n  margin: 10px;\n  position: relative;\n  height: 216px;\n  border-radius: 30px 30px 30px 0px;\n}\n\n.search-result-section .main-card img {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n.search-result-section p {\n  font-family: \"Roboto-Medium\";\n  font-weight: 400;\n  font-size: 22px;\n  color: #AEA19B;\n}\n\n@media only screen and (max-width: 600px) {\n  .section {\n    padding-bottom: 0px;\n  }\n\n  .search-result-section .main-card {\n    width: 25%;\n    height: 100px;\n  }\n  .search-result-section .main-card img {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxOb3dQcm9qZWN0c1xcQW5ndWxhcl93b3JrYW5hXzdfMVxccHJvamVjdFxcYXJnb24tZGVzaWduLXN5c3RlbS1hbmd1bGFyLW1hc3Rlclxcc3JjXFxhcHBcXGxhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDQUo7O0FEQ0k7O0VBRUksVUFBQTtFQUNBLFlBQUE7QUNDUjs7QURDSTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDQ1I7O0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSw4QkFBQTtBQ0NSOztBRENJO0VBQ0ksOEJBQUE7QUNDUjs7QURDSTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FDQ1I7O0FEQVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRVo7O0FEQ0k7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDUjs7QURHQTtFQUNJO0lBQ0ksbUJBQUE7RUNBTjs7RURHTTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VDQVY7RURDVTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDQ2Q7QUFDRiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MDVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIDtcclxufVxyXG5cclxuLm1hcmtlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOUI5QjlCO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGlucHV0LFxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogNDFweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29uL3NlYXJjaC1idG4ucG5nKTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgLnJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGNzc2QiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTlFNjhDICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWFpbi1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1NzU3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMjJweCA0cHggIzMxMzAzMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJXb29kZm9yZCBCb3VybmVcIjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNBRUExOUI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICNBRUExOUI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiB7XHJcbiAgICAgICAgLm1haW4tY2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAubWFpbi1jYXJkIHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zY3JlZW4vY2FyZC1iZy5wbmcpO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgIC5jdXN0b20tY2FyZCB7XHJcbiAgICAvLyAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC5tYWluLWltZyB7XHJcbiAgICAvLyAgICAgICAgIHdpZHRoOiAxMTElO1xyXG4gICAgLy8gICAgICAgICBtYXJnaW46IDRweCAtMTJweCAtMnB4O1xyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59IiwiYWdtLW1hcCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1hcmtlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzlCOUI5QjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5zZWFyY2gtc2VjdGlvbiBpbnB1dCxcbi5zZWFyY2gtc2VjdGlvbiBzZWxlY3Qge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDQxcHg7XG59XG4uc2VhcmNoLXNlY3Rpb24gLnNlYXJjaC1idG4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29uL3NlYXJjaC1idG4ucG5nKTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiAucmVkIHtcbiAgYmFja2dyb3VuZDogI0ZGNzc2QiAhaW1wb3J0YW50O1xufVxuLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiAuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMTlFNjhDICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1NzU3O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDIycHggNHB4ICMzMTMwMzA7XG4gIGZvbnQtZmFtaWx5OiBcIldvb2Rmb3JkIEJvdXJuZVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0FFQTE5QjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMHB4O1xufVxuLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiAubWFpbi1jYXJkIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbn1cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1NZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0FFQTE5Qjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(CrudService, Router) {
        var _this = this;
        this.CrudService = CrudService;
        this.Router = Router;
        this.zoom = 2;
        this.darkstyle = [
            {
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#444343"
                    }
                ]
            },
        ];
        this.black_points_string = ['london', 'berlin', 'nyc', 'tokyi', 'boston and chicago'];
        this.Ads_points = [];
        this.Black_points = [];
        this.filter_data = {
            location: '',
            date: '',
            event_type: 1
        };
        this.event_type = '';
        this.types = ['Majors', 'Marathons', 'Half Marathons', 'Triathlons', 'Events near your', 'Trails/Ultra', 'Runtrip Expiriences', 'Otras categorías'];
        this.black_points_string.forEach(function (black_point) {
            _this.CrudService.getLocation(black_point, '').subscribe(function (res) {
                var markerObject = { lat: res.data[0].result_object.latitude, lng: res.data[0].result_object.longitude, marker: { url: './assets/img/icon/marker_2.gif', scaledSize: { height: 40, width: 40 } } };
                _this.Black_points.push(markerObject);
            });
        });
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CrudService.getProducts().subscribe(function (res) {
            _this.ads$ = res;
            _this.ads$.forEach(function (ad) {
                _this.CrudService.getLocation(ad.ciudad, ad.desc).subscribe(function (res) {
                    var markerObject = { lat: res.data[0].result_object.latitude, lng: res.data[0].result_object.longitude, marker: { url: './assets/img/icon/marker_0.gif', scaledSize: { height: 40, width: 40 } } };
                    _this.Ads_points.push(markerObject);
                });
            });
        });
    };
    LandingComponent.prototype.filter = function (event_type) {
        this.filter_data.event_type = this.types.indexOf(event_type) + 1;
        var str = this.filter_data.date.split('-');
        this.filter_data.date = str[1] + '/' + str[2] + '/' + str[0];
        this.Router.navigate(['/filter', { 'location': this.filter_data.location, 'event_type': this.filter_data.event_type, 'date': this.filter_data.date }]);
        console.log('location', this.filter_data);
    };
    LandingComponent.ctorParameters = function () { return [
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9hbGVydHMtc2VjdGlvbi9hbGVydHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function() { return AlertsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'This is a success alert—check it out!',
            icon: 'ni ni-like-2'
        }, {
            id: 2,
            strong: 'Info!',
            type: 'info',
            message: 'This is an info alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Danger!',
            message: 'This is a danger alert—check it out!',
            icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertsSectionComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlertsSectionComponent.prototype, "alerts", void 0);
    AlertsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./alerts-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./alerts-section.component.css */ "./src/app/sections/alerts-section/alerts-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AlertsSectionComponent);
    return AlertsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9hbmd1bGFyLXNlY3Rpb24vYW5ndWxhci1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: AngularSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function() { return AngularSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AngularSectionComponent = /** @class */ (function () {
    function AngularSectionComponent(modalService, calendar) {
        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    AngularSectionComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    AngularSectionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AngularSectionComponent.prototype.isRangeStart = function (date) {
        return this.model1 && this.model2 && date.equals(this.model1);
    };
    AngularSectionComponent.prototype.isRangeEnd = function (date) {
        return this.model1 && this.model2 && date.equals(this.model2);
    };
    AngularSectionComponent.prototype.isInRange = function (date) {
        return date.after(this.model1) && date.before(this.model2);
    };
    AngularSectionComponent.prototype.isActive = function (date) {
        return date.equals(this.model1) || date.equals(this.model2);
    };
    AngularSectionComponent.prototype.endDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    };
    AngularSectionComponent.prototype.startDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    };
    AngularSectionComponent.prototype.ngOnInit = function () {
    };
    AngularSectionComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }
    ]; };
    AngularSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./angular-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./angular-section.component.css */ "./src/app/sections/angular-section/angular-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], AngularSectionComponent);
    return AngularSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9idXR0b25zLXNlY3Rpb24vYnV0dG9ucy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function() { return ButtonsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
    }
    ButtonsSectionComponent.prototype.ngOnInit = function () {
    };
    ButtonsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./buttons-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./buttons-section.component.css */ "./src/app/sections/buttons-section/buttons-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSectionComponent);
    return ButtonsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.css":
/*!****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9jcnMtc2VjdGlvbi9jcnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
  \***************************************************************/
/*! exports provided: CrsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function() { return CrsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CrsSectionComponent = /** @class */ (function () {
    function CrsSectionComponent() {
    }
    CrsSectionComponent.prototype.ngOnInit = function () {
    };
    CrsSectionComponent.prototype.ngAfterViewInit = function () {
        var slider = document.getElementById("input-slider");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("input-slider-range");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    CrsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crs-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./crs-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./crs-section.component.css */ "./src/app/sections/crs-section/crs-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CrsSectionComponent);
    return CrsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9pbnB1dHMtc2VjdGlvbi9pbnB1dHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function() { return InputsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InputsSectionComponent = /** @class */ (function () {
    function InputsSectionComponent() {
    }
    InputsSectionComponent.prototype.ngOnInit = function () {
    };
    InputsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./inputs-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./inputs-section.component.css */ "./src/app/sections/inputs-section/inputs-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], InputsSectionComponent);
    return InputsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9uYXZpZ2F0aW9uLXNlY3Rpb24vbmF2aWdhdGlvbi1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function() { return NavigationSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavigationSectionComponent = /** @class */ (function () {
    function NavigationSectionComponent() {
    }
    NavigationSectionComponent.prototype.ngOnInit = function () {
    };
    NavigationSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navigation-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navigation-section.component.css */ "./src/app/sections/navigation-section/navigation-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationSectionComponent);
    return NavigationSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9udWNsZW8tc2VjdGlvbi9udWNsZW8tc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: NucleoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function() { return NucleoSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NucleoSectionComponent = /** @class */ (function () {
    function NucleoSectionComponent() {
    }
    NucleoSectionComponent.prototype.ngOnInit = function () {
        var nucleoView = document.getElementsByClassName('icons-container')[0];
        window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
                nucleoView.classList.add('on-screen');
            }
            else {
                nucleoView.classList.remove('on-screen');
            }
        }.bind(this), false);
    };
    NucleoSectionComponent.prototype.isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    ;
    NucleoSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleo-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./nucleo-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./nucleo-section.component.css */ "./src/app/sections/nucleo-section/nucleo-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NucleoSectionComponent);
    return NucleoSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy9zZWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sections.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-section/buttons-section.component */ "./src/app/sections/buttons-section/buttons-section.component.ts");
/* harmony import */ var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-section/inputs-section.component */ "./src/app/sections/inputs-section/inputs-section.component.ts");
/* harmony import */ var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crs-section/crs-section.component */ "./src/app/sections/crs-section/crs-section.component.ts");
/* harmony import */ var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-section/navigation-section.component */ "./src/app/sections/navigation-section/navigation-section.component.ts");
/* harmony import */ var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs-section/tabs-section.component */ "./src/app/sections/tabs-section/tabs-section.component.ts");
/* harmony import */ var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alerts-section/alerts-section.component */ "./src/app/sections/alerts-section/alerts-section.component.ts");
/* harmony import */ var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography-section/typography-section.component */ "./src/app/sections/typography-section/typography-section.component.ts");
/* harmony import */ var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-section/angular-section.component */ "./src/app/sections/angular-section/angular-section.component.ts");
/* harmony import */ var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nucleo-section/nucleo-section.component */ "./src/app/sections/nucleo-section/nucleo-section.component.ts");
/* harmony import */ var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versions-section/versions-section.component */ "./src/app/sections/versions-section/versions-section.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/sections/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"],
                _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"],
                _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"],
                _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"],
                _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"],
                _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"],
                _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"],
                _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"],
                _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"],
                _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"]]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.css":
/*!******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy90YWJzLXNlY3Rpb24vdGFicy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    TabsSectionComponent.prototype.ngOnInit = function () {
    };
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tabs-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tabs-section.component.css */ "./src/app/sections/tabs-section/tabs-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy90eXBvZ3JhcGh5LXNlY3Rpb24vdHlwb2dyYXBoeS1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TypographySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function() { return TypographySectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TypographySectionComponent = /** @class */ (function () {
    function TypographySectionComponent() {
    }
    TypographySectionComponent.prototype.ngOnInit = function () {
    };
    TypographySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./typography-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./typography-section.component.css */ "./src/app/sections/typography-section/typography-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TypographySectionComponent);
    return TypographySectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZWN0aW9ucy92ZXJzaW9ucy1zZWN0aW9uL3ZlcnNpb25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: VersionsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function() { return VersionsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var VersionsSectionComponent = /** @class */ (function () {
    function VersionsSectionComponent() {
    }
    VersionsSectionComponent.prototype.ngOnInit = function () {
    };
    VersionsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-versions-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./versions-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./versions-section.component.css */ "./src/app/sections/versions-section/versions-section.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], VersionsSectionComponent);
    return VersionsSectionComponent;
}());



/***/ }),

/***/ "./src/app/services/crud.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CrudService = /** @class */ (function () {
    function CrudService(db, httpClient) {
        this.db = db;
        this.httpClient = httpClient;
        this.books = [];
    }
    CrudService.prototype.postProduct = function (formValue) {
        this.db.list('/Publicidad/Eventos', function (ref) { return ref.orderByChild('key').equalTo('-LF2eRf1lHI6X3U6C7Yh'); });
    };
    CrudService.prototype.getEvents = function () {
        return this.db.list('/Eventos').valueChanges();
    };
    CrudService.prototype.getProducts = function () {
        return this.db.list('/Publicidad/Eventos').valueChanges();
    };
    CrudService.prototype.getLocation = function (city, desc) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-rapidapi-host', 'tripadvisor1.p.rapidapi.com')
            .set('x-rapidapi-key', '556ab8d15bmshd3ca897d4be4d31p118d5bjsnb2bfb2d21489')
            .set('useQueryString', 'true');
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AUTH_SERVER_ADDRESS + "/locations/search?location_id=1&limit=1&sort=relevance&offset=0&lang=spa&currency=USD&units=km&query=" + city + " + " + desc, { headers: headers, });
    };
    CrudService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-text p {\n  margin: 0px;\n  font-family: \"Woodford Bourne\";\n  color: #9B9B9B;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.red {\n  color: #FF776B !important;\n}\n\n.font-weight {\n  font-weight: 200 !important;\n}\n\n.footer-logo {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC9mb290ZXIvRzpcXE5vd1Byb2plY3RzXFxBbmd1bGFyX3dvcmthbmFfN18xXFxwcm9qZWN0XFxhcmdvbi1kZXNpZ24tc3lzdGVtLWFuZ3VsYXItbWFzdGVyXFxzcmNcXGFwcFxcbGFuZGluZy8uLlxcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FSOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKIiwiZmlsZSI6Ii4uL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci10ZXh0IHtcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnV29vZGZvcmQgQm91cm5lJztcclxuICAgICAgICBjb2xvcjogIzlCOUI5QjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgY29sb3I6ICNGRjc3NkIgIWltcG9ydGFudFxyXG59XHJcblxyXG4uZm9udC13ZWlnaHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWxvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufSIsIi5mb290ZXItdGV4dCBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIldvb2Rmb3JkIEJvdXJuZVwiO1xuICBjb2xvcjogIzlCOUI5QjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRkY3NzZCICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LXdlaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1sb2dvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-item {\n  padding: 10px !important;\n}\n\n.nav-item a {\n  color: #19E68C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC9uYXZiYXIvRzpcXE5vd1Byb2plY3RzXFxBbmd1bGFyX3dvcmthbmFfN18xXFxwcm9qZWN0XFxhcmdvbi1kZXNpZ24tc3lzdGVtLWFuZ3VsYXItbWFzdGVyXFxzcmNcXGFwcFxcbGFuZGluZy8uLlxcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjs7QURHSTtFQUNJLGNBQUE7QUNBUiIsImZpbGUiOiIuLi9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMTlFNjhDO1xyXG4gICAgfVxyXG59IiwiLmRyb3Bkb3duLWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbSBhIHtcbiAgY29sb3I6ICMxOUU2OEM7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCZx6hTBKw-xTlhIpmY4MbfplMYDGkFSDA",
        authDomain: "runtrip-ar.firebaseapp.com",
        databaseURL: "https://runtrip-ar.firebaseio.com",
        projectId: "runtrip-ar",
        storageBucket: "runtrip-ar.appspot.com",
        messagingSenderId: "654028737360",
        appId: "1:654028737360:web:acee98dca94c09a8553a55",
        measurementId: "G-YD5S2HS061"
    },
    AUTH_SERVER_ADDRESS: 'https://tripadvisor1.p.rapidapi.com'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Argon Design System Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




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

module.exports = __webpack_require__(/*! G:\NowProjects\Angular_workana_7_1\project\argon-design-system-angular-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map