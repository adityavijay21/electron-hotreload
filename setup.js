// setup.js
const path = require('path');
const setupHotReload = require('./index');

const projectRoot = process.cwd();
const mainJsPath = 'main.js'; // Adjust this path if necessary
const srcPath = path.join(projectRoot, 'src');

setupHotReload(projectRoot, mainJsPath, srcPath);
