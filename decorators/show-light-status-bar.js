module.exports = () => {
  return (target) => {
    const originalIonViewWillEnter = target.prototype.ionViewWillEnter

    target.prototype.ionViewWillEnter = function () {
      if (this.statusBar) {
        this.statusBar.show()
        this.statusBar.styleLightContent()
      } else {
        console.warn('ShowLightStatusBar decorator used, but StatusBar service not injected!')
      }

      if (originalIonViewWillEnter) {
        originalIonViewWillEnter.call(arguments)
      }
    }

    return target;
  }
}