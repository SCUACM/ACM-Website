import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import {getStorage} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyDTCNXN1akZ6DEWKLGyOp2JZvAworux9jI",
    authDomain: "scu-acm.firebaseapp.com",
    projectId: "scu-acm",
    storageBucket: "scu-acm.appspot.com",
    messagingSenderId: "561382074280",
    appId: "1:561382074280:web:e3e8ca43e1a5270b519f9d",
    measurementId: "G-9ELQ4BE3XH"
  };

const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a ref to the service
const storage = getStorage(firebase);

let dropArea = document.getElementById('dropArea');

['dragenter', 'dragover', 'dragleave','drop'].forEach((event) => {
  dropArea.addEventListener(event, preventDefaults, false);
});

function preventDefaults(e){
    e.preventDefaults();
    e.stopPropagation();
}

['dragenter','dragover'].forEach((event) => {
    dropArea.addEventListener(event, highlight, false)
    });
['dragleave', 'drop'].forEach((event) => 
    dropArea.addEventListener(event, removeHighlight, false));

function highlight(e) {
    dropEvent.classList.add('highlight');
}

function removeHighlight(e){
    dropEvent.classList.remove('highlight');
}

dropArea.addEventListener('drop', dropHandler, false);

function dropHandler(e){
    let data = e.dataTransfer;
    let files = data.files;
    
    fileHandler(files);
}

function fileHandler(files){
    // iterating through the files individually...
    ([...files]).forEach(fileUpload);
}

function fileUpload(file){
    // firebase stuff goes here
    let url = 'gs://scu-acm.appspot.com/resumes';
    let formData = new FormData();
    
    formData.append('file', file);

    fetch(url, {
        method: 'POST', body: formData
    }).then(() => { console.log('success.'); })
    .catch(console.log('error'));
}

