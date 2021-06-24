exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'mocha',
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    jasmineNodeOpts: {
        expectationResultHandler: function(passed, assertion) {
            /**
             * only take screenshot if assertion failed
             */
            if(passed) {
                return
            }
            
            driver.takeScreenshot(`assertionError_${assertion.error.message}.png`)
        }
    },


    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            'selenium-standalone',
            'appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                // For arguments see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: 'appium',
            },
        ],
    ],
    port: 4444,
};