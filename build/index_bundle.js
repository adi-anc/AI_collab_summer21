/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code/bmimodule.js":
/*!***************************!*\
  !*** ./code/bmimodule.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global  BIS */\n\n\n\n\n/**\n * @file A Broswer and Node.js module. Contains {@link BmiModule}.\n * @author Xenios Papademetris\n * @version 1.0\n */\n\n\n/**\n * @namespace BmiModule\n */\n\nconst categories = [ 'Error', 'Underweight','Normal Weight','Overweight', 'Obese' ];\n    \n    \n/**\n * This function computes Body Mass Index (weight/height). The units are determined by the last parameter (ismetric). If ismetric is true then we assume kg and meters else inches and pounds\n * @alias BmiModule.computebmi\n * @param {number} weight - the weight either in kilograms or in pounds\n * @param {number} height - the height either in meters or in inches\n * @param {boolean} ismetric - if true then use metric units (kilograms/meters) else use imperial units (inches/pounds). Default if not specified is false (i.e. use imperial units)\n * @returns {number} -- the body mass index in Kg/m^2\n */\nvar computebmi=function(weight,height,ismetric) {\n    \n    // Set default parameters\n    ismetric=ismetric || false;\n    weight = weight || 0;\n    height = height || 0;\n    \n    // Set some bounds for obvious errors\n    if (weight < 0.001 || height <0.001 || weight > 1000 || height > 100 ) {\n\tconsole.log('Bad inputs to compute bmi');\n\treturn -1.0;\n    }\n    \n    if (ismetric) {\n\t// Return BMI in kg/m\n\treturn weight/(height*height);\n    }\n    \n    // Use scale factor (703)\n    // http://www.whathealth.com/bmi/formula.html\n    return (703*weight)/(height*height);\n};\n\n/**\n * This function takes as input the Body Mass Index (weight/height) and returns a string classification (e.g. \"Overweight\")\n * @alias BmiModule.classifybmi\n * @param {number} bmi - the bmi (perhaps as computed from {@link  BmiModule.computebmi}\n * @returns {string} -- a descriptive text for the BMI.\n */\nvar classifybmi=function(bmi) {\n    bmi = bmi || 0;\n    \n    if (bmi< 10 || bmi > 50)\n\treturn categories[0];\n    \n    if (bmi<18.5)\n\treturn categories[1];\n    \n    if (bmi<25)\n\treturn categories[2];\n    \n    if (bmi<30)\n\treturn categories[3];\n\t\n    return categories[4];\n};\n\n/**\n * This function returns the descriptions of the various states as an array. \n * This is needed for testing.\n * @alias BmiModule.getcategories\n     * @returns {array} -- an array of the various BMI categories.\n     */\nvar getcategories = function() {\n    return categories.slice(0);\n};\n\n\n/**\n * This function returns a text description given the bmi\n * This is needed for testing.\n * @alias BmiModule.getdescription\n * @param {number} bmi - the bmi (perhaps as computed from {@link  BmiModule.computebmi}\n * @param {boolean} ismetric - if true units were metric else imperial.\n * @returns {text} -- a text description of the bmi\n */\nvar getdescription=function(weight,height,ismetric) {\n    \n    ismetric=ismetric || false;\n    weight =weight || 0;\n    height =height || 0;\n    \n    // Compute BMI\n    var bmi=computebmi(weight,height,ismetric);\n    \n    // Round BMI to one decimal place\n    bmi=Math.round(bmi*100)*0.01;\n    \n    // Generate Description\n    var desc=classifybmi(bmi);\n    \n    // Generate output string\n    var units=[ 'Kg','m' ];\n    if (!ismetric)\n\tunits=['Lb','In'];\n    \n    var outtext='Inputs: weight='+weight+' '+units[0]+', height='+height+' '+units[1]+\"\\n\";\n\tif (desc!==\"Error\") {\n\t    outtext+='      BMI = '+bmi+\"\\n\";\n\t    outtext+='      Categorization = '+desc+\"\\n\";\n\t} else {\n\t    outtext+='----- Something is wrong, probably height or weight are not correctly entered.\\n';\n\t}\n    \n    return outtext;\n};\n\n\nmodule.exports = {\n    computebmi : computebmi,\n    classifybmi : classifybmi,\n    getcategories: getcategories,\n    getdescription: getdescription,\n};\n\n\n\n    \n\n\n//# sourceURL=webpack:///./code/bmimodule.js?");

/***/ }),

/***/ "./code/form.js":
/*!**********************!*\
  !*** ./code/form.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// These are hints for JSHint\n/*jshint browser: true*/\n/*jshint undef: true, unused: true */\n/*global window*/\n\n\n\nconst $=window.jQuery;\nconst bioimagesuiteweb=window.bioimagesuiteweb;\n\n\n// Code to Create GUI elements\nconst webutil=bioimagesuiteweb.webutil;\nconst bisgenericio=bioimagesuiteweb.genericio;\n\n// The BMI Module Code\nconst bmi=__webpack_require__(/*! ./bmimodule */ \"./code/bmimodule.js\");\n\n\nconst formtext=`\n      <form class=\"form\">\n\t<div class=\"form-group\">\n\t  <label for=\"weight\">Weight</label>\n\t  <input type=\"number\" step=\"any\" class=\"form-control\" name=\"weight\" placeholder=\"70.0\" style=\"width:200px\">\n\t</div>\n\t<div class=\"form-group\">\n\t  <label for=\"height\">Height</label>\n\t  <input type=\"number\" step=\"any\" class=\"form-control\" name=\"height\" placeholder=\"1.80\" style=\"width:200px\">\n\t</div>\n\t<div class=\"checkbox\">\n\t  <label>\n\t    <input type=\"checkbox\" name=\"metric\" checked=\"true\"> Using Metric Units\n\t  </label>\n\t</div>\n\t<button class=\"btn btn-primary\" type=\"submit\" name=\"compute\" style=\"width:200px\">Compute BMI</button>\n      </form>\n    <HR>`;\n\n\n// -----------------------------------------------------------------\n/**\n * The custom form element\n *\n * to access simply include this file into your code and then add this as an element to your html page\n *\n * @example\n *  <custom-form   id=\"viewer_menubar\"></custom-form> \n *\n */\n\n\nclass CustomFormElement extends  HTMLElement {\n\n    constructor() {\n\n\tsuper();\n\tthis.resultsdialog=null;\n    }\n    \n    connectedCallback() {\n\n\t// Create GUI\n\tthis.core_element=$(formtext);\n\tthis.appendChild(this.core_element[0]); // mapping for Jquery to regular web element\n\n\tthis.weight_input=this.core_element.find(`[name='weight']`);\n\tthis.height_input=this.core_element.find(`[name='height']`);\n\tthis.metric_input=this.core_element.find(`[name='metric']`);\n\tthis.compute_button=this.core_element.find(`[name='compute']`);\n\n\t// Attach a callback to the compute button on the GUI\n\tthis.compute_button.click( (e) => {\n\t    e.preventDefault(); // cancel default behavior\n\t    this.compute();\n\t});\n\n    \tthis.setValues({\n\t    weight : 70.0,\n\t    height : 1.70,\n\t    ismetric  : true,\n\t});\n\n\n}\n\n    setValues(state) {\n\n\t// Set Values from dictionary\n\tthis.weight_input.val(state.weight);\n\tthis.height_input.val(state.height);\n\tthis.metric_input.prop('checked', state.ismetric);\n    }\n\n    getValues() {\n\n\t// Return output as a dictionary\n\tlet output= {\n\t    weight : this.weight_input.val() || 0,\n\t    height : this.height_input.val() || 0,\n\t    ismetric : this.metric_input.is(\":checked\") || false\n\t};\n\n\treturn output;\n    }\n\n    /**\n     * This function computes the results, \n     * creates the results dialog if this is the first time\n     * and displays the results in the results dialog\n     * It first calls {@link Main.storeGUIValuesInApplicationState} to update the \n     * current application state from the GUI and then {@link BmiModule.getdescription} to generate the results\n     */\n     compute() {\n\t let values=this.getValues();\n    \n\t // Compute description text\n\t let outtext=bmi.getdescription(values.weight,\n\t\t\t\t\tvalues.height,\n\t\t\t\t\tvalues.ismetric);\n\t \n\t // Replace all linebreaks \"\\n\" with \"<BR>\"\n\t outtext=outtext.replace(/\\n/g,'<BR>');\n\t \n         // Set the text\n\t \n\t if (this.resultsdialog===null) {\n\t     this.resultsdialog=webutil.createmodal(\"BMI Results\",\"modal-sm\");\n\t }\n    \n\t let content=$('<P>'+outtext+'</P>');\n\t this.resultsdialog.body.empty();\n\t this.resultsdialog.body.append(content);\n\t this.resultsdialog.dialog.modal('show');\n     }\n\n\n    /**\n     * This function loads the state\n     * from a text fileobjeect\n     */\n    load(fileobject) {\n    \n\t// Read returns a structure f\n\tbisgenericio.read(fileobject).then( (f) => {\n\t    \n\t    let obj = { };\n\t    try { \n\t\tobj= JSON.parse(f.data);\n\t    }  catch(e) {\n\t\twebutil.createAlert(`Failed to parse input file ${f.filename}`,true);\n\t    }\n            \n\t    let newvalues = {};\n\t    newvalues.weight=obj.weight || 70.0;\n\t    newvalues.height=obj.height || 1.70;\n\t    newvalues.ismetric=obj.ismetric || false;\n\t    this.setValues(newvalues);\n\n            webutil.createAlert('Loaded from '+f.filename,false);\n            \n\t}).catch( (e) => {\n            webutil.createAlert(e,true);\n        });\n    \n    }\n\n    /**\n     * This function saves the state\n     * to a text file\n     */\n    save(fileobject) {\n\n        // if in the browser (as opposed to electron)\n        //   fileobject is null and must be set to a default value first\n        fileobject=bisgenericio.getFixedSaveFileName(fileobject,\"bmi.json\");\n        \n\tlet values=this.getValues();\n\tlet out=JSON.stringify(values);\n    \tbisgenericio.write(fileobject,out);\n    }\n}\n\n\n\n// Register the element\nwindow.customElements.define('custom-form', CustomFormElement);\n\n\n\n\n//# sourceURL=webpack:///./code/form.js?");

/***/ }),

/***/ "./code/main_application.js":
/*!**********************************!*\
  !*** ./code/main_application.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // Forces strict mode JavaScript\n\n// These are hints for JSHint\n/*jshint browser: true*/\n/*jshint undef: true, unused: true */\n/*global window*/\n\n\n\n// jQuery and Bisweb\nconst $=window.jQuery;\nconst bioimagesuiteweb=window.bioimagesuiteweb;\n\n// Code to Create GUI elements\nconst webutil=bioimagesuiteweb.webutil;\nconst webfileutil=bioimagesuiteweb.webfileutil;\n\n// -----------------------------------------------------------------\n/**\n * The custom form element\n *\n * to access simply include this file into your code and then add this as an element to your html page\n *\n * @example\n *  <custom-form   id=\"viewer_menubar\"></custom-form> \n *\n */\n\n\nclass CustomMainApplication extends  HTMLElement {\n\n    constructor() {\n        super();\n        this.aboutdialog=null;\n    }\n\n    connectedCallback() {\n\n        // Get the IDs of the managed elements\n        const menubarid = this.getAttribute('menubar');\n        const formid = this.getAttribute('form');\n\n        // Get the Managed Elements themselves\n        let menubar = document.querySelector(menubarid).getMenuBar();\n        let form = document.querySelector(formid);\n\n        // Create File Menu\n        let fmenu=webutil.createTopMenuBarMenu(\"File\",menubar);\n\n        webfileutil.createFileMenuItem(fmenu,'Load Application State',\n                                       (f) => {\n                                           form.load(f);\n                                       },\n                                       { title: 'Load Application State',\n                                         save: false,\n                                         suffix : \".json\",\n                                         filters : [ { name: 'Application State File', extensions: [ \"json\"]}],\n                                       }\n                                      );\n        \n\n\n        webfileutil.createFileMenuItem(fmenu, 'Save Application State',\n                                       (f) => {\n                                           form.save(f);\n                                       },\n                                       {\n                                           title: 'Save Application State',\n                                           save: true,\n                                           filters : [ { name: 'Application State File', extensions: [ \"json\"  ]}],\n                                           suffix : \".json\",\n                                           initialCallback : () => { return \"mybmi.json\"; }\n                                       });\n        \n        // Create the Help Menu\n        let hmenu=webutil.createTopMenuBarMenu(\"Help\",menubar);\n        webutil.createMenuItem(hmenu,'About this Application',\n                               () => {\n                                   this.about();\n                               });\n        \n        // Create Viewer link\n        let vmenu = webutil.createTopMenuBarMenu(\"Viewer\", menubar);\n        webutil.createMenuItem(vmenu, \"Orthogonal Viewer\",\n                                () => {\n                                    this.about();\n                                })\n\n    }\n    \n    \n\n\n    /** Show about dialog*/\n    about() {\n        \n        if (this.aboutdialog===null) {\n            \n            // create about dialog\n            let dlg=webutil.createmodal(\"About this Application\",\"modal-sm\");\n            \n            let content=$(`<P>This application computs the body-mass index for a patient.\n              For more information please see <a href=\"https://www.nhlbi.nih.gov/health/educational/lose_wt/bmitools.htm\" target=\"#_blank\"> this NIH website</a>.</P>\n                          <P>The source code for this can be found at <a href=\"https://github.com/bioimagesuiteweb/examples/tree/master/complete\" target=\"#_blank\"> on Github.</a></P>`);\n            dlg.body.append(content);\n            this.aboutdialog=dlg;\n        }\n        \n        //  show about dialog\n        this.aboutdialog.dialog.modal('show');\n    }\n\n}\n\n\n// Register the element\nwindow.customElements.define('custom-mainapplication', CustomMainApplication);\n\n\n\n//# sourceURL=webpack:///./code/main_application.js?");

/***/ }),

/***/ "./code/menubar.js":
/*!*************************!*\
  !*** ./code/menubar.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global  HTMLElement,window */\n\n\nconst $=__webpack_require__(/*! jquery */ \"jquery\");\n\n\nconst menubartext=`\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\" id=\"bismenucontainer\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\" id=\"bismenuheader\" >\n\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bismenu\">\n\t  <span class=\"sr-only\">Toggle navigation</span>\n\t  <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n\t</button>\n\t<img src=\"images/logo.png\" height=\"50px\" style=\"margin-top:5px\">\n      </div>  <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bismenu\">\n\t<ul class=\"nav navbar-nav\" id=\"bismenuparent\" name=\"menubar\">\n\t</ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n\t</nav>`;\n\n\n// -----------------------------------------------------------------\n/**\n * A web element that creates a top menu bar (using BootStrap <nav class=\"navbar navbar-default navbar-fixed-top\">\n *\n * to access simply include this file into your code and then add this as an element to your html page\n *\n * @example\n *  <custom-menubar   id=\"viewer_menubar\"></custom-menubar> \n *\n */\nclass MenuBarElement extends HTMLElement {\n    \n    // Fires when an instance of the element is created.\n    connectedCallback() {\n\t\n\tlet elem=$(menubartext);\n\tthis.appendChild(elem[0]);\n\tthis.menubar=elem.find(\"[name='menubar']\");\n    }\n    \n    /**\n     * returns the menubar div to which one can add a boostrap style menu -- see\n     * {@link WebUtil.createTopMenuBarMenu}\n     */\n    getMenuBar() {\n\treturn this.menubar || null;\n    }\n}\n\n\n// Register the element\nwindow.customElements.define('custom-menubar', MenuBarElement);\n\n\n\n\n//# sourceURL=webpack:///./code/menubar.js?");

/***/ }),

/***/ "./code/statusbar.js":
/*!***************************!*\
  !*** ./code/statusbar.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global  HTMLElement,window */\n\n\nconst $=__webpack_require__(/*! jquery */ \"jquery\");\n\n\nconst statusbartext=`\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\"  style=\"min-height:25px; max-height:25px\">\n    <div style=\"display: inline-block;margin-top:1px; padding-left:2px; padding-right:5px;margin-bottom:1px;height:10px;font-size:14px;float:left\">\n      <img src=\"images/bottomlogo.png\" height=\"20px\"/>\n    </div>\n    <div style=\"display: inline-block;margin-top:1px; padding-left:2px; padding-right:5px;margin-bottom:1px;height:10px;font-size:14px;float:right\">\n      <p>This application is an example for Yale BENG 406b, Spring 2019.</p>\n    </div>\n  </nav>`;\n\n// -----------------------------------------------------------------\n/**\n * A web element that creates a bottom status bar (using BootStrap <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n *\n * to access simply include this file into your code and then add this as an element to your html page\n *\n * @example\n *  <custom-statusbar></custom-statusbar> \n *\n */\nclass StatusBarElement extends HTMLElement {\n    \n    // Fires when an instance of the element is created.\n    connectedCallback() {\n\t\n\tlet elem=$(statusbartext);\n\tthis.appendChild(elem[0]);\n    }\n    \n}\n\n\n// Register the element\nwindow.customElements.define('custom-statusbar', StatusBarElement);\n\n\n\n\n//# sourceURL=webpack:///./code/statusbar.js?");

/***/ }),

/***/ "./web/index.js":
/*!**********************!*\
  !*** ./web/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // Forces strict mode JavaScript\n\n// Require the components\n__webpack_require__(/*! menubar */ \"./code/menubar.js\");\n__webpack_require__(/*! form */ \"./code/form.js\");\n__webpack_require__(/*! main_application */ \"./code/main_application.js\");\n__webpack_require__(/*! statusbar */ \"./code/statusbar.js\");\n\n\n//# sourceURL=webpack:///./web/index.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });