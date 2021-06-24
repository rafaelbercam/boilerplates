module.exports = {
    get username() {return $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]`)},
    get password() {return $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]`)},
    get cancelBtn() {return $(`//android.widget.Button[@resource-id="android:id/button2"]`)},
    get okBtn() {return $(`//android.widget.Button[@resource-id="android:id/button1"]`)}
}