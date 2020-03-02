(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/as-jeweler/as-jeweler.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/as-jeweler/as-jeweler.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s8 offset-s2\">\n    <div class=\"card\">\n      <div class=\"sm-jumbotron center-align\">\n        <h2>Jeweller Registration</h2>\n      </div>\n        <form class=\"col s12 white\" #jewelerRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(jewelerRegistrationForm)\">\n          <div class=\"row\">\n            <div class=\"input-field col s6\"> \n              <input id=\"email\" type=\"text\" class=\"validate\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" [pattern]=\"emailPattern\" required >\n              <label for=\"email\">Email</label>\n              <span class=\"helper-text\" data-error=\"Invalid Email!\"></span>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"username\" class=\"validate\" type=\"text\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"user.username\" required >\n                <label for=\"username\">Username</label>\n                <span class=\"helper-text\" data-error=\"Required Username !\" ></span>\n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"input-field col s6\">\n                  <input id=\"password\" type=\"password\" class=\"validate\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" [pattern]=\"passwordPattern\" required >\n                  <label for=\"password\">Password</label>\n                  <span class=\"helper-text\" data-error=\"Password requires uppercase lowercase symbols and numbers!\"></span>\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"confirm_password\" type=\"password\" class=\"validate\" name=\"confirm_password\" #confirm_password=\"ngModel\" [(ngModel)]=\"user.confirm_password\" [pattern]=\"passwordPattern\" required >\n                  <label for=\"confirm_password\">Confirm Password</label>\n                  <span class=\"helper-text\" data-error=\"Password requires uppercase lowercase symbols and numbers!\"></span>\n              </div>\n          </div>\n          <div class=\"row\">\n            <h6>check these two option to confirm you are signing up as:</h6>\n              <p>\n                <label>\n                  <input name=\"IS_JEWELLER\" #IS_JEWELLER=\"ngModel\" type=\"radio\" id=\"tradio\" value=\"true\" [(ngModel)]=\"user.IS_JEWELLER\" required/>\n                  <span>As Jeweler</span>\n                </label>\n              </p>\n              <p>\n                <label>\n                  <input name=\"IS_JEWELLER\" #IS_JEWELLER=\"ngModel\" type=\"radio\" id=\"fradio\" value=\"false\" [(ngModel)]=\"user.IS_JEWELLER\" required/>\n                  <span>as Customer</span>\n                </label>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <button [disabled]=\"!jewelerRegistrationForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Register</button>\n\n                <hr>\n                <hr>\n                <button class=\"btn-large btn-submit\" type=\"submit\" (click)=jeweler()>Already a user login</button>\n              </div>\n          </div>\n        </form>\n    </div>\n  </div>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-view/create-view.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-view/create-view.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>create profile</h2>\n        </div>\n          <form class=\"col s12 white\" #createViewForm=\"ngForm\" (ngSubmit)=\"OnSubmit(createViewForm)\">\n            <div class=\"row\">\n              <div class=\"input-field col s6\"> \n                <input id=\"name_of_firm\" type=\"text\" class=\"validate\" name=\"NAME_OF_FIRM\" #NAME_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.NAME_OF_FIRM\"  required >\n                <label for=\"name_of_firm\">Name of Firm</label>\n                <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"address_of_firm\" class=\"validate\" type=\"text\" name=\"ADDRESS_OF_FIRM\" #ADDRESS_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.ADDRESS_OF_FIRM\" required  >\n                  <label for=\"address_of_firm\">ADDRESS OF FIRM</label>\n                  <span class=\"helper-text\" data-error=\"required!field\" data-success=\"right\"></span>\n\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"row col s6\"> \n                  <select class=\"browser-default\" name=\"CITY\" #CITY=\"ngModel\" [(ngModel)]=\"jeweller.CITY\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option  value=\"Pune\"> Pune</option>\n                    <option value=\"Mumbai\" >Mumbai</option>\n                    <option   value=\"Vadodra\" >Vadodra</option>\n                    <option   value=\"Ahmedabad\" >Ahmedabad</option>\n                  </select>\n                </div>\n                <div class=\"row col s6\">\n                  <select class=\"browser-default\" name=\"STATE\" #STATE=\"ngModel\" [(ngModel)]=\"jeweller.STATE\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option value=\"Maharashtra\"> Maharashtra</option>\n                    <option value=\"Gujrat\" >Gujrat</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_name\" type=\"text\" class=\"validate\" name=\"CONTACT_NAME\" #CONTACT_NAME=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NAME\" required >\n                  <label for=\"contact_name\">CONTACT_NAME</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"contact_number\" class=\"validate\" type=\"text\" name=\"CONTACT_NUMBER\" #CONTACT_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NUMBER\" required >\n                    <label for=\"contact_number\">CONTACT_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_mail_id\" type=\"text\" class=\"validate\" name=\"CONTACT_MAIL_ID\" #CONTACT_MAIL_ID=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_MAIL_ID\" [pattern]=\"emailPattern\" required >\n                  <label for=\"contact_mail_id\">CONTACT MAIL ID</label>\n                  <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"gst_number\" class=\"validate\" type=\"text\" name=\"GST_NUMBER\" #GST_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.GST_NUMBER\" required  >\n                    <label for=\"gst_number\">GST NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"GST Number should contain 15 characters\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"pan_number\" type=\"text\" class=\"validate\" name=\"PAN_NUMBER\" #PAN_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.PAN_NUMBER\" required >\n                  <label for=\"pan_number\">PAN NUMBER</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_name\" class=\"validate\" type=\"text\" name=\"OWNER_NAME\" #OWNER_NAME=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NAME\" required >\n                    <label for=\"owner_name\">OWNER_NAME</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n            <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_number\" type=\"text\" class=\"validate\" name=\"OWNER_NUMBER\" #OWNER_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NUMBER\" required >\n                    <label for=\"owner_number\">OWNER_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required Number!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_email\" type=\"text\" class=\"validate\" name=\"OWNER_EMAIL\" #OWNER_EMAIL=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_EMAIL\" [pattern]=\"emailPattern\" required >\n                    <label for=\"owner_email\">OWNER_EMAIL</label>\n                    <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!createViewForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Create My Profile</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createvie/createvie.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createvie/createvie.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Image Library</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\" id=\"ORNAMENT_TYPE\" required>\n              <label for=\"ORNAMENT_TYPE\">ORNAMENT_TYPE</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\" id=\"ORNAMENT_MATERIAL\" required>\n              <label for=\"ORNAMENT_MATERIAL\">ORNAMENT_MATERIAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" id=\"ORNAMENT_SHOPFOR\" required>\n              <label for=\"ORNAMENT_SHOPFOR\">ORNAMENT_SHOPFOR</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n              <label for=\"WEIGHT\">WEIGHT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" id=\"ORNAMENT_METAL\" required>\n              <label for=\"ORNAMENT_METAL\">ORNAMENT_METAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" id=\"ORNAMENT_OCCASION\" required>\n              <label for=\"ORNAMENT_OCCASION\">ORNAMENT_OCCASION</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\" id=\"ORNAMENT_GIFT\" required>\n              <label for=\"ORNAMENT_GIFT\">ORNAMENT_GIFT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\" id=\"ORNAMENT_THEME\" required>\n              <label for=\"ORNAMENT_THEME\">ORNAMENT_THEME</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\" id=\"ORNAMENT_CURATED_BY\" required>\n              <label for=\"ORNAMENT_CURATED_BY\">ORNAMENT_CURATED_BY</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" id=\"ORNAMENT_FESTIVAL\" required>\n              <label for=\"ORNAMENT_FESTIVAL\">ORNAMENT_FESTIVAL</label>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || !imageForm.valid\">Create new form</button>\n        </form>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createvieu/createvieu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createvieu/createvieu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" required>\n                  <option value=\"\" disabled selected>Choose your Ornament OCCASION</option>\n                  <option value=\"1\">Wedding</option>\n                  <option value=\"2\" >Anniversary</option>\n                  <option value=\"3\" >Evening</option>\n                  <option value=\"4\" >Work-Wear</option>\n                  <option value=\"5\">Everyday</option>\n                  <option value=\"6\">Birthday</option>\n                  <option value=\"7\">Engagement</option>\n                  <option value=\"8\">Graduation</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \"   >\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createviev/createviev.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createviev/createviev.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Occasion</option>\n                <option value=\"1\"> Wedding</option>\n                <option value=\"2\" >Anniversary</option>\n                <option value=\"3\" >Evening</option>\n                <option value=\"4\" >Work-Wear</option>\n                <option value=\"5\" >Everyday</option>\n                <option value=\"6\" >Birthday</option>\n                <option value=\"7\" >Engagement</option>\n                <option value=\"8\" >Graduation</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>customer works</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"blue-grey\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">Logo</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li>\n          <a (click)=\"Logout()\">Logout</a>\n          <a class=\"waves-effect waves-light btn-large\"  (click)=changepassword()>Change Password</a>\n        </li>\n      </ul>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jewelornam/jewelornam.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jewelornam/jewelornam.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Candidate Profile</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT,ORNAMENT_THEME,ORNAMENT_CURATED_BY,ORNAMENT_FESTIVAL,CAD_FILE,IMAGE_FILE_ONE,IMAGE_FILE_TWO,IMAGE_FILE_THREE)\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\" id=\"ORNAMENT_TYPE\" required>\n              <label for=\"ORNAMENT_TYPE\">Ornament Type</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\" id=\"ORNAMENT_MATERIAL\" required>\n              <label for=\"ORNAMENT_MATERIAL\">ORNAMENT_MATERIAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" id=\"ORNAMENT_SHOPFOR\" required>\n              <label for=\"ORNAMENT_SHOPFOR\">ORNAMENT SHOPFOR</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n              <label for=\"WEIGHT\">WEIGHT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" id=\"ORNAMENT_METAL\" required>\n              <label for=\"ORNAMENT_METAL\">ORNAMENT_METAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" id=\"ORNAMENT_OCCASION\" required>\n              <label for=\"ORNAMENT_OCCASION\">ORNAMENT OCCASION</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\" id=\"ORNAMENT_GIFT\" required>\n              <label for=\"ORNAMENT_GIFT\">ORNAMENT_GIFT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\" id=\"ORNAMENT_THEME\" required>\n              <label for=\"ORNAMENT_THEME\">ORNAMENT_THEME</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\" id=\"ORNAMENT_CURATED_BY\" required>\n              <label for=\"ORNAMENT_CURATED_BY\">ORNAMENT_CURATED_BY</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" id=\"ORNAMENT_FESTIVAL\" required>\n              <label for=\"ORNAMENT_FESTIVAL\">ORNAMENT_FESTIVAL</label>\n            </div>\n          </div>\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileoneInput($event.target.files)\">\n\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFiletwoInput($event.target.files)\">\n\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFilethreeInput($event.target.files)\">\n          \n          <button type=\"submit\" class=\"btn-large btn-submit\" >Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>User Login</h2>\n        </div> \n<div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\n    <i class=\"material-icons\">error</i> Incorrect username or password\n</div>\n<form #loginForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmit(username.value,password.value)\">\n   <div class=\"row\">\n     <div class=\"input-field col s12\">\n       <i class=\"material-icons prefix\">account_circle</i>\n       <input type=\"text\" #username ngModel name=\"username\" placeholder=\"username\" required>\n       <span>use lowercases</span>\n\n     </div>\n   </div>\n   <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">vpn_key</i>\n        <input type=\"password\" #password ngModel name=\"password\" placeholder=\"Password\" required>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\n        </div>\n      </div>\n</form>\n\n</div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/multiselect/multiselect.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multiselect/multiselect.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Image Library</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\" id=\"ORNAMENT_TYPE\" required>\n                    <option value=\"\" disabled selected>Choose</option>\n                    <option value=\"1\"> 1</option>\n                    <option value=\"2\" >2</option>\n                    <option value=\"3\" >3</option>\n                    <option value=\"4\" >4</option>\n\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n            </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <h6>check these two option to confirm you are signing up as:</h6>\n              <p>\n                <label>\n                  <input #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" type=\"radio\" id=\"oradio\" value=\"1\"  required/>\n                  <span>1 in ORNAMENT_FESTIVAL</span>\n                </label>\n              </p>\n              <p>\n                <label>\n                  <input #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" type=\"radio\" id=\"tradio\" value=\"2\"  required/>\n                  <span>2 in ORNAMENT_FESTIVAL</span>\n                </label>\n              </p>\n              <p>\n                <label>\n                  <input #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" type=\"radio\" id=\"rradio\" value=\"3\"  required/>\n                  <span>3 in ORNAMENT_FESTIVAL</span>\n                </label>\n              </p>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || !imageForm.valid\">Create Multi</button>\n        </form>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"blue-grey\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">Logo</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bangles/bangles.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bangles/bangles.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bangles</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BANGLE_SIZE,ORNAMENT_BANGLE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"5\" >Bangles</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n          \n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_BANGLE_STYLE ngModel name=\"ORNAMENT_BANGLE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Broad Bangles</option>\n                    <option value=\"2\" >Oval</option>\n                    <option value=\"3\" >Single Line</option>\n                    <option value=\"4\" >Thin Bangles</option>\n                    <option value=\"5\" >Stackable</option>\n                    <option value=\"6\" >Mens Kada</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>Select Your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your  Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Currated by</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                  <p>Select Your Bangle Size</p>\n                  <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BANGLE_SIZE; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BANGLE_SIZE ngModel name=\"ORNAMENT_BANGLE_SIZE\"  />\n                      <span>{{answer.BANGLE_SIZE}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n              </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\" >\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Bangles Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bracelet/bracelet.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bracelet/bracelet.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bracelet</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BRACELET_SIZE,ORNAMENT_BRACELET_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"4\" >Bracelet</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n            \n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_BRACELET_STYLE ngModel name=\"ORNAMENT_BRACELET_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Tennis</option>\n                    <option value=\"2\" >Flexible</option>\n                    <option value=\"3\" >Oval</option>\n                    <option value=\"4\" >Mangalsutra Bracelets</option>\n                    <option value=\"5\" >Chain Bracelets</option>\n                    <option value=\"6\" >Kids Bracelets</option>\n                </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p> Select your Occasion</p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated By</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                  <p> Select your Bracelet Size</p>\n\n                  <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BRACELET_SIZE; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BRACELET_SIZE ngModel name=\"ORNAMENT_BRACELET_SIZE\"  />\n                      <span>{{answer.BRACELET_SIZE}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n            </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Bracelet Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chain/chain.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chain/chain.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"6\" >Chain</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n\n\n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n            \n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p> Select your Occasion</p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p> Select your Curated by</p>\n\n                  <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                      <span>{{answer.CURATED_BY}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n            </div>         \n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select Your Chain Length</p>\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  />\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            \n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Chain Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chainwithpendant/chainwithpendant.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chainwithpendant/chainwithpendant.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain with Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>          \n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Pendant Style</option>\n                    <option value=\"1\">Casual </option>\n                    <option value=\"2\" >Initials</option>\n                    <option value=\"3\" >Mother-Daughter</option>\n                    <option value=\"4\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>Select Your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n\n                <p>Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Curated by</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                  <p>Select Your Chain Length</p>\n                  <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  />\n                      <span>{{answer.CHAIN_LENGTH}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n            </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your Chain With Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/change/change.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/change/change.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>rings</p>\n<!--div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_RING_SIZE,ORNAMENT_RING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(change)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Ringsize.ORNAMENT_RING_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Size(answer.pk)\" #ORNAMENT_RING_SIZE ngModel name=\"ORNAMENT_RING_SIZE\"  required/>\n                    <span>{{answer.RING_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_RING_STYLE ngModel name=\"ORNAMENT_RING_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bands</option>\n                    <option value=\"2\" >Casual Rings</option>\n                    <option value=\"3\" >Cocktail</option>\n                    <option value=\"4\" >Cluster</option>\n                    <option value=\"5\" >Bridal Set</option>\n                    <option value=\"6\" >Chain Rings</option>\n                    <option value=\"7\" >Midi Rings</option>\n                    <option value=\"8\" >Holo</option>\n                    <option value=\"9\" >Mangalsutra Rings</option>\n                    <option value=\"10\" >Flexi Rings</option>\n                    <option value=\"11\" >Half Eternity</option>\n                    <option value=\"12\" >Stackable</option>\n                    <option value=\"13\" >Twin Rings</option>\n                    <option value=\"14\" >Fashion</option>\n                    <option value=\"15\" >Religious</option>\n                    <option value=\"16\" >Wide Rings</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div-->\n\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"11\" >Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Casual</option>\n                  <option value=\"2\" >Initials</option>\n                  <option value=\"3\" >Mother-Daughter</option>\n                  <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>nosepin</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Nosepin</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NOSEPIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"3\" >Nosepin</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_NOSEPIN_STYLE ngModel name=\"ORNAMENT_NOSEPIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament nosepin STYLE</option>\n                    <option value=\"1\"> Wire</option>\n                    <option value=\"2\" >Ring</option>\n                    <option value=\"3\" >Screw</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Nosepin Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>bracelet\n\n</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bracelet</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BRACELET_SIZE,ORNAMENT_BRACELET_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"4\" >Bracelet</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BRACELET_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BRACELET_SIZE ngModel name=\"ORNAMENT_BRACELET_SIZE\"  required/>\n                    <span>{{answer.BRACELET_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_BRACELET_STYLE ngModel name=\"ORNAMENT_BRACELET_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Tennis</option>\n                    <option value=\"2\" >Flexible</option>\n                    <option value=\"3\" >Oval</option>\n                    <option value=\"4\" >Mangalsutra Bracelets</option>\n                    <option value=\"5\" >Chain Bracelets</option>\n                    <option value=\"6\" >Kids Bracelets</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Bracelet Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bangles</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BANGLE_SIZE,ORNAMENT_BANGLE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"5\" >Bangles</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BANGLE_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BANGLE_SIZE ngModel name=\"ORNAMENT_BANGLE_SIZE\"  required/>\n                    <span>{{answer.BANGLE_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_BANGLE_STYLE ngModel name=\"ORNAMENT_BANGLE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Broad Bangles</option>\n                    <option value=\"2\" >Oval</option>\n                    <option value=\"3\" >Single Line</option>\n                    <option value=\"4\" >Thin Bangles</option>\n                    <option value=\"5\" >Stackable</option>\n                    <option value=\"6\" >Mens Kada</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Bangles Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>chain</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"6\" >Chain</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  required/>\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Chain Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain with Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  required/>\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\">Casual </option>\n                    <option value=\"2\" >Initials</option>\n                    <option value=\"3\" >Mother-Daughter</option>\n                    <option value=\"4\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your Chain With Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n--><p>hainwithpendant</p>\n\n<P>culllink</P><!--\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Cuff Link</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"13\" >cuff links</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Cuff Link Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>mangalsutra</p><!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Mangalsutra</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          \n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Mangalsutra Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n\n<p>necklace</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Necklace</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NECKLACE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"8\" >Necklace</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_NECKLACE_STYLE ngModel name=\"ORNAMENT_NECKLACE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bar Necklace</option>\n                    <option value=\"2\" >Lariat</option>\n                    <option value=\"3\" >Y Necklace</option>\n                    <option value=\"4\" >Mala</option>\n                    <option value=\"5\" >Charms</option>\n                    <option value=\"6\" >Long Necklace</option>\n                    <option value=\"7\" >Religious</option>\n                    <option value=\"8\" >Multi-Layered</option>\n                    <option value=\"9\" >Casual Necklace</option>\n                    <option value=\"10\" >Everyday Wears</option>\n                    <option value=\"11\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Necklace Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>sets</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Sets</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"10\" >Sets</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Sets Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>Pendant with Ear ring</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant with Ear ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                  <p>select your Occasion/p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <p>select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <p>select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <p>select your Curated By</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <p>select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Drops and Dangler</option>\n                    <option value=\"2\" >Studs and Tops</option>\n                    <option value=\"3\" >Hoops and Huggies</option>\n                    <option value=\"4\" >Jhumkas</option>\n                    <option value=\"5\" >Sui Dhaga</option>\n                    <option value=\"6\" >Ear Cuffs and Hugs</option>\n                    <option value=\"7\" >Chandeliers</option>\n                    <option value=\"8\" >Chand Bali</option>\n                    <option value=\"9\" >Mismatched</option>\n                    <option value=\"10\" >Multi Pierced</option>\n                    <option value=\"11\" >Ear Jackets</option>\n                    <option value=\"12\" >Stud with Chain Clips</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Casual</option>\n                  <option value=\"2\" >Initials</option>\n                  <option value=\"3\" >Mother-Daughter</option>\n                  <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant with Ear ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/cufflink/cufflink.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/cufflink/cufflink.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Cuff Link</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"13\" >cuff links</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n            \n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>Select Your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>Select Your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>Select Your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Cuff Link Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/mangalsutra/mangalsutra.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/mangalsutra/mangalsutra.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Mangalsutra</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                    <p>Select your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                  <p>Select your Gift type</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                  <p>SSelect Your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                  <p>Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Mangalsutra Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/necklace/necklace.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/necklace/necklace.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Necklace</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NECKLACE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"8\" >Necklace</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_NECKLACE_STYLE ngModel name=\"ORNAMENT_NECKLACE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bar Necklace</option>\n                    <option value=\"2\" >Lariat</option>\n                    <option value=\"3\" >Y Necklace</option>\n                    <option value=\"4\" >Mala</option>\n                    <option value=\"5\" >Charms</option>\n                    <option value=\"6\" >Long Necklace</option>\n                    <option value=\"7\" >Religious</option>\n                    <option value=\"8\" >Multi-Layered</option>\n                    <option value=\"9\" >Casual Necklace</option>\n                    <option value=\"10\" >Everyday Wears</option>\n                    <option value=\"11\" >Personalised</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>Select your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>           \n              <ul class=\"collection answer\">\n\n                <p>Select your Gift type</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select  your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Necklace Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaearringtype/ornaearringtype.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaearringtype/ornaearringtype.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ear Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"2\" >Ear Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n              <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Drops and Dangler</option>\n                  <option value=\"2\" >Studs and Tops</option>\n                  <option value=\"3\" >Hoops and Huggies</option>\n                  <option value=\"4\" >Jhumkas</option>\n                  <option value=\"5\" >Sui Dhaga</option>\n                  <option value=\"6\" >Ear Cuffs and Hugs</option>\n                  <option value=\"7\" >Chandeliers</option>\n                  <option value=\"8\" >Chand Bali</option>\n                  <option value=\"9\" >Mismatched</option>\n                  <option value=\"10\" >Multi Pierced</option>\n                  <option value=\"11\" >Ear Jackets</option>\n                  <option value=\"12\" >Stud with Chain Clips</option>\n              </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Occasion</p>\n\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ear Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornamentnosepin/ornamentnosepin.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornamentnosepin/ornamentnosepin.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Nosepin</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NOSEPIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"3\" >Nosepin</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n              <select class=\"browser-default\" #ORNAMENT_NOSEPIN_STYLE ngModel name=\"ORNAMENT_NOSEPIN_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament nosepin STYLE</option>\n                  <option value=\"1\"> Wire</option>\n                  <option value=\"2\" >Ring</option>\n                  <option value=\"3\" >Screw</option>\n              </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                  <p> Select your Occasion</p>\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Gift Type</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \"> \n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Nosepin Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaringtype/ornaringtype.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaringtype/ornaringtype.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_RING_SIZE,ORNAMENT_RING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n              <select class=\"browser-default\" #ORNAMENT_RING_STYLE ngModel name=\"ORNAMENT_RING_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Bands</option>\n                  <option value=\"2\" >Casual Rings</option>\n                  <option value=\"3\" >Cocktail</option>\n                  <option value=\"4\" >Cluster</option>\n                  <option value=\"5\" >Bridal Set</option>\n                  <option value=\"6\" >Chain Rings</option>\n                  <option value=\"7\" >Midi Rings</option>\n                  <option value=\"8\" >Holo</option>\n                  <option value=\"9\" >Mangalsutra Rings</option>\n                  <option value=\"10\" >Flexi Rings</option>\n                  <option value=\"11\" >Half Eternity</option>\n                  <option value=\"12\" >Stackable</option>\n                  <option value=\"13\" >Twin Rings</option>\n                  <option value=\"14\" >Fashion</option>\n                  <option value=\"15\" >Religious</option>\n                  <option value=\"16\" >Wide Rings</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selectingme</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Occasion</p>\n\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(change)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated by</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Ring Size</p>\n                <ng-container *ngFor =\"let answer of Ringsize.ORNAMENT_RING_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_RING_SIZE ngModel name=\"ORNAMENT_RING_SIZE\"  />\n                    <span>{{answer.RING_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendant/pendant.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendant/pendant.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"11\" >Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n            \n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Casual</option>\n                    <option value=\"2\" >Initials</option>\n                    <option value=\"3\" >Mother-Daughter</option>\n                    <option value=\"4\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                    <p>Select your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Gift Type</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select Your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendantearringtype/pendantearringtype.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendantearringtype/pendantearringtype.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant with Ear ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Drops and Dangler</option>\n                  <option value=\"2\" >Studs and Tops</option>\n                  <option value=\"3\" >Hoops and Huggies</option>\n                  <option value=\"4\" >Jhumkas</option>\n                  <option value=\"5\" >Sui Dhaga</option>\n                  <option value=\"6\" >Ear Cuffs and Hugs</option>\n                  <option value=\"7\" >Chandeliers</option>\n                  <option value=\"8\" >Chand Bali</option>\n                  <option value=\"9\" >Mismatched</option>\n                  <option value=\"10\" >Multi Pierced</option>\n                  <option value=\"11\" >Ear Jackets</option>\n                  <option value=\"12\" >Stud with Chain Clips</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                <option value=\"1\"> Casual</option>\n                <option value=\"2\" >Initials</option>\n                <option value=\"3\" >Mother-Daughter</option>\n                <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Occasion</p>\n\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant with Ear ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/sets/sets.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/sets/sets.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Sets</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"10\" >Sets</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                    <p>select your Occasion</p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Curated By</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <p>Upload your 3D Model</p>\n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>Upload your Image One</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>Upload your Image Two</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>Upload your Image Three</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Sets Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament1multiselect/ornament1multiselect.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament1multiselect/ornament1multiselect.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                  <ng-container>\n                      <li>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Wedding\" value =\"1\" (click)=\"Wedding()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Wedding</span>\n                        </label>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Anniversary\" value =\"2\" (click)=\"Anniversary()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Anniversary</span>\n                        </label>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Evening\" value =\"3\" (click)=\"Answer()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Evening</span>\n                        </label>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Work-Wear\" value =\"4\" (click)=\"Answer()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Work-Wear</span>\n                        </label>\n                        \n                      </li>\n                     \n\n                  </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \"   >\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentcufflink/ornamentcufflink.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentcufflink/ornamentcufflink.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n          <div class=\"card-panel blue-grey\">\n            <h4 class=\"center white-text\">Choose your Ornament type</h4>\n          </div>\n    \n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=ring()>ring</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=earring()>earring</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=nosepin()>nosepin</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=bracelet()>bracelet</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=bangles()>bangles</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=chain()>chain</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=chainwithpendant()>chain with pendant</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=necklace()>necklace</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=Mangalsutra()>Mangalsutra</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=sets()>sets</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=pendant()>pendant</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=pendantwithearing()>pendant with earing</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=cufflink()>cufflink</button><hr>\n      \n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentmultiselect/ornamentmultiselect.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentmultiselect/ornamentmultiselect.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentread/ornamentread.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentread/ornamentread.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s12 \">\n    <div class=\"card\" *ngFor=\"let question of data.results\">\n      <div class=\"card-image\">\n        <img src=\"{{question.ornament_file_field.IMAGE_FILE_ONE}}\">\n        <span class=\"card-title\"></span>\n      </div>\n      <div class=\"card-content\">\n        <p>{{question.ORNAMENT_ID}}</p>\n        <p>{{question.JEWELLER_ID}}</p>\n        <p>{{question.WEIGHT}}</p>\n      </div>\n      <button class=\"btn-large btn-submit\" type=\"submit\" (click)=\"read(question.ORNAMENT_ID)\">More About this</button>\n\n      <!--div class=\"card-action\">\n        <a href=\"#\">This is a link</a>\n      </div-->\n    </div>\n  </div>\n</div>\n<ul class=\"pagination\">\n  <li class=\"disabled\"><a href=\"#!\"><i class=\"material-icons\">chevron_left</i></a></li>\n  <li class=\"waves-effect\"><a (click)=\"page1()\">1</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page2()\">2</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page3()\">3</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page4()\">4</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page5()\">5</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page6()\">6</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page7()\">7</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page8()\">8</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page9()\">9</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page10()\">10</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page11()\">11</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page12()\">12</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page13()\">13</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page14()\">14</a></li>\n\n  <li class=\"waves-effect\"><a href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></li>\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/neck/neck.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/neck/neck.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/ornaments.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/ornaments.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 \">\n        <div class=\"card grey\">\n          <div class=\"card-tabs\">\n            <ul class=\"tabs tabs-fixed-width tabs-transparent\">\n              <li class=\"tab\">\n                <a routerLink='/rings' routerLinkActive='active' >Ring</a>\n              </li>\n              <li class=\"tab\">\n                <a  routerLink='/neck' routerLinkActive='active'>neck</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-content white\">\n            <div class=\"row\">\n              <router-outlet></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/rings/rings.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/rings/rings.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentupdate/ornamentupdate.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentupdate/ornamentupdate.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" required>\n                  <option value=\"\" disabled selected>Choose your Ornament OCCASION</option>\n                  <option value=\"1\">Wedding</option>\n                  <option value=\"2\" >Anniversary</option>\n                  <option value=\"3\" >Evening</option>\n                  <option value=\"4\" >Work-Wear</option>\n                  <option value=\"5\">Everyday</option>\n                  <option value=\"6\">Birthday</option>\n                  <option value=\"7\">Engagement</option>\n                  <option value=\"8\">Graduation</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \"   >\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/password-change/password-change.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-change/password-change.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>Change Password</h2>\n        </div>\n          <form class=\"col s12 white\" #passwordChangeForm=\"ngForm\" (ngSubmit)=\"OnSubmit(passwordChangeForm)\">\n            <div class=\"row\">\n              <div class=\"input-feild col s6\"> \n                <input type=\"password\" class=\"validate\"\n                 name=\"old_password\" #old_password=\"ngModel\"\n                  [(ngModel)]=\"password.old_password\" required placeholder=\"old_password\">\n              </div>\n              <div class=\"input-feild col s6\">\n                  <input class=\"validate\" type=\"password\"\n                   name=\"new_password\" #new_password=\"ngModel\" \n                   [(ngModel)]=\"password.new_password\" required  placeholder=\"New Password\">\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input_feild col s6\">\n                    <input type=\"password\" class=\"validate\" \n                    name=\"confirm_new_password\" #confirm_new_password=\"ngModel\" \n                    [(ngModel)]=\"password.confirm_new_password\" required placeholder=\"Password\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!passwordChangeForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Change Password</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/radiofill/radiofill.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/radiofill/radiofill.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>create profile</h2>\n        </div>\n          <form class=\"col s12 white\" #createViewForm=\"ngForm\" (ngSubmit)=\"OnSubmit(createViewForm)\">\n            <div class=\"row\">\n              <div class=\"input-field col s6\"> \n                <input id=\"name_of_firm\" type=\"text\" class=\"validate\" name=\"NAME_OF_FIRM\" #NAME_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.NAME_OF_FIRM\"  required >\n                <label for=\"name_of_firm\">Name of Firm</label>\n                <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"address_of_firm\" class=\"validate\" type=\"text\" name=\"ADDRESS_OF_FIRM\" #ADDRESS_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.ADDRESS_OF_FIRM\" required  >\n                  <label for=\"address_of_firm\">ADDRESS OF FIRM</label>\n                  <span class=\"helper-text\" data-error=\"required!field\" data-success=\"right\"></span>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"row col s6\"> \n                  <select class=\"browser-default\" name=\"CITY\" #CITY=\"ngModel\" [(ngModel)]=\"jeweller.CITY\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option  value=\"Pune\"> Pune</option>\n                    <option value=\"Mumbai\" >Mumbai</option>\n                    <option   value=\"Vadodra\" >Vadodra</option>\n                    <option   value=\"Ahmedabad\" >Ahmedabad</option>\n                  </select>\n                </div>\n                <div class=\"row col s6\">\n                  <select class=\"browser-default\" name=\"STATE\" #STATE=\"ngModel\" [(ngModel)]=\"jeweller.STATE\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option value=\"Maharashtra\"> Maharashtra</option>\n                    <option value=\"Gujrat\" >Gujrat</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_name\" type=\"text\" class=\"validate\" name=\"CONTACT_NAME\" #CONTACT_NAME=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NAME\" required >\n                  <label for=\"contact_name\">CONTACT_NAME</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"contact_number\" class=\"validate\" type=\"text\" name=\"CONTACT_NUMBER\" #CONTACT_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NUMBER\" value=\"\" [pattern]=\"panpattern\" required >\n                    <label for=\"contact_number\">CONTACT_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required 10 character!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_mail_id\" type=\"text\" class=\"validate\" name=\"CONTACT_MAIL_ID\" #CONTACT_MAIL_ID=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_MAIL_ID\" value=\"\" [pattern]=\"emailPattern\" required >\n                  <label for=\"contact_mail_id\">CONTACT MAIL ID</label>\n                  <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"gst_number\" class=\"validate\" type=\"text\" name=\"GST_NUMBER\" #GST_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.GST_NUMBER\" [pattern]=\"gstpattern\" required  >\n                    <label for=\"gst_number\">GST NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"GST Number should contain 15 characters\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"pan_number\" type=\"text\" class=\"validate\" name=\"PAN_NUMBER\" #PAN_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.PAN_NUMBER\" [pattern]=\"panpattern\" required >\n                  <label for=\"pan_number\">PAN NUMBER</label>\n                  <span class=\"helper-text\" data-error=\"Required 10 charaters!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_name\" class=\"validate\" type=\"text\" name=\"OWNER_NAME\" #OWNER_NAME=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NAME\" required >\n                    <label for=\"owner_name\">OWNER_NAME</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <p>\n                <label>\n                  <input type=\"checkbox\"  id=\"same\" name=\"same\" (change)= \"addres()\" />\n                  <span>Same As Above</span>\n                </label>\n              </p>\n              <p>edit one word of below field to make form validate</p>\n\n              \n              <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_number\" type=\"text\" class=\"validate\" name=\"OWNER_NUMBER\" #OWNER_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NUMBER\" value=\"\" [pattern]=\"panpattern\" required placeholder=\"OWNER_NUMBER\">\n                    <span class=\"helper-text\" data-error=\"Required 10 digit Number!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_email\" type=\"text\" class=\"validate\" name=\"OWNER_EMAIL\" #OWNER_EMAIL=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_EMAIL\"  [pattern]=\"emailPattern\" value =\"\" required placeholder=\"OWNER_EMAIL\">\n                    <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!createViewForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Create My Profile</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>\n\n \n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/read/read.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/read/read.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"blue-grey\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Logo</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li>\n        <a (click)=\"Logout()\">Logout</a>\n        <a class=\"waves-effect waves-light btn-large\"  (click)=changepassword()>Change Password</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<hr>\n<div class=\"row\" >\n    <div class=\"col s8 offset-s2\">\n        <div class=\"sm-jumbotron center-align\">\n          <h5>Your Profile</h5>\n        </div>\n        <div class=\"card blue-white darken-1\" *ngIf =\"data.data\" >\n          <div class=\"card_content white_text\" >\n            <p><strong>Name of Your Firm : </strong> {{data.data.NAME_OF_FIRM}}</p>\n            <p><strong>Address OF  Your Firm : </strong> {{data.data.ADDRESS_OF_FIRM}}</p>\n            <p><strong>City : </strong>{{data.data.CITY}}</p>\n            <p><strong>STATE : </strong> {{data.data.STATE}}</p>\n            <p><strong>Your Contact Name : </strong> {{data.data.CONTACT_NAME}}</p>\n            <p><strong> Your Contact Number : </strong> {{data.data.CONTACT_NUMBER}}</p>\n            <p><strong> Your Contact Mail ID : </strong>{{data.data.CONTACT_MAIL_ID}}</p>\n            <p><strong>GST Number : </strong>{{data.data.GST_NUMBER}}</p>\n            <p><strong>Pan Number: </strong>{{data.data.PAN_NUMBER}}</p>\n            <p><strong>Owner Name: </strong>{{data.data.OWNER_NAME}}</p>\n            <p><strong>Owner Number : </strong> {{data.data.OWNER_NUMBER}}</p>\n            <p><strong>Owner Email : </strong> {{data.data.OWNER_EMAIL}}</p>\n            <p><strong>Username : </strong>{{data.data.username}}</p> \n          </div>\n        </div>\n        <div class=\"sm-jumbotron center-align\">\n            <a class=\"waves-effect waves-light btn-large\"  (click)=update()>Update</a>\n          </div>\n          <hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=ornament()>Ornament</button>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/readspecific/readspecific.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/readspecific/readspecific.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col s10 offset-s1\">\n      <div class=\"sm-jumbotron center-align\">\n        <h5>Your Product Description</h5>\n      </div>\n      <div class=\"card\" *ngIf=\"data.ornament_info\">\n        <div class=\"card-image\">\n          <img src=\"{{data.ornament_filefield.IMAGE_FILE_ONE}}\">\n          <span class=\"card-title\">Card Title</span>\n        </div>\n        <div class=\"card-content col s5 \">\n            <p><strong>ORNAMENT_TYPE : </strong>{{data.ornament_info.ORNAMENT_TYPE}}</p>\n            <p><strong>ORNAMENT_MATERIAL : </strong>{{data.ornament_info.ORNAMENT_MATERIAL}}</p>\n            <p><strong>ORNAMENT_SHOPFOR : </strong>{{data.ornament_info.ORNAMENT_SHOPFOR}}</p>\n            <p><strong>WEIGHT : </strong>{{data.ornament_info.WEIGHT}}</p>\n            <p><strong>ornament_id : </strong>{{data.ornament_info.ornament_id}}</p>\n        </div>\n        <div class=\"card-content col s5\" >\n            <p><strong>ORNAMENT_METAL : </strong>{{data.ornament_category.ORNAMENT_METAL}}</p>\n            <p><strong>ORNAMENT_OCCASION : </strong>{{data.ornament_category.ORNAMENT_OCCASION}}</p>\n            <p><strong>ORNAMENT_GIFT : </strong>{{data.ornament_category.ORNAMENT_GIFT}}</p>\n            <p><strong>ORNAMENT_THEME : </strong>{{data.ornament_category.ORNAMENT_THEME}}</p>\n            <p><strong>ORNAMENT_CURATED_BY : </strong>{{data.ornament_category.ORNAMENT_CURATED_BY}}</p>\n            <p><strong>ORNAMENT_FESTIVAL : </strong>{{data.ornament_category.ORNAMENT_FESTIVAL}}</p>\n          </div>\n  \n        <!--div class=\"card-action\">\n          <a href=\"#\">This is a link</a>\n        </div-->\n\n  \n        \n  \n        <!--div class=\"card-action\">\n          <a href=\"#\">This is a link</a>\n        </div-->\n      </div>\n      <button class=\"btn-large btn-submit\" type=\"submit\" (click)=\"update()\">Update this Ornament</button>\n\n      <button class=\"btn-large btn-submit\" type=\"submit\" (click)=\"delete()\">Delete This Ornament</button>\n\n    </div>\n  </div>\n\n\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/chainpendat/chainpendat.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/chainpendat/chainpendat.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>chainpendat works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/earrings/earrings.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/earrings/earrings.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>earrings works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/nosepin/nosepin.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/nosepin/nosepin.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>nosepin works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/pendantearring/pendantearring.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/pendantearring/pendantearring.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pendantearring works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>Update</h2>\n        </div>\n        <form class=\"col s12 white\" #updateForm=\"ngForm\" (ngSubmit)=\"OnSubmit(updateForm)\">\n            <div class=\"row\">\n              <div class=\"input-field col s6\"> \n                <input id=\"name_of_firm\" type=\"text\" class=\"validate\" name=\"NAME_OF_FIRM\" #NAME_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.NAME_OF_FIRM\"  required >\n                <label for=\"name_of_firm\">Name of Firm</label>\n                <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"address_of_firm\" class=\"validate\" type=\"text\" name=\"ADDRESS_OF_FIRM\" #ADDRESS_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.ADDRESS_OF_FIRM\" required  >\n                  <label for=\"address_of_firm\">ADDRESS OF FIRM</label>\n                  <span class=\"helper-text\" data-error=\"required!field\" data-success=\"right\"></span>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"row col s6\"> \n                  <select class=\"browser-default\" name=\"CITY\" #CITY=\"ngModel\" [(ngModel)]=\"jeweller.CITY\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option  value=\"Pune\"> Pune</option>\n                    <option value=\"Mumbai\" >Mumbai</option>\n                    <option   value=\"Vadodra\" >Vadodra</option>\n                    <option   value=\"Ahmedabad\" >Ahmedabad</option>\n                  </select>\n                </div>\n                <div class=\"row col s6\">\n                  <select class=\"browser-default\" name=\"STATE\" #STATE=\"ngModel\" [(ngModel)]=\"jeweller.STATE\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option value=\"Maharashtra\"> Maharashtra</option>\n                    <option value=\"Gujrat\" >Gujrat</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_name\" type=\"text\" class=\"validate\" name=\"CONTACT_NAME\" #CONTACT_NAME=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NAME\" required >\n                  <label for=\"contact_name\">CONTACT_NAME</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"contact_number\" class=\"validate\" type=\"text\" name=\"CONTACT_NUMBER\" #CONTACT_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NUMBER\" value=\"\" [pattern]=\"panpattern\" required >\n                    <label for=\"contact_number\">CONTACT_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required 10 character!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_mail_id\" type=\"text\" class=\"validate\" name=\"CONTACT_MAIL_ID\" #CONTACT_MAIL_ID=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_MAIL_ID\" value=\"\" [pattern]=\"emailPattern\" required >\n                  <label for=\"contact_mail_id\">CONTACT MAIL ID</label>\n                  <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"gst_number\" class=\"validate\" type=\"text\" name=\"GST_NUMBER\" #GST_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.GST_NUMBER\" [pattern]=\"gstpattern\" required  >\n                    <label for=\"gst_number\">GST NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"GST Number should contain 15 characters\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"pan_number\" type=\"text\" class=\"validate\" name=\"PAN_NUMBER\" #PAN_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.PAN_NUMBER\" [pattern]=\"panpattern\" required >\n                  <label for=\"pan_number\">PAN NUMBER</label>\n                  <span class=\"helper-text\" data-error=\"Required 10 charaters!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_name\" class=\"validate\" type=\"text\" name=\"OWNER_NAME\" #OWNER_NAME=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NAME\" required >\n                    <label for=\"owner_name\">OWNER_NAME</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <p>\n                <label>\n                  <input type=\"checkbox\"  id=\"same\" name=\"same\" (change)= \"addres()\" />\n                  <span>Same As Above</span>\n                </label>\n              </p>\n              <p>edit one word of below field to make form validate</p>\n\n              \n              <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_number\" type=\"text\" class=\"validate\" name=\"OWNER_NUMBER\" #OWNER_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NUMBER\" value=\"\" [pattern]=\"panpattern\" required placeholder=\"OWNER_NUMBER\">\n                    <span class=\"helper-text\" data-error=\"Required 10 digit Number!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_email\" type=\"text\" class=\"validate\" name=\"OWNER_EMAIL\" #OWNER_EMAIL=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_EMAIL\"  [pattern]=\"emailPattern\" value =\"\" required placeholder=\"OWNER_EMAIL\">\n                    <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <button [disabled]=\"!updateForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Update My Profile</button>\n              </div>\n          </div>\n        </form>\n    </div>\n  </div>\n</div>\n\n \n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<a class=\"waves-effect waves-light btn-large\"  (click)=jeweler()>Sign Up as Jeweler</a>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./as-jeweler/as-jeweler.component */ "./src/app/as-jeweler/as-jeweler.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-change/password-change.component */ "./src/app/password-change/password-change.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-view/create-view.component */ "./src/app/create-view/create-view.component.ts");
/* harmony import */ var _read_read_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./read/read.component */ "./src/app/read/read.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ornaments/ornaments.component */ "./src/app/ornaments/ornaments.component.ts");
/* harmony import */ var _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ornaments/rings/rings.component */ "./src/app/ornaments/rings/rings.component.ts");
/* harmony import */ var _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ornaments/neck/neck.component */ "./src/app/ornaments/neck/neck.component.ts");
/* harmony import */ var _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./createvie/createvie.component */ "./src/app/createvie/createvie.component.ts");
/* harmony import */ var _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./createviev/createviev.component */ "./src/app/createviev/createviev.component.ts");
/* harmony import */ var _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./multiselect/multiselect.component */ "./src/app/multiselect/multiselect.component.ts");
/* harmony import */ var _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./radiofill/radiofill.component */ "./src/app/radiofill/radiofill.component.ts");
/* harmony import */ var _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./createvieu/createvieu.component */ "./src/app/createvieu/createvieu.component.ts");
/* harmony import */ var _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ornamentread/ornamentread.component */ "./src/app/ornamentread/ornamentread.component.ts");
/* harmony import */ var _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ornamentupdate/ornamentupdate.component */ "./src/app/ornamentupdate/ornamentupdate.component.ts");
/* harmony import */ var _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ornamentmultiselect/ornamentmultiselect.component */ "./src/app/ornamentmultiselect/ornamentmultiselect.component.ts");
/* harmony import */ var _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ornament1multiselect/ornament1multiselect.component */ "./src/app/ornament1multiselect/ornament1multiselect.component.ts");
/* harmony import */ var _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ornament/ornaringtype/ornaringtype.component */ "./src/app/ornament/ornaringtype/ornaringtype.component.ts");
/* harmony import */ var _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ornament/ornaearringtype/ornaearringtype.component */ "./src/app/ornament/ornaearringtype/ornaearringtype.component.ts");
/* harmony import */ var _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ornament/pendantearringtype/pendantearringtype.component */ "./src/app/ornament/pendantearringtype/pendantearringtype.component.ts");
/* harmony import */ var _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ornament/ornamentnosepin/ornamentnosepin.component */ "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts");
/* harmony import */ var _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ornament/bracelet/bracelet.component */ "./src/app/ornament/bracelet/bracelet.component.ts");
/* harmony import */ var _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ornament/bangles/bangles.component */ "./src/app/ornament/bangles/bangles.component.ts");
/* harmony import */ var _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ornament/chainwithpendant/chainwithpendant.component */ "./src/app/ornament/chainwithpendant/chainwithpendant.component.ts");
/* harmony import */ var _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ornament/mangalsutra/mangalsutra.component */ "./src/app/ornament/mangalsutra/mangalsutra.component.ts");
/* harmony import */ var _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ornament/necklace/necklace.component */ "./src/app/ornament/necklace/necklace.component.ts");
/* harmony import */ var _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ornament/chain/chain.component */ "./src/app/ornament/chain/chain.component.ts");
/* harmony import */ var _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ornament/pendant/pendant.component */ "./src/app/ornament/pendant/pendant.component.ts");
/* harmony import */ var _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ornament/sets/sets.component */ "./src/app/ornament/sets/sets.component.ts");
/* harmony import */ var _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ornament/cufflink/cufflink.component */ "./src/app/ornament/cufflink/cufflink.component.ts");
/* harmony import */ var _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ornamentcufflink/ornamentcufflink.component */ "./src/app/ornamentcufflink/ornamentcufflink.component.ts");
/* harmony import */ var _readspecific_readspecific_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./readspecific/readspecific.component */ "./src/app/readspecific/readspecific.component.ts");







































const routes = [
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'jeweler', component: _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_4__["AsJewelerComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'changepassword', component: _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_7__["PasswordChangeComponent"] },
    { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"] },
    { path: 'createview', component: _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_9__["CreateViewComponent"] },
    { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"] },
    { path: 'read', component: _read_read_component__WEBPACK_IMPORTED_MODULE_10__["ReadComponent"] },
    { path: 'forms', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"] },
    { path: 'orna', component: _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_15__["CreatevieComponent"] },
    { path: 'ornviev', component: _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_16__["CreatevievComponent"] },
    { path: 'ornvieu', component: _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_19__["CreatevieuComponent"] },
    { path: 'multisell', component: _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_17__["MultiselectComponent"] },
    { path: 'radiofill', component: _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_18__["RadiofillComponent"] },
    { path: 'ornamentread', component: _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_20__["OrnamentreadComponent"] },
    { path: 'ornamentupdate', component: _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_21__["OrnamentupdateComponent"] },
    { path: 'ornamentmultiselect', component: _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_22__["OrnamentmultiselectComponent"] },
    { path: 'Ornament1multiselect', component: _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_23__["Ornament1multiselectComponent"] },
    { path: 'Ornaringtype', component: _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_24__["OrnaringtypeComponent"] },
    { path: 'Ornaearringtype', component: _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_25__["OrnaearringtypeComponent"] },
    { path: 'Pendantearringtype', component: _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_26__["PendantearringtypeComponent"] },
    { path: 'Bangles', component: _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_29__["BanglesComponent"] },
    { path: 'Bracelet', component: _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_28__["BraceletComponent"] },
    { path: 'chain', component: _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_33__["ChainComponent"] },
    { path: 'chainwithpendant', component: _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_30__["ChainwithpendantComponent"] },
    { path: 'mangalsutra', component: _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_31__["MangalsutraComponent"] },
    { path: 'Necklace', component: _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_32__["NecklaceComponent"] },
    { path: 'Pendant', component: _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_34__["PendantComponent"] },
    { path: 'set', component: _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_35__["SetsComponent"] },
    { path: 'cufflink', component: _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_36__["CufflinkComponent"] },
    { path: 'nosepin', component: _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_27__["OrnamentnosepinComponent"] },
    { path: 'types', component: _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_37__["OrnamentcufflinkComponent"] },
    { path: 'readSpecific', component: _readspecific_readspecific_component__WEBPACK_IMPORTED_MODULE_38__["ReadspecificComponent"] },
    { path: 'rings', component: _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_12__["OrnamentsComponent"],
        children: [{ path: '', component: _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_13__["RingsComponent"] }]
    },
    { path: 'neck', component: _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_12__["OrnamentsComponent"],
        children: [{ path: '', component: _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_14__["NeckComponent"] }]
    },
    { path: '', redirectTo: '/jeweler', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'startUp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./as-jeweler/as-jeweler.component */ "./src/app/as-jeweler/as-jeweler.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./password-change/password-change.component */ "./src/app/password-change/password-change.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-view/create-view.component */ "./src/app/create-view/create-view.component.ts");
/* harmony import */ var _read_read_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./read/read.component */ "./src/app/read/read.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ornaments/ornaments.component */ "./src/app/ornaments/ornaments.component.ts");
/* harmony import */ var _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ornaments/rings/rings.component */ "./src/app/ornaments/rings/rings.component.ts");
/* harmony import */ var _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ornaments/neck/neck.component */ "./src/app/ornaments/neck/neck.component.ts");
/* harmony import */ var _jewelornam_jewelornam_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./jewelornam/jewelornam.component */ "./src/app/jewelornam/jewelornam.component.ts");
/* harmony import */ var _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./createvie/createvie.component */ "./src/app/createvie/createvie.component.ts");
/* harmony import */ var _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./createviev/createviev.component */ "./src/app/createviev/createviev.component.ts");
/* harmony import */ var _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./multiselect/multiselect.component */ "./src/app/multiselect/multiselect.component.ts");
/* harmony import */ var _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./radiofill/radiofill.component */ "./src/app/radiofill/radiofill.component.ts");
/* harmony import */ var _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./createvieu/createvieu.component */ "./src/app/createvieu/createvieu.component.ts");
/* harmony import */ var _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ornamentread/ornamentread.component */ "./src/app/ornamentread/ornamentread.component.ts");
/* harmony import */ var _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ornamentupdate/ornamentupdate.component */ "./src/app/ornamentupdate/ornamentupdate.component.ts");
/* harmony import */ var _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ornamentmultiselect/ornamentmultiselect.component */ "./src/app/ornamentmultiselect/ornamentmultiselect.component.ts");
/* harmony import */ var _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ornament1multiselect/ornament1multiselect.component */ "./src/app/ornament1multiselect/ornament1multiselect.component.ts");
/* harmony import */ var _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ornament/ornaringtype/ornaringtype.component */ "./src/app/ornament/ornaringtype/ornaringtype.component.ts");
/* harmony import */ var _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ornament/ornaearringtype/ornaearringtype.component */ "./src/app/ornament/ornaearringtype/ornaearringtype.component.ts");
/* harmony import */ var _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ornament/pendantearringtype/pendantearringtype.component */ "./src/app/ornament/pendantearringtype/pendantearringtype.component.ts");
/* harmony import */ var _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ornament/ornamentnosepin/ornamentnosepin.component */ "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts");
/* harmony import */ var _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ornament/bracelet/bracelet.component */ "./src/app/ornament/bracelet/bracelet.component.ts");
/* harmony import */ var _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ornament/bangles/bangles.component */ "./src/app/ornament/bangles/bangles.component.ts");
/* harmony import */ var _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ornament/chain/chain.component */ "./src/app/ornament/chain/chain.component.ts");
/* harmony import */ var _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ornament/chainwithpendant/chainwithpendant.component */ "./src/app/ornament/chainwithpendant/chainwithpendant.component.ts");
/* harmony import */ var _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ornament/necklace/necklace.component */ "./src/app/ornament/necklace/necklace.component.ts");
/* harmony import */ var _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ornament/mangalsutra/mangalsutra.component */ "./src/app/ornament/mangalsutra/mangalsutra.component.ts");
/* harmony import */ var _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ornament/sets/sets.component */ "./src/app/ornament/sets/sets.component.ts");
/* harmony import */ var _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ornament/pendant/pendant.component */ "./src/app/ornament/pendant/pendant.component.ts");
/* harmony import */ var _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ornamentcufflink/ornamentcufflink.component */ "./src/app/ornamentcufflink/ornamentcufflink.component.ts");
/* harmony import */ var _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ornament/cufflink/cufflink.component */ "./src/app/ornament/cufflink/cufflink.component.ts");
/* harmony import */ var _ornament_change_change_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ornament/change/change.component */ "./src/app/ornament/change/change.component.ts");
/* harmony import */ var _readspecific_readspecific_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./readspecific/readspecific.component */ "./src/app/readspecific/readspecific.component.ts");
/* harmony import */ var _update_earrings_earrings_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./update/earrings/earrings.component */ "./src/app/update/earrings/earrings.component.ts");
/* harmony import */ var _update_nosepin_nosepin_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./update/nosepin/nosepin.component */ "./src/app/update/nosepin/nosepin.component.ts");
/* harmony import */ var _update_chainpendat_chainpendat_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./update/chainpendat/chainpendat.component */ "./src/app/update/chainpendat/chainpendat.component.ts");
/* harmony import */ var _update_pendantearring_pendantearring_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./update/pendantearring/pendantearring.component */ "./src/app/update/pendantearring/pendantearring.component.ts");





















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_10__["AsJewelerComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _forms_forms_component__WEBPACK_IMPORTED_MODULE_12__["FormsComponent"],
            _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_13__["PasswordChangeComponent"],
            _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"],
            _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_15__["CreateViewComponent"],
            _read_read_component__WEBPACK_IMPORTED_MODULE_16__["ReadComponent"],
            _update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"],
            _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_20__["OrnamentsComponent"],
            _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_21__["RingsComponent"],
            _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_22__["NeckComponent"],
            _jewelornam_jewelornam_component__WEBPACK_IMPORTED_MODULE_23__["JewelornamComponent"],
            _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_24__["CreatevieComponent"],
            _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_25__["CreatevievComponent"],
            _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_26__["MultiselectComponent"],
            _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_27__["RadiofillComponent"],
            _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_28__["CreatevieuComponent"],
            _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_29__["OrnamentreadComponent"],
            _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_30__["OrnamentupdateComponent"],
            _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_31__["OrnamentmultiselectComponent"],
            _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_32__["Ornament1multiselectComponent"],
            _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_33__["OrnaringtypeComponent"],
            _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_34__["OrnaearringtypeComponent"],
            _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_35__["PendantearringtypeComponent"],
            _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_36__["OrnamentnosepinComponent"],
            _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_37__["BraceletComponent"],
            _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_38__["BanglesComponent"],
            _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_39__["ChainComponent"],
            _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_40__["ChainwithpendantComponent"],
            _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_41__["NecklaceComponent"],
            _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_42__["MangalsutraComponent"],
            _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_43__["SetsComponent"],
            _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_44__["PendantComponent"],
            _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_45__["OrnamentcufflinkComponent"],
            _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_46__["CufflinkComponent"],
            _ornament_change_change_component__WEBPACK_IMPORTED_MODULE_47__["ChangeComponent"],
            _readspecific_readspecific_component__WEBPACK_IMPORTED_MODULE_48__["ReadspecificComponent"],
            _update_earrings_earrings_component__WEBPACK_IMPORTED_MODULE_49__["EarringsComponent"],
            _update_nosepin_nosepin_component__WEBPACK_IMPORTED_MODULE_50__["NosepinComponent"],
            _update_chainpendat_chainpendat_component__WEBPACK_IMPORTED_MODULE_51__["ChainpendatComponent"],
            _update_pendantearring_pendantearring_component__WEBPACK_IMPORTED_MODULE_52__["PendantearringComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot()
        ],
        providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/as-jeweler/as-jeweler.component.css":
/*!*****************************************************!*\
  !*** ./src/app/as-jeweler/as-jeweler.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FzLWpld2VsZXIvYXMtamV3ZWxlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/as-jeweler/as-jeweler.component.ts":
/*!****************************************************!*\
  !*** ./src/app/as-jeweler/as-jeweler.component.ts ***!
  \****************************************************/
/*! exports provided: AsJewelerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsJewelerComponent", function() { return AsJewelerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let AsJewelerComponent = class AsJewelerComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
        this.emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null) {
            form.reset();
        }
        this.user = {
            email: '',
            username: '',
            password: '',
            confirm_password: '',
            IS_JEWELLER: null
        };
    }
    jeweler() {
        this.router.navigate(['/login']);
    }
    check() {
        if (document.getElementById('password').value != document.getElementById('confirm_password').value) {
            alert("password dont match");
        }
    }
    OnSubmit(form) {
        this.check();
        this.userService.asJeweler(form.value)
            .subscribe((data) => {
            if (data.response === 201) {
                console.log(data);
                this.resetForm();
                this.router.navigate(['/login']);
                this.toastr.success('User Registration Succeeded');
            }
            else {
                console.log(data);
                this.toastr.error(data.error_message);
            }
        }, err => {
            console.log(err.message);
            this.toastr.error('User Registration not  Successful');
        });
    }
};
AsJewelerComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AsJewelerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-as-jeweler',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./as-jeweler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/as-jeweler/as-jeweler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./as-jeweler.component.css */ "./src/app/as-jeweler/as-jeweler.component.css")).default]
    })
], AsJewelerComponent);

// ((data: any) => {
// localStorage.setItem('token', data.token);
// if (data.IS_JEWELLER == true ) {
// this.router.navigate(['/forms']);
// } else {
// this.router.navigate(['/customer']);
// }
// },
// (err: HttpErrorResponse) => {
// this.isLoginError = true;
// });
// }
// }
// (
// res => {
// console.log(res);
//   this.toastr.success('User Registration Success');
// this.router.navigate(['./login']);
// },
// err => {
// console.log(err.message);
// this.toastr.error('User Registration not  Successful');
// }


/***/ }),

/***/ "./src/app/create-view/create-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-view/create-view.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/create-view/create-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-view/create-view.component.ts ***!
  \******************************************************/
/*! exports provided: CreateViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateViewComponent", function() { return CreateViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreateViewComponent = class CreateViewComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null) {
            form.reset();
        }
        this.jeweller = {
            NAME_OF_FIRM: '',
            ADDRESS_OF_FIRM: '',
            CITY: '',
            STATE: '',
            CONTACT_NAME: '',
            CONTACT_NUMBER: '',
            CONTACT_MAIL_ID: '',
            GST_NUMBER: '',
            PAN_NUMBER: '',
            OWNER_NAME: '',
            OWNER_NUMBER: '',
            OWNER_EMAIL: ''
        };
    }
    OnSubmit(form) {
        this.userService.createView(form.value)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['./read']);
        }, err => {
            console.log(err.message);
        });
    }
};
CreateViewComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-view/create-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-view.component.css */ "./src/app/create-view/create-view.component.css")).default]
    })
], CreateViewComponent);



/***/ }),

/***/ "./src/app/createvie/createvie.component.css":
/*!***************************************************!*\
  !*** ./src/app/createvie/createvie.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXZpZS9jcmVhdGV2aWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/createvie/createvie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/createvie/createvie.component.ts ***!
  \**************************************************/
/*! exports provided: CreatevieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatevieComponent", function() { return CreatevieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let CreatevieComponent = class CreatevieComponent {
    constructor(userService) {
        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
    }
    ngOnInit() {
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(data => {
            console.log('done', data);
        });
    }
};
CreatevieComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
CreatevieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createvie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createvie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createvie/createvie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createvie.component.css */ "./src/app/createvie/createvie.component.css")).default]
    })
], CreatevieComponent);



/***/ }),

/***/ "./src/app/createvieu/createvieu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createvieu/createvieu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXZpZXUvY3JlYXRldmlldS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/createvieu/createvieu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createvieu/createvieu.component.ts ***!
  \****************************************************/
/*! exports provided: CreatevieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatevieuComponent", function() { return CreatevieuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let CreatevieuComponent = class CreatevieuComponent {
    constructor(userService) {
        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
    }
    ngOnInit() {
        this.read();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(data => {
            console.log('done', data);
        });
    }
};
CreatevieuComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
CreatevieuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createvieu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createvieu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createvieu/createvieu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createvieu.component.css */ "./src/app/createvieu/createvieu.component.css")).default]
    })
], CreatevieuComponent);



/***/ }),

/***/ "./src/app/createviev/createviev.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createviev/createviev.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXZpZXYvY3JlYXRldmlldi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/createviev/createviev.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createviev/createviev.component.ts ***!
  \****************************************************/
/*! exports provided: CreatevievComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatevievComponent", function() { return CreatevievComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let CreatevievComponent = class CreatevievComponent {
    constructor(userService) {
        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
    }
    ngOnInit() {
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(data => {
            console.log('done', data);
        });
    }
};
CreatevievComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
CreatevievComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createviev',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createviev.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createviev/createviev.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createviev.component.css */ "./src/app/createviev/createviev.component.css")).default]
    })
], CreatevievComponent);



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CustomerComponent = class CustomerComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
CustomerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")).default]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let FormsComponent = class FormsComponent {
    constructor(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    changepassword() {
        this.router.navigate(['/changepassword']);
    }
    Logout() {
        localStorage.removeItem('token');
        console.log('You Are Logged Out');
        this.toastr.error('logged out');
        this.router.navigate(['/login']);
    }
};
FormsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")).default]
    })
], FormsComponent);



/***/ }),

/***/ "./src/app/jewelornam/jewelornam.component.css":
/*!*****************************************************!*\
  !*** ./src/app/jewelornam/jewelornam.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pld2Vsb3JuYW0vamV3ZWxvcm5hbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/jewelornam/jewelornam.component.ts":
/*!****************************************************!*\
  !*** ./src/app/jewelornam/jewelornam.component.ts ***!
  \****************************************************/
/*! exports provided: JewelornamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JewelornamComponent", function() { return JewelornamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let JewelornamComponent = class JewelornamComponent {
    constructor(quizService) {
        this.quizService = quizService;
        this.imageUrl = '/assets/image/default-image.png';
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
    }
    ngOnInit() {
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
        // Show image preview
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    handleFileoneInput(file) {
        this.fileToUploadone = file.item(1);
        // Show image preview
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUploadone);
    }
    handleFiletwoInput(file) {
        this.fileToUploadtwo = file.item(2);
        // Show image preview
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUploadtwo);
    }
    handleFilethreeInput(file) {
        this.fileToUploadthree = file.item(3);
        // Show image preview
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUploadthree);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        this.quizService.postFile(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(data => {
            console.log('done', data);
            ORNAMENT_TYPE.value = null;
            ORNAMENT_MATERIAL.value = null;
            ORNAMENT_SHOPFOR.value = null;
            WEIGHT.value = null;
            ORNAMENT_METAL.value = null;
            ORNAMENT_OCCASION.value = null;
            ORNAMENT_GIFT.value = null;
            ORNAMENT_THEME.value = null;
            ORNAMENT_CURATED_BY.value = null;
            ORNAMENT_FESTIVAL.value = null;
            CAD_FILE.value = null;
            IMAGE_FILE_ONE.value = null;
            IMAGE_FILE_TWO.value = null;
            IMAGE_FILE_THREE.value = null;
            this.imageUrl = '/assets/image/default-image.png';
        });
    }
};
JewelornamComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
JewelornamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jewelornam',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jewelornam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jewelornam/jewelornam.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jewelornam.component.css */ "./src/app/jewelornam/jewelornam.component.css")).default]
    })
], JewelornamComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let LoginComponent = class LoginComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        // tslint:disable-next-line: no-inferrable-types
        this.isLoginError = false;
    }
    ngOnInit() {
    }
    OnSubmit(username, password) {
        this.userService.loginUser(username, password).subscribe((data) => {
            // localStorage.setItem('token', data.data.token);
            console.log(data);
            if (data.response === 200) {
                localStorage.setItem('token', data.data.token);
                this.toastr.success(data.message);
                if (data.data.IS_JEWELLER === true) {
                    this.router.navigate(['/read']);
                }
                else {
                    this.router.navigate(['/customer']);
                }
            }
            else {
                this.toastr.error(data.message);
                this.toastr.error(' Make sure your Username is in Lowercase');
            }
        }, (err) => {
            this.isLoginError = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/multiselect/multiselect.component.css":
/*!*******************************************************!*\
  !*** ./src/app/multiselect/multiselect.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/multiselect/multiselect.component.ts":
/*!******************************************************!*\
  !*** ./src/app/multiselect/multiselect.component.ts ***!
  \******************************************************/
/*! exports provided: MultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function() { return MultiselectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let MultiselectComponent = class MultiselectComponent {
    constructor(userService) {
        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
    }
    ngOnInit() {
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    call() {
        const inputValue = document.getElementById('ORNAMENT_TYPE').value;
        console.log(inputValue);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(data => {
            console.log('done', data);
        });
    }
};
MultiselectComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
MultiselectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multiselect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multiselect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/multiselect/multiselect.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multiselect.component.css */ "./src/app/multiselect/multiselect.component.css")).default]
    })
], MultiselectComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/ornament/bangles/bangles.component.css":
/*!********************************************************!*\
  !*** ./src/app/ornament/bangles/bangles.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2JhbmdsZXMvYmFuZ2xlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ornament/bangles/bangles.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ornament/bangles/bangles.component.ts ***!
  \*******************************************************/
/*! exports provided: BanglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanglesComponent", function() { return BanglesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let BanglesComponent = class BanglesComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Bsize = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.bsizea = [];
        this.bsizeb = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.Banglesize();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Banglesize() {
        this.userService.ornBanglesize().subscribe(data => {
            console.log(data);
            this.Bsize = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    Size(k) {
        console.log(k);
        if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
        else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
    }
    six() {
        if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
                document.getElementById('6').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.bsizeb.sort();
                for (var i = 0; i < this.bsizeb.length; i++) {
                    if (this.bsizeb[i] !== prev) {
                        a.push(this.bsizeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.bsizeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.bsizea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('bsizea', this.bsizea);
            }
        }
        else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_BANGLE_SIZE, ORNAMENT_BANGLE_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0 || this.bsizea.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.bangles(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_BANGLE_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
BanglesComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
BanglesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bangles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bangles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bangles/bangles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bangles.component.css */ "./src/app/ornament/bangles/bangles.component.css")).default]
    })
], BanglesComponent);



/***/ }),

/***/ "./src/app/ornament/bracelet/bracelet.component.css":
/*!**********************************************************!*\
  !*** ./src/app/ornament/bracelet/bracelet.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2JyYWNlbGV0L2JyYWNlbGV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ornament/bracelet/bracelet.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ornament/bracelet/bracelet.component.ts ***!
  \*********************************************************/
/*! exports provided: BraceletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BraceletComponent", function() { return BraceletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let BraceletComponent = class BraceletComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Bsize = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.bsizea = [];
        this.bsizeb = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.ringsize();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    ringsize() {
        this.userService.ornBsize().subscribe(data => {
            console.log(data);
            this.Bsize = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    Size(k) {
        console.log(k);
        if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
        else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
    }
    six() {
        if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
                document.getElementById('6').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.bsizeb.sort();
                for (var i = 0; i < this.bsizeb.length; i++) {
                    if (this.bsizeb[i] !== prev) {
                        a.push(this.bsizeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.bsizeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.bsizea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('bsizea', this.bsizea);
            }
        }
        else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_BRACELET_SIZE, ORNAMENT_BRACELET_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0 || this.bsizea.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.bracelet(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_BRACELET_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
BraceletComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
BraceletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bracelet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bracelet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bracelet/bracelet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bracelet.component.css */ "./src/app/ornament/bracelet/bracelet.component.css")).default]
    })
], BraceletComponent);



/***/ }),

/***/ "./src/app/ornament/chain/chain.component.css":
/*!****************************************************!*\
  !*** ./src/app/ornament/chain/chain.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2NoYWluL2NoYWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ornament/chain/chain.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ornament/chain/chain.component.ts ***!
  \***************************************************/
/*! exports provided: ChainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainComponent", function() { return ChainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ChainComponent = class ChainComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Bsize = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.bsizea = [];
        this.bsizeb = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.Banglesize();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Banglesize() {
        this.userService.ornChainlength().subscribe(data => {
            console.log(data);
            this.Bsize = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    Size(k) {
        console.log(k);
        if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
        else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
    }
    six() {
        if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
                document.getElementById('6').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.bsizeb.sort();
                for (var i = 0; i < this.bsizeb.length; i++) {
                    if (this.bsizeb[i] !== prev) {
                        a.push(this.bsizeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.bsizeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.bsizea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('bsizea', this.bsizea);
            }
        }
        else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_CHAIN_LENGTH, ORNAMENT_CHAIN_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0 || this.bsizea.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.chain(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_CHAIN_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
ChainComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ChainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chain',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chain/chain.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chain.component.css */ "./src/app/ornament/chain/chain.component.css")).default]
    })
], ChainComponent);



/***/ }),

/***/ "./src/app/ornament/chainwithpendant/chainwithpendant.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/ornament/chainwithpendant/chainwithpendant.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2NoYWlud2l0aHBlbmRhbnQvY2hhaW53aXRocGVuZGFudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ornament/chainwithpendant/chainwithpendant.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ornament/chainwithpendant/chainwithpendant.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChainwithpendantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainwithpendantComponent", function() { return ChainwithpendantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ChainwithpendantComponent = class ChainwithpendantComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Bsize = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.bsizea = [];
        this.bsizeb = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.Banglesize();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Banglesize() {
        this.userService.ornChainlength().subscribe(data => {
            console.log(data);
            this.Bsize = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    Size(k) {
        console.log(k);
        if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
        else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
        }
    }
    six() {
        if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
                document.getElementById('6').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.bsizeb.sort();
                for (var i = 0; i < this.bsizeb.length; i++) {
                    if (this.bsizeb[i] !== prev) {
                        a.push(this.bsizeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.bsizeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.bsizea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('bsizea', this.bsizea);
            }
        }
        else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_CHAIN_LENGTH, ORNAMENT_CHAIN_STYLE, ORNAMENT_PENDANT_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0 || this.bsizea.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.chaitpen(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_CHAIN_STYLE.value, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
ChainwithpendantComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ChainwithpendantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chainwithpendant',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chainwithpendant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chainwithpendant/chainwithpendant.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chainwithpendant.component.css */ "./src/app/ornament/chainwithpendant/chainwithpendant.component.css")).default]
    })
], ChainwithpendantComponent);



/***/ }),

/***/ "./src/app/ornament/change/change.component.css":
/*!******************************************************!*\
  !*** ./src/app/ornament/change/change.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2NoYW5nZS9jaGFuZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornament/change/change.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ornament/change/change.component.ts ***!
  \*****************************************************/
/*! exports provided: ChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeComponent", function() { return ChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChangeComponent = class ChangeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/change/change.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change.component.css */ "./src/app/ornament/change/change.component.css")).default]
    })
], ChangeComponent);



/***/ }),

/***/ "./src/app/ornament/cufflink/cufflink.component.css":
/*!**********************************************************!*\
  !*** ./src/app/ornament/cufflink/cufflink.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2N1ZmZsaW5rL2N1ZmZsaW5rLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ornament/cufflink/cufflink.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ornament/cufflink/cufflink.component.ts ***!
  \*********************************************************/
/*! exports provided: CufflinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CufflinkComponent", function() { return CufflinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let CufflinkComponent = class CufflinkComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
CufflinkComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
CufflinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cufflink',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cufflink.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/cufflink/cufflink.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cufflink.component.css */ "./src/app/ornament/cufflink/cufflink.component.css")).default]
    })
], CufflinkComponent);



/***/ }),

/***/ "./src/app/ornament/mangalsutra/mangalsutra.component.css":
/*!****************************************************************!*\
  !*** ./src/app/ornament/mangalsutra/mangalsutra.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L21hbmdhbHN1dHJhL21hbmdhbHN1dHJhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ornament/mangalsutra/mangalsutra.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ornament/mangalsutra/mangalsutra.component.ts ***!
  \***************************************************************/
/*! exports provided: MangalsutraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangalsutraComponent", function() { return MangalsutraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let MangalsutraComponent = class MangalsutraComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
MangalsutraComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
MangalsutraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mangalsutra',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mangalsutra.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/mangalsutra/mangalsutra.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mangalsutra.component.css */ "./src/app/ornament/mangalsutra/mangalsutra.component.css")).default]
    })
], MangalsutraComponent);



/***/ }),

/***/ "./src/app/ornament/necklace/necklace.component.css":
/*!**********************************************************!*\
  !*** ./src/app/ornament/necklace/necklace.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L25lY2tsYWNlL25lY2tsYWNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ornament/necklace/necklace.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ornament/necklace/necklace.component.ts ***!
  \*********************************************************/
/*! exports provided: NecklaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NecklaceComponent", function() { return NecklaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let NecklaceComponent = class NecklaceComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_NECKLACE_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.necklace(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_NECKLACE_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
NecklaceComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
NecklaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-necklace',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./necklace.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/necklace/necklace.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./necklace.component.css */ "./src/app/ornament/necklace/necklace.component.css")).default]
    })
], NecklaceComponent);



/***/ }),

/***/ "./src/app/ornament/ornaearringtype/ornaearringtype.component.css":
/*!************************************************************************!*\
  !*** ./src/app/ornament/ornaearringtype/ornaearringtype.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L29ybmFlYXJyaW5ndHlwZS9vcm5hZWFycmluZ3R5cGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornament/ornaearringtype/ornaearringtype.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ornament/ornaearringtype/ornaearringtype.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrnaearringtypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnaearringtypeComponent", function() { return OrnaearringtypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let OrnaearringtypeComponent = class OrnaearringtypeComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_EARRING_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.ear(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_EARRING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status == 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
OrnaearringtypeComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
OrnaearringtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornaearringtype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornaearringtype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaearringtype/ornaearringtype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornaearringtype.component.css */ "./src/app/ornament/ornaearringtype/ornaearringtype.component.css")).default]
    })
], OrnaearringtypeComponent);



/***/ }),

/***/ "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.css":
/*!************************************************************************!*\
  !*** ./src/app/ornament/ornamentnosepin/ornamentnosepin.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L29ybmFtZW50bm9zZXBpbi9vcm5hbWVudG5vc2VwaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrnamentnosepinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentnosepinComponent", function() { return OrnamentnosepinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let OrnamentnosepinComponent = class OrnamentnosepinComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_NOSEPIN_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.nosepin(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_NOSEPIN_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status === 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
OrnamentnosepinComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
OrnamentnosepinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornamentnosepin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornamentnosepin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornamentnosepin/ornamentnosepin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornamentnosepin.component.css */ "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.css")).default]
    })
], OrnamentnosepinComponent);



/***/ }),

/***/ "./src/app/ornament/ornaringtype/ornaringtype.component.css":
/*!******************************************************************!*\
  !*** ./src/app/ornament/ornaringtype/ornaringtype.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L29ybmFyaW5ndHlwZS9vcm5hcmluZ3R5cGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornament/ornaringtype/ornaringtype.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ornament/ornaringtype/ornaringtype.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrnaringtypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnaringtypeComponent", function() { return OrnaringtypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let OrnaringtypeComponent = class OrnaringtypeComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Ringsize = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.rsizea = [];
        this.rsizeb = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.ringsize();
        this.metal();
    }
    // arr=[1,1,2,1,5,8,8,8,4,4,8,6,6,6,8,7]
    // var a = [], b = [], prev,final=[];
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    ringsize() {
        this.userService.ornRsize().subscribe(data => {
            console.log(data);
            this.Ringsize = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    Size(k) {
        console.log(k);
        if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.rsizeb.push(k);
            this.rsizea = [];
            console.log(this.rsizea);
            console.log(this.rsizeb);
        }
        else {
            this.rsizeb.push(k);
            console.log(this.rsizea);
            console.log(this.rsizeb);
        }
    }
    six() {
        if (document.getElementById('6').checked) {
            if (this.rsizeb.length == 0) {
                document.getElementById('6').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.rsizeb.sort();
                for (var i = 0; i < this.rsizeb.length; i++) {
                    if (this.rsizeb[i] !== prev) {
                        a.push(this.rsizeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.rsizeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.rsizea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('bsizea', this.rsizea);
            }
        }
        else {
            this.rsizea = [];
            console.log('bsizea', this.rsizea);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_RING_SIZE, ORNAMENT_RING_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0 || this.rsizea.length == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.mli(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.rsizea, this.rsizeb, ORNAMENT_RING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status === 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
OrnaringtypeComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
OrnaringtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornaringtype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornaringtype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaringtype/ornaringtype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornaringtype.component.css */ "./src/app/ornament/ornaringtype/ornaringtype.component.css")).default]
    })
], OrnaringtypeComponent);



/***/ }),

/***/ "./src/app/ornament/pendant/pendant.component.css":
/*!********************************************************!*\
  !*** ./src/app/ornament/pendant/pendant.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L3BlbmRhbnQvcGVuZGFudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ornament/pendant/pendant.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ornament/pendant/pendant.component.ts ***!
  \*******************************************************/
/*! exports provided: PendantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendantComponent", function() { return PendantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let PendantComponent = class PendantComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_PENDANT_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            this.userService.pendant(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status === 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
PendantComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
PendantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pendant',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pendant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendant/pendant.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pendant.component.css */ "./src/app/ornament/pendant/pendant.component.css")).default]
    })
], PendantComponent);



/***/ }),

/***/ "./src/app/ornament/pendantearringtype/pendantearringtype.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/ornament/pendantearringtype/pendantearringtype.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L3BlbmRhbnRlYXJyaW5ndHlwZS9wZW5kYW50ZWFycmluZ3R5cGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornament/pendantearringtype/pendantearringtype.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ornament/pendantearringtype/pendantearringtype.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PendantearringtypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendantearringtypeComponent", function() { return PendantearringtypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let PendantearringtypeComponent = class PendantearringtypeComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length === 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length === 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length === 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length === 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length === 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length === 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    // tslint:disable-next-line: max-line-length
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_EARRING_STYLE, ORNAMENT_PENDANT_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length === 0 || this.asan.length === 0 || this.themea.length === 0 || this.curateda.length === 0 || this.metala.length === 0 || this.festia.length === 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            // tslint:disable-next-line: max-line-length
            this.userService.pendantwithearing(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_EARRING_STYLE.value, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status === 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
PendantearringtypeComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
PendantearringtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pendantearringtype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pendantearringtype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendantearringtype/pendantearringtype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pendantearringtype.component.css */ "./src/app/ornament/pendantearringtype/pendantearringtype.component.css")).default]
    })
], PendantearringtypeComponent);



/***/ }),

/***/ "./src/app/ornament/sets/sets.component.css":
/*!**************************************************!*\
  !*** ./src/app/ornament/sets/sets.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L3NldHMvc2V0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ornament/sets/sets.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ornament/sets/sets.component.ts ***!
  \*************************************************/
/*! exports provided: SetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetsComponent", function() { return SetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SetsComponent = class SetsComponent {
    constructor(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.Metal = {};
        this.asion = [];
        this.asian = [];
        this.asan = [];
        this.asin = [];
        this.themea = [];
        this.themeb = [];
        this.curateda = [];
        this.curatedb = [];
        this.festia = [];
        this.festib = [];
        this.metala = [];
        this.metalb = [];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
        this.metal();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    metal() {
        this.userService.ornmetal().subscribe(data => {
            console.log(data);
            this.Metal = data;
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Ornmetal(pk) {
        console.log(pk);
        if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
        }
        else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
        }
    }
    zero() {
        if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
                document.getElementById('zero').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.metalb.sort();
                for (var i = 0; i < this.metalb.length; i++) {
                    if (this.metalb[i] !== prev) {
                        a.push(this.metalb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.metalb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.metala.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('metala', this.metala);
            }
        }
        else {
            this.metala = [];
            console.log('metala', this.metala);
        }
    }
    Answer(pk) {
        console.log(pk);
        if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
        }
        else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
        }
    }
    one() {
        if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
                document.getElementById('1').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asian.sort();
                for (var i = 0; i < this.asian.length; i++) {
                    if (this.asian[i] !== prev) {
                        a.push(this.asian[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asian[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asion.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asion', this.asion);
            }
        }
        else {
            this.asion = [];
            console.log('asion', this.asion);
        }
    }
    Ornagift(k) {
        console.log(k);
        if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
        }
        else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
        }
    }
    two() {
        if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
                document.getElementById('2').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.asin.sort();
                for (var i = 0; i < this.asin.length; i++) {
                    if (this.asin[i] !== prev) {
                        a.push(this.asin[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.asin[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.asan.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('asan', this.asan);
            }
        }
        else {
            this.asan = [];
            console.log('asan', this.asan);
        }
    }
    Ornatheme(k) {
        console.log(k);
        if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
        }
        else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
        }
    }
    three() {
        if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
                document.getElementById('3').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.themeb.sort();
                for (var i = 0; i < this.themeb.length; i++) {
                    if (this.themeb[i] !== prev) {
                        a.push(this.themeb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.themeb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.themea.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('themea', this.themea);
            }
        }
        else {
            this.themea = [];
            console.log('themea', this.themea);
        }
    }
    OrnaCurated(k) {
        console.log(k);
        if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
        }
        else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
        }
    }
    four() {
        if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
                document.getElementById('4').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.curatedb.sort();
                for (var i = 0; i < this.curatedb.length; i++) {
                    if (this.curatedb[i] !== prev) {
                        a.push(this.curatedb[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.curatedb[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.curateda.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('curateda', this.curateda);
            }
        }
        else {
            this.curateda = [];
            console.log('curateda', this.curateda);
        }
    }
    Ornafesti(k) {
        console.log(k);
        if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
        }
        else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
        }
    }
    five() {
        if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
                document.getElementById('5').checked = false;
                // tslint:disable-next-line: max-line-length
                alert('you cannot confirm your option without selecting any, select your option and then confirm');
            }
            else {
                var a = [], b = [], prev;
                this.festib.sort();
                for (var i = 0; i < this.festib.length; i++) {
                    if (this.festib[i] !== prev) {
                        a.push(this.festib[i]);
                        b.push(1);
                    }
                    else {
                        b[b.length - 1]++;
                    }
                    prev = this.festib[i];
                }
                // return [a, b];
                var i = 0;
                for (var j = 0; j < b.length; j++) {
                    if (b[j] % 2 === 0) {
                    }
                    else {
                        this.festia.push(a[i]);
                    }
                    i = i + 1;
                }
                console.log('festia', this.festia);
            }
        }
        else {
            this.festia = [];
            console.log('festia', this.festia);
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    // tslint:disable-next-line: max-line-length
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        // tslint:disable-next-line: max-line-length
        if (this.asion.length === 0 || this.asan.length === 0 || this.themea.length === 0 || this.curateda.length === 0 || this.metala.length === 0 || this.festia.length === 0) {
            alert('check the confirmation checkboxex to proceed');
        }
        else {
            // tslint:disable-next-line: max-line-length
            this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe((data) => {
                console.log('done', data);
                if (data.status === 201) {
                    this.toastr.success('Ornament Succesfully Created');
                    this.router.navigate(['./ornamentread']);
                }
            });
        }
    }
};
SetsComponent.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/sets/sets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sets.component.css */ "./src/app/ornament/sets/sets.component.css")).default]
    })
], SetsComponent);



/***/ }),

/***/ "./src/app/ornament1multiselect/ornament1multiselect.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/ornament1multiselect/ornament1multiselect.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50MW11bHRpc2VsZWN0L29ybmFtZW50MW11bHRpc2VsZWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ornament1multiselect/ornament1multiselect.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ornament1multiselect/ornament1multiselect.component.ts ***!
  \************************************************************************/
/*! exports provided: Ornament1multiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ornament1multiselectComponent", function() { return Ornament1multiselectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let Ornament1multiselectComponent = class Ornament1multiselectComponent {
    constructor(userService) {
        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.asion = [];
        this.asian = [5];
        this.asan = [3];
    }
    ngOnInit() {
        this.read();
        this.occasion();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    Wedding() {
        console.log();
        // this.asion = pk;
        if (document.getElementById('Wedding').checked) {
            this.asion = document.getElementById('Wedding').value;
            this.asan = document.getElementById('Wedding').value;
            // this.asian = (document.getElementById('Wedding')as HTMLInputElement).value;
            console.log('value', this.asion);
        }
        // this.asan.pop(0);
        // this.asan = pk;
        console.log(this.asion);
        console.log(this.asian);
        console.log(this.asan);
    }
    Anniversary() {
        if (document.getElementById('Anniversary').checked) {
            this.asian = document.getElementById('Anniversary').value;
            console.log('value', this.asion);
        }
        // this.asan.pop(0);
        // this.asan = pk;
        console.log(this.asion);
        console.log(this.asian);
        console.log(this.asan);
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
};
Ornament1multiselectComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
Ornament1multiselectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornament1multiselect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornament1multiselect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament1multiselect/ornament1multiselect.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornament1multiselect.component.css */ "./src/app/ornament1multiselect/ornament1multiselect.component.css")).default]
    })
], Ornament1multiselectComponent);



/***/ }),

/***/ "./src/app/ornamentcufflink/ornamentcufflink.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/ornamentcufflink/ornamentcufflink.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50Y3VmZmxpbmsvb3JuYW1lbnRjdWZmbGluay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ornamentcufflink/ornamentcufflink.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ornamentcufflink/ornamentcufflink.component.ts ***!
  \****************************************************************/
/*! exports provided: OrnamentcufflinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentcufflinkComponent", function() { return OrnamentcufflinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OrnamentcufflinkComponent = class OrnamentcufflinkComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    cufflink() {
        this.router.navigate(['/cufflink']);
    }
    pendantwithearing() {
        this.router.navigate(['/Pendantearringtype']);
    }
    pendant() {
        this.router.navigate(['/Pendant']);
    }
    chain() {
        this.router.navigate(['/chain']);
    }
    sets() {
        this.router.navigate(['/set']);
    }
    Mangalsutra() {
        this.router.navigate(['/mangalsutra']);
    }
    necklace() {
        this.router.navigate(['/Necklace']);
    }
    chainwithpendant() {
        this.router.navigate(['/chainwithpendant']);
    }
    bangles() {
        this.router.navigate(['/Bangles']);
    }
    bracelet() {
        this.router.navigate(['/Bracelet']);
    }
    earring() {
        this.router.navigate(['/Ornaearringtype']);
    }
    nosepin() {
        this.router.navigate(['/nosepin']);
    }
    ring() {
        this.router.navigate(['/Ornaringtype']);
    }
};
OrnamentcufflinkComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OrnamentcufflinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornamentcufflink',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornamentcufflink.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentcufflink/ornamentcufflink.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornamentcufflink.component.css */ "./src/app/ornamentcufflink/ornamentcufflink.component.css")).default]
    })
], OrnamentcufflinkComponent);



/***/ }),

/***/ "./src/app/ornamentmultiselect/ornamentmultiselect.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/ornamentmultiselect/ornamentmultiselect.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50bXVsdGlzZWxlY3Qvb3JuYW1lbnRtdWx0aXNlbGVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ornamentmultiselect/ornamentmultiselect.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ornamentmultiselect/ornamentmultiselect.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrnamentmultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentmultiselectComponent", function() { return OrnamentmultiselectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let OrnamentmultiselectComponent = class OrnamentmultiselectComponent {
    constructor(userService) {
        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
        this.Occasion = {};
        this.Gift = {};
        this.Theme = {};
        this.Curated = {};
        this.Festival = {};
        this.asion = [];
        this.asian = [5];
        this.asan = [];
        this.asin = [3];
        this.themea = [];
        this.themeb = [7];
        this.curateda = [];
        this.curatedb = [6];
        this.festia = [];
        this.festib = [8];
    }
    ngOnInit() {
        this.read();
        this.occasion();
        this.gift();
        this.theme();
        this.curatedby();
        this.festival();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    occasion() {
        this.userService.ornoccasion().subscribe(data => {
            console.log(data);
            this.Occasion = data;
        });
    }
    gift() {
        this.userService.ornGift().subscribe(data => {
            console.log(data);
            this.Gift = data;
        });
    }
    theme() {
        this.userService.ornTheme().subscribe(data => {
            console.log(data);
            this.Theme = data;
        });
    }
    curatedby() {
        this.userService.ornCurated().subscribe(data => {
            console.log(data);
            this.Curated = data;
        });
    }
    festival() {
        this.userService.ornFestival().subscribe(data => {
            console.log(data);
            this.Festival = data;
        });
    }
    Answer(pk) {
        console.log(pk);
        this.asion = pk;
        console.log(this.asion);
    }
    Ornagift(k) {
        console.log(k);
        this.asan = k;
        console.log(this.asan);
    }
    Ornatheme(k) {
        console.log(k);
        this.themea = k;
        console.log(this.themea);
        console.log(this.themeb);
    }
    OrnaCurated(k) {
        console.log(k);
        this.curateda = k;
        console.log(this.curateda);
        console.log(this.curatedb);
    }
    Ornafesti(k) {
        console.log(k);
        this.festia = k;
        console.log(this.festia);
        console.log(this.festib);
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(data => {
            console.log('done', data);
        });
    }
};
OrnamentmultiselectComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
OrnamentmultiselectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornamentmultiselect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornamentmultiselect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentmultiselect/ornamentmultiselect.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornamentmultiselect.component.css */ "./src/app/ornamentmultiselect/ornamentmultiselect.component.css")).default]
    })
], OrnamentmultiselectComponent);



/***/ }),

/***/ "./src/app/ornamentread/ornamentread.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ornamentread/ornamentread.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cmVhZC9vcm5hbWVudHJlYWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornamentread/ornamentread.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ornamentread/ornamentread.component.ts ***!
  \********************************************************/
/*! exports provided: OrnamentreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentreadComponent", function() { return OrnamentreadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OrnamentreadComponent = class OrnamentreadComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.data = {};
    }
    ngOnInit() {
        this.page1();
    }
    page1() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page2() {
        this.userService.r2().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page3() {
        this.userService.r3().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page4() {
        this.userService.r4().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page5() {
        this.userService.r5().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page6() {
        this.userService.r6().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page7() {
        this.userService.r7().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page8() {
        this.userService.r8().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page9() {
        this.userService.r9().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page10() {
        this.userService.r10().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page11() {
        this.userService.r11().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page12() {
        this.userService.r12().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page13() {
        this.userService.r13().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    page14() {
        this.userService.r14().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    read(ORNAMENT_ID) {
        localStorage.setItem('ORNAMENT_ID', ORNAMENT_ID);
        this.router.navigate(['./readSpecific']);
        // this.userService.readid().subscribe((data: any) => {
        // console.log(data);
        // });
    }
};
OrnamentreadComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OrnamentreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornamentread',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornamentread.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentread/ornamentread.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornamentread.component.css */ "./src/app/ornamentread/ornamentread.component.css")).default]
    })
], OrnamentreadComponent);



/***/ }),

/***/ "./src/app/ornaments/neck/neck.component.css":
/*!***************************************************!*\
  !*** ./src/app/ornaments/neck/neck.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cy9uZWNrL25lY2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornaments/neck/neck.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ornaments/neck/neck.component.ts ***!
  \**************************************************/
/*! exports provided: NeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeckComponent", function() { return NeckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NeckComponent = class NeckComponent {
    constructor() { }
    ngOnInit() {
    }
};
NeckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-neck',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./neck.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/neck/neck.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./neck.component.css */ "./src/app/ornaments/neck/neck.component.css")).default]
    })
], NeckComponent);



/***/ }),

/***/ "./src/app/ornaments/ornaments.component.css":
/*!***************************************************!*\
  !*** ./src/app/ornaments/ornaments.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cy9vcm5hbWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ornaments/ornaments.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ornaments/ornaments.component.ts ***!
  \**************************************************/
/*! exports provided: OrnamentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentsComponent", function() { return OrnamentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrnamentsComponent = class OrnamentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrnamentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornaments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornaments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/ornaments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornaments.component.css */ "./src/app/ornaments/ornaments.component.css")).default]
    })
], OrnamentsComponent);



/***/ }),

/***/ "./src/app/ornaments/rings/rings.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ornaments/rings/rings.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cy9yaW5ncy9yaW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ornaments/rings/rings.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ornaments/rings/rings.component.ts ***!
  \****************************************************/
/*! exports provided: RingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RingsComponent", function() { return RingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RingsComponent = class RingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
RingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/rings/rings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rings.component.css */ "./src/app/ornaments/rings/rings.component.css")).default]
    })
], RingsComponent);



/***/ }),

/***/ "./src/app/ornamentupdate/ornamentupdate.component.css":
/*!*************************************************************!*\
  !*** ./src/app/ornamentupdate/ornamentupdate.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50dXBkYXRlL29ybmFtZW50dXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ornamentupdate/ornamentupdate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ornamentupdate/ornamentupdate.component.ts ***!
  \************************************************************/
/*! exports provided: OrnamentupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentupdateComponent", function() { return OrnamentupdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let OrnamentupdateComponent = class OrnamentupdateComponent {
    constructor(userService) {
        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
        this.anni = {};
        this.annj = {};
        this.annk = {};
        this.data = {};
    }
    ngOnInit() {
        this.read();
    }
    read() {
        this.userService.readorn().subscribe(data => {
            console.log(data);
        });
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
    }
    handleFileInputone(file) {
        this.fileToUploadone = file.item(0);
    }
    handleFileInputtwo(file) {
        this.fileToUploadtwo = file.item(0);
    }
    handleFileInputthree(file) {
        this.fileToUploadthree = file.item(0);
    }
    OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
        this.userService.postupdate(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(data => {
            console.log('done', data);
        });
    }
};
OrnamentupdateComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
OrnamentupdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornamentupdate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornamentupdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentupdate/ornamentupdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornamentupdate.component.css */ "./src/app/ornamentupdate/ornamentupdate.component.css")).default]
    })
], OrnamentupdateComponent);



/***/ }),

/***/ "./src/app/password-change/password-change.component.css":
/*!***************************************************************!*\
  !*** ./src/app/password-change/password-change.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLWNoYW5nZS9wYXNzd29yZC1jaGFuZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/password-change/password-change.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/password-change/password-change.component.ts ***!
  \**************************************************************/
/*! exports provided: PasswordChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeComponent", function() { return PasswordChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PasswordChangeComponent = class PasswordChangeComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null) {
            form.reset();
        }
        this.password = {
            old_password: '',
            new_password: '',
            confirm_new_password: ''
        };
    }
    OnSubmit(form) {
        this.userService.changePassword(form.value)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/forms']);
        }, err => {
            console.log(err.message);
        });
    }
};
PasswordChangeComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PasswordChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-change',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-change.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/password-change/password-change.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-change.component.css */ "./src/app/password-change/password-change.component.css")).default]
    })
], PasswordChangeComponent);



/***/ }),

/***/ "./src/app/radiofill/radiofill.component.css":
/*!***************************************************!*\
  !*** ./src/app/radiofill/radiofill.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhZGlvZmlsbC9yYWRpb2ZpbGwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/radiofill/radiofill.component.ts":
/*!**************************************************!*\
  !*** ./src/app/radiofill/radiofill.component.ts ***!
  \**************************************************/
/*! exports provided: RadiofillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiofillComponent", function() { return RadiofillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RadiofillComponent = class RadiofillComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
        this.panpattern = '[0-9]{10}';
        this.gstpattern = '[0-9]{15}';
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null) {
            form.reset();
        }
        this.jeweller = {
            NAME_OF_FIRM: '',
            ADDRESS_OF_FIRM: '',
            CITY: '',
            STATE: '',
            CONTACT_NAME: '',
            CONTACT_NUMBER: '',
            CONTACT_MAIL_ID: '',
            GST_NUMBER: '',
            PAN_NUMBER: '',
            OWNER_NAME: '',
            OWNER_NUMBER: '',
            OWNER_EMAIL: ''
        };
    }
    // address() {
    // if ((document.getElementById('same')as HTMLInputElement).checked)  {
    // (document.getElementById('secondaryaddress')as HTMLInputElement).value = (document.
    //       getElementById('primaryaddress')as HTMLInputElement).value;
    // (document.getElementById('secondaryzip')as HTMLInputElement).value = (document.
    //   /     getElementById('primaryzip')as HTMLInputElement).value;
    //    } else {
    //    (document.getElementById('secondaryaddress')as HTMLInputElement).value = '';
    //  (document.getElementById('secondaryzip')as HTMLInputElement).value = '';
    // }
    // (document.getElementById('secondaryaddress')as HTMLInputElement).value = (document.
    //  getElementById('primaryaddress')as HTMLInputElement).value;
    //  (document.getElementById('secondaryzip')as HTMLInputElement).value = (document.
    //    getElementById('primaryzip')as HTMLInputElement).value;
    // }
    addres() {
        if (document.getElementById('same').checked) {
            console.log('checked');
            document.getElementById('owner_number').value = document.
                getElementById('contact_number').value;
            document.getElementById('owner_email').value = document.
                getElementById('contact_mail_id').value;
        }
        else {
            console.log('uncheked');
            document.getElementById('owner_number').value = '';
            document.getElementById('owner_email').value = '';
        }
        console.log(document.getElementById('owner_email').value);
    }
    call() {
        const inputValue = document.getElementById('contact_mail_id').value;
        console.log(inputValue);
    }
    OnSubmit(form) {
        this.userService.createView(form.value)
            .subscribe((data) => {
            console.log(data);
            if (data.status === 201) {
                this.router.navigate(['./read']);
            }
            else {
                alert('Try filling the form carefully with correct info');
            }
        }, err => {
            console.log(err.message);
        });
    }
};
RadiofillComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RadiofillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-radiofill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./radiofill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/radiofill/radiofill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./radiofill.component.css */ "./src/app/radiofill/radiofill.component.css")).default]
    })
], RadiofillComponent);



/***/ }),

/***/ "./src/app/read/read.component.css":
/*!*****************************************!*\
  !*** ./src/app/read/read.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWQvcmVhZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/read/read.component.ts":
/*!****************************************!*\
  !*** ./src/app/read/read.component.ts ***!
  \****************************************/
/*! exports provided: ReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadComponent", function() { return ReadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ReadComponent = class ReadComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.data = {};
    }
    ngOnInit() {
        this.readuser();
    }
    readuser() {
        this.userService.readForm().subscribe(data => {
            console.log(data);
            this.data = data;
            if (this.data.statuscode === 200) {
                this.toastr.success('welcome back');
            }
            else {
                this.toastr.success('As you are our New Customer we want you to fill this form to complete your profile');
                this.router.navigate(['/radiofill']);
            }
        });
    }
    update() {
        this.router.navigate(['/update']);
    }
    ornament() {
        this.router.navigate(['/types']);
    }
    changepassword() {
        this.router.navigate(['/changepassword']);
    }
    Logout() {
        localStorage.removeItem('token');
        console.log('You Are Logged Out');
        this.toastr.error('logged out');
        this.router.navigate(['/login']);
    }
};
ReadComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ReadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-read',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./read.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/read/read.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./read.component.css */ "./src/app/read/read.component.css")).default]
    })
], ReadComponent);

// if (data.response == 200 ) {
// localStorage.setItem('token' , data.data.token );
// this.toastr.success(data.message);
// if (data.data.IS_JEWELLER == true) {
//  this.router.navigate(['/createview']);
// } else {
// this.router.navigate(['/customer']);
// }
// } else {
// this.toastr.error(data.message);
// }


/***/ }),

/***/ "./src/app/readspecific/readspecific.component.css":
/*!*********************************************************!*\
  !*** ./src/app/readspecific/readspecific.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slider-holder\r\n{\r\n    width: 800px;\r\n    height: 400px;\r\n    background-color: yellow;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-holder\r\n{\r\n    width: 2400px;\r\n    background-color: red;\r\n    height: 400px;\r\n    clear: both;\r\n    position: relative;\r\n   \r\n    -webkit-transition: left 2s;\r\n    transition: left 2s;\r\n}\r\n\r\n.card-image\r\n{\r\n    float: left;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    position: relative;\r\n}\r\n\r\n#slider-image-1:target ~ .image-holder\r\n{\r\n    left: 0px;\r\n}\r\n\r\n#slider-image-2:target ~ .image-holder\r\n{\r\n    left: -800px;\r\n}\r\n\r\n#slider-image-3:target ~ .image-holder\r\n{\r\n    left: -1600px;\r\n}\r\n\r\n.button-holder\r\n{\r\n    position: relative;\r\n    top: -20px;\r\n}\r\n\r\n.slider-change\r\n{\r\n    display: inline-block;\r\n    height: 10px;\r\n    width: 10px;\r\n    border-radius: 5px;\r\n    background-color: brown;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZHNwZWNpZmljL3JlYWRzcGVjaWZpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjs7SUFFbEIsMkJBQTJCO0lBRzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksU0FBUztBQUNiOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9yZWFkc3BlY2lmaWMvcmVhZHNwZWNpZmljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyLWhvbGRlclxyXG57XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1hZ2UtaG9sZGVyXHJcbntcclxuICAgIHdpZHRoOiAyNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDJzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbGVmdCAycztcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMnM7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlXHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNzbGlkZXItaW1hZ2UtMTp0YXJnZXQgfiAuaW1hZ2UtaG9sZGVyXHJcbntcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG5cclxuI3NsaWRlci1pbWFnZS0yOnRhcmdldCB+IC5pbWFnZS1ob2xkZXJcclxue1xyXG4gICAgbGVmdDogLTgwMHB4O1xyXG59XHJcblxyXG4jc2xpZGVyLWltYWdlLTM6dGFyZ2V0IH4gLmltYWdlLWhvbGRlclxyXG57XHJcbiAgICBsZWZ0OiAtMTYwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWhvbGRlclxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLWNoYW5nZVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/readspecific/readspecific.component.ts":
/*!********************************************************!*\
  !*** ./src/app/readspecific/readspecific.component.ts ***!
  \********************************************************/
/*! exports provided: ReadspecificComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadspecificComponent", function() { return ReadspecificComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let ReadspecificComponent = class ReadspecificComponent {
    constructor(userService) {
        this.userService = userService;
        this.data = {};
    }
    ngOnInit() {
        this.readspecific();
    }
    readspecific() {
        this.userService.readid().subscribe((data) => {
            console.log(data);
            this.data = data.data;
        });
    }
};
ReadspecificComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ReadspecificComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-readspecific',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./readspecific.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/readspecific/readspecific.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./readspecific.component.css */ "./src/app/readspecific/readspecific.component.css")).default]
    })
], ReadspecificComponent);



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.arr = [1, 2, 5];
        this.rootURL = 'https://harshil21.pythonanywhere.com';
    }
    asJeweler(user) {
        const body = {
            email: user.email,
            username: user.username,
            password: user.password,
            confirm_password: user.confirm_password,
            IS_JEWELLER: user.IS_JEWELLER
        };
        const reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootURL + '/api/user/v1/register/', body, { headers: reqHeader });
    }
    asCitizen(user) {
        const body = {
            email: user.email,
            username: user.username,
            password: user.password,
            confirm_password: user.confirm_password,
            IS_JEWELLER: user.IS_JEWELLER
        };
        const reqheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootURL + '/api/user/v1/register/', body, { headers: reqheader });
    }
    loginUser(username, password) {
        const data = 'username=' + username + '&password=' + password + '&grant_type=password';
        const reqheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        reqheaders.append('Authorization', 'Bearer');
        return this.http.post(this.rootURL + '/api/user/v1/login/', data, { headers: reqheaders });
    }
    changePassword(password) {
        const data = {
            old_password: password.old_password,
            new_password: password.new_password,
            confirm_new_password: password.confirm_new_password
        };
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.put(this.rootURL + '/api/user/v1/change-password/', data, { headers: Headers });
    }
    createView(jeweller) {
        const info = {
            NAME_OF_FIRM: jeweller.NAME_OF_FIRM,
            ADDRESS_OF_FIRM: jeweller.ADDRESS_OF_FIRM,
            CITY: jeweller.CITY,
            STATE: jeweller.STATE,
            CONTACT_NAME: jeweller.CONTACT_NAME,
            CONTACT_NUMBER: jeweller.CONTACT_NUMBER,
            CONTACT_MAIL_ID: jeweller.CONTACT_MAIL_ID,
            GST_NUMBER: jeweller.GST_NUMBER,
            PAN_NUMBER: jeweller.PAN_NUMBER,
            OWNER_NAME: jeweller.OWNER_NAME,
            OWNER_NUMBER: jeweller.OWNER_NUMBER,
            OWNER_EMAIL: jeweller.OWNER_EMAIL
        };
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/jeweller-create/', info, { headers: Headers });
    }
    readForm() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/detail/', { headers: Headers });
    }
    readorn() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=1', { headers: Headers });
    }
    r2() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=2', { headers: Headers });
    }
    r3() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=3', { headers: Headers });
    }
    r4() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=4', { headers: Headers });
    }
    r5() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=5', { headers: Headers });
    }
    r6() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=6', { headers: Headers });
    }
    r7() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=7', { headers: Headers });
    }
    r8() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=8', { headers: Headers });
    }
    r9() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=9', { headers: Headers });
    }
    r10() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=10', { headers: Headers });
    }
    r11() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=11', { headers: Headers });
    }
    r12() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=12', { headers: Headers });
    }
    r13() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=13', { headers: Headers });
    }
    r14() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=14', { headers: Headers });
    }
    readid() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/', { headers: Headers });
    }
    ornmetal() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/metal/', { headers: Headers });
    }
    ornoccasion() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/occasion/', { headers: Headers });
    }
    ornGift() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/gift/', { headers: Headers });
    }
    ornTheme() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/theme/', { headers: Headers });
    }
    ornCurated() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/curatedby/', { headers: Headers });
    }
    ornFestival() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/festival/', { headers: Headers });
    }
    ornRstyle() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/ring-style/', { headers: Headers });
    }
    ornRsize() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/ring-size/', { headers: Headers });
    }
    ornBsize() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/bracelet-size/', { headers: Headers });
    }
    ornBanglesize() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/bangle-size/', { headers: Headers });
    }
    ornChainlength() {
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/chain-length/', { headers: Headers });
    }
    update(jeweller) {
        const info = {
            NAME_OF_FIRM: jeweller.NAME_OF_FIRM,
            ADDRESS_OF_FIRM: jeweller.ADDRESS_OF_FIRM,
            CITY: jeweller.CITY,
            STATE: jeweller.STATE,
            CONTACT_NAME: jeweller.CONTACT_NAME,
            CONTACT_NUMBER: jeweller.CONTACT_NUMBER,
            CONTACT_MAIL_ID: jeweller.CONTACT_MAIL_ID,
            GST_NUMBER: jeweller.GST_NUMBER,
            PAN_NUMBER: jeweller.PAN_NUMBER,
            OWNER_NAME: jeweller.OWNER_NAME,
            OWNER_NUMBER: jeweller.OWNER_NUMBER,
            OWNER_EMAIL: jeweller.OWNER_EMAIL
        };
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.put(this.rootURL + '/api/jeweller/v1/update/', info, { headers: Headers });
    }
    postFile(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        formData.append('ORNAMENT_METAL', ORNAMENT_METAL);
        formData.append('ORNAMENT_OCCASION', ORNAMENT_OCCASION);
        formData.append('ORNAMENT_GIFT', ORNAMENT_GIFT);
        formData.append('ORNAMENT_THEME', ORNAMENT_THEME);
        formData.append('ORNAMENT_CURATED_BY', ORNAMENT_CURATED_BY);
        formData.append('ORNAMENT_FESTIVAL', ORNAMENT_FESTIVAL);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    postFill(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    postFeil(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        formData.append('ORNAMENT_METAL', ORNAMENT_METAL);
        formData.append('ORNAMENT_OCCASION', ORNAMENT_OCCASION);
        formData.append('ORNAMENT_GIFT', ORNAMENT_GIFT);
        formData.append('ORNAMENT_THEME', ORNAMENT_THEME);
        formData.append('ORNAMENT_CURATED_BY', ORNAMENT_CURATED_BY);
        formData.append('ORNAMENT_FESTIVAL', ORNAMENT_FESTIVAL);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    multi(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    muli(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, rsizea, rsizeb, ORNAMENT_RING_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        formData.append('ORNAMENT_METAL', ORNAMENT_METAL);
        formData.append('ORNAMENT_OCCASION', asion);
        formData.append('ORNAMENT_OCCASION', asian);
        formData.append('ORNAMENT_GIFT', asan);
        formData.append('ORNAMENT_GIFT', asin);
        formData.append('ORNAMENT_THEME', themea);
        formData.append('ORNAMENT_THEME', themeb);
        formData.append('ORNAMENT_CURATED_BY', curateda);
        formData.append('ORNAMENT_CURATED_BY', curatedb);
        formData.append('ORNAMENT_FESTIVAL', festia);
        formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_RING_STYLE', ORNAMENT_RING_STYLE);
        formData.append('ORNAMENT_RING_SIZE', rsizea);
        formData.append('ORNAMENT_RING_SIZE', rsizeb);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    mli(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, rsizea, rsizeb, ORNAMENT_RING_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        formData.append('ORNAMENT_RING_STYLE', ORNAMENT_RING_STYLE);
        for (var i of rsizea) {
            formData.append('ORNAMENT_RING_SIZE', i);
        }
        // formData.append('ORNAMENT_RING_SIZE', rsizea);
        // formData.append('ORNAMENT_RING_SIZE', rsizeb);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    ear(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_EARRING_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    nosepin(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_NOSEPIN_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_NOSEPIN_STYLE', ORNAMENT_NOSEPIN_STYLE);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    pendantwithearing(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_EARRING_STYLE, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        //  formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
        formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    bracelet(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_BRACELET_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_BRACELET_STYLE', ORNAMENT_BRACELET_STYLE);
        for (var i of bsizea) {
            formData.append('ORNAMENT_BRACELET_SIZE', i);
        }
        // formData.append('ORNAMENT_BRACELET_SIZE', bsizeb);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    bangles(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_BANGLE_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_BANGLE_STYLE', ORNAMENT_BANGLE_STYLE);
        for (var i of bsizea) {
            formData.append('ORNAMENT_BANGLE_SIZE', i);
        }
        // formData.append('ORNAMENT_BANGLE_SIZE', bsizeb);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    chain(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_CHAIN_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
        for (var i of bsizea) {
            formData.append('ORNAMENT_CHAIN_LENGTH', i);
        }
        // formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    necklace(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_NECKLACE_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_NECKLACE_STYLE', ORNAMENT_NECKLACE_STYLE);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    // tslint:disable-next-line: max-line-length
    chaitpen(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_CHAIN_STYLE, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
        for (var i of bsizea) {
            formData.append('ORNAMENT_CHAIN_LENGTH', i);
        }
        //formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);
        formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    pendant(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        for (var i of metala) {
            formData.append('ORNAMENT_METAL', i);
        }
        for (var i of asion) {
            formData.append('ORNAMENT_OCCASION', i);
        }
        // formData.append('ORNAMENT_OCCASION', asian);
        for (var i of asan) {
            formData.append('ORNAMENT_GIFT', i);
        }
        // formData.append('ORNAMENT_GIFT', asin);
        for (var i of themea) {
            formData.append('ORNAMENT_THEME', i);
        }
        // formData.append('ORNAMENT_THEME', themeb);
        for (var i of curateda) {
            formData.append('ORNAMENT_CURATED_BY', i);
        }
        // formData.append('ORNAMENT_CURATED_BY', curatedb);
        for (var i of festia) {
            formData.append('ORNAMENT_FESTIVAL', i);
        }
        // formData.append('ORNAMENT_FESTIVAL', festib);
        formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, { headers: Headers });
    }
    postupdate(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
        const formData = new FormData();
        formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
        formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
        formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
        formData.append('WEIGHT', WEIGHT);
        formData.append('ORNAMENT_METAL', ORNAMENT_METAL);
        formData.append('ORNAMENT_OCCASION', ORNAMENT_OCCASION);
        formData.append('ORNAMENT_GIFT', ORNAMENT_GIFT);
        formData.append('ORNAMENT_THEME', ORNAMENT_THEME);
        formData.append('ORNAMENT_CURATED_BY', ORNAMENT_CURATED_BY);
        formData.append('ORNAMENT_FESTIVAL', ORNAMENT_FESTIVAL);
        formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
        formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
        formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
        formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
        const Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'token ' + localStorage.getItem('token'));
        return this.http.put(this.rootURL + '/api/jeweller/v1/1/ornament/15/update/', formData, { headers: Headers });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/update/chainpendat/chainpendat.component.css":
/*!**************************************************************!*\
  !*** ./src/app/update/chainpendat/chainpendat.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS9jaGFpbnBlbmRhdC9jaGFpbnBlbmRhdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/update/chainpendat/chainpendat.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/update/chainpendat/chainpendat.component.ts ***!
  \*************************************************************/
/*! exports provided: ChainpendatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainpendatComponent", function() { return ChainpendatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChainpendatComponent = class ChainpendatComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChainpendatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chainpendat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chainpendat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/chainpendat/chainpendat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chainpendat.component.css */ "./src/app/update/chainpendat/chainpendat.component.css")).default]
    })
], ChainpendatComponent);



/***/ }),

/***/ "./src/app/update/earrings/earrings.component.css":
/*!********************************************************!*\
  !*** ./src/app/update/earrings/earrings.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS9lYXJyaW5ncy9lYXJyaW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/update/earrings/earrings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/update/earrings/earrings.component.ts ***!
  \*******************************************************/
/*! exports provided: EarringsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarringsComponent", function() { return EarringsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EarringsComponent = class EarringsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EarringsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-earrings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./earrings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/earrings/earrings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./earrings.component.css */ "./src/app/update/earrings/earrings.component.css")).default]
    })
], EarringsComponent);



/***/ }),

/***/ "./src/app/update/nosepin/nosepin.component.css":
/*!******************************************************!*\
  !*** ./src/app/update/nosepin/nosepin.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS9ub3NlcGluL25vc2VwaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/update/nosepin/nosepin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/update/nosepin/nosepin.component.ts ***!
  \*****************************************************/
/*! exports provided: NosepinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosepinComponent", function() { return NosepinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NosepinComponent = class NosepinComponent {
    constructor() { }
    ngOnInit() {
    }
};
NosepinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nosepin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nosepin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/nosepin/nosepin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nosepin.component.css */ "./src/app/update/nosepin/nosepin.component.css")).default]
    })
], NosepinComponent);



/***/ }),

/***/ "./src/app/update/pendantearring/pendantearring.component.css":
/*!********************************************************************!*\
  !*** ./src/app/update/pendantearring/pendantearring.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS9wZW5kYW50ZWFycmluZy9wZW5kYW50ZWFycmluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/update/pendantearring/pendantearring.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/update/pendantearring/pendantearring.component.ts ***!
  \*******************************************************************/
/*! exports provided: PendantearringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendantearringComponent", function() { return PendantearringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PendantearringComponent = class PendantearringComponent {
    constructor() { }
    ngOnInit() {
    }
};
PendantearringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pendantearring',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pendantearring.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/pendantearring/pendantearring.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pendantearring.component.css */ "./src/app/update/pendantearring/pendantearring.component.css")).default]
    })
], PendantearringComponent);



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UpdateComponent = class UpdateComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.panpattern = '[0-9]{10}';
        this.gstpattern = '[0-9]{15}';
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null) {
            form.reset();
        }
        this.jeweller = {
            NAME_OF_FIRM: '',
            ADDRESS_OF_FIRM: '',
            CITY: '',
            STATE: '',
            CONTACT_NAME: '',
            CONTACT_NUMBER: '',
            CONTACT_MAIL_ID: '',
            GST_NUMBER: '',
            PAN_NUMBER: '',
            OWNER_NAME: '',
            OWNER_NUMBER: '',
            OWNER_EMAIL: ''
        };
    }
    addres() {
        if (document.getElementById('same').checked) {
            console.log('checked');
            document.getElementById('owner_number').value = document.
                getElementById('contact_number').value;
            document.getElementById('owner_email').value = document.
                getElementById('contact_mail_id').value;
        }
        else {
            console.log('uncheked');
            document.getElementById('owner_number').value = '';
            document.getElementById('owner_email').value = '';
        }
        console.log(document.getElementById('owner_email').value);
    }
    OnSubmit(form) {
        this.userService.update(form.value)
            .subscribe(res => {
            // console.log(res);
            this.router.navigate(['./read']);
        }, err => {
            console.log(err.message);
        });
    }
};
UpdateComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")).default]
    })
], UpdateComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UserComponent = class UserComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    jeweler() {
        this.router.navigate(['/jeweler']);
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Developer\Angular 8\start up\harsh project\third\startUp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map