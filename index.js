const fs = require('fs');
const path = require('path');

function setupHotReload(projectRoot, mainJsPath, srcPath) {
  const electronReload = require('electron-reload');

  // Setup electron-reload
  electronReload(srcPath, {
    electron: path.join(projectRoot, 'node_modules', '.bin', 'electron')
  });

  // Ensure main.js includes hot-reload setup
  const mainJsFullPath = path.join(projectRoot, mainJsPath);
  const mainJsContent = fs.readFileSync(mainJsFullPath, 'utf8');
  const reloadCode = `require('electron-reload')('${srcPath}', {
    electron: require('path').join(__dirname, 'node_modules', '.bin', 'electron')
  });`;

  if (!mainJsContent.includes('electron-reload')) {
    const updatedMainJsContent = `${reloadCode}\n\n${mainJsContent}`;
    fs.writeFileSync(mainJsFullPath, updatedMainJsContent, 'utf8');
  }

  // Create nodemon.json if it doesn't exist
  const nodemonConfigPath = path.join(projectRoot, 'nodemon.json');
  if (!fs.existsSync(nodemonConfigPath)) {
    const nodemonConfig = {
      watch: [mainJsPath, path.join(srcPath, '/**/*')],
      ext: 'js,json,html,css',
      exec: 'electron .'
    };
    fs.writeFileSync(nodemonConfigPath, JSON.stringify(nodemonConfig, null, 2), 'utf8');
  }
}

module.exports = setupHotReload;
