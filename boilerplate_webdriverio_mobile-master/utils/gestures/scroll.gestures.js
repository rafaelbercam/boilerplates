const ab = require('../basics/appium.basics')
exports.scrollDown = () =>{
    driver.touchAction([
        { action: 'press', x: 200, y: 1400 },
        { action: 'moveTo', x: 200, y: 300 },
        'release'
    ])
} 

exports.scrollTo = (element) =>{
    let displayed = false;
    while(displayed == false){
        driver.touchAction([
            { action: 'press', x: 200, y: 1200 },
            { action: 'moveTo', x: 200, y: 300 },
            'release'
        ])
        console.log(displayed = ab.isDisplayed(element));
    }
}