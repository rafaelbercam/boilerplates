const { selectApp } = require('../../robot/home.robot')
const { selectAlertDialogs } = require('../../robot/app.robot')
const { selectRepeatAlarm } = require('../../robot/alertDialogs.robot')
const { clickCheckDay, isChecked } = require('../../robot/repeatAlarm.robot')
const { takeScreenShot } = require('../../utils/basics/appium.basics')
describe('Repeat Alarm Validations', ()=>{

    it('select App Menu', ()=>{
        selectApp();
    });

    it('select Alert Dialogs Menu', ()=>{
        selectAlertDialogs();
    });
    
    it('select Repeat Alarm Menu', ()=>{
        selectRepeatAlarm();
    });

    it('checked Every Monday and Sunday and unchecked Every Tuesday ', ()=>{
       //checked Monday and Sunday
       clickCheckDay(0)
       const checkMonday = isChecked(0)
       expect(checkMonday).toEqual('true')
       
       clickCheckDay(6)
       const checkSunday = isChecked(6)
       expect(checkSunday).toEqual('true')
       
       //unchecked Tuesday
       clickCheckDay(1) 
       const unCheckTuesday = isChecked(1)
       expect(unCheckTuesday).toEqual('false')
       takeScreenShot();
    })
    
});