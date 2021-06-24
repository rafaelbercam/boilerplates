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
        maxInstances: 1,
    },
];

exports.config = config;