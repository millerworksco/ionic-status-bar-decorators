"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function HideStatusBar() {
    return function (target) {
        var originalIonViewWillEnter = target.prototype.ionViewWillEnter;
        target.prototype.ionViewWillEnter = function () {
            if (this.statusBar) {
                this.statusBar.hide();
            }
            else {
                console.warn('HideStatusBar decorator used, but StatusBar service not injected!');
            }
            if (originalIonViewWillEnter) {
                originalIonViewWillEnter.call(arguments);
            }
        };
        return target;
    };
}
exports.default = HideStatusBar;
