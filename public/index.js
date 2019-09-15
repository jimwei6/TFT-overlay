const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow} = electron

let mainWindow

function windowInit() {                 //set up the window and its defaults
    mainWindow = new BrowserWindow({
        transparent: true,
        frame: false,
        width: 'screenX',
        height: 'screenY',
        title: "LoL tft Overlay",
        backgroundColor: '#111111',
        titleBarStyle: "hiddenInset",
        webPreferences: {nodeIntegration: true}, 
        alwaysOnTop: true,
    })
}

function loadHTML(){                    //load index.html into the browser window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
    }))
}

app.on('ready',()=>{                    //run when app is ready, 

    windowInit()

    loadHTML()

})

