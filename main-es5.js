function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/as-jeweler/as-jeweler.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/as-jeweler/as-jeweler.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAsJewelerAsJewelerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col s8 offset-s2\">\n    <div class=\"card\">\n      <div class=\"sm-jumbotron center-align\">\n        <h2>Jeweller Registration</h2>\n      </div>\n        <form class=\"col s12 white\" #jewelerRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(jewelerRegistrationForm)\">\n          <div class=\"row\">\n            <div class=\"input-field col s6\"> \n              <input id=\"email\" type=\"text\" class=\"validate\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" [pattern]=\"emailPattern\" required >\n              <label for=\"email\">Email</label>\n              <span class=\"helper-text\" data-error=\"Invalid Email!\"></span>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"username\" class=\"validate\" type=\"text\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"user.username\" required >\n                <label for=\"username\">Username</label>\n                <span class=\"helper-text\" data-error=\"Required Username !\" ></span>\n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"input-field col s6\">\n                  <input id=\"password\" type=\"password\" class=\"validate\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" [pattern]=\"passwordPattern\" required >\n                  <label for=\"password\">Password</label>\n                  <span class=\"helper-text\" data-error=\"Password requires uppercase lowercase symbols and numbers!\"></span>\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"confirm_password\" type=\"password\" class=\"validate\" name=\"confirm_password\" #confirm_password=\"ngModel\" [(ngModel)]=\"user.confirm_password\" [pattern]=\"passwordPattern\" required >\n                  <label for=\"confirm_password\">Confirm Password</label>\n                  <span class=\"helper-text\" data-error=\"Password requires uppercase lowercase symbols and numbers!\"></span>\n              </div>\n          </div>\n          <div class=\"row\">\n            <h6>check these two option to confirm you are signing up as:</h6>\n              <p>\n                <label>\n                  <input name=\"IS_JEWELLER\" #IS_JEWELLER=\"ngModel\" type=\"radio\" id=\"tradio\" value=\"true\" [(ngModel)]=\"user.IS_JEWELLER\" required/>\n                  <span>As Jeweler</span>\n                </label>\n              </p>\n              <p>\n                <label>\n                  <input name=\"IS_JEWELLER\" #IS_JEWELLER=\"ngModel\" type=\"radio\" id=\"fradio\" value=\"false\" [(ngModel)]=\"user.IS_JEWELLER\" required/>\n                  <span>as Customer</span>\n                </label>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <button [disabled]=\"!jewelerRegistrationForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Register</button>\n\n                <hr>\n                <hr>\n                <button class=\"btn-large btn-submit\" type=\"submit\" (click)=jeweler()>Already a user login</button>\n              </div>\n          </div>\n        </form>\n    </div>\n  </div>\n</div> \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-view/create-view.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-view/create-view.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateViewCreateViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>create profile</h2>\n        </div>\n          <form class=\"col s12 white\" #createViewForm=\"ngForm\" (ngSubmit)=\"OnSubmit(createViewForm)\">\n            <div class=\"row\">\n              <div class=\"input-field col s6\"> \n                <input id=\"name_of_firm\" type=\"text\" class=\"validate\" name=\"NAME_OF_FIRM\" #NAME_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.NAME_OF_FIRM\"  required >\n                <label for=\"name_of_firm\">Name of Firm</label>\n                <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"address_of_firm\" class=\"validate\" type=\"text\" name=\"ADDRESS_OF_FIRM\" #ADDRESS_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.ADDRESS_OF_FIRM\" required  >\n                  <label for=\"address_of_firm\">ADDRESS OF FIRM</label>\n                  <span class=\"helper-text\" data-error=\"required!field\" data-success=\"right\"></span>\n\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"row col s6\"> \n                  <select class=\"browser-default\" name=\"CITY\" #CITY=\"ngModel\" [(ngModel)]=\"jeweller.CITY\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option  value=\"Pune\"> Pune</option>\n                    <option value=\"Mumbai\" >Mumbai</option>\n                    <option   value=\"Vadodra\" >Vadodra</option>\n                    <option   value=\"Ahmedabad\" >Ahmedabad</option>\n                  </select>\n                </div>\n                <div class=\"row col s6\">\n                  <select class=\"browser-default\" name=\"STATE\" #STATE=\"ngModel\" [(ngModel)]=\"jeweller.STATE\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option value=\"Maharashtra\"> Maharashtra</option>\n                    <option value=\"Gujrat\" >Gujrat</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_name\" type=\"text\" class=\"validate\" name=\"CONTACT_NAME\" #CONTACT_NAME=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NAME\" required >\n                  <label for=\"contact_name\">CONTACT_NAME</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"contact_number\" class=\"validate\" type=\"text\" name=\"CONTACT_NUMBER\" #CONTACT_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NUMBER\" required >\n                    <label for=\"contact_number\">CONTACT_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_mail_id\" type=\"text\" class=\"validate\" name=\"CONTACT_MAIL_ID\" #CONTACT_MAIL_ID=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_MAIL_ID\" [pattern]=\"emailPattern\" required >\n                  <label for=\"contact_mail_id\">CONTACT MAIL ID</label>\n                  <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"gst_number\" class=\"validate\" type=\"text\" name=\"GST_NUMBER\" #GST_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.GST_NUMBER\" required  >\n                    <label for=\"gst_number\">GST NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"GST Number should contain 15 characters\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"pan_number\" type=\"text\" class=\"validate\" name=\"PAN_NUMBER\" #PAN_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.PAN_NUMBER\" required >\n                  <label for=\"pan_number\">PAN NUMBER</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_name\" class=\"validate\" type=\"text\" name=\"OWNER_NAME\" #OWNER_NAME=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NAME\" required >\n                    <label for=\"owner_name\">OWNER_NAME</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n            <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_number\" type=\"text\" class=\"validate\" name=\"OWNER_NUMBER\" #OWNER_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NUMBER\" required >\n                    <label for=\"owner_number\">OWNER_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required Number!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_email\" type=\"text\" class=\"validate\" name=\"OWNER_EMAIL\" #OWNER_EMAIL=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_EMAIL\" [pattern]=\"emailPattern\" required >\n                    <label for=\"owner_email\">OWNER_EMAIL</label>\n                    <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!createViewForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Create My Profile</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/createvie/createvie.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createvie/createvie.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreatevieCreatevieComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Image Library</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\" id=\"ORNAMENT_TYPE\" required>\n              <label for=\"ORNAMENT_TYPE\">ORNAMENT_TYPE</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\" id=\"ORNAMENT_MATERIAL\" required>\n              <label for=\"ORNAMENT_MATERIAL\">ORNAMENT_MATERIAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" id=\"ORNAMENT_SHOPFOR\" required>\n              <label for=\"ORNAMENT_SHOPFOR\">ORNAMENT_SHOPFOR</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n              <label for=\"WEIGHT\">WEIGHT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" id=\"ORNAMENT_METAL\" required>\n              <label for=\"ORNAMENT_METAL\">ORNAMENT_METAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" id=\"ORNAMENT_OCCASION\" required>\n              <label for=\"ORNAMENT_OCCASION\">ORNAMENT_OCCASION</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\" id=\"ORNAMENT_GIFT\" required>\n              <label for=\"ORNAMENT_GIFT\">ORNAMENT_GIFT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\" id=\"ORNAMENT_THEME\" required>\n              <label for=\"ORNAMENT_THEME\">ORNAMENT_THEME</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\" id=\"ORNAMENT_CURATED_BY\" required>\n              <label for=\"ORNAMENT_CURATED_BY\">ORNAMENT_CURATED_BY</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" id=\"ORNAMENT_FESTIVAL\" required>\n              <label for=\"ORNAMENT_FESTIVAL\">ORNAMENT_FESTIVAL</label>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || !imageForm.valid\">Create new form</button>\n        </form>\n      </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/createvieu/createvieu.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createvieu/createvieu.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreatevieuCreatevieuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" required>\n                  <option value=\"\" disabled selected>Choose your Ornament OCCASION</option>\n                  <option value=\"1\">Wedding</option>\n                  <option value=\"2\" >Anniversary</option>\n                  <option value=\"3\" >Evening</option>\n                  <option value=\"4\" >Work-Wear</option>\n                  <option value=\"5\">Everyday</option>\n                  <option value=\"6\">Birthday</option>\n                  <option value=\"7\">Engagement</option>\n                  <option value=\"8\">Graduation</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \"   >\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/createviev/createviev.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createviev/createviev.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreatevievCreatevievComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Occasion</option>\n                <option value=\"1\"> Wedding</option>\n                <option value=\"2\" >Anniversary</option>\n                <option value=\"3\" >Evening</option>\n                <option value=\"4\" >Work-Wear</option>\n                <option value=\"5\" >Everyday</option>\n                <option value=\"6\" >Birthday</option>\n                <option value=\"7\" >Engagement</option>\n                <option value=\"8\" >Graduation</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>customer works</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"blue-grey\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">Logo</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li>\n          <a (click)=\"Logout()\">Logout</a>\n          <a class=\"waves-effect waves-light btn-large\"  (click)=changepassword()>Change Password</a>\n        </li>\n      </ul>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jewelornam/jewelornam.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jewelornam/jewelornam.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJewelornamJewelornamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Candidate Profile</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT,ORNAMENT_THEME,ORNAMENT_CURATED_BY,ORNAMENT_FESTIVAL,CAD_FILE,IMAGE_FILE_ONE,IMAGE_FILE_TWO,IMAGE_FILE_THREE)\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\" id=\"ORNAMENT_TYPE\" required>\n              <label for=\"ORNAMENT_TYPE\">Ornament Type</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\" id=\"ORNAMENT_MATERIAL\" required>\n              <label for=\"ORNAMENT_MATERIAL\">ORNAMENT_MATERIAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" id=\"ORNAMENT_SHOPFOR\" required>\n              <label for=\"ORNAMENT_SHOPFOR\">ORNAMENT SHOPFOR</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n              <label for=\"WEIGHT\">WEIGHT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" id=\"ORNAMENT_METAL\" required>\n              <label for=\"ORNAMENT_METAL\">ORNAMENT_METAL</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" id=\"ORNAMENT_OCCASION\" required>\n              <label for=\"ORNAMENT_OCCASION\">ORNAMENT OCCASION</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\" id=\"ORNAMENT_GIFT\" required>\n              <label for=\"ORNAMENT_GIFT\">ORNAMENT_GIFT</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\" id=\"ORNAMENT_THEME\" required>\n              <label for=\"ORNAMENT_THEME\">ORNAMENT_THEME</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\" id=\"ORNAMENT_CURATED_BY\" required>\n              <label for=\"ORNAMENT_CURATED_BY\">ORNAMENT_CURATED_BY</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" id=\"ORNAMENT_FESTIVAL\" required>\n              <label for=\"ORNAMENT_FESTIVAL\">ORNAMENT_FESTIVAL</label>\n            </div>\n          </div>\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileoneInput($event.target.files)\">\n\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFiletwoInput($event.target.files)\">\n\n          <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFilethreeInput($event.target.files)\">\n          \n          <button type=\"submit\" class=\"btn-large btn-submit\" >Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>User Login</h2>\n        </div> \n<div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\n    <i class=\"material-icons\">error</i> Incorrect username or password\n</div>\n<form #loginForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmit(username.value,password.value)\">\n   <div class=\"row\">\n     <div class=\"input-field col s12\">\n       <i class=\"material-icons prefix\">account_circle</i>\n       <input type=\"text\" #username ngModel name=\"username\" placeholder=\"username\" required>\n     </div>\n   </div>\n   <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">vpn_key</i>\n        <input type=\"password\" #password ngModel name=\"password\" placeholder=\"Password\" required>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\n        </div>\n      </div>\n</form>\n\n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/multiselect/multiselect.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multiselect/multiselect.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMultiselectMultiselectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Image Library</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\" id=\"ORNAMENT_TYPE\" required>\n                    <option value=\"\" disabled selected>Choose</option>\n                    <option value=\"1\"> 1</option>\n                    <option value=\"2\" >2</option>\n                    <option value=\"3\" >3</option>\n                    <option value=\"4\" >4</option>\n\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n            </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <h6>check these two option to confirm you are signing up as:</h6>\n              <p>\n                <label>\n                  <input #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" type=\"radio\" id=\"oradio\" value=\"1\"  required/>\n                  <span>1 in ORNAMENT_FESTIVAL</span>\n                </label>\n              </p>\n              <p>\n                <label>\n                  <input #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" type=\"radio\" id=\"tradio\" value=\"2\"  required/>\n                  <span>2 in ORNAMENT_FESTIVAL</span>\n                </label>\n              </p>\n              <p>\n                <label>\n                  <input #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\" type=\"radio\" id=\"rradio\" value=\"3\"  required/>\n                  <span>3 in ORNAMENT_FESTIVAL</span>\n                </label>\n              </p>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || !imageForm.valid\">Create Multi</button>\n        </form>\n      </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"blue-grey\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">Logo</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      </ul>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bangles/bangles.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bangles/bangles.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentBanglesBanglesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bangles</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BANGLE_SIZE,ORNAMENT_BANGLE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"5\" >Bangles</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BANGLE_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BANGLE_SIZE ngModel name=\"ORNAMENT_BANGLE_SIZE\"  required/>\n                    <span>{{answer.BANGLE_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_BANGLE_STYLE ngModel name=\"ORNAMENT_BANGLE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Broad Bangles</option>\n                    <option value=\"2\" >Oval</option>\n                    <option value=\"3\" >Single Line</option>\n                    <option value=\"4\" >Thin Bangles</option>\n                    <option value=\"5\" >Stackable</option>\n                    <option value=\"6\" >Mens Kada</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Bangles Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bracelet/bracelet.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bracelet/bracelet.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentBraceletBraceletComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bracelet</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BRACELET_SIZE,ORNAMENT_BRACELET_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"4\" >Bracelet</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BRACELET_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BRACELET_SIZE ngModel name=\"ORNAMENT_BRACELET_SIZE\"  required/>\n                    <span>{{answer.BRACELET_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_BRACELET_STYLE ngModel name=\"ORNAMENT_BRACELET_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Tennis</option>\n                    <option value=\"2\" >Flexible</option>\n                    <option value=\"3\" >Oval</option>\n                    <option value=\"4\" >Mangalsutra Bracelets</option>\n                    <option value=\"5\" >Chain Bracelets</option>\n                    <option value=\"6\" >Kids Bracelets</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Bracelet Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chain/chain.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chain/chain.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentChainChainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"6\" >Chain</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  required/>\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Chain Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chainwithpendant/chainwithpendant.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chainwithpendant/chainwithpendant.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentChainwithpendantChainwithpendantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain with Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  required/>\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\">Casual </option>\n                    <option value=\"2\" >Initials</option>\n                    <option value=\"3\" >Mother-Daughter</option>\n                    <option value=\"4\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your Chain With Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/cufflink/cufflink.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/cufflink/cufflink.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentCufflinkCufflinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Cuff Link</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"13\" >cuff links</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Cuff Link Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/mangalsutra/mangalsutra.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/mangalsutra/mangalsutra.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentMangalsutraMangalsutraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Mangalsutra</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          \n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Mangalsutra Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/necklace/necklace.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/necklace/necklace.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentNecklaceNecklaceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Necklace</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NECKLACE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"8\" >Necklace</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_NECKLACE_STYLE ngModel name=\"ORNAMENT_NECKLACE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bar Necklace</option>\n                    <option value=\"2\" >Lariat</option>\n                    <option value=\"3\" >Y Necklace</option>\n                    <option value=\"4\" >Mala</option>\n                    <option value=\"5\" >Charms</option>\n                    <option value=\"6\" >Long Necklace</option>\n                    <option value=\"7\" >Religious</option>\n                    <option value=\"8\" >Multi-Layered</option>\n                    <option value=\"9\" >Casual Necklace</option>\n                    <option value=\"10\" >Everyday Wears</option>\n                    <option value=\"11\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Necklace Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaearringtype/ornaearringtype.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaearringtype/ornaearringtype.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentOrnaearringtypeOrnaearringtypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ear Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"2\" >Ear Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Drops and Dangler</option>\n                    <option value=\"2\" >Studs and Tops</option>\n                    <option value=\"3\" >Hoops and Huggies</option>\n                    <option value=\"4\" >Jhumkas</option>\n                    <option value=\"5\" >Sui Dhaga</option>\n                    <option value=\"6\" >Ear Cuffs and Hugs</option>\n                    <option value=\"7\" >Chandeliers</option>\n                    <option value=\"8\" >Chand Bali</option>\n                    <option value=\"9\" >Mismatched</option>\n                    <option value=\"10\" >Multi Pierced</option>\n                    <option value=\"11\" >Ear Jackets</option>\n                    <option value=\"12\" >Stud with Chain Clips</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ear Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornamentnosepin/ornamentnosepin.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornamentnosepin/ornamentnosepin.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentOrnamentnosepinOrnamentnosepinComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Nosepin</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NOSEPIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"3\" >Nosepin</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_NOSEPIN_STYLE ngModel name=\"ORNAMENT_NOSEPIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament nosepin STYLE</option>\n                    <option value=\"1\"> Wire</option>\n                    <option value=\"2\" >Ring</option>\n                    <option value=\"3\" >Screw</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Nosepin Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaringtype/ornaringtype.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaringtype/ornaringtype.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentOrnaringtypeOrnaringtypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_RING_SIZE,ORNAMENT_RING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(change)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Ringsize.ORNAMENT_RING_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Size(answer.pk)\" #ORNAMENT_RING_SIZE ngModel name=\"ORNAMENT_RING_SIZE\"  required/>\n                    <span>{{answer.RING_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_RING_STYLE ngModel name=\"ORNAMENT_RING_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bands</option>\n                    <option value=\"2\" >Casual Rings</option>\n                    <option value=\"3\" >Cocktail</option>\n                    <option value=\"4\" >Cluster</option>\n                    <option value=\"5\" >Bridal Set</option>\n                    <option value=\"6\" >Chain Rings</option>\n                    <option value=\"7\" >Midi Rings</option>\n                    <option value=\"8\" >Holo</option>\n                    <option value=\"9\" >Mangalsutra Rings</option>\n                    <option value=\"10\" >Flexi Rings</option>\n                    <option value=\"11\" >Half Eternity</option>\n                    <option value=\"12\" >Stackable</option>\n                    <option value=\"13\" >Twin Rings</option>\n                    <option value=\"14\" >Fashion</option>\n                    <option value=\"15\" >Religious</option>\n                    <option value=\"16\" >Wide Rings</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendant/pendant.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendant/pendant.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentPendantPendantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"11\" >Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Casual</option>\n                  <option value=\"2\" >Initials</option>\n                  <option value=\"3\" >Mother-Daughter</option>\n                  <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendantearringtype/pendantearringtype.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendantearringtype/pendantearringtype.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentPendantearringtypePendantearringtypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant with Ear ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Drops and Dangler</option>\n                    <option value=\"2\" >Studs and Tops</option>\n                    <option value=\"3\" >Hoops and Huggies</option>\n                    <option value=\"4\" >Jhumkas</option>\n                    <option value=\"5\" >Sui Dhaga</option>\n                    <option value=\"6\" >Ear Cuffs and Hugs</option>\n                    <option value=\"7\" >Chandeliers</option>\n                    <option value=\"8\" >Chand Bali</option>\n                    <option value=\"9\" >Mismatched</option>\n                    <option value=\"10\" >Multi Pierced</option>\n                    <option value=\"11\" >Ear Jackets</option>\n                    <option value=\"12\" >Stud with Chain Clips</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Casual</option>\n                  <option value=\"2\" >Initials</option>\n                  <option value=\"3\" >Mother-Daughter</option>\n                  <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant with Ear ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/sets/sets.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/sets/sets.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentSetsSetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Sets</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"10\" >Sets</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Sets Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament1multiselect/ornament1multiselect.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament1multiselect/ornament1multiselect.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnament1multiselectOrnament1multiselectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                  <ng-container>\n                      <li>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Wedding\" value =\"1\" (click)=\"Wedding()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Wedding</span>\n                        </label>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Anniversary\" value =\"2\" (click)=\"Anniversary()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Anniversary</span>\n                        </label>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Evening\" value =\"3\" (click)=\"Answer()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Evening</span>\n                        </label>\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" id=\"Work-Wear\" value =\"4\" (click)=\"Answer()\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                          <span>Work-Wear</span>\n                        </label>\n                        \n                      </li>\n                     \n\n                  </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \"   >\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentcufflink/ornamentcufflink.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentcufflink/ornamentcufflink.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentcufflinkOrnamentcufflinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n          <div class=\"card-panel blue-grey\">\n            <h4 class=\"center white-text\">Choose your Ornament type</h4>\n          </div>\n    \n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=ring()>ring</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=earring()>earring</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=nosepin()>nosepin</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=bracelet()>bracelet</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=bangles()>bangles</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=chain()>chain</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=chainwithpendant()>chainwithpendant</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=necklace()>necklace</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=Mangalsutra()>Mangalsutra</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=sets()>sets</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=pendant()>pendant</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=pendantwithearing()>pendantwithearing</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=cufflink()>cufflink</button><hr>\n      \n      </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentmultiselect/ornamentmultiselect.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentmultiselect/ornamentmultiselect.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentmultiselectOrnamentmultiselectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentread/ornamentread.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentread/ornamentread.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentreadOrnamentreadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n        <div class=\"card blue-grey darken-1\" *ngFor=\"let question of data.results\">\n          <div class=\"card_content white_text\">\n            <span class=\"card-title\">#Q</span>\n            <p>{{question.ORNAMENT_ID}}</p>\n            <p>{{question.JEWELLER_ID}}</p>\n            <p>{{question.WEIGHT}}</p>\n            <p><strong>Your ornament : </strong> <img src=\"{{question.ornament_file_field.IMAGE_FILE_ONE}}\" style=\"width: 100px;\" ></p>          \n          </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container\">\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page1()\">1</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page2()\">2</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page3()\">3</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page4()\">4</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page5()\">5</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page6()\">6</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page7()\">7</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page8()\">8</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page9()\">9</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page10()\">10</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page11()\">11</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page12()\">12</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page13()\">13</button>\n  <button type=\"submit\" class=\"btn-large btn-submit\" (click)=\"page14()\">14</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/neck/neck.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/neck/neck.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentsNeckNeckComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/ornaments.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/ornaments.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentsOrnamentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 \">\n        <div class=\"card grey\">\n          <div class=\"card-tabs\">\n            <ul class=\"tabs tabs-fixed-width tabs-transparent\">\n              <li class=\"tab\">\n                <a routerLink='/rings' routerLinkActive='active' >Ring</a>\n              </li>\n              <li class=\"tab\">\n                <a  routerLink='/neck' routerLinkActive='active'>neck</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-content white\">\n            <div class=\"row\">\n              <router-outlet></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/rings/rings.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/rings/rings.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentsRingsRingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentupdate/ornamentupdate.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentupdate/ornamentupdate.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentupdateOrnamentupdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Form</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                    <option value=\"2\" >Ear Ring</option>\n                    <option value=\"3\" >Nosepin</option>\n                    <option value=\"4\" >Bracelet</option>\n                    <option value=\"5\" >Bangles</option>\n                    <option value=\"6\" >Chain</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                    <option value=\"8\" >Necklace</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                    <option value=\"10\" >Sets</option>\n                    <option value=\"11\" >Pendant</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                    <option value=\"13\" >Cuff Link</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\" required>\n                  <option value=\"\" disabled selected>Choose your Ornament OCCASION</option>\n                  <option value=\"1\">Wedding</option>\n                  <option value=\"2\" >Anniversary</option>\n                  <option value=\"3\" >Evening</option>\n                  <option value=\"4\" >Work-Wear</option>\n                  <option value=\"5\">Everyday</option>\n                  <option value=\"6\">Birthday</option>\n                  <option value=\"7\">Engagement</option>\n                  <option value=\"8\">Graduation</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required>\n                <option value=\"\" disabled selected>Choose your Ornament Gift Type </option>\n                <option value=\"1\"> Gift for Kids</option>\n                <option value=\"2\" >Gift for Babies</option>\n                <option value=\"3\" >Your Baby First Ornament</option>\n                <option value=\"4\" >Fun Designs for New Borns</option>\n                <option value=\"5\"> Gift for Sister</option>\n                <option value=\"6\" >Gift for Fashion Forward</option>\n                <option value=\"7\" >Gift for Classy Sister</option>\n                <option value=\"8\" >Gift for Baby Sister</option>            \n                <option value=\"9\"> Gift for Creative Sister</option>\n                <option value=\"10\" >Gift for Daughter</option>\n                <option value=\"11\"> Gift for Mom</option>\n                <option value=\"12\" >The Cool Mom</option>\n                <option value=\"13\" >The Creative Mom</option>\n                <option value=\"14\" >The Classic Mom</option>\n                <option value=\"15\"> Mom and Me</option>\n                <option value=\"16\" >Mother's Day</option>\n                <option value=\"17\" >Gift for Father</option>\n                <option value=\"18\" >Father's Day</option>\n                <option value=\"19\"> Gift for Brother</option>\n                <option value=\"20\" >Gift for Wife</option>\n                <option value=\"21\" >Gift for Husband</option>\n                <option value=\"22\" >Gift for Girlfriend</option>            \n                <option value=\"23\"> Gift for Boyfriend</option>\n                <option value=\"24\" >Birthday Gift for Her</option>\n                <option value=\"25\"> Birthday Gift for Him</option>\n                <option value=\"26\" >Wedding Gift for Her</option>\n                <option value=\"27\" >Wedding Gift for Him</option>\n                <option value=\"28\" >Anniversary Gift for her</option>\n                <option value=\"29\" >Anniversary Gift for Him</option>\n                <option value=\"30\" >Gift for Bestfriend</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required>\n                <option value=\"\" disabled selected>Choose your ornament theme</option>\n                <option value=\"1\"> Classic</option>\n                <option value=\"2\" >Leaf</option>\n                <option value=\"3\" >Contemporary</option>\n                <option value=\"4\" >Designer</option>\n                <option value=\"5\"> Fashion</option>\n                <option value=\"6\" >Heart</option>\n                <option value=\"7\" >Religious</option>\n                <option value=\"8\" >Traditional</option>            \n                <option value=\"9\"> Couple Bands</option>\n                <option value=\"10\" >Butterfly</option>\n                <option value=\"11\"> Cluster</option>\n                <option value=\"12\" >Geometry</option>\n                <option value=\"13\" >Antique</option>\n                <option value=\"14\" >Italian</option>\n                <option value=\"15\"> Indian</option>\n                <option value=\"16\" >Tassels</option>\n                <option value=\"17\" >Navratna</option>\n                <option value=\"18\" >Seven Stone</option>\n                <option value=\"19\"> Alphabet</option>\n                <option value=\"20\" >Ethnic</option>\n                <option value=\"21\" >Promise Ring</option>\n                <option value=\"22\" >Quirky</option>            \n                <option value=\"23\"> Bow</option>\n                <option value=\"24\" >Minimalist</option>\n                <option value=\"25\"> Enchanted Animal Design</option>\n                <option value=\"26\" >Star Shaped Jewellery</option>\n                <option value=\"27\" >Modern</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required>\n                <option value=\"\" disabled selected>Choose your Curated-By</option>\n                <option value=\"1\"> New Arrivals</option>\n                <option value=\"2\" >The Warrior</option>\n                <option value=\"3\" >The Givers</option>\n                <option value=\"4\" >Most Whislisted</option>\n                <option value=\"5\"> Best Sellers</option>\n                <option value=\"6\" >The Trendsetter</option>\n                <option value=\"7\" >Limited Edition</option>\n                <option value=\"8\" >Star of the Month</option>            \n                <option value=\"9\"> Top Picks</option>\n                <option value=\"10\" >The Creative</option>\n                <option value=\"11\"> The Ethnic One</option>\n                <option value=\"12\" >Playful Styles</option>\n                <option value=\"13\" >Super Cute Studs</option>\n                <option value=\"14\" >Special Gifts</option>\n                <option value=\"15\"> Funky Styles for Teens</option>\n                <option value=\"16\" >Romantic Gift</option>\n                <option value=\"17\" >Perfect Love Gifts</option>\n                <option value=\"18\" >Valentine for Everyone</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \"   >\n              <select class=\"browser-default\"  #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required>\n                <option value=\"\" disabled selected>Choose Ornament Festival</option>\n                <option value=\"1\"> New Year Edition</option>\n                <option value=\"2\" >Uttarayan Edition</option>\n                <option value=\"3\" >Holi Edition</option>\n                <option value=\"4\" >Shivratri Edition</option>\n                <option value=\"5\"> The Durga Puja</option>\n                <option value=\"6\" >Raksha Bandhan Edition</option>\n                <option value=\"7\" >Navratri Edition</option>\n                <option value=\"8\" >Karva Chauth Edition</option>            \n                <option value=\"9\"> Akshay Trithya Edition</option>\n                <option value=\"10\" >Party Edition</option>\n                <option value=\"11\"> Christmas Edition</option>\n                <option value=\"12\" >Dhanteras Edition</option>\n                <option value=\"13\" >Diwali Edition</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/password-change/password-change.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-change/password-change.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPasswordChangePasswordChangeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>Change Password</h2>\n        </div>\n          <form class=\"col s12 white\" #passwordChangeForm=\"ngForm\" (ngSubmit)=\"OnSubmit(passwordChangeForm)\">\n            <div class=\"row\">\n              <div class=\"input-feild col s6\"> \n                <input type=\"password\" class=\"validate\"\n                 name=\"old_password\" #old_password=\"ngModel\"\n                  [(ngModel)]=\"password.old_password\" required placeholder=\"old_password\">\n              </div>\n              <div class=\"input-feild col s6\">\n                  <input class=\"validate\" type=\"password\"\n                   name=\"new_password\" #new_password=\"ngModel\" \n                   [(ngModel)]=\"password.new_password\" required  placeholder=\"New Password\">\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input_feild col s6\">\n                    <input type=\"password\" class=\"validate\" \n                    name=\"confirm_new_password\" #confirm_new_password=\"ngModel\" \n                    [(ngModel)]=\"password.confirm_new_password\" required placeholder=\"Password\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!passwordChangeForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Change Password</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/radiofill/radiofill.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/radiofill/radiofill.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRadiofillRadiofillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>create profile</h2>\n        </div>\n          <form class=\"col s12 white\" #createViewForm=\"ngForm\" (ngSubmit)=\"OnSubmit(createViewForm)\">\n            <div class=\"row\">\n              <div class=\"input-field col s6\"> \n                <input id=\"name_of_firm\" type=\"text\" class=\"validate\" name=\"NAME_OF_FIRM\" #NAME_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.NAME_OF_FIRM\"  required >\n                <label for=\"name_of_firm\">Name of Firm</label>\n                <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"address_of_firm\" class=\"validate\" type=\"text\" name=\"ADDRESS_OF_FIRM\" #ADDRESS_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.ADDRESS_OF_FIRM\" required  >\n                  <label for=\"address_of_firm\">ADDRESS OF FIRM</label>\n                  <span class=\"helper-text\" data-error=\"required!field\" data-success=\"right\"></span>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"row col s6\"> \n                  <select class=\"browser-default\" name=\"CITY\" #CITY=\"ngModel\" [(ngModel)]=\"jeweller.CITY\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option  value=\"Pune\"> Pune</option>\n                    <option value=\"Mumbai\" >Mumbai</option>\n                    <option   value=\"Vadodra\" >Vadodra</option>\n                    <option   value=\"Ahmedabad\" >Ahmedabad</option>\n                  </select>\n                </div>\n                <div class=\"row col s6\">\n                  <select class=\"browser-default\" name=\"STATE\" #STATE=\"ngModel\" [(ngModel)]=\"jeweller.STATE\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option value=\"Maharashtra\"> Maharashtra</option>\n                    <option value=\"Gujrat\" >Gujrat</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_name\" type=\"text\" class=\"validate\" name=\"CONTACT_NAME\" #CONTACT_NAME=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NAME\" required >\n                  <label for=\"contact_name\">CONTACT_NAME</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"contact_number\" class=\"validate\" type=\"text\" name=\"CONTACT_NUMBER\" #CONTACT_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NUMBER\" value=\"\" required >\n                    <label for=\"contact_number\">CONTACT_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_mail_id\" type=\"text\" class=\"validate\" name=\"CONTACT_MAIL_ID\" #CONTACT_MAIL_ID=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_MAIL_ID\" value=\"\" [pattern]=\"emailPattern\" required >\n                  <label for=\"contact_mail_id\">CONTACT MAIL ID</label>\n                  <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"gst_number\" class=\"validate\" type=\"text\" name=\"GST_NUMBER\" #GST_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.GST_NUMBER\" required  >\n                    <label for=\"gst_number\">GST NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"GST Number should contain 15 characters\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"pan_number\" type=\"text\" class=\"validate\" name=\"PAN_NUMBER\" #PAN_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.PAN_NUMBER\" required >\n                  <label for=\"pan_number\">PAN NUMBER</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_name\" class=\"validate\" type=\"text\" name=\"OWNER_NAME\" #OWNER_NAME=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NAME\" required >\n                    <label for=\"owner_name\">OWNER_NAME</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <p>\n                <label>\n                  <input type=\"checkbox\"  id=\"same\" name=\"same\" (change)= \"addres()\" />\n                  <span>Red</span>\n                </label>\n              </p>\n              \n              <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_number\" type=\"text\" class=\"validate\" name=\"OWNER_NUMBER\" #OWNER_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NUMBER\" value=\"\" required >\n                    <label for=\"owner_number\">OWNER_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required Number!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_email\" type=\"text\" class=\"validate\" name=\"OWNER_EMAIL\" #OWNER_EMAIL=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_EMAIL\"  [pattern]=\"emailPattern\" value =\"\" required >\n                    <label for=\"owner_email\">OWNER_EMAIL</label>\n                    <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!createViewForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Create My Profile</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>\n\n \n    <legend><b>Primary Address</b></legend>      \n    <label for =\"primaryaddress\">Address:</label>          \n    <input type = \"text\" name = \"Address\" id = \"primaryaddress\" value=\"\" required><br/>  \n    <label for = \"primaryzip\">Zip code:</label>      \n    <input type = \"text\" name = \"Zip code\" id = \"primaryzip\" \n                      pattern = \"[0-9]{6}\" value=\"\" required><br/> \n    \n     \n    <p>\n        <label>\n          <input input type=\"checkbox\" id=\"same\" name=\"same\" (change)= \"address()\"/>\n          <span>Red</span>\n        </label>\n    </p>\n\n    // Fields for secondary address  \n                                 \n    <legend><b>Secondary Address</b></legend>              \n    <label for =\"secondaryaddress\">Address:</label>      \n    <input type = \"text\" name = \"Address\" id = \"secondaryaddress\" value=\"\" required><br/>              \n    <label for = \"secondaryzip\">Zip code:</label>          \n    <input type = \"text\" name = \"Zip code\" id = \"secondaryzip\" \n                      pattern = \"[0-9]{6}\" value=\"\" required><br/>  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/read/read.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/read/read.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReadReadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"blue-grey\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Logo</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li>\n        <a (click)=\"Logout()\">Logout</a>\n        <a class=\"waves-effect waves-light btn-large\"  (click)=changepassword()>Change Password</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<hr>\n<div class=\"row\" >\n    <div class=\"col s8 offset-s2\">\n        <div class=\"sm-jumbotron center-align\">\n          <h5>Your Profile</h5>\n        </div>\n        <div class=\"card blue-white darken-1\" *ngIf =\"data.data\" >\n          <div class=\"card_content white_text\" >\n            <p><strong>Name of Your Firm : </strong> {{data.data.NAME_OF_FIRM}}</p>\n            <p><strong>Address OF  Your Firm : </strong> {{data.data.ADDRESS_OF_FIRM}}</p>\n            <p><strong>City : </strong>{{data.data.CITY}}</p>\n            <p><strong>STATE : </strong> {{data.data.STATE}}</p>\n            <p><strong>Your Contact Name : </strong> {{data.data.CONTACT_NAME}}</p>\n            <p><strong> Your Contact Number : </strong> {{data.data.CONTACT_NUMBER}}</p>\n            <p><strong> Your Contact Mail ID : </strong>{{data.data.CONTACT_MAIL_ID}}</p>\n            <p><strong>GST Number : </strong>{{data.data.GST_NUMBER}}</p>\n            <p><strong>Pan Number: </strong>{{data.data.PAN_NUMBER}}</p>\n            <p><strong>Owner Name: </strong>{{data.data.OWNER_NAME}}</p>\n            <p><strong>Owner Number : </strong> {{data.data.OWNER_NUMBER}}</p>\n            <p><strong>Owner Email : </strong> {{data.data.OWNER_EMAIL}}</p>\n            <p><strong>Username : </strong>{{data.data.username}}</p> \n            <p><strong>Jeweller ID : </strong> {{data.data.jeweller_id}}</p>\n          </div>\n        </div>\n        <div class=\"sm-jumbotron center-align\">\n            <a class=\"waves-effect waves-light btn-large\"  (click)=update()>Update</a>\n            <a class=\"waves-effect waves-light btn-large\"  (click)=ornament()>Ornament</a>\n          </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>Update</h2>\n        </div>\n          <form class=\"col s12 white\" #updateForm=\"ngForm\" (ngSubmit)=\"OnSubmit(updateForm)\">\n            <div class=\"row\">\n              <div class=\"input-feild col s6\"> \n                <input type=\"text\" class=\"validate\" name=\"NAME_OF_FIRM\" #NAME_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.NAME_OF_FIRM\"  required placeholder=\"NAME OF FIRM\">\n              </div>\n              <div class=\"input-feild col s6\">\n                  <input class=\"validate\" type=\"text\" name=\"ADDRESS_OF_FIRM\" #ADDRESS_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.ADDRESS_OF_FIRM\" required  placeholder=\"ADDRESS OF FIRM\">\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-feild col s6\"> \n                  <input type=\"text\" class=\"validate\" name=\"CITY\" #CITY=\"ngModel\" [(ngModel)]=\"jeweller.CITY\"  required placeholder=\"CITY\">\n                </div>\n                <div class=\"input-feild col s6\">\n                    <input class=\"validate\" type=\"text\" name=\"STATE\" #STATE=\"ngModel\" [(ngModel)]=\"jeweller.STATE\" required  placeholder=\"STATE\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-feild col s6\"> \n                  <input type=\"text\" class=\"validate\" name=\"CONTACT_NAME\" #CONTACT_NAME=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NAME\" required placeholder=\"CONTACT NAME\">\n                </div>\n                <div class=\"input-feild col s6\">\n                    <input class=\"validate\" type=\"text\" name=\"CONTACT_NUMBER\" #CONTACT_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NUMBER\" required  placeholder=\"CONTACT NUMBER\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-feild col s6\"> \n                  <input type=\"text\" class=\"validate\" name=\"CONTACT_MAIL_ID\" #CONTACT_MAIL_ID=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_MAIL_ID\" [pattern]=\"emailPattern\" required placeholder=\"CONTACT MAIL ID\">\n                </div>\n                <div class=\"input-feild col s6\">\n                    <input class=\"validate\" type=\"text\" name=\"GST_NUMBER\" #GST_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.GST_NUMBER\" required  placeholder=\"GST NUMBER\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-feild col s6\"> \n                  <input type=\"text\" class=\"validate\" name=\"PAN_NUMBER\" #PAN_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.PAN_NUMBER\" required placeholder=\"PAN NUMBER\">\n                </div>\n                <div class=\"input-feild col s6\">\n                    <input class=\"validate\" type=\"text\" name=\"OWNER_NAME\" #OWNER_NAME=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NAME\" required  placeholder=\"OWNER NAME\">\n                </div>\n              </div>\n            <div class=\"row\">\n                <div class=\"input_feild col s6\">\n                    <input type=\"text\" class=\"validate\" name=\"OWNER_NUMBER\" #OWNER_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NUMBER\" required placeholder=\"OWNER NUMBER\">\n                </div>\n                <div class=\"input_feild col s6\">\n                    <input type=\"text\" class=\"validate\" name=\"OWNER_EMAIL\" #OWNER_EMAIL=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_EMAIL\"  [pattern]=\"emailPattern\"  required placeholder=\"OWNER EMAIL\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!updateForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Update My Profile</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<a class=\"waves-effect waves-light btn-large\"  (click)=jeweler()>Sign Up as Jeweler</a>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./as-jeweler/as-jeweler.component */
    "./src/app/as-jeweler/as-jeweler.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/forms/forms.component.ts");
    /* harmony import */


    var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./password-change/password-change.component */
    "./src/app/password-change/password-change.component.ts");
    /* harmony import */


    var _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./customer/customer.component */
    "./src/app/customer/customer.component.ts");
    /* harmony import */


    var _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./create-view/create-view.component */
    "./src/app/create-view/create-view.component.ts");
    /* harmony import */


    var _read_read_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./read/read.component */
    "./src/app/read/read.component.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/update/update.component.ts");
    /* harmony import */


    var _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ornaments/ornaments.component */
    "./src/app/ornaments/ornaments.component.ts");
    /* harmony import */


    var _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ornaments/rings/rings.component */
    "./src/app/ornaments/rings/rings.component.ts");
    /* harmony import */


    var _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ornaments/neck/neck.component */
    "./src/app/ornaments/neck/neck.component.ts");
    /* harmony import */


    var _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./createvie/createvie.component */
    "./src/app/createvie/createvie.component.ts");
    /* harmony import */


    var _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./createviev/createviev.component */
    "./src/app/createviev/createviev.component.ts");
    /* harmony import */


    var _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./multiselect/multiselect.component */
    "./src/app/multiselect/multiselect.component.ts");
    /* harmony import */


    var _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./radiofill/radiofill.component */
    "./src/app/radiofill/radiofill.component.ts");
    /* harmony import */


    var _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./createvieu/createvieu.component */
    "./src/app/createvieu/createvieu.component.ts");
    /* harmony import */


    var _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ornamentread/ornamentread.component */
    "./src/app/ornamentread/ornamentread.component.ts");
    /* harmony import */


    var _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ornamentupdate/ornamentupdate.component */
    "./src/app/ornamentupdate/ornamentupdate.component.ts");
    /* harmony import */


    var _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./ornamentmultiselect/ornamentmultiselect.component */
    "./src/app/ornamentmultiselect/ornamentmultiselect.component.ts");
    /* harmony import */


    var _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./ornament1multiselect/ornament1multiselect.component */
    "./src/app/ornament1multiselect/ornament1multiselect.component.ts");
    /* harmony import */


    var _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./ornament/ornaringtype/ornaringtype.component */
    "./src/app/ornament/ornaringtype/ornaringtype.component.ts");
    /* harmony import */


    var _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ornament/ornaearringtype/ornaearringtype.component */
    "./src/app/ornament/ornaearringtype/ornaearringtype.component.ts");
    /* harmony import */


    var _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./ornament/pendantearringtype/pendantearringtype.component */
    "./src/app/ornament/pendantearringtype/pendantearringtype.component.ts");
    /* harmony import */


    var _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./ornament/ornamentnosepin/ornamentnosepin.component */
    "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts");
    /* harmony import */


    var _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./ornament/bracelet/bracelet.component */
    "./src/app/ornament/bracelet/bracelet.component.ts");
    /* harmony import */


    var _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ornament/bangles/bangles.component */
    "./src/app/ornament/bangles/bangles.component.ts");
    /* harmony import */


    var _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./ornament/chainwithpendant/chainwithpendant.component */
    "./src/app/ornament/chainwithpendant/chainwithpendant.component.ts");
    /* harmony import */


    var _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./ornament/mangalsutra/mangalsutra.component */
    "./src/app/ornament/mangalsutra/mangalsutra.component.ts");
    /* harmony import */


    var _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./ornament/necklace/necklace.component */
    "./src/app/ornament/necklace/necklace.component.ts");
    /* harmony import */


    var _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./ornament/chain/chain.component */
    "./src/app/ornament/chain/chain.component.ts");
    /* harmony import */


    var _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./ornament/pendant/pendant.component */
    "./src/app/ornament/pendant/pendant.component.ts");
    /* harmony import */


    var _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./ornament/sets/sets.component */
    "./src/app/ornament/sets/sets.component.ts");
    /* harmony import */


    var _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./ornament/cufflink/cufflink.component */
    "./src/app/ornament/cufflink/cufflink.component.ts");
    /* harmony import */


    var _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./ornamentcufflink/ornamentcufflink.component */
    "./src/app/ornamentcufflink/ornamentcufflink.component.ts");

    var routes = [{
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    }, {
      path: 'jeweler',
      component: _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_4__["AsJewelerComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'changepassword',
      component: _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_7__["PasswordChangeComponent"]
    }, {
      path: 'customer',
      component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"]
    }, {
      path: 'createview',
      component: _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_9__["CreateViewComponent"]
    }, {
      path: 'update',
      component: _update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"]
    }, {
      path: 'read',
      component: _read_read_component__WEBPACK_IMPORTED_MODULE_10__["ReadComponent"]
    }, {
      path: 'forms',
      component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"]
    }, {
      path: 'orna',
      component: _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_15__["CreatevieComponent"]
    }, {
      path: 'ornviev',
      component: _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_16__["CreatevievComponent"]
    }, {
      path: 'ornvieu',
      component: _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_19__["CreatevieuComponent"]
    }, {
      path: 'multisell',
      component: _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_17__["MultiselectComponent"]
    }, {
      path: 'radiofill',
      component: _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_18__["RadiofillComponent"]
    }, {
      path: 'ornamentread',
      component: _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_20__["OrnamentreadComponent"]
    }, {
      path: 'ornamentupdate',
      component: _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_21__["OrnamentupdateComponent"]
    }, {
      path: 'ornamentmultiselect',
      component: _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_22__["OrnamentmultiselectComponent"]
    }, {
      path: 'Ornament1multiselect',
      component: _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_23__["Ornament1multiselectComponent"]
    }, {
      path: 'Ornaringtype',
      component: _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_24__["OrnaringtypeComponent"]
    }, {
      path: 'Ornaearringtype',
      component: _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_25__["OrnaearringtypeComponent"]
    }, {
      path: 'Pendantearringtype',
      component: _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_26__["PendantearringtypeComponent"]
    }, {
      path: 'Bangles',
      component: _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_29__["BanglesComponent"]
    }, {
      path: 'Bracelet',
      component: _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_28__["BraceletComponent"]
    }, {
      path: 'chain',
      component: _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_33__["ChainComponent"]
    }, {
      path: 'chainwithpendant',
      component: _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_30__["ChainwithpendantComponent"]
    }, {
      path: 'mangalsutra',
      component: _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_31__["MangalsutraComponent"]
    }, {
      path: 'Necklace',
      component: _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_32__["NecklaceComponent"]
    }, {
      path: 'Pendant',
      component: _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_34__["PendantComponent"]
    }, {
      path: 'set',
      component: _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_35__["SetsComponent"]
    }, {
      path: 'cufflink',
      component: _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_36__["CufflinkComponent"]
    }, {
      path: 'nosepin',
      component: _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_27__["OrnamentnosepinComponent"]
    }, {
      path: 'types',
      component: _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_37__["OrnamentcufflinkComponent"]
    }, {
      path: 'rings',
      component: _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_12__["OrnamentsComponent"],
      children: [{
        path: '',
        component: _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_13__["RingsComponent"]
      }]
    }, {
      path: 'neck',
      component: _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_12__["OrnamentsComponent"],
      children: [{
        path: '',
        component: _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_14__["NeckComponent"]
      }]
    }, {
      path: '',
      redirectTo: '/jeweler',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'startUp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./as-jeweler/as-jeweler.component */
    "./src/app/as-jeweler/as-jeweler.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/forms/forms.component.ts");
    /* harmony import */


    var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./password-change/password-change.component */
    "./src/app/password-change/password-change.component.ts");
    /* harmony import */


    var _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./customer/customer.component */
    "./src/app/customer/customer.component.ts");
    /* harmony import */


    var _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./create-view/create-view.component */
    "./src/app/create-view/create-view.component.ts");
    /* harmony import */


    var _read_read_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./read/read.component */
    "./src/app/read/read.component.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/update/update.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ornaments/ornaments.component */
    "./src/app/ornaments/ornaments.component.ts");
    /* harmony import */


    var _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ornaments/rings/rings.component */
    "./src/app/ornaments/rings/rings.component.ts");
    /* harmony import */


    var _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./ornaments/neck/neck.component */
    "./src/app/ornaments/neck/neck.component.ts");
    /* harmony import */


    var _jewelornam_jewelornam_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./jewelornam/jewelornam.component */
    "./src/app/jewelornam/jewelornam.component.ts");
    /* harmony import */


    var _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./createvie/createvie.component */
    "./src/app/createvie/createvie.component.ts");
    /* harmony import */


    var _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./createviev/createviev.component */
    "./src/app/createviev/createviev.component.ts");
    /* harmony import */


    var _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./multiselect/multiselect.component */
    "./src/app/multiselect/multiselect.component.ts");
    /* harmony import */


    var _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./radiofill/radiofill.component */
    "./src/app/radiofill/radiofill.component.ts");
    /* harmony import */


    var _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./createvieu/createvieu.component */
    "./src/app/createvieu/createvieu.component.ts");
    /* harmony import */


    var _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ornamentread/ornamentread.component */
    "./src/app/ornamentread/ornamentread.component.ts");
    /* harmony import */


    var _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./ornamentupdate/ornamentupdate.component */
    "./src/app/ornamentupdate/ornamentupdate.component.ts");
    /* harmony import */


    var _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./ornamentmultiselect/ornamentmultiselect.component */
    "./src/app/ornamentmultiselect/ornamentmultiselect.component.ts");
    /* harmony import */


    var _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./ornament1multiselect/ornament1multiselect.component */
    "./src/app/ornament1multiselect/ornament1multiselect.component.ts");
    /* harmony import */


    var _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./ornament/ornaringtype/ornaringtype.component */
    "./src/app/ornament/ornaringtype/ornaringtype.component.ts");
    /* harmony import */


    var _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./ornament/ornaearringtype/ornaearringtype.component */
    "./src/app/ornament/ornaearringtype/ornaearringtype.component.ts");
    /* harmony import */


    var _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./ornament/pendantearringtype/pendantearringtype.component */
    "./src/app/ornament/pendantearringtype/pendantearringtype.component.ts");
    /* harmony import */


    var _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./ornament/ornamentnosepin/ornamentnosepin.component */
    "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts");
    /* harmony import */


    var _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./ornament/bracelet/bracelet.component */
    "./src/app/ornament/bracelet/bracelet.component.ts");
    /* harmony import */


    var _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./ornament/bangles/bangles.component */
    "./src/app/ornament/bangles/bangles.component.ts");
    /* harmony import */


    var _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./ornament/chain/chain.component */
    "./src/app/ornament/chain/chain.component.ts");
    /* harmony import */


    var _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./ornament/chainwithpendant/chainwithpendant.component */
    "./src/app/ornament/chainwithpendant/chainwithpendant.component.ts");
    /* harmony import */


    var _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./ornament/necklace/necklace.component */
    "./src/app/ornament/necklace/necklace.component.ts");
    /* harmony import */


    var _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./ornament/mangalsutra/mangalsutra.component */
    "./src/app/ornament/mangalsutra/mangalsutra.component.ts");
    /* harmony import */


    var _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./ornament/sets/sets.component */
    "./src/app/ornament/sets/sets.component.ts");
    /* harmony import */


    var _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./ornament/pendant/pendant.component */
    "./src/app/ornament/pendant/pendant.component.ts");
    /* harmony import */


    var _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./ornamentcufflink/ornamentcufflink.component */
    "./src/app/ornamentcufflink/ornamentcufflink.component.ts");
    /* harmony import */


    var _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./ornament/cufflink/cufflink.component */
    "./src/app/ornament/cufflink/cufflink.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_10__["AsJewelerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_12__["FormsComponent"], _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_13__["PasswordChangeComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"], _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_15__["CreateViewComponent"], _read_read_component__WEBPACK_IMPORTED_MODULE_16__["ReadComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"], _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_20__["OrnamentsComponent"], _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_21__["RingsComponent"], _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_22__["NeckComponent"], _jewelornam_jewelornam_component__WEBPACK_IMPORTED_MODULE_23__["JewelornamComponent"], _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_24__["CreatevieComponent"], _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_25__["CreatevievComponent"], _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_26__["MultiselectComponent"], _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_27__["RadiofillComponent"], _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_28__["CreatevieuComponent"], _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_29__["OrnamentreadComponent"], _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_30__["OrnamentupdateComponent"], _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_31__["OrnamentmultiselectComponent"], _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_32__["Ornament1multiselectComponent"], _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_33__["OrnaringtypeComponent"], _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_34__["OrnaearringtypeComponent"], _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_35__["PendantearringtypeComponent"], _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_36__["OrnamentnosepinComponent"], _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_37__["BraceletComponent"], _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_38__["BanglesComponent"], _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_39__["ChainComponent"], _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_40__["ChainwithpendantComponent"], _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_41__["NecklaceComponent"], _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_42__["MangalsutraComponent"], _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_43__["SetsComponent"], _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_44__["PendantComponent"], _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_45__["OrnamentcufflinkComponent"], _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_46__["CufflinkComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot()],
      providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/as-jeweler/as-jeweler.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/as-jeweler/as-jeweler.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAsJewelerAsJewelerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FzLWpld2VsZXIvYXMtamV3ZWxlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/as-jeweler/as-jeweler.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/as-jeweler/as-jeweler.component.ts ***!
    \****************************************************/

  /*! exports provided: AsJewelerComponent */

  /***/
  function srcAppAsJewelerAsJewelerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsJewelerComponent", function () {
      return AsJewelerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AsJewelerComponent =
    /*#__PURE__*/
    function () {
      function AsJewelerComponent(userService, router, toastr) {
        _classCallCheck(this, AsJewelerComponent);

        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
      }

      _createClass(AsJewelerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
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
      }, {
        key: "jeweler",
        value: function jeweler() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this = this;

          this.userService.asJeweler(form.value).subscribe(function (data) {
            if (data.response === 201) {
              console.log(data);

              _this.resetForm();

              _this.router.navigate(['/login']);

              _this.toastr.success('User Registration Succeeded');
            } else {
              console.log(data);

              _this.toastr.error(data.error_message);
            }
          }, function (err) {
            console.log(err.message);

            _this.toastr.error('User Registration not  Successful');
          });
        }
      }]);

      return AsJewelerComponent;
    }();

    AsJewelerComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    AsJewelerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-as-jeweler',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./as-jeweler.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/as-jeweler/as-jeweler.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./as-jeweler.component.css */
      "./src/app/as-jeweler/as-jeweler.component.css")).default]
    })], AsJewelerComponent); // ((data: any) => {
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

    /***/
  },

  /***/
  "./src/app/create-view/create-view.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/create-view/create-view.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateViewCreateViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/create-view/create-view.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/create-view/create-view.component.ts ***!
    \******************************************************/

  /*! exports provided: CreateViewComponent */

  /***/
  function srcAppCreateViewCreateViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateViewComponent", function () {
      return CreateViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CreateViewComponent =
    /*#__PURE__*/
    function () {
      function CreateViewComponent(userService, router) {
        _classCallCheck(this, CreateViewComponent);

        this.userService = userService;
        this.router = router;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
      }

      _createClass(CreateViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
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
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this2 = this;

          this.userService.createView(form.value).subscribe(function (res) {
            console.log(res);

            _this2.router.navigate(['./read']);
          }, function (err) {
            console.log(err.message);
          });
        }
      }]);

      return CreateViewComponent;
    }();

    CreateViewComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CreateViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-view/create-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-view.component.css */
      "./src/app/create-view/create-view.component.css")).default]
    })], CreateViewComponent);
    /***/
  },

  /***/
  "./src/app/createvie/createvie.component.css":
  /*!***************************************************!*\
    !*** ./src/app/createvie/createvie.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreatevieCreatevieComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXZpZS9jcmVhdGV2aWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/createvie/createvie.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/createvie/createvie.component.ts ***!
    \**************************************************/

  /*! exports provided: CreatevieComponent */

  /***/
  function srcAppCreatevieCreatevieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatevieComponent", function () {
      return CreatevieComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var CreatevieComponent =
    /*#__PURE__*/
    function () {
      function CreatevieComponent(userService) {
        _classCallCheck(this, CreatevieComponent);

        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
      }

      _createClass(CreatevieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return CreatevieComponent;
    }();

    CreatevieComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    CreatevieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createvie',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createvie.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/createvie/createvie.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createvie.component.css */
      "./src/app/createvie/createvie.component.css")).default]
    })], CreatevieComponent);
    /***/
  },

  /***/
  "./src/app/createvieu/createvieu.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/createvieu/createvieu.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreatevieuCreatevieuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXZpZXUvY3JlYXRldmlldS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/createvieu/createvieu.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/createvieu/createvieu.component.ts ***!
    \****************************************************/

  /*! exports provided: CreatevieuComponent */

  /***/
  function srcAppCreatevieuCreatevieuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatevieuComponent", function () {
      return CreatevieuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var CreatevieuComponent =
    /*#__PURE__*/
    function () {
      function CreatevieuComponent(userService) {
        _classCallCheck(this, CreatevieuComponent);

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

      _createClass(CreatevieuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return CreatevieuComponent;
    }();

    CreatevieuComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    CreatevieuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createvieu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createvieu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/createvieu/createvieu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createvieu.component.css */
      "./src/app/createvieu/createvieu.component.css")).default]
    })], CreatevieuComponent);
    /***/
  },

  /***/
  "./src/app/createviev/createviev.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/createviev/createviev.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreatevievCreatevievComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXZpZXYvY3JlYXRldmlldi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/createviev/createviev.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/createviev/createviev.component.ts ***!
    \****************************************************/

  /*! exports provided: CreatevievComponent */

  /***/
  function srcAppCreatevievCreatevievComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatevievComponent", function () {
      return CreatevievComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var CreatevievComponent =
    /*#__PURE__*/
    function () {
      function CreatevievComponent(userService) {
        _classCallCheck(this, CreatevievComponent);

        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
      }

      _createClass(CreatevievComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return CreatevievComponent;
    }();

    CreatevievComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    CreatevievComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createviev',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createviev.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/createviev/createviev.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createviev.component.css */
      "./src/app/createviev/createviev.component.css")).default]
    })], CreatevievComponent);
    /***/
  },

  /***/
  "./src/app/customer/customer.component.css":
  /*!*************************************************!*\
    !*** ./src/app/customer/customer.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/customer/customer.component.ts":
  /*!************************************************!*\
    !*** ./src/app/customer/customer.component.ts ***!
    \************************************************/

  /*! exports provided: CustomerComponent */

  /***/
  function srcAppCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CustomerComponent =
    /*#__PURE__*/
    function () {
      function CustomerComponent(router) {
        _classCallCheck(this, CustomerComponent);

        this.router = router;
      }

      _createClass(CustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerComponent;
    }();

    CustomerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer.component.css */
      "./src/app/customer/customer.component.css")).default]
    })], CustomerComponent);
    /***/
  },

  /***/
  "./src/app/forms/forms.component.css":
  /*!*******************************************!*\
    !*** ./src/app/forms/forms.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsFormsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/forms/forms.component.ts":
  /*!******************************************!*\
    !*** ./src/app/forms/forms.component.ts ***!
    \******************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var FormsComponent =
    /*#__PURE__*/
    function () {
      function FormsComponent(router, userService, toastr) {
        _classCallCheck(this, FormsComponent);

        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
      }

      _createClass(FormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changepassword",
        value: function changepassword() {
          this.router.navigate(['/changepassword']);
        }
      }, {
        key: "Logout",
        value: function Logout() {
          localStorage.removeItem('token');
          console.log('You Are Logged Out');
          this.toastr.error('logged out');
          this.router.navigate(['/login']);
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forms.component.css */
      "./src/app/forms/forms.component.css")).default]
    })], FormsComponent);
    /***/
  },

  /***/
  "./src/app/jewelornam/jewelornam.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/jewelornam/jewelornam.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJewelornamJewelornamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pld2Vsb3JuYW0vamV3ZWxvcm5hbS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/jewelornam/jewelornam.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/jewelornam/jewelornam.component.ts ***!
    \****************************************************/

  /*! exports provided: JewelornamComponent */

  /***/
  function srcAppJewelornamJewelornamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JewelornamComponent", function () {
      return JewelornamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var JewelornamComponent =
    /*#__PURE__*/
    function () {
      function JewelornamComponent(quizService) {
        _classCallCheck(this, JewelornamComponent);

        this.quizService = quizService;
        this.imageUrl = '/assets/image/default-image.png';
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
      }

      _createClass(JewelornamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          var _this3 = this;

          this.fileToUpload = file.item(0); // Show image preview

          var reader = new FileReader();

          reader.onload = function (event) {
            _this3.imageUrl = event.target.result;
          };

          reader.readAsDataURL(this.fileToUpload);
        }
      }, {
        key: "handleFileoneInput",
        value: function handleFileoneInput(file) {
          var _this4 = this;

          this.fileToUploadone = file.item(1); // Show image preview

          var reader = new FileReader();

          reader.onload = function (event) {
            _this4.imageUrl = event.target.result;
          };

          reader.readAsDataURL(this.fileToUploadone);
        }
      }, {
        key: "handleFiletwoInput",
        value: function handleFiletwoInput(file) {
          var _this5 = this;

          this.fileToUploadtwo = file.item(2); // Show image preview

          var reader = new FileReader();

          reader.onload = function (event) {
            _this5.imageUrl = event.target.result;
          };

          reader.readAsDataURL(this.fileToUploadtwo);
        }
      }, {
        key: "handleFilethreeInput",
        value: function handleFilethreeInput(file) {
          var _this6 = this;

          this.fileToUploadthree = file.item(3); // Show image preview

          var reader = new FileReader();

          reader.onload = function (event) {
            _this6.imageUrl = event.target.result;
          };

          reader.readAsDataURL(this.fileToUploadthree);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          var _this7 = this;

          this.quizService.postFile(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
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
            _this7.imageUrl = '/assets/image/default-image.png';
          });
        }
      }]);

      return JewelornamComponent;
    }();

    JewelornamComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    JewelornamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jewelornam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jewelornam.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jewelornam/jewelornam.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jewelornam.component.css */
      "./src/app/jewelornam/jewelornam.component.css")).default]
    })], JewelornamComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(userService, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.router = router;
        this.toastr = toastr; // tslint:disable-next-line: no-inferrable-types

        this.isLoginError = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnSubmit",
        value: function OnSubmit(username, password) {
          var _this8 = this;

          this.userService.loginUser(username, password).subscribe(function (data) {
            // localStorage.setItem('token', data.data.token);
            console.log(data);

            if (data.response === 200) {
              localStorage.setItem('token', data.data.token);

              _this8.toastr.success(data.message);

              if (data.data.IS_JEWELLER === true) {
                _this8.router.navigate(['/read']);
              } else {
                _this8.router.navigate(['/customer']);
              }
            } else {
              _this8.toastr.error(data.message);
            }
          }, function (err) {
            _this8.isLoginError = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/multiselect/multiselect.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/multiselect/multiselect.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMultiselectMultiselectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/multiselect/multiselect.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/multiselect/multiselect.component.ts ***!
    \******************************************************/

  /*! exports provided: MultiselectComponent */

  /***/
  function srcAppMultiselectMultiselectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function () {
      return MultiselectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var MultiselectComponent =
    /*#__PURE__*/
    function () {
      function MultiselectComponent(userService) {
        _classCallCheck(this, MultiselectComponent);

        this.userService = userService;
        this.fileToUpload = null;
        this.fileToUploadone = null;
        this.fileToUploadtwo = null;
        this.fileToUploadthree = null;
      }

      _createClass(MultiselectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "call",
        value: function call() {
          var inputValue = document.getElementById('ORNAMENT_TYPE').value;
          console.log(inputValue);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.postFeil(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return MultiselectComponent;
    }();

    MultiselectComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    MultiselectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-multiselect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multiselect.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/multiselect/multiselect.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multiselect.component.css */
      "./src/app/multiselect/multiselect.component.css")).default]
    })], MultiselectComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/ornament/bangles/bangles.component.css":
  /*!********************************************************!*\
    !*** ./src/app/ornament/bangles/bangles.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentBanglesBanglesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2JhbmdsZXMvYmFuZ2xlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ornament/bangles/bangles.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ornament/bangles/bangles.component.ts ***!
    \*******************************************************/

  /*! exports provided: BanglesComponent */

  /***/
  function srcAppOrnamentBanglesBanglesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BanglesComponent", function () {
      return BanglesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var BanglesComponent =
    /*#__PURE__*/
    function () {
      function BanglesComponent(userService) {
        _classCallCheck(this, BanglesComponent);

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
        this.Bsize = {};
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
        this.bsizea = [];
        this.bsizeb = [8];
      }

      _createClass(BanglesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.Banglesize();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this9 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this9.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this10 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this10.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this11 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this11.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this12 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this12.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this13 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this13.Festival = data;
          });
        }
      }, {
        key: "Banglesize",
        value: function Banglesize() {
          var _this14 = this;

          this.userService.ornBanglesize().subscribe(function (data) {
            console.log(data);
            _this14.Bsize = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);
          this.bsizea = k;
          console.log(this.bsizea);
          console.log(this.bsizeb);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_BANGLE_SIZE, ORNAMENT_BANGLE_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.bangles(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_BANGLE_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return BanglesComponent;
    }();

    BanglesComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    BanglesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bangles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bangles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bangles/bangles.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bangles.component.css */
      "./src/app/ornament/bangles/bangles.component.css")).default]
    })], BanglesComponent);
    /***/
  },

  /***/
  "./src/app/ornament/bracelet/bracelet.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/ornament/bracelet/bracelet.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentBraceletBraceletComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2JyYWNlbGV0L2JyYWNlbGV0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ornament/bracelet/bracelet.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ornament/bracelet/bracelet.component.ts ***!
    \*********************************************************/

  /*! exports provided: BraceletComponent */

  /***/
  function srcAppOrnamentBraceletBraceletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BraceletComponent", function () {
      return BraceletComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var BraceletComponent =
    /*#__PURE__*/
    function () {
      function BraceletComponent(userService) {
        _classCallCheck(this, BraceletComponent);

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
        this.Bsize = {};
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
        this.bsizea = [];
        this.bsizeb = [8];
      }

      _createClass(BraceletComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.ringsize();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this15 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this15.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this16 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this16.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this17 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this17.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this18 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this18.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this19 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this19.Festival = data;
          });
        }
      }, {
        key: "ringsize",
        value: function ringsize() {
          var _this20 = this;

          this.userService.ornBsize().subscribe(function (data) {
            console.log(data);
            _this20.Bsize = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);
          this.bsizea = k;
          console.log(this.bsizea);
          console.log(this.bsizeb);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_BRACELET_SIZE, ORNAMENT_BRACELET_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.bracelet(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_BRACELET_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return BraceletComponent;
    }();

    BraceletComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    BraceletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bracelet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bracelet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/bracelet/bracelet.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bracelet.component.css */
      "./src/app/ornament/bracelet/bracelet.component.css")).default]
    })], BraceletComponent);
    /***/
  },

  /***/
  "./src/app/ornament/chain/chain.component.css":
  /*!****************************************************!*\
    !*** ./src/app/ornament/chain/chain.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentChainChainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2NoYWluL2NoYWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ornament/chain/chain.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/ornament/chain/chain.component.ts ***!
    \***************************************************/

  /*! exports provided: ChainComponent */

  /***/
  function srcAppOrnamentChainChainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChainComponent", function () {
      return ChainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var ChainComponent =
    /*#__PURE__*/
    function () {
      function ChainComponent(userService) {
        _classCallCheck(this, ChainComponent);

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
        this.Bsize = {};
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
        this.bsizea = [];
        this.bsizeb = [5];
      }

      _createClass(ChainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.Banglesize();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this21 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this21.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this22 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this22.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this23 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this23.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this24 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this24.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this25 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this25.Festival = data;
          });
        }
      }, {
        key: "Banglesize",
        value: function Banglesize() {
          var _this26 = this;

          this.userService.ornChainlength().subscribe(function (data) {
            console.log(data);
            _this26.Bsize = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);
          this.bsizea = k;
          console.log(this.bsizea);
          console.log(this.bsizeb);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_CHAIN_LENGTH, ORNAMENT_CHAIN_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.chain(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_CHAIN_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return ChainComponent;
    }();

    ChainComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ChainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chain',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chain/chain.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chain.component.css */
      "./src/app/ornament/chain/chain.component.css")).default]
    })], ChainComponent);
    /***/
  },

  /***/
  "./src/app/ornament/chainwithpendant/chainwithpendant.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/ornament/chainwithpendant/chainwithpendant.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentChainwithpendantChainwithpendantComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2NoYWlud2l0aHBlbmRhbnQvY2hhaW53aXRocGVuZGFudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ornament/chainwithpendant/chainwithpendant.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/ornament/chainwithpendant/chainwithpendant.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChainwithpendantComponent */

  /***/
  function srcAppOrnamentChainwithpendantChainwithpendantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChainwithpendantComponent", function () {
      return ChainwithpendantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var ChainwithpendantComponent =
    /*#__PURE__*/
    function () {
      function ChainwithpendantComponent(userService) {
        _classCallCheck(this, ChainwithpendantComponent);

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
        this.Bsize = {};
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
        this.bsizea = [];
        this.bsizeb = [5];
      }

      _createClass(ChainwithpendantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.Banglesize();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this27 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this27.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this28 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this28.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this29 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this29.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this30 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this30.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this31 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this31.Festival = data;
          });
        }
      }, {
        key: "Banglesize",
        value: function Banglesize() {
          var _this32 = this;

          this.userService.ornChainlength().subscribe(function (data) {
            console.log(data);
            _this32.Bsize = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);
          this.bsizea = k;
          console.log(this.bsizea);
          console.log(this.bsizeb);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_CHAIN_LENGTH, ORNAMENT_CHAIN_STYLE, ORNAMENT_PENDANT_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.chaitpen(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_CHAIN_STYLE.value, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return ChainwithpendantComponent;
    }();

    ChainwithpendantComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ChainwithpendantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chainwithpendant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chainwithpendant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/chainwithpendant/chainwithpendant.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chainwithpendant.component.css */
      "./src/app/ornament/chainwithpendant/chainwithpendant.component.css")).default]
    })], ChainwithpendantComponent);
    /***/
  },

  /***/
  "./src/app/ornament/cufflink/cufflink.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/ornament/cufflink/cufflink.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentCufflinkCufflinkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2N1ZmZsaW5rL2N1ZmZsaW5rLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ornament/cufflink/cufflink.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ornament/cufflink/cufflink.component.ts ***!
    \*********************************************************/

  /*! exports provided: CufflinkComponent */

  /***/
  function srcAppOrnamentCufflinkCufflinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CufflinkComponent", function () {
      return CufflinkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var CufflinkComponent =
    /*#__PURE__*/
    function () {
      function CufflinkComponent(userService) {
        _classCallCheck(this, CufflinkComponent);

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

      _createClass(CufflinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this33 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this33.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this34 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this34.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this35 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this35.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this36 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this36.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this37 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this37.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return CufflinkComponent;
    }();

    CufflinkComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    CufflinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cufflink',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cufflink.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/cufflink/cufflink.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cufflink.component.css */
      "./src/app/ornament/cufflink/cufflink.component.css")).default]
    })], CufflinkComponent);
    /***/
  },

  /***/
  "./src/app/ornament/mangalsutra/mangalsutra.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/ornament/mangalsutra/mangalsutra.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentMangalsutraMangalsutraComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L21hbmdhbHN1dHJhL21hbmdhbHN1dHJhLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ornament/mangalsutra/mangalsutra.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ornament/mangalsutra/mangalsutra.component.ts ***!
    \***************************************************************/

  /*! exports provided: MangalsutraComponent */

  /***/
  function srcAppOrnamentMangalsutraMangalsutraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MangalsutraComponent", function () {
      return MangalsutraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var MangalsutraComponent =
    /*#__PURE__*/
    function () {
      function MangalsutraComponent(userService) {
        _classCallCheck(this, MangalsutraComponent);

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

      _createClass(MangalsutraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this38 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this38.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this39 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this39.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this40 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this40.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this41 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this41.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this42 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this42.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return MangalsutraComponent;
    }();

    MangalsutraComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    MangalsutraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mangalsutra',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mangalsutra.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/mangalsutra/mangalsutra.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mangalsutra.component.css */
      "./src/app/ornament/mangalsutra/mangalsutra.component.css")).default]
    })], MangalsutraComponent);
    /***/
  },

  /***/
  "./src/app/ornament/necklace/necklace.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/ornament/necklace/necklace.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentNecklaceNecklaceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L25lY2tsYWNlL25lY2tsYWNlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ornament/necklace/necklace.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ornament/necklace/necklace.component.ts ***!
    \*********************************************************/

  /*! exports provided: NecklaceComponent */

  /***/
  function srcAppOrnamentNecklaceNecklaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NecklaceComponent", function () {
      return NecklaceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var NecklaceComponent =
    /*#__PURE__*/
    function () {
      function NecklaceComponent(userService) {
        _classCallCheck(this, NecklaceComponent);

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

      _createClass(NecklaceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this43 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this43.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this44 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this44.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this45 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this45.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this46 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this46.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this47 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this47.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_NECKLACE_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.necklace(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_NECKLACE_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return NecklaceComponent;
    }();

    NecklaceComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    NecklaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-necklace',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./necklace.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/necklace/necklace.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./necklace.component.css */
      "./src/app/ornament/necklace/necklace.component.css")).default]
    })], NecklaceComponent);
    /***/
  },

  /***/
  "./src/app/ornament/ornaearringtype/ornaearringtype.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/ornament/ornaearringtype/ornaearringtype.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentOrnaearringtypeOrnaearringtypeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L29ybmFlYXJyaW5ndHlwZS9vcm5hZWFycmluZ3R5cGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornament/ornaearringtype/ornaearringtype.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ornament/ornaearringtype/ornaearringtype.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrnaearringtypeComponent */

  /***/
  function srcAppOrnamentOrnaearringtypeOrnaearringtypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnaearringtypeComponent", function () {
      return OrnaearringtypeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/user.service */
    "./src/app/shared/user.service.ts");

    var OrnaearringtypeComponent =
    /*#__PURE__*/
    function () {
      function OrnaearringtypeComponent(userService) {
        _classCallCheck(this, OrnaearringtypeComponent);

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

      _createClass(OrnaearringtypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this48 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this48.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this49 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this49.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this50 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this50.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this51 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this51.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this52 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this52.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_EARRING_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.ear(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_EARRING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return OrnaearringtypeComponent;
    }();

    OrnaearringtypeComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    OrnaearringtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornaearringtype',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornaearringtype.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaearringtype/ornaearringtype.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornaearringtype.component.css */
      "./src/app/ornament/ornaearringtype/ornaearringtype.component.css")).default]
    })], OrnaearringtypeComponent);
    /***/
  },

  /***/
  "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/ornament/ornamentnosepin/ornamentnosepin.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentOrnamentnosepinOrnamentnosepinComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L29ybmFtZW50bm9zZXBpbi9vcm5hbWVudG5vc2VwaW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ornament/ornamentnosepin/ornamentnosepin.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrnamentnosepinComponent */

  /***/
  function srcAppOrnamentOrnamentnosepinOrnamentnosepinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnamentnosepinComponent", function () {
      return OrnamentnosepinComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/user.service */
    "./src/app/shared/user.service.ts");

    var OrnamentnosepinComponent =
    /*#__PURE__*/
    function () {
      function OrnamentnosepinComponent(userService) {
        _classCallCheck(this, OrnamentnosepinComponent);

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

      _createClass(OrnamentnosepinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this53 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this53.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this54 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this54.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this55 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this55.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this56 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this56.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this57 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this57.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_NOSEPIN_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.nosepin(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_NOSEPIN_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return OrnamentnosepinComponent;
    }();

    OrnamentnosepinComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    OrnamentnosepinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornamentnosepin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornamentnosepin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornamentnosepin/ornamentnosepin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornamentnosepin.component.css */
      "./src/app/ornament/ornamentnosepin/ornamentnosepin.component.css")).default]
    })], OrnamentnosepinComponent);
    /***/
  },

  /***/
  "./src/app/ornament/ornaringtype/ornaringtype.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/ornament/ornaringtype/ornaringtype.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentOrnaringtypeOrnaringtypeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L29ybmFyaW5ndHlwZS9vcm5hcmluZ3R5cGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornament/ornaringtype/ornaringtype.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ornament/ornaringtype/ornaringtype.component.ts ***!
    \*****************************************************************/

  /*! exports provided: OrnaringtypeComponent */

  /***/
  function srcAppOrnamentOrnaringtypeOrnaringtypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnaringtypeComponent", function () {
      return OrnaringtypeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/user.service */
    "./src/app/shared/user.service.ts");

    var OrnaringtypeComponent =
    /*#__PURE__*/
    function () {
      function OrnaringtypeComponent(userService) {
        _classCallCheck(this, OrnaringtypeComponent);

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
        this.Ringsize = {};
        this.ORNAMENT_OCCASION = '';
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
        this.rsizea = [];
        this.rsizeb = [8];
      }

      _createClass(OrnaringtypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.ringsize();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this58 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this58.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this59 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this59.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this60 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this60.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this61 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this61.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this62 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this62.Festival = data;
          });
        }
      }, {
        key: "ringsize",
        value: function ringsize() {
          var _this63 = this;

          this.userService.ornRsize().subscribe(function (data) {
            console.log(data);
            _this63.Ringsize = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);
          this.rsizea = k;
          console.log(this.rsizea);
          console.log(this.rsizeb);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_RING_SIZE, ORNAMENT_RING_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.muli(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.rsizea, this.rsizeb, ORNAMENT_RING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return OrnaringtypeComponent;
    }();

    OrnaringtypeComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    OrnaringtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornaringtype',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornaringtype.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/ornaringtype/ornaringtype.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornaringtype.component.css */
      "./src/app/ornament/ornaringtype/ornaringtype.component.css")).default]
    })], OrnaringtypeComponent);
    /***/
  },

  /***/
  "./src/app/ornament/pendant/pendant.component.css":
  /*!********************************************************!*\
    !*** ./src/app/ornament/pendant/pendant.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentPendantPendantComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L3BlbmRhbnQvcGVuZGFudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ornament/pendant/pendant.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ornament/pendant/pendant.component.ts ***!
    \*******************************************************/

  /*! exports provided: PendantComponent */

  /***/
  function srcAppOrnamentPendantPendantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendantComponent", function () {
      return PendantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var PendantComponent =
    /*#__PURE__*/
    function () {
      function PendantComponent(userService) {
        _classCallCheck(this, PendantComponent);

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

      _createClass(PendantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this64 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this64.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this65 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this65.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this66 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this66.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this67 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this67.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this68 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this68.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_PENDANT_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.pendant(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return PendantComponent;
    }();

    PendantComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    PendantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pendant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pendant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendant/pendant.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pendant.component.css */
      "./src/app/ornament/pendant/pendant.component.css")).default]
    })], PendantComponent);
    /***/
  },

  /***/
  "./src/app/ornament/pendantearringtype/pendantearringtype.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/ornament/pendantearringtype/pendantearringtype.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentPendantearringtypePendantearringtypeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L3BlbmRhbnRlYXJyaW5ndHlwZS9wZW5kYW50ZWFycmluZ3R5cGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornament/pendantearringtype/pendantearringtype.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ornament/pendantearringtype/pendantearringtype.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PendantearringtypeComponent */

  /***/
  function srcAppOrnamentPendantearringtypePendantearringtypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendantearringtypeComponent", function () {
      return PendantearringtypeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/user.service */
    "./src/app/shared/user.service.ts");

    var PendantearringtypeComponent =
    /*#__PURE__*/
    function () {
      function PendantearringtypeComponent(userService) {
        _classCallCheck(this, PendantearringtypeComponent);

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

      _createClass(PendantearringtypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this69 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this69.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this70 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this70.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this71 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this71.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this72 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this72.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this73 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this73.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, ORNAMENT_EARRING_STYLE, ORNAMENT_PENDANT_STYLE, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.pendantwithearing(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_EARRING_STYLE.value, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return PendantearringtypeComponent;
    }();

    PendantearringtypeComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    PendantearringtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pendantearringtype',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pendantearringtype.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/pendantearringtype/pendantearringtype.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pendantearringtype.component.css */
      "./src/app/ornament/pendantearringtype/pendantearringtype.component.css")).default]
    })], PendantearringtypeComponent);
    /***/
  },

  /***/
  "./src/app/ornament/sets/sets.component.css":
  /*!**************************************************!*\
    !*** ./src/app/ornament/sets/sets.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentSetsSetsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L3NldHMvc2V0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ornament/sets/sets.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/ornament/sets/sets.component.ts ***!
    \*************************************************/

  /*! exports provided: SetsComponent */

  /***/
  function srcAppOrnamentSetsSetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetsComponent", function () {
      return SetsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    var SetsComponent =
    /*#__PURE__*/
    function () {
      function SetsComponent(userService) {
        _classCallCheck(this, SetsComponent);

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

      _createClass(SetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this74 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this74.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this75 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this75.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this76 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this76.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this77 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this77.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this78 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this78.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return SetsComponent;
    }();

    SetsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    SetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/sets/sets.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sets.component.css */
      "./src/app/ornament/sets/sets.component.css")).default]
    })], SetsComponent);
    /***/
  },

  /***/
  "./src/app/ornament1multiselect/ornament1multiselect.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/ornament1multiselect/ornament1multiselect.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnament1multiselectOrnament1multiselectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50MW11bHRpc2VsZWN0L29ybmFtZW50MW11bHRpc2VsZWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ornament1multiselect/ornament1multiselect.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ornament1multiselect/ornament1multiselect.component.ts ***!
    \************************************************************************/

  /*! exports provided: Ornament1multiselectComponent */

  /***/
  function srcAppOrnament1multiselectOrnament1multiselectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ornament1multiselectComponent", function () {
      return Ornament1multiselectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var Ornament1multiselectComponent =
    /*#__PURE__*/
    function () {
      function Ornament1multiselectComponent(userService) {
        _classCallCheck(this, Ornament1multiselectComponent);

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

      _createClass(Ornament1multiselectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this79 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this79.Occasion = data;
          });
        }
      }, {
        key: "Wedding",
        value: function Wedding() {
          console.log(); // this.asion = pk;

          if (document.getElementById('Wedding').checked) {
            this.asion = document.getElementById('Wedding').value;
            this.asan = document.getElementById('Wedding').value; // this.asian = (document.getElementById('Wedding')as HTMLInputElement).value;

            console.log('value', this.asion);
          } // this.asan.pop(0);
          // this.asan = pk;


          console.log(this.asion);
          console.log(this.asian);
          console.log(this.asan);
        }
      }, {
        key: "Anniversary",
        value: function Anniversary() {
          if (document.getElementById('Anniversary').checked) {
            this.asian = document.getElementById('Anniversary').value;
            console.log('value', this.asion);
          } // this.asan.pop(0);
          // this.asan = pk;


          console.log(this.asion);
          console.log(this.asian);
          console.log(this.asan);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }]);

      return Ornament1multiselectComponent;
    }();

    Ornament1multiselectComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    Ornament1multiselectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornament1multiselect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornament1multiselect.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament1multiselect/ornament1multiselect.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornament1multiselect.component.css */
      "./src/app/ornament1multiselect/ornament1multiselect.component.css")).default]
    })], Ornament1multiselectComponent);
    /***/
  },

  /***/
  "./src/app/ornamentcufflink/ornamentcufflink.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/ornamentcufflink/ornamentcufflink.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentcufflinkOrnamentcufflinkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50Y3VmZmxpbmsvb3JuYW1lbnRjdWZmbGluay5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ornamentcufflink/ornamentcufflink.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ornamentcufflink/ornamentcufflink.component.ts ***!
    \****************************************************************/

  /*! exports provided: OrnamentcufflinkComponent */

  /***/
  function srcAppOrnamentcufflinkOrnamentcufflinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnamentcufflinkComponent", function () {
      return OrnamentcufflinkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OrnamentcufflinkComponent =
    /*#__PURE__*/
    function () {
      function OrnamentcufflinkComponent(router) {
        _classCallCheck(this, OrnamentcufflinkComponent);

        this.router = router;
      }

      _createClass(OrnamentcufflinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cufflink",
        value: function cufflink() {
          this.router.navigate(['/cufflink']);
        }
      }, {
        key: "pendantwithearing",
        value: function pendantwithearing() {
          this.router.navigate(['/Pendantearringtype']);
        }
      }, {
        key: "pendant",
        value: function pendant() {
          this.router.navigate(['/Pendant']);
        }
      }, {
        key: "chain",
        value: function chain() {
          this.router.navigate(['/chain']);
        }
      }, {
        key: "sets",
        value: function sets() {
          this.router.navigate(['/set']);
        }
      }, {
        key: "Mangalsutra",
        value: function Mangalsutra() {
          this.router.navigate(['/mangalsutra']);
        }
      }, {
        key: "necklace",
        value: function necklace() {
          this.router.navigate(['/Necklace']);
        }
      }, {
        key: "chainwithpendant",
        value: function chainwithpendant() {
          this.router.navigate(['/chainwithpendant']);
        }
      }, {
        key: "bangles",
        value: function bangles() {
          this.router.navigate(['/Bangles']);
        }
      }, {
        key: "bracelet",
        value: function bracelet() {
          this.router.navigate(['/Bracelet']);
        }
      }, {
        key: "earring",
        value: function earring() {
          this.router.navigate(['/Ornaearringtype']);
        }
      }, {
        key: "nosepin",
        value: function nosepin() {
          this.router.navigate(['/nosepin']);
        }
      }, {
        key: "ring",
        value: function ring() {
          this.router.navigate(['/Ornaringtype']);
        }
      }]);

      return OrnamentcufflinkComponent;
    }();

    OrnamentcufflinkComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    OrnamentcufflinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornamentcufflink',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornamentcufflink.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentcufflink/ornamentcufflink.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornamentcufflink.component.css */
      "./src/app/ornamentcufflink/ornamentcufflink.component.css")).default]
    })], OrnamentcufflinkComponent);
    /***/
  },

  /***/
  "./src/app/ornamentmultiselect/ornamentmultiselect.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/ornamentmultiselect/ornamentmultiselect.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentmultiselectOrnamentmultiselectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50bXVsdGlzZWxlY3Qvb3JuYW1lbnRtdWx0aXNlbGVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ornamentmultiselect/ornamentmultiselect.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/ornamentmultiselect/ornamentmultiselect.component.ts ***!
    \**********************************************************************/

  /*! exports provided: OrnamentmultiselectComponent */

  /***/
  function srcAppOrnamentmultiselectOrnamentmultiselectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnamentmultiselectComponent", function () {
      return OrnamentmultiselectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var OrnamentmultiselectComponent =
    /*#__PURE__*/
    function () {
      function OrnamentmultiselectComponent(userService) {
        _classCallCheck(this, OrnamentmultiselectComponent);

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

      _createClass(OrnamentmultiselectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this80 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this80.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this81 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this81.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this82 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this82.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this83 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this83.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this84 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this84.Festival = data;
          });
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);
          this.asion = pk;
          console.log(this.asion);
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);
          this.asan = k;
          console.log(this.asan);
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);
          this.themea = k;
          console.log(this.themea);
          console.log(this.themeb);
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);
          this.curateda = k;
          console.log(this.curateda);
          console.log(this.curatedb);
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);
          this.festia = k;
          console.log(this.festia);
          console.log(this.festib);
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return OrnamentmultiselectComponent;
    }();

    OrnamentmultiselectComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    OrnamentmultiselectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornamentmultiselect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornamentmultiselect.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentmultiselect/ornamentmultiselect.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornamentmultiselect.component.css */
      "./src/app/ornamentmultiselect/ornamentmultiselect.component.css")).default]
    })], OrnamentmultiselectComponent);
    /***/
  },

  /***/
  "./src/app/ornamentread/ornamentread.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/ornamentread/ornamentread.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentreadOrnamentreadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cmVhZC9vcm5hbWVudHJlYWQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornamentread/ornamentread.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ornamentread/ornamentread.component.ts ***!
    \********************************************************/

  /*! exports provided: OrnamentreadComponent */

  /***/
  function srcAppOrnamentreadOrnamentreadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnamentreadComponent", function () {
      return OrnamentreadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var OrnamentreadComponent =
    /*#__PURE__*/
    function () {
      function OrnamentreadComponent(userService) {
        _classCallCheck(this, OrnamentreadComponent);

        this.userService = userService;
        this.data = {};
      }

      _createClass(OrnamentreadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.page1();
        }
      }, {
        key: "page1",
        value: function page1() {
          var _this85 = this;

          this.userService.readorn().subscribe(function (data) {
            console.log(data);
            _this85.data = data;
          });
        }
      }, {
        key: "page2",
        value: function page2() {
          var _this86 = this;

          this.userService.r2().subscribe(function (data) {
            console.log(data);
            _this86.data = data;
          });
        }
      }, {
        key: "page3",
        value: function page3() {
          var _this87 = this;

          this.userService.r3().subscribe(function (data) {
            console.log(data);
            _this87.data = data;
          });
        }
      }, {
        key: "page4",
        value: function page4() {
          var _this88 = this;

          this.userService.r4().subscribe(function (data) {
            console.log(data);
            _this88.data = data;
          });
        }
      }, {
        key: "page5",
        value: function page5() {
          var _this89 = this;

          this.userService.r5().subscribe(function (data) {
            console.log(data);
            _this89.data = data;
          });
        }
      }, {
        key: "page6",
        value: function page6() {
          var _this90 = this;

          this.userService.r6().subscribe(function (data) {
            console.log(data);
            _this90.data = data;
          });
        }
      }, {
        key: "page7",
        value: function page7() {
          var _this91 = this;

          this.userService.r7().subscribe(function (data) {
            console.log(data);
            _this91.data = data;
          });
        }
      }, {
        key: "page8",
        value: function page8() {
          var _this92 = this;

          this.userService.r8().subscribe(function (data) {
            console.log(data);
            _this92.data = data;
          });
        }
      }, {
        key: "page9",
        value: function page9() {
          var _this93 = this;

          this.userService.r9().subscribe(function (data) {
            console.log(data);
            _this93.data = data;
          });
        }
      }, {
        key: "page10",
        value: function page10() {
          var _this94 = this;

          this.userService.r10().subscribe(function (data) {
            console.log(data);
            _this94.data = data;
          });
        }
      }, {
        key: "page11",
        value: function page11() {
          var _this95 = this;

          this.userService.r11().subscribe(function (data) {
            console.log(data);
            _this95.data = data;
          });
        }
      }, {
        key: "page12",
        value: function page12() {
          var _this96 = this;

          this.userService.r12().subscribe(function (data) {
            console.log(data);
            _this96.data = data;
          });
        }
      }, {
        key: "page13",
        value: function page13() {
          var _this97 = this;

          this.userService.r13().subscribe(function (data) {
            console.log(data);
            _this97.data = data;
          });
        }
      }, {
        key: "page14",
        value: function page14() {
          var _this98 = this;

          this.userService.r14().subscribe(function (data) {
            console.log(data);
            _this98.data = data;
          });
        }
      }]);

      return OrnamentreadComponent;
    }();

    OrnamentreadComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    OrnamentreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornamentread',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornamentread.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentread/ornamentread.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornamentread.component.css */
      "./src/app/ornamentread/ornamentread.component.css")).default]
    })], OrnamentreadComponent);
    /***/
  },

  /***/
  "./src/app/ornaments/neck/neck.component.css":
  /*!***************************************************!*\
    !*** ./src/app/ornaments/neck/neck.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentsNeckNeckComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cy9uZWNrL25lY2suY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornaments/neck/neck.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ornaments/neck/neck.component.ts ***!
    \**************************************************/

  /*! exports provided: NeckComponent */

  /***/
  function srcAppOrnamentsNeckNeckComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeckComponent", function () {
      return NeckComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NeckComponent =
    /*#__PURE__*/
    function () {
      function NeckComponent() {
        _classCallCheck(this, NeckComponent);
      }

      _createClass(NeckComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NeckComponent;
    }();

    NeckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-neck',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./neck.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/neck/neck.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./neck.component.css */
      "./src/app/ornaments/neck/neck.component.css")).default]
    })], NeckComponent);
    /***/
  },

  /***/
  "./src/app/ornaments/ornaments.component.css":
  /*!***************************************************!*\
    !*** ./src/app/ornaments/ornaments.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentsOrnamentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cy9vcm5hbWVudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornaments/ornaments.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ornaments/ornaments.component.ts ***!
    \**************************************************/

  /*! exports provided: OrnamentsComponent */

  /***/
  function srcAppOrnamentsOrnamentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnamentsComponent", function () {
      return OrnamentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrnamentsComponent =
    /*#__PURE__*/
    function () {
      function OrnamentsComponent() {
        _classCallCheck(this, OrnamentsComponent);
      }

      _createClass(OrnamentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrnamentsComponent;
    }();

    OrnamentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornaments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornaments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/ornaments.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornaments.component.css */
      "./src/app/ornaments/ornaments.component.css")).default]
    })], OrnamentsComponent);
    /***/
  },

  /***/
  "./src/app/ornaments/rings/rings.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/ornaments/rings/rings.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentsRingsRingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50cy9yaW5ncy9yaW5ncy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ornaments/rings/rings.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ornaments/rings/rings.component.ts ***!
    \****************************************************/

  /*! exports provided: RingsComponent */

  /***/
  function srcAppOrnamentsRingsRingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RingsComponent", function () {
      return RingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RingsComponent =
    /*#__PURE__*/
    function () {
      function RingsComponent() {
        _classCallCheck(this, RingsComponent);
      }

      _createClass(RingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RingsComponent;
    }();

    RingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornaments/rings/rings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rings.component.css */
      "./src/app/ornaments/rings/rings.component.css")).default]
    })], RingsComponent);
    /***/
  },

  /***/
  "./src/app/ornamentupdate/ornamentupdate.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/ornamentupdate/ornamentupdate.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentupdateOrnamentupdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50dXBkYXRlL29ybmFtZW50dXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ornamentupdate/ornamentupdate.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ornamentupdate/ornamentupdate.component.ts ***!
    \************************************************************/

  /*! exports provided: OrnamentupdateComponent */

  /***/
  function srcAppOrnamentupdateOrnamentupdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrnamentupdateComponent", function () {
      return OrnamentupdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    var OrnamentupdateComponent =
    /*#__PURE__*/
    function () {
      function OrnamentupdateComponent(userService) {
        _classCallCheck(this, OrnamentupdateComponent);

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

      _createClass(OrnamentupdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(file) {
          this.fileToUpload = file.item(0);
        }
      }, {
        key: "handleFileInputone",
        value: function handleFileInputone(file) {
          this.fileToUploadone = file.item(0);
        }
      }, {
        key: "handleFileInputtwo",
        value: function handleFileInputtwo(file) {
          this.fileToUploadtwo = file.item(0);
        }
      }, {
        key: "handleFileInputthree",
        value: function handleFileInputthree(file) {
          this.fileToUploadthree = file.item(0);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
          this.userService.postupdate(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value, ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
            console.log('done', data);
          });
        }
      }]);

      return OrnamentupdateComponent;
    }();

    OrnamentupdateComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    OrnamentupdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ornamentupdate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ornamentupdate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornamentupdate/ornamentupdate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ornamentupdate.component.css */
      "./src/app/ornamentupdate/ornamentupdate.component.css")).default]
    })], OrnamentupdateComponent);
    /***/
  },

  /***/
  "./src/app/password-change/password-change.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/password-change/password-change.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPasswordChangePasswordChangeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLWNoYW5nZS9wYXNzd29yZC1jaGFuZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/password-change/password-change.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/password-change/password-change.component.ts ***!
    \**************************************************************/

  /*! exports provided: PasswordChangeComponent */

  /***/
  function srcAppPasswordChangePasswordChangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordChangeComponent", function () {
      return PasswordChangeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PasswordChangeComponent =
    /*#__PURE__*/
    function () {
      function PasswordChangeComponent(userService, router) {
        _classCallCheck(this, PasswordChangeComponent);

        this.userService = userService;
        this.router = router;
      }

      _createClass(PasswordChangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form != null) {
            form.reset();
          }

          this.password = {
            old_password: '',
            new_password: '',
            confirm_new_password: ''
          };
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this99 = this;

          this.userService.changePassword(form.value).subscribe(function (res) {
            console.log(res);

            _this99.router.navigate(['/forms']);
          }, function (err) {
            console.log(err.message);
          });
        }
      }]);

      return PasswordChangeComponent;
    }();

    PasswordChangeComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PasswordChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-password-change',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./password-change.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/password-change/password-change.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./password-change.component.css */
      "./src/app/password-change/password-change.component.css")).default]
    })], PasswordChangeComponent);
    /***/
  },

  /***/
  "./src/app/radiofill/radiofill.component.css":
  /*!***************************************************!*\
    !*** ./src/app/radiofill/radiofill.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRadiofillRadiofillComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhZGlvZmlsbC9yYWRpb2ZpbGwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/radiofill/radiofill.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/radiofill/radiofill.component.ts ***!
    \**************************************************/

  /*! exports provided: RadiofillComponent */

  /***/
  function srcAppRadiofillRadiofillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadiofillComponent", function () {
      return RadiofillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RadiofillComponent =
    /*#__PURE__*/
    function () {
      function RadiofillComponent(userService, router) {
        _classCallCheck(this, RadiofillComponent);

        this.userService = userService;
        this.router = router;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
      }

      _createClass(RadiofillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
          this.address();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
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
      }, {
        key: "address",
        value: function address() {
          if (document.getElementById('same').checked) {
            document.getElementById('secondaryaddress').value = document.getElementById('primaryaddress').value;
            document.getElementById('secondaryzip').value = document.getElementById('primaryzip').value;
          } else {
            document.getElementById('secondaryaddress').value = '';
            document.getElementById('secondaryzip').value = '';
          }

          document.getElementById('secondaryaddress').value = document.getElementById('primaryaddress').value;
          document.getElementById('secondaryzip').value = document.getElementById('primaryzip').value;
        }
      }, {
        key: "addres",
        value: function addres() {
          if (document.getElementById('same').checked) {
            console.log('checked');
            document.getElementById('owner_number').value = document.getElementById('contact_number').value;
            document.getElementById('owner_email').value = document.getElementById('contact_mail_id').value;
          } else {
            console.log('uncheked');
            document.getElementById('owner_number').value = '';
            document.getElementById('owner_email').value = '';
          }

          console.log(document.getElementById('owner_email').value);
        }
      }, {
        key: "call",
        value: function call() {
          var inputValue = document.getElementById('contact_mail_id').value;
          console.log(inputValue);
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this100 = this;

          this.userService.createView(form.value).subscribe(function (res) {
            console.log(res);

            _this100.router.navigate(['./read']);
          }, function (err) {
            console.log(err.message);
          });
        }
      }]);

      return RadiofillComponent;
    }();

    RadiofillComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RadiofillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-radiofill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./radiofill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/radiofill/radiofill.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./radiofill.component.css */
      "./src/app/radiofill/radiofill.component.css")).default]
    })], RadiofillComponent);
    /***/
  },

  /***/
  "./src/app/read/read.component.css":
  /*!*****************************************!*\
    !*** ./src/app/read/read.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppReadReadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWQvcmVhZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/read/read.component.ts":
  /*!****************************************!*\
    !*** ./src/app/read/read.component.ts ***!
    \****************************************/

  /*! exports provided: ReadComponent */

  /***/
  function srcAppReadReadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadComponent", function () {
      return ReadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ReadComponent =
    /*#__PURE__*/
    function () {
      function ReadComponent(userService, router, toastr) {
        _classCallCheck(this, ReadComponent);

        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.data = {};
      }

      _createClass(ReadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.readuser();
        }
      }, {
        key: "readuser",
        value: function readuser() {
          var _this101 = this;

          this.userService.readForm().subscribe(function (data) {
            console.log(data);
            _this101.data = data;

            if (_this101.data.statuscode === 200) {
              _this101.toastr.success('welcome back');
            } else {
              _this101.toastr.success('As you are our New Customer we want you to fill this form to complete your profile');

              _this101.router.navigate(['/createview']);
            }
          });
        }
      }, {
        key: "update",
        value: function update() {
          this.router.navigate(['/update']);
        }
      }, {
        key: "ornament",
        value: function ornament() {
          this.router.navigate(['/types']);
        }
      }, {
        key: "changepassword",
        value: function changepassword() {
          this.router.navigate(['/changepassword']);
        }
      }, {
        key: "Logout",
        value: function Logout() {
          localStorage.removeItem('token');
          console.log('You Are Logged Out');
          this.toastr.error('logged out');
          this.router.navigate(['/login']);
        }
      }]);

      return ReadComponent;
    }();

    ReadComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    ReadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-read',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./read.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/read/read.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./read.component.css */
      "./src/app/read/read.component.css")).default]
    })], ReadComponent); // if (data.response == 200 ) {
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

    /***/
  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.rootURL = 'https://harshil21.pythonanywhere.com';
      }

      _createClass(UserService, [{
        key: "asJeweler",
        value: function asJeweler(user) {
          var body = {
            email: user.email,
            username: user.username,
            password: user.password,
            confirm_password: user.confirm_password,
            IS_JEWELLER: user.IS_JEWELLER
          };
          var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.rootURL + '/api/user/v1/register/', body, {
            headers: reqHeader
          });
        }
      }, {
        key: "asCitizen",
        value: function asCitizen(user) {
          var body = {
            email: user.email,
            username: user.username,
            password: user.password,
            confirm_password: user.confirm_password,
            IS_JEWELLER: user.IS_JEWELLER
          };
          var reqheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.rootURL + '/api/user/v1/register/', body, {
            headers: reqheader
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(username, password) {
          var data = 'username=' + username + '&password=' + password + '&grant_type=password';
          var reqheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          reqheaders.append('Authorization', 'Bearer');
          return this.http.post(this.rootURL + '/api/user/v1/login/', data, {
            headers: reqheaders
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword(password) {
          var data = {
            old_password: password.old_password,
            new_password: password.new_password,
            confirm_new_password: password.confirm_new_password
          };
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.put(this.rootURL + '/api/user/v1/change-password/', data, {
            headers: Headers
          });
        }
      }, {
        key: "createView",
        value: function createView(jeweller) {
          var info = {
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
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/jeweller-create/', info, {
            headers: Headers
          });
        }
      }, {
        key: "readForm",
        value: function readForm() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/detail/', {
            headers: Headers
          });
        }
      }, {
        key: "readorn",
        value: function readorn() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=1', {
            headers: Headers
          });
        }
      }, {
        key: "r2",
        value: function r2() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=2', {
            headers: Headers
          });
        }
      }, {
        key: "r3",
        value: function r3() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=3', {
            headers: Headers
          });
        }
      }, {
        key: "r4",
        value: function r4() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=4', {
            headers: Headers
          });
        }
      }, {
        key: "r5",
        value: function r5() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=5', {
            headers: Headers
          });
        }
      }, {
        key: "r6",
        value: function r6() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=6', {
            headers: Headers
          });
        }
      }, {
        key: "r7",
        value: function r7() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=7', {
            headers: Headers
          });
        }
      }, {
        key: "r8",
        value: function r8() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=8', {
            headers: Headers
          });
        }
      }, {
        key: "r9",
        value: function r9() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=9', {
            headers: Headers
          });
        }
      }, {
        key: "r10",
        value: function r10() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=10', {
            headers: Headers
          });
        }
      }, {
        key: "r11",
        value: function r11() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=11', {
            headers: Headers
          });
        }
      }, {
        key: "r12",
        value: function r12() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=12', {
            headers: Headers
          });
        }
      }, {
        key: "r13",
        value: function r13() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=13', {
            headers: Headers
          });
        }
      }, {
        key: "r14",
        value: function r14() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=14', {
            headers: Headers
          });
        }
      }, {
        key: "ornoccasion",
        value: function ornoccasion() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/occasion/', {
            headers: Headers
          });
        }
      }, {
        key: "ornGift",
        value: function ornGift() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/gift/', {
            headers: Headers
          });
        }
      }, {
        key: "ornTheme",
        value: function ornTheme() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/theme/', {
            headers: Headers
          });
        }
      }, {
        key: "ornCurated",
        value: function ornCurated() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/curatedby/', {
            headers: Headers
          });
        }
      }, {
        key: "ornFestival",
        value: function ornFestival() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/festival/', {
            headers: Headers
          });
        }
      }, {
        key: "ornRstyle",
        value: function ornRstyle() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/ring-style/', {
            headers: Headers
          });
        }
      }, {
        key: "ornRsize",
        value: function ornRsize() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/ring-size/', {
            headers: Headers
          });
        }
      }, {
        key: "ornBsize",
        value: function ornBsize() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/bracelet-size/', {
            headers: Headers
          });
        }
      }, {
        key: "ornBanglesize",
        value: function ornBanglesize() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/bangle-size/', {
            headers: Headers
          });
        }
      }, {
        key: "ornChainlength",
        value: function ornChainlength() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/chain-length/', {
            headers: Headers
          });
        }
      }, {
        key: "update",
        value: function update(jeweller) {
          var info = {
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
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.put(this.rootURL + '/api/jeweller/v1/update/', info, {
            headers: Headers
          });
        }
      }, {
        key: "postFile",
        value: function postFile(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "postFill",
        value: function postFill(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "postFiel",
        value: function postFiel(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "postFeil",
        value: function postFeil(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "multi",
        value: function multi(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "muli",
        value: function muli(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, rsizea, rsizeb, ORNAMENT_RING_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "ear",
        value: function ear(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_EARRING_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "nosepin",
        value: function nosepin(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_NOSEPIN_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_NOSEPIN_STYLE', ORNAMENT_NOSEPIN_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "pendantwithearing",
        value: function pendantwithearing(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_EARRING_STYLE, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
          formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "bracelet",
        value: function bracelet(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_BRACELET_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_BRACELET_STYLE', ORNAMENT_BRACELET_STYLE);
          formData.append('ORNAMENT_BRACELET_SIZE', bsizea);
          formData.append('ORNAMENT_BRACELET_SIZE', bsizeb);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "bangles",
        value: function bangles(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_BANGLE_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_BANGLE_STYLE', ORNAMENT_BANGLE_STYLE);
          formData.append('ORNAMENT_BANGLE_SIZE', bsizea);
          formData.append('ORNAMENT_BANGLE_SIZE', bsizeb);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "chain",
        value: function chain(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_CHAIN_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
          formData.append('ORNAMENT_CHAIN_LENGTH', bsizea);
          formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "necklace",
        value: function necklace(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_NECKLACE_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_NECKLACE_STYLE', ORNAMENT_NECKLACE_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "chaitpen",
        value: function chaitpen(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_CHAIN_STYLE, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
          formData.append('ORNAMENT_CHAIN_LENGTH', bsizea);
          formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);
          formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "pendant",
        value: function pendant(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        }
      }, {
        key: "postupdate",
        value: function postupdate(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
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
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.put(this.rootURL + '/api/jeweller/v1/1/ornament/15/update/', formData, {
            headers: Headers
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/update/update.component.css":
  /*!*********************************************!*\
    !*** ./src/app/update/update.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateUpdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/update/update.component.ts":
  /*!********************************************!*\
    !*** ./src/app/update/update.component.ts ***!
    \********************************************/

  /*! exports provided: UpdateComponent */

  /***/
  function srcAppUpdateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
      return UpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UpdateComponent =
    /*#__PURE__*/
    function () {
      function UpdateComponent(userService, router) {
        _classCallCheck(this, UpdateComponent);

        this.userService = userService;
        this.router = router;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
      }

      _createClass(UpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
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
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this102 = this;

          this.userService.update(form.value).subscribe(function (res) {
            // console.log(res);
            _this102.router.navigate(['./read']);
          }, function (err) {
            console.log(err.message);
          });
        }
      }]);

      return UpdateComponent;
    }();

    UpdateComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update.component.css */
      "./src/app/update/update.component.css")).default]
    })], UpdateComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(router) {
        _classCallCheck(this, UserComponent);

        this.router = router;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "jeweler",
        value: function jeweler() {
          this.router.navigate(['/jeweler']);
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css")).default]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Developer\Angular 8\start up\harsh project\third\startUp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map