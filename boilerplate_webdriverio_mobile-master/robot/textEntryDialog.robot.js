const textEntryDialog = require('../screens/textEntryDialog.screenObjects')
const ab = require('../utils/basics/appium.basics')

exports.fillUsername = (username) =>{
    textEntryDialog.username.click()
    textEntryDialog.username.clearValue()
    textEntryDialog.username.addValue(username)
}

exports.fillPassword = (password) =>{
    textEntryDialog.password.click()
    textEntryDialog.password.clearValue()
    textEntryDialog.password.addValue(password)
}

exports.clickOk = () =>{
    textEntryDialog.okBtn.click();
}

exports.clickCancel = () =>{
    textEntryDialog.cancelBtn.click();
}

exports.getTextUsername = ()=>{
    return ab.getText(textEntryDialog.username)
}