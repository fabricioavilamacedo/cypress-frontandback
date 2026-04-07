const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/cucumber-json', // Caminho onde os JSONs do Cucumber são gerados
    reportPath: './cypress/reports/cucumber-htmlreport',
    displayDuration: true,
    metadata: {
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local test machine',
        platform: { name: 'windows', version: '10' }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Brasil AFF Availability' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Execution Start Time', value: new Date().toISOString() }
        ]
    }
});