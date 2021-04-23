const { app, BrowserWindow, Menu} = require('electron')
//const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const url = require('url');
const path = require('path');

let mainWindow = null; 

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 320,
    frame: true,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
    }) 
   mainWindow.loadFile("index.html");
   
}  

app.on('ready', createWindow) 