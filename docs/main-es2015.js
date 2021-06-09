(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\manue\Documents\Angular\teste projeto multimedia\Multimedia\src\main.ts */"zUnb");


/***/ }),

/***/ "2atO":
/*!**********************************************!*\
  !*** ./src/app/popup/popup/popup.service.ts ***!
  \**********************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PopupService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
PopupService.ɵfac = function PopupService_Factory(t) { return new (t || PopupService)(); };
PopupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PopupService, factory: PopupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8Fvf":
/*!******************************************************************************!*\
  !*** ./src/app/popup/settings-model-popup/settings-model-popup.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingsModelPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModelPopupComponent", function() { return SettingsModelPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popup_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/popup.service */ "2atO");
/* harmony import */ var src_app_world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/world.service */ "IQ3W");



class SettingsModelPopupComponent {
    constructor(popupServices, worldService) {
        this.popupServices = popupServices;
        this.worldService = worldService;
    }
    ngOnInit() {
    }
    closePopup() {
        this.popupServices.close(this.id);
    }
    toogleAnimalListPosition() {
        var element = document.getElementsByClassName("toogleAnimalListPosition")[0];
        if (element.checked) {
            this.worldService.animalListPosition = "right";
        }
        else {
            this.worldService.animalListPosition = "left";
        }
    }
}
SettingsModelPopupComponent.ɵfac = function SettingsModelPopupComponent_Factory(t) { return new (t || SettingsModelPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_popup_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"])); };
SettingsModelPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsModelPopupComponent, selectors: [["app-settings-model-popup"]], inputs: { id: "id" }, decls: 15, vars: 0, consts: [[1, "container"], [1, "title"], [1, "options"], [1, "option"], [1, "setting-text"], [1, "switch", "setting-text-button"], ["type", "checkbox", 1, "toogleAnimalListPosition", 3, "click"], [1, "slider", "round"], [1, "btn", 3, "click"]], template: function SettingsModelPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Set animal list window on the right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsModelPopupComponent_Template_input_click_10_listener() { return ctx.toogleAnimalListPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsModelPopupComponent_Template_button_click_13_listener() { return ctx.closePopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n  text-align: center;\r\n  padding: 0.2em 1em;\r\n  border: 0cm;\r\n  font-size: 22px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin: 0px;\r\n  text-align: center;\r\n  padding: 0.2em;\r\n  text-shadow: none;\r\n  border: 0px;\r\n  background-color: #ffffffaa;\r\n  border-radius: 10px;\r\n  border: 2px solid black;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin: 0px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n}\r\n\r\n.options[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background-color: #ffffffaa;\r\n  border-radius: 10px;\r\n  margin: 6px;\r\n  padding: 6px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.option[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0px 6em;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]{\r\n  margin-top: 1em;\r\n}\r\n\r\n.setting-text[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n\r\n.setting-text-button[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n  background-color: #2196F3;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n  transform: translateX(26px);\r\n}\r\n\r\n\r\n\r\n.slider.round[_ngcontent-%COMP%] {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round[_ngcontent-%COMP%]:before {\r\n  border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLW1vZGVsLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0I7O0FBQ2xCLGtCQUFrQjs7QUFDbEIsa0JBQWtCOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUdFLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNldHRpbmdzLW1vZGVsLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMmVtIDFlbTtcclxuICBib3JkZXI6IDBjbTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgze1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxudWx7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ub3B0aW9uc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYWE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDZweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5vcHRpb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDBweCA2ZW07XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5zZXR0aW5nLXRleHR7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc2V0dGluZy10ZXh0LWJ1dHRvbntcclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKi9cclxuLyogc2xpZGVyIGJ1dHRvbiAqL1xyXG4vKioqKioqKioqKioqKioqKiovXHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7IFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjZweDtcclxuICB3aWR0aDogMjZweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "9jgp":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _world_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world.service */ "IQ3W");
/* harmony import */ var _animal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animal.service */ "fW+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shared-service.service */ "ouzR");
/* harmony import */ var _popup_popup_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup/popup/popup.service */ "2atO");
/* harmony import */ var _popup_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup/popup/popup.component */ "vjhT");
/* harmony import */ var _popup_settings_model_popup_settings_model_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup/settings-model-popup/settings-model-popup.component */ "8Fvf");








class MainMenuComponent {
    constructor(worldService, animalService, router, _sharedService, popupServices) {
        this.worldService = worldService;
        this.animalService = animalService;
        this.router = router;
        this._sharedService = _sharedService;
        this.popupServices = popupServices;
        this._sharedService.showAnimalList(false);
    }
    ngOnInit() {
        this.worldService.changeWorld(0);
        this.animalService.refresh();
    }
    start() {
        this.router.navigate(['worlds']);
        this._sharedService.showAnimalList(true);
    }
    openSettings() {
        this.popupServices.open('modal-settings');
        this.worldService.animalListPosition = "left";
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_world_service__WEBPACK_IMPORTED_MODULE_1__["WorldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animal_service__WEBPACK_IMPORTED_MODULE_2__["AnimalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_popup_popup_popup_service__WEBPACK_IMPORTED_MODULE_5__["PopupService"])); };
MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], decls: 10, vars: 0, consts: [["id", "container"], [1, "main-title"], [1, "buttons"], [1, "btn", 3, "click"], [1, "btn", "settings", 3, "click"], ["id", "modal-settings"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sound Hunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_button_click_4_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_button_click_6_listener() { return ctx.openSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-popup", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-settings-model-popup", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_popup_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"], _popup_settings_model_popup_settings_model_popup_component__WEBPACK_IMPORTED_MODULE_7__["SettingsModelPopupComponent"]], styles: ["#container[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(\"/assets/img/main-menu-bg.jpg\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position-x: -20%;\r\n    display: grid;\r\n    grid-template-columns: 5% 65% 30%;\r\n    grid-template-rows: repeat(2, 50%);\r\n    grid-template-areas: \r\n    \". title .\"\r\n    \". . buttons\";\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-size: 10rem;\r\n    font-family: 'Edwardian Script ITC';\r\n    font-weight: lighter;\r\n    color: white;\r\n    grid-area: title;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    grid-area: buttons;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    padding: 0.5em 3em;\r\n    margin-top: 0.7em;\r\n    margin-bottom: 0px;\r\n    margin-right: 3vw;\r\n}\r\n\r\n.settings[_ngcontent-%COMP%]{\r\n    padding: 0.5em 2.15em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1oscURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDOztpQkFFYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoibWFpbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9tYWluLW1lbnUtYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0yMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSA2NSUgMzAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCIuIHRpdGxlIC5cIlxyXG4gICAgXCIuIC4gYnV0dG9uc1wiO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRWR3YXJkaWFuIFNjcmlwdCBJVEMnO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMC41ZW0gM2VtO1xyXG4gICAgbWFyZ2luLXRvcDogMC43ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxufVxyXG5cclxuLnNldHRpbmdze1xyXG4gICAgcGFkZGluZzogMC41ZW0gMi4xNWVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "9ukx":
/*!*********************************!*\
  !*** ./src/app/mock-animals.ts ***!
  \*********************************/
/*! exports provided: ANIMALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS", function() { return ANIMALS; });
/* harmony import */ var _mock_worlds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-worlds */ "Nrcj");

const ANIMALS = [
    { id: 1, name: 'cat', description: '', imageUrl: '../assets/img/cat.png', catched: false, world: _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][0].id, page: 4, x: 0.8715, y: 0.4386, link: "http://en.wikipedia.org/wiki/Cat" },
    { id: 2, name: 'boar', description: '', imageUrl: '../assets/img/boar.png', catched: false, world: _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][0].id, page: 4, x: 0.0613, y: 0.3953, link: "https://en.wikipedia.org/wiki/Wild_boar" },
    { id: 3, name: 'frog', description: '', imageUrl: '../assets/img/frog.png', catched: false, world: _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][1].id, page: 1, x: 0.4855, y: 0.3934, link: "https://en.wikipedia.org/wiki/Frog" },
    { id: 4, name: 'koala', description: '', imageUrl: '../assets/img/koala.png', catched: false, world: _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][1].id, page: 2, x: 0.5914, y: 0.5759, link: "https://en.wikipedia.org/wiki/Koala" },
    { id: 5, name: 'fox', description: '', imageUrl: '../assets/img/fox.png', catched: false, world: _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][2].id, page: 4, x: 0.6368, y: 0.0650, link: "https://en.wikipedia.org/wiki/Fox" },
    { id: 6, name: 'dog', description: '', imageUrl: '../assets/img/dog.png', catched: false, world: _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][2].id, page: 2, x: 0.28, y: 0.18, link: "https://en.wikipedia.org/wiki/Dog" },
];


/***/ }),

/***/ "AytR":
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

/***/ "G+i0":
/*!******************************************************!*\
  !*** ./src/app/animal-list/animal-list.component.ts ***!
  \******************************************************/
/*! exports provided: AnimalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalListComponent", function() { return AnimalListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _animal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animal.service */ "fW+8");
/* harmony import */ var _animal_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animal-info.service */ "xFFl");
/* harmony import */ var _volume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../volume.service */ "JwA2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function AnimalListComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimalListComponent_ng_container_12_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClickAnimal(a_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "animal catched");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("animalImgCatched ", a_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", a_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AnimalListComponent_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimalListComponent_ng_container_12_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onClickAnimal(a_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "animal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("animalImg ", a_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", a_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AnimalListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimalListComponent_ng_container_12_div_1_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnimalListComponent_ng_container_12_div_2_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r1.catched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !a_r1.catched);
} }
class AnimalListComponent {
    constructor(router, animalService, animalInfoService, volumeService) {
        this.router = router;
        this.animalService = animalService;
        this.animalInfoService = animalInfoService;
        this.volumeService = volumeService;
    }
    ngOnInit() {
        //this calls the showWorld method
        this.animalService.showWorld();
        if (this.animalListPos === "right") {
            this.mirrorListRight();
        }
    }
    /**
     * This method remove the class "animalImg" from the animal given in the parameter name and adds the class "animalImgCatched"
     * This solely means that the animal image is not greyed out anymore
     * @param name The name of the animal that was caught
     */
    animalCatched(name) {
        var animal = document.getElementsByClassName(name)[0];
        animal.classList.remove("animalImg");
        animal.classList.add("animalImgCatched");
    }
    /**
     * This method is called when the user clicks the "Local" button
     * It changes the list of animals being shown (which is inside of animalService) so that it only contains the animals
     * from this world. This is done via a method inside animalService
     */
    showLocalAnimals(event) {
        this.updateButtonSelected(event.target);
        this.animalService.showWorld();
    }
    /**
     * This method is called when the user clicks the "Global" button
     * It changes the list of animals being shown (which is inside of animalService) so that it contains all animals.
     * This is done via a method inside animalService
     */
    showAllAnimals(event) {
        this.updateButtonSelected(event.target);
        this.animalService.showAll();
    }
    updateButtonSelected(selectedButton) {
        Array.from(document.getElementsByClassName("list-btn")).forEach(function (element) {
            element.classList.remove("selected");
        });
        if (selectedButton.classList.contains("list-btn")) {
            selectedButton.classList.add("selected");
        }
        else {
            selectedButton.parentElement.classList.add("selected");
        }
    }
    /**
     * This method is called when the user clicks on an animal
     * It "notifies" the animalInfoService what animal was clicked and changes to the animalInfo page
     * @param a The animal that was clicked
     */
    onClickAnimal(a) {
        if (a.catched) {
            this.animalInfoService.changeAnimal(a);
            this.router.navigate(['info']);
        }
    }
    mirrorListRight() {
        var container = document.getElementById('animals');
        var header = document.getElementById('header');
        var main = document.getElementById('main');
        var footer = document.getElementById('footer');
        var bar = document.getElementById('bar');
        container.classList.add("right");
        header.classList.add("right");
        main.classList.add("right");
        footer.classList.add("right");
        bar.classList.add("right");
    }
}
AnimalListComponent.ɵfac = function AnimalListComponent_Factory(t) { return new (t || AnimalListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animal_service__WEBPACK_IMPORTED_MODULE_2__["AnimalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animal_info_service__WEBPACK_IMPORTED_MODULE_3__["AnimalInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_volume_service__WEBPACK_IMPORTED_MODULE_4__["VolumeService"])); };
AnimalListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimalListComponent, selectors: [["app-animal-list"]], inputs: { animalListPos: "animalListPos" }, decls: 23, vars: 3, consts: [["id", "enclosing"], ["id", "animals", 1, "animals"], ["id", "header", 1, "header"], ["src", "\\assets\\icons\\animals-list-icon.png"], [1, "list-btns"], [1, "list-btn", "selected", 3, "click"], [1, "list-btn", 3, "click"], ["id", "main", 1, "main"], [4, "ngFor", "ngForOf"], ["id", "bar", 1, "bar"], ["id", "footer", 1, "footer"], [1, "volume-slider"], [1, "material-icons"], ["type", "range", "min", "0", "max", "100", "value", "100", 1, "volume", 3, "ngModel", "ngModelChange"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], ["id", "animalImg", 3, "src"]], template: function AnimalListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimalListComponent_Template_div_click_5_listener($event) { return ctx.showLocalAnimals($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimalListComponent_Template_div_click_8_listener($event) { return ctx.showAllAnimals($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Global");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AnimalListComponent_ng_container_12_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "volume_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnimalListComponent_Template_input_ngModelChange_18_listener($event) { return ctx.volumeService.volume = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "volume_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.animalService.getAnimals());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volumeService.volume);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.volumeService.volume);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["#enclosing[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    background-color: #B2905B;\n}\n\n.animals[_ngcontent-%COMP%]{\n    display: grid;\n    height: 100%;\n    grid-template-columns: 2% 49% 49%;\n    grid-template-rows: 10% 83% 7%;\n    grid-template-areas: \n        \"header header header\"\n        \"bar animals animals\"\n        \"bar footer footer\";\n}\n\n.animals.right[_ngcontent-%COMP%]{\n    grid-template-columns: 49% 49% 2%;\n    grid-template-areas: \n        \"header header header\"\n        \"animals animals bar\"\n        \"footer footer bar\";\n}\n\n.header[_ngcontent-%COMP%]{\n    padding-right: 0.6em;\n    padding-left: 0.1em;\n    background-color: #D6BA8F;\n    grid-area: header;\n    border: 2px solid black;\n    border-radius: 0px 5px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.header.right[_ngcontent-%COMP%]{\n    border-radius: 5px 0px 0px 0px;\n    flex-direction: row-reverse;\n}\n\n.main[_ngcontent-%COMP%]{\n    direction: rtl;\n    overflow-y: auto;\n    overflow-x: hidden;\n    \n    background-color: #33230966;\n    filter: grayscale(60%);\n    background-size: cover;\n    grid-area: animals;\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: 100%;\n    grid-gap: 3px;\n    \n    justify-content: center;\n    justify-items: center;\n    align-content: start;\n}\n\n.main.right[_ngcontent-%COMP%]{\n    direction: ltr;\n}\n\n.footer[_ngcontent-%COMP%]{\n    background-color: #D6BA8F;\n    grid-area: footer;\n    border: 2px solid black;\n    border-radius: 0px 0px 5px 0px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin: 0px;\n    font-size: 14px;\n}\n\n.footer[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    color: black;\n}\n\n.footer[_ngcontent-%COMP%]   .volume[_ngcontent-%COMP%]{\n    width: 50%;\n}\n\n.footer.right[_ngcontent-%COMP%]{\n    border-radius: 0px 0px 0px 5px;\n}\n\n.bar[_ngcontent-%COMP%]{\n    background-color: #9F9F9F;\n    grid-area: bar;\n    border-bottom: 2px solid black;\n    border-left: 2px solid black;\n    border-right: 0px solid black;\n}\n\n.bar.right[_ngcontent-%COMP%]{\n    border-left: 0px solid black;\n    border-right: 2px solid black;\n}\n\n.animal[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 25px;\n    font-size: 3em;\n    width: 90%;\n    height: 20vh;\n    background-color: #222222ee;\n    cursor: pointer;\n}\n\n.animal[_ngcontent-%COMP%]:hover{\n    box-shadow: 0px 0px 0.2em white;\n}\n\n.animal.catched[_ngcontent-%COMP%] {\n    background-color: #00000022;\n}\n\n.animalImg[_ngcontent-%COMP%] {\n    width: auto;\n    height: 80%;\n    filter: gray;  \n    filter: grayscale(1); \n}\n\n.animalImgCatched[_ngcontent-%COMP%]{\n    width: auto;\n    height: 80%;\n    filter: drop-shadow(.1em .1em .3em white);\n}\n\n#header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: auto;\n    height: 70%;\n}\n\n.list-btn[_ngcontent-%COMP%]{\n    font-weight: 500;\n    margin-top: 0.3em;\n    margin-left: 0vw;\n    border: 2px solid black;\n    border-radius: 7px;\n    background-color: #9D7760;\n    font-size: 0.85em;\n    text-align: center;\n    padding: 3px 20px;\n    cursor: pointer;\n    opacity: 0.8;\n    box-shadow: 0px 2px 10px #7a5843;\n}\n\n.list-btn[_ngcontent-%COMP%]:hover{\n    opacity: 1;\n    box-shadow: 0px 0px 0px #dac4b8;\n}\n\n.list-btn.selected[_ngcontent-%COMP%]{\n    background-color: #c9b2a4;\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5Qjs7OzJCQUd1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQzs7OzJCQUd1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLCtEQUErRDtJQUMvRCwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixZQUFZOztJQUVaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7O0lBRTlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZLEVBQUUsVUFBVSxFQUNNLHlDQUF5QztJQUN2RSxvQkFBb0IsRUFBRSxtQ0FBbUM7QUFDN0Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkIiwiZmlsZSI6ImFuaW1hbC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZW5jbG9zaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjI5MDVCO1xufVxuXG4uYW5pbWFsc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIlIDQ5JSA0OSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgODMlIDclO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJiYXIgYW5pbWFscyBhbmltYWxzXCJcbiAgICAgICAgXCJiYXIgZm9vdGVyIGZvb3RlclwiO1xufVxuXG4uYW5pbWFscy5yaWdodHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ5JSA0OSUgMiU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgIFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIlxuICAgICAgICBcImFuaW1hbHMgYW5pbWFscyBiYXJcIlxuICAgICAgICBcImZvb3RlciBmb290ZXIgYmFyXCI7XG59XG5cbi5oZWFkZXJ7XG4gICAgcGFkZGluZy1yaWdodDogMC42ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZCQThGO1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyLnJpZ2h0e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5tYWlue1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2FuaW1hbHMtbGlzdC1iZzIuUE5HXCIpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzIzMDk2NjtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg2MCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZ3JpZC1hcmVhOiBhbmltYWxzO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgZ3JpZC1nYXA6IDNweDtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbn1cblxuLm1haW4ucmlnaHR7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2QkE4RjtcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvb3RlciBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvb3RlciAudm9sdW1lLXNsaWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb3RlciBzcGFue1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmZvb3RlciAudm9sdW1le1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5mb290ZXIucmlnaHR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RjlGOUY7XG4gICAgZ3JpZC1hcmVhOiBiYXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgYmxhY2s7XG59XG5cbi5iYXIucmlnaHR7XG4gICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmFuaW1hbCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMmVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFuaW1hbDpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDAuMmVtIHdoaXRlO1xufVxuXG4uYW5pbWFsLmNhdGNoZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAyMjtcbn1cblxuLmFuaW1hbEltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZmlsdGVyOiBncmF5OyAvKiBJRTYtOSAqL1xuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7IC8qIEdvb2dsZSBDaHJvbWUsIFNhZmFyaSA2KyAmIE9wZXJhIDE1KyAqL1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpOyAvKiBNaWNyb3NvZnQgRWRnZSBhbmQgRmlyZWZveCAzNSsgKi9cbn1cblxuLmFuaW1hbEltZ0NhdGNoZWR7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyguMWVtIC4xZW0gLjNlbSB3aGl0ZSk7XG59XG5cbiNoZWFkZXIgaW1ne1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNzAlO1xufVxuXG4ubGlzdC1idG57XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOiAwLjNlbTtcbiAgICBtYXJnaW4tbGVmdDogMHZ3O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUQ3NzYwO1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAjN2E1ODQzO1xufVxuXG4ubGlzdC1idG46aG92ZXJ7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjZGFjNGI4O1xufVxuXG4ubGlzdC1idG4uc2VsZWN0ZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YjJhNDtcbiAgICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });


/***/ }),

/***/ "IQ3W":
/*!**********************************!*\
  !*** ./src/app/world.service.ts ***!
  \**********************************/
/*! exports provided: WorldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldService", function() { return WorldService; });
/* harmony import */ var _mock_worlds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-worlds */ "Nrcj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class WorldService {
    constructor() {
        this.worldNumber = 0;
        this.animationNumber = 1;
        this._animalListPosition = "left";
        this.animalListPositionChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.animalListPosition$ = this.animalListPositionChange$.asObservable();
    }
    set animalListPosition(val) {
        console.log(val);
        this._animalListPosition = val;
        this.animalListPositionChange$.next(val); // Trigger the subject, which triggers the Observable
    }
    getWorldById() {
        // console.log("id: " + id)
        // console.log("worlds: " + WORLDS)
        // console.log("worlds filtered: " + WORLDS.filter(function(w){
        //   console.log("worldid: " + w.id)
        //   w.id == id
        // }))
        var result;
        for (var i = 0; i < _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"].length; i++) {
            if (_mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][i].id == this.worldNumber) {
                result = _mock_worlds__WEBPACK_IMPORTED_MODULE_0__["WORLDS"][i];
            }
        }
        return result;
    }
    changeWorld(id) {
        this.worldNumber = id;
    }
    changeAnimation(id) {
        this.animationNumber = id;
    }
}
WorldService.ɵfac = function WorldService_Factory(t) { return new (t || WorldService)(); };
WorldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WorldService, factory: WorldService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JwA2":
/*!***********************************!*\
  !*** ./src/app/volume.service.ts ***!
  \***********************************/
/*! exports provided: VolumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeService", function() { return VolumeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VolumeService {
    constructor() {
        this.volume = 100;
    }
}
VolumeService.ɵfac = function VolumeService_Factory(t) { return new (t || VolumeService)(); };
VolumeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VolumeService, factory: VolumeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NkdC":
/*!**************************************************!*\
  !*** ./src/app/animation/animation.component.ts ***!
  \**************************************************/
/*! exports provided: AnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world.service */ "IQ3W");
/* harmony import */ var _animal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animal.service */ "fW+8");
/* harmony import */ var _volume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../volume.service */ "JwA2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");







function AnimationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.anteriorIndice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.proximoIndice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.returnToHub(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var x;
var y;
class AnimationComponent {
    constructor(router, worldService, animalService, volumeService) {
        this.router = router;
        this.worldService = worldService;
        this.animalService = animalService;
        this.volumeService = volumeService;
        //These two boolean vars are used when a transition between positions (camera rotating) is hapening
        //When "rodandoEsquerda" is true it means we are turning left and when "rodandoDireita" is true
        //it means we are turning right
        this.rodandoDireita = false;
        this.rodandoEsquerda = false;
        this.changing = true;
        this.animalsInPage = [];
    }
    ngOnInit() {
        if (this.worldService.getWorldById() == undefined) {
            this.router.navigate(['']);
        }
        this.pair = {
            audio: -1,
            audio2: -1
        };
        this.onTop = [false, false];
        //this get the position of div containg the video
        var container = document.getElementById('videoContainer');
        var offsets = container.getBoundingClientRect();
        var top = offsets.top;
        var left = offsets.left;
        //this is used to restore the world being shown when the user returns from another page
        //this.changing = false;
        this.current = this.worldService.animationNumber;
        if (this.current != 1) {
            this.changing = false;
        }
        console.log(this.current);
        console.log(this.animalsInPage);
        /*if(this.current === 0){
            this.arriveNewWorldVideo()
        }*/
        this.changeVideo();
        //this gets the video element and sets a onended listener that calls the "changeVideo()" function and plays the video afterwards
        console.log("Div in position (" + left + "," + top + ")");
        var aux = this;
        window.onmousemove = function (e) {
            x = e.clientX - left,
                y = -(e.clientY - top);
            x /= container.clientWidth;
            y /= container.clientHeight;
            console.log("Mouse in position (" + x + "," + y + ")");
            if (aux.changing) {
                aux.resetAudio();
                return;
            }
            for (var i = 0; i < aux.animalsInPage.length; i++) {
                var animalx = aux.animalsInPage[i].animal.x;
                var animaly = aux.animalsInPage[i].animal.y;
                var distance = Math.abs(aux.distance(x, y, animalx, animaly));
                console.log("distance to " + aux.animalsInPage[i].animal.name + " : " + distance);
                if (distance < 0.2) {
                    aux.playAudio(i);
                    aux.mudaVolume(i, 1 - (distance / 0.2));
                    //console.log("audio played");
                    //aux.audio.volume = 1 - (distance / 0.2);
                    //console.log("volume setted to: " + aux.audio.volume);
                    //aux.audio.play();
                }
                else {
                    //console.log("audio paused");
                    aux.pausa(i);
                }
                if (distance < 0.06) {
                    console.log("You are hoovering the " + aux.animalsInPage[i].animal.name);
                    aux.animalsInPage[i].onTop = true;
                }
                else {
                    aux.animalsInPage[i].onTop = false;
                }
                console.log(aux.animalsInPage);
            }
        };
    }
    resetAudio() {
        if (this.audio != undefined) {
            this.audio.pause();
        }
        if (this.audio2 != undefined) {
            this.audio2.pause();
        }
    }
    playAudio(animal) {
        if (this.audio == undefined || this.pair.audio == -1) {
            console.log("A");
            if (this.audio == undefined) {
                this.audio = new Audio();
            }
            if (this.audio.paused) {
                this.pair.audio = animal;
                this.audio.src = "../../../assets/sounds/" + this.animalsInPage[animal].animal.name + ".mp3";
                this.audio.loop = true;
                this.audio.load();
                this.audio.play();
            }
        }
        else if (this.pair.audio == animal) {
            console.log("B");
            this.audio.play();
        }
        else if (this.audio2 == undefined || this.pair.audio2 == -1) {
            console.log("C");
            if (this.audio2 == undefined) {
                this.audio2 = new Audio();
            }
            //this.audio2 = new Audio();
            if (this.audio2.paused) {
                this.pair.audio2 = animal;
                this.audio2.src = "../../../assets/sounds/" + this.animalsInPage[animal].animal.name + ".mp3";
                this.audio2.loop = true;
                this.audio2.load();
                this.audio2.play();
            }
        }
        else if (this.pair.audio2 == animal) {
            console.log("D");
            this.audio2.play();
        }
        //TODO: use animal to get the respective sound
    }
    mudaVolume(animal, volume) {
        if (this.pair.audio == animal) {
            this.audio.volume = volume;
            this.audio.play();
        }
        else if (this.pair.audio2 == animal) {
            this.audio2.volume = volume;
            this.audio2.play();
        }
    }
    pausa(animal) {
        if (this.pair.audio == animal) {
            this.audio.loop = false;
            this.audio.pause();
        }
        else if (this.pair.audio2 == animal) {
            this.audio2.loop = false;
            this.audio2.pause();
        }
    }
    /**
     * This method is called when the user clicks on the video
     */
    onClickVideo() {
        var sourceAux = document.getElementById("source");
        var source = sourceAux;
        var videoAux = document.getElementById("video");
        var video = videoAux;
        var aux2 = this;
        console.log(this.animalsInPage);
        for (var i = 0; i < this.animalsInPage.length; i++) {
            console.log(this.animalsInPage[i]);
            if (this.animalsInPage[i].onTop) {
                this.changing = true;
                var animal = aux2.animalsInPage[i].animal;
                var last = source.src;
                this.url = `assets/video/catch${animal.id}.mp4`;
                video.load();
                video.play();
                video.onended = function () {
                    aux2.animalService.setCatched(animal.id);
                    aux2.url = last;
                    video.load();
                    video.play();
                    aux2.changing = false;
                };
            }
        }
    }
    /**
     * This method is called when the user clicks the left arrow button
     * It changes the "current" variable to the previous position index, "notifies" the
     * world Service of this change, changes the value of the variable "rodandoEsquerda" to true
     * and calls "changeVideo()"
     */
    anteriorIndice() {
        this.current = this.previous();
        this.worldService.changeAnimation(this.current);
        this.worldService.changeAnimation(this.current);
        this.rodandoEsquerda = true;
        this.changing = true;
        this.changeVideo();
        for (var i = 0; i < this.animalsInPage.length; i++) {
            this.animalsInPage[i].onTop = false;
        }
        this.pair.audio = -1;
        this.pair.audio2 = -1;
        this.resetAudio();
    }
    /**
     * This method calculates the previous position index
     * @returns The previous world index
     */
    previous() {
        var result = ((this.current - 1) % 5);
        if (result <= 0) {
            result = 4;
        }
        return result;
    }
    /**
     * This method is called when the user clicks the right arrow button
     * It changes the "current" variable to the next position index, "notifies" the
     * world Service of this change, changes the value of the variable "rodandoDireita" to true
     * and calls "changeVideo()"
     */
    proximoIndice() {
        this.current = ((this.current + 1) % 5);
        //this.animalsInPage = this.animalService.getAnimalForPage(this.current);
        this.worldService.changeAnimation(this.current);
        if (this.current == 0) {
            this.current++;
        }
        this.worldService.changeAnimation(this.current);
        this.rodandoDireita = true;
        this.changing = true;
        this.changeVideo();
        for (var i = 0; i < this.animalsInPage.length; i++) {
            this.animalsInPage[i].onTop = false;
        }
        this.pair.audio = -1;
        this.pair.audio2 = -1;
        this.resetAudio();
    }
    /**
     * This method calculates the previous position index
     * @returns The previous world index
     */
    next() {
        var result = ((this.current + 1) % 5);
        if (result <= 0) {
            result++;
        }
        return result;
    }
    /**
     * This method is called when the user clicks the back button
     * It simply navigates to the world choice menu
     */
    returnToHub() {
        var videoAux = document.getElementById("video");
        var video = videoAux;
        this.worldService.changeAnimation(0);
        this.router.navigate(['worlds']);
    }
    /**
     * This method changes the video being presented to the user
     * It first verifies if "rodandoDireita" or "rodandoEsquerda" are true and
     * if one of them is true, it change to the video transition between the previous video being shown
     * and the video that is going to be shown and adds a listener to its end. When the video ends it
     * changes to the new video being shown
     * If none of them are true, the method simply set the video to be the current one
     * At the end of the method video.load() and video.play() are called to make the video be shown and played
     */
    changeVideo() {
        var sourceAux = document.getElementById("source");
        var source = sourceAux;
        var videoAux = document.getElementById("video");
        var video = videoAux;
        var aux2 = this;
        if (this.rodandoDireita) {
            source.src = `assets/video/${this.worldService.getWorldById().name}/${this.previous()}${this.current}.mp4`;
            this.url = `assets/video/${this.worldService.getWorldById().name}/${this.previous()}${this.current}.mp4`;
            video.onended = function () {
                if (aux2.rodandoDireita) {
                    source.src = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`;
                    aux2.url = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`;
                    aux2.rodandoDireita = false;
                    console.log(aux2.url);
                    video.load();
                    video.play();
                }
                else {
                    video.currentTime = 0;
                    video.play();
                }
                aux2.animalsInPage = aux2.animalService.getAnimalForPage(aux2.current);
                aux2.changing = false;
            };
            video.load();
            video.play();
        }
        else if (this.rodandoEsquerda) {
            source.src = `assets/video/${this.worldService.getWorldById().name}/${this.next()}${this.current}.mp4`;
            this.url = `assets/video/${this.worldService.getWorldById().name}/${this.next()}${this.current}.mp4`;
            video.onended = function () {
                if (aux2.rodandoEsquerda) {
                    source.src = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`;
                    aux2.url = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`;
                    aux2.rodandoEsquerda = false;
                    console.log(aux2.url);
                    video.load();
                    video.play();
                }
                else {
                    video.currentTime = 0;
                    video.play();
                }
                aux2.animalsInPage = aux2.animalService.getAnimalForPage(aux2.current);
                aux2.changing = false;
            };
            video.load();
            video.play();
        }
        else if (this.changing) {
            console.log("im here");
            this.url = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4`;
            video.onended = function () {
                console.log("im here");
                aux2.current = 1;
                aux2.url = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`;
                video.currentTime = 0;
                video.load();
                video.play();
                aux2.animalsInPage = aux2.animalService.getAnimalForPage(aux2.current);
            };
            console.log(video.onended);
        }
        else {
            source.src = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4`;
            this.url = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4`;
            video.onended = function () {
                video.currentTime = 0;
                video.load();
                video.play();
                aux2.animalsInPage = aux2.animalService.getAnimalForPage(aux2.current);
            };
            video.play();
        }
        console.log(aux2.url);
    }
    timeUpdate(time) {
        //console.log(time.target.currentTime)
        var videoAux = document.getElementById("video");
        var video = videoAux;
        //console.log(video.duration);
        if (this.current == 0 && Math.abs(time.target.currentTime - video.duration) < 0.001) {
            //console.log("im here")
            this.current = 1;
            this.changing = false;
            this.changeVideo();
        }
        video.volume = this.volumeService.volume / 100;
    }
    distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    getVideoUrl() {
        return this.url;
    }
}
AnimationComponent.ɵfac = function AnimationComponent_Factory(t) { return new (t || AnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animal_service__WEBPACK_IMPORTED_MODULE_3__["AnimalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_volume_service__WEBPACK_IMPORTED_MODULE_4__["VolumeService"])); };
AnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimationComponent, selectors: [["app-animation"]], decls: 8, vars: 4, consts: [[1, "image", "imageDiv"], ["id", "videoContainer"], ["id", "video", "autoplay", "true", 1, "video", 3, "timeupdate"], ["id", "source", "type", "video/mp4", 3, "src"], [3, "click"], ["id", "botaoAnt", 4, "ngIf"], ["id", "botaoNxt", 4, "ngIf"], ["id", "botaoReturnHub", 4, "ngIf"], ["id", "botaoAnt"], [1, "arrow", 3, "click"], ["id", "botaoNxt"], [1, "arrow", "arrows-right", 3, "click"], ["id", "botaoReturnHub"], ["mat-raised-button", "", "matTooltip", "Go back to hub world", "matTooltipHideDelay", "100000", 1, "back-button", 3, "click"], ["tooltip", "matTooltip"]], template: function AnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeupdate", function AnimationComponent_Template_video_timeupdate_2_listener($event) { return ctx.timeUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationComponent_Template_span_click_4_listener() { return ctx.onClickVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnimationComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AnimationComponent_div_6_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnimationComponent_div_7_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.getVideoUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: ["#videoContainer[_ngcontent-%COMP%]{\n    \n      grid-column-start: 1;\n      grid-column-end: span 3;\n      grid-row: 1;\n      \n  }\n\n#videoContainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n\n.image[_ngcontent-%COMP%]{\n      width: 100%;\n      height: 100%;\n  }\n\n.imageDiv[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 7% auto 7%;\n    grid-template-rows: 100%;\n  }\n\n#botaoAnt[_ngcontent-%COMP%], #botaoNxt[_ngcontent-%COMP%]{\n      position: relative  ;\n      top: 45%;\n      grid-row: 1;\n    }\n\n#botaoAnt[_ngcontent-%COMP%]{\n      grid-column: 1;\n      z-index: 2;\n    }\n\n#botaoNxt[_ngcontent-%COMP%]{\n      grid-column: 3;\n      right: 0%;\n      z-index: 2;\n    }\n\n#botaoReturnHub[_ngcontent-%COMP%]{\n\t  position: relative;\n\t  grid-row: 1;\n\t  grid-column: 1;\n\t  top: 2%;\n\t  right: -25%;\n\t}\n\n.botaoAnterior[_ngcontent-%COMP%]{\n        width: 45px;\n        height: 45px;\n        font-size: 30px;\n    }\n\n.botaoSeguinte[_ngcontent-%COMP%]{\n      width: 45px;\n      height: 45px;\n      font-size: 30px;\n    }\n\n.returnToHub[_ngcontent-%COMP%]{\n\t  width: 50px;\n      height: 50px;\n\t  border-radius: 50%;\n      font-size: 30px;\n\t  display:block;\n      border: 1px solid black;\n\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7Ozt1Q0FHbUM7TUFDakMsb0JBQW9CO01BQ3BCLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gsZ0JBQWdCO0VBQ3BCOztBQUVGO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNFO01BQ0ksV0FBVztNQUNYLFlBQVk7RUFDaEI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHdCQUF3QjtFQUMxQjs7QUFFQTtNQUNJLG9CQUFvQjtNQUNwQixRQUFRO01BQ1IsV0FBVztJQUNiOztBQUVBO01BQ0UsY0FBYztNQUNkLFVBQVU7SUFDWjs7QUFFQTtNQUNFLGNBQWM7TUFDZCxTQUFTO01BQ1QsVUFBVTtJQUNaOztBQUVIO0dBQ0Usa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxjQUFjO0dBQ2QsT0FBTztHQUNQLFdBQVc7Q0FDYjs7QUFFRztRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7QUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtJQUNqQjs7QUFFSDtHQUNFLFdBQVc7TUFDUixZQUFZO0dBQ2Ysa0JBQWtCO01BQ2YsZUFBZTtHQUNsQixhQUFhO01BQ1YsdUJBQXVCO0NBQzVCIiwiZmlsZSI6ImFuaW1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZGVvQ29udGFpbmVye1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7ICovXG4gICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAzO1xuICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICAvKiB6LWluZGV4OiAxOyAqL1xuICB9XG5cbiN2aWRlb0NvbnRhaW5lciBzcGFue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiAgLmltYWdle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5pbWFnZURpdntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNyUgYXV0byA3JTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gIH1cbiAgXG4gICNib3Rhb0FudCwgI2JvdGFvTnh0e1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlICA7XG4gICAgICB0b3A6IDQ1JTtcbiAgICAgIGdyaWQtcm93OiAxO1xuICAgIH1cbiAgXG4gICAgI2JvdGFvQW50e1xuICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgXG4gICAgI2JvdGFvTnh0e1xuICAgICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgICByaWdodDogMCU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cblx0XG5cdCNib3Rhb1JldHVybkh1Yntcblx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgZ3JpZC1yb3c6IDE7XG5cdCAgZ3JpZC1jb2x1bW46IDE7XG5cdCAgdG9wOiAyJTtcblx0ICByaWdodDogLTI1JTtcblx0fVxuICBcbiAgICAuYm90YW9BbnRlcmlvcntcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAuYm90YW9TZWd1aW50ZXtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblx0XG5cdC5yZXR1cm5Ub0h1Yntcblx0ICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcblx0ICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG5cdCAgZGlzcGxheTpibG9jaztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHR9Il19 */"] });


/***/ }),

/***/ "Nrcj":
/*!********************************!*\
  !*** ./src/app/mock-worlds.ts ***!
  \********************************/
/*! exports provided: WORLDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORLDS", function() { return WORLDS; });
const WORLDS = [
    { id: 1, name: "mountain" },
    { id: 2, name: "forest" },
    { id: 3, name: "city" }
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_shared_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/shared-service.service */ "ouzR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world.service */ "IQ3W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _animal_list_animal_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animal-list/animal-list.component */ "G+i0");







const _c0 = ["video1"];
function AppComponent_app_animal_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-animal-list", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("animalListPos", ctx_r0.animalListPos);
} }
var x;
var y;
class AppComponent {
    constructor(_sharedService, worldServise) {
        this._sharedService = _sharedService;
        this.worldServise = worldServise;
        this.title = 'Multimedia';
        this.showAnimalList = true;
        this.animalListPos = "left";
        this.mainContainerStyle = "master";
        this.image = true;
        this.video1 = false;
        this.video2 = false;
        this.current = 1;
        this._sharedService.changeEmitted$.subscribe(value => {
            this.mainContainerStyle = value ? "master" : "master-full";
            this.showAnimalList = value;
            document.getElementById('container').classList.remove("master");
            document.getElementById('container').classList.remove("master-full");
            document.getElementById('container').classList.add(this.mainContainerStyle);
        });
    }
    ngOnInit() {
        this.worldServise.animalListPosition$.subscribe(toogle => {
            console.log("sadasdasdasdsad");
            var container = document.getElementById('container');
            if (toogle == "right") {
                container.classList.add("right");
                this.animalListPos = "right";
            }
            else {
                container.classList.remove("right");
                this.animalListPos = "left";
            }
        });
        var offsets = document.getElementById('imageContainer').getBoundingClientRect();
        var top = offsets.top;
        var left = offsets.left;
        //console.log("Div in position (" + left + "," + top + ")");
        window.onmousemove = function (e) {
            x = e.clientX - left,
                y = e.clientY - top;
            console.log("Mouse in position (" + x + "," + y + ")");
            if (this.audio == undefined) {
                this.audio = new Audio();
            }
            if (x > 1100 - left && x < 1300 - left && y > 600 - top && y < 800 - top) {
                if (!this.onTop) {
                    this.audio.src = "../../../assets/sounds/Sia - Cheap Thrills (Lyric Video) ft. Sean Paul.mp3";
                    this.audio.load();
                    this.audio.play();
                }
                console.log("You are hoovering the light");
                this.onTop = true;
            }
            else {
                this.onTop = false;
                this.audio.pause();
            }
        };
    }
    onClickImage() {
        this.image = false;
        this.video1 = true;
        this.video2 = false;
        setTimeout(this.startVideo1, 10);
    }
    onClickVideo1() {
        this.image = false;
        this.video1 = false;
        this.video2 = true;
        setTimeout(this.startVideo2, 10);
    }
    onClickVideo2() {
        this.image = true;
        this.video1 = false;
        this.video2 = false;
    }
    startVideo1() {
        var videoElem = document.getElementById("video1");
        videoElem.play();
    }
    startVideo2() {
        var videoElem = document.getElementById("video2");
        videoElem.play();
    }
    showImage() {
        return this.image;
    }
    showVideo1() {
        return this.video1;
    }
    showVideo2() {
        return this.video2;
    }
    getImage() {
        return `assets/img/${this.current}.png`;
    }
    anteriorIndice() {
        this.current = ((this.current - 1) % 5);
        if (this.current == 0) {
            this.current = 4;
        }
    }
    proximoIndice() {
        this.current = ((this.current + 1) % 5);
        if (this.current == 0) {
            this.current++;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_service_service__WEBPACK_IMPORTED_MODULE_0__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myVideo = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_shared_service_service__WEBPACK_IMPORTED_MODULE_0__["SharedService"]])], decls: 12, vars: 1, consts: [["id", "container", 1, "master"], ["id", "col1-header"], ["src", "\\assets\\img\\top_border_image.png"], ["id", "col1-content", 1, "main"], ["id", "col1-footer"], ["src", "\\assets\\img\\button_border_image.png"], ["id", "col2", 3, "animalListPos", 4, "ngIf"], ["id", "col2", 3, "animalListPos"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Test Sound");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_app_animal_list_11_Template, 1, 1, "app-animal-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAnimalList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _animal_list_animal_list_component__WEBPACK_IMPORTED_MODULE_5__["AnimalListComponent"]], styles: [".master[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: 10% 90%;\n  grid-template-rows: 10% 80% 10%;\n  grid-template-areas: \n    \"sidebar header\"\n    \"sidebar main\"\n    \"sidebar footer\";\n  width: 100%;\n  height: 100%;\n}\n\n.master.right[_ngcontent-%COMP%]{\n  grid-template-columns: 90% 10%;\n  grid-template-areas: \n    \"header sidebar\"\n    \"main sidebar\"\n    \"footer sidebar\";\n}\n\n@media only screen and (min-width: 1300px){\n  .master[_ngcontent-%COMP%]{\n    grid-template-rows: 0% 100% 0%;\n  }\n}\n\n.master-full[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 0% 100% 0%;\n  grid-template-areas: \n    \"header sidebar\"\n    \"main sidebar\"\n    \"footer sidebar\";\n  width: 100%;\n  height: 100%;\n}\n\n.hide[_ngcontent-%COMP%]{\n  display: none;\n}\n\n#col1[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100%;\n  grid-column: 1;\n}\n\n#col2[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100%;\n  grid-column: 2;\n  grid-area: sidebar;\n}\n\n#col1-header[_ngcontent-%COMP%]{\n  grid-row: 1;\n  background-color: #B2905B;\n  grid-area: header;\n}\n\n#col1-content[_ngcontent-%COMP%]{\n  grid-column: 1;\n  grid-row: 2;\n  grid-area: main;\n}\n\n#col1-footer[_ngcontent-%COMP%]{\n  grid-row: 3;\n  background-color: #B2905B;\n  grid-area: footer;\n}\n\n#col1-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #col1-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0I7OztvQkFHa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qjs7O29CQUdrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qjs7O29CQUdrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7Ozs7O0dBV0ciLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGVye1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA5MCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDgwJSAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwic2lkZWJhciBoZWFkZXJcIlxuICAgIFwic2lkZWJhciBtYWluXCJcbiAgICBcInNpZGViYXIgZm9vdGVyXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXN0ZXIucmlnaHR7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJoZWFkZXIgc2lkZWJhclwiXG4gICAgXCJtYWluIHNpZGViYXJcIlxuICAgIFwiZm9vdGVyIHNpZGViYXJcIjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpe1xuICAubWFzdGVye1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMCUgMTAwJSAwJTtcbiAgfVxufVxuXG4ubWFzdGVyLWZ1bGx7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwJSAxMDAlIDAlO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcImhlYWRlciBzaWRlYmFyXCJcbiAgICBcIm1haW4gc2lkZWJhclwiXG4gICAgXCJmb290ZXIgc2lkZWJhclwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGlkZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbDF7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuXG4jY29sMntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcbn1cblxuI2NvbDEtaGVhZGVye1xuICBncmlkLXJvdzogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IyOTA1QjtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG59XG4jY29sMS1jb250ZW50e1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtYXJlYTogbWFpbjtcbn1cbiNjb2wxLWZvb3RlcntcbiAgZ3JpZC1yb3c6IDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMjkwNUI7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xufVxuXG4jY29sMS1oZWFkZXIgaW1nLCAjY29sMS1mb290ZXIgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi8qIC5tYXN0ZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDIwJTtcbn1cblxuI2NvbDF7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuXG4jY29sMntcbiAgZ3JpZC1jb2x1bW46IDI7XG59ICovIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation/animation.component */ "NkdC");
/* harmony import */ var _animal_list_animal_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animal-list/animal-list.component */ "G+i0");
/* harmony import */ var _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worlds/worlds.component */ "ym4e");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _animal_info_animal_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animal-info/animal-info.component */ "fmsf");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "9jgp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _popup_popup_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popup/popup/popup.component */ "vjhT");
/* harmony import */ var _popup_settings_model_popup_settings_model_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popup/settings-model-popup/settings-model-popup.component */ "8Fvf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _animation_animation_component__WEBPACK_IMPORTED_MODULE_3__["AnimationComponent"],
        _animal_list_animal_list_component__WEBPACK_IMPORTED_MODULE_4__["AnimalListComponent"],
        _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_5__["WorldsComponent"],
        _animal_info_animal_info_component__WEBPACK_IMPORTED_MODULE_8__["AnimalInfoComponent"],
        _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"],
        _popup_popup_popup_component__WEBPACK_IMPORTED_MODULE_12__["PopupComponent"],
        _popup_settings_model_popup_settings_model_popup_component__WEBPACK_IMPORTED_MODULE_13__["SettingsModelPopupComponent"]], imports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]] }); })();


/***/ }),

/***/ "fW+8":
/*!***********************************!*\
  !*** ./src/app/animal.service.ts ***!
  \***********************************/
/*! exports provided: AnimalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalService", function() { return AnimalService; });
/* harmony import */ var _mock_animals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-animals */ "9ukx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world.service */ "IQ3W");



class AnimalService {
    constructor(worldService) {
        this.worldService = worldService;
        this.animalsToShow = _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"];
    }
    getAnimals() {
        //console.log(this.animalsToShow)
        if (this.local) {
            return this.animalsToShow;
        }
        else {
            return _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"];
        }
    }
    showAll() {
        this.local = false;
    }
    showWorld() {
        this.refresh();
        this.local = true;
    }
    refresh() {
        var result = [];
        for (var i = 0; i < _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"].length; i++) {
            if (_mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"][i].world == this.worldService.worldNumber) {
                result.push(_mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"][i]);
            }
        }
        this.animalsToShow = result;
    }
    getAnimal(id) {
        return _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"].filter(function (an) {
            an.id == id;
        })[0];
    }
    getAnimalForPage(page) {
        //console.log(this.worldService.worldNumber)
        var result = [];
        for (var i = 0; i < _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"].length; i++) {
            if (_mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"][i].world == this.worldService.worldNumber && _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"][i].page == page) {
                result.push({ animal: _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"][i], onTop: false });
            }
        }
        return result;
    }
    setCatched(id) {
        _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"].map(function (an) {
            if (an.id == id) {
                an.catched = true;
            }
        });
    }
    isCatched(id) {
        return this.getAnimal(id).catched;
    }
}
AnimalService.ɵfac = function AnimalService_Factory(t) { return new (t || AnimalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"])); };
AnimalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnimalService, factory: AnimalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fmsf":
/*!******************************************************!*\
  !*** ./src/app/animal-info/animal-info.component.ts ***!
  \******************************************************/
/*! exports provided: AnimalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalInfoComponent", function() { return AnimalInfoComponent; });
/* harmony import */ var _mock_animals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock-animals */ "9ukx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world.service */ "IQ3W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _animal_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animal-info.service */ "xFFl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");









function AnimalInfoComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimalInfoComponent_div_17_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.getAnimalInfoLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.getWikiName());
} }
class AnimalInfoComponent {
    constructor(worldService, router, _location, animalInfoService, http) {
        this.worldService = worldService;
        this.router = router;
        this._location = _location;
        this.animalInfoService = animalInfoService;
        this.http = http;
        this.language = "Portuguese";
    }
    ngOnInit() {
        //this.animalInfoService.animal = {id:1, name:'cat', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:1, page:4, x:0.8715, y:0.4386, link:"http://en.wikipedia.org/wiki/Cat"}
        if (this.animalInfoService.animal == undefined) {
            this.router.navigate(['']);
        }
        //this.currAnimal = this.animalInfoService.animal;
        this.currAnimal = _mock_animals__WEBPACK_IMPORTED_MODULE_0__["ANIMALS"][this.animalInfoService.animal.id - 1];
        //var fs = require('fs');
        var parser = __webpack_require__(/*! subtitles-parser */ "nja4");
        //var srt = fs.readFile(`assets/subtitles/${name}-${this.language}.srt`, { encoding: 'utf-8' });
        //this.data = parser.fromSrt("1\n00:00:00,000 --> 00:00:02,000\nEncontrou um gato!\n");
        var source = this;
        this.showVideoEmbededSubs();
        this.addBackgroundPhoto();
        this.http.get(`assets/subtitles/${this.currAnimal.name}-${this.language}.srt`, { responseType: 'text' })
            .subscribe(data => {
            source.data = parser.fromSrt(data);
        });
    }
    hideOurSubtitlesOptions() {
        document.getElementsByClassName("subtitle-options")[0].style.display = "none";
        document.getElementsByClassName("subtitles")[0].style.display = "none";
    }
    showVideoEmbededSubs() {
        this.hideOurSubtitlesOptions();
        var subs = document.getElementsByClassName("sub");
        var en = subs[0];
        var pt = subs[1];
        en.src = "assets\\subtitles\\" + this.currAnimal.name + "-English.vtt";
        pt.src = "assets\\subtitles\\" + this.currAnimal.name + "-Portuguese.vtt";
    }
    addBackgroundPhoto() {
        var img = document.getElementsByClassName("bg-image")[0];
        img.src = "assets\\img\\animalInfo_bg_world" + this.currAnimal.world + ".png";
    }
    getCurrAnimalName() {
        this.currAnimal = this.animalInfoService.animal;
        return this.currAnimal.name;
    }
    closeInfoPage() {
        this._location.back();
    }
    getVideoUrl() {
        return `assets/video/${this.currAnimal.name}.mp4`;
    }
    timeUpdate(time) {
        console.log(time.target.currentTime);
        var videoAux = document.getElementById("animalVideo");
        var video = videoAux;
        if (video.duration - time.target.currentTime < 6) {
            this.end = true;
        }
        else {
            this.end = false;
        }
        if (this.language === "Off") {
            this.subtitles = "";
            return;
        }
        var parser = __webpack_require__(/*! subtitles-parser */ "nja4");
        var source = this;
        this.http.get(`assets/subtitles/${this.currAnimal.name}-${this.language}.srt`, { responseType: 'text' })
            .subscribe(data => {
            source.data = parser.fromSrt(data);
        });
        for (var i = 0; i < this.data.length; i++) {
            console.log(this.stringToSeconds(this.data[i].startTime) < time.target.currentTime && this.stringToSeconds(this.data[i].endTime) > time.target.currentTime);
            if (this.stringToSeconds(this.data[i].startTime) < time.target.currentTime && this.stringToSeconds(this.data[i].endTime) > time.target.currentTime) {
                this.subtitles = this.data[i].text;
                console.log(this.subtitles);
                break;
            }
        }
    }
    stringToSeconds(string) {
        var auxString = string.split(":");
        var result = +auxString[0] * 3600;
        result += +auxString[1] * 60;
        result += +auxString[2].split(",")[0] + +auxString[2].split(",")[1] / 1000;
        console.log("string :" + string + ": " + result + " secs");
        return result;
    }
    changedLang() {
        if (this.language !== "Off") {
            var parser = __webpack_require__(/*! subtitles-parser */ "nja4");
            var source = this;
            this.http.get(`assets/subtitles/${this.currAnimal.name}-${this.language}.srt`, { responseType: 'text' })
                .subscribe(data => {
                source.data = parser.fromSrt(data);
            });
        }
    }
    getAnimalInfoLink() {
        //this.router.navigateByUrl(this.currAnimal.link);
        window.open(this.currAnimal.link, "_blank");
    }
    getAnimalLink() {
        return "info";
    }
    getWikiName() {
        var name = this.currAnimal.name;
        var nameAux = name.charAt(0).toUpperCase();
        ;
        for (var i = 1; i < name.length; i++) {
            nameAux = nameAux + name.charAt(i);
        }
        return `${nameAux} Wikipedia Page`;
    }
}
AnimalInfoComponent.ɵfac = function AnimalInfoComponent_Factory(t) { return new (t || AnimalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_animal_info_service__WEBPACK_IMPORTED_MODULE_5__["AnimalInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
AnimalInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnimalInfoComponent, selectors: [["app-animal-info"]], decls: 24, vars: 5, consts: [[1, "info-grid"], ["src", "assets\\img\\animalInfo_bg_world1.png", 1, "bg-image"], [1, "title"], [1, "back-button", 3, "click"], [1, "video-container"], [1, "subtitle-options"], ["name", "language", 3, "ngModel", "ngModelChange", "change"], ["value", "Portuguese"], ["value", "English"], ["value", "Off"], [1, "video-subtitles"], [2, "display", "block", "position", "absolute", "width", "100%", "height", "100%", 3, "routerLink"], ["class", "link-count", 4, "ngIf"], ["id", "animalVideo", "controls", "", "type", "video/mp4", 3, "src", "timeupdate"], ["kind", "subtitles", "srclang", "en", "src", "", "label", "English", "default", "", 1, "sub"], ["kind", "subtitles", "srclang", "pt", "src", "", "label", "Portugu\u00EAs", "default", "", 1, "sub"], [1, "subtitles"], [1, "link-count"], ["mat-raised-button", "", "matTooltipHideDelay", "100000", 1, "link", 3, "matTooltip", "click"], ["tooltip", "matTooltip"]], template: function AnimalInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimalInfoComponent_Template_button_click_4_listener() { return ctx.closeInfoPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AnimalInfoComponent_Template_select_ngModelChange_8_listener($event) { return ctx.language = $event; })("change", function AnimalInfoComponent_Template_select_change_8_listener() { return ctx.changedLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Portugu\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "No subtitles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AnimalInfoComponent_div_17_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "video", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeupdate", function AnimalInfoComponent_Template_video_timeupdate_18_listener($event) { return ctx.timeUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "track", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "track", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCurrAnimalName());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getVideoUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.subtitles, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"]], styles: [".info-grid[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-columns: 10% 80% 10%;\r\n    grid-template-rows: 15% 85%;\r\n    grid-template-areas: \r\n        \"back-button title none\" \r\n        \"a video b\";\r\n\r\n    \r\n    justify-items: center;\r\n    align-items:  center;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    \r\n    opacity: 90%;\r\n    z-index: -1;\r\n}\r\n\r\n#animalVideo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    grid-area: title;\r\n    text-transform: capitalize;\r\n    background-color: #ffffff99;\r\n    border: none;\r\n}\r\n\r\n.filler[_ngcontent-%COMP%]{\r\n    display: block;\r\n    grid-area: none;\r\n}\r\n\r\n.back-button[_ngcontent-%COMP%]{\r\n    grid-area: back-button;\r\n}\r\n\r\n.video-container[_ngcontent-%COMP%]{\r\n    grid-area: video;\r\n    width: 90% !important;\r\n}\r\n\r\n.link-count[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 17%;\r\n    left: 20%;\r\n    width: 58%;\r\n    height: 68%;\r\n    z-index: 999;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 3px solid #a5f832;\r\n    text-align: center;\r\n    z-index: 1000;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0px 0px 3em white;\r\n}\r\n\r\n.video-subtitles[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.subtitles[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 82%;\r\n    left: 35%;\r\n    background-color: #000000aa;\r\n    color: white;\r\n    padding: 0px 11px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hbC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCOzttQkFFZTs7SUFFZiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFuaW1hbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1ncmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgODAlIDEwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDg1JTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgIFwiYmFjay1idXR0b24gdGl0bGUgbm9uZVwiIFxyXG4gICAgICAgIFwiYSB2aWRlbyBiXCI7XHJcblxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0IyOTA1QjsgKi9cclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xyXG59XHJcblxyXG4uYmctaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgIG9wYWNpdHk6IDkwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4jYW5pbWFsVmlkZW97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZmlsbGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBncmlkLWFyZWE6IG5vbmU7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbntcclxuICAgIGdyaWQtYXJlYTogYmFjay1idXR0b247XHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXJ7XHJcbiAgICBncmlkLWFyZWE6IHZpZGVvO1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGluay1jb3VudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTclO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDU4JTtcclxuICAgIGhlaWdodDogNjglO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2E1ZjgzMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5saW5rOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzZW0gd2hpdGU7XHJcbn1cclxuXHJcbi52aWRlby1zdWJ0aXRsZXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgyJTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCAxMXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "ouzR":
/*!****************************************************!*\
  !*** ./src/app/services/shared-service.service.ts ***!
  \****************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedService {
    constructor() {
        // Observable string sources
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    // Service message commands
    showAnimalList(b) {
        this.emitChangeSource.next(b);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worlds/worlds.component */ "ym4e");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/animation.component */ "NkdC");
/* harmony import */ var _animal_info_animal_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal-info/animal-info.component */ "fmsf");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "9jgp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"] },
    { path: 'worlds', component: _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_1__["WorldsComponent"] },
    { path: 'animation', component: _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__["AnimationComponent"] },
    { path: 'info', component: _animal_info_animal_info_component__WEBPACK_IMPORTED_MODULE_3__["AnimalInfoComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vjhT":
/*!************************************************!*\
  !*** ./src/app/popup/popup/popup.component.ts ***!
  \************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.service */ "2atO");


const _c0 = ["*"];
class PopupComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "jw-modal"], [1, "jw-modal-body"], [1, "jw-modal-background"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } }, styles: ["\r\napp-popup {\r\n    /* modals are hidden by default */\r\n    display: none;\r\n}\r\n\r\n.jw-modal {\r\n    /* modal container fixed across whole screen */\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    /* z-index must be higher than .jw-modal-background */\r\n    z-index: 1000;\r\n    \r\n    /* enables scrolling for tall modals */\r\n    overflow: auto;\r\n}\r\n\r\n.jw-modal-body {\r\n    padding: 20px 60px;\r\n    background: #B2905B;\r\n\r\n    /* margin exposes part of the modal background */\r\n    margin: 6em 25%;\r\n    border-radius: 15px;\r\n    border: 4px black solid;\r\n}\r\n\r\n.jw-modal-background {\r\n    /* modal background fixed across whole screen */\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    /* semi-transparent black  */\r\n    background-color: #000;\r\n    opacity: 0.75;\r\n    \r\n    /* z-index must be below .jw-modal and above everything else  */\r\n    z-index: 900;\r\n}\r\n\r\nbody.jw-modal-open {\r\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87O0lBRVAscURBQXFEO0lBQ3JELGFBQWE7O0lBRWIsc0NBQXNDO0lBQ3RDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQixnREFBZ0Q7SUFDaEQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87O0lBRVAsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhOztJQUViLCtEQUErRDtJQUMvRCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmFwcC1wb3B1cCB7XHJcbiAgICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uanctbW9kYWwge1xyXG4gICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBcclxuICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5qdy1tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNCMjkwNUI7XHJcblxyXG4gICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xyXG4gICAgbWFyZ2luOiA2ZW0gMjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogNHB4IGJsYWNrIHNvbGlkO1xyXG59XHJcblxyXG4uanctbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBcclxuICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cclxuICAgIHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuYm9keS5qdy1tb2RhbC1vcGVuIHtcclxuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "xFFl":
/*!****************************************!*\
  !*** ./src/app/animal-info.service.ts ***!
  \****************************************/
/*! exports provided: AnimalInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalInfoService", function() { return AnimalInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AnimalInfoService {
    constructor() { }
    changeAnimal(a) {
        this.animal = a;
    }
}
AnimalInfoService.ɵfac = function AnimalInfoService_Factory(t) { return new (t || AnimalInfoService)(); };
AnimalInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnimalInfoService, factory: AnimalInfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ym4e":
/*!********************************************!*\
  !*** ./src/app/worlds/worlds.component.ts ***!
  \********************************************/
/*! exports provided: WorldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldsComponent", function() { return WorldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world.service */ "IQ3W");
/* harmony import */ var _animal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animal.service */ "fW+8");
/* harmony import */ var _volume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../volume.service */ "JwA2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");







function WorldsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorldsComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.backToMainMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Choose a Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorldsComponent_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.previousWorld(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorldsComponent_div_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.nextWorld(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorldsComponent_div_3_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.chooseWorld(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select: ", ctx_r0.getWorldName(), "");
} }
class WorldsComponent {
    constructor(router, worldService, animalService, volumeService) {
        this.router = router;
        this.worldService = worldService;
        this.animalService = animalService;
        this.volumeService = volumeService;
        this.changing = false;
        this.entering = 0;
    }
    ngOnInit() {
        //this is used to restore the world being shown when the user returns from another page
        this.current = this.worldService.worldNumber;
        if (this.current !== 0) {
            this.entering = this.current;
        }
        else {
            this.current = 1;
        }
        this.changing = false;
        this.worldService.changeWorld(this.current);
        //this calls the method that load the right video
        this.changeVideo();
    }
    /**
     * This method is called when the user clicks the button to choose the world
     * It loads the video walking in the direction of the world and, on it ends, changes
     * to the animation page
     */
    chooseWorld() {
        var videoAux = document.getElementById("video");
        var video = videoAux;
        this.url = `assets/video/worlds/worlds${this.current}into.mp4`;
        this.changing = true;
        this.entering = 0;
        var aux2 = this;
        video.onended = function () {
            console.log("A");
            aux2.worldService.changeAnimation(0);
            aux2.router.navigate(['animation']);
        };
        video.load();
    }
    //This method was used when the world showed a picture
    /* getWorld(){
      return `assets/img/${this.worldService.getWorldById().name}HubWorld.png`
    }*/
    /**
     * This methods gets and returns the name of the world being shown
     * @returns The name of the world that is being shown
     */
    getWorldName() {
        return this.worldService.getWorldById().name;
    }
    /**
     * This method is called when the user clicks the left arrow button
     * It changes the "current" variable to the previous world index, "notifies" the
     * world and animal Services of this change, changes the value of the variable "rodandoEsquerda" to true
     * and calls "changeVideo()"
     */
    previousWorld() {
        this.current = this.previous();
        this.worldService.changeWorld(this.current);
        this.rodandoEsquerda = true;
        this.changing = true;
        this.changeVideo();
    }
    /**
     * This method calculates the previous world index
     * @returns The previous world index
     */
    previous() {
        var result = ((this.current - 1) % 4);
        if (result <= 0) {
            result = 3;
        }
        return result;
    }
    /**
     * This method is called when the user clicks the right arrow button
     * It changes the "current" variable to the next world index, "notifies" the
     * world and animal Services of this change, changes the value of the variable "rodandoDireita" to true
     * and calls "changeVideo()"
     */
    nextWorld() {
        this.current = this.next();
        this.worldService.changeWorld(this.current);
        this.rodandoDireita = true;
        this.changing = true;
        this.changeVideo();
    }
    /**
     * This method calculates the next world index
     * @returns The next world index
     */
    next() {
        var result = ((this.current + 1) % 4);
        if (result <= 0) {
            result++;
        }
        return result;
    }
    /**
     * This method changes the video being presented to the user
     * It first verifies if "rodandoDireita" or "rodandoEsquerda" are true and
     * if one of them is true, it change to the video transition between the previous video being shown
     * and the video that is going to be shown and adds a listener to its end. When the video ends it
     * changes to the new video being shown
     * If none of them are true, the method simply set the video to be the current one
     * At the end of the method video.load() and video.play() are called to make the video be shown and played
     */
    changeVideo() {
        var sourceAux = document.getElementById("source");
        var source = sourceAux;
        var videoAux = document.getElementById("video");
        var video = videoAux;
        var aux2 = this;
        console.log(this.previous());
        if (this.rodandoDireita) {
            source.src = `assets/video/worlds/worlds${this.previous()}${this.current}.mp4`;
            this.url = source.src;
            this.rodandoDireita = false;
            this.animalService.refresh();
            video.onended = function () {
                source.src = `assets/video/worlds/worlds${aux2.current}.mp4`;
                aux2.url = source.src;
                aux2.changing = false;
                console.log(source.src);
                video.load();
                video.play();
            };
            video.load();
            video.play();
        }
        else if (this.rodandoEsquerda) {
            source.src = `assets/video/worlds/worlds${this.next()}${this.current}.mp4`;
            this.url = source.src;
            this.rodandoEsquerda = false;
            this.animalService.refresh();
            video.onended = function () {
                source.src = `assets/video/worlds/worlds${aux2.current}.mp4`;
                aux2.url = source.src;
                aux2.changing = false;
                console.log(source.src);
                video.load();
                video.play();
            };
            video.load();
            video.play();
        }
        else if (this.changing) {
            this.url = `assets/video/worlds/worlds${this.current}.mp4`;
            video.onended = function () {
                console.log("C");
                aux2.current = 1;
                aux2.url = `assets/video/worlds/worlds${aux2.current}.mp4`;
                video.currentTime = 0;
                video.load();
                video.play();
            };
        }
        else {
            source.src = `assets/video/worlds/worlds${this.current}.mp4`;
            this.url = source.src;
            video.onended = function () {
                console.log("B");
                aux2.animalService.refresh();
                video.currentTime = 0;
                video.play();
            };
            video.play();
        }
    }
    timeUpdate(time) {
        //console.log(time.target.currentTime)
        //console.log("entering: " + this.entering)
        var videoAux = document.getElementById("video");
        var video = videoAux;
        if (this.entering != 0 && Math.abs(time.target.currentTime - video.duration) < 0.001) {
            this.url = `assets/video/worlds/worlds${this.current}.mp4`;
            video.currentTime = 0;
            this.changing = false;
            video.load();
            video.play();
        }
        video.volume = this.volumeService.volume / 100;
    }
    /**
     * This method is called when the user clicks the back button
     * It simply navigates to the main menu
     */
    backToMainMenu() {
        this.router.navigate(['']);
    }
    getVideoUrl() {
        return this.url;
    }
}
WorldsComponent.ɵfac = function WorldsComponent_Factory(t) { return new (t || WorldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animal_service__WEBPACK_IMPORTED_MODULE_3__["AnimalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_volume_service__WEBPACK_IMPORTED_MODULE_4__["VolumeService"])); };
WorldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorldsComponent, selectors: [["app-worlds"]], decls: 4, vars: 2, consts: [["id", "container"], ["id", "video", "autoplay", "true", 1, "video", 3, "timeupdate"], ["id", "source", "type", "video/mp4", 3, "src"], ["id", "ui", 4, "ngIf"], ["id", "ui"], ["id", "top"], ["mat-raised-button", "", "matTooltip", "Go back to main menu", "matTooltipHideDelay", "100", 1, "back-button", 3, "click"], ["tooltip", "matTooltip"], ["id", "worldTitle"], [1, "title"], [2, "width", "100px"], ["id", "middle"], ["id", "botaoAnt"], [1, "arrow", 3, "click"], ["id", "botaoNxt"], [1, "arrow", "arrows-right", 3, "click"], ["id", "chooseButton"], [1, "btn", 3, "click"]], template: function WorldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeupdate", function WorldsComponent_Template_video_timeupdate_1_listener($event) { return ctx.timeUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorldsComponent_div_3_Template, 17, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.getVideoUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: ["#container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n  }\n\n  #ui[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n  }\n\n  #top[_ngcontent-%COMP%]{\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  #middle[_ngcontent-%COMP%]{\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  #imageContainer[_ngcontent-%COMP%]{\n    width: 400px;\n    height: 400px;\n    border-radius: 50%;\n  }\n\n  .image[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: solid 2px lightgray;\n  }\n\n  .arrows[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1;\n  }\n\n  .arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width: 60px;\n    height: 60px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmxkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUdJIiwiZmlsZSI6Indvcmxkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICNjb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgI3Vpe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAjdG9we1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gICNtaWRkbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgI2ltYWdlQ29udGFpbmVye1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4IGxpZ2h0Z3JheTtcbiAgfVxuXG4gIC5hcnJvd3N7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gIC5hcnJvd3MgYnV0dG9ue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG5cbi8qIFxuICAjaW1hZ2VDb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDM7XG4gICAgICBncmlkLXJvdzogMTtcbiAgICAgIHotaW5kZXg6IDE7XG4gIH0gIFxuICBcbiAgLmltYWdle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5pbWFnZURpdntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUuMzZweCBhdXRvIDQ1LjM2cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICB9XG4gIFxuXHQjYm90YW9BbnQsICNib3Rhb054dHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogNDUlO1xuICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgfVxuICBcbiAgICAjYm90YW9BbnR7XG4gICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICBcbiAgICAjYm90YW9OeHR7XG4gICAgICBncmlkLWNvbHVtbjogMztcbiAgICAgIHJpZ2h0OiAwJTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXHRcblx0I2Nob29zZUJ1dHRvbntcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGdyaWQtcm93OiAxO1xuXHRcdHRvcDogODAlO1xuXHRcdGdyaWQtY29sdW1uOiAyO1xuXHRcdHotaW5kZXg6IDI7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGRpc3BsYXk6IEJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0fVxuXHRcblx0I3dvcmxkVGl0bGV7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBncmlkLXJvdzogMTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Z3JpZC1jb2x1bW46IDI7XG5cdFx0ei1pbmRleDogMjtcblx0XHRcblxuXHR9XG5cdFxuXHRoMSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Ym9yZGVyOiA1cHggc29saWQgYmxhY2s7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiA0MHB4O1xuXHR9XG4gIFxuICAgIC5ib3Rhb0FudGVyaW9ye1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXHRcbiAgICAuYm90YW9TZWd1aW50ZXtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblx0XG5cdC5jZW50ZXJCdXR0b24ge1xuXHQgIGJhY2tncm91bmQtY29sb3I6ICM4N0NFRkE7XG5cdCAgcGFkZGluZzogMTVweCAzMnB4O1xuXHQgIHdpZHRoOiA0MCU7XG5cdCAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0ICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdCAgZm9udC1zaXplOiAyMHB4O1xuXHQgIG1hcmdpbjogNHB4IDJweDtcblx0ICBjdXJzb3I6IHBvaW50ZXI7XG5cdCAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdCAgYm9yZGVyLXJhZGl1czogOHB4O1xuXHQgIGJvcmRlci13aWR0aDogbWVkaXVtO1xuXHR9XG5cdFxuXHQuY2VudGVyQnV0dG9uOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDhEMUNDO1xuXHR9ICovIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map