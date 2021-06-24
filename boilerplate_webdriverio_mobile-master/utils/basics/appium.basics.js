module.exports = {
    
    getText( element ) { return element.getText()},

    takeScreenShot() { return driver.takeScreenshot()},

    isDisplayed( element ) { return element.isDisplayed()},

    isSelected( element ) { return element.isSelected()},

    isEnabled( element ) { return element.isEnabled()},

    isChecked( element ) { return element.getAttribute('checked')}, //if checked returns true

    hideKeyboard() { return driver.hideKeyboard()},

    isKeyboardShown() { return driver.isKeyboardShown()},

    toggleAirplaneMode() { return driver.toggleAirplaneMode()},

    launchApp() { return driver.launchApp()},

    closeApp() { return driver.closeApp()},

}