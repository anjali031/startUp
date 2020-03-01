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


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>User Login</h2>\n        </div> \n<div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\n    <i class=\"material-icons\">error</i> Incorrect username or password\n</div>\n<form #loginForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmit(username.value,password.value)\">\n   <div class=\"row\">\n     <div class=\"input-field col s12\">\n       <i class=\"material-icons prefix\">account_circle</i>\n       <input type=\"text\" #username ngModel name=\"username\" placeholder=\"username\" required>\n       <span>use lowercases</span>\n\n     </div>\n   </div>\n   <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">vpn_key</i>\n        <input type=\"password\" #password ngModel name=\"password\" placeholder=\"Password\" required>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\n        </div>\n      </div>\n</form>\n\n</div>\n</div>\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bangles</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BANGLE_SIZE,ORNAMENT_BANGLE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"5\" >Bangles</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n          \n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_BANGLE_STYLE ngModel name=\"ORNAMENT_BANGLE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Broad Bangles</option>\n                    <option value=\"2\" >Oval</option>\n                    <option value=\"3\" >Single Line</option>\n                    <option value=\"4\" >Thin Bangles</option>\n                    <option value=\"5\" >Stackable</option>\n                    <option value=\"6\" >Mens Kada</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>Select Your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your  Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Currated by</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                  <p>Select Your Bangle Size</p>\n                  <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BANGLE_SIZE; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BANGLE_SIZE ngModel name=\"ORNAMENT_BANGLE_SIZE\"  />\n                      <span>{{answer.BANGLE_SIZE}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n              </div>\n          </div>\n          \n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" >\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Bangles Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bracelet</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BRACELET_SIZE,ORNAMENT_BRACELET_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"4\" >Bracelet</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n            \n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_BRACELET_STYLE ngModel name=\"ORNAMENT_BRACELET_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Tennis</option>\n                    <option value=\"2\" >Flexible</option>\n                    <option value=\"3\" >Oval</option>\n                    <option value=\"4\" >Mangalsutra Bracelets</option>\n                    <option value=\"5\" >Chain Bracelets</option>\n                    <option value=\"6\" >Kids Bracelets</option>\n                </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p> Select your Occasion</p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated By</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                  <p> Select your Bracelet Size</p>\n\n                  <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BRACELET_SIZE; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BRACELET_SIZE ngModel name=\"ORNAMENT_BRACELET_SIZE\"  />\n                      <span>{{answer.BRACELET_SIZE}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n            </div>\n          </div>\n\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Bracelet Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"6\" >Chain</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n\n\n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n            \n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p> Select your Occasion</p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p> Select your Curated by</p>\n\n                  <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                      <span>{{answer.CURATED_BY}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n            </div>         \n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select Your Chain Length</p>\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  />\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            \n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Chain Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain with Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>          \n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Pendant Style</option>\n                    <option value=\"1\">Casual </option>\n                    <option value=\"2\" >Initials</option>\n                    <option value=\"3\" >Mother-Daughter</option>\n                    <option value=\"4\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>Select Your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n\n                <p>Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Curated by</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                  <p>Select Your Chain Length</p>\n                  <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  />\n                      <span>{{answer.CHAIN_LENGTH}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n                </ul>\n            </div>\n          </div>\n          \n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your Chain With Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/change/change.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/change/change.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrnamentChangeChangeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>rings</p>\n<!--div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_RING_SIZE,ORNAMENT_RING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(change)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Ringsize.ORNAMENT_RING_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Size(answer.pk)\" #ORNAMENT_RING_SIZE ngModel name=\"ORNAMENT_RING_SIZE\"  required/>\n                    <span>{{answer.RING_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_RING_STYLE ngModel name=\"ORNAMENT_RING_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bands</option>\n                    <option value=\"2\" >Casual Rings</option>\n                    <option value=\"3\" >Cocktail</option>\n                    <option value=\"4\" >Cluster</option>\n                    <option value=\"5\" >Bridal Set</option>\n                    <option value=\"6\" >Chain Rings</option>\n                    <option value=\"7\" >Midi Rings</option>\n                    <option value=\"8\" >Holo</option>\n                    <option value=\"9\" >Mangalsutra Rings</option>\n                    <option value=\"10\" >Flexi Rings</option>\n                    <option value=\"11\" >Half Eternity</option>\n                    <option value=\"12\" >Stackable</option>\n                    <option value=\"13\" >Twin Rings</option>\n                    <option value=\"14\" >Fashion</option>\n                    <option value=\"15\" >Religious</option>\n                    <option value=\"16\" >Wide Rings</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div-->\n\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"11\" >Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Casual</option>\n                  <option value=\"2\" >Initials</option>\n                  <option value=\"3\" >Mother-Daughter</option>\n                  <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>nosepin</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Nosepin</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NOSEPIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"3\" >Nosepin</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_NOSEPIN_STYLE ngModel name=\"ORNAMENT_NOSEPIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament nosepin STYLE</option>\n                    <option value=\"1\"> Wire</option>\n                    <option value=\"2\" >Ring</option>\n                    <option value=\"3\" >Screw</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Nosepin Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>bracelet\n\n</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bracelet</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BRACELET_SIZE,ORNAMENT_BRACELET_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"4\" >Bracelet</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BRACELET_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BRACELET_SIZE ngModel name=\"ORNAMENT_BRACELET_SIZE\"  required/>\n                    <span>{{answer.BRACELET_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_BRACELET_STYLE ngModel name=\"ORNAMENT_BRACELET_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Tennis</option>\n                    <option value=\"2\" >Flexible</option>\n                    <option value=\"3\" >Oval</option>\n                    <option value=\"4\" >Mangalsutra Bracelets</option>\n                    <option value=\"5\" >Chain Bracelets</option>\n                    <option value=\"6\" >Kids Bracelets</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Bracelet Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Bangles</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_BANGLE_SIZE,ORNAMENT_BANGLE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"5\" >Bangles</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_BANGLE_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_BANGLE_SIZE ngModel name=\"ORNAMENT_BANGLE_SIZE\"  required/>\n                    <span>{{answer.BANGLE_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_BANGLE_STYLE ngModel name=\"ORNAMENT_BANGLE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Broad Bangles</option>\n                    <option value=\"2\" >Oval</option>\n                    <option value=\"3\" >Single Line</option>\n                    <option value=\"4\" >Thin Bangles</option>\n                    <option value=\"5\" >Stackable</option>\n                    <option value=\"6\" >Mens Kada</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Bangles Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>chain</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"6\" >Chain</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  required/>\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Chain Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Chain with Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"7\" >Chain with Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Bsize.ORNAMENT_CHAIN_LENGTH; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_CHAIN_LENGTH ngModel name=\"ORNAMENT_CHAIN_LENGTH\"  required/>\n                    <span>{{answer.CHAIN_LENGTH}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_CHAIN_STYLE ngModel name=\"ORNAMENT_CHAIN_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\"> Flat Gold Chain</option>\n                    <option value=\"2\" >Gold Chain for Men\"</option>\n                    <option value=\"3\" >\"Gold Curb Chain</option>\n                    <option value=\"4\" >Gold Link Chain</option>\n                    <option value=\"5\" >Gold Figaro Chain</option>\n                    <option value=\"6\" >Gold Rope Chain</option>\n                    <option value=\"7\" >Flexible</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose Chain Style</option>\n                    <option value=\"1\">Casual </option>\n                    <option value=\"2\" >Initials</option>\n                    <option value=\"3\" >Mother-Daughter</option>\n                    <option value=\"4\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your Chain With Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n--><p>hainwithpendant</p>\n\n<P>culllink</P><!--\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Cuff Link</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"13\" >cuff links</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Cuff Link Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>mangalsutra</p><!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Mangalsutra</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          \n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Mangalsutra Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n\n<p>necklace</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Necklace</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NECKLACE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"8\" >Necklace</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_NECKLACE_STYLE ngModel name=\"ORNAMENT_NECKLACE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bar Necklace</option>\n                    <option value=\"2\" >Lariat</option>\n                    <option value=\"3\" >Y Necklace</option>\n                    <option value=\"4\" >Mala</option>\n                    <option value=\"5\" >Charms</option>\n                    <option value=\"6\" >Long Necklace</option>\n                    <option value=\"7\" >Religious</option>\n                    <option value=\"8\" >Multi-Layered</option>\n                    <option value=\"9\" >Casual Necklace</option>\n                    <option value=\"10\" >Everyday Wears</option>\n                    <option value=\"11\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Necklace Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>sets</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Sets</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"10\" >Sets</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Sets Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->\n<p>Pendant with Ear ring</p>\n<!--<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant with Ear ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #WEIGHT ngModel name=\"WEIGHT\" id=\"WEIGHT\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Weight</option>\n                <option value=\"1\"> 1</option>\n                <option value=\"2\" >2</option>\n                <option value=\"3\" >3</option>\n                <option value=\"4\" >4</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\" required>\n                <option value=\"\" disabled selected>Choose your Ornament Metal</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\">Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <ul class=\"collection answer\">\n                  <p>select your Occasion/p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  required/>\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <p>select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  required/>\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n\n              <ul class=\"collection answer\">\n                <p>select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  required/>\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <ul class=\"collection answer\">\n                <p>select your Curated By</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  required/>\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <ul class=\"collection answer\">\n                <p>select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  required/>\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 \">\n                <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Drops and Dangler</option>\n                    <option value=\"2\" >Studs and Tops</option>\n                    <option value=\"3\" >Hoops and Huggies</option>\n                    <option value=\"4\" >Jhumkas</option>\n                    <option value=\"5\" >Sui Dhaga</option>\n                    <option value=\"6\" >Ear Cuffs and Hugs</option>\n                    <option value=\"7\" >Chandeliers</option>\n                    <option value=\"8\" >Chand Bali</option>\n                    <option value=\"9\" >Mismatched</option>\n                    <option value=\"10\" >Multi Pierced</option>\n                    <option value=\"11\" >Ear Jackets</option>\n                    <option value=\"12\" >Stud with Chain Clips</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Casual</option>\n                  <option value=\"2\" >Initials</option>\n                  <option value=\"3\" >Mother-Daughter</option>\n                  <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant with Ear ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n-->";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Cuff Link</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"13\" >cuff links</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n            \n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>Select Your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>Select Your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>Select Your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Cuff Link Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Mangalsutra</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"9\" >Mangalsutra</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                    <p>Select your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                  <p>Select your Gift type</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                  <p>SSelect Your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                  <p>Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          \n          <input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Mangalsutra Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Necklace</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NECKLACE_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"8\" >Necklace</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_NECKLACE_STYLE ngModel name=\"ORNAMENT_NECKLACE_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Bar Necklace</option>\n                    <option value=\"2\" >Lariat</option>\n                    <option value=\"3\" >Y Necklace</option>\n                    <option value=\"4\" >Mala</option>\n                    <option value=\"5\" >Charms</option>\n                    <option value=\"6\" >Long Necklace</option>\n                    <option value=\"7\" >Religious</option>\n                    <option value=\"8\" >Multi-Layered</option>\n                    <option value=\"9\" >Casual Necklace</option>\n                    <option value=\"10\" >Everyday Wears</option>\n                    <option value=\"11\" >Personalised</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>Select your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>           \n              <ul class=\"collection answer\">\n\n                <p>Select your Gift type</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select  your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select Your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Necklace Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ear Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"2\" >Ear Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n              <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Drops and Dangler</option>\n                  <option value=\"2\" >Studs and Tops</option>\n                  <option value=\"3\" >Hoops and Huggies</option>\n                  <option value=\"4\" >Jhumkas</option>\n                  <option value=\"5\" >Sui Dhaga</option>\n                  <option value=\"6\" >Ear Cuffs and Hugs</option>\n                  <option value=\"7\" >Chandeliers</option>\n                  <option value=\"8\" >Chand Bali</option>\n                  <option value=\"9\" >Mismatched</option>\n                  <option value=\"10\" >Multi Pierced</option>\n                  <option value=\"11\" >Ear Jackets</option>\n                  <option value=\"12\" >Stud with Chain Clips</option>\n              </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Occasion</p>\n\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ear Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Nosepin</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_NOSEPIN_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"3\" >Nosepin</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n              <select class=\"browser-default\" #ORNAMENT_NOSEPIN_STYLE ngModel name=\"ORNAMENT_NOSEPIN_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament nosepin STYLE</option>\n                  <option value=\"1\"> Wire</option>\n                  <option value=\"2\" >Ring</option>\n                  <option value=\"3\" >Screw</option>\n              </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                  <p> Select your Occasion</p>\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p> Select your Gift Type</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \"> \n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Nosepin Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_RING_SIZE,ORNAMENT_RING_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"1\"> Ring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n            <div class=\"input-field col s4 \">\n              <select class=\"browser-default\" #ORNAMENT_RING_STYLE ngModel name=\"ORNAMENT_RING_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Bands</option>\n                  <option value=\"2\" >Casual Rings</option>\n                  <option value=\"3\" >Cocktail</option>\n                  <option value=\"4\" >Cluster</option>\n                  <option value=\"5\" >Bridal Set</option>\n                  <option value=\"6\" >Chain Rings</option>\n                  <option value=\"7\" >Midi Rings</option>\n                  <option value=\"8\" >Holo</option>\n                  <option value=\"9\" >Mangalsutra Rings</option>\n                  <option value=\"10\" >Flexi Rings</option>\n                  <option value=\"11\" >Half Eternity</option>\n                  <option value=\"12\" >Stackable</option>\n                  <option value=\"13\" >Twin Rings</option>\n                  <option value=\"14\" >Fashion</option>\n                  <option value=\"15\" >Religious</option>\n                  <option value=\"16\" >Wide Rings</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selectingme</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Occasion</p>\n\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(change)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Curated by</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (change)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s4\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"6\" class=\"filled-in\" (change)=\"six()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p> Select your Ring Size</p>\n                <ng-container *ngFor =\"let answer of Ringsize.ORNAMENT_RING_SIZE; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Size(answer.pk)\" #ORNAMENT_RING_SIZE ngModel name=\"ORNAMENT_RING_SIZE\"  />\n                    <span>{{answer.RING_SIZE}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n\n          </div>\n          <p>CAD_FILE</p>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n          <p>IMAGE_FILE_ONE</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>IMAGE_FILE_TWO</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>IMAGE_FILE_THREE</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"11\" >Pendant</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s4\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s4\">\n                <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n                <label for=\"weight\">Weight</label>\n            </div>\n            \n            <div class=\"input-field col s4 \">\n                <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                    <option value=\"1\"> Casual</option>\n                    <option value=\"2\" >Initials</option>\n                    <option value=\"3\" >Mother-Daughter</option>\n                    <option value=\"4\" >Personalised</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                    <p>Select your Occasion</p>\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Gift Type</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select your Theme</p>\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n\n                <p>Select Your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>Select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            \n          </div>\n          <p>CAD_FILE</p><input type=\"file\" #CAD_FILE accept=\"\" (change)=\"handleFileInput($event.target.files)\">\n          <p>IMAGE_FILE_ONE</p>\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n          <p>IMAGE_FILE_TWO</p>\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n          <p>IMAGE_FILE_THREE</p>\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Pendant with Ear ring</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"12\" >Pendant with Earring</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_EARRING_STYLE ngModel name=\"ORNAMENT_EARRING_STYLE\"  required>\n                  <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                  <option value=\"1\"> Drops and Dangler</option>\n                  <option value=\"2\" >Studs and Tops</option>\n                  <option value=\"3\" >Hoops and Huggies</option>\n                  <option value=\"4\" >Jhumkas</option>\n                  <option value=\"5\" >Sui Dhaga</option>\n                  <option value=\"6\" >Ear Cuffs and Hugs</option>\n                  <option value=\"7\" >Chandeliers</option>\n                  <option value=\"8\" >Chand Bali</option>\n                  <option value=\"9\" >Mismatched</option>\n                  <option value=\"10\" >Multi Pierced</option>\n                  <option value=\"11\" >Ear Jackets</option>\n                  <option value=\"12\" >Stud with Chain Clips</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6 \">\n              <select class=\"browser-default\" #ORNAMENT_PENDANT_STYLE ngModel name=\"ORNAMENT_PENDANT_STYLE\"  required>\n                <option value=\"\" disabled selected>Choose ornament STYLE</option>\n                <option value=\"1\"> Casual</option>\n                <option value=\"2\" >Initials</option>\n                <option value=\"3\" >Mother-Daughter</option>\n                <option value=\"4\" >Personalised</option>\n              </select>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Occasion</p>\n\n                  <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                   <li>\n                    <label>\n                      <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                      <span>{{answer.OCCASION}}</span>\n                    </label>\n                   </li> \n                  </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Gift</p>\n\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Curated By</p>\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Festival</p>\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new Pendant with Ear ring Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <div class=\"card-panel teal lighten-2\">\n          <h4 class=\"center white-text\">Ornament Sets</h4>\n        </div>\n        <form #imageForm=ngForm (ngSubmit)=\"OnSubmit(ORNAMENT_TYPE,ORNAMENT_MATERIAL,ORNAMENT_SHOPFOR,WEIGHT,ORNAMENT_METAL,ORNAMENT_OCCASION,ORNAMENT_GIFT, ORNAMENT_THEME,ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE ,IMAGE_FILE_ONE,IMAGE_FILE_TWO, IMAGE_FILE_THREE)\">\n          <p>It is mandatory that you fill all the fields </p>\n          <div class=\"row\">\n\n\n            <div class=\"input-field col s6\">\n                <select class=\"browser-default\" #ORNAMENT_TYPE ngModel name=\"ORNAMENT_TYPE\"  required>\n                    <option value=\"\" disabled selected>Choose ornament type</option>\n                    <option value=\"10\" >Sets</option>\n                </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_MATERIAL ngModel name=\"ORNAMENT_MATERIAL\"  required>\n                <option value=\"\" disabled selected>Choose your material</option>\n                <option value=\"1\"> Diamond Studded</option>\n                <option value=\"2\" >Gemstone Studded</option>\n                <option value=\"3\" >Diamond with Gemstone</option>\n                <option value=\"4\" >Simple Plain</option>\n                <option value=\"5\" >Casting Plain</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <select class=\"browser-default\"#ORNAMENT_SHOPFOR ngModel name=\"ORNAMENT_SHOPFOR\" required>\n                <option value=\"\" disabled selected>Choose Shopfor</option>\n                <option value=\"1\"> Women</option>\n                <option value=\"2\" >Men</option>\n              </select>\n            </div>\n            <div class=\"input-field col s6\">\n              <input id=\"weight\" class=\"validate\" type=\"text\" #WEIGHT ngModel name=\"WEIGHT\" required>\n              <label for=\"weight\">Weight</label>\n            </div>\n\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"zero\" class=\"filled-in\" (change)=\"zero()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n                <ul class=\"collection answer\">\n                    <p>select Your Metal</p>\n                    <ng-container *ngFor =\"let answer of Metal.ORNAMENT_METAL; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" id=\"oo\" class=\"filled-in\" value =\"1\"(click)=\"Ornmetal(answer.pk)\" #ORNAMENT_METAL ngModel name=\"ORNAMENT_METAL\"  />\n                        <span>{{answer.METAL}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"input-field col s6\">\n                <p>\n                  <label>\n                    <input type=\"checkbox\" id =\"1\" class=\"filled-in\" (change)=\"one()\"  required/>\n                    <span>check me when you are done selecting</span>\n                  </label>\n                </p>\n                <ul class=\"collection answer\">\n                    <p>select your Occasion</p>\n\n                    <ng-container *ngFor =\"let answer of Occasion.ORNAMENT_OCCASION; let i = index\">\n                     <li>\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" value =\"1\"(click)=\"Answer(answer.pk)\" #ORNAMENT_OCCASION ngModel name=\"ORNAMENT_OCCASION\"  />\n                        <span>{{answer.OCCASION}}</span>\n                      </label>\n                     </li> \n                    </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"2\" class=\"filled-in\" (change)=\"two()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Gift</p>\n                <ng-container *ngFor =\"let answer of Gift.ORNAMENT_GIFT; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornagift(answer.pk)\" #ORNAMENT_GIFT ngModel name=\"ORNAMENT_GIFT\"  />\n                    <span>{{answer.GIFT}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"3\" class=\"filled-in\" (change)=\"three()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n\n              <ul class=\"collection answer\">\n                <p>select your Theme</p>\n\n                <ng-container *ngFor =\"let answer of Theme.ORNAMENT_THEME; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornatheme(answer.pk)\" #ORNAMENT_THEME ngModel name=\"ORNAMENT_THEME\"  />\n                    <span>{{answer.THEME}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"4\" class=\"filled-in\" (change)=\"four()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Curated By</p>\n\n                <ng-container *ngFor =\"let answer of Curated.ORNAMENT_CURATED_BY; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"OrnaCurated(answer.pk)\" #ORNAMENT_CURATED_BY ngModel name=\"ORNAMENT_CURATED_BY\"  />\n                    <span>{{answer.CURATED_BY}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"input-field col s6 \">\n              <p>\n                <label>\n                  <input type=\"checkbox\" id =\"5\" class=\"filled-in\" (change)=\"five()\"  required/>\n                  <span>check me when you are done selecting</span>\n                </label>\n              </p>\n              <ul class=\"collection answer\">\n                <p>select your Festival</p>\n\n                <ng-container *ngFor =\"let answer of Festival.ORNAMENT_FESTIVAL; let i = index\"  >\n                 <li>\n                  <label>\n                    <input type=\"checkbox\" class=\"filled-in\" value =\"1\" (click)=\"Ornafesti(answer.pk)\" #ORNAMENT_FESTIVAL ngModel name=\"ORNAMENT_FESTIVAL\"  />\n                    <span>{{answer.FESTIVAL}}</span>\n                  </label>\n                 </li> \n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <input type=\"file\" #CAD_FILE accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_ONE accept=\"image/*\" (change)=\"handleFileInputone($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_TWO accept=\"image/*\" (change)=\"handleFileInputtwo($event.target.files)\">\n\n          <input type=\"file\" #IMAGE_FILE_THREE accept=\"image/*\" (change)=\"handleFileInputthree($event.target.files)\">\n\n          <button type=\"submit\" class=\"btn-large btn-submit\" [disabled]=\"CAD_FILE.value=='' || IMAGE_FILE_ONE.value=='' || IMAGE_FILE_TWO.value=='' || IMAGE_FILE_THREE.value=='' || !imageForm.valid\">Create your new  Sets Ornament</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s8 offset-s2\">\n          <div class=\"card-panel blue-grey\">\n            <h4 class=\"center white-text\">Choose your Ornament type</h4>\n          </div>\n    \n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=ring()>ring</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=earring()>earring</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=nosepin()>nosepin</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=bracelet()>bracelet</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=bangles()>bangles</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=chain()>chain</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=chainwithpendant()>chain with pendant</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=necklace()>necklace</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=Mangalsutra()>Mangalsutra</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=sets()>sets</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=pendant()>pendant</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=pendantwithearing()>pendant with earing</button><hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=cufflink()>cufflink</button><hr>\n      \n      </div>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col s12 \">\n    <div class=\"card\" *ngFor=\"let question of data.results\">\n      <div class=\"card-image\">\n        <img src=\"{{question.ornament_file_field.IMAGE_FILE_ONE}}\">\n        <span class=\"card-title\">Card Title</span>\n      </div>\n      <div class=\"card-content\">\n        <p>{{question.ORNAMENT_ID}}</p>\n        <p>{{question.JEWELLER_ID}}</p>\n        <p>{{question.WEIGHT}}</p>\n      </div>\n      <!--div class=\"card-action\">\n        <a href=\"#\">This is a link</a>\n      </div-->\n    </div>\n  </div>\n</div>\n<ul class=\"pagination\">\n  <li class=\"disabled\"><a href=\"#!\"><i class=\"material-icons\">chevron_left</i></a></li>\n  <li class=\"waves-effect\"><a (click)=\"page1()\">1</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page2()\">2</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page3()\">3</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page4()\">4</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page5()\">5</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page6()\">6</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page7()\">7</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page8()\">8</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page9()\">9</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page10()\">10</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page11()\">11</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page12()\">12</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page13()\">13</a></li>\n  <li class=\"waves-effect\"><a (click)=\"page14()\">14</a></li>\n\n  <li class=\"waves-effect\"><a href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></li>\n</ul>";
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


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card\">\n        <div class=\"sm-jumbotron center-align\">\n          <h2>create profile</h2>\n        </div>\n          <form class=\"col s12 white\" #createViewForm=\"ngForm\" (ngSubmit)=\"OnSubmit(createViewForm)\">\n            <div class=\"row\">\n              <div class=\"input-field col s6\"> \n                <input id=\"name_of_firm\" type=\"text\" class=\"validate\" name=\"NAME_OF_FIRM\" #NAME_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.NAME_OF_FIRM\"  required >\n                <label for=\"name_of_firm\">Name of Firm</label>\n                <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n              </div>\n              <div class=\"input-field col s6\">\n                  <input id=\"address_of_firm\" class=\"validate\" type=\"text\" name=\"ADDRESS_OF_FIRM\" #ADDRESS_OF_FIRM=\"ngModel\" [(ngModel)]=\"jeweller.ADDRESS_OF_FIRM\" required  >\n                  <label for=\"address_of_firm\">ADDRESS OF FIRM</label>\n                  <span class=\"helper-text\" data-error=\"required!field\" data-success=\"right\"></span>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"row col s6\"> \n                  <select class=\"browser-default\" name=\"CITY\" #CITY=\"ngModel\" [(ngModel)]=\"jeweller.CITY\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option  value=\"Pune\"> Pune</option>\n                    <option value=\"Mumbai\" >Mumbai</option>\n                    <option   value=\"Vadodra\" >Vadodra</option>\n                    <option   value=\"Ahmedabad\" >Ahmedabad</option>\n                  </select>\n                </div>\n                <div class=\"row col s6\">\n                  <select class=\"browser-default\" name=\"STATE\" #STATE=\"ngModel\" [(ngModel)]=\"jeweller.STATE\">\n                    <option value=\"\" disabled selected>Choose your City</option>\n                    <option value=\"Maharashtra\"> Maharashtra</option>\n                    <option value=\"Gujrat\" >Gujrat</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_name\" type=\"text\" class=\"validate\" name=\"CONTACT_NAME\" #CONTACT_NAME=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NAME\" required >\n                  <label for=\"contact_name\">CONTACT_NAME</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"contact_number\" class=\"validate\" type=\"text\" name=\"CONTACT_NUMBER\" #CONTACT_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_NUMBER\" value=\"\" required >\n                    <label for=\"contact_number\">CONTACT_NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"contact_mail_id\" type=\"text\" class=\"validate\" name=\"CONTACT_MAIL_ID\" #CONTACT_MAIL_ID=\"ngModel\" [(ngModel)]=\"jeweller.CONTACT_MAIL_ID\" value=\"\" [pattern]=\"emailPattern\" required >\n                  <label for=\"contact_mail_id\">CONTACT MAIL ID</label>\n                  <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"gst_number\" class=\"validate\" type=\"text\" name=\"GST_NUMBER\" #GST_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.GST_NUMBER\" required  >\n                    <label for=\"gst_number\">GST NUMBER</label>\n                    <span class=\"helper-text\" data-error=\"GST Number should contain 15 characters\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s6\"> \n                  <input id=\"pan_number\" type=\"text\" class=\"validate\" name=\"PAN_NUMBER\" #PAN_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.PAN_NUMBER\" required >\n                  <label for=\"pan_number\">PAN NUMBER</label>\n                  <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_name\" class=\"validate\" type=\"text\" name=\"OWNER_NAME\" #OWNER_NAME=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NAME\" required >\n                    <label for=\"owner_name\">OWNER_NAME</label>\n                    <span class=\"helper-text\" data-error=\"Required Field!\" data-success=\"right\"></span>\n\n                </div>\n              </div>\n              <p>\n                <label>\n                  <input type=\"checkbox\"  id=\"same\" name=\"same\" (change)= \"addres()\" />\n                  <span>Same As Above</span>\n                </label>\n              </p>\n              <p>edit one word of below field to make form validate</p>\n\n              \n              <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_number\" type=\"text\" class=\"validate\" name=\"OWNER_NUMBER\" #OWNER_NUMBER=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_NUMBER\" value=\"\" required >\n                    <span class=\"helper-text\" data-error=\"Required Number!\" data-success=\"right\"></span>\n\n                </div>\n                <div class=\"input-field col s6\">\n                    <input id=\"owner_email\" type=\"text\" class=\"validate\" name=\"OWNER_EMAIL\" #OWNER_EMAIL=\"ngModel\" [(ngModel)]=\"jeweller.OWNER_EMAIL\"  [pattern]=\"emailPattern\" value =\"\" required >\n                    <span class=\"helper-text\" data-error=\"Invalid Email!\" data-success=\"right\"></span>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button [disabled]=\"!createViewForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Create My Profile</button>\n                </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>\n\n \n   ";
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


    __webpack_exports__["default"] = "<nav class=\"blue-grey\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Logo</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li>\n        <a (click)=\"Logout()\">Logout</a>\n        <a class=\"waves-effect waves-light btn-large\"  (click)=changepassword()>Change Password</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<hr>\n<div class=\"row\" >\n    <div class=\"col s8 offset-s2\">\n        <div class=\"sm-jumbotron center-align\">\n          <h5>Your Profile</h5>\n        </div>\n        <div class=\"card blue-white darken-1\" *ngIf =\"data.data\" >\n          <div class=\"card_content white_text\" >\n            <p><strong>Name of Your Firm : </strong> {{data.data.NAME_OF_FIRM}}</p>\n            <p><strong>Address OF  Your Firm : </strong> {{data.data.ADDRESS_OF_FIRM}}</p>\n            <p><strong>City : </strong>{{data.data.CITY}}</p>\n            <p><strong>STATE : </strong> {{data.data.STATE}}</p>\n            <p><strong>Your Contact Name : </strong> {{data.data.CONTACT_NAME}}</p>\n            <p><strong> Your Contact Number : </strong> {{data.data.CONTACT_NUMBER}}</p>\n            <p><strong> Your Contact Mail ID : </strong>{{data.data.CONTACT_MAIL_ID}}</p>\n            <p><strong>GST Number : </strong>{{data.data.GST_NUMBER}}</p>\n            <p><strong>Pan Number: </strong>{{data.data.PAN_NUMBER}}</p>\n            <p><strong>Owner Name: </strong>{{data.data.OWNER_NAME}}</p>\n            <p><strong>Owner Number : </strong> {{data.data.OWNER_NUMBER}}</p>\n            <p><strong>Owner Email : </strong> {{data.data.OWNER_EMAIL}}</p>\n            <p><strong>Username : </strong>{{data.data.username}}</p> \n          </div>\n        </div>\n        <div class=\"sm-jumbotron center-align\">\n            <a class=\"waves-effect waves-light btn-large\"  (click)=update()>Update</a>\n          </div>\n          <hr>\n          <button class=\"btn-large btn-submit\" type=\"submit\" (click)=ornament()>Ornament</button>\n    </div>\n</div>\n\n";
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
    /* harmony import */


    var _ornament_change_change_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./ornament/change/change.component */
    "./src/app/ornament/change/change.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], _as_jeweler_as_jeweler_component__WEBPACK_IMPORTED_MODULE_10__["AsJewelerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_12__["FormsComponent"], _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_13__["PasswordChangeComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"], _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_15__["CreateViewComponent"], _read_read_component__WEBPACK_IMPORTED_MODULE_16__["ReadComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"], _ornaments_ornaments_component__WEBPACK_IMPORTED_MODULE_20__["OrnamentsComponent"], _ornaments_rings_rings_component__WEBPACK_IMPORTED_MODULE_21__["RingsComponent"], _ornaments_neck_neck_component__WEBPACK_IMPORTED_MODULE_22__["NeckComponent"], _jewelornam_jewelornam_component__WEBPACK_IMPORTED_MODULE_23__["JewelornamComponent"], _createvie_createvie_component__WEBPACK_IMPORTED_MODULE_24__["CreatevieComponent"], _createviev_createviev_component__WEBPACK_IMPORTED_MODULE_25__["CreatevievComponent"], _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_26__["MultiselectComponent"], _radiofill_radiofill_component__WEBPACK_IMPORTED_MODULE_27__["RadiofillComponent"], _createvieu_createvieu_component__WEBPACK_IMPORTED_MODULE_28__["CreatevieuComponent"], _ornamentread_ornamentread_component__WEBPACK_IMPORTED_MODULE_29__["OrnamentreadComponent"], _ornamentupdate_ornamentupdate_component__WEBPACK_IMPORTED_MODULE_30__["OrnamentupdateComponent"], _ornamentmultiselect_ornamentmultiselect_component__WEBPACK_IMPORTED_MODULE_31__["OrnamentmultiselectComponent"], _ornament1multiselect_ornament1multiselect_component__WEBPACK_IMPORTED_MODULE_32__["Ornament1multiselectComponent"], _ornament_ornaringtype_ornaringtype_component__WEBPACK_IMPORTED_MODULE_33__["OrnaringtypeComponent"], _ornament_ornaearringtype_ornaearringtype_component__WEBPACK_IMPORTED_MODULE_34__["OrnaearringtypeComponent"], _ornament_pendantearringtype_pendantearringtype_component__WEBPACK_IMPORTED_MODULE_35__["PendantearringtypeComponent"], _ornament_ornamentnosepin_ornamentnosepin_component__WEBPACK_IMPORTED_MODULE_36__["OrnamentnosepinComponent"], _ornament_bracelet_bracelet_component__WEBPACK_IMPORTED_MODULE_37__["BraceletComponent"], _ornament_bangles_bangles_component__WEBPACK_IMPORTED_MODULE_38__["BanglesComponent"], _ornament_chain_chain_component__WEBPACK_IMPORTED_MODULE_39__["ChainComponent"], _ornament_chainwithpendant_chainwithpendant_component__WEBPACK_IMPORTED_MODULE_40__["ChainwithpendantComponent"], _ornament_necklace_necklace_component__WEBPACK_IMPORTED_MODULE_41__["NecklaceComponent"], _ornament_mangalsutra_mangalsutra_component__WEBPACK_IMPORTED_MODULE_42__["MangalsutraComponent"], _ornament_sets_sets_component__WEBPACK_IMPORTED_MODULE_43__["SetsComponent"], _ornament_pendant_pendant_component__WEBPACK_IMPORTED_MODULE_44__["PendantComponent"], _ornamentcufflink_ornamentcufflink_component__WEBPACK_IMPORTED_MODULE_45__["OrnamentcufflinkComponent"], _ornament_cufflink_cufflink_component__WEBPACK_IMPORTED_MODULE_46__["CufflinkComponent"], _ornament_change_change_component__WEBPACK_IMPORTED_MODULE_47__["ChangeComponent"]],
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
        this.emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
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
        key: "check",
        value: function check() {
          if (document.getElementById('password').value != document.getElementById('confirm_password').value) {
            alert("password dont match");
          }
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this = this;

          this.check();
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
        this.emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
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

              _this8.toastr.error(' Make sure your Username is in Lowercase');
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BanglesComponent =
    /*#__PURE__*/
    function () {
      function BanglesComponent(userService, router) {
        _classCallCheck(this, BanglesComponent);

        this.userService = userService;
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
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this9 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this9.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this10 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this10.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this11 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this11.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this12 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this12.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this13 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this13.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this14 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this14.Festival = data;
          });
        }
      }, {
        key: "Banglesize",
        value: function Banglesize() {
          var _this15 = this;

          this.userService.ornBanglesize().subscribe(function (data) {
            console.log(data);
            _this15.Bsize = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);

          if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
          } else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
          }
        }
      }, {
        key: "six",
        value: function six() {
          if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
              document.getElementById('6').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.bsizeb.sort();

              for (var i = 0; i < this.bsizeb.length; i++) {
                if (this.bsizeb[i] !== prev) {
                  a.push(this.bsizeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.bsizeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.bsizea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('bsizea', this.bsizea);
            }
          } else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
          }
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
          var _this16 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.bangles(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_BANGLE_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this16.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return BanglesComponent;
    }();

    BanglesComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BraceletComponent =
    /*#__PURE__*/
    function () {
      function BraceletComponent(userService, router) {
        _classCallCheck(this, BraceletComponent);

        this.userService = userService;
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
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this17 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this17.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this18 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this18.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this19 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this19.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this20 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this20.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this21 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this21.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this22 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this22.Festival = data;
          });
        }
      }, {
        key: "ringsize",
        value: function ringsize() {
          var _this23 = this;

          this.userService.ornBsize().subscribe(function (data) {
            console.log(data);
            _this23.Bsize = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);

          if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
          } else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
          }
        }
      }, {
        key: "six",
        value: function six() {
          if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
              document.getElementById('6').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.bsizeb.sort();

              for (var i = 0; i < this.bsizeb.length; i++) {
                if (this.bsizeb[i] !== prev) {
                  a.push(this.bsizeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.bsizeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.bsizea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('bsizea', this.bsizea);
            }
          } else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
          }
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
          var _this24 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.bracelet(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_BRACELET_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this24.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return BraceletComponent;
    }();

    BraceletComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ChainComponent =
    /*#__PURE__*/
    function () {
      function ChainComponent(userService, router) {
        _classCallCheck(this, ChainComponent);

        this.userService = userService;
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
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this25 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this25.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this26 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this26.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this27 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this27.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this28 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this28.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this29 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this29.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this30 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this30.Festival = data;
          });
        }
      }, {
        key: "Banglesize",
        value: function Banglesize() {
          var _this31 = this;

          this.userService.ornChainlength().subscribe(function (data) {
            console.log(data);
            _this31.Bsize = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);

          if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
          } else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
          }
        }
      }, {
        key: "six",
        value: function six() {
          if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
              document.getElementById('6').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.bsizeb.sort();

              for (var i = 0; i < this.bsizeb.length; i++) {
                if (this.bsizeb[i] !== prev) {
                  a.push(this.bsizeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.bsizeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.bsizea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('bsizea', this.bsizea);
            }
          } else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
          }
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
          var _this32 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.chain(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_CHAIN_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this32.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return ChainComponent;
    }();

    ChainComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ChainwithpendantComponent =
    /*#__PURE__*/
    function () {
      function ChainwithpendantComponent(userService, router) {
        _classCallCheck(this, ChainwithpendantComponent);

        this.userService = userService;
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
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this33 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this33.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this34 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this34.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this35 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this35.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this36 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this36.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this37 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this37.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this38 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this38.Festival = data;
          });
        }
      }, {
        key: "Banglesize",
        value: function Banglesize() {
          var _this39 = this;

          this.userService.ornChainlength().subscribe(function (data) {
            console.log(data);
            _this39.Bsize = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);

          if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.bsizeb.push(k);
            this.bsizea = [];
            console.log(this.bsizea);
            console.log(this.bsizeb);
          } else {
            this.bsizeb.push(k);
            console.log(this.bsizea);
            console.log(this.bsizeb);
          }
        }
      }, {
        key: "six",
        value: function six() {
          if (document.getElementById('6').checked) {
            if (this.bsizeb.length == 0) {
              document.getElementById('6').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.bsizeb.sort();

              for (var i = 0; i < this.bsizeb.length; i++) {
                if (this.bsizeb[i] !== prev) {
                  a.push(this.bsizeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.bsizeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.bsizea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('bsizea', this.bsizea);
            }
          } else {
            this.bsizea = [];
            console.log('bsizea', this.bsizea);
          }
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
          var _this40 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.chaitpen(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.bsizea, this.bsizeb, ORNAMENT_CHAIN_STYLE.value, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this40.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return ChainwithpendantComponent;
    }();

    ChainwithpendantComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
  "./src/app/ornament/change/change.component.css":
  /*!******************************************************!*\
    !*** ./src/app/ornament/change/change.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrnamentChangeChangeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ybmFtZW50L2NoYW5nZS9jaGFuZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ornament/change/change.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ornament/change/change.component.ts ***!
    \*****************************************************/

  /*! exports provided: ChangeComponent */

  /***/
  function srcAppOrnamentChangeChangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeComponent", function () {
      return ChangeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChangeComponent =
    /*#__PURE__*/
    function () {
      function ChangeComponent() {
        _classCallCheck(this, ChangeComponent);
      }

      _createClass(ChangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChangeComponent;
    }();

    ChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ornament/change/change.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change.component.css */
      "./src/app/ornament/change/change.component.css")).default]
    })], ChangeComponent);
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CufflinkComponent =
    /*#__PURE__*/
    function () {
      function CufflinkComponent(userService, router) {
        _classCallCheck(this, CufflinkComponent);

        this.userService = userService;
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

      _createClass(CufflinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this41 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this41.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this42 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this42.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this43 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this43.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this44 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this44.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this45 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this45.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this46 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this46.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this47 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this47.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return CufflinkComponent;
    }();

    CufflinkComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MangalsutraComponent =
    /*#__PURE__*/
    function () {
      function MangalsutraComponent(userService, router) {
        _classCallCheck(this, MangalsutraComponent);

        this.userService = userService;
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

      _createClass(MangalsutraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this48 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this48.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this49 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this49.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this50 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this50.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this51 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this51.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this52 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this52.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this53 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this53.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this54 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this54.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return MangalsutraComponent;
    }();

    MangalsutraComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NecklaceComponent =
    /*#__PURE__*/
    function () {
      function NecklaceComponent(userService, router) {
        _classCallCheck(this, NecklaceComponent);

        this.userService = userService;
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

      _createClass(NecklaceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this55 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this55.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this56 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this56.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this57 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this57.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this58 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this58.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this59 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this59.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this60 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this60.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this61 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.necklace(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_NECKLACE_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this61.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return NecklaceComponent;
    }();

    NecklaceComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OrnaearringtypeComponent =
    /*#__PURE__*/
    function () {
      function OrnaearringtypeComponent(userService, router) {
        _classCallCheck(this, OrnaearringtypeComponent);

        this.userService = userService;
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

      _createClass(OrnaearringtypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this62 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this62.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this63 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this63.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this64 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this64.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this65 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this65.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this66 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this66.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this67 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this67.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this68 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.ear(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_EARRING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this68.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return OrnaearringtypeComponent;
    }();

    OrnaearringtypeComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OrnamentnosepinComponent =
    /*#__PURE__*/
    function () {
      function OrnamentnosepinComponent(userService, router) {
        _classCallCheck(this, OrnamentnosepinComponent);

        this.userService = userService;
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

      _createClass(OrnamentnosepinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this69 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this69.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this70 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this70.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this71 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this71.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this72 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this72.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this73 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this73.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this74 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this74.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this75 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.nosepin(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_NOSEPIN_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status === 201) {
                _this75.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return OrnamentnosepinComponent;
    }();

    OrnamentnosepinComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OrnaringtypeComponent =
    /*#__PURE__*/
    function () {
      function OrnaringtypeComponent(userService, router) {
        _classCallCheck(this, OrnaringtypeComponent);

        this.userService = userService;
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
          this.metal();
        } // arr=[1,1,2,1,5,8,8,8,4,4,8,6,6,6,8,7]
        // var a = [], b = [], prev,final=[];

      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this76 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this76.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this77 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this77.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this78 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this78.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this79 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this79.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this80 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this80.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this81 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this81.Festival = data;
          });
        }
      }, {
        key: "ringsize",
        value: function ringsize() {
          var _this82 = this;

          this.userService.ornRsize().subscribe(function (data) {
            console.log(data);
            _this82.Ringsize = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
        }
      }, {
        key: "Size",
        value: function Size(k) {
          console.log(k);

          if (document.getElementById('6').checked) {
            document.getElementById('6').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.rsizeb.push(k);
            this.rsizea = [];
            console.log(this.rsizea);
            console.log(this.rsizeb);
          } else {
            this.rsizeb.push(k);
            console.log(this.rsizea);
            console.log(this.rsizeb);
          }
        }
      }, {
        key: "six",
        value: function six() {
          if (document.getElementById('6').checked) {
            if (this.rsizeb.length == 0) {
              document.getElementById('6').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.rsizeb.sort();

              for (var i = 0; i < this.rsizeb.length; i++) {
                if (this.rsizeb[i] !== prev) {
                  a.push(this.rsizeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.rsizeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.rsizea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('bsizea', this.rsizea);
            }
          } else {
            this.rsizea = [];
            console.log('bsizea', this.rsizea);
          }
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
          var _this83 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.mli(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.rsizea, this.rsizeb, ORNAMENT_RING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status === 201) {
                _this83.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return OrnaringtypeComponent;
    }();

    OrnaringtypeComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PendantComponent =
    /*#__PURE__*/
    function () {
      function PendantComponent(userService, router) {
        _classCallCheck(this, PendantComponent);

        this.userService = userService;
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

      _createClass(PendantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this84 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this84.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this85 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this85.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this86 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this86.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this87 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this87.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this88 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this88.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this89 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this89.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this90 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.pendant(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status === 201) {
                _this90.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return PendantComponent;
    }();

    PendantComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PendantearringtypeComponent =
    /*#__PURE__*/
    function () {
      function PendantearringtypeComponent(userService, router) {
        _classCallCheck(this, PendantearringtypeComponent);

        this.userService = userService;
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

      _createClass(PendantearringtypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this91 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this91.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this92 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this92.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this93 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this93.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this94 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this94.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this95 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this95.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this96 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this96.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this97 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.pendantwithearing(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, ORNAMENT_EARRING_STYLE.value, ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this97.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return PendantearringtypeComponent;
    }();

    PendantearringtypeComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SetsComponent =
    /*#__PURE__*/
    function () {
      function SetsComponent(userService, toastr, router) {
        _classCallCheck(this, SetsComponent);

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

      _createClass(SetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.read();
          this.occasion();
          this.gift();
          this.theme();
          this.curatedby();
          this.festival();
          this.metal();
        }
      }, {
        key: "read",
        value: function read() {
          this.userService.readorn().subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "metal",
        value: function metal() {
          var _this98 = this;

          this.userService.ornmetal().subscribe(function (data) {
            console.log(data);
            _this98.Metal = data;
          });
        }
      }, {
        key: "occasion",
        value: function occasion() {
          var _this99 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this99.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this100 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this100.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this101 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this101.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this102 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this102.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this103 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this103.Festival = data;
          });
        }
      }, {
        key: "Ornmetal",
        value: function Ornmetal(pk) {
          console.log(pk);

          if (document.getElementById('zero').checked) {
            document.getElementById('zero').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.metalb.push(pk);
            this.metala = [];
            console.log(this.metala);
            console.log(this.metalb);
          } else {
            this.metalb.push(pk);
            console.log(this.metala);
            console.log(this.metalb);
          }
        }
      }, {
        key: "zero",
        value: function zero() {
          if (document.getElementById('zero').checked) {
            if (this.metalb.length == 0) {
              document.getElementById('zero').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.metalb.sort();

              for (var i = 0; i < this.metalb.length; i++) {
                if (this.metalb[i] !== prev) {
                  a.push(this.metalb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.metalb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.metala.push(a[i]);
                }

                i = i + 1;
              }

              console.log('metala', this.metala);
            }
          } else {
            this.metala = [];
            console.log('metala', this.metala);
          }
        }
      }, {
        key: "Answer",
        value: function Answer(pk) {
          console.log(pk);

          if (document.getElementById('1').checked) {
            document.getElementById('1').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asian.push(pk);
            this.asion = [];
            console.log(this.asion);
            console.log(this.asian);
          } else {
            this.asian.push(pk);
            console.log(this.asion);
            console.log(this.asian);
          }
        }
      }, {
        key: "one",
        value: function one() {
          if (document.getElementById('1').checked) {
            if (this.asian.length == 0) {
              document.getElementById('1').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asian.sort();

              for (var i = 0; i < this.asian.length; i++) {
                if (this.asian[i] !== prev) {
                  a.push(this.asian[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asian[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asion.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asion', this.asion);
            }
          } else {
            this.asion = [];
            console.log('asion', this.asion);
          }
        }
      }, {
        key: "Ornagift",
        value: function Ornagift(k) {
          console.log(k);

          if (document.getElementById('2').checked) {
            document.getElementById('2').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.asin.push(k);
            this.asan = [];
            console.log(this.asan);
            console.log(this.asin);
          } else {
            this.asin.push(k);
            console.log(this.asan);
            console.log(this.asin);
          }
        }
      }, {
        key: "two",
        value: function two() {
          if (document.getElementById('2').checked) {
            if (this.asin.length == 0) {
              document.getElementById('2').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.asin.sort();

              for (var i = 0; i < this.asin.length; i++) {
                if (this.asin[i] !== prev) {
                  a.push(this.asin[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.asin[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.asan.push(a[i]);
                }

                i = i + 1;
              }

              console.log('asan', this.asan);
            }
          } else {
            this.asan = [];
            console.log('asan', this.asan);
          }
        }
      }, {
        key: "Ornatheme",
        value: function Ornatheme(k) {
          console.log(k);

          if (document.getElementById('3').checked) {
            document.getElementById('3').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.themeb.push(k);
            this.themea = [];
            console.log(this.themea);
            console.log(this.themeb);
          } else {
            this.themeb.push(k);
            console.log(this.themea);
            console.log(this.themeb);
          }
        }
      }, {
        key: "three",
        value: function three() {
          if (document.getElementById('3').checked) {
            if (this.themeb.length == 0) {
              document.getElementById('3').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.themeb.sort();

              for (var i = 0; i < this.themeb.length; i++) {
                if (this.themeb[i] !== prev) {
                  a.push(this.themeb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.themeb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.themea.push(a[i]);
                }

                i = i + 1;
              }

              console.log('themea', this.themea);
            }
          } else {
            this.themea = [];
            console.log('themea', this.themea);
          }
        }
      }, {
        key: "OrnaCurated",
        value: function OrnaCurated(k) {
          console.log(k);

          if (document.getElementById('4').checked) {
            document.getElementById('4').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.curatedb.push(k);
            this.curateda = [];
            console.log(this.curateda);
            console.log(this.curatedb);
          } else {
            this.curatedb.push(k);
            console.log(this.curateda);
            console.log(this.curatedb);
          }
        }
      }, {
        key: "four",
        value: function four() {
          if (document.getElementById('4').checked) {
            if (this.curatedb.length == 0) {
              document.getElementById('4').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.curatedb.sort();

              for (var i = 0; i < this.curatedb.length; i++) {
                if (this.curatedb[i] !== prev) {
                  a.push(this.curatedb[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.curatedb[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.curateda.push(a[i]);
                }

                i = i + 1;
              }

              console.log('curateda', this.curateda);
            }
          } else {
            this.curateda = [];
            console.log('curateda', this.curateda);
          }
        }
      }, {
        key: "Ornafesti",
        value: function Ornafesti(k) {
          console.log(k);

          if (document.getElementById('5').checked) {
            document.getElementById('5').checked = false;
            alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
            this.festib.push(k);
            this.festia = [];
            console.log(this.festia);
            console.log(this.festib);
          } else {
            this.festib.push(k);
            console.log(this.festia);
            console.log(this.festib);
          }
        }
      }, {
        key: "five",
        value: function five() {
          if (document.getElementById('5').checked) {
            if (this.festib.length == 0) {
              document.getElementById('5').checked = false; // tslint:disable-next-line: max-line-length

              alert('you cannot confirm your option without selecting any, select your option and then confirm');
            } else {
              var a = [],
                  b = [],
                  prev;
              this.festib.sort();

              for (var i = 0; i < this.festib.length; i++) {
                if (this.festib[i] !== prev) {
                  a.push(this.festib[i]);
                  b.push(1);
                } else {
                  b[b.length - 1]++;
                }

                prev = this.festib[i];
              } // return [a, b];


              var i = 0;

              for (var j = 0; j < b.length; j++) {
                if (b[j] % 2 === 0) {} else {
                  this.festia.push(a[i]);
                }

                i = i + 1;
              }

              console.log('festia', this.festia);
            }
          } else {
            this.festia = [];
            console.log('festia', this.festia);
          }
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
          var _this104 = this;

          // tslint:disable-next-line: max-line-length
          if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia == 0) {
            alert('check the confirmation checkboxex to proceed');
          } else {
            this.userService.multi(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, this.metala, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda, this.curatedb, this.festia, this.festib, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(function (data) {
              console.log('done', data);

              if (data.status == 201) {
                _this104.router.navigate(['./ornamentread']);
              }
            });
          }
        }
      }]);

      return SetsComponent;
    }();

    SetsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
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
          var _this105 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this105.Occasion = data;
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
          var _this106 = this;

          this.userService.ornoccasion().subscribe(function (data) {
            console.log(data);
            _this106.Occasion = data;
          });
        }
      }, {
        key: "gift",
        value: function gift() {
          var _this107 = this;

          this.userService.ornGift().subscribe(function (data) {
            console.log(data);
            _this107.Gift = data;
          });
        }
      }, {
        key: "theme",
        value: function theme() {
          var _this108 = this;

          this.userService.ornTheme().subscribe(function (data) {
            console.log(data);
            _this108.Theme = data;
          });
        }
      }, {
        key: "curatedby",
        value: function curatedby() {
          var _this109 = this;

          this.userService.ornCurated().subscribe(function (data) {
            console.log(data);
            _this109.Curated = data;
          });
        }
      }, {
        key: "festival",
        value: function festival() {
          var _this110 = this;

          this.userService.ornFestival().subscribe(function (data) {
            console.log(data);
            _this110.Festival = data;
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
          var _this111 = this;

          this.userService.readorn().subscribe(function (data) {
            console.log(data);
            _this111.data = data;
          });
        }
      }, {
        key: "page2",
        value: function page2() {
          var _this112 = this;

          this.userService.r2().subscribe(function (data) {
            console.log(data);
            _this112.data = data;
          });
        }
      }, {
        key: "page3",
        value: function page3() {
          var _this113 = this;

          this.userService.r3().subscribe(function (data) {
            console.log(data);
            _this113.data = data;
          });
        }
      }, {
        key: "page4",
        value: function page4() {
          var _this114 = this;

          this.userService.r4().subscribe(function (data) {
            console.log(data);
            _this114.data = data;
          });
        }
      }, {
        key: "page5",
        value: function page5() {
          var _this115 = this;

          this.userService.r5().subscribe(function (data) {
            console.log(data);
            _this115.data = data;
          });
        }
      }, {
        key: "page6",
        value: function page6() {
          var _this116 = this;

          this.userService.r6().subscribe(function (data) {
            console.log(data);
            _this116.data = data;
          });
        }
      }, {
        key: "page7",
        value: function page7() {
          var _this117 = this;

          this.userService.r7().subscribe(function (data) {
            console.log(data);
            _this117.data = data;
          });
        }
      }, {
        key: "page8",
        value: function page8() {
          var _this118 = this;

          this.userService.r8().subscribe(function (data) {
            console.log(data);
            _this118.data = data;
          });
        }
      }, {
        key: "page9",
        value: function page9() {
          var _this119 = this;

          this.userService.r9().subscribe(function (data) {
            console.log(data);
            _this119.data = data;
          });
        }
      }, {
        key: "page10",
        value: function page10() {
          var _this120 = this;

          this.userService.r10().subscribe(function (data) {
            console.log(data);
            _this120.data = data;
          });
        }
      }, {
        key: "page11",
        value: function page11() {
          var _this121 = this;

          this.userService.r11().subscribe(function (data) {
            console.log(data);
            _this121.data = data;
          });
        }
      }, {
        key: "page12",
        value: function page12() {
          var _this122 = this;

          this.userService.r12().subscribe(function (data) {
            console.log(data);
            _this122.data = data;
          });
        }
      }, {
        key: "page13",
        value: function page13() {
          var _this123 = this;

          this.userService.r13().subscribe(function (data) {
            console.log(data);
            _this123.data = data;
          });
        }
      }, {
        key: "page14",
        value: function page14() {
          var _this124 = this;

          this.userService.r14().subscribe(function (data) {
            console.log(data);
            _this124.data = data;
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
          var _this125 = this;

          this.userService.changePassword(form.value).subscribe(function (res) {
            console.log(res);

            _this125.router.navigate(['/forms']);
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
        this.emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
      }

      _createClass(RadiofillComponent, [{
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
        } // address() {
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
          var _this126 = this;

          this.userService.createView(form.value).subscribe(function (res) {
            console.log(res);

            _this126.router.navigate(['./read']);
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
          var _this127 = this;

          this.userService.readForm().subscribe(function (data) {
            console.log(data);
            _this127.data = data;

            if (_this127.data.statuscode === 200) {
              _this127.toastr.success('welcome back');
            } else {
              _this127.toastr.success('As you are our New Customer we want you to fill this form to complete your profile');

              _this127.router.navigate(['/radiofill']);
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
        this.arr = [1, 2, 5];
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
        key: "ornmetal",
        value: function ornmetal() {
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/metal/', {
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
        value: function multi(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = metala[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var i = _step.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = asion[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var i = _step2.value;
              formData.append('ORNAMENT_OCCASION', i);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = asan[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var i = _step3.value;
              formData.append('ORNAMENT_GIFT', i);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = themea[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var i = _step4.value;
              formData.append('ORNAMENT_THEME', i);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = curateda[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var i = _step5.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = festia[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var i = _step6.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

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
        key: "mli",
        value: function mli(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, rsizea, rsizeb, ORNAMENT_RING_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = metala[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var i = _step7.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = asion[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var i = _step8.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = asan[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var i = _step9.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = themea[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var i = _step10.value;
              formData.append('ORNAMENT_THEME', i);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = curateda[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var i = _step11.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                _iterator11.return();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }

          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = festia[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var i = _step12.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                _iterator12.return();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          formData.append('ORNAMENT_RING_STYLE', ORNAMENT_RING_STYLE);
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = rsizea[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var i = _step13.value;
              formData.append('ORNAMENT_RING_SIZE', i);
            } // formData.append('ORNAMENT_RING_SIZE', rsizea);
            // formData.append('ORNAMENT_RING_SIZE', rsizeb);

          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                _iterator13.return();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "ear",
        value: function ear(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_EARRING_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = metala[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var i = _step14.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                _iterator14.return();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }

          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = asion[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var i = _step15.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                _iterator15.return();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }

          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = asan[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var i = _step16.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                _iterator16.return();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }

          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = themea[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var i = _step17.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                _iterator17.return();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }

          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = curateda[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var i = _step18.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                _iterator18.return();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }

          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = festia[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var i = _step19.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                _iterator19.return();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "nosepin",
        value: function nosepin(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_NOSEPIN_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = metala[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var i = _step20.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                _iterator20.return();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }

          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = asion[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var i = _step21.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                _iterator21.return();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }

          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = asan[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var i = _step22.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                _iterator22.return();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            for (var _iterator23 = themea[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              var i = _step23.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                _iterator23.return();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }

          var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = curateda[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var i = _step24.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
                _iterator24.return();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }

          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = festia[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var i = _step25.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
                _iterator25.return();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }

          formData.append('ORNAMENT_NOSEPIN_STYLE', ORNAMENT_NOSEPIN_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "pendantwithearing",
        value: function pendantwithearing(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_EARRING_STYLE, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = metala[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var i = _step26.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26.return != null) {
                _iterator26.return();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }

          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = asion[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var i = _step27.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27.return != null) {
                _iterator27.return();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }

          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = asan[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var i = _step28.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28.return != null) {
                _iterator28.return();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }

          var _iteratorNormalCompletion29 = true;
          var _didIteratorError29 = false;
          var _iteratorError29 = undefined;

          try {
            for (var _iterator29 = themea[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
              var i = _step29.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError29 = true;
            _iteratorError29 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion29 && _iterator29.return != null) {
                _iterator29.return();
              }
            } finally {
              if (_didIteratorError29) {
                throw _iteratorError29;
              }
            }
          }

          var _iteratorNormalCompletion30 = true;
          var _didIteratorError30 = false;
          var _iteratorError30 = undefined;

          try {
            for (var _iterator30 = curateda[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
              var i = _step30.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } //  formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError30 = true;
            _iteratorError30 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion30 && _iterator30.return != null) {
                _iterator30.return();
              }
            } finally {
              if (_didIteratorError30) {
                throw _iteratorError30;
              }
            }
          }

          var _iteratorNormalCompletion31 = true;
          var _didIteratorError31 = false;
          var _iteratorError31 = undefined;

          try {
            for (var _iterator31 = festia[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
              var i = _step31.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError31 = true;
            _iteratorError31 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion31 && _iterator31.return != null) {
                _iterator31.return();
              }
            } finally {
              if (_didIteratorError31) {
                throw _iteratorError31;
              }
            }
          }

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
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "bracelet",
        value: function bracelet(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_BRACELET_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion32 = true;
          var _didIteratorError32 = false;
          var _iteratorError32 = undefined;

          try {
            for (var _iterator32 = metala[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
              var i = _step32.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError32 = true;
            _iteratorError32 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion32 && _iterator32.return != null) {
                _iterator32.return();
              }
            } finally {
              if (_didIteratorError32) {
                throw _iteratorError32;
              }
            }
          }

          var _iteratorNormalCompletion33 = true;
          var _didIteratorError33 = false;
          var _iteratorError33 = undefined;

          try {
            for (var _iterator33 = asion[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
              var i = _step33.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError33 = true;
            _iteratorError33 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion33 && _iterator33.return != null) {
                _iterator33.return();
              }
            } finally {
              if (_didIteratorError33) {
                throw _iteratorError33;
              }
            }
          }

          var _iteratorNormalCompletion34 = true;
          var _didIteratorError34 = false;
          var _iteratorError34 = undefined;

          try {
            for (var _iterator34 = asan[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
              var i = _step34.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError34 = true;
            _iteratorError34 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion34 && _iterator34.return != null) {
                _iterator34.return();
              }
            } finally {
              if (_didIteratorError34) {
                throw _iteratorError34;
              }
            }
          }

          var _iteratorNormalCompletion35 = true;
          var _didIteratorError35 = false;
          var _iteratorError35 = undefined;

          try {
            for (var _iterator35 = themea[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
              var i = _step35.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError35 = true;
            _iteratorError35 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion35 && _iterator35.return != null) {
                _iterator35.return();
              }
            } finally {
              if (_didIteratorError35) {
                throw _iteratorError35;
              }
            }
          }

          var _iteratorNormalCompletion36 = true;
          var _didIteratorError36 = false;
          var _iteratorError36 = undefined;

          try {
            for (var _iterator36 = curateda[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
              var i = _step36.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError36 = true;
            _iteratorError36 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion36 && _iterator36.return != null) {
                _iterator36.return();
              }
            } finally {
              if (_didIteratorError36) {
                throw _iteratorError36;
              }
            }
          }

          var _iteratorNormalCompletion37 = true;
          var _didIteratorError37 = false;
          var _iteratorError37 = undefined;

          try {
            for (var _iterator37 = festia[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
              var i = _step37.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError37 = true;
            _iteratorError37 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion37 && _iterator37.return != null) {
                _iterator37.return();
              }
            } finally {
              if (_didIteratorError37) {
                throw _iteratorError37;
              }
            }
          }

          formData.append('ORNAMENT_BRACELET_STYLE', ORNAMENT_BRACELET_STYLE);
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = bsizea[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var i = _step38.value;
              formData.append('ORNAMENT_BRACELET_SIZE', i);
            } // formData.append('ORNAMENT_BRACELET_SIZE', bsizeb);

          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38.return != null) {
                _iterator38.return();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }

          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "bangles",
        value: function bangles(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_BANGLE_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion39 = true;
          var _didIteratorError39 = false;
          var _iteratorError39 = undefined;

          try {
            for (var _iterator39 = metala[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
              var i = _step39.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError39 = true;
            _iteratorError39 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion39 && _iterator39.return != null) {
                _iterator39.return();
              }
            } finally {
              if (_didIteratorError39) {
                throw _iteratorError39;
              }
            }
          }

          var _iteratorNormalCompletion40 = true;
          var _didIteratorError40 = false;
          var _iteratorError40 = undefined;

          try {
            for (var _iterator40 = asion[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
              var i = _step40.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError40 = true;
            _iteratorError40 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion40 && _iterator40.return != null) {
                _iterator40.return();
              }
            } finally {
              if (_didIteratorError40) {
                throw _iteratorError40;
              }
            }
          }

          var _iteratorNormalCompletion41 = true;
          var _didIteratorError41 = false;
          var _iteratorError41 = undefined;

          try {
            for (var _iterator41 = asan[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
              var i = _step41.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError41 = true;
            _iteratorError41 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion41 && _iterator41.return != null) {
                _iterator41.return();
              }
            } finally {
              if (_didIteratorError41) {
                throw _iteratorError41;
              }
            }
          }

          var _iteratorNormalCompletion42 = true;
          var _didIteratorError42 = false;
          var _iteratorError42 = undefined;

          try {
            for (var _iterator42 = themea[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
              var i = _step42.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError42 = true;
            _iteratorError42 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion42 && _iterator42.return != null) {
                _iterator42.return();
              }
            } finally {
              if (_didIteratorError42) {
                throw _iteratorError42;
              }
            }
          }

          var _iteratorNormalCompletion43 = true;
          var _didIteratorError43 = false;
          var _iteratorError43 = undefined;

          try {
            for (var _iterator43 = curateda[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
              var i = _step43.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError43 = true;
            _iteratorError43 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion43 && _iterator43.return != null) {
                _iterator43.return();
              }
            } finally {
              if (_didIteratorError43) {
                throw _iteratorError43;
              }
            }
          }

          var _iteratorNormalCompletion44 = true;
          var _didIteratorError44 = false;
          var _iteratorError44 = undefined;

          try {
            for (var _iterator44 = festia[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
              var i = _step44.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError44 = true;
            _iteratorError44 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion44 && _iterator44.return != null) {
                _iterator44.return();
              }
            } finally {
              if (_didIteratorError44) {
                throw _iteratorError44;
              }
            }
          }

          formData.append('ORNAMENT_BANGLE_STYLE', ORNAMENT_BANGLE_STYLE);
          var _iteratorNormalCompletion45 = true;
          var _didIteratorError45 = false;
          var _iteratorError45 = undefined;

          try {
            for (var _iterator45 = bsizea[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
              var i = _step45.value;
              formData.append('ORNAMENT_BANGLE_SIZE', i);
            } // formData.append('ORNAMENT_BANGLE_SIZE', bsizeb);

          } catch (err) {
            _didIteratorError45 = true;
            _iteratorError45 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion45 && _iterator45.return != null) {
                _iterator45.return();
              }
            } finally {
              if (_didIteratorError45) {
                throw _iteratorError45;
              }
            }
          }

          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "chain",
        value: function chain(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_CHAIN_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion46 = true;
          var _didIteratorError46 = false;
          var _iteratorError46 = undefined;

          try {
            for (var _iterator46 = metala[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
              var i = _step46.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError46 = true;
            _iteratorError46 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion46 && _iterator46.return != null) {
                _iterator46.return();
              }
            } finally {
              if (_didIteratorError46) {
                throw _iteratorError46;
              }
            }
          }

          var _iteratorNormalCompletion47 = true;
          var _didIteratorError47 = false;
          var _iteratorError47 = undefined;

          try {
            for (var _iterator47 = asion[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
              var i = _step47.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError47 = true;
            _iteratorError47 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion47 && _iterator47.return != null) {
                _iterator47.return();
              }
            } finally {
              if (_didIteratorError47) {
                throw _iteratorError47;
              }
            }
          }

          var _iteratorNormalCompletion48 = true;
          var _didIteratorError48 = false;
          var _iteratorError48 = undefined;

          try {
            for (var _iterator48 = asan[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
              var i = _step48.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError48 = true;
            _iteratorError48 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion48 && _iterator48.return != null) {
                _iterator48.return();
              }
            } finally {
              if (_didIteratorError48) {
                throw _iteratorError48;
              }
            }
          }

          var _iteratorNormalCompletion49 = true;
          var _didIteratorError49 = false;
          var _iteratorError49 = undefined;

          try {
            for (var _iterator49 = themea[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
              var i = _step49.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError49 = true;
            _iteratorError49 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion49 && _iterator49.return != null) {
                _iterator49.return();
              }
            } finally {
              if (_didIteratorError49) {
                throw _iteratorError49;
              }
            }
          }

          var _iteratorNormalCompletion50 = true;
          var _didIteratorError50 = false;
          var _iteratorError50 = undefined;

          try {
            for (var _iterator50 = curateda[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
              var i = _step50.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError50 = true;
            _iteratorError50 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion50 && _iterator50.return != null) {
                _iterator50.return();
              }
            } finally {
              if (_didIteratorError50) {
                throw _iteratorError50;
              }
            }
          }

          var _iteratorNormalCompletion51 = true;
          var _didIteratorError51 = false;
          var _iteratorError51 = undefined;

          try {
            for (var _iterator51 = festia[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
              var i = _step51.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError51 = true;
            _iteratorError51 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion51 && _iterator51.return != null) {
                _iterator51.return();
              }
            } finally {
              if (_didIteratorError51) {
                throw _iteratorError51;
              }
            }
          }

          formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
          var _iteratorNormalCompletion52 = true;
          var _didIteratorError52 = false;
          var _iteratorError52 = undefined;

          try {
            for (var _iterator52 = bsizea[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
              var i = _step52.value;
              formData.append('ORNAMENT_CHAIN_LENGTH', i);
            } // formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);

          } catch (err) {
            _didIteratorError52 = true;
            _iteratorError52 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion52 && _iterator52.return != null) {
                _iterator52.return();
              }
            } finally {
              if (_didIteratorError52) {
                throw _iteratorError52;
              }
            }
          }

          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "necklace",
        value: function necklace(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_NECKLACE_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion53 = true;
          var _didIteratorError53 = false;
          var _iteratorError53 = undefined;

          try {
            for (var _iterator53 = metala[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
              var i = _step53.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError53 = true;
            _iteratorError53 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion53 && _iterator53.return != null) {
                _iterator53.return();
              }
            } finally {
              if (_didIteratorError53) {
                throw _iteratorError53;
              }
            }
          }

          var _iteratorNormalCompletion54 = true;
          var _didIteratorError54 = false;
          var _iteratorError54 = undefined;

          try {
            for (var _iterator54 = asion[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
              var i = _step54.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError54 = true;
            _iteratorError54 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion54 && _iterator54.return != null) {
                _iterator54.return();
              }
            } finally {
              if (_didIteratorError54) {
                throw _iteratorError54;
              }
            }
          }

          var _iteratorNormalCompletion55 = true;
          var _didIteratorError55 = false;
          var _iteratorError55 = undefined;

          try {
            for (var _iterator55 = asan[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
              var i = _step55.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError55 = true;
            _iteratorError55 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion55 && _iterator55.return != null) {
                _iterator55.return();
              }
            } finally {
              if (_didIteratorError55) {
                throw _iteratorError55;
              }
            }
          }

          var _iteratorNormalCompletion56 = true;
          var _didIteratorError56 = false;
          var _iteratorError56 = undefined;

          try {
            for (var _iterator56 = themea[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
              var i = _step56.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError56 = true;
            _iteratorError56 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion56 && _iterator56.return != null) {
                _iterator56.return();
              }
            } finally {
              if (_didIteratorError56) {
                throw _iteratorError56;
              }
            }
          }

          var _iteratorNormalCompletion57 = true;
          var _didIteratorError57 = false;
          var _iteratorError57 = undefined;

          try {
            for (var _iterator57 = curateda[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
              var i = _step57.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError57 = true;
            _iteratorError57 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion57 && _iterator57.return != null) {
                _iterator57.return();
              }
            } finally {
              if (_didIteratorError57) {
                throw _iteratorError57;
              }
            }
          }

          var _iteratorNormalCompletion58 = true;
          var _didIteratorError58 = false;
          var _iteratorError58 = undefined;

          try {
            for (var _iterator58 = festia[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
              var i = _step58.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError58 = true;
            _iteratorError58 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion58 && _iterator58.return != null) {
                _iterator58.return();
              }
            } finally {
              if (_didIteratorError58) {
                throw _iteratorError58;
              }
            }
          }

          formData.append('ORNAMENT_NECKLACE_STYLE', ORNAMENT_NECKLACE_STYLE);
          formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
          formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
          formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
          formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
          var Headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'token ' + localStorage.getItem('token'));
          return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {
            headers: Headers
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "chaitpen",
        value: function chaitpen(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, bsizea, bsizeb, ORNAMENT_CHAIN_STYLE, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion59 = true;
          var _didIteratorError59 = false;
          var _iteratorError59 = undefined;

          try {
            for (var _iterator59 = metala[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
              var i = _step59.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError59 = true;
            _iteratorError59 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion59 && _iterator59.return != null) {
                _iterator59.return();
              }
            } finally {
              if (_didIteratorError59) {
                throw _iteratorError59;
              }
            }
          }

          var _iteratorNormalCompletion60 = true;
          var _didIteratorError60 = false;
          var _iteratorError60 = undefined;

          try {
            for (var _iterator60 = asion[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
              var i = _step60.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError60 = true;
            _iteratorError60 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion60 && _iterator60.return != null) {
                _iterator60.return();
              }
            } finally {
              if (_didIteratorError60) {
                throw _iteratorError60;
              }
            }
          }

          var _iteratorNormalCompletion61 = true;
          var _didIteratorError61 = false;
          var _iteratorError61 = undefined;

          try {
            for (var _iterator61 = asan[Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
              var i = _step61.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError61 = true;
            _iteratorError61 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion61 && _iterator61.return != null) {
                _iterator61.return();
              }
            } finally {
              if (_didIteratorError61) {
                throw _iteratorError61;
              }
            }
          }

          var _iteratorNormalCompletion62 = true;
          var _didIteratorError62 = false;
          var _iteratorError62 = undefined;

          try {
            for (var _iterator62 = themea[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
              var i = _step62.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError62 = true;
            _iteratorError62 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion62 && _iterator62.return != null) {
                _iterator62.return();
              }
            } finally {
              if (_didIteratorError62) {
                throw _iteratorError62;
              }
            }
          }

          var _iteratorNormalCompletion63 = true;
          var _didIteratorError63 = false;
          var _iteratorError63 = undefined;

          try {
            for (var _iterator63 = curateda[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
              var i = _step63.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError63 = true;
            _iteratorError63 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion63 && _iterator63.return != null) {
                _iterator63.return();
              }
            } finally {
              if (_didIteratorError63) {
                throw _iteratorError63;
              }
            }
          }

          var _iteratorNormalCompletion64 = true;
          var _didIteratorError64 = false;
          var _iteratorError64 = undefined;

          try {
            for (var _iterator64 = festia[Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
              var i = _step64.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError64 = true;
            _iteratorError64 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion64 && _iterator64.return != null) {
                _iterator64.return();
              }
            } finally {
              if (_didIteratorError64) {
                throw _iteratorError64;
              }
            }
          }

          formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
          var _iteratorNormalCompletion65 = true;
          var _didIteratorError65 = false;
          var _iteratorError65 = undefined;

          try {
            for (var _iterator65 = bsizea[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
              var i = _step65.value;
              formData.append('ORNAMENT_CHAIN_LENGTH', i);
            } //formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);

          } catch (err) {
            _didIteratorError65 = true;
            _iteratorError65 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion65 && _iterator65.return != null) {
                _iterator65.return();
              }
            } finally {
              if (_didIteratorError65) {
                throw _iteratorError65;
              }
            }
          }

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
        value: function pendant(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, metala, asion, asian, asan, asin, themea, themeb, curateda, curatedb, festia, festib, ORNAMENT_PENDANT_STYLE, fileToUpload, fileToUploadone, fileToUploadtwo, fileToUploadthree) {
          var formData = new FormData();
          formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
          formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
          formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
          formData.append('WEIGHT', WEIGHT);
          var _iteratorNormalCompletion66 = true;
          var _didIteratorError66 = false;
          var _iteratorError66 = undefined;

          try {
            for (var _iterator66 = metala[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
              var i = _step66.value;
              formData.append('ORNAMENT_METAL', i);
            }
          } catch (err) {
            _didIteratorError66 = true;
            _iteratorError66 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion66 && _iterator66.return != null) {
                _iterator66.return();
              }
            } finally {
              if (_didIteratorError66) {
                throw _iteratorError66;
              }
            }
          }

          var _iteratorNormalCompletion67 = true;
          var _didIteratorError67 = false;
          var _iteratorError67 = undefined;

          try {
            for (var _iterator67 = asion[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
              var i = _step67.value;
              formData.append('ORNAMENT_OCCASION', i);
            } // formData.append('ORNAMENT_OCCASION', asian);

          } catch (err) {
            _didIteratorError67 = true;
            _iteratorError67 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion67 && _iterator67.return != null) {
                _iterator67.return();
              }
            } finally {
              if (_didIteratorError67) {
                throw _iteratorError67;
              }
            }
          }

          var _iteratorNormalCompletion68 = true;
          var _didIteratorError68 = false;
          var _iteratorError68 = undefined;

          try {
            for (var _iterator68 = asan[Symbol.iterator](), _step68; !(_iteratorNormalCompletion68 = (_step68 = _iterator68.next()).done); _iteratorNormalCompletion68 = true) {
              var i = _step68.value;
              formData.append('ORNAMENT_GIFT', i);
            } // formData.append('ORNAMENT_GIFT', asin);

          } catch (err) {
            _didIteratorError68 = true;
            _iteratorError68 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion68 && _iterator68.return != null) {
                _iterator68.return();
              }
            } finally {
              if (_didIteratorError68) {
                throw _iteratorError68;
              }
            }
          }

          var _iteratorNormalCompletion69 = true;
          var _didIteratorError69 = false;
          var _iteratorError69 = undefined;

          try {
            for (var _iterator69 = themea[Symbol.iterator](), _step69; !(_iteratorNormalCompletion69 = (_step69 = _iterator69.next()).done); _iteratorNormalCompletion69 = true) {
              var i = _step69.value;
              formData.append('ORNAMENT_THEME', i);
            } // formData.append('ORNAMENT_THEME', themeb);

          } catch (err) {
            _didIteratorError69 = true;
            _iteratorError69 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion69 && _iterator69.return != null) {
                _iterator69.return();
              }
            } finally {
              if (_didIteratorError69) {
                throw _iteratorError69;
              }
            }
          }

          var _iteratorNormalCompletion70 = true;
          var _didIteratorError70 = false;
          var _iteratorError70 = undefined;

          try {
            for (var _iterator70 = curateda[Symbol.iterator](), _step70; !(_iteratorNormalCompletion70 = (_step70 = _iterator70.next()).done); _iteratorNormalCompletion70 = true) {
              var i = _step70.value;
              formData.append('ORNAMENT_CURATED_BY', i);
            } // formData.append('ORNAMENT_CURATED_BY', curatedb);

          } catch (err) {
            _didIteratorError70 = true;
            _iteratorError70 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion70 && _iterator70.return != null) {
                _iterator70.return();
              }
            } finally {
              if (_didIteratorError70) {
                throw _iteratorError70;
              }
            }
          }

          var _iteratorNormalCompletion71 = true;
          var _didIteratorError71 = false;
          var _iteratorError71 = undefined;

          try {
            for (var _iterator71 = festia[Symbol.iterator](), _step71; !(_iteratorNormalCompletion71 = (_step71 = _iterator71.next()).done); _iteratorNormalCompletion71 = true) {
              var i = _step71.value;
              formData.append('ORNAMENT_FESTIVAL', i);
            } // formData.append('ORNAMENT_FESTIVAL', festib);

          } catch (err) {
            _didIteratorError71 = true;
            _iteratorError71 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion71 && _iterator71.return != null) {
                _iterator71.return();
              }
            } finally {
              if (_didIteratorError71) {
                throw _iteratorError71;
              }
            }
          }

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
          var _this128 = this;

          this.userService.update(form.value).subscribe(function (res) {
            // console.log(res);
            _this128.router.navigate(['./read']);
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