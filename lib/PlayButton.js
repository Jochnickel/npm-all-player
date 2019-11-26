"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@iconify/react");
var play_circle_1 = require("@iconify/icons-ion/play-circle");
var PlayButton = /** @class */ (function (_super) {
    __extends(PlayButton, _super);
    function PlayButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayButton.prototype.render = function () {
        var w = this.props.width || 600;
        var h = this.props.height || 400;
        return (React.createElement("div", { onClick: this.props.onClick, style: { backgroundColor: "dimgray", height: h, width: w, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" } },
            React.createElement(react_1.Icon, { width: h * 0.2, icon: play_circle_1.default, style: { color: "yellowgreen" } })));
    };
    return PlayButton;
}(React.Component));
exports.default = PlayButton;
