const ipc = require('electron').ipcRenderer;
// 关闭app
function closeApp() {
    
    // alert('hello');
    ipc.send('close-app');
}
// 最小化app
function minApp() {
    ipc.send('min-app');
}

