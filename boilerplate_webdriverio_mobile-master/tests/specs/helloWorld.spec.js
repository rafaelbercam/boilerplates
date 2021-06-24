const { selectApp } = require('../../robot/home.robot');
const { selectActivity } = require('../../robot/app.robot')
const { selectHelloWorld } = require('../../robot/activity.robot');
const { getText } = require('../../robot/helloWorld.robot');
const { takeScreenShot } = require('../../utils/basics/appium.basics');

describe('Hello World Validation', ()=>{

    it('select App Menu', ()=>{
        selectApp();
    });

    it('select Activity Menu', ()=>{
        selectActivity();
    });
    
    it('select Hello World Menu', ()=>{
        selectHelloWorld();
    });

    it('expect text Hello, World!', ()=>{
       const msg = getText();
       expect(msg).toEqual('Hello, World!');
       takeScreenShot();
    });
    
});