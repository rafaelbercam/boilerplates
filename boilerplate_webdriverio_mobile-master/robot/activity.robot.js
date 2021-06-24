const activity = require('../screens/activity.screenObject');
const ab = require('../utils/basics/appium.basics')
const { scrollTo } = require('../utils/gestures/scroll.gestures')
exports.selectHelloWorld = ()=>{
    activity.helloWolrd.click();
}

exports.wallpaperIsDisplayed =()=>{
    return ab.isDisplayed(activity.wallpaper);
}

exports.scrollToWallpaper = () =>{
    scrollTo(activity.wallpaper)
}

exports.clickWallpaper = ()=>{
    activity.wallpaper.click();
}
