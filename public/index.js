const electron = require('electron')
const url = require('url')
const path = require('path')
const globalShortcut = electron.globalShortcut


const {app, BrowserWindow} = electron

let mainWindow, subWindow, subWindow2, subWindow3

function windowInit() {                 //set up the window and its defaults
    mainWindow = new BrowserWindow({       
        darkTheme: true,
        webPreferences: {nodeIntegration: true}, 
        transparent: true,
        alwaysOnTop: true,
        frame: false,
        nodeIntegration: true,
        fullscreen: true
    })
     mainWindow.maximize()
     mainWindow.setIgnoreMouseEvents(true, {forward: true})

     mainWindow.on('closed', function(){
         mainWindow = null
     })
 }

 function childWindows(windp, w, h, htm, x ,y){   
    windp = new BrowserWindow({
        webPreferences:{nodeIntegration: true},
        alwaysOnTop: true,
        parent: mainWindow,
        frame: false,
        transparent:true,
        minHeight: 150,
        minWidth: 120,
        height: h,
        width: w,
        nodeIntegration:true,
        x: x,
        y: y,
        resizable: false
    })

    windp.on('closed', function(){
        windp = null
    })

    windp.loadURL(url.format({
        pathname: path.join(__dirname, htm + '.html'),
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

    childWindows(subWindow, 300, 150, 'items', 10, 20)
    childWindows(subWindow3, 405, 150, 'class', 10, 500)
    childWindows(subWindow2, 420, 150, 'origin', 50, 500)
})




