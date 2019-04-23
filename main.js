const {
    app,
    BrowserWindow
} = require('electron')

const path = require('path');
require('electron-reload')(__dirname);


let mainWindow

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 720,
        frame: false,
        icon: path.join(__dirname, 'img/icons/png/64x64.png'),
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('app.html')


    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {

    if (mainWindow === null) {
        createWindow()
    }
})
