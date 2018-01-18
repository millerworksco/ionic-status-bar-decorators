"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ShowStatusBar(options) {
    return function (target) {
        var originalIonViewWillEnter = target.prototype.ionViewWillEnter;
        target.prototype.ionViewWillEnter = function () {
            if (this.statusBar) {
                this.statusBar.show();
                if (options.overlay) {
                    this.statusBar.overlaysWebView(options.overlay);
                }
                if (options.color === 'light') {
                    this.statusBar.styleLightContent();
                }
                else {
                    this.statusBar.styleDefault();
                }
                if (options.background) {
                    // Necessary for background colors to work on iOS.
                    this.statusBar.overlaysWebView(false);
                    if (options.background[0] === '#') {
                        this.statusBar.backgroundColorByHexString(options.background);
                    }
                    else {
                        this.statusBar.backgroundColorByName(options.background);
                    }
                }
            }
            else {
                console.warn('ShowDarkStatusBar decorator used, but StatusBar service not injected!');
            }
            if (originalIonViewWillEnter) {
                originalIonViewWillEnter.call(arguments);
            }
        };
        return target;
    };
}
exports.default = ShowStatusBar;
