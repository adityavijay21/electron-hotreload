# @adityavijay21/electron-hotreload 🚀

`@adityavijay21/electron-hotreload` is a powerful npm package designed to enhance your Electron development workflow by providing seamless hot-reloading for both the main and renderer processes. 🎉 This package integrates `electron-reload` and `nodemon` to automatically reload your Electron app when changes are detected. Say goodbye to manual restarts and hello to a smoother development experience! 🔄

## Features ✨

- **Automatic Reloading**: Instantly reloads your Electron app when changes are made to your source files. 🔥
- **Seamless Integration**: Easy setup with minimal configuration required. ⚙️
- **Supports Multiple File Types**: Monitors JavaScript, JSON, HTML, and CSS files. 📁

## Installation 📦

To get started with `@adityavijay21/electron-hotreload`, follow these steps:

1. **Install the Package**:

   Add the package as a development dependency to your Electron project:

   ```sh
   npm install @adityavijay21/electron-hotreload --save-dev
   ```

2. **Set Up Your Electron Project**:

   Ensure your project has a basic Electron setup with a `main.js` file (or equivalent) for the main process.

## Usage 🚀

### 1. Set Up Hot-Reloading

1. **Create/Update Your `main.js`**:

   Add the following code to your `main.js` (or equivalent entry point) to include the hot-reload setup:

   ```javascript
   // main.js

   const path = require('path');
   require('@adityavijay21/electron-hotreload').setupHotReload(__dirname, 'src');

   const { app, BrowserWindow } = require('electron');

   const createWindow = () => {
     const mainWindow = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
         preload: path.join(__dirname, 'preload.js')
       }
     });

     mainWindow.loadFile('index.html');
   };

   app.whenReady().then(() => {
     createWindow();

     app.on('activate', () => {
       if (BrowserWindow.getAllWindows().length === 0) createWindow();
     });
   });

   app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') app.quit();
   });
   ```

2. **Create/Update Your `nodemon.json`**:

   Ensure you have a `nodemon.json` file in the root of your project with the following configuration:

   ```json
   {
     "watch": ["main.js", "src/**/*"],
     "ext": "js,json,html,css",
     "exec": "electron ."
   }
   ```

3. **Add a Start Script**:

   Update your `package.json` to include a start script that uses `nodemon`:

   ```json
   "scripts": {
     "start": "nodemon"
   }
   ```

4. **Run Your Application**:

   Start your Electron application with hot-reloading enabled:

   ```sh
   npm start
   ```

## Configuration ⚙️

### `setupHotReload`

The `setupHotReload` function from `@adityavijay21/electron-hotreload` requires two parameters:

- **`projectRoot`**: The root directory of your Electron project. 🗂️
- **`srcPath`**: The path to the directory where your source files are located (relative to `projectRoot`). 📂

### Example

```javascript
require('@adityavijay21/electron-hotreload').setupHotReload(__dirname, 'src');
```

## Contributing 🤝

We welcome contributions to `@adityavijay21/electron-hotreload`! Follow these steps to contribute:

1. **Fork the Repository**: Fork the repository on GitHub and clone it to your local machine. 🍴
2. **Create a Branch**: Create a new branch for your changes. 🌿
3. **Make Changes**: Implement your changes or new features. ✍️
4. **Test Your Changes**: Ensure everything works as expected. 🧪
5. **Submit a Pull Request**: Submit a pull request to merge your changes into the main repository. 🔄

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

For questions or further assistance, feel free to reach out:

- **Email**: [kiriotheo@gmail.com](mailto:kiriotheo@gmail.com)
- **GitHub**: [github.com/adityavijay21](https://github.com/adityavijay21)

---

Thank you for using `@adityavijay21/electron-hotreload`! Happy coding! 🚀💻
