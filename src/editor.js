import * as m from 'monaco-editor';
import * as y from 'monaco-yaml';

export const monaco = m;
export const monacoYaml = y;

window.monaco = monaco;
window.monacoYaml = monacoYaml;

//const monacoPath = process.env.MONACO_PATH;



// function getWorkerUrl(moduleId, label) {
//     switch (label) {
//         case 'json':
//             return monacoPath + 'json.worker.js';
//         default:
//             return monacoPath + 'editor.worker.js';
//     }
// }

// window.MonacoEnvironment = {
//     getWorkerUrl: function (workerId, label) {
//         const url = getWorkerUrl(workerId, label);
//         return `data:text/javascript;charset=utf-8,${encodeURIComponent(`                        
//                     self.MonacoEnvironment = {
//                       baseUrl: '${monacoPath}'
//                     };
//                     importScripts('${url}');`
//         )}`;
//     }/*,
//     getWorker(moduleId, label) {
//         switch (label) {
//             case 'json':
//                 return new jsonWorker();
//             // case 'yaml':
//             //     return new yamlWorker();
//             default:
//                 return new editorWorker();
//         }
//     }*/
// };