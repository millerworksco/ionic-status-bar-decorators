module.exports = () => {
  return (target) => {
    const originalIonViewWillEnter = target.prototype.ionViewWillEnter

    target.prototype.ionViewWillEnter = function () {
      if (this.statusBar) {
        this.statusBar.show()
        this.statusBar.styleDefault()
      } else {
        console.warn('ShowDarkStatusBar decorator used, but StatusBar service not injected!')
      }

      if (originalIonViewWillEnter) {
        originalIonViewWillEnter.call(arguments)
      }
    }

    return target;
  }
}