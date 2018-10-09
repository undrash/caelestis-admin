"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var mainWindow;
var tray;
electron_1.app.on("ready", function () {
    console.info("Electron initialized");
    mainWindow = new electron_1.BrowserWindow({
        width: 1600,
        height: 1200,
        icon: __dirname + "\\..\\img\\icons\\windows-icon-64.png"
    });
    mainWindow.loadURL("file://" + __dirname + "/../index.html");
    tray = new electron_1.Tray(__dirname + "\\..\\img\\icons\\windows-icon.png");
    tray.setToolTip("ildiesign app");
    tray.on("click", function () {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        }
        else {
            mainWindow.show();
        }
    });
    tray.on("right-click", function () {
        var menuConfig = electron_1.Menu.buildFromTemplate([
            {
                label: "Quit",
                click: function () { return electron_1.app.quit(); }
            }
        ]);
        tray.popUpContextMenu(menuConfig);
    });
    mainWindow.webContents.openDevTools();
});
electron_1.app.on('browser-window-created', function (e, window) {
    window.setMenu(null);
});
//# sourceMappingURL=main.js.map