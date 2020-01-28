const electron  = require('electron')
const {app,BrowserWindow} = require('electron')

let mainWindow;

function createWindow () {
  // Create the browser window.
   mainWindow = new BrowserWindow({frame:false, titleBarStyle: 'hidden',
   width: 800,
   height: 600,
   minWidth: 600,
   minHeight: 400,
   webPreferences: {
      nodeIntegration: true
    }
		})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
   // Open the DevTools.
  mainWindow.webContents.openDevTools()
  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
   mainWindow = null
  })
}


app.on('ready',createWindow);

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})