const app = require('../screens/app.screenObject')

exports.selectActivity = ()=>{
    app.activity.click();
}

exports.selectAlertDialogs = ()=>{
    app.alertDialogs.click();
}
