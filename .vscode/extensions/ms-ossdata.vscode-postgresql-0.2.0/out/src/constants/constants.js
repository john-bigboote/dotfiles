"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Collection of Non-localizable Constants
exports.languageId = 'sql';
exports.extensionName = 'pgsql';
exports.extensionDisplayName = 'PostgreSQL';
exports.extensionConfigSectionName = 'pgsql';
exports.pgsqlProviderName = 'PGSQL';
exports.noneProviderName = 'None';
exports.connectionApplicationName = 'vscode-pgsql';
exports.outputChannelName = 'PGSQL';
exports.connectionConfigFilename = 'settings.json';
exports.connectionsArrayName = 'connections';
exports.cmdRunQuery = 'extension.pgsql.runQuery';
exports.cmdRunCurrentStatement = 'extension.pgsql.runCurrentStatement';
exports.cmdCancelQuery = 'extension.pgsql.cancelQuery';
exports.cmdConnect = 'extension.pgsql.connect';
exports.cmdDisconnect = 'extension.pgsql.disconnect';
exports.cmdChooseDatabase = 'extension.pgsql.chooseDatabase';
exports.cmdChooseLanguageFlavor = 'extension.pgsql.chooseLanguageFlavor';
exports.cmdShowReleaseNotes = 'extension.showReleaseNotes';
exports.cmdShowGettingStarted = 'extension.pgsql.showGettingStarted';
exports.cmdNewQuery = 'extension.pgsql.newQuery';
exports.cmdManageConnectionProfiles = 'extension.pgsql.manageProfiles';
exports.cmdRebuildIntelliSenseCache = 'extension.pgsql.rebuildIntelliSenseCache';
exports.postgresDbPrefix = '.postgres.database.azure.com';
exports.defaultConnectionTimeout = 15;
exports.azureSqlDbConnectionTimeout = 30;
exports.azureDatabase = 'Azure';
exports.defaultPortNumber = 1433;
exports.sqlAuthentication = 'SqlLogin';
exports.defaultDatabase = 'master';
exports.errorPasswordExpired = 18487;
exports.errorPasswordNeedsReset = 18488;
exports.errorLoginFailed = 18456;
exports.maxDisplayedStatusTextLength = 50;
exports.outputContentTypeRoot = 'root';
exports.outputContentTypeMessages = 'messages';
exports.outputContentTypeResultsetMeta = 'resultsetsMeta';
exports.outputContentTypeColumns = 'columns';
exports.outputContentTypeRows = 'rows';
exports.outputContentTypeConfig = 'config';
exports.outputContentTypeSaveResults = 'saveResults';
exports.outputContentTypeOpenLink = 'openLink';
exports.outputContentTypeCopy = 'copyResults';
exports.outputContentTypeEditorSelection = 'setEditorSelection';
exports.outputContentTypeShowError = 'showError';
exports.outputContentTypeShowWarning = 'showWarning';
exports.outputServiceLocalhost = 'http://localhost:';
exports.msgContentProviderSqlOutputHtml = 'dist/html/sqlOutput.ejs';
exports.contentProviderMinFile = 'dist/js/app.min.js';
exports.serviceCompatibleVersion = '1.0.0';
exports.untitledSaveTimeThreshold = 10.0;
exports.renamedOpenTimeThreshold = 10.0;
exports.timeToWaitForLanguageModeChange = 10000.0;
// TODO: Update these
exports.macOpenSslHelpLink = 'https://github.com/Microsoft/vscode-postgresql/wiki/OpenSSL-Configuration';
exports.gettingStartedGuideLink = 'https://github.com/Microsoft/vscode-postgresql/blob/master/README.md';
exports.releaseNotesLink = 'https://github.com/Microsoft/vscode-postgresql/blob/master/CHANGELOG.md';
exports.integratedAuthHelpLink = 'https://aka.ms/vscode-pgsql-integratedauth';
exports.sqlToolsServiceCrashLink = 'https://github.com/Microsoft/vscode-postgresql/wiki/SqlToolsService-Known-Issues';
exports.localizedTexts = 'localizedTexts';
// Configuration Constants
exports.copyIncludeHeaders = 'copyIncludeHeaders';
exports.configLogDebugInfo = 'logDebugInfo';
exports.configMyConnections = 'connections';
exports.configSaveAsCsv = 'saveAsCsv';
exports.configSaveAsJson = 'saveAsJson';
exports.configSaveAsExcel = 'saveAsExcel';
exports.configRecentConnections = 'recentConnections';
exports.configMaxRecentConnections = 'maxRecentConnections';
exports.configCopyRemoveNewLine = 'copyRemoveNewLine';
exports.configSplitPaneSelection = 'splitPaneSelection';
exports.configShowBatchTime = 'showBatchTime';
exports.extConfigResultKeys = ['shortcuts', 'messagesDefaultOpen'];
exports.sqlToolsServiceInstallDirConfigKey = 'installDir';
exports.sqlToolsServiceExecutableFilesConfigKey = 'executableFiles';
exports.sqlToolsServiceVersionConfigKey = 'version';
exports.sqlToolsServiceDownloadUrlConfigKey = 'downloadUrl';
exports.extConfigResultFontFamily = 'resultsFontFamily';
exports.extConfigResultFontSize = 'resultsFontSize';
exports.configApplyLocalization = 'applyLocalization';
exports.configPersistQueryResultTabs = 'persistQueryResultTabs';
// ToolsService Constants
exports.serviceInstallingTo = 'Installing PostgreSQL tools service to';
exports.serviceInstalling = 'Installing';
exports.serviceDownloading = 'Downloading';
exports.serviceInstalled = 'PostgreSQL Tools Service installed';
exports.serviceInstallationFailed = 'Failed to install PostgreSQL Tools Service';
exports.sqlToolsServiceCrashMessage = 'PostgreSQL Tools Service component could not start.';
exports.sqlToolsServiceCrashButton = 'View Known Issues';
exports.serviceInitializingOutputChannelName = 'SqlToolsService Initialization';
exports.serviceInitializing = 'Initializing PostgreSQL tools service for the PostgreSQL extension.';
exports.commandsNotAvailableWhileInstallingTheService = 'Note: PostgreSQL commands will be available after installing the service.';
exports.unsupportedPlatformErrorMessage = 'The platform is not supported';
exports.serviceLoadingFailed = 'Failed to load PostgreSQL Tools Service';
exports.invalidServiceFilePath = 'Invalid file path for PostgreSQL Tools Service';
exports.sqlToolsServiceName = 'SQLToolsService';
exports.serviceNotCompatibleError = 'Client is not compatible with the service layer';
exports.sqlToolsServiceConfigKey = 'service';
exports.v1SqlToolsServiceConfigKey = 'v1Service';

//# sourceMappingURL=constants.js.map
