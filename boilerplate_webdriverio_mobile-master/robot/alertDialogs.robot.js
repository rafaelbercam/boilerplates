const alertDialogs = require('../screens/alertDialogs.screenObject')

exports.selectRepeatAlarm = ()=>{
    alertDialogs.repeatAlarm.click();
}

exports.selectTextEntryDialog = ()=>{
    alertDialogs.textEntryDialog.click();
}