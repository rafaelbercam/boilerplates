const { selectApp } = require('../../robot/home.robot')
const { selectAlertDialogs } = require('../../robot/app.robot')
const { selectTextEntryDialog } = require('../../robot/alertDialogs.robot')
const { takeScreenShot, hideKeyboard } = require('../../utils/basics/appium.basics')
const { getTextUsername, fillPassword, fillUsername, clickOk, clickCancel} = require('../../robot/textEntryDialog.robot')

describe('text entry dialog validations', ()=>{

    it('select App Menu', ()=>{
        selectApp();
    });

    it('select Alert Dialogs Menu', ()=>{
        selectAlertDialogs();
    });
    
    it('select Text Entry Dialog', ()=>{
       selectTextEntryDialog();
    });

    it('input text into the Name and Password fields', ()=>{
      fillUsername('username');
      fillPassword('password');
      expect(getTextUsername()).toEqual('username');
      takeScreenShot();
      clickOk();
      
    })
    
});