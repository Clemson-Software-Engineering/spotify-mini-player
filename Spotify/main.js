const { app, BrowserWindow } = require('electron')
const url = require('url');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

//app.on('window-all-closed', () => {
//if (process.platform !== 'darwin') {
  //  app.quit()
  //}
//})

//app.on('activate', () => {
  //if (BrowserWindow.getAllWindows().length === 0) {
    //createWindow()
  //}
//})
