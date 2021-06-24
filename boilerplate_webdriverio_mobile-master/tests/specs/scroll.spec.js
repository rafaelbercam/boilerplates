const { selectApp } = require('../../robot/home.robot');
const { selectActivity } = require('../../robot/app.robot')
const { scrollDown } = require('../../utils/gestures/scroll.gestures');
const { takeScreenShot } = require('../../utils/basics/appium.basics');
const { wallpaperIsDisplayed, scrollToWallpaper, clickWallpaper } = require('../../robot/activity.robot')
describe('Scroll to element', ()=>{

    it('select App Menu', ()=>{
        selectApp();
    });

    it('select Activity Menu', ()=>{
        selectActivity();
    });
    
    it('Scroll to Wallpaper', ()=>{
        scrollToWallpaper();
        expect(wallpaperIsDisplayed()).toEqual(true);
        clickWallpaper();
        takeScreenShot();
    });
});