/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ActionListener/actions.ts":
/*!***************************************!*\
  !*** ./src/ActionListener/actions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mouseActions": () => (/* binding */ mouseActions)
/* harmony export */ });
const mouseActions = {
    mousemove: "mousemove",
    mouseup: "mouseup",
    mousedown: "mousedown",
    mouseover: "mouseover",
    click: "click",
};



/***/ }),

/***/ "./src/ActionListener/helpers.ts":
/*!***************************************!*\
  !*** ./src/ActionListener/helpers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBrowserAction)
/* harmony export */ });
const convertCoordinateFromDocumentToCanvas = (x, y, canvasEl) => ({
    x: x + -canvasEl.getBoundingClientRect().left,
    y: y + -canvasEl.getBoundingClientRect().top,
});
function createBrowserAction(event, actionType, canvasEl) {
    // console.log(event.x, event.y);
    const { x, y } = canvasEl ?
        convertCoordinateFromDocumentToCanvas(event.x, event.y, canvasEl) : event;
    // console.log("NEW", x, y);
    return {
        eventType: actionType,
        position: {
            x,
            y,
        },
    };
}


/***/ }),

/***/ "./src/ActionListener/index.ts":
/*!*************************************!*\
  !*** ./src/ActionListener/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionListener)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/ActionListener/actions.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/ActionListener/helpers.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActionListener_target, _ActionListener_canvas;


class ActionListener {
    constructor(target, canvas) {
        _ActionListener_target.set(this, void 0);
        _ActionListener_canvas.set(this, null);
        __classPrivateFieldSet(this, _ActionListener_target, target, "f");
        if (canvas)
            __classPrivateFieldSet(this, _ActionListener_canvas, canvas, "f");
    }
    bindTriggerFunction(fn, options) {
        console.log(options);
        for (const mouseEvent in _actions__WEBPACK_IMPORTED_MODULE_0__.mouseActions) {
            if (options) {
                if (options.excludeActionTypes &&
                    options.excludeActionTypes.has(mouseEvent))
                    continue;
                if (options.includeActionTypes &&
                    !options.includeActionTypes.has(mouseEvent))
                    continue;
            }
            __classPrivateFieldGet(this, _ActionListener_target, "f").addEventListener(mouseEvent, (event) => {
                if ("x" in event) {
                    fn((0,_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(event, mouseEvent, __classPrivateFieldGet(this, _ActionListener_canvas, "f")));
                }
            });
        }
    }
}
_ActionListener_target = new WeakMap(), _ActionListener_canvas = new WeakMap();



/***/ }),

/***/ "./src/BottomBar/index.ts":
/*!********************************!*\
  !*** ./src/BottomBar/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BottomBar)
/* harmony export */ });
/* harmony import */ var _ActionListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionListener */ "./src/ActionListener/index.ts");
/* harmony import */ var _ActionListener_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionListener/actions */ "./src/ActionListener/actions.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BottomBar_instances, _BottomBar_mount, _BottomBar_mountId, _BottomBar_state, _BottomBar_isBind, _BottomBar_selectedWidth, _BottomBar_selectedHeight, _BottomBar_render;


const initialState = {
    cursor_x: 0,
    cursor_y: 0,
    canvas_height: 0,
    canvas_width: 0,
};
class BottomBar {
    constructor(mount) {
        _BottomBar_instances.add(this);
        _BottomBar_mount.set(this, void 0);
        _BottomBar_mountId.set(this, void 0);
        _BottomBar_state.set(this, initialState);
        _BottomBar_isBind.set(this, false);
        _BottomBar_selectedWidth.set(this, false);
        _BottomBar_selectedHeight.set(this, false);
        __classPrivateFieldSet(this, _BottomBar_mountId, mount, "f");
        const el = document.getElementById(mount);
        if (!el) {
            throw new Error(`Bottom bar doesn't have root ${mount}`);
        }
        __classPrivateFieldSet(this, _BottomBar_mount, el, "f");
    }
    onGetAction(action) {
        if (action.eventType === _ActionListener_actions__WEBPACK_IMPORTED_MODULE_1__.mouseActions.mousemove) {
            __classPrivateFieldGet(this, _BottomBar_state, "f").cursor_x = action.position.x;
            __classPrivateFieldGet(this, _BottomBar_state, "f").cursor_y = action.position.y;
            __classPrivateFieldGet(this, _BottomBar_instances, "m", _BottomBar_render).call(this);
        }
        if (action.eventType === "CANVAS_SIZE") {
            __classPrivateFieldGet(this, _BottomBar_state, "f").canvas_width = action.canvas_width;
            __classPrivateFieldGet(this, _BottomBar_state, "f").canvas_height = action.canvas_height;
            __classPrivateFieldGet(this, _BottomBar_instances, "m", _BottomBar_render).call(this);
        }
    }
    bindTriggerFunction() {
    }
}
_BottomBar_mount = new WeakMap(), _BottomBar_mountId = new WeakMap(), _BottomBar_state = new WeakMap(), _BottomBar_isBind = new WeakMap(), _BottomBar_selectedWidth = new WeakMap(), _BottomBar_selectedHeight = new WeakMap(), _BottomBar_instances = new WeakSet(), _BottomBar_render = function _BottomBar_render() {
    console.log("render");
    const htmlSize = document.getElementById(`${__classPrivateFieldGet(this, _BottomBar_mountId, "f")}__size--value`);
    if (!htmlSize) {
        throw new Error(`${__classPrivateFieldGet(this, _BottomBar_mountId, "f")}__size doesn't exist`);
    }
    if (htmlSize.innerHTML !== `${__classPrivateFieldGet(this, _BottomBar_state, "f").canvas_width}x${__classPrivateFieldGet(this, _BottomBar_state, "f").canvas_height}`) {
        htmlSize.innerHTML = `${__classPrivateFieldGet(this, _BottomBar_state, "f").canvas_width}x${__classPrivateFieldGet(this, _BottomBar_state, "f").canvas_height}`;
    }
    const htmlPosition = document.getElementById(`${__classPrivateFieldGet(this, _BottomBar_mountId, "f")}__cursor--value`);
    if (!htmlPosition) {
        throw new Error(`${__classPrivateFieldGet(this, _BottomBar_mountId, "f")}__size doesn't exist`);
    }
    if (htmlPosition.innerHTML !== `${__classPrivateFieldGet(this, _BottomBar_state, "f").cursor_x}x${__classPrivateFieldGet(this, _BottomBar_state, "f").cursor_y}`) {
        htmlPosition.innerHTML = `${__classPrivateFieldGet(this, _BottomBar_state, "f").cursor_x}x${__classPrivateFieldGet(this, _BottomBar_state, "f").cursor_y}`;
    }
    if (__classPrivateFieldGet(this, _BottomBar_isBind, "f"))
        return;
    new _ActionListener__WEBPACK_IMPORTED_MODULE_0__["default"](htmlSize).bindTriggerFunction((action) => {
        console.log(action);
    });
    __classPrivateFieldSet(this, _BottomBar_isBind, true, "f");
};


/***/ }),

/***/ "./src/Canvas/Drawer.ts":
/*!******************************!*\
  !*** ./src/Canvas/Drawer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drawer)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Drawer_figure, _Drawer_mode, _Drawer_syncDrawer;
class Drawer {
    constructor(figure, context, mode) {
        _Drawer_figure.set(this, void 0);
        _Drawer_mode.set(this, void 0);
        _Drawer_syncDrawer.set(this, null);
        __classPrivateFieldSet(this, _Drawer_figure, new figure(context), "f");
        console.log(__classPrivateFieldGet(this, _Drawer_figure, "f"));
        __classPrivateFieldSet(this, _Drawer_mode, mode || "inactive", "f");
    }
    onGetAction(action) {
        var _a, _b;
        const isSyncAction = (__classPrivateFieldGet(this, _Drawer_figure, "f").getTransferActions().has(action.eventType)) && __classPrivateFieldGet(this, _Drawer_syncDrawer, "f");
        if (__classPrivateFieldGet(this, _Drawer_mode, "f") === "active") {
            // TODO: хз почему ? надо
            if (isSyncAction)
                (_a = __classPrivateFieldGet(this, _Drawer_syncDrawer, "f")) === null || _a === void 0 ? void 0 : _a.onGetAction(action);
            if (__classPrivateFieldGet(this, _Drawer_figure, "f").checkForStop(action)) {
                __classPrivateFieldSet(this, _Drawer_mode, "inactive", "f");
                __classPrivateFieldGet(this, _Drawer_figure, "f").onStopAction(action);
                if (__classPrivateFieldGet(this, _Drawer_syncDrawer, "f")) {
                    console.log("CLEAR TEMPLATE");
                    __classPrivateFieldGet(this, _Drawer_figure, "f").clearAll();
                }
            }
            else {
                __classPrivateFieldGet(this, _Drawer_figure, "f").draw(action);
            }
        }
        else if (__classPrivateFieldGet(this, _Drawer_figure, "f").checkForStart(action)) {
            if (isSyncAction)
                (_b = __classPrivateFieldGet(this, _Drawer_syncDrawer, "f")) === null || _b === void 0 ? void 0 : _b.onGetAction(action);
            __classPrivateFieldSet(this, _Drawer_mode, "active", "f");
            __classPrivateFieldGet(this, _Drawer_figure, "f").beforeStartDraw(action);
        }
    }
    transfer(syncDrawer) {
        __classPrivateFieldSet(this, _Drawer_syncDrawer, syncDrawer, "f");
    }
}
_Drawer_figure = new WeakMap(), _Drawer_mode = new WeakMap(), _Drawer_syncDrawer = new WeakMap();


/***/ }),

/***/ "./src/Canvas/index.ts":
/*!*****************************!*\
  !*** ./src/Canvas/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _ActionListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionListener */ "./src/ActionListener/index.ts");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drawer */ "./src/Canvas/Drawer.ts");
/* harmony import */ var _ActionListener_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActionListener/actions */ "./src/ActionListener/actions.ts");
/* harmony import */ var _figures_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../figures/Circle */ "./src/figures/Circle/index.ts");
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../figures */ "./src/figures/index.ts");
/* harmony import */ var _figures_BaseFigure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../figures/BaseFigure */ "./src/figures/BaseFigure.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Canvas_instances, _Canvas_context, _Canvas_drawer, _Canvas_syncContext, _Canvas_layout, _Canvas_connector, _Canvas_setLayout;






class Canvas {
    constructor(canvasEl, id) {
        _Canvas_instances.add(this);
        _Canvas_context.set(this, void 0);
        _Canvas_drawer.set(this, void 0);
        _Canvas_syncContext.set(this, null);
        _Canvas_layout.set(this, void 0);
        _Canvas_connector.set(this, void 0);
        __classPrivateFieldSet(this, _Canvas_context, canvasEl.getContext("2d"), "f");
        new _ActionListener__WEBPACK_IMPORTED_MODULE_0__["default"](window, canvasEl).bindTriggerFunction(this.onAction.bind(this), {
            excludeActionTypes: new Set().add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_2__.mouseActions.mousedown),
        });
        new _ActionListener__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById(id) || window, canvasEl).bindTriggerFunction(this.onAction.bind(this), {
            includeActionTypes: new Set().add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_2__.mouseActions.mousedown),
        });
        __classPrivateFieldSet(this, _Canvas_drawer, new _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"](_figures_Circle__WEBPACK_IMPORTED_MODULE_3__["default"], __classPrivateFieldGet(this, _Canvas_context, "f")), "f");
        __classPrivateFieldSet(this, _Canvas_layout, {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight - 100 - 50,
            zoom: 1,
        }, "f");
        __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_setLayout).call(this, canvasEl);
        // this.#layout.width = 2000;
        // this.#layout.height = 4000;
        __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_setLayout).call(this, canvasEl);
    }
    onAction(action) {
        if (__classPrivateFieldGet(this, _Canvas_drawer, "f")) {
            __classPrivateFieldGet(this, _Canvas_drawer, "f").onGetAction(action);
        }
        if (__classPrivateFieldGet(this, _Canvas_connector, "f")) {
            __classPrivateFieldGet(this, _Canvas_connector, "f").onGetAction(action);
        }
    }
    transferTo(canvasSyncEl) {
        __classPrivateFieldSet(this, _Canvas_syncContext, canvasSyncEl.getContext("2d"), "f");
        __classPrivateFieldGet(this, _Canvas_drawer, "f").transfer(new _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"](_figures_Circle__WEBPACK_IMPORTED_MODULE_3__["default"], __classPrivateFieldGet(this, _Canvas_syncContext, "f")));
        __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_setLayout).call(this, canvasSyncEl);
        return this;
    }
    connectedWith(connector) {
        __classPrivateFieldSet(this, _Canvas_connector, connector, "f");
        __classPrivateFieldGet(this, _Canvas_connector, "f").onGetAction({
            eventType: "CANVAS_SIZE",
            canvas_width: __classPrivateFieldGet(this, _Canvas_layout, "f").width,
            canvas_height: __classPrivateFieldGet(this, _Canvas_layout, "f").height,
        });
        // this.#connector.bindTriggerFunction()
        return this;
    }
    onToolboxChanges(state) {
        console.log(`toolbox`);
        console.log(state);
        const figure = _figures__WEBPACK_IMPORTED_MODULE_4__["default"].find(fig => fig.modeName === _figures_BaseFigure__WEBPACK_IMPORTED_MODULE_5__.FigureName[state.modeName]);
        if (!figure) {
            throw new Error(`Figure with ${state.modeName}`);
        }
        console.log(figure);
        __classPrivateFieldSet(this, _Canvas_drawer, new _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"](figure, __classPrivateFieldGet(this, _Canvas_context, "f")), "f");
        if (__classPrivateFieldGet(this, _Canvas_syncContext, "f")) {
            __classPrivateFieldGet(this, _Canvas_drawer, "f").transfer(new _Drawer__WEBPACK_IMPORTED_MODULE_1__["default"](figure, __classPrivateFieldGet(this, _Canvas_syncContext, "f")));
        }
    }
}
_Canvas_context = new WeakMap(), _Canvas_drawer = new WeakMap(), _Canvas_syncContext = new WeakMap(), _Canvas_layout = new WeakMap(), _Canvas_connector = new WeakMap(), _Canvas_instances = new WeakSet(), _Canvas_setLayout = function _Canvas_setLayout(canvasEl) {
    const { width, height, zoom } = __classPrivateFieldGet(this, _Canvas_layout, "f");
    canvasEl.setAttribute("width", `${width}px`);
    canvasEl.setAttribute("height", `${height}px`);
    canvasEl.style.width = `${width}px`;
    canvasEl.style.height = `${height}px`;
    return this;
};


/***/ }),

/***/ "./src/Toolbox/buttons/AbstractButton.ts":
/*!***********************************************!*\
  !*** ./src/Toolbox/buttons/AbstractButton.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _ActionListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ActionListener */ "./src/ActionListener/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/Toolbox/helpers/index.ts");
/* harmony import */ var _ActionListener_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ActionListener/actions */ "./src/ActionListener/actions.ts");



class Button {
    bindSelfListener(setState) {
        console.log(this);
        const mount = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getIdByModeName)(this.modeName));
        if (!mount) {
            throw new Error(`No mount for ${this.modeName}`);
        }
        new _ActionListener__WEBPACK_IMPORTED_MODULE_0__["default"](mount).bindTriggerFunction((action) => {
            setState(this.onAction(action));
        }, this.getListenerOptions());
    }
    onAction(action) {
        return {
            modeName: this.modeName,
        };
    }
    getListenerOptions() {
        return {
            includeActionTypes: new Set()
                .add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_2__.mouseActions.click),
            excludeActionTypes: undefined,
        };
    }
}


/***/ }),

/***/ "./src/Toolbox/buttons/Brush.ts":
/*!**************************************!*\
  !*** ./src/Toolbox/buttons/Brush.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrushButton)
/* harmony export */ });
/* harmony import */ var _AbstractButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractButton */ "./src/Toolbox/buttons/AbstractButton.ts");

class BrushButton extends _AbstractButton__WEBPACK_IMPORTED_MODULE_0__.Button {
    constructor() {
        super(...arguments);
        this.modeName = "BRUSH";
    }
}


/***/ }),

/***/ "./src/Toolbox/buttons/Circle.ts":
/*!***************************************!*\
  !*** ./src/Toolbox/buttons/Circle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircleButton)
/* harmony export */ });
/* harmony import */ var _AbstractButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractButton */ "./src/Toolbox/buttons/AbstractButton.ts");

class CircleButton extends _AbstractButton__WEBPACK_IMPORTED_MODULE_0__.Button {
    constructor() {
        super(...arguments);
        this.modeName = "CIRCLE";
    }
}


/***/ }),

/***/ "./src/Toolbox/buttons/Point.ts":
/*!**************************************!*\
  !*** ./src/Toolbox/buttons/Point.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointButton)
/* harmony export */ });
/* harmony import */ var _AbstractButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractButton */ "./src/Toolbox/buttons/AbstractButton.ts");

class PointButton extends _AbstractButton__WEBPACK_IMPORTED_MODULE_0__.Button {
    constructor() {
        super(...arguments);
        this.modeName = "POINT";
    }
}


/***/ }),

/***/ "./src/Toolbox/buttons/Rectangle.ts":
/*!******************************************!*\
  !*** ./src/Toolbox/buttons/Rectangle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RectangleButton)
/* harmony export */ });
/* harmony import */ var _AbstractButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractButton */ "./src/Toolbox/buttons/AbstractButton.ts");

class RectangleButton extends _AbstractButton__WEBPACK_IMPORTED_MODULE_0__.Button {
    constructor() {
        super(...arguments);
        this.modeName = "RECTANGLE";
    }
}


/***/ }),

/***/ "./src/Toolbox/buttons/index.ts":
/*!**************************************!*\
  !*** ./src/Toolbox/buttons/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ "./src/Toolbox/buttons/Rectangle.ts");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "./src/Toolbox/buttons/Circle.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "./src/Toolbox/buttons/Point.ts");
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Brush */ "./src/Toolbox/buttons/Brush.ts");




const buttons = [
    _Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"],
    _Circle__WEBPACK_IMPORTED_MODULE_1__["default"],
    _Point__WEBPACK_IMPORTED_MODULE_2__["default"],
    _Brush__WEBPACK_IMPORTED_MODULE_3__["default"],
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttons);


/***/ }),

/***/ "./src/Toolbox/helpers/index.ts":
/*!**************************************!*\
  !*** ./src/Toolbox/helpers/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIdByModeName": () => (/* binding */ getIdByModeName)
/* harmony export */ });
const getIdByModeName = (modeName) => `mode-${modeName}`;


/***/ }),

/***/ "./src/Toolbox/index.ts":
/*!******************************!*\
  !*** ./src/Toolbox/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbox)
/* harmony export */ });
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/Toolbox/buttons/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/Toolbox/helpers/index.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Toolbox_instances, _Toolbox_mount, _Toolbox_state, _Toolbox_buttons, _Toolbox_changeStateObserver, _Toolbox_render, _Toolbox_setState, _Toolbox_getToolboxState;


const ICON_SIZE_PX = "24";
const initialState = {
    modeName: "CIRCLE",
};
class Toolbox {
    constructor(mount) {
        _Toolbox_instances.add(this);
        _Toolbox_mount.set(this, void 0);
        _Toolbox_state.set(this, initialState);
        _Toolbox_buttons.set(this, void 0);
        _Toolbox_changeStateObserver.set(this, void 0);
        const el = document.getElementById(mount);
        if (!el) {
            throw new Error("Toolbox doesn't have a mount element");
        }
        __classPrivateFieldSet(this, _Toolbox_mount, el, "f");
        __classPrivateFieldSet(this, _Toolbox_buttons, [], "f");
        __classPrivateFieldGet(this, _Toolbox_instances, "m", _Toolbox_getToolboxState).call(this);
        __classPrivateFieldGet(this, _Toolbox_instances, "m", _Toolbox_render).call(this);
        // get initialState for canvas
        __classPrivateFieldGet(this, _Toolbox_instances, "m", _Toolbox_setState).call(this, initialState);
    }
    observeStateChanges(fn) {
        __classPrivateFieldSet(this, _Toolbox_changeStateObserver, fn, "f");
    }
}
_Toolbox_mount = new WeakMap(), _Toolbox_state = new WeakMap(), _Toolbox_buttons = new WeakMap(), _Toolbox_changeStateObserver = new WeakMap(), _Toolbox_instances = new WeakSet(), _Toolbox_render = function _Toolbox_render() {
    let stringHTML = "";
    __classPrivateFieldGet(this, _Toolbox_buttons, "f").forEach((button) => {
        stringHTML += `
        <div class="toolbox__button ${__classPrivateFieldGet(this, _Toolbox_state, "f").modeName === button.modeName && "toolbox__button--active"}" id="${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getIdByModeName)(button.modeName)}">
          <svg viewBox="0 0 ${ICON_SIZE_PX} ${ICON_SIZE_PX}" height="${ICON_SIZE_PX}" width="${ICON_SIZE_PX}">
            <use href="#svg_${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getIdByModeName)(button.modeName).toLowerCase()}" width="${ICON_SIZE_PX}" height="${ICON_SIZE_PX}"></use>
          </svg>
        </div>
      `;
    });
    __classPrivateFieldGet(this, _Toolbox_mount, "f").innerHTML = stringHTML;
    // re-binding
    __classPrivateFieldGet(this, _Toolbox_buttons, "f").forEach((button) => {
        button.bindSelfListener(__classPrivateFieldGet(this, _Toolbox_instances, "m", _Toolbox_setState).bind(this));
    });
}, _Toolbox_setState = function _Toolbox_setState(newState) {
    __classPrivateFieldSet(this, _Toolbox_state, Object.assign(Object.assign({}, __classPrivateFieldGet(this, _Toolbox_state, "f")), newState), "f");
    console.log(newState, __classPrivateFieldGet(this, _Toolbox_state, "f"));
    if (__classPrivateFieldGet(this, _Toolbox_changeStateObserver, "f")) {
        __classPrivateFieldGet(this, _Toolbox_changeStateObserver, "f").call(this, __classPrivateFieldGet(this, _Toolbox_state, "f"));
    }
    __classPrivateFieldGet(this, _Toolbox_instances, "m", _Toolbox_render).call(this);
}, _Toolbox_getToolboxState = function _Toolbox_getToolboxState() {
    // Получаем экземпляры кнопок
    _buttons__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((button) => {
        __classPrivateFieldGet(this, _Toolbox_buttons, "f").push(new button());
    });
};


/***/ }),

/***/ "./src/figures/BaseFigure.ts":
/*!***********************************!*\
  !*** ./src/figures/BaseFigure.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FigureName": () => (/* binding */ FigureName),
/* harmony export */   "default": () => (/* binding */ BaseFigure)
/* harmony export */ });
var FigureName;
(function (FigureName) {
    FigureName[FigureName["RECTANGLE"] = 0] = "RECTANGLE";
    FigureName[FigureName["POINT"] = 1] = "POINT";
    FigureName[FigureName["CIRCLE"] = 2] = "CIRCLE";
    FigureName[FigureName["BRUSH"] = 3] = "BRUSH";
})(FigureName || (FigureName = {}));
class BaseFigure {
    constructor(context) {
        this.context = context;
    }
    draw(action) {
        this.paintFigure(action);
    }
    checkForStop(action) {
        return action.eventType === this.getStopAction();
    }
    checkForStart(action) {
        return action.eventType === this.getStartAction();
    }
    clearAll() {
        // TODO: Забайндить на Canvas.layout
        this.context.clearRect(0, 0, 4000, 4000);
    }
}


/***/ }),

/***/ "./src/figures/Brush/index.ts":
/*!************************************!*\
  !*** ./src/figures/Brush/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brush)
/* harmony export */ });
/* harmony import */ var _ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ActionListener/actions */ "./src/ActionListener/actions.ts");
/* harmony import */ var _BaseFigure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseFigure */ "./src/figures/BaseFigure.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Brush_lastPosition;


class Brush extends _BaseFigure__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(context) {
        super(context);
        _Brush_lastPosition.set(this, { position: { x: 1, y: 2 } });
    }
    paintFigure(action) {
        this.context.beginPath();
        this.context.moveTo(__classPrivateFieldGet(this, _Brush_lastPosition, "f").position.x, __classPrivateFieldGet(this, _Brush_lastPosition, "f").position.y);
        this.context.lineWidth = 18;
        this.context.lineCap = "round";
        this.context.lineTo(action.position.x, action.position.y);
        this.context.stroke();
        this.context.closePath();
        __classPrivateFieldSet(this, _Brush_lastPosition, {
            position: action.position,
        }, "f");
    }
    getStopAction() {
        return "mouseup";
    }
    getStartAction() {
        return "mousedown";
    }
    beforeStartDraw(action) {
        __classPrivateFieldSet(this, _Brush_lastPosition, {
            position: action.position,
        }, "f");
    }
    onStopAction(action) {
    }
    getTransferActions() {
        const set = new Set();
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__.mouseActions.mouseup);
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__.mouseActions.mousemove);
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__.mouseActions.mousedown);
        return set;
    }
}
_Brush_lastPosition = new WeakMap();
Brush.modeName = _BaseFigure__WEBPACK_IMPORTED_MODULE_1__.FigureName.BRUSH;


/***/ }),

/***/ "./src/figures/Circle/index.ts":
/*!*************************************!*\
  !*** ./src/figures/Circle/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _ClearableBaseFigure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClearableBaseFigure */ "./src/figures/ClearableBaseFigure.ts");
/* harmony import */ var _BaseFigure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseFigure */ "./src/figures/BaseFigure.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Circle_startPosition;


class Circle extends _ClearableBaseFigure__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(context) {
        super(context);
        _Circle_startPosition.set(this, { position: { x: 1, y: 2 } });
    }
    paintFigure(action) {
        this.context.beginPath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = "rgba(0, 0, 0, 1)";
        const { position: { x, y } } = __classPrivateFieldGet(this, _Circle_startPosition, "f");
        this.context.ellipse((x + (action.position.x - x) / 2), (y + (action.position.y - y) / 2), Math.abs((action.position.x - x) / 2), Math.abs((action.position.y - y) / 2), 0, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
    }
    beforeStartDraw(action) {
        __classPrivateFieldSet(this, _Circle_startPosition, {
            position: action.position,
        }, "f");
    }
}
_Circle_startPosition = new WeakMap();
Circle.modeName = _BaseFigure__WEBPACK_IMPORTED_MODULE_1__.FigureName.CIRCLE;


/***/ }),

/***/ "./src/figures/ClearableBaseFigure.ts":
/*!********************************************!*\
  !*** ./src/figures/ClearableBaseFigure.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClearableBaseFigure)
/* harmony export */ });
/* harmony import */ var _BaseFigure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFigure */ "./src/figures/BaseFigure.ts");
/* harmony import */ var _ActionListener_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionListener/actions */ "./src/ActionListener/actions.ts");


class ClearableBaseFigure extends _BaseFigure__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(context) {
        super(context);
    }
    getStopAction() {
        return _ActionListener_actions__WEBPACK_IMPORTED_MODULE_1__.mouseActions.mouseup;
    }
    getStartAction() {
        return _ActionListener_actions__WEBPACK_IMPORTED_MODULE_1__.mouseActions.mousedown;
    }
    draw(action) {
        this.clearAll();
        this.paintFigure(action);
    }
    onStopAction(action) {
        this.paintFigure(action);
    }
    getTransferActions() {
        const set = new Set();
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_1__.mouseActions.mouseup);
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_1__.mouseActions.mousedown);
        return set;
    }
}


/***/ }),

/***/ "./src/figures/Point/index.ts":
/*!************************************!*\
  !*** ./src/figures/Point/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ActionListener/actions */ "./src/ActionListener/actions.ts");
/* harmony import */ var _BaseFigure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseFigure */ "./src/figures/BaseFigure.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Point_lastPosition;


class Point extends _BaseFigure__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(context) {
        super(context);
        _Point_lastPosition.set(this, { position: { x: 1, y: 2 } });
    }
    paintFigure(action) {
        this.context.lineWidth = 1;
        this.context.lineCap = "square";
        this.context.beginPath();
        this.context.moveTo(__classPrivateFieldGet(this, _Point_lastPosition, "f").position.x, __classPrivateFieldGet(this, _Point_lastPosition, "f").position.y);
        this.context.lineTo(action.position.x, action.position.y);
        this.context.stroke();
        this.context.closePath();
        __classPrivateFieldSet(this, _Point_lastPosition, {
            position: action.position,
        }, "f");
    }
    getStopAction() {
        return "mouseup";
    }
    getStartAction() {
        return "mousedown";
    }
    beforeStartDraw(action) {
        __classPrivateFieldSet(this, _Point_lastPosition, {
            position: action.position,
        }, "f");
    }
    onStopAction(action) {
    }
    getTransferActions() {
        const set = new Set();
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__.mouseActions.mouseup);
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__.mouseActions.mousemove);
        set.add(_ActionListener_actions__WEBPACK_IMPORTED_MODULE_0__.mouseActions.mousedown);
        return set;
    }
}
_Point_lastPosition = new WeakMap();
Point.modeName = _BaseFigure__WEBPACK_IMPORTED_MODULE_1__.FigureName.POINT;


/***/ }),

/***/ "./src/figures/Rectangle/index.ts":
/*!****************************************!*\
  !*** ./src/figures/Rectangle/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rectangle)
/* harmony export */ });
/* harmony import */ var _ClearableBaseFigure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClearableBaseFigure */ "./src/figures/ClearableBaseFigure.ts");
/* harmony import */ var _BaseFigure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseFigure */ "./src/figures/BaseFigure.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Rectangle_startPosition;


class Rectangle extends _ClearableBaseFigure__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(context) {
        super(context);
        _Rectangle_startPosition.set(this, { position: { x: 1, y: 2 } });
    }
    paintFigure(action) {
        const startX = __classPrivateFieldGet(this, _Rectangle_startPosition, "f").position.x;
        const startY = __classPrivateFieldGet(this, _Rectangle_startPosition, "f").position.y;
        this.context.beginPath();
        this.context.lineWidth = 2;
        this.context.moveTo(startX, startY);
        this.context.rect(startX, startY, action.position.x - startX, action.position.y - startY);
        this.context.stroke();
        this.context.closePath();
    }
    beforeStartDraw(action) {
        __classPrivateFieldSet(this, _Rectangle_startPosition, {
            position: action.position,
        }, "f");
    }
}
_Rectangle_startPosition = new WeakMap();
Rectangle.modeName = _BaseFigure__WEBPACK_IMPORTED_MODULE_1__.FigureName.RECTANGLE;


/***/ }),

/***/ "./src/figures/index.ts":
/*!******************************!*\
  !*** ./src/figures/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/figures/Point/index.ts");
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ "./src/figures/Rectangle/index.ts");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./src/figures/Circle/index.ts");
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Brush */ "./src/figures/Brush/index.ts");




const figures = [
    _Point__WEBPACK_IMPORTED_MODULE_0__["default"],
    _Rectangle__WEBPACK_IMPORTED_MODULE_1__["default"],
    _Circle__WEBPACK_IMPORTED_MODULE_2__["default"],
    _Brush__WEBPACK_IMPORTED_MODULE_3__["default"],
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (figures);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas/index.ts");
/* harmony import */ var _Toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toolbox */ "./src/Toolbox/index.ts");
/* harmony import */ var _BottomBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BottomBar */ "./src/BottomBar/index.ts");




document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const canvasTempEl = document.getElementById("canvas_template");
    if (!canvasEl || !canvasTempEl) {
        console.error("Canvas doesn't exist");
        return;
    }
    const bottomBar = new _BottomBar__WEBPACK_IMPORTED_MODULE_3__["default"]("bottom-bar");
    const canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"](canvasTempEl, "canvas_template").connectedWith(bottomBar).transferTo(canvasEl);
    const toolbox = new _Toolbox__WEBPACK_IMPORTED_MODULE_2__["default"]("aside").observeStateChanges(canvas.onToolboxChanges.bind(canvas));
});

})();

/******/ })()
;
//# sourceMappingURL=index.9c3b4865a50e2b889ca7.js.map