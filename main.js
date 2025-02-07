const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true  // Включение Node.js API в веб-страницу
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));

  // Автоматическая перезагрузка при изменении HTML
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools(); // Открыть dev tools для отладки
    fs.watch(path.join(__dirname, 'index.html'), (eventType, filename) => {
      if (eventType === 'change') {
        win.reload(); // Перезагружаем страницу при изменении файла
      }
    });
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});