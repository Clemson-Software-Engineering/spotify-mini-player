const { app, BrowserWindow, Menu} = require('electron')
const url = require('url');
const path = require('path');

let win; 

function createWindow () {
  win = new BrowserWindow({
    width: 400,
    height: 320,
    frame: true,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  })

  //win.loadFile('index.html')

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //Open the DevTools
  //win.webContents.openDevTools()

  //Emitted when the window is closed.
  win.on('closed', () => {

    win = null
  })

  var menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
        {label: 'File'},
        {label: 'View'},
        {
          label: 'Exit',
          click() {
            app.quit()
          }
        }
      ]
    },
    {
      label: "Info"
    }
  ])

  Menu.setApplicationMenu(menu);
}


//method will be called when electron has finished initialization
//and is ready to create browser windows
app.whenReady().then(createWindow)

//app.on('window-all-closed', () => {
  //if (process.platform !== 'darwin') {
    //app.quit()
  //}
//})

//app.on('activate', () => {
  //if (BrowserWindow.getAllWindows().length === 0) {
    //createWindow()
  //}
//})
