const { app, BrowserWindow } = require("electron");

const isDev = require("electron-is-dev");
const path = require("path");

// require("@electron/remote/main").initialize();

const createWindow = () => {
  const win = new BrowserWindow({
    height: 800,
    width: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
