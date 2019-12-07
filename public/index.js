const electron = require('electron')
const url = require('url')
const path = require('path')
const globalShortcut = electron.globalShortcut


const {app, BrowserWindow} = electron

let mainWindow, subWindow, subWindow2

function windowInit() {                 //set up the window and its defaults
    mainWindow = new BrowserWindow({       
        darkTheme: true,
        webPreferences: {nodeIntegration: true}, 
        transparent: true,
        alwaysOnTop: true,
        frame: false,
        nodeIntegration: true,
    })
     mainWindow.maximize()
     mainWindow.setIgnoreMouseEvents(true, {forward: true})

     mainWindow.on('closed', function(){
         mainWindow = null
     })
 }

 function childWindows(windp){   
    windp = new BrowserWindow({
        webPreferences:{nodeIntegration: true},
        alwaysOnTop: true,
        parent: mainWindow,
        frame: false,
        transparent:true,
        minHeight: 150,
        minWidth: 150,
        height: 300,
        width: 150,
        nodeIntegration:true,
        x: 10,
        y: 20
    })

    windp.on('closed', function(){
        windp = null
    })

    windp.loadURL(url.format({
        pathname: path.join(__dirname, 'items.html'),
        protocol: 'file',
        slashes: true
    }))
 }


function loadHTML(){                    //load index.html into the browser window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}

function loadSubHTML(windp){
    windp.loadURL(url.format({
        pathname: path.join(__dirname, 'items.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready',()=>{                    //run when app is ready, 

    windowInit()
    loadHTML()   

    childWindows(subWindow)
    childWindows(subWindow2)
})




