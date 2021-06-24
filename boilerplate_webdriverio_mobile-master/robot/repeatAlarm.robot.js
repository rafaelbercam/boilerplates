const repeatAlarm = require('../screens/repeatAlarm.screenObject')
const ab = require('../utils/basics/appium.basics')

exports.clickCheckDay = (index) =>{
    repeatAlarm.weekdayCheckBox(index).click();
}

exports.isChecked = (index) =>{
    return ab.isChecked(repeatAlarm.weekdayCheckBox(index));
}
