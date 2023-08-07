import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import createMainWindow from './mainWindow';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null = null


app.on('window-all-closed', () => {
  win = null
})

app.whenReady().then(() => {
  win = createMainWindow()
})
