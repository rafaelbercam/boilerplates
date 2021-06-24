const { config } = require('../wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        deviceName: 'Samsung Galaxy S[8912].*',
        automationName: 'UiAutomator2',
        // The reference to the app
        testobject_app_id: '4',
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID_WDIO,
        // The name of the test for in the cloud
        testobject_test_name: 'wdio-demo-app-test',
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        platformName: 'Android',
        idleTimeout: 180,
        maxInstances: 6,
        cacheId: new Date().getTime(),
        noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        phoneOnly: true,
        tabletOnly: false,
    },
];

// =========================
// Sauce RDC specific config
// =========================
// The new version of WebdriverIO will:
// - automatically update the job status in the RDC cloud
// - automatically default to the US RDC cloud
config.services = ['sauce'];
// If you need to connect to the US RDC cloud comment the below line of code
config.region = 'us';
// and uncomment the below line of code
// config.region = 'us';
// Increase for real device support
config.connectionRetryTimeout = 180000;

// This port was defined in the `wdio.shared.conf.js`
delete config.port;

exports.config = config;