const { app, BrowserWindow, Menu } = require( "electron" );
const isDev = require( "electron-is-dev" );
const path = require( "path" );

function createWindow( ) {
	const mainWindow = new BrowserWindow( {
		title: "Programmer's Calculator",
		width: isDev ? 1100 : 800,
		height: 650,
		resizable: false
	} );

	Menu.setApplicationMenu( null ); // Disable menubar at top.
	mainWindow.loadURL( isDev ? "http://localhost:3000" : `file://${ path.join( __dirname, "../build/index.html" ) }` );

	if ( isDev ) {
		mainWindow.webContents.openDevTools( );
	}
}

app.whenReady( ).then( ( ) => {
	createWindow( );

	app.on( "activate", ( ) => {
		if ( BrowserWindow.getAllWindows( ).length === 0 ) {
			createWindow( );
		}
	} );
} );

app.on( "window-all-closed", ( ) => {
	if ( process.platform !== "darwin" ) {
		app.quit( );
	}
} );
