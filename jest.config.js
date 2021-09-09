const SuiteCloudJestConfiguration = require("@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration");
const cliConfig = require("./suitecloud.config");

module.exports = SuiteCloudJestConfiguration.build({
	projectFolder: cliConfig.defaultProjectFolder,
	projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
    customStubs: [
        {
            module: "N/ui/serverWidget",
            path: "<rootDir>/customStubs/ui/serverWidget/serverWidget.js"
        },
        {
            module: "N/ui/serverWidget/field",
            path: "<rootDir>/customStubs/ui/serverWidget/Field.js"
        },
        {
            module: "N/ui/serverWidget/forminstance",
            path: "<rootDir>/customStubs/ui/serverWidget/FormInstance.js"
        },
        {
            module: "N/ui/serverWidget/assistantinstance",
            path: "<rootDir>/customStubs/ui/serverWidget/AssistantInstance.js"
        },
        {
            module: "N/ui/serverWidget/listinstance",
            path: "<rootDir>/customStubs/ui/serverWidget/ListInstance.js"
        },
        {
            module: "N/ui/dialog",
            path: "<rootDir>/customStubs/ui/dialog.js"
        },
        {
            module: "N/ui/message",
            path: "<rootDir>/customStubs/ui/message.js"
        },
        {
            module: "N/query",
            path: "<rootDir>/customStubs/query/query.js"
        },
        {
            module: "N/query/instance",
            path: "<rootDir>/customStubs/query/QueryInstance.js"
        },
        {
            module: "N/runtime",
            path: "<rootDir>/customStubs/runtime/runtime.js"
        },
        {
            module: "N/log",
            path: "<rootDir>/customStubs/log/log.js"
        },
    ]
});
