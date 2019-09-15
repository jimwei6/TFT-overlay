const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow} = electron

let mainWindow

app.on('ready',()=>{

    mainWindow = new BrowserWindow({
        transparent: true,
        frame: false,
        width: 'screenX',
        height: 'screenY',
        title: "LoL tft Overlay",
        backgroundColor: '#111111',
        titleBarStyle: "hiddenInset",
        webPreferences: {nodeIntegration: true}, 

    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
    }))
})