const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // 开发环境用 Vite dev server
  win.loadURL('http://localhost:5173');

  
  // F12 打开开发者工具
  win.webContents.on('before-input-event', (event, input) => {
    if (
      (input.key === 'F12' && input.type === 'keyDown') ||
      (input.key.toLowerCase() === 'i' && input.control && input.shift && input.type === 'keyDown')
    ) {
      win.webContents.openDevTools({ mode: 'detach' });
      event.preventDefault();
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});