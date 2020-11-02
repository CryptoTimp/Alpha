// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const shell = require('electron').shell
const path = require('path');
var settings = require("./settings.js")

//SPLASH SCREEN
/// create a global var, wich will keep a reference to out loadingScreen window
let loadingScreen;
const createLoadingScreen = () => {

    /// create a browser window
    loadingScreen = new BrowserWindow(
        Object.assign({
            /// define width and height for the window
            icon: path.join(__dirname, `alpha.png`),
            width: 400,
            height: 600,
            /// remove the window frame, so it will become a frameless window
            frame: false,
            /// and set the transparency, to remove any window background color
            transparent: true

        })

    );

    loadingScreen.setResizable(false);
    loadingScreen.loadURL(path.join(__dirname, 'test.html')
        // `C:\\Users\\JT\\Desktop\\Ladder\\LadderV1\\test.html`
    );
    loadingScreen.on('closed', () => (loadingScreen = null));
    loadingScreen.webContents.on('did-finish-load', () => {
        loadingScreen.show();
    });
};
//POST SPLASH PROCESS
//Instancing Variables
let BTCUSDT
let willQuitApp = false;

function createWindow() {
    //Create the main window.
    const mainWindow = new BrowserWindow({
        width: 559,
        height: 1200,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        title: `Alpha`,
        icon: path.join(__dirname, `alpha.png`),
        show: false
    })

    //Instance Child Windows
    //BTCUSDT
    BTCUSDT = new BrowserWindow({
            width: 560,
            height: 1200,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
            title: `BTCUSDT`,
            icon: path.join(__dirname, `alpha.png`),
            show: false
        })
        //BTCUSDTCHART
    BTCUSDTCHART = new BrowserWindow({
            width: 1900,
            height: 1000,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
            title: `BTCUSDT - Position Manager`,
            icon: path.join(__dirname, `alpha.png`),
            show: false
        })
        //ORDERS
    ORDERS = new BrowserWindow({
        width: 600,
        height: 300,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        title: `Alpha - Order Window`,
        icon: path.join(__dirname, `alpha.png`),
        show: false
    })

    //DASHBOARD
    DASHBOARD = new BrowserWindow({
            width: 1900,
            height: 1000,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
            title: `Alpha - Order Window`,
            icon: path.join(__dirname, `alpha.png`),
            show: false
        })
        //Handle Error From Closing Child Windows
        //BTCUSDT
    BTCUSDT.on('close', (e) => {
        if (willQuitApp) {
            /* the user tried to quit the app */
            BTCUSDT = null;
        } else {
            /* the user only tried to close the window */
            e.preventDefault();
            BTCUSDT.hide();
        }
    });

    //BTCUSDTCHART
    BTCUSDTCHART.on('close', (e) => {
        if (willQuitApp) {
            /* the user tried to quit the app */
            BTCUSDTCHART = null;
        } else {
            /* the user only tried to close the window */
            e.preventDefault();
            BTCUSDTCHART.hide();
        }
    });

    //ORDERS
    ORDERS.on('close', (e) => {
        if (willQuitApp) {
            /* the user tried to quit the app */
            ORDERS = null;
        } else {
            /* the user only tried to close the window */
            e.preventDefault();
            ORDERS.hide();
        }
    });

    //DASHBOARD
    DASHBOARD.on('close', (e) => {
        if (willQuitApp) {
            /* the user tried to quit the app */
            DASHBOARD = null;
        } else {
            /* the user only tried to close the window */
            e.preventDefault();
            DASHBOARD.hide();
        }
    });
    //Loading Main Window

    /// keep listening on the did-finish-load event, when the mainWindow content has loaded
    mainWindow.webContents.on('did-finish-load', () => {
        /// then close the loading screen window and show the main window
        if (loadingScreen) {
            loadingScreen.close();
        }
        mainWindow.show();
    });
    // and load the index.html of the app.
    mainWindow.loadFile('login.html')
        // Open the DevTools.
        //mainWindow.webContents.openDevTools()


    //Menu
    var menu = Menu.buildFromTemplate([{
            label: 'Alpha',
            submenu: [
                { label: 'Settings' },
                { role: 'toggledevtools' },
                { role: 'forceReload' },
                { role: 'togglefullscreen' },
                { role: 'windowMenu' },
                { type: 'separator' },
                { label: 'Exit', click() { app.quit() } },
                { role: 'about' },
            ]
        },
        {
            label: 'Widgets',
            submenu: [
                { label: `Ladder`, click() { BTCUSDT.loadFile('BTC-USDT.html'), BTCUSDT.show(); } },
                { label: `Orders`, click() { ORDERS.loadFile('Orders.html'), ORDERS.show(); } },
                { label: `Chart`, click() { BTCUSDTCHART.loadFile('positionManager.html'), BTCUSDTCHART.show(); } },
                { label: `Dashboard`, click() { DASHBOARD.loadFile('Main.html'), DASHBOARD.show(); } },
            ]
        },
    ])
    Menu.setApplicationMenu(menu);

}


// From renderer or main process, doesn't matter
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

//After
app.on('ready', () => {
    createLoadingScreen();
    /// add a little bit of delay for tutorial purposes, remove when not needed
    setTimeout(() => {
        createWindow();
    }, 6000);
})

//Remove Dev Menu
//Menu.setApplicationMenu(false)


//Closing Functions

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})