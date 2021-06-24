const helloWorld = require('../screens/helloWorld.screenObject');
const { getText } = require('../utils/basics/appium.basics');

exports.getText = ()=>{
    return getText(helloWorld.HelloWorld).toString()
}
