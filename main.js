(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy recursive":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy namespace object ***!
  \***********************************************************************************************************/
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
webpackEmptyAsyncContext.id = "./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy recursive";

/***/ }),

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
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid detail-review\">\n                        <div class=\"detail-img\">\n                            <div class=\"first-img\">\n                                <img src=\"{{selectedEvent.imgp}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\" />\n                                <div class=\"title-detail\">\n                                    <div class=\"title\">{{selectedEvent.l_lugar}}<span>{{selectedEvent.pais}}</span></div>\n                                    <div class=\"name\">{{selectedEvent.nombre}}</div>\n                                    <div class=\"date\">{{Date}}</div>\n                                    <div class=\"calendar-bar\">\n                                        <div>DAYS\n                                            <div>{{countdownDays}}</div>\n                                        </div>\n                                        <div>HRS\n                                            <div>46</div>\n                                        </div>\n                                        <div>MIN\n                                            <div>46</div>\n                                        </div>\n                                        <div>SEG\n                                            <div>46</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"second-img\">\n\n                                <div class=\"img\">\n                                    <ngb-carousel *ngIf=\"carousels\">\n                                        <ng-template ngbSlide *ngFor=\"let carousel of carousels\">\n                                            <div class=\"picsum-img-wrapper\">\n                                                <img src=\"{{carousel}}\" alt=\"Angular Carousel 1\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\">\n                                            </div>\n                                        </ng-template>\n                                    </ngb-carousel>\n                                </div>\n                                <div class=\"social-icons\">\n                                    <a href=\"{{selectedEvent.rsFace}}\"> <img src=\"./assets/img/icon/facebook.png\" /></a>\n                                    <a href=\"{{selectedEvent.rsTwit}}\"> <img src=\"./assets/img/icon/twitter.png\" /></a>\n                                    <a href=\"{{selectedEvent.rsInst}}\"> <img src=\"./assets/img/icon/instagram.png\" /></a>\n                                    <a href=\"{{selectedEvent.linkvideo}}\"> <img src=\"./assets/img/icon/zocial.png\" /></a>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"detail-text\">\n                            <div class=\"top-text\">\n                                <div>\n                                    <img src=\"./assets/img/icon/sun.png\" />\n                                    <div>Aver. air temp\n                                        <div>{{wether.temp_min}}º /{{wether.temp_max}}º</div>\n                                    </div>\n                                </div>\n                                <div><img src=\"./assets/img/icon/flight.png\" />\n                                    <div class=\"title\">{{BestFly.to}}</div>\n                                </div>\n                            </div>\n                            <div class=\"bottom-text\">{{selectedEvent.desc}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid buttons\">\n                        <div style=\"visibility: hidden;\">\n                            <img src=\"./assets/img/icon/RTx.png\">\n                            <div>experiences</div>\n                        </div>\n                        <a href=\"{{selectedEvent.linkpagina}}\">\n                            <div>\n                                <img src=\"./assets/img/icon/sign-in.png\">\n                                <div>sign in</div>\n                            </div>\n                        </a>\n                        <div>\n                            <img src=\"./assets/img/icon/share.png\">\n                            <div>share</div>\n                        </div>\n                        <div style=\"visibility: hidden;\">\n                            <img src=\"./assets/img/icon/save.png\">\n                            <div>ADD GOAL</div>\n                        </div>\n                    </div>\n                    <div class=\"mt-20 flex justify-content-center \"> <img class=\"ml-auto mr-auto line\" src=\"./assets/img/screen/line.png\"></div>\n                </div>\n                <div class=\"col-lg-12 info-search-section\">\n                    <div class=\"hotel-card col-lg-5\">\n                        <div>{{selectedEvent.Hotel.nombre}}\n                        </div>\n                        <div>\n                            <div>Check In<br>{{selectedEvent.Hotel.fantes}}</div>\n                            <div>Check out<br>{{selectedEvent.Hotel.fdesps}}</div>\n                        </div>\n                        <div>\n                            <div class=\"price-title\">3 noches con desayuno\n                            </div>\n                            <div class=\"price\">{{selectedEvent.Hotel.precio}}</div>\n                        </div>\n                    </div>\n                    <div class=\"flight-card col-lg-5\">\n                        <div>\n                            <div>\n                                <div>from</div>\n                                <div class=\"from\">{{BestFly.from}}</div>\n                                <div>Sep. 26</div>\n                            </div>\n                            <div>\n                                <div>to</div>\n                                <div class=\"to\">{{BestFly.to}}</div>\n                                <div>Sep. 30</div>\n                            </div>\n                        </div>\n                        <div>\n                            <div>FROM\n                            </div>\n                            <div class=\"price\">{{BestFly.precio}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"youtube-section col-lg-12\">\n                    <div class=\"col-lg-12 two-card-section\">\n                        <div class=\"row row-grid buttons\">\n                            <div>\n                                <img src=\"./assets/img/icon/tab-1.png\">\n                                <div>12</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-2.png\">\n                                <div>36</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-3.png\">\n                                <div>0</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/icon-green-1.png\">\n                                <div>17</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-5.png\">\n                                <div>21</div>\n                            </div>\n                            <div>\n                                <img src=\"./assets/img/icon/tab-6.png\">\n                                <div>36</div>\n                            </div>\n                        </div>\n                        <div class=\"flex justify-content-center\"> <img class=\"ml-auto mr-auto line\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                    <div class=\"iframe-container\">\n                        <iframe width=\"100%\" height=\"730\" [src]=\"displayURL\">\n                        </iframe>\n                    </div>\n\n                </div>\n                <!-- <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"mt-20 \"> <img class=\"main-img line\" src=\"./assets/img/screen/line.png\"></div>\n                        <div class=\" mt-20 \">\n                            <div class=\"title\">Las mejores</div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"row row-grid\">\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card card-section\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/relatived-img.png\"></div>\n                                        <div>\n                                            <img src=\"./assets/img/icon/bed_breakfast.png\" />\n                                            <div class=\"custom-card \">\n                                                <div>Medio maratón de Merlbourn</div>\n                                                <div class=\"country-title\">GERMANY</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"small-title\">MORE LIKE THIS ...</div>\n                    <div class=\"row row-grid\">\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-1.png\"></div>\n                            </div>\n                            <div class=\"col-lg-6 main-card\">\n                                <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-img-2.png\"></div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20 \"> <img class=\"main-img line\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <img class=\"main-img\" src=\"./assets/img/screen/p3.png\">\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"page-title\">REGISTRO DE EXPERIENCIA</div>\n                <div class=\"col-lg-12 form-section\">\n                    <div class=\"field input-title\">\n                        <input placeholder=\"Ubicación de tu experiencia\" />\n                        <div></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 category_checkboxs\">\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/experience-1.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/experience-2.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/experience-3.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/experience-4.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/experience-5.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/experience-6.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-12 form-section\">\n                    <div class=\"field\">\n                        <input placeholder=\"¿Cual es el titulo de tu experiencia?\" />\n                        <div></div>\n                    </div>\n\n                    <div class=\"field\">\n                        <input placeholder=\"Coloca un titulo mas personal, mas intimo \n                        para atraer a mas personas.\" />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"Indica que idiomas manejas.\" />\n                        <div></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 confirm-section\">\n                    <div class=\"title\">¿Tienes un publico objetivo?</div>\n                    <div>\n                        <input type=\"checkbox\" />\n                        <input type=\"checkbox\" />\n                    </div>\n\n                </div>\n                <div class=\"col-lg-12 confirm-section\">\n                    <div class=\"title\">¿a que eventos deseas vincularlos?</div>\n                    <div>\n                        <button class=\"file-upload-button\">\n                            <div class=\"plus-icon\">+</div>\n                            <div>add image</div>\n                        </button>\n\n                        <div class=\"form-section links\">\n                            <div class=\"field\">\n                                <input placeholder=\"#\" />\n                                <div></div>\n                            </div>\n                            <div class=\"field\">\n                                <input placeholder=\"#\" />\n                                <div></div>\n                            </div>\n                            <div class=\"field\">\n                                <input placeholder=\"#\" />\n                                <div></div>\n                            </div>\n\n                            <div class=\"field\">\n                                <input placeholder=\"#\" />\n                                <div></div>\n                            </div>\n                            <div class=\"field\">\n                                <input placeholder=\"#\" />\n                                <div></div>\n                            </div>\n\n\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-lg-12 experience-section\">\n                    <div class=\"title\">¿Con que frecuencia ofrecerás tu experiencia?</div>\n                    <div class=\"flex\">\n                        <input type=\"checkbox\" />\n                        <div>1-4 dias por semana.</div>\n                    </div>\n                    <div class=\"flex\">\n                        <input type=\"checkbox\" />\n                        <div>5-7 veces por semana.</div>\n                    </div>\n                    <div class=\"flex\">\n                        <input type=\"checkbox\" />\n                        <div>Aun no lo he decidido.</div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 textarea-section\">\n                    <div class=\"line_bar\"></div>\n                    <div class=\"title\">Describe tu experiencia:</div>\n                    <div class=\"detail\">\n                        <p>Tips y consejos de una buena invitación: </p>\n                        <p>-Conta el itinerario y que van hacer tus huéspedes mientras dure la experiencia. -Indica cual es el nivel de participación que esperas de ellos. </p>\n                        <p>\n                            -Comparte las costumbres, historia y cultura del lugar.\n                        </p>\n                        <p>-Relata el contexto en el que se encuentra inmerso tu experiencia, y las diferencias con respecto a una situación similar convencional o tradicional.</p>\n                        <p>-Detalla como es el lugar o contexto donde se desarrolla la experiencia.</p>\n                        <p>-Además de un breve relato sobre tu experiencia, siempre es conveniente subir un video contando, presentándote y mostrando de que se trata.</p>\n                    </div>\n                    <textarea id=\"w3review\" name=\"w3review\" rows=\"4\" cols=\"50\">\n                    </textarea>\n                    <div class=\"line_bar\"></div>\n                </div>\n\n                <div class=\"col-lg-12 upload_section\">\n                    <div class=\"line_bar\"></div>\n                    <div class=\"flex\">\n                        <div class=\"title\">Multimedia</div>\n                        <button class=\"file-upload-button\">\n                            <input class=\"file-input\" type=\"file\" name=\"file\" #fileInput\n                                (change)=\"onChange(fileInput.files[0])\" />\n                                <div class=\"plus-icon\">+</div>\n                            <div>add image</div>\n                        </button>\n\n                    </div>\n                    <div class=\"column\">\n                        <figure class=\"image \" *ngFor=\"let item of imgs\">\n                            <img [src]=\"item\" class=\"is-210x220\" />\n                        </figure>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"Enlace de VIDEO / You Tuve / Vimeo\" />\n                        <div></div>\n                    </div>\n                    <div class=\"line_bar\"></div>\n                </div>\n                <div class=\"col-lg-12 date-section\">\n                    <div class=\"line_bar\"></div>\n                    <div class=\"title\">Días y horarios</div>\n                    <div class=\"col-lg-12 category_checkboxs\">\n                        <div class=\"field\">\n                            <div>S</div>\n                            <input type=\"radio\" />\n                        </div>\n                        <div class=\"field\">\n                            <div>M</div>\n                            <input type=\"radio\" />\n                        </div>\n                        <div class=\"field\">\n                            <div>T</div>\n                            <input type=\"radio\" />\n                        </div>\n                        <div class=\"field\">\n                            <div>W</div>\n                            <input type=\"radio\" />\n                        </div>\n                        <div class=\"field\">\n                            <div>T</div>\n                            <input type=\"radio\" />\n                        </div>\n                        <div class=\"field\">\n                            <div>F</div>\n                            <input type=\"radio\" />\n                        </div>\n                        <div class=\"field\">\n                            <div>S</div>\n                            <input type=\"radio\" />\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-lg-12 form-section hours-section\">\n                    <div class=\"title\">Cuales son los horarios en que se realiza la experiencia</div>\n                    <div class=\"field\">\n                        <input placeholder=\"¿Cual es el titulo de tu experiencia?\" />\n                        <div></div>\n                    </div>\n\n                    <div class=\"field\">\n                        <input placeholder=\"Coloca un titulo mas personal, mas intimo \n                        para atraer a mas personas.\" />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"Indica que idiomas manejas.\" />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"¿Cual es el titulo de tu experiencia?\" />\n                        <div></div>\n                    </div>\n\n                    <div class=\"field\">\n                        <input placeholder=\"Coloca un titulo mas personal, mas intimo \n                        para atraer a mas personas.\" />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"Indica que idiomas manejas.\" />\n                        <div></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 form-section \">\n                    <div class=\"title\">¿Cuánto dura la experiencia?</div>\n                    <div class=\"field\">\n                        <input />\n                        <div></div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 form-section \">\n                    <div class=\"title\">Puedes incluir una tarifa aproximada, (opcional)</div>\n                    <div class=\"field\">\n                        <input />\n                        <div></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 upload_section\">\n                    <div class=\"line_bar\"></div>\n\n                    <div class=\"form-section reference-section\">\n                        <div class=\"title\">¿Cuánto dura la experiencia?</div>\n                        <div class=\"detail\">El valor es una referencia, del costo apoximado de tu servicio, la idea es que orientes en valores a tus potenciales clientes, recomendamos no utilizar valores falso o poco cercanos a la realidad.</div>\n                        <div class=\"field\">\n                            <input />\n                            <div></div>\n                        </div>\n                    </div>\n                    <div class=\"line_bar\"></div>\n                </div>\n                <div class=\"col-lg-12 policy-section\">\n                    <div class=\"title\">De las siguientes afirmaciones, ¿cuáles se aplican a ti y a la experiencia?</div>\n                    <div>\n                        <div class=\"field\">\n                            <input type=\"checkbox\" />\n                            <div>Dispongo de todas las licencias, permisos o autorizaciones aplicables a visitas guiadas o servicios turísticos.\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <input type=\"checkbox\" />\n                            <div>Para organizar la experiencia no necesito ninguna licencia, permiso o autorización aplicable a visitas guiadas o servicios turísticos.</div>\n                        </div>\n                    </div>\n\n\n                </div>\n                <div class=\"col-lg-12 form-section\">\n                    <div class=\"title\">información de contacto adicional</div>\n                    <div class=\"field\">\n                        <input placeholder=\"web\" />\n                        <div></div>\n                    </div>\n\n                    <div class=\"field\">\n                        <input placeholder=\"celular whapp\" />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"email\" />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"INSTAGRAM\" />\n                        <div></div>\n                    </div>\n\n                    <div class=\"field\">\n                        <input placeholder=\"facebook\" />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"twitter\" />\n                        <div></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 checkboxs-section\">\n                    <div class=\"field\">\n                        <div>Acepto y reconozco que Runtrip Social Media no participa legal y comercialmente de esta experiencia quedando a mi total responsabilidad cualquier tipo de inconveniente. Actuando solo como un difusor de mi actividad y/o experiencia.</div>\n                        <input type=\"checkbox\" />\n\n                    </div>\n                </div>\n                <div class=\"col-lg-12 text-center\">\n                    <button class=\"submit\">Postular</button>\n\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-lg-12 search-bar-section\">\n                    <img src=\"{{search_logo}}\" />\n                    <div class=\"search-bar\">\n                        <div class=\"search-section\">\n                            <input placeholder=\"NOMBRE / LOCACION\" class=\"location-key\" [(ngModel)]='filter_data.location' />\n                            <input placeholder=\"FECHA\" class=\"date-key\" [(ngModel)]='filter_data.date' type=\"date\" />\n                            <a class=\"search-btn\" (click)='filter()'></a>\n                        </div>\n                        <img src=\"./assets/img/screen/ads_line.png\" />\n                    </div>\n\n                </div>\n\n\n                <div class=\"col-lg-12 map-section\">\n                    <agm-map [zoom]=\"zoom\" [disableDefaultUI]=\"true\" [scrollwheel]=\"false\" [styles]=\"darkstyle\">\n                        <agm-marker [iconUrl]=\"eventData.marker\" [latitude]=\"eventData.a_lat\" [longitude]=\"eventData.a_long\" *ngFor=\"let eventData of eventDatas\"></agm-marker>\n                        <agm-marker [iconUrl]=\"Black_point.marker\" [latitude]=\"Black_point.lat\" [longitude]=\"Black_point.lng\" *ngFor=\"let Black_point of Black_points\"></agm-marker>\n                    </agm-map>\n                </div>\n\n\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-6 main-card\" *ngFor=\"let card of cards\">\n                                <div>\n                                    <a href=\"{{card.link}}\">\n                                        <div class=\"img-container\"><img class=\"main-img\" src=\"{{card.src}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-12 main-card\">\n                                <img class=\"main-img\" src=\"./assets/img/screen/flight_cover.png\">\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div> -->\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"icons-section\">\n                            <img src=\"./assets/img/icon/date.png\" />\n                            <!-- <img class=\"vertical-line\" src=\"./assets/img/icon/vertical_line.png\" />\n                            <img src=\"./assets/img/icon/map.png\" /> -->\n                        </div>\n                        <div class=\"search-result-section col-lg-12\">\n                            <ng-container *ngIf=\"eventDatas.length; else elseTemplate\">\n                                <div class=\"main-card\" *ngFor=\"let event of eventDatas ; let indexOfelement=index;\" (click)='moveDetailPage(indexOfelement)'>\n                                    <img src=\"{{event.imgp}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\" />\n                                    <div class=\"detail\">\n                                        <p class=\"location\">{{event.nombre}}</p>\n                                        <p class=\"name\">{{event.pais}}</p>\n                                        <p class=\"date\">{{event.fecha}}</p>\n                                        <p class=\"peoples\">runtripers 566</p>\n                                    </div>\n                                </div>\n                            </ng-container>\n                            <ng-template #elseTemplate>\n                                <div class=\"none-section\">Loading...</div>\n                            </ng-template>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-lg-12 two-card-section\">\n                    <a href=\"{{home_images.Home3.link}}\">\n                        <div class=\"img-container\"><img class=\"main-img\" src=\"{{home_images.Home3.img}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\"></div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"title\" style=\"visibility: hidden;\">Tu próxima</div>\n                <div class=\"col-lg-12\">\n                    <div class=\"row row-grid\">\n                        <div class=\"col-lg-3 main-card\" *ngFor=\"let ad of ads\" (click)=\"moveDetailPage(ad.nombre)\">\n\n                            <div class=\"img-section\"><img class=\"main-img\" src=\"{{ad.img}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\"></div>\n                            <div class=\"custom-card\">\n                                <div>{{ad.desc}}</div>\n                                <div class=\"country-title\"> {{ad.ciudad}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 icons-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"col-lg-3 main-card\" *ngFor=\"let ad of ads\">\n                            <div> <img class=\"main-img\" src=\"./assets/img/icon/event-types/type_{{ad.tipo}}.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 map-section\">\n                    <agm-map [zoom]=\"zoom\" [disableDefaultUI]=\"true\" [scrollwheel]=\"false\" [styles]=\"darkstyle\">\n                        <agm-marker [iconUrl]=\"Ads_point.marker\" [latitude]=\"Ads_point.lat\" [longitude]=\"Ads_point.lng\" *ngFor=\"let Ads_point of Ads_points\"></agm-marker>\n                        <agm-marker [iconUrl]=\"Black_point.marker\" [latitude]=\"Black_point.lat\" [longitude]=\"Black_point.lng\" *ngFor=\"let Black_point of Black_points\"></agm-marker>\n                    </agm-map>\n                </div>\n\n                <!-- <div class=\"title\">RTx</div>\n\n                <div class=\"col-lg-12 icons-section bottim-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"img-card\"> <img class=\"main-img\" src=\"./assets/img/icon/icon-3.png\"></div>\n                            <div class=\"custom-card \">\n                                <div><img src=\"./assets/img/icon/black-icon-1.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-2.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-3.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-4.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-5.png\" /> 00</div>\n                                <div><img src=\"./assets/img/icon/black-icon-6.png\" /> 00</div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div> -->\n                <!-- <div class=\"col-lg-12 bottim-img-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-1.png\"></div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-2.png\"></div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-3.png\"></div>\n                        </div>\n                        <div class=\"col-lg-3 main-card\">\n                            <div class=\"custom-card \">\n                                <div>Medio maratón de Merlbourn</div>\n                                <div class=\"country-title\">GERMANY</div>\n                            </div>\n                            <div> <img class=\"main-img\" src=\"./assets/img/screen/bottom-image-4.png\"></div>\n                        </div>\n\n                    </div>\n                </div> -->\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                        <div class=\" mt-20 two-card\">\n                            <div class=\"col-lg-6 main-card\">\n                                <div>\n                                    <a href=\"{{home_images.Home1.link}}\">\n                                        <div class=\"img-container\"><img class=\"main-img\" src=\"{{home_images.Home1.img}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6 main-card\">\n                                <div>\n                                    <a href=\"{{home_images.Home3.link}}\"> <img class=\"main-img\" src=\"{{home_images.Home3.img}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\"></a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"search-section\">\n                        <input placeholder=\"NOMBRE / LOCACION\" [(ngModel)]='filter_data.location' />\n\n                        <input placeholder=\"FECHA\" class=\"date-key\" [ngModel]=\"filter_data.date\" name=\"startDate\" type=\"date\" />\n                        <select [(ngModel)]='event_type'>\n                            <option *ngFor=\"let type of t_types\" value=\"{{type.index}}\">{{type.name}}</option>\n                        </select>\n\n                        <a class=\"search-btn\" (click)='filter(event_type)'></a>\n                    </div>\n\n                    <div class=\"search-result-section col-lg-12\">\n                        <div class=\"col-lg-3 col-sm-4\" *ngFor=\"let type of t_types\">\n                            <div class=\"main-card\" [class]=\"type.index == 6 ? 'red' : '' || type.index == 8 ? 'green' : '' \" (click)=\"filter(type.index)\">\n                                <img src=\"./assets/img/icon/ads-{{type.index}}.png\" />\n                            </div>\n                            <p>{{type.name}}</p>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- <div class=\"col-lg-12 two-card-section\">\n                    <div class=\"row row-grid\">\n                        <div class=\"mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                        <div class=\" mt-20 \">\n                            <div class=\"title\">Las mejores</div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"row row-grid\">\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-1.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-2.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-1.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-3 main-card\">\n                                        <div> <img class=\"main-img\" src=\"./assets/img/screen/top-image-2.png\"></div>\n                                        <div class=\"custom-card \">\n                                            <div>Medio maratón de Merlbourn</div>\n                                            <div class=\"country-title\">GERMANY</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\" mt-20\"> <img class=\"main-img\" src=\"./assets/img/screen/line.png\"></div>\n                    </div>\n                </div> -->\n                <div class=\"col-lg-12 two-card-section\">\n\n                    <a href=\"{{home_images.Home2.link}}\"> <img class=\"main-img\" src=\"{{home_images.Home2.img}}\" onerror=\"this.onerror=null;this.src='./assets/img/screen/cover.png'\"></a>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"title\">Login</div>\n\n                <div class=\"col-lg-12 form-section\">\n                    <div class=\"field\">\n                        <input placeholder=\"Email or Usernames*\" [(ngModel)]='email' type=\"email\" />\n                        <div></div>\n                    </div>\n                    <div class=\"password-field\">\n                        <div class=\"field\">\n                            <input placeholder=\"Password*\" [(ngModel)]='password' [type]=\"hide ? 'password' : 'text'\" />\n                            <div></div>\n                        </div>\n                        <a (click)=\"toggleHidden()\"><img src=\"./assets/img/icon/hide.png\" /> </a>\n                    </div>\n\n                </div>\n\n                <div class=\"col-lg-12 text-center\">\n                    <button class=\"submit\" (click)=\"login()\">NEW USER SIGN IN</button>\n\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rtx/rtx.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rtx/rtx.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"bg-clr\">\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section  pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n\n            </div>\n\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n    <section class=\"section pt-lg-0 mt--200\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"title\">NUEVO EVENTO</div>\n                <div class=\"col-lg-12 category_checkboxs\">\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/ads-2.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/ads-3.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/ads-4.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/ads-8.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/ads-6.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n                    <div class=\"field\">\n                        <img src=\"./assets/img/icon/ads-1.png\" />\n                        <input type=\"checkbox\" />\n                    </div>\n\n                </div>\n                <div class=\"col-lg-12 form-section\">\n                    <div class=\"field\">\n                        <input placeholder=\"Nombre del evento*\" [(ngModel)]='event.nombre' />\n                        <div></div>\n                    </div>\n\n                    <div class=\"field\">\n                        <input type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Search Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search [(ngModel)]='event.a_lugar' />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"Fecha de inicio*\" type=\"date\" [(ngModel)]='event.fecha' />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <!-- <input placeholder=\"Aeropuerto internacional *\" /> -->\n                        <input type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Search country\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #country [(ngModel)]='event.pais' />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"web del evento*\" [(ngModel)]='event.linkpagina' />\n                        <div></div>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"Link de inscripción al evento*\" [(ngModel)]='event.linkincripcion' />\n                        <div></div>\n                    </div>\n\n\n                </div>\n\n                <div class=\"col-lg-12 textarea-section\">\n                    <div class=\"title\">Descripción del evento</div>\n                    <textarea id=\"w3review\" name=\"w3review\" rows=\"4\" cols=\"50\" [(ngModel)]='event.desc'>\n                    </textarea>\n                </div>\n\n                <div class=\"col-lg-12 upload_section\">\n                    <div class=\"line_bar\"></div>\n                    <div class=\"flex\">\n                        <div class=\"title\">Multimedia</div>\n                        <button class=\"file-upload-button\">\n                            <input class=\"file-input\" type=\"file\" name=\"file\" #fileInput\n                                (change)=\"onChange(fileInput.files[0])\" />\n                                <div>add image</div>\n                        </button>\n                    </div>\n                    <div class=\"column\">\n                        <figure class=\"image \" *ngFor=\"let item of imgs\">\n                            <img [src]=\"item\" class=\"is-210x220\" />\n                        </figure>\n                    </div>\n                    <div class=\"field\">\n                        <input placeholder=\"Enlace de VIDEO / You Tuve / Vimeo\" [(ngModel)]='event.linkvideo' />\n                        <div></div>\n                    </div>\n                    <div class=\"line_bar\"></div>\n                </div>\n                <div class=\"col-lg-12 social-section\">\n                    <div>\n                        <div class=\"title\">METATAGS</div>\n                        <div class=\"field\">\n                            <input placeholder=\"#\" />\n                            <div></div>\n                        </div>\n\n                        <div class=\"field\">\n                            <input placeholder=\"#\" />\n                            <div></div>\n                        </div>\n                        <div class=\"field\">\n                            <input placeholder=\"#\" />\n                            <div></div>\n                        </div>\n\n                    </div>\n\n                    <div>\n                        <div class=\"title\">REDES SOCIALES</div>\n                        <div class=\"field\">\n                            <input placeholder=\"INSTAGRAM\" [(ngModel)]='event.rsInst' />\n                            <div></div>\n                        </div>\n\n                        <div class=\"field\">\n                            <input placeholder=\"facebook\" [(ngModel)]='event.rsFace' />\n                            <div></div>\n                        </div>\n                        <div class=\"field\">\n                            <input placeholder=\"twitter\" [(ngModel)]='event.rsTwit' />\n                            <div></div>\n                        </div>\n\n                    </div>\n\n                </div>\n                <div class=\"col-lg-12 checkboxs-section\">\n                    <div class=\"field\">\n                        <input type=\"checkbox\" />\n                        <div>SOY ORGANIZADOR DEL EVENTO</div>\n                    </div>\n                    <div class=\"field\">\n                        <input type=\"checkbox\" />\n                        <div>PROPONGO ESTE EVENTO</div>\n                    </div>\n\n                </div>\n                <div class=\"col-lg-12 text-center\">\n                    <button class=\"submit\" (click)=\"pushEvent()\">Finalizar</button>\n\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\" style=\"padding-top : 30px\">\n    <div class=\"container\">\n        <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/landing']\">\n            <img src=\"./assets/img/icon/logo.png\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n            <div class=\"navbar-collapse-header\">\n                <div class=\"row\">\n                    <div class=\"col-6 collapse-brand\">\n                        <a [routerLink]=\"['/landing']\">\n                            <img src=\"./assets/img/icon/logo.png\">\n                        </a>\n                    </div>\n                    <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n                            <span></span>\n                            <span></span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <ul class=\"navbar-nav align-items-lg-end ml-lg-auto\">\n                <!-- <li class=\"nav-item\">\n                    <a [routerLink]=\"['/landing']\" class=\"dropdown-item\">Home</a>\n                </li> -->\n                <li class=\"nav-item\">\n                    <a class=\"dropdown-item\" href=\"https://indd.adobe.com/view/5adac4cb-4114-4cac-bfac-740f43f6e35e\">ABOUT US</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"dropdown-item\" href=\"https://www.runningtheblog.com/\">BLOG</a>\n\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['/rtx']\">UPLOAD YOUR FAVORITE RACE</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['/experience']\">PERFIL</a>\n                </li> -->\n                <li class=\"nav-item\">\n                    <ng-container *ngIf=\"islogin; else elseTemplate\">\n                        <a class=\"dropdown-item\" (click)='logout()'>LOGOUT</a>\n                    </ng-container>\n                    <ng-template #elseTemplate>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/login']\">LOGIN</a>\n                    </ng-template>\n\n                </li>\n                <!-- <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n                    <img src=\"./assets/img/screen/user.png\">\n                </li> -->\n            </ul>\n        </div>\n    </div>\n</nav>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _rtx_rtx_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rtx/rtx.component */ "./src/app/rtx/rtx.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var angular_sweetalert_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-sweetalert-service */ "./node_modules/angular-sweetalert-service/js/index.js");
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
                _event_event_component__WEBPACK_IMPORTED_MODULE_16__["EventComponent"],
                _rtx_rtx_component__WEBPACK_IMPORTED_MODULE_22__["RtxComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_24__["ExperienceComponent"]
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
                    apiKey: 'AIzaSyCFrvupqiF0zfCiPdfiqSlpm4C6am-m0Ow',
                    libraries: ['places']
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"],
            ],
            providers: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"], angular_sweetalert_service__WEBPACK_IMPORTED_MODULE_26__["SweetAlertService"],
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
/* harmony import */ var _rtx_rtx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rtx/rtx.component */ "./src/app/rtx/rtx.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
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
    { path: 'rtx', component: _rtx_rtx_component__WEBPACK_IMPORTED_MODULE_11__["RtxComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"] },
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

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
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


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        localStorage.removeItem('user');
    };
    AuthService.prototype.isLoggedIn = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
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
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  width: 100% !important;\n  height: 605px !important;\n  background-repeat: no-repeat;\n}\n\n.marker {\n  background-color: red;\n}\n\n.search-section {\n  background: #9B9B9B;\n  padding: 20px;\n  border-radius: 15px 15px 15px 0px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.search-section input {\n  width: 30%;\n  height: 41px;\n}\n\n.search-section .search-btn {\n  background: url('search-btn.png');\n  width: 45px;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.search-result-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px auto;\n}\n\n.search-result-section .main-card {\n  width: 23%;\n  background-color: #444343;\n  box-shadow: 1px 2px 22px 4px #313030;\n  font-family: \"Roboto-Bold\";\n  font-weight: bold;\n  font-size: 14px;\n  color: #AEA19B;\n  padding: 5px;\n  margin: 10px;\n  position: relative;\n  height: 216px;\n  border-radius: 30px 30px 30px 0px;\n}\n\n.search-result-section .main-card img {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n.small-title {\n  font-size: 20;\n  color: #AEA19B;\n}\n\n.detail-review {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-img {\n  width: 56%;\n}\n\n.detail-review .detail-img .first-img {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-img .first-img img {\n  width: 268px;\n  height: 263px;\n  border-radius: 28px;\n}\n\n.detail-review .detail-img .first-img .title-detail {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n}\n\n.detail-review .detail-img .first-img .calendar-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 75%;\n}\n\n.detail-review .detail-img .first-img .calendar-bar > div {\n  font-family: \"Roboto-Thin\";\n  font-size: 15px;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.detail-review .detail-img .first-img .calendar-bar > div > div {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"Roboto-Medium\";\n}\n\n.detail-review .detail-img .first-img .title-detail .title {\n  font-size: 30px;\n  font-family: \"Roboto-Thin\";\n  color: #19E68C;\n  font-weight: 100;\n  text-align: center;\n  line-height: 1;\n}\n\n.detail-review .detail-img .first-img .title-detail .title span {\n  text-transform: uppercase;\n  font-family: \"Roboto-Bold\";\n  font-size: 30px;\n  color: white;\n}\n\n.detail-review .detail-img .first-img .title-detail .name {\n  font-family: \"Roboto-Regular\";\n  color: #AEA19B;\n  font-size: 23px;\n  text-align: center;\n}\n\n.detail-review .detail-img .first-img .title-detail .date {\n  color: #FF776B;\n  font-family: \"Roboto-Bold\";\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 2;\n}\n\n.detail-review .detail-img .second-img {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-img .second-img > .img {\n  width: 84.5%;\n  height: 337px;\n  margin: 10px;\n  border-radius: 30px 30px 30px 0px;\n}\n\n.detail-review .detail-img .second-img .social-icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.detail-review .detail-text {\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 81px;\n}\n\n.detail-review .detail-text .top-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.detail-review .detail-text .top-text > div {\n  display: -webkit-box;\n  display: flex;\n  width: 43%;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.detail-review .detail-text .top-text > div > div {\n  font-family: \"Roboto-Thin\";\n  font-size: 20px;\n  color: #AEA19B;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: 1;\n}\n\n.detail-review .detail-text .top-text > div > div > div {\n  color: #FF776B;\n  font-family: \"Roboto-Regular\";\n  font-size: 30px;\n}\n\n.detail-review .detail-text .top-text > div .title {\n  color: #FF776B;\n  font-family: \"Roboto-Regular\";\n  font-size: 41px;\n  margin: 0px;\n}\n\n.detail-review .detail-text .top-text > div img {\n  height: 50px;\n}\n\n.detail-review .detail-text .bottom-text {\n  margin-top: 50px;\n  color: #AEA19B;\n  font-family: \"Roboto-Regular\";\n  font-size: 20px;\n  letter-spacing: 1px;\n  height: 430px;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 20px;\n  font-size: 18px;\n  font-weight: 100;\n  font-family: \"Roboto-Regular\";\n  color: #FF776B;\n  text-transform: uppercase;\n}\n\n.buttons > div {\n  margin-top: auto;\n  margin-bottom: auto;\n  min-height: 85px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.buttons img {\n  max-width: 50px;\n}\n\n.buttons a {\n  color: #FF776B;\n}\n\n.buttons a > div {\n  margin-top: auto;\n  margin-bottom: auto;\n  min-height: 85px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.info-search-section {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  min-height: 293px;\n}\n\n.info-search-section .hotel-card {\n  background: url('hotel-card.png');\n  background-size: 100% 100%;\n  font-size: 16px;\n  font-weight: lighter;\n  color: white;\n  background-repeat: no-repeat;\n  height: auto;\n  min-height: 220px;\n  padding: 51px 100px 46px 98px;\n  font-family: \"Roboto-Light\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.info-search-section .hotel-card > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 8px;\n  line-height: 1;\n}\n\n.info-search-section .hotel-card .price {\n  font-family: \"Roboto-Regular\";\n  font-size: 30px;\n}\n\n.info-search-section .hotel-card .price-title {\n  color: #AEA19B;\n}\n\n.info-search-section .flight-card {\n  background: url('flight-card.png');\n  background-size: 100% 100%;\n  font-size: 15px;\n  font-weight: lighter;\n  color: #AEA19B;\n  background-repeat: no-repeat;\n  height: auto;\n  min-height: 220px;\n  padding: 51px 100px 46px 98px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  font-family: \"Roboto-Light\";\n}\n\n.info-search-section .flight-card > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 8px;\n  line-height: 1;\n}\n\n.info-search-section .flight-card .from {\n  font-size: 36px;\n  font-family: \"Roboto-Regular\";\n}\n\n.info-search-section .flight-card .to {\n  font-size: 36px;\n  font-family: \"Roboto-Regular\";\n  color: #FF776B;\n}\n\n.info-search-section .flight-card .price {\n  font-size: 36px;\n  font-family: \"Roboto-Regular\";\n  color: white;\n}\n\n.youtube-section .buttons {\n  color: white;\n  font-size: 42px;\n}\n\n.youtube-section .iframe-container {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 50px;\n}\n\n.youtube-section .iframe-container iframe {\n  border-radius: 30px;\n}\n\n.card-section {\n  background: none;\n  background-repeat: no-repeat;\n  width: 100%;\n  background-size: 100% 100%;\n  height: 100%;\n  min-height: 219px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.card-section > div {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10px;\n}\n\n.card-section > div .custom-card {\n  padding-left: 8px;\n  margin: 0px;\n  width: 80%;\n  border-radius: 0px 0px 0px 30px;\n}\n\nngb-carousel {\n  margin: 0 !important;\n  width: 100% !important;\n}\n\nngb-carousel img {\n  width: 100%;\n  height: 337px !important;\n  border-radius: 30px 30px 30px 0px;\n}\n\n.carousel-inner {\n  overflow: visible;\n}\n\n.carousel-item {\n  display: -webkit-box !important;\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n}\n\n.carousel-item.active {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev {\n  z-index: 20;\n}\n\n.carousel-control-next {\n  z-index: 20;\n}\n\n.carousel-indicators {\n  z-index: 20;\n}\n\n@media only screen and (max-width: 600px) {\n  .line {\n    width: 100%;\n  }\n\n  .section {\n    padding-bottom: 0px;\n  }\n\n  .detail-review {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .detail-review .detail-img {\n    width: 100%;\n  }\n  .detail-review .detail-img .first-img {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap-reverse;\n  }\n  .detail-review .detail-img .first-img img {\n    width: 100%;\n  }\n  .detail-review .detail-img .first-img .title-detail {\n    width: 100%;\n  }\n  .detail-review .detail-img .first-img .calendar-bar {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    width: 100%;\n  }\n  .detail-review .detail-img .second-img {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  .detail-review .detail-img .second-img > .img {\n    width: 70%;\n  }\n  .detail-review .detail-text {\n    width: 100%;\n  }\n  .detail-review .detail-text .top-text {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  .detail-review .detail-text .top-text > div {\n    display: -webkit-box;\n    display: flex;\n    width: 43%;\n    line-height: 1;\n  }\n  .detail-review .detail-text .top-text > div img {\n    height: 40%;\n  }\n  .detail-review .detail-text .bottom-text {\n    padding: 15px;\n  }\n\n  .info-search-section {\n    flex-wrap: wrap;\n  }\n\n  .buttons {\n    padding: 0px;\n    font-size: 12px;\n  }\n  .buttons > div {\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 16%;\n  }\n  .buttons img {\n    max-width: 55%;\n  }\n\n  .youtube-section .buttons {\n    color: white;\n    font-size: 15px;\n  }\n  .youtube-section .iframe-container {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 10px;\n  }\n  .youtube-section .iframe-container iframe {\n    border-radius: 30px;\n    height: 350px;\n  }\n\n  .info-search-section {\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    min-height: 293px;\n  }\n  .info-search-section .hotel-card {\n    font-size: 13px;\n    padding: 51px 70px 46px 71px;\n  }\n  .info-search-section .hotel-card > div {\n    line-height: 1.2;\n  }\n  .info-search-section .flight-card {\n    font-size: 13px;\n    padding: 51px 70px 46px 71px;\n  }\n  .info-search-section .flight-card > div {\n    line-height: 1.5;\n  }\n\n  .card-section {\n    background: url('card-bg.png');\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    max-height: 225px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n  .card-section > div {\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .card-section > div .custom-card {\n    box-shadow: none;\n    background: none;\n  }\n  .card-section > div .custom-card img {\n    width: 20%;\n  }\n  .card-section > div .main-img {\n    width: 100%;\n    height: 88%;\n    margin: -20px 0px 0px -7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvRzpcXE5vd1Byb2plY3RzXFxBbmd1bGFyX3dvcmthbmFfN18xXFx3ZWJzaXRlXFxQcm9qZWN0L3NyY1xcYXBwXFxldmVudFxcZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ0FKOztBRENJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDUjs7QURDSTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDQ1I7O0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUNDUjs7QURBUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNFWjs7QURHQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQUo7O0FEQ0k7RUFDSSxVQUFBO0FDQ1I7O0FEQVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRVo7O0FERFk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR2hCOztBRERZO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0FDR2hCOztBRERZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFVBQUE7QUNHaEI7O0FERmdCO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNJcEI7O0FESG9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNLeEI7O0FEQWdCO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFPQSxjQUFBO0FDSnBCOztBREZvQjtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0l4Qjs7QURBZ0I7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFcEI7O0FEQWdCO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRXBCOztBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FaOztBRENZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUNDaEI7O0FEQ1k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDaEI7O0FER0k7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURFUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNBWjs7QURDWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDQ2hCOztBREFnQjtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VwQjs7QUREb0I7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDR3hCOztBREFnQjtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRXBCOztBREFnQjtFQUNJLFlBQUE7QUNFcEI7O0FERVE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBWjs7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNEUjs7QURHSTtFQUNJLGVBQUE7QUNEUjs7QURHSTtFQUNJLGNBQUE7QUNEUjs7QURFUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNBWjs7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURHSTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0RSOztBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQVo7O0FERVE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNBWjs7QURFUTtFQUNJLGNBQUE7QUNBWjs7QURHSTtFQUNJLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7RUFDQSwyQkFBQTtBQ0RSOztBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQVo7O0FERVE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUNBWjs7QURFUTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNBWjs7QURFUTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNBWjs7QURNSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDSFI7O0FES0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7QUNIUjs7QURJUTtFQUNJLG1CQUFBO0FDRlo7O0FET0E7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0pKOztBREtJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0hSOztBRElRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FDRlo7O0FET0E7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FDSko7O0FES0k7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtBQ0hSOztBRE9BO0VBQ0ksaUJBQUE7QUNKSjs7QURPQTtFQUNJLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUFBLHFEQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRE9BO0VBQ0k7SUFDSSxXQUFBO0VDSk47O0VETUU7SUFDSSxtQkFBQTtFQ0hOOztFREtFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtJQUNBLGVBQUE7RUNGTjtFREdNO0lBQ0ksV0FBQTtFQ0RWO0VERVU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EsdUJBQUE7RUNBZDtFRENjO0lBQ0ksV0FBQTtFQ0NsQjtFRENjO0lBQ0ksV0FBQTtFQ0NsQjtFRENjO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtJQUNBLFdBQUE7RUNDbEI7RURFVTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7RUNBZDtFRENjO0lBQ0ksVUFBQTtFQ0NsQjtFREdNO0lBQ0ksV0FBQTtFQ0RWO0VERVU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0VDQWQ7RURDYztJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VDQ2xCO0VEQWtCO0lBQ0ksV0FBQTtFQ0V0QjtFREVVO0lBQ0ksYUFBQTtFQ0FkOztFRElFO0lBQ0ksZUFBQTtFQ0ROOztFREdFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNBTjtFRENNO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUNDVjtFRENNO0lBQ0ksY0FBQTtFQ0NWOztFREdNO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNBVjtFREVNO0lBQ0ksV0FBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7SUFDQSxhQUFBO0VDQVY7RURDVTtJQUNJLG1CQUFBO0lBQ0EsYUFBQTtFQ0NkOztFREdFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtFQ0FOO0VEQ007SUFDSSxlQUFBO0lBQ0EsNEJBQUE7RUNDVjtFREFVO0lBQ0ksZ0JBQUE7RUNFZDtFRENNO0lBQ0ksZUFBQTtJQUNBLDRCQUFBO0VDQ1Y7RURBVTtJQUNJLGdCQUFBO0VDRWQ7O0VERUU7SUFDSSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7RUNDTjtFREFNO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQ0VWO0VERFU7SUFJSSxnQkFBQTtJQUNBLGdCQUFBO0VDQWQ7RURKYztJQUNJLFVBQUE7RUNNbEI7RUREVTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7RUNHZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgO1xyXG59XHJcblxyXG4ubWFya2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICM5QjlCOUI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb24vc2VhcmNoLWJ0bi5wbmcpO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAubWFpbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMjMlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAyMnB4IDRweCAjMzEzMDMwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjQUVBMTlCO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMjE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbWFsbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwO1xyXG4gICAgY29sb3I6ICNBRUExOUI7XHJcbn1cclxuXHJcbi5kZXRhaWwtcmV2aWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDU2JTtcclxuICAgICAgICAuZmlyc3QtaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2OHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNjNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxlLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FsZW5kYXItYmFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tVGhpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tTWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZS1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tVGhpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOUU2OEM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLUJvbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tUmVndWxhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBRUExOUI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGNzc2QjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1Cb2xkJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWNvbmQtaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICA+LmltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODQuNSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzN3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4MXB4O1xyXG4gICAgICAgIC50b3AtdGV4dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tVGhpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQUVBMTlCO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGNzc2QjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tUmVndWxhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY3NzZCO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVJlZ3VsYXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3R0b20tdGV4dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQUVBMTlCO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tUmVndWxhcic7XHJcbiAgICBjb2xvcjogI0ZGNzc2QjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICA+ZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogODVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI0ZGNzc2QjtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgbWluLWhlaWdodDogODVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmluZm8tc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWluLWhlaWdodDogMjkzcHg7XHJcbiAgICAuaG90ZWwtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc2NyZWVuL2hvdGVsLWNhcmQucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDUxcHggMTAwcHggNDZweCA5OHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQUVBMTlCXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZsaWdodC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zY3JlZW4vZmxpZ2h0LWNhcmQucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgY29sb3I6ICNBRUExOUI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNTFweCAxMDBweCA0NnB4IDk4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mcm9tIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG8ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY3NzZCO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi55b3V0dWJlLXNlY3Rpb24ge1xyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICB9XHJcbiAgICAuaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIxOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICA+ZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLmN1c3RvbS1jYXJkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmdiLWNhcm91c2VsIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMzdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjJzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDEuMnM7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWwtcmV2aWV3IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLmZpcnN0LWltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FsZW5kYXItYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2Vjb25kLWltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgPi5pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbC10ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC50b3AtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDMlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm90dG9tLXRleHQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvLXNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDE2JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NSVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAueW91dHViZS1zZWN0aW9uIHtcclxuICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZm8tc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjkzcHg7XHJcbiAgICAgICAgLmhvdGVsLWNhcmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUxcHggNzBweCA0NnB4IDcxcHg7XHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmxpZ2h0LWNhcmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUxcHggNzBweCA0NnB4IDcxcHg7XHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLXNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL3NjcmVlbi9jYXJkLWJnLnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMjVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5jdXN0b20tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg4JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTIwcHggMHB4IDBweCAtN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiYWdtLW1hcCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1hcmtlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzlCOUI5QjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5zZWFyY2gtc2VjdGlvbiBpbnB1dCB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNDFweDtcbn1cbi5zZWFyY2gtc2VjdGlvbiAuc2VhcmNoLWJ0biB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb24vc2VhcmNoLWJ0bi5wbmcpO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQge1xuICB3aWR0aDogMjMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MzQzO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDIycHggNHB4ICMzMTMwMzA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjQUVBMTlCO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAyMHB4O1xufVxuXG4uc21hbGwtdGl0bGUge1xuICBmb250LXNpemU6IDIwO1xuICBjb2xvcjogI0FFQTE5Qjtcbn1cblxuLmRldGFpbC1yZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyB7XG4gIHdpZHRoOiA1NiU7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuZmlyc3QtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyBpbWcge1xuICB3aWR0aDogMjY4cHg7XG4gIGhlaWdodDogMjYzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuZmlyc3QtaW1nIC50aXRsZS1kZXRhaWwge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcgLmNhbGVuZGFyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDc1JTtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcgLmNhbGVuZGFyLWJhciA+IGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1UaGluXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAuY2FsZW5kYXItYmFyID4gZGl2ID4gZGl2IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tTWVkaXVtXCI7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuZmlyc3QtaW1nIC50aXRsZS1kZXRhaWwgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tVGhpblwiO1xuICBjb2xvcjogIzE5RTY4QztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcgLnRpdGxlLWRldGFpbCAudGl0bGUgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAudGl0bGUtZGV0YWlsIC5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgY29sb3I6ICNBRUExOUI7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAudGl0bGUtZGV0YWlsIC5kYXRlIHtcbiAgY29sb3I6ICNGRjc3NkI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuc2Vjb25kLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5zZWNvbmQtaW1nID4gLmltZyB7XG4gIHdpZHRoOiA4NC41JTtcbiAgaGVpZ2h0OiAzMzdweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuc2Vjb25kLWltZyAuc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQge1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogODFweDtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCAudG9wLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQgLnRvcC10ZXh0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQzJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQgLnRvcC10ZXh0ID4gZGl2ID4gZGl2IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVRoaW5cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI0FFQTE5QjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQgLnRvcC10ZXh0ID4gZGl2ID4gZGl2ID4gZGl2IHtcbiAgY29sb3I6ICNGRjc3NkI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCAudG9wLXRleHQgPiBkaXYgLnRpdGxlIHtcbiAgY29sb3I6ICNGRjc3NkI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogNDFweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQgLnRvcC10ZXh0ID4gZGl2IGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cbi5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCAuYm90dG9tLXRleHQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogI0FFQTE5QjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBoZWlnaHQ6IDQzMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgY29sb3I6ICNGRjc3NkI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnV0dG9ucyA+IGRpdiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDg1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5idXR0b25zIGltZyB7XG4gIG1heC13aWR0aDogNTBweDtcbn1cbi5idXR0b25zIGEge1xuICBjb2xvcjogI0ZGNzc2Qjtcbn1cbi5idXR0b25zIGEgPiBkaXYge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtaW4taGVpZ2h0OiA4NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbmZvLXNlYXJjaC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1pbi1oZWlnaHQ6IDI5M3B4O1xufVxuLmluZm8tc2VhcmNoLXNlY3Rpb24gLmhvdGVsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zY3JlZW4vaG90ZWwtY2FyZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBwYWRkaW5nOiA1MXB4IDEwMHB4IDQ2cHggOThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmluZm8tc2VhcmNoLXNlY3Rpb24gLmhvdGVsLWNhcmQgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uaW5mby1zZWFyY2gtc2VjdGlvbiAuaG90ZWwtY2FyZCAucHJpY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uaW5mby1zZWFyY2gtc2VjdGlvbiAuaG90ZWwtY2FyZCAucHJpY2UtdGl0bGUge1xuICBjb2xvcjogI0FFQTE5Qjtcbn1cbi5pbmZvLXNlYXJjaC1zZWN0aW9uIC5mbGlnaHQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL3NjcmVlbi9mbGlnaHQtY2FyZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6ICNBRUExOUI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIHBhZGRpbmc6IDUxcHggMTAwcHggNDZweCA5OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XG59XG4uaW5mby1zZWFyY2gtc2VjdGlvbiAuZmxpZ2h0LWNhcmQgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uaW5mby1zZWFyY2gtc2VjdGlvbiAuZmxpZ2h0LWNhcmQgLmZyb20ge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG59XG4uaW5mby1zZWFyY2gtc2VjdGlvbiAuZmxpZ2h0LWNhcmQgLnRvIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xuICBjb2xvcjogI0ZGNzc2Qjtcbn1cbi5pbmZvLXNlYXJjaC1zZWN0aW9uIC5mbGlnaHQtY2FyZCAucHJpY2Uge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnlvdXR1YmUtc2VjdGlvbiAuYnV0dG9ucyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MnB4O1xufVxuLnlvdXR1YmUtc2VjdGlvbiAuaWZyYW1lLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi55b3V0dWJlLXNlY3Rpb24gLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmNhcmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMTlweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNhcmQtc2VjdGlvbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNhcmQtc2VjdGlvbiA+IGRpdiAuY3VzdG9tLWNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDMwcHg7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxubmdiLWNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMzN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDBweDtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS4ycyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAxLjJzO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmRldGFpbC1yZXZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtaW1nIC5maXJzdC1pbWcgLnRpdGxlLWRldGFpbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLmZpcnN0LWltZyAuY2FsZW5kYXItYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZGV0YWlsLXJldmlldyAuZGV0YWlsLWltZyAuc2Vjb25kLWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC1pbWcgLnNlY29uZC1pbWcgPiAuaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC10ZXh0IC50b3AtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmRldGFpbC1yZXZpZXcgLmRldGFpbC10ZXh0IC50b3AtdGV4dCA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDMlO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIC5kZXRhaWwtcmV2aWV3IC5kZXRhaWwtdGV4dCAudG9wLXRleHQgPiBkaXYgaW1nIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgfVxuICAuZGV0YWlsLXJldmlldyAuZGV0YWlsLXRleHQgLmJvdHRvbS10ZXh0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmluZm8tc2VhcmNoLXNlY3Rpb24ge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5idXR0b25zID4gZGl2IHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgd2lkdGg6IDE2JTtcbiAgfVxuICAuYnV0dG9ucyBpbWcge1xuICAgIG1heC13aWR0aDogNTUlO1xuICB9XG5cbiAgLnlvdXR1YmUtc2VjdGlvbiAuYnV0dG9ucyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAueW91dHViZS1zZWN0aW9uIC5pZnJhbWUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLnlvdXR1YmUtc2VjdGlvbiAuaWZyYW1lLWNvbnRhaW5lciBpZnJhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuXG4gIC5pbmZvLXNlYXJjaC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1pbi1oZWlnaHQ6IDI5M3B4O1xuICB9XG4gIC5pbmZvLXNlYXJjaC1zZWN0aW9uIC5ob3RlbC1jYXJkIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogNTFweCA3MHB4IDQ2cHggNzFweDtcbiAgfVxuICAuaW5mby1zZWFyY2gtc2VjdGlvbiAuaG90ZWwtY2FyZCA+IGRpdiB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuICAuaW5mby1zZWFyY2gtc2VjdGlvbiAuZmxpZ2h0LWNhcmQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA1MXB4IDcwcHggNDZweCA3MXB4O1xuICB9XG4gIC5pbmZvLXNlYXJjaC1zZWN0aW9uIC5mbGlnaHQtY2FyZCA+IGRpdiB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5jYXJkLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL3NjcmVlbi9jYXJkLWJnLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5jYXJkLXNlY3Rpb24gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jYXJkLXNlY3Rpb24gPiBkaXYgLmN1c3RvbS1jYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgLmNhcmQtc2VjdGlvbiA+IGRpdiAuY3VzdG9tLWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5jYXJkLXNlY3Rpb24gPiBkaXYgLm1haW4taW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg4JTtcbiAgICBtYXJnaW46IC0yMHB4IDBweCAwcHggLTdweDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
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
    function EventComponent(sanitizer, Router, http, CrudService) {
        this.sanitizer = sanitizer;
        this.Router = Router;
        this.http = http;
        this.CrudService = CrudService;
        this.carousels = [];
        this.Date = "";
        this.countdownDays = 0;
        this.wether = {
            temp_max: 0,
            temp_min: 0
        };
        this.selectedEvent = JSON.parse(localStorage.getItem('dataSource'));
        var strvideo = this.selectedEvent.linkvideo;
        var key = strvideo.split('/')[3];
        this.displayURL = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=1&mute=1');
    }
    EventComponent.prototype.ngOnInit = function () {
        var self = this;
        var imgs = new Object();
        imgs = this.selectedEvent.imgs;
        var flys = new Object();
        flys = this.selectedEvent.Vuelos;
        this.getBestFly(flys);
        this.Date = this.formateDate(this.selectedEvent.fecha);
        this.selectedEvent.Hotel.precio = this.selectedEvent.Hotel.precio.split('-')[0];
        Object.keys(imgs).forEach(function (rkey, row) {
            if (imgs[rkey].img)
                self.carousels.push(imgs[rkey].img);
        });
        this.getCountdown(this.selectedEvent.fecha);
        this.getWether(this.selectedEvent.a_lat, this.selectedEvent.a_long);
    };
    EventComponent.prototype.formateDate = function (date) {
        var dateArry = {
            "01": "JAN",
            "02": "FEB",
            "03": "MAR",
            "04": "APR",
            "05": "MAR",
            "06": "JUN",
            "07": "JUL",
            "08": "AUG",
            "09": "SEP",
            "10": "OCT",
            "11": "NOV",
            "12": "DEC"
        };
        var str = date.split('/');
        return dateArry[str[1]] + '-' + str[0];
    };
    EventComponent.prototype.getBestFly = function (flys) {
        var max_price = 0;
        var betFly;
        Object.keys(flys).forEach(function (rkey, row) {
            var price = Number(flys[rkey].precio.replace(/[^0-9.-]+/g, ""));
            if (max_price < price) {
                max_price = price;
                betFly = flys[rkey];
            }
        });
        this.BestFly = betFly;
        console.log(max_price, this.BestFly);
    };
    EventComponent.prototype.getCountdown = function (targetDate) {
        console.log('target', targetDate);
        targetDate = targetDate.split('/')[2] + '/' + targetDate.split('/')[1] + '/' + targetDate.split('/')[0];
        var date1 = new Date();
        var date2 = new Date(targetDate);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
        this.countdownDays = Difference_In_Days;
    };
    EventComponent.prototype.getWether = function (lat, lon) {
        var _this = this;
        this.CrudService.getWether(lat, lon).subscribe(function (res) {
            _this.wether = res;
            _this.wether.temp_min = Math.floor(res.main.temp_min * 0.1);
            _this.wether.temp_max = Math.floor(res.main.temp_max * 0.1);
        });
    };
    EventComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __importDefault(__webpack_require__(/*! raw-loader!./event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./event.component.scss */ "./src/app/event/event.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.scss":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-clr {\n  background-color: #FF776B;\n}\n\n.page-title {\n  margin: 80px 0px;\n  font-size: 40px;\n  font-family: \"Roboto-Bold\";\n  color: #210132;\n}\n\n.title {\n  font-size: 30px;\n  color: #444343;\n  margin: 50px;\n  text-align: center;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none !important;\n}\n\n.category_checkboxs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.category_checkboxs .field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 116px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 150px;\n}\n\n.category_checkboxs .field input {\n  width: 35px;\n  height: 35px;\n}\n\n.category_checkboxs .field img {\n  height: 79px;\n  width: 79px;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  width: 35px;\n  height: 35px;\n}\n\n.form-section {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form-section .field {\n  width: 100%;\n  margin: 50px 0px 0px;\n}\n\n.form-section .field input {\n  width: 100%;\n  height: 45px;\n  background: none;\n  border: none;\n  font-size: 22px;\n  color: #444343;\n}\n\n.form-section .field input::-webkit-input-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::-moz-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::-ms-input-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::placeholder {\n  color: #444343;\n}\n\n.form-section .field div {\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff52;\n  box-shadow: 1px 0px 13px 4px #00000017;\n}\n\n.form-section .input-title {\n  margin: 0px;\n  margin-bottom: 80px;\n}\n\n.file-upload-button {\n  background-color: #FF776B;\n  border-radius: 10px 10px 10px 0px;\n  overflow: hidden;\n  position: relative;\n  width: 179px;\n  border: none;\n  height: 77px;\n  box-shadow: 1px 2px 15px 1px #0101014d;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  font-family: \"Roboto-Bold\";\n  color: #210232;\n  flex-wrap: wrap;\n}\n\n.file-upload-button input[type=file] {\n  font-size: 100px;\n  width: 179px;\n  height: 77px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n}\n\n.file-upload-button .plus-icon {\n  width: 50%;\n  margin: auto 0px;\n  font-size: 77px;\n  text-align: center;\n}\n\n.file-upload-button > div {\n  width: 40%;\n  margin: auto 0px;\n  font-size: 22px;\n  text-align: center;\n  line-height: 1;\n}\n\n.confirm-section .title {\n  color: #444343;\n  font-family: \"Roboto-Regular\";\n  font-size: 30px;\n}\n\n.confirm-section > div {\n  width: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.confirm-section > div input {\n  width: 35px;\n  height: 35px;\n}\n\n.links {\n  width: 70%;\n}\n\n.textarea-section .title {\n  margin: 50px 0px;\n  font-family: \"Roboto-Regular\";\n  color: #444343;\n  font-size: 30px;\n}\n\n.textarea-section textarea {\n  width: 100%;\n  height: 237px;\n}\n\n.textarea-section .detail > p {\n  font-size: 25px;\n  color: #444343;\n  font-family: \"Roboto-Italic\";\n  line-height: 1;\n  margin-bottom: 30px;\n}\n\n.upload_section .line_bar {\n  width: 100%;\n  height: 1px;\n  background-color: #444343;\n  box-shadow: 1px 0px 13px 4px #00000017;\n  margin: 60px auto 60px;\n  width: 80%;\n}\n\n.upload_section .flex {\n  display: -webkit-box;\n  display: flex;\n}\n\n.upload_section .title {\n  font-size: 40px;\n  font-family: \"Roboto-Bold\";\n  color: #444343;\n  margin: auto 100px auto 0px;\n}\n\n.upload_section .is-210x220 {\n  width: 210px;\n  height: 220px;\n}\n\n.upload_section .column {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 50px;\n}\n\n.upload_section .field {\n  width: 50%;\n  margin: 30px 0px;\n}\n\n.upload_section .field input {\n  width: 100%;\n  height: 45px;\n  background: none;\n  border: none;\n  font-size: 22px;\n  color: #444343;\n}\n\n.upload_section .field input::-webkit-input-placeholder {\n  color: #444343;\n}\n\n.upload_section .field input::-moz-placeholder {\n  color: #444343;\n}\n\n.upload_section .field input::-ms-input-placeholder {\n  color: #444343;\n}\n\n.upload_section .field input::placeholder {\n  color: #444343;\n}\n\n.upload_section .field div {\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff52;\n  box-shadow: 1px 0px 13px 4px #00000017;\n}\n\n.date-section .field {\n  height: 100px;\n}\n\n.date-section .field > div {\n  font-family: \"Roboto-Bold\";\n  font-size: 60px;\n  color: white;\n}\n\n.date-section .field input {\n  background-color: #AEA19B !important;\n  height: 50px;\n  width: 50px;\n}\n\n.experience-section .title {\n  font-size: 30px;\n  color: #444343;\n  margin: 50px;\n  text-align: center;\n}\n\n.experience-section div {\n  margin: auto 30px;\n  font-size: 25px;\n  font-family: \"Roboto-Regular\";\n  color: #444343;\n}\n\n.hours-section {\n  display: -webkit-box;\n  display: flex;\n  flex-flow: wrap;\n}\n\n.hours-section .title {\n  width: 100%;\n}\n\n.hours-section .field {\n  width: 30% !important;\n  margin: 1.5%;\n}\n\n.reference-section .title {\n  font-size: 30px;\n  font-family: \"Roboto-Regular\";\n  color: #444343;\n  margin: 30px 0px;\n}\n\n.reference-section .detail {\n  font-size: 25px;\n  font-family: \"Roboto-Light\";\n  color: #444343;\n  line-height: 1;\n}\n\n.policy-section .field {\n  display: -webkit-box;\n  display: flex;\n}\n\n.policy-section .field > div {\n  font-family: \"Roboto-Light\";\n  font-size: 20px;\n  color: #444343;\n  margin-left: 30px;\n}\n\n.checkboxs-section {\n  margin: 50px 0px;\n}\n\n.checkboxs-section .field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  min-height: 100px;\n}\n\n.checkboxs-section .field > div {\n  font-size: 20px;\n  font-family: \"Roboto-Light\";\n  color: #444343;\n}\n\n.checkboxs-section .field > input {\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n}\n\n.submit {\n  background-color: #FF776B;\n  border-radius: 10px 10px 10px 0px;\n  overflow: hidden;\n  position: relative;\n  width: 179px;\n  border: none;\n  height: 77px;\n  box-shadow: 1px 2px 15px 1px #0101014d;\n  color: #210132;\n  font-size: 30px;\n  font-family: \"Roboto-Bold\";\n}\n\n.file-info {\n  color: #999;\n  font-family: Lato;\n  margin-left: 0.5rem;\n}\n\n@media only screen and (max-width: 760px) {\n  .section {\n    padding-top: 0px;\n  }\n\n  .title,\n.page-title {\n    font-size: 25px;\n    width: 100%;\n    text-align: center;\n    margin: 50px 0px;\n  }\n\n  .category_checkboxs {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .category_checkboxs .field {\n    width: 30%;\n    -webkit-box-align: center;\n            align-items: center;\n    height: auto;\n    margin: 15px 0px;\n  }\n  .category_checkboxs .field input {\n    width: 20px;\n    height: 20px;\n  }\n  .category_checkboxs .field img {\n    height: auto;\n    width: 50%;\n  }\n\n  input[type=checkbox],\ninput[type=radio] {\n    width: 35px;\n    height: 35px;\n  }\n\n  .form-section {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .form-section .field {\n    width: 100%;\n    margin: 5px 0px 0px;\n  }\n  .form-section .field input {\n    width: 100%;\n    height: 45px;\n    background: none;\n    border: none;\n    font-size: 15px;\n    color: #444343;\n  }\n  .form-section .field input::-webkit-input-placeholder {\n    color: #444343;\n  }\n  .form-section .field input::-moz-placeholder {\n    color: #444343;\n  }\n  .form-section .field input::-ms-input-placeholder {\n    color: #444343;\n  }\n  .form-section .field input::placeholder {\n    color: #444343;\n  }\n  .form-section .field div {\n    width: 100%;\n    height: 2px;\n    background-color: #ffffff52;\n    box-shadow: 1px 0px 13px 4px #00000017;\n  }\n  .form-section .input-title {\n    margin: 0px;\n    margin-bottom: 80px;\n  }\n\n  .file-upload-button {\n    width: 17%;\n    height: auto;\n    max-height: 117px;\n    background-color: #FF776B;\n    border-radius: 10px 10px 10px 0px;\n    overflow: hidden;\n    position: relative;\n    border: none;\n    box-shadow: 1px 2px 15px 1px #0101014d;\n  }\n  .file-upload-button input[type=file] {\n    font-size: 100px;\n    width: 179px;\n    height: 77px;\n    left: 0;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n  }\n  .file-upload-button .plus-icon {\n    width: 100%;\n    margin: 10px 0px;\n    font-size: 50px;\n    text-align: center;\n  }\n  .file-upload-button > div {\n    width: 100%;\n    margin: 10px 0px;\n    font-size: 15px;\n    text-align: center;\n    line-height: 1;\n  }\n\n  .confirm-section .title {\n    color: #444343;\n    font-family: \"Roboto-Regular\";\n    font-size: 20px;\n  }\n  .confirm-section > div {\n    width: 100%;\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n  }\n  .confirm-section > div input {\n    width: 35px;\n    height: 35px;\n  }\n\n  .links {\n    width: 70%;\n  }\n\n  .textarea-section .title {\n    margin: 50px 0px;\n    font-family: \"Roboto-Regular\";\n    color: #444343;\n    font-size: 20px;\n  }\n  .textarea-section textarea {\n    width: 100%;\n    height: 237px;\n  }\n  .textarea-section .detail > p {\n    font-size: 15px;\n    color: #444343;\n    font-family: \"Roboto-Italic\";\n    line-height: 1;\n    margin-bottom: 30px;\n  }\n\n  .upload_section .line_bar {\n    width: 100%;\n    height: 1px;\n    background-color: #444343;\n    box-shadow: 1px 0px 13px 4px #00000017;\n    margin: 60px auto 60px;\n    width: 80%;\n  }\n  .upload_section .flex {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n            flex-direction: row-reverse;\n  }\n  .upload_section .title {\n    font-size: 20px;\n    font-family: \"Roboto-Regular\";\n    color: #444343;\n    margin: auto 0px;\n  }\n  .upload_section .is-210x220 {\n    width: 210px;\n    height: 220px;\n  }\n  .upload_section .column {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin-top: 50px;\n    flex-wrap: wrap;\n  }\n  .upload_section .column .image {\n    width: 30%;\n  }\n  .upload_section .column .image img {\n    width: 100%;\n    height: auto;\n  }\n  .upload_section .field {\n    width: 50%;\n    margin: 30px 0px;\n  }\n  .upload_section .field input {\n    width: 100%;\n    height: 45px;\n    background: none;\n    border: none;\n    font-size: 22px;\n    color: #444343;\n  }\n  .upload_section .field input::-webkit-input-placeholder {\n    color: #444343;\n  }\n  .upload_section .field input::-moz-placeholder {\n    color: #444343;\n  }\n  .upload_section .field input::-ms-input-placeholder {\n    color: #444343;\n  }\n  .upload_section .field input::placeholder {\n    color: #444343;\n  }\n  .upload_section .field div {\n    width: 100%;\n    height: 2px;\n    background-color: #ffffff52;\n    box-shadow: 1px 0px 13px 4px #00000017;\n  }\n\n  .date-section .field {\n    height: 100px;\n  }\n  .date-section .field > div {\n    font-family: \"Roboto-Bold\";\n    font-size: 60px;\n    color: white;\n  }\n  .date-section .field input {\n    background-color: #AEA19B !important;\n    height: 50px;\n    width: 50px;\n  }\n\n  .experience-section .title {\n    font-size: 20px;\n    color: #444343;\n    margin: 50px 0px;\n    text-align: center;\n  }\n  .experience-section div {\n    margin: auto 30px;\n    font-size: 25px;\n    font-family: \"Roboto-Regular\";\n    color: #444343;\n  }\n\n  .hours-section {\n    display: -webkit-box;\n    display: flex;\n    flex-flow: wrap;\n  }\n  .hours-section .title {\n    width: 100%;\n  }\n  .hours-section .field {\n    width: 30% !important;\n    margin: 1.5%;\n  }\n\n  .reference-section .title {\n    font-size: 20px;\n    font-family: \"Roboto-Regular\";\n    color: #444343;\n    margin: 30px 0px;\n  }\n  .reference-section .detail {\n    font-size: 15px;\n    font-family: \"Roboto-Light\";\n    color: #444343;\n    line-height: 1;\n  }\n\n  .policy-section .field {\n    display: -webkit-box;\n    display: flex;\n  }\n  .policy-section .field > div {\n    font-family: \"Roboto-Light\";\n    font-size: 20px;\n    color: #210132;\n    margin-left: 30px;\n  }\n\n  .checkboxs-section {\n    margin: 50px 0px;\n  }\n  .checkboxs-section .field {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    min-height: 100px;\n  }\n  .checkboxs-section .field > div {\n    font-size: 20px;\n    font-family: \"Roboto-Light\";\n    color: #444343;\n  }\n  .checkboxs-section .field > input {\n    width: 35px;\n    height: 35px;\n    margin-right: 10px;\n  }\n\n  .submit {\n    background-color: #FF776B;\n    border-radius: 10px 10px 10px 0px;\n    overflow: hidden;\n    position: relative;\n    width: 179px;\n    border: none;\n    height: 77px;\n    box-shadow: 1px 2px 15px 1px #0101014d;\n    color: #210132;\n    font-size: 20px;\n    font-family: \"Roboto-Bold\";\n  }\n\n  .file-info {\n    color: #999;\n    font-family: Lato;\n    margin-left: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9HOlxcTm93UHJvamVjdHNcXEFuZ3VsYXJfd29ya2FuYV83XzFcXHdlYnNpdGVcXFByb2plY3Qvc3JjXFxhcHBcXGV4cGVyaWVuY2VcXGV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7O0VBRUksd0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1o7O0FERFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0daOztBREdBOztFQUVJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQUo7O0FEQ0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNDUjs7QURBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFWjs7QURBUTtFQUNJLGNBQUE7QUNFWjs7QURIUTtFQUNJLGNBQUE7QUNFWjs7QURIUTtFQUNJLGNBQUE7QUNFWjs7QURIUTtFQUNJLGNBQUE7QUNFWjs7QURBUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQ0VaOztBRENJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQ1I7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQUo7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUNDUjs7QURDSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRElJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBREdJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNEUjs7QURFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVo7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FETUk7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNIUjs7QURLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDSFI7O0FES0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSFI7O0FEUUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNMUjs7QURPSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0xSOztBRE9JO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDTFI7O0FET0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0xSOztBRE9JO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGdCQUFBO0FDTFI7O0FET0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNMUjs7QURNUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNKWjs7QURNUTtFQUNJLGNBQUE7QUNKWjs7QURHUTtFQUNJLGNBQUE7QUNKWjs7QURHUTtFQUNJLGNBQUE7QUNKWjs7QURHUTtFQUNJLGNBQUE7QUNKWjs7QURNUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQ0paOztBRFVJO0VBQ0ksYUFBQTtBQ1BSOztBRFFRO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ05aOztBRFFRO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05aOztBRFlJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURXSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ1RSOztBRGFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ1ZKOztBRFdJO0VBQ0ksV0FBQTtBQ1RSOztBRFdJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDVFI7O0FEY0k7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNYUjs7QURhSTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDWFI7O0FEZ0JJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDYlI7O0FEY1E7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNaWjs7QURpQkE7RUFDSSxnQkFBQTtBQ2RKOztBRGVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxpQkFBQTtBQ2JSOztBRGNRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ1paOztBRGNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1paOztBRGlCQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNkSjs7QURpQkE7RUFDSTtJQUNJLGdCQUFBO0VDZE47O0VEZ0JFOztJQUVJLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQ2JOOztFRGVFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtJQUNBLGVBQUE7RUNaTjtFRGFNO0lBQ0ksVUFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNYVjtFRFlVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNWZDtFRFlVO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUNWZDs7RURlRTs7SUFFSSxXQUFBO0lBQ0EsWUFBQTtFQ1pOOztFRGNFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsZUFBQTtFQ1hOO0VEWU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7RUNWVjtFRFdVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQ1RkO0VEV1U7SUFDSSxjQUFBO0VDVGQ7RURRVTtJQUNJLGNBQUE7RUNUZDtFRFFVO0lBQ0ksY0FBQTtFQ1RkO0VEUVU7SUFDSSxjQUFBO0VDVGQ7RURXVTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsMkJBQUE7SUFDQSxzQ0FBQTtFQ1RkO0VEWU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7RUNWVjs7RURhRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxzQ0FBQTtFQ1ZOO0VEY007SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7RUNaVjtFRGNNO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDWlY7RURjTTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUNaVjs7RURnQk07SUFDSSxjQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0VDYlY7RURlTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDZCQUFBO0VDYlY7RURjVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDWmQ7O0VEZ0JFO0lBQ0ksVUFBQTtFQ2JOOztFRGdCTTtJQUNJLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ2JWO0VEZU07SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ2JWO0VEZU07SUFDSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDRCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDYlY7O0VEaUJNO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHNDQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0VDZFY7RURnQk07SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDhCQUFBO1lBQUEsMkJBQUE7RUNkVjtFRGdCTTtJQUNJLGVBQUE7SUFDQSw2QkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ2RWO0VEZ0JNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNkVjtFRGdCTTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUNkVjtFRGVVO0lBQ0ksVUFBQTtFQ2JkO0VEY2M7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ1psQjtFRGdCTTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQ2RWO0VEZVU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDYmQ7RURlVTtJQUNJLGNBQUE7RUNiZDtFRFlVO0lBQ0ksY0FBQTtFQ2JkO0VEWVU7SUFDSSxjQUFBO0VDYmQ7RURZVTtJQUNJLGNBQUE7RUNiZDtFRGVVO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLHNDQUFBO0VDYmQ7O0VEa0JNO0lBQ0ksYUFBQTtFQ2ZWO0VEZ0JVO0lBQ0ksMEJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQ2RkO0VEZ0JVO0lBQ0ksb0NBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ2RkOztFRG1CTTtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ2hCVjtFRGtCTTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLDZCQUFBO0lBQ0EsY0FBQTtFQ2hCVjs7RURtQkU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxlQUFBO0VDaEJOO0VEaUJNO0lBQ0ksV0FBQTtFQ2ZWO0VEaUJNO0lBQ0kscUJBQUE7SUFDQSxZQUFBO0VDZlY7O0VEbUJNO0lBQ0ksZUFBQTtJQUNBLDZCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDaEJWO0VEa0JNO0lBQ0ksZUFBQTtJQUNBLDJCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUNoQlY7O0VEb0JNO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0VDakJWO0VEa0JVO0lBQ0ksMkJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDaEJkOztFRG9CRTtJQUNJLGdCQUFBO0VDakJOO0VEa0JNO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSxpQkFBQTtFQ2hCVjtFRGlCVTtJQUNJLGVBQUE7SUFDQSwyQkFBQTtJQUNBLGNBQUE7RUNmZDtFRGlCVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNmZDs7RURtQkU7SUFDSSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHNDQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSwwQkFBQTtFQ2hCTjs7RURrQkU7SUFDSSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQ2ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY2xyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuICAgIG1hcmdpbjogODBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgY29sb3I6ICMyMTAxMzI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMsXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhdGVnb3J5X2NoZWNrYm94cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDExNnB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3OXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8vIGdvYmFsIHNlY3Rpb25cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDBweCAwcHg7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlucHV0LXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE3OXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDFweCAjMDEwMTAxNGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgY29sb3I6ICMyMTAyMzI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTc5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnBsdXMtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICA+ZGl2IHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbmZpcm0tc2VjdGlvbiB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi50ZXh0YXJlYS1zZWN0aW9uIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIzN3B4O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbD5wIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUl0YWxpY1wiO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51cGxvYWRfc2VjdGlvbiB7XHJcbiAgICAubGluZV9iYXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XHJcbiAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG8gNjBweDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmZsZXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAxMDBweCBhdXRvIDBweDtcclxuICAgIH1cclxuICAgIC5pcy0yMTB4MjIwIHtcclxuICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIH1cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDBweDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlLXNlY3Rpb24ge1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVBMTlCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZXhwZXJpZW5jZS1zZWN0aW9uIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG91cnMtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMS41JTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZmVyZW5jZS1zZWN0aW9uIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbiAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tTGlnaHRcIjtcclxuICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxufVxyXG5cclxuLnBvbGljeS1zZWN0aW9uIHtcclxuICAgIC5maWVsZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNoZWNrYm94cy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgICAuZmllbGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tTGlnaHRcIjtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQzNDNcclxuICAgICAgICB9XHJcbiAgICAgICAgPmlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNzlweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNzdweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAxcHggIzAxMDEwMTRkO1xyXG4gICAgY29sb3I6ICMyMTAxMzI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG59XHJcblxyXG4uZmlsZS1pbmZvIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XHJcbiAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC50aXRsZSxcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnlfY2hlY2tib3hzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLyBnb2JhbCBzZWN0aW9uXHJcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgIH1cclxuICAgIC5mb3JtLXNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwcHggMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXQtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTclO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDFweCAjMDEwMTAxNGQ7XHJcbiAgICAgICAgLy8gJjo6YWZ0ZXIge1xyXG4gICAgICAgIC8vICAgICBjb250ZW50OiBcIitcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTc5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wbHVzLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb25maXJtLXNlY3Rpb24ge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlua3Mge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAudGV4dGFyZWEtc2VjdGlvbiB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMzdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbD5wIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUl0YWxpY1wiO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudXBsb2FkX3NlY3Rpb24ge1xyXG4gICAgICAgIC5saW5lX2JhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvIDYwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbGV4IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXMtMjEweDIyMCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhdGUtc2VjdGlvbiB7XHJcbiAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBRUExOUIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmV4cGVyaWVuY2Utc2VjdGlvbiB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaG91cnMtc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWZlcmVuY2Utc2VjdGlvbiB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9saWN5LXNlY3Rpb24ge1xyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMDEzMjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94cy1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDM0M1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdWJtaXQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxNzlweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAxcHggIzAxMDEwMTRkO1xyXG4gICAgICAgIGNvbG9yOiAjMjEwMTMyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgfVxyXG4gICAgLmZpbGUtaW5mbyB7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxufSIsIi5iZy1jbHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIG1hcmdpbjogODBweCAwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgY29sb3I6ICMyMTAxMzI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM0NDQzNDM7XG4gIG1hcmdpbjogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnlfY2hlY2tib3hzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhdGVnb3J5X2NoZWNrYm94cyAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5jYXRlZ29yeV9jaGVja2JveHMgLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5jYXRlZ29yeV9jaGVja2JveHMgLmZpZWxkIGltZyB7XG4gIGhlaWdodDogNzlweDtcbiAgd2lkdGg6IDc5cHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZvcm0tc2VjdGlvbiAuZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1MHB4IDBweCAwcHg7XG59XG4uZm9ybS1zZWN0aW9uIC5maWVsZCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzQ0NDM0Mztcbn1cbi5mb3JtLXNlY3Rpb24gLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNDQ0MzQzO1xufVxuLmZvcm0tc2VjdGlvbiAuZmllbGQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xufVxuLmZvcm0tc2VjdGlvbiAuaW5wdXQtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTc5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA3N3B4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggMXB4ICMwMTAxMDE0ZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGNvbG9yOiAjMjEwMjMyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsZS11cGxvYWQtYnV0dG9uIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICB3aWR0aDogMTc5cHg7XG4gIGhlaWdodDogNzdweDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4uZmlsZS11cGxvYWQtYnV0dG9uIC5wbHVzLWljb24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG8gMHB4O1xuICBmb250LXNpemU6IDc3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5maWxlLXVwbG9hZC1idXR0b24gPiBkaXYge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IGF1dG8gMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jb25maXJtLXNlY3Rpb24gLnRpdGxlIHtcbiAgY29sb3I6ICM0NDQzNDM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jb25maXJtLXNlY3Rpb24gPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5jb25maXJtLXNlY3Rpb24gPiBkaXYgaW5wdXQge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubGlua3Mge1xuICB3aWR0aDogNzAlO1xufVxuXG4udGV4dGFyZWEtc2VjdGlvbiAudGl0bGUge1xuICBtYXJnaW46IDUwcHggMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xuICBjb2xvcjogIzQ0NDM0MztcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnRleHRhcmVhLXNlY3Rpb24gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzdweDtcbn1cbi50ZXh0YXJlYS1zZWN0aW9uIC5kZXRhaWwgPiBwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzQ0NDM0MztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUl0YWxpY1wiO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnVwbG9hZF9zZWN0aW9uIC5saW5lX2JhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcbiAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XG4gIG1hcmdpbjogNjBweCBhdXRvIDYwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG4udXBsb2FkX3NlY3Rpb24gLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVwbG9hZF9zZWN0aW9uIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgY29sb3I6ICM0NDQzNDM7XG4gIG1hcmdpbjogYXV0byAxMDBweCBhdXRvIDBweDtcbn1cbi51cGxvYWRfc2VjdGlvbiAuaXMtMjEweDIyMCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cbi51cGxvYWRfc2VjdGlvbiAuY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnVwbG9hZF9zZWN0aW9uIC5maWVsZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG4udXBsb2FkX3NlY3Rpb24gLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjNDQ0MzQzO1xufVxuLnVwbG9hZF9zZWN0aW9uIC5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzQ0NDM0Mztcbn1cbi51cGxvYWRfc2VjdGlvbiAuZmllbGQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xufVxuXG4uZGF0ZS1zZWN0aW9uIC5maWVsZCB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZGF0ZS1zZWN0aW9uIC5maWVsZCA+IGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhdGUtc2VjdGlvbiAuZmllbGQgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVBMTlCICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5leHBlcmllbmNlLXNlY3Rpb24gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzQ0NDM0MztcbiAgbWFyZ2luOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXhwZXJpZW5jZS1zZWN0aW9uIGRpdiB7XG4gIG1hcmdpbjogYXV0byAzMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gIGNvbG9yOiAjNDQ0MzQzO1xufVxuXG4uaG91cnMtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbn1cbi5ob3Vycy1zZWN0aW9uIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvdXJzLXNlY3Rpb24gLmZpZWxkIHtcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEuNSU7XG59XG5cbi5yZWZlcmVuY2Utc2VjdGlvbiAudGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gIGNvbG9yOiAjNDQ0MzQzO1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuLnJlZmVyZW5jZS1zZWN0aW9uIC5kZXRhaWwge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xuICBjb2xvcjogIzQ0NDM0MztcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5wb2xpY3ktc2VjdGlvbiAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBvbGljeS1zZWN0aW9uIC5maWVsZCA+IGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNDQ0MzQzO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmNoZWNrYm94cy1zZWN0aW9uIHtcbiAgbWFyZ2luOiA1MHB4IDBweDtcbn1cbi5jaGVja2JveHMtc2VjdGlvbiAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuLmNoZWNrYm94cy1zZWN0aW9uIC5maWVsZCA+IGRpdiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XG4gIGNvbG9yOiAjNDQ0MzQzO1xufVxuLmNoZWNrYm94cy1zZWN0aW9uIC5maWVsZCA+IGlucHV0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc2QjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNzlweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAxcHggIzAxMDEwMTRkO1xuICBjb2xvcjogIzIxMDEzMjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xufVxuXG4uZmlsZS1pbmZvIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG5cbiAgLnRpdGxlLFxuLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1MHB4IDBweDtcbiAgfVxuXG4gIC5jYXRlZ29yeV9jaGVja2JveHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuY2F0ZWdvcnlfY2hlY2tib3hzIC5maWVsZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICB9XG4gIC5jYXRlZ29yeV9jaGVja2JveHMgLmZpZWxkIGlucHV0IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLmNhdGVnb3J5X2NoZWNrYm94cyAuZmllbGQgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuXG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5mb3JtLXNlY3Rpb24gLmZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDVweCAwcHggMHB4O1xuICB9XG4gIC5mb3JtLXNlY3Rpb24gLmZpZWxkIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICB9XG4gIC5mb3JtLXNlY3Rpb24gLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM0NDQzNDM7XG4gIH1cbiAgLmZvcm0tc2VjdGlvbiAuZmllbGQgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XG4gIH1cbiAgLmZvcm0tc2VjdGlvbiAuaW5wdXQtdGl0bGUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIH1cblxuICAuZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTclO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxMTdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDFweCAjMDEwMTAxNGQ7XG4gIH1cbiAgLmZpbGUtdXBsb2FkLWJ1dHRvbiBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIHdpZHRoOiAxNzlweDtcbiAgICBoZWlnaHQ6IDc3cHg7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmZpbGUtdXBsb2FkLWJ1dHRvbiAucGx1cy1pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZpbGUtdXBsb2FkLWJ1dHRvbiA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG5cbiAgLmNvbmZpcm0tc2VjdGlvbiAudGl0bGUge1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5jb25maXJtLXNlY3Rpb24gPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5jb25maXJtLXNlY3Rpb24gPiBkaXYgaW5wdXQge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuXG4gIC5saW5rcyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gIC50ZXh0YXJlYS1zZWN0aW9uIC50aXRsZSB7XG4gICAgbWFyZ2luOiA1MHB4IDBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAudGV4dGFyZWEtc2VjdGlvbiB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMzdweDtcbiAgfVxuICAudGV4dGFyZWEtc2VjdGlvbiAuZGV0YWlsID4gcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1JdGFsaWNcIjtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLnVwbG9hZF9zZWN0aW9uIC5saW5lX2JhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcbiAgICBtYXJnaW46IDYwcHggYXV0byA2MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgICBjb2xvcjogIzQ0NDM0MztcbiAgICBtYXJnaW46IGF1dG8gMHB4O1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuaXMtMjEweDIyMCB7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC5jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuY29sdW1uIC5pbWFnZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLmNvbHVtbiAuaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC5maWVsZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuZmllbGQgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICM0NDQzNDM7XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuZmllbGQgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XG4gIH1cblxuICAuZGF0ZS1zZWN0aW9uIC5maWVsZCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuZGF0ZS1zZWN0aW9uIC5maWVsZCA+IGRpdiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5kYXRlLXNlY3Rpb24gLmZpZWxkIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVBMTlCICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLmV4cGVyaWVuY2Utc2VjdGlvbiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzQ0NDM0MztcbiAgICBtYXJnaW46IDUwcHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZXhwZXJpZW5jZS1zZWN0aW9uIGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvIDMwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gICAgY29sb3I6ICM0NDQzNDM7XG4gIH1cblxuICAuaG91cnMtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gIH1cbiAgLmhvdXJzLXNlY3Rpb24gLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG91cnMtc2VjdGlvbiAuZmllbGQge1xuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEuNSU7XG4gIH1cblxuICAucmVmZXJlbmNlLXNlY3Rpb24gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgICBjb2xvcjogIzQ0NDM0MztcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICB9XG4gIC5yZWZlcmVuY2Utc2VjdGlvbiAuZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XG4gICAgY29sb3I6ICM0NDQzNDM7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cblxuICAucG9saWN5LXNlY3Rpb24gLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5wb2xpY3ktc2VjdGlvbiAuZmllbGQgPiBkaXYge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzIxMDEzMjtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuXG4gIC5jaGVja2JveHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiA1MHB4IDBweDtcbiAgfVxuICAuY2hlY2tib3hzLXNlY3Rpb24gLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmNoZWNrYm94cy1zZWN0aW9uIC5maWVsZCA+IGRpdiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICB9XG4gIC5jaGVja2JveHMtc2VjdGlvbiAuZmllbGQgPiBpbnB1dCB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNzlweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA3N3B4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAxcHggIzAxMDEwMTRkO1xuICAgIGNvbG9yOiAjMjEwMTMyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICB9XG5cbiAgLmZpbGUtaW5mbyB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.isUploading = false;
        this.imgs = [];
        this.imageUrl = "./assets/img/screen/cover.png";
        this.fileName = "No file selected";
        this.cnt = 0;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 5; i++) {
            this.imgs[i] = this.imageUrl;
        }
    };
    ExperienceComponent.prototype.onChange = function (file) {
        var _this = this;
        if (file) {
            this.fileName = file.name;
            this.file = file;
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onload = function (event) {
                _this.imageUrl = reader_1.result;
                _this.imgs[_this.cnt] = _this.imageUrl;
                _this.cnt++;
            };
        }
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __importDefault(__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./experience.component.scss */ "./src/app/experience/experience.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
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
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  width: 100% !important;\n  height: 605px !important;\n  background-repeat: no-repeat;\n}\n\n.marker {\n  background-color: red;\n}\n\n.none-section {\n  width: 100%;\n  height: 300px;\n  background: #616161;\n  color: red;\n  font-family: \"Roboto-Bold\";\n  font-size: 54px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.search-bar-section {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 35px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.search-bar-section > img {\n  width: 12%;\n}\n\n.search-bar-section .search-bar {\n  width: 84%;\n}\n\n.search-bar-section .search-bar .search-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.search-bar-section .search-bar .search-section .location-key {\n  border-radius: 7px 7px 7px 0px;\n  width: 60%;\n  height: 38px;\n  background: #585757d9;\n  border: none;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.6);\n  margin: 10px 0px 25px 0px;\n  color: white;\n}\n\n.search-bar-section .search-bar .search-section .date-key {\n  border-radius: 7px 7px 7px 0px;\n  width: 20%;\n  height: 38px;\n  background: #585757d9;\n  border: none;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.6);\n  margin: 10px 0px 25px 0px;\n  color: white;\n}\n\n.search-bar-section .search-bar .search-section .search-btn {\n  background: url('search-btn.png');\n  width: 7%;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n}\n\n.search-bar-section .search-bar img {\n  width: 100% !important;\n}\n\n.search-result-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px auto;\n}\n\n.search-result-section .main-card {\n  width: 31%;\n  background-color: #444343;\n  font-family: \"Roboto-Bold\";\n  font-weight: bold;\n  font-size: 14px;\n  color: #AEA19B;\n  padding: 5px;\n  margin: 10px;\n  position: relative;\n  height: auto;\n  border-radius: 30px 30px 30px 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.search-result-section .main-card img {\n  max-width: 45%;\n  border-radius: 30px;\n  height: 150px;\n  width: 45%;\n}\n\n.search-result-section .main-card .detail {\n  width: 50%;\n}\n\n.search-result-section .main-card p {\n  line-height: 1;\n}\n\n.search-result-section .main-card .location {\n  color: #FF776B;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.icons-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 77%;\n}\n\n.icons-section .vertical-line {\n  position: absolute;\n  height: 50%;\n  right: 35%;\n  display: none;\n}\n\n@media only screen and (max-width: 600px) {\n  .section {\n    padding-bottom: 0px;\n  }\n\n  .search-bar-section {\n    display: -webkit-box;\n    display: flex;\n    margin-top: 0px;\n  }\n\n  .search-result-section .main-card {\n    width: 100%;\n  }\n\n  .icons-section .vertical-line {\n    position: absolute;\n    height: 23%;\n    right: 54%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL0c6XFxOb3dQcm9qZWN0c1xcQW5ndWxhcl93b3JrYW5hXzdfMVxcd2Vic2l0ZVxcUHJvamVjdC9zcmNcXGFwcFxcZmlsdGVyXFxmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNDUjs7QURHSTtFQUNJLHFCQUFBO0FDQVI7O0FER0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FSOztBREdJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQVI7O0FEQ1E7RUFDSSxVQUFBO0FDQ1o7O0FEQ1E7RUFDSSxVQUFBO0FDQ1o7O0FEQVk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNFaEI7O0FERGdCO0VBQ0ksOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDR3BCOztBRERnQjtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0dwQjs7QUREZ0I7RUFDSSxpQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNHcEI7O0FEQVk7RUFDSSxzQkFBQTtBQ0VoQjs7QURHSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURDUTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ1o7O0FEQVk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0VoQjs7QURBWTtFQUNJLFVBQUE7QUNFaEI7O0FEQVk7RUFDSSxjQUFBO0FDRWhCOztBREFZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VoQjs7QURNSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0FDSlI7O0FES1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0haOztBRE9JO0VBQ0k7SUFDSSxtQkFBQTtFQ0pWOztFRE1NO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsZUFBQTtFQ0hWOztFRE1VO0lBQ0ksV0FBQTtFQ0hkOztFRE9VO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ0pkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGFnbS1tYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFya2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ub25lLXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzYxNjE2MTtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtYmFyLXNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgPmltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gtYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbi1rZXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggN3B4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTg1NzU3ZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAyNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGF0ZS1rZXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggN3B4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTg1NzU3ZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAyNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VhcmNoLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaWNvbi9zZWFyY2gtYnRuLnBuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDclO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgICAubWFpbi1jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNBRUExOUI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjc3NkI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZSB7fVxyXG4gICAgICAgICAgICAuZGF0ZSB7fVxyXG4gICAgICAgICAgICAucGVvcGxlcyB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmljb25zLXNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiA3NyU7XHJcbiAgICAgICAgLnZlcnRpY2FsLWxpbmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICByaWdodDogMzUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIC5zZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1iYXItc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5tYWluLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb25zLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAudmVydGljYWwtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1NCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IiwiYWdtLW1hcCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1hcmtlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm5vbmUtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICBmb250LXNpemU6IDU0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2VhcmNoLWJhci1zZWN0aW9uID4gaW1nIHtcbiAgd2lkdGg6IDEyJTtcbn1cbi5zZWFyY2gtYmFyLXNlY3Rpb24gLnNlYXJjaC1iYXIge1xuICB3aWR0aDogODQlO1xufVxuLnNlYXJjaC1iYXItc2VjdGlvbiAuc2VhcmNoLWJhciAuc2VhcmNoLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnNlYXJjaC1iYXItc2VjdGlvbiAuc2VhcmNoLWJhciAuc2VhcmNoLXNlY3Rpb24gLmxvY2F0aW9uLWtleSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggN3B4IDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjNTg1NzU3ZDk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWFyZ2luOiAxMHB4IDBweCAyNXB4IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlYXJjaC1iYXItc2VjdGlvbiAuc2VhcmNoLWJhciAuc2VhcmNoLXNlY3Rpb24gLmRhdGUta2V5IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCA3cHggMHB4O1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJhY2tncm91bmQ6ICM1ODU3NTdkOTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBtYXJnaW46IDEwcHggMHB4IDI1cHggMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VhcmNoLWJhci1zZWN0aW9uIC5zZWFyY2gtYmFyIC5zZWFyY2gtc2VjdGlvbiAuc2VhcmNoLWJ0biB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb24vc2VhcmNoLWJ0bi5wbmcpO1xuICB3aWR0aDogNyU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VhcmNoLWJhci1zZWN0aW9uIC5zZWFyY2gtYmFyIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQge1xuICB3aWR0aDogMzElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MzQzO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0FFQTE5QjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDQ1JTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCAuZGV0YWlsIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCBwIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5tYWluLWNhcmQgLmxvY2F0aW9uIHtcbiAgY29sb3I6ICNGRjc3NkI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaWNvbnMtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDc3JTtcbn1cbi5pY29ucy1zZWN0aW9uIC52ZXJ0aWNhbC1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcmlnaHQ6IDM1JTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5zZWFyY2gtYmFyLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiAubWFpbi1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pY29ucy1zZWN0aW9uIC52ZXJ0aWNhbC1saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMyU7XG4gICAgcmlnaHQ6IDU0JTtcbiAgfVxufSJdfQ== */");

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
        this.home_images = JSON.parse(localStorage.getItem('home_images'));
        console.log('this.home_image', this.home_images);
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.Black_points = this.LandingComponent.Black_points;
        this.filter_data.location = this.route.snapshot.params['location'];
        this.filter_data.event_type = this.route.snapshot.params['event_type'];
        this.filter_data.date = this.route.snapshot.params['date'];
        this.getEvents(this.filter_data);
        this.getSelectedAds(this.filter_data.event_type);
        console.log('filer eventtype', this.filter_data.event_type);
        this.search_logo = './assets/img/icon/event_type_' + this.filter_data.event_type + '.png';
        if (this.filter_data.event_type == '8') {
            this.search_logo = './assets/img/icon/event_type_' + this.filter_data.event_type + '.svg';
        }
    };
    FilterComponent.prototype.getEvents = function (filter_data) {
        var _this = this;
        this.eventDatas = [];
        this.CrudService.getEvents().subscribe(function (snapshot) {
            _this.events = snapshot;
            _this.events.forEach(function (res) {
                if ((res.a_lugar == filter_data.location || filter_data.location == '') &&
                    (res.fecha == filter_data.date || filter_data.date == 'undefined/undefined/') &&
                    (res.t_tipo == filter_data.event_type || filter_data.event_type == '')) {
                    console.log('eventDAte', res, filter_data);
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
    FilterComponent.prototype.filter = function () {
        console.log('feilter', this.filter_data.date);
        var str = this.filter_data.date.split('-');
        if (str.length > 1)
            this.filter_data.date = str[1] + '/' + str[2] + '/' + str[0];
        console.log('filter', this.filter_data);
        this.getEvents(this.filter_data);
    };
    FilterComponent.prototype.getSelectedAds = function (event_type) {
        var _this = this;
        this.CrudService.getSelectedAds(event_type).subscribe(function (res) {
            _this.cards = res;
        });
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  width: 100% !important;\n  height: 605px !important;\n  background-repeat: no-repeat;\n}\n\n.marker {\n  background-color: red;\n}\n\n.search-section {\n  background: #9B9B9B;\n  padding: 20px;\n  border-radius: 15px 15px 15px 0px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.search-section input,\n.search-section select {\n  width: 30%;\n  height: 41px;\n}\n\n.search-section .search-btn {\n  background: url('search-btn.png');\n  width: 45px;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n}\n\n.search-result-section {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px auto;\n}\n\n.search-result-section .red {\n  background: #FF776B !important;\n}\n\n.search-result-section .green {\n  background: #19E68C !important;\n}\n\n.search-result-section .main-card {\n  background-color: #585757;\n  box-shadow: 1px 2px 22px 4px #313030;\n  font-family: \"Roboto-Bold\";\n  font-weight: bold;\n  font-size: 14px;\n  color: #AEA19B;\n  padding: 5px;\n  margin: 10px;\n  position: relative;\n  height: 216px;\n  border-radius: 30px 30px 30px 0px;\n}\n\n.search-result-section .main-card img {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n.search-result-section p {\n  font-family: \"Roboto-Medium\";\n  font-weight: 400;\n  font-size: 22px;\n  color: #AEA19B;\n}\n\na .main-img {\n  height: auto;\n  border-radius: 30px 30px 30px 0px;\n}\n\n@media only screen and (max-width: 760px) {\n  .section {\n    padding-bottom: 0px;\n  }\n\n  .search-result-section {\n    flex-wrap: wrap;\n  }\n  .search-result-section > div {\n    width: 30% !important;\n  }\n  .search-result-section > div .main-card {\n    width: 100%;\n    height: 100px;\n  }\n  .search-result-section > div .main-card img {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    width: 30%;\n  }\n  .search-result-section > div p {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9HOlxcTm93UHJvamVjdHNcXEFuZ3VsYXJfd29ya2FuYV83XzFcXHdlYnNpdGVcXFByb2plY3Qvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURDSTs7RUFFSSxVQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRENJO0VBQ0ksaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ1I7O0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSw4QkFBQTtBQ0NSOztBRENJO0VBQ0ksOEJBQUE7QUNDUjs7QURDSTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FDQ1I7O0FEQVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRVo7O0FEQ0k7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDUjs7QURJSTtFQUNJLFlBQUE7RUFDQSxpQ0FBQTtBQ0RSOztBREtBO0VBQ0k7SUFDSSxtQkFBQTtFQ0ZOOztFRElFO0lBQ0ksZUFBQTtFQ0ROO0VERU07SUFDSSxxQkFBQTtFQ0FWO0VEQ1U7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ0NkO0VEQWM7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0VsQjtFRENVO0lBQ0ksZUFBQTtFQ0NkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgO1xyXG59XHJcblxyXG4ubWFya2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICM5QjlCOUI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgaW5wdXQsXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb24vc2VhcmNoLWJ0bi5wbmcpO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgLnJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGNzc2QiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTlFNjhDICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWFpbi1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1NzU3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMjJweCA0cHggIzMxMzAzMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogI0FFQTE5QjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDIxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjogI0FFQTE5QjtcclxuICAgIH1cclxufVxyXG5cclxuYSB7XHJcbiAgICAubWFpbi1pbWcge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAgIC5zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5tYWluLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAubWFpbi1jYXJkIHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zY3JlZW4vY2FyZC1iZy5wbmcpO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgIC5jdXN0b20tY2FyZCB7XHJcbiAgICAvLyAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC5tYWluLWltZyB7XHJcbiAgICAvLyAgICAgICAgIHdpZHRoOiAxMTElO1xyXG4gICAgLy8gICAgICAgICBtYXJnaW46IDRweCAtMTJweCAtMnB4O1xyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59IiwiYWdtLW1hcCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1hcmtlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzlCOUI5QjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5zZWFyY2gtc2VjdGlvbiBpbnB1dCxcbi5zZWFyY2gtc2VjdGlvbiBzZWxlY3Qge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDQxcHg7XG59XG4uc2VhcmNoLXNlY3Rpb24gLnNlYXJjaC1idG4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29uL3NlYXJjaC1idG4ucG5nKTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5yZWQge1xuICBiYWNrZ3JvdW5kOiAjRkY3NzZCICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIC5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMxOUU2OEMgIWltcG9ydGFudDtcbn1cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODU3NTc7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMjJweCA0cHggIzMxMzAzMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNBRUExOUI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDBweDtcbn1cbi5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gLm1haW4tY2FyZCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG59XG4uc2VhcmNoLXJlc3VsdC1zZWN0aW9uIHAge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNBRUExOUI7XG59XG5cbmEgLm1haW4taW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdC1zZWN0aW9uIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiA+IGRpdiB7XG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWFyY2gtcmVzdWx0LXNlY3Rpb24gPiBkaXYgLm1haW4tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuc2VhcmNoLXJlc3VsdC1zZWN0aW9uID4gZGl2IC5tYWluLWNhcmQgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgLnNlYXJjaC1yZXN1bHQtc2VjdGlvbiA+IGRpdiBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */");

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
        this.t_types = [
            {
                name: 'Majors',
                index: 6
            },
            {
                name: 'Marathons',
                index: 1
            },
            {
                name: 'Half Marathons',
                index: 2
            },
            {
                name: 'Triathlons',
                index: 3
            },
            {
                name: 'Events near your',
                index: 7
            },
            {
                name: 'Trails/Ultra',
                index: 4
            },
            {
                name: 'Runtrip Expiriences',
                index: 8
            },
            {
                name: 'Otras categorías',
                index: 5
            },
        ];
        this.filter_data = {
            location: '',
            date: '',
            event_type: 1
        };
        this.event_type = '';
        this.home_images = {
            Home1: {
                img: '',
                link: ''
            },
            Home2: {
                img: '',
                link: ''
            }
        };
        this.black_points_string.forEach(function (black_point) {
            _this.CrudService.getLocation(black_point, '').subscribe(function (res) {
                var markerObject = { lat: res.data[0].result_object.latitude, lng: res.data[0].result_object.longitude, marker: { url: './assets/img/icon/marker_2.gif', scaledSize: { height: 40, width: 40 } } };
                _this.Black_points.push(markerObject);
            });
            _this.getAdsPoints();
        });
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getAdsPoints = function () {
        var self = this;
        self.CrudService.getProducts().subscribe(function (res) {
            self.home_images = res[2];
            localStorage.setItem('home_images', JSON.stringify(self.home_images));
            self.ads = [];
            Object.keys(res[0]).forEach(function (rkey) {
                self.ads.push(res[0][rkey]);
            });
            self.ads.forEach(function (ad) {
                self.CrudService.getLocation(ad.ciudad, ad.desc).subscribe(function (location) {
                    var markerObject = { lat: location.data[0].result_object.latitude, lng: location.data[0].result_object.longitude, marker: { url: './assets/img/icon/marker_0.gif', scaledSize: { height: 40, width: 40 } } };
                    self.Ads_points.push(markerObject);
                });
            });
        });
    };
    LandingComponent.prototype.filter = function (event_type) {
        if (event_type < 7) {
            this.filter_data.event_type = event_type;
            var str = this.filter_data.date.split('-');
            this.filter_data.date = str[1] + '/' + str[2] + '/' + str[0];
            this.Router.navigate(['/filter', { 'location': this.filter_data.location, 'event_type': this.filter_data.event_type, 'date': this.filter_data.date }]);
        }
    };
    LandingComponent.prototype.moveDetailPage = function (event_name) {
        var _this = this;
        this.CrudService.getEvent(event_name).subscribe(function (res) {
            if (res.length) {
                _this.Router.navigate(['/event']);
                localStorage.setItem('dataSource', JSON.stringify(res[0]));
            }
        });
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

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-clr {\n  background-color: #FF776B;\n  min-height: calc(100vh - 100px);\n}\n\n.title {\n  margin: 80px 0px;\n  font-size: 40px;\n  font-family: \"Roboto-Bold\";\n  color: #210132;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none !important;\n}\n\n.category_checkboxs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.category_checkboxs .field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 116px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 150px;\n}\n\n.category_checkboxs .field input {\n  width: 35px;\n  height: 35px;\n}\n\n.category_checkboxs .field img {\n  height: 79px;\n}\n\n.form-section {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form-section .field {\n  width: 80%;\n  margin: 30px auto;\n}\n\n.form-section .field input {\n  width: 100%;\n  height: 45px;\n  background: none;\n  border: none;\n  font-size: 22px;\n  color: #444343;\n}\n\n.form-section .field input::-webkit-input-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::-moz-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::-ms-input-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::placeholder {\n  color: #444343;\n}\n\n.form-section .field div {\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff52;\n  box-shadow: 1px 0px 13px 4px #00000017;\n}\n\n.submit {\n  background-color: #FF776B;\n  border-radius: 10px 10px 10px 0px;\n  overflow: hidden;\n  position: relative;\n  width: 250px;\n  border: none;\n  height: 77px;\n  color: #210132;\n  font-size: 20px;\n  font-family: \"Roboto-Bold\";\n}\n\n.file-info {\n  color: #999;\n  font-family: Lato;\n  margin-left: 0.5rem;\n}\n\n.password-field {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.password-field .field {\n  margin-right: 6%;\n  width: 70%;\n  margin-left: 0px;\n}\n\n.password-field a {\n  margin-top: auto;\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 760px) {\n  .section {\n    padding-top: 0px;\n  }\n\n  .title {\n    font-size: 25px;\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRzpcXE5vd1Byb2plY3RzXFxBbmd1bGFyX3dvcmthbmFfN18xXFx3ZWJzaXRlXFxQcm9qZWN0L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7O0VBRUksd0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1o7O0FERFE7RUFDSSxZQUFBO0FDR1o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHWjs7QUREUTtFQUNJLGNBQUE7QUNHWjs7QURKUTtFQUNJLGNBQUE7QUNHWjs7QURKUTtFQUNJLGNBQUE7QUNHWjs7QURKUTtFQUNJLGNBQUE7QUNHWjs7QUREUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQ0daOztBREVBO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBSjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NSOztBREdBO0VBQ0k7SUFDSSxnQkFBQTtFQ0FOOztFREVFO0lBQ0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jbHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc2QjtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW46IDgwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcclxuICAgIGNvbG9yOiAjMjEwMTMyO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cyxcclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfY2hlY2tib3hzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuZmllbGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTE2cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc2QjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggMXB4ICMwMTAxMDE0ZDtcclxuICAgIGNvbG9yOiAjMjEwMTMyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcclxufVxyXG5cclxuLmZpbGUtaW5mbyB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAgIC5zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59IiwiLmJnLWNsciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogODBweCAwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgY29sb3I6ICMyMTAxMzI7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeV9jaGVja2JveHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2F0ZWdvcnlfY2hlY2tib3hzIC5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmNhdGVnb3J5X2NoZWNrYm94cyAuZmllbGQgaW5wdXQge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmNhdGVnb3J5X2NoZWNrYm94cyAuZmllbGQgaW1nIHtcbiAgaGVpZ2h0OiA3OXB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZvcm0tc2VjdGlvbiAuZmllbGQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cbi5mb3JtLXNlY3Rpb24gLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjNDQ0MzQzO1xufVxuLmZvcm0tc2VjdGlvbiAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM0NDQzNDM7XG59XG4uZm9ybS1zZWN0aW9uIC5maWVsZCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MjtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XG59XG5cbi5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNzdweDtcbiAgY29sb3I6ICMyMTAxMzI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbn1cblxuLmZpbGUtaW5mbyB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LWZhbWlseTogTGF0bztcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLnBhc3N3b3JkLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBhc3N3b3JkLWZpZWxkIC5maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogNiU7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ucGFzc3dvcmQtZmllbGQgYSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
        this.email = "";
        this.password = "";
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.email != '' && this.password != '') {
            this.AuthService.login(this.email, this.password).then(function (user) {
                if (user) {
                    _this.user = user;
                    localStorage.setItem('user', JSON.stringify(_this.user));
                    _this.Router.navigate(['/landing']);
                }
                else {
                    localStorage.setItem('user', null);
                }
            })
                .catch(function (err) {
                alert(err.message);
            });
        }
    };
    LoginComponent.prototype.toggleHidden = function () {
        this.hide = !this.hide;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ "./src/app/rtx/rtx.component.scss":
/*!****************************************!*\
  !*** ./src/app/rtx/rtx.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-clr {\n  background-color: #FF776B;\n}\n\n.title {\n  margin: 80px 0px;\n  font-size: 40px;\n  font-family: \"Roboto-Bold\";\n  color: #210132;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none !important;\n}\n\n.category_checkboxs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.category_checkboxs .field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 116px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 150px;\n}\n\n.category_checkboxs .field input {\n  width: 35px;\n  height: 35px;\n}\n\n.category_checkboxs .field img {\n  height: 79px;\n}\n\n.form-section {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form-section .field {\n  width: 46%;\n  margin: 30px 0px;\n  margin-left: 4%;\n}\n\n.form-section .field input {\n  width: 100%;\n  height: 45px;\n  background: none;\n  border: none;\n  font-size: 22px;\n  color: #444343;\n}\n\n.form-section .field input::-webkit-input-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::-moz-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::-ms-input-placeholder {\n  color: #444343;\n}\n\n.form-section .field input::placeholder {\n  color: #444343;\n}\n\n.form-section .field div {\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff52;\n  box-shadow: 1px 0px 13px 4px #00000017;\n}\n\n.textarea-section .title {\n  margin: 50px 0px;\n  font-family: \"Roboto-Bold\";\n  color: #210132;\n  font-size: 30px;\n}\n\n.textarea-section textarea {\n  width: 100%;\n  height: 237px;\n}\n\n.upload_section .line_bar {\n  width: 100%;\n  height: 1px;\n  background-color: #ffffff52;\n  box-shadow: 1px 0px 13px 4px #00000017;\n  margin: 60px auto 60px;\n  width: 80%;\n}\n\n.upload_section .flex {\n  display: -webkit-box;\n  display: flex;\n}\n\n.upload_section .title {\n  font-size: 40px;\n  font-family: \"Roboto-Bold\";\n  color: #210132;\n  margin: auto 100px auto 0px;\n}\n\n.upload_section .is-210x220 {\n  width: 210px;\n  height: 220px;\n}\n\n.upload_section .file-upload-button {\n  background-color: #FF776B;\n  border-radius: 10px 10px 10px 0px;\n  overflow: hidden;\n  position: relative;\n  width: 179px;\n  border: none;\n  height: 77px;\n  box-shadow: 1px 2px 15px 1px #0101014d;\n}\n\n.upload_section .file-upload-button::after {\n  content: \"+\";\n  color: #210232;\n  text-align: left;\n  font-size: 91px;\n  position: absolute;\n  font-family: \"Roboto-Bold\";\n  left: 19px;\n  top: 29px;\n}\n\n.upload_section .file-upload-button input[type=file] {\n  font-size: 100px;\n  width: 179px;\n  height: 77px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n}\n\n.upload_section .file-upload-button > div {\n  font-size: 18px;\n  font-family: \"Roboto-Regular\";\n  color: #210132;\n  margin-left: 80px;\n  width: 20px;\n}\n\n.upload_section .column {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 50px;\n}\n\n.upload_section .field {\n  width: 50%;\n  margin: 30px 0px;\n}\n\n.upload_section .field input {\n  width: 100%;\n  height: 45px;\n  background: none;\n  border: none;\n  font-size: 22px;\n  color: #444343;\n}\n\n.upload_section .field input::-webkit-input-placeholder {\n  color: #444343;\n}\n\n.upload_section .field input::-moz-placeholder {\n  color: #444343;\n}\n\n.upload_section .field input::-ms-input-placeholder {\n  color: #444343;\n}\n\n.upload_section .field input::placeholder {\n  color: #444343;\n}\n\n.upload_section .field div {\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff52;\n  box-shadow: 1px 0px 13px 4px #00000017;\n}\n\n.social-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.social-section > div {\n  width: 48%;\n}\n\n.social-section > div .title {\n  font-size: 30px;\n}\n\n.social-section > div .field {\n  width: 100%;\n  margin: 30px 0px;\n  margin-left: 4%;\n}\n\n.social-section > div .field input {\n  width: 100%;\n  height: 45px;\n  background: none;\n  border: none;\n  font-size: 22px;\n  color: #444343;\n}\n\n.social-section > div .field input::-webkit-input-placeholder {\n  color: #444343;\n}\n\n.social-section > div .field input::-moz-placeholder {\n  color: #444343;\n}\n\n.social-section > div .field input::-ms-input-placeholder {\n  color: #444343;\n}\n\n.social-section > div .field input::placeholder {\n  color: #444343;\n}\n\n.social-section > div .field div {\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff52;\n  box-shadow: 1px 0px 13px 4px #00000017;\n}\n\n.checkboxs-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 150px 0px 100px;\n}\n\n.checkboxs-section .field {\n  display: -webkit-box;\n  display: flex;\n}\n\n.checkboxs-section .field > div {\n  font-size: 30px;\n  font-family: \"Roboto-Bold\";\n  color: #210132;\n}\n\n.checkboxs-section .field > input {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n\n.submit {\n  background-color: #FF776B;\n  border-radius: 10px 10px 10px 0px;\n  overflow: hidden;\n  position: relative;\n  width: 179px;\n  border: none;\n  height: 77px;\n  box-shadow: 1px 2px 15px 1px #0101014d;\n  color: #210132;\n  font-size: 30px;\n  font-family: \"Roboto-Bold\";\n}\n\n.file-info {\n  color: #999;\n  font-family: Lato;\n  margin-left: 0.5rem;\n}\n\n@media only screen and (max-width: 760px) {\n  .section {\n    padding-top: 0px;\n  }\n\n  .title {\n    font-size: 25px;\n    width: 100%;\n    text-align: center;\n  }\n\n  .category_checkboxs {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .category_checkboxs .field {\n    width: 30%;\n    -webkit-box-align: center;\n            align-items: center;\n    height: auto;\n    margin: 15px 0px;\n  }\n  .category_checkboxs .field input {\n    width: 20px;\n    height: 20px;\n  }\n  .category_checkboxs .field img {\n    height: auto;\n    width: 50%;\n  }\n\n  .form-section {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 30px;\n  }\n  .form-section .field {\n    width: 100%;\n    margin: 10px 0px;\n  }\n  .form-section .field input {\n    width: 100%;\n    height: 45px;\n    background: none;\n    border: none;\n    font-size: 15px;\n    color: #444343;\n  }\n  .form-section .field input::-webkit-input-placeholder {\n    color: #444343;\n  }\n  .form-section .field input::-moz-placeholder {\n    color: #444343;\n  }\n  .form-section .field input::-ms-input-placeholder {\n    color: #444343;\n  }\n  .form-section .field input::placeholder {\n    color: #444343;\n  }\n  .form-section .field div {\n    width: 100%;\n    height: 2px;\n    background-color: #ffffff52;\n    box-shadow: 1px 0px 13px 4px #00000017;\n  }\n\n  .textarea-section .title {\n    margin: 50px 0px;\n    font-family: \"Roboto-Bold\";\n    color: #210132;\n    font-size: 30px;\n  }\n  .textarea-section textarea {\n    width: 100%;\n    height: 237px;\n  }\n\n  .upload_section .line_bar {\n    width: 100%;\n    height: 1px;\n    background-color: #ffffff52;\n    box-shadow: 1px 0px 13px 4px #00000017;\n    margin: 60px auto 60px;\n    width: 80%;\n  }\n  .upload_section .flex {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n            flex-direction: row-reverse;\n  }\n  .upload_section .title {\n    font-size: 25px;\n    font-family: \"Roboto-Bold\";\n    color: #210132;\n    margin: auto 0px;\n  }\n  .upload_section .is-210x220 {\n    width: 210px;\n    height: 220px;\n  }\n  .upload_section .file-upload-button {\n    background-color: #FF776B;\n    border-radius: 10px 10px 10px 0px;\n    overflow: hidden;\n    position: relative;\n    width: 179px;\n    border: none;\n    height: 77px;\n    box-shadow: 1px 2px 15px 1px #0101014d;\n  }\n  .upload_section .file-upload-button::after {\n    content: \"+\";\n    color: #210232;\n    text-align: left;\n    font-size: 70px;\n    position: absolute;\n    font-family: \"Roboto-Bold\";\n    left: 19px;\n    top: 29px;\n  }\n  .upload_section .file-upload-button input[type=file] {\n    font-size: 100px;\n    width: 179px;\n    height: 77px;\n    left: 0;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n  }\n  .upload_section .file-upload-button > div {\n    font-size: 15px;\n    font-family: \"Roboto-Regular\";\n    color: #210132;\n    margin-left: 50%;\n    width: 20px;\n  }\n  .upload_section .column {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin-top: 50px;\n    flex-wrap: wrap;\n  }\n  .upload_section .column .image {\n    width: 30%;\n  }\n  .upload_section .column .image img {\n    width: 100%;\n    height: auto;\n  }\n  .upload_section .field {\n    width: 50%;\n    margin: 30px 0px;\n  }\n  .upload_section .field input {\n    width: 100%;\n    height: 15px;\n    background: none;\n    border: none;\n    font-size: 22px;\n    color: #444343;\n  }\n  .upload_section .field input::-webkit-input-placeholder {\n    color: #444343;\n  }\n  .upload_section .field input::-moz-placeholder {\n    color: #444343;\n  }\n  .upload_section .field input::-ms-input-placeholder {\n    color: #444343;\n  }\n  .upload_section .field input::placeholder {\n    color: #444343;\n  }\n  .upload_section .field div {\n    width: 100%;\n    height: 2px;\n    background-color: #ffffff52;\n    box-shadow: 1px 0px 13px 4px #00000017;\n  }\n\n  .social-section {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .social-section > div {\n    width: 100%;\n  }\n  .social-section > div .title {\n    font-size: 25px;\n    margin: 50px 0px;\n  }\n  .social-section > div .field {\n    width: 100%;\n    margin: 20px 0px;\n  }\n  .social-section > div .field input {\n    width: 100%;\n    height: 15px;\n    background: none;\n    border: none;\n    font-size: 15px;\n    color: #444343;\n  }\n  .social-section > div .field input::-webkit-input-placeholder {\n    color: #444343;\n  }\n  .social-section > div .field input::-moz-placeholder {\n    color: #444343;\n  }\n  .social-section > div .field input::-ms-input-placeholder {\n    color: #444343;\n  }\n  .social-section > div .field input::placeholder {\n    color: #444343;\n  }\n  .social-section > div .field div {\n    width: 100%;\n    height: 2px;\n    background-color: #ffffff52;\n    box-shadow: 1px 0px 13px 4px #00000017;\n  }\n\n  .checkboxs-section {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n    margin: 50px 0px;\n  }\n  .checkboxs-section .field {\n    display: -webkit-box;\n    display: flex;\n  }\n  .checkboxs-section .field > div {\n    font-size: 18px;\n    font-family: \"Roboto-Bold\";\n    color: #210132;\n  }\n  .checkboxs-section .field > input {\n    width: 15px;\n    height: 15px;\n    margin-right: 10px;\n  }\n\n  .submit {\n    background-color: #FF776B;\n    border-radius: 10px 10px 10px 0px;\n    overflow: hidden;\n    position: relative;\n    width: 179px;\n    border: none;\n    height: 77px;\n    box-shadow: 1px 2px 15px 1px #0101014d;\n    color: #210132;\n    font-size: 30px;\n    font-family: \"Roboto-Bold\";\n  }\n\n  .file-info {\n    color: #999;\n    font-family: Lato;\n    margin-left: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnR4L0c6XFxOb3dQcm9qZWN0c1xcQW5ndWxhcl93b3JrYW5hXzdfMVxcd2Vic2l0ZVxcUHJvamVjdC9zcmNcXGFwcFxccnR4XFxydHguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3J0eC9ydHguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7O0VBRUksd0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1o7O0FERFE7RUFDSSxZQUFBO0FDR1o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRVI7O0FERFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDR1o7O0FERFE7RUFDSSxjQUFBO0FDR1o7O0FESlE7RUFDSSxjQUFBO0FDR1o7O0FESlE7RUFDSSxjQUFBO0FDR1o7O0FESlE7RUFDSSxjQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QUNHWjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBUjs7QURLSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0ZSOztBRElJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDRlI7O0FESUk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNGUjs7QURJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRlI7O0FESUk7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FDRlI7O0FER1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0RaOztBREdRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDRFo7O0FER1E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRFo7O0FESUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURJSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0ZSOztBREdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RaOztBREdRO0VBQ0ksY0FBQTtBQ0RaOztBREFRO0VBQ0ksY0FBQTtBQ0RaOztBREFRO0VBQ0ksY0FBQTtBQ0RaOztBREFRO0VBQ0ksY0FBQTtBQ0RaOztBREdRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0FDRFo7O0FETUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDSEo7O0FESUk7RUFDSSxVQUFBO0FDRlI7O0FER1E7RUFDSSxlQUFBO0FDRFo7O0FER1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRFo7O0FERVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQWhCOztBREVZO0VBQ0ksY0FBQTtBQ0FoQjs7QUREWTtFQUNJLGNBQUE7QUNBaEI7O0FERFk7RUFDSSxjQUFBO0FDQWhCOztBRERZO0VBQ0ksY0FBQTtBQ0FoQjs7QURFWTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQ0FoQjs7QURNQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx1QkFBQTtBQ0hKOztBRElJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDRlI7O0FER1E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDRFo7O0FER1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFo7O0FETUE7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksZ0JBQUE7RUNITjs7RURLRTtJQUNJLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNGTjs7RURJRTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSxlQUFBO0VDRE47RURFTTtJQUNJLFVBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDQVY7RURDVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDQ2Q7RURDVTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VDQ2Q7O0VER0U7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNBTjtFRENNO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDQ1Y7RURBVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUNFZDtFREFVO0lBQ0ksY0FBQTtFQ0VkO0VESFU7SUFDSSxjQUFBO0VDRWQ7RURIVTtJQUNJLGNBQUE7RUNFZDtFREhVO0lBQ0ksY0FBQTtFQ0VkO0VEQVU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLDJCQUFBO0lBQ0Esc0NBQUE7RUNFZDs7RURHTTtJQUNJLGdCQUFBO0lBQ0EsMEJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0FWO0VERU07SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ0FWOztFRElNO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLHNDQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0VDRFY7RURHTTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsOEJBQUE7WUFBQSwyQkFBQTtFQ0RWO0VER007SUFDSSxlQUFBO0lBQ0EsMEJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNEVjtFREdNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNEVjtFREdNO0lBQ0kseUJBQUE7SUFDQSxpQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxzQ0FBQTtFQ0RWO0VERVU7SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQ0FkO0VERVU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7RUNBZDtFREVVO0lBQ0ksZUFBQTtJQUNBLDZCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0FkO0VER007SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDRFY7RURFVTtJQUNJLFVBQUE7RUNBZDtFRENjO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNDbEI7RURHTTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQ0RWO0VERVU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDQWQ7RURFVTtJQUNJLGNBQUE7RUNBZDtFRERVO0lBQ0ksY0FBQTtFQ0FkO0VERFU7SUFDSSxjQUFBO0VDQWQ7RUREVTtJQUNJLGNBQUE7RUNBZDtFREVVO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLHNDQUFBO0VDQWQ7O0VESUU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EsZUFBQTtFQ0ROO0VERU07SUFDSSxXQUFBO0VDQVY7RURDVTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQ0NkO0VEQ1U7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUNDZDtFREFjO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQ0VsQjtFREFjO0lBQ0ksY0FBQTtFQ0VsQjtFREhjO0lBQ0ksY0FBQTtFQ0VsQjtFREhjO0lBQ0ksY0FBQTtFQ0VsQjtFREhjO0lBQ0ksY0FBQTtFQ0VsQjtFREFjO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLHNDQUFBO0VDRWxCOztFREdFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0FOO0VEQ007SUFDSSxvQkFBQTtJQUFBLGFBQUE7RUNDVjtFREFVO0lBQ0ksZUFBQTtJQUNBLDBCQUFBO0lBQ0EsY0FBQTtFQ0VkO0VEQVU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDRWQ7O0VERUU7SUFDSSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHNDQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSwwQkFBQTtFQ0NOOztFRENFO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcnR4L3J0eC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jbHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc2QjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbjogODBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgY29sb3I6ICMyMTAxMzI7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeV9jaGVja2JveHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5maWVsZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMTZweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3OXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRleHRhcmVhLXNlY3Rpb24ge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XHJcbiAgICAgICAgY29sb3I6ICMyMTAxMzI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjM3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51cGxvYWRfc2VjdGlvbiB7XHJcbiAgICAubGluZV9iYXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MjtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcclxuICAgICAgICBtYXJnaW46IDYwcHggYXV0byA2MHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuZmxleCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XHJcbiAgICAgICAgY29sb3I6ICMyMTAxMzI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDEwMHB4IGF1dG8gMHB4O1xyXG4gICAgfVxyXG4gICAgLmlzLTIxMHgyMjAge1xyXG4gICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc2QjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDE3OXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDFweCAjMDEwMTAxNGQ7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIitcIjtcclxuICAgICAgICAgICAgY29sb3I6ICMyMTAyMzI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTFweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgICAgICAgICBsZWZ0OiAxOXB4O1xyXG4gICAgICAgICAgICB0b3A6IDI5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE3OXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMDEzMjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDBweDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zb2NpYWwtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2hlY2tib3hzLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMTUwcHggMHB4IDEwMHB4O1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjEwMTMyO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+aW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE3OXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDFweCAjMDEwMTAxNGQ7XHJcbiAgICBjb2xvcjogIzIxMDEzMjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XHJcbn1cclxuXHJcbi5maWxlLWluZm8ge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAgIC5zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhdGVnb3J5X2NoZWNrYm94cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybS1zZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0YXJlYS1zZWN0aW9uIHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMDEzMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51cGxvYWRfc2VjdGlvbiB7XHJcbiAgICAgICAgLmxpbmVfYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDYwcHggYXV0byA2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmxleCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMDEzMjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlzLTIxMHgyMjAge1xyXG4gICAgICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDE3OXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDFweCAjMDEwMTAxNGQ7XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiK1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTAyMzI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNzlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEwMTMyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NDQzNDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwtc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0MzQzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDM0MztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94cy1zZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMDEzMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+aW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VibWl0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTc5cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggMXB4ICMwMTAxMDE0ZDtcclxuICAgICAgICBjb2xvcjogIzIxMDEzMjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcclxuICAgIH1cclxuICAgIC5maWxlLWluZm8ge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICB9XHJcbn0iLCIuYmctY2xyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc2Qjtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiA4MHB4IDBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICBjb2xvcjogIzIxMDEzMjtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5X2NoZWNrYm94cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYXRlZ29yeV9jaGVja2JveHMgLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDExNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uY2F0ZWdvcnlfY2hlY2tib3hzIC5maWVsZCBpbnB1dCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uY2F0ZWdvcnlfY2hlY2tib3hzIC5maWVsZCBpbWcge1xuICBoZWlnaHQ6IDc5cHg7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZm9ybS1zZWN0aW9uIC5maWVsZCB7XG4gIHdpZHRoOiA0NiU7XG4gIG1hcmdpbjogMzBweCAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cbi5mb3JtLXNlY3Rpb24gLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjNDQ0MzQzO1xufVxuLmZvcm0tc2VjdGlvbiAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM0NDQzNDM7XG59XG4uZm9ybS1zZWN0aW9uIC5maWVsZCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MjtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XG59XG5cbi50ZXh0YXJlYS1zZWN0aW9uIC50aXRsZSB7XG4gIG1hcmdpbjogNTBweCAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGNvbG9yOiAjMjEwMTMyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4udGV4dGFyZWEtc2VjdGlvbiB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIzN3B4O1xufVxuXG4udXBsb2FkX3NlY3Rpb24gLmxpbmVfYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xuICBtYXJnaW46IDYwcHggYXV0byA2MHB4O1xuICB3aWR0aDogODAlO1xufVxuLnVwbG9hZF9zZWN0aW9uIC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi51cGxvYWRfc2VjdGlvbiAudGl0bGUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGNvbG9yOiAjMjEwMTMyO1xuICBtYXJnaW46IGF1dG8gMTAwcHggYXV0byAwcHg7XG59XG4udXBsb2FkX3NlY3Rpb24gLmlzLTIxMHgyMjAge1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMjIwcHg7XG59XG4udXBsb2FkX3NlY3Rpb24gLmZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTc5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA3N3B4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggMXB4ICMwMTAxMDE0ZDtcbn1cbi51cGxvYWRfc2VjdGlvbiAuZmlsZS11cGxvYWQtYnV0dG9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBjb2xvcjogIzIxMDIzMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiA5MXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIGxlZnQ6IDE5cHg7XG4gIHRvcDogMjlweDtcbn1cbi51cGxvYWRfc2VjdGlvbiAuZmlsZS11cGxvYWQtYnV0dG9uIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICB3aWR0aDogMTc5cHg7XG4gIGhlaWdodDogNzdweDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4udXBsb2FkX3NlY3Rpb24gLmZpbGUtdXBsb2FkLWJ1dHRvbiA+IGRpdiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgY29sb3I6ICMyMTAxMzI7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi51cGxvYWRfc2VjdGlvbiAuY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnVwbG9hZF9zZWN0aW9uIC5maWVsZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG4udXBsb2FkX3NlY3Rpb24gLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjNDQ0MzQzO1xufVxuLnVwbG9hZF9zZWN0aW9uIC5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzQ0NDM0Mztcbn1cbi51cGxvYWRfc2VjdGlvbiAuZmllbGQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xufVxuXG4uc29jaWFsLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc29jaWFsLXNlY3Rpb24gPiBkaXYge1xuICB3aWR0aDogNDglO1xufVxuLnNvY2lhbC1zZWN0aW9uID4gZGl2IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zb2NpYWwtc2VjdGlvbiA+IGRpdiAuZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuLnNvY2lhbC1zZWN0aW9uID4gZGl2IC5maWVsZCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzQ0NDM0Mztcbn1cbi5zb2NpYWwtc2VjdGlvbiA+IGRpdiAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM0NDQzNDM7XG59XG4uc29jaWFsLXNlY3Rpb24gPiBkaXYgLmZpZWxkIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUyO1xuICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcbn1cblxuLmNoZWNrYm94cy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDE1MHB4IDBweCAxMDBweDtcbn1cbi5jaGVja2JveHMtc2VjdGlvbiAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNoZWNrYm94cy1zZWN0aW9uIC5maWVsZCA+IGRpdiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgY29sb3I6ICMyMTAxMzI7XG59XG4uY2hlY2tib3hzLXNlY3Rpb24gLmZpZWxkID4gaW5wdXQge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE3OXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNzdweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDFweCAjMDEwMTAxNGQ7XG4gIGNvbG9yOiAjMjEwMTMyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG59XG5cbi5maWxlLWluZm8ge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1mYW1pbHk6IExhdG87XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2F0ZWdvcnlfY2hlY2tib3hzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmNhdGVnb3J5X2NoZWNrYm94cyAuZmllbGQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgfVxuICAuY2F0ZWdvcnlfY2hlY2tib3hzIC5maWVsZCBpbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5jYXRlZ29yeV9jaGVja2JveHMgLmZpZWxkIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuZm9ybS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5mb3JtLXNlY3Rpb24gLmZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICB9XG4gIC5mb3JtLXNlY3Rpb24gLmZpZWxkIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICB9XG4gIC5mb3JtLXNlY3Rpb24gLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM0NDQzNDM7XG4gIH1cbiAgLmZvcm0tc2VjdGlvbiAuZmllbGQgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XG4gIH1cblxuICAudGV4dGFyZWEtc2VjdGlvbiAudGl0bGUge1xuICAgIG1hcmdpbjogNTBweCAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIjtcbiAgICBjb2xvcjogIzIxMDEzMjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLnRleHRhcmVhLXNlY3Rpb24gdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjM3cHg7XG4gIH1cblxuICAudXBsb2FkX3NlY3Rpb24gLmxpbmVfYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxM3B4IDRweCAjMDAwMDAwMTc7XG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gNjBweDtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gICAgY29sb3I6ICMyMTAxMzI7XG4gICAgbWFyZ2luOiBhdXRvIDBweDtcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLmlzLTIxMHgyMjAge1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzZCO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTc5cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNzdweDtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggMXB4ICMwMTAxMDE0ZDtcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLmZpbGUtdXBsb2FkLWJ1dHRvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiK1wiO1xuICAgIGNvbG9yOiAjMjEwMjMyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICAgIGxlZnQ6IDE5cHg7XG4gICAgdG9wOiAyOXB4O1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuZmlsZS11cGxvYWQtYnV0dG9uIGlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgd2lkdGg6IDE3OXB4O1xuICAgIGhlaWdodDogNzdweDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLmZpbGUtdXBsb2FkLWJ1dHRvbiA+IGRpdiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG4gICAgY29sb3I6ICMyMTAxMzI7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLmNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC5jb2x1bW4gLmltYWdlIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIC51cGxvYWRfc2VjdGlvbiAuY29sdW1uIC5pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLmZpZWxkIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC5maWVsZCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzQ0NDM0MztcbiAgfVxuICAudXBsb2FkX3NlY3Rpb24gLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM0NDQzNDM7XG4gIH1cbiAgLnVwbG9hZF9zZWN0aW9uIC5maWVsZCBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MjtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDEzcHggNHB4ICMwMDAwMDAxNztcbiAgfVxuXG4gIC5zb2NpYWwtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5zb2NpYWwtc2VjdGlvbiA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNvY2lhbC1zZWN0aW9uID4gZGl2IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbjogNTBweCAwcHg7XG4gIH1cbiAgLnNvY2lhbC1zZWN0aW9uID4gZGl2IC5maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuICAuc29jaWFsLXNlY3Rpb24gPiBkaXYgLmZpZWxkIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNDQ0MzQzO1xuICB9XG4gIC5zb2NpYWwtc2VjdGlvbiA+IGRpdiAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzQ0NDM0MztcbiAgfVxuICAuc29jaWFsLXNlY3Rpb24gPiBkaXYgLmZpZWxkIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUyO1xuICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTNweCA0cHggIzAwMDAwMDE3O1xuICB9XG5cbiAgLmNoZWNrYm94cy1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOiA1MHB4IDBweDtcbiAgfVxuICAuY2hlY2tib3hzLXNlY3Rpb24gLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jaGVja2JveHMtc2VjdGlvbiAuZmllbGQgPiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICAgIGNvbG9yOiAjMjEwMTMyO1xuICB9XG4gIC5jaGVja2JveHMtc2VjdGlvbiAuZmllbGQgPiBpbnB1dCB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc3NkI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNzlweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA3N3B4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAxcHggIzAxMDEwMTRkO1xuICAgIGNvbG9yOiAjMjEwMTMyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xuICB9XG5cbiAgLmZpbGUtaW5mbyB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/rtx/rtx.component.ts":
/*!**************************************!*\
  !*** ./src/app/rtx/rtx.component.ts ***!
  \**************************************/
/*! exports provided: RtxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtxComponent", function() { return RtxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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




var RtxComponent = /** @class */ (function () {
    function RtxComponent(mapsAPILoader, CrudService, Router, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.CrudService = CrudService;
        this.Router = Router;
        this.ngZone = ngZone;
        this.event = {
            a_lugar: "",
            desc: "",
            estado: "0",
            fecha: "",
            imgp: "",
            imgs: [],
            l_lugar: "",
            linkincripcion: "",
            linkpagina: "",
            linkvideo: "",
            nombre: "",
            pais: "",
            rsFace: "",
            rsInst: "",
            rsTwit: "",
            t_pos: "",
            t_tipo: "",
        };
        this.isUploading = false;
        this.imgs = [];
        this.imageUrl = "./assets/img/screen/cover.png";
        this.fileName = "No file selected";
        this.cnt = 0;
        // autocomplete
        this.title = 'AGM project';
    }
    RtxComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 0; i < 5; i++) {
            this.imgs[i] = this.imageUrl;
        }
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var placeAutocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            var countryAutocomplete = new google.maps.places.Autocomplete(_this.countryElementRef.nativeElement);
            placeAutocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = placeAutocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
            countryAutocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = countryAutocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    RtxComponent.prototype.onChange = function (file) {
        var _this = this;
        if (file) {
            this.fileName = file.name;
            this.file = file;
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onload = function (event) {
                _this.imageUrl = reader_1.result;
                _this.imgs[_this.cnt] = _this.imageUrl;
                _this.cnt++;
            };
        }
    };
    //push Event to firebase
    RtxComponent.prototype.pushEvent = function () {
        this.event.imgs = this.imgs;
        this.CrudService.pushEvent(this.event);
        this.Router.navigate(['landing']);
        console.log(';event', this.event);
    };
    // // Get Current Location Coordinates
    RtxComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 8;
                _this.getAddress(_this.latitude, _this.longitude);
            });
        }
    };
    RtxComponent.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    RtxComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    RtxComponent.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RtxComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('country'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RtxComponent.prototype, "countryElementRef", void 0);
    RtxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rtx',
            template: __importDefault(__webpack_require__(/*! raw-loader!./rtx.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rtx/rtx.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./rtx.component.scss */ "./src/app/rtx/rtx.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], RtxComponent);
    return RtxComponent;
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FsZXJ0cy1zZWN0aW9uL2FsZXJ0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FuZ3VsYXItc2VjdGlvbi9hbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2J1dHRvbnMtc2VjdGlvbi9idXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Nycy1zZWN0aW9uL2Nycy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2lucHV0cy1zZWN0aW9uL2lucHV0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL25hdmlnYXRpb24tc2VjdGlvbi9uYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL251Y2xlby1zZWN0aW9uL251Y2xlby1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3R5cG9ncmFwaHktc2VjdGlvbi90eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3ZlcnNpb25zLXNlY3Rpb24vdmVyc2lvbnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

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
    CrudService.prototype.getEvent = function (event_name) {
        return this.db.list('/Eventos', function (ref) { return ref.orderByChild('nombre').equalTo(event_name); }).valueChanges();
    };
    CrudService.prototype.getProducts = function () {
        return this.db.list('/Publicidad').valueChanges();
    };
    CrudService.prototype.getSelectedAds = function (event_type) {
        var type = Number(event_type);
        return this.db.list('/Publicidad/ImagenesPublicitarias', function (ref) { return ref.orderByChild('t_type').equalTo(type); }).valueChanges();
    };
    CrudService.prototype.getLocation = function (city, desc) {
        console.log('city', city, desc);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-rapidapi-host', 'tripadvisor1.p.rapidapi.com')
            .set('x-rapidapi-key', 'acbdec2b65mshcda9e5f70912a39p19f856jsn510dd5c5ec73')
            .set('useQueryString', 'true');
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AUTH_SERVER_ADDRESS + "/locations/search?location_id=1&limit=1&sort=relevance&offset=0&lang=spa&currency=USD&units=km&query=" + city + " + " + desc, { headers: headers, });
    };
    CrudService.prototype.getWether = function (lat, lon) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-rapidapi-host', 'community-open-weather-map.p.rapidapi.com')
            .set('x-rapidapi-key', '0ff4de13e9mshbafda0022c0c6cfp18355ajsn2554e0eb87f4');
        return this.httpClient.get("https://community-open-weather-map.p.rapidapi.com/weather?lat=" + lat + "&lon=" + lon, { headers: headers, });
    };
    CrudService.prototype.pushEvent = function (event) {
        return this.db.list('/Eventos').push(event);
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
/* harmony default export */ __webpack_exports__["default"] = (".footer-text p {\n  margin: 0px;\n  font-family: \"Woodford Bourne\";\n  color: #9B9B9B;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.red {\n  color: #FF776B !important;\n}\n\n.font-weight {\n  font-weight: 200 !important;\n}\n\n.footer-logo {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9HOlxcTm93UHJvamVjdHNcXEFuZ3VsYXJfd29ya2FuYV83XzFcXHdlYnNpdGVcXFByb2plY3Qvc3JjXFxhcHBcXHNoYXJlZFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FSOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXRleHQge1xyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdXb29kZm9yZCBCb3VybmUnO1xyXG4gICAgICAgIGNvbG9yOiAjOUI5QjlCO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogI0ZGNzc2QiAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5mb250LXdlaWdodCB7XHJcbiAgICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59IiwiLmZvb3Rlci10ZXh0IHAge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiV29vZGZvcmQgQm91cm5lXCI7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGRjc3NkIgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtd2VpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLWxvZ28ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-item {\n  padding: 10px !important;\n}\n\n.nav-item a {\n  color: #19E68C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9HOlxcTm93UHJvamVjdHNcXEFuZ3VsYXJfd29ya2FuYV83XzFcXHdlYnNpdGVcXFByb2plY3Qvc3JjXFxhcHBcXHNoYXJlZFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjs7QURHSTtFQUNJLGNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMxOUU2OEM7XHJcbiAgICB9XHJcbn0iLCIuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm5hdi1pdGVtIGEge1xuICBjb2xvcjogIzE5RTY4Qztcbn0iXX0= */");

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
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
    function NavbarComponent(location, router, AuthService) {
        this.location = location;
        this.router = router;
        this.AuthService = AuthService;
        this.isCollapsed = true;
        this.yScrollStack = [];
        this.islogin = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.islogin = _this.AuthService.isLoggedIn();
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
    NavbarComponent.prototype.logout = function () {
        this.AuthService.logout();
        window.location.reload();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

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

module.exports = __webpack_require__(/*! G:\NowProjects\Angular_workana_7_1\website\Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map