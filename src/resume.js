import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import {
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTCNXN1akZ6DEWKLGyOp2JZvAworux9jI",
  authDomain: "scu-acm.firebaseapp.com",
  projectId: "scu-acm",
  storageBucket: "scu-acm.appspot.com",
  messagingSenderId: "561382074280",
  appId: "1:561382074280:web:e3e8ca43e1a5270b519f9d",
  measurementId: "G-9ELQ4BE3XH",
};

const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a ref to the service
const storage = getStorage(firebase);

// Create a storage ref from storage service
const storageRef = ref(storage);

let dropArea = document.getElementById("dropArea");
dropArea.addEventListener("drop", dropHandler, false);

let fileInput = document.getElementById("fileElement");
fileInput.addEventListener("change", fileHandler, false);

let submitBtn = document.getElementById("submitBtn");
submitBtn.disabled = true;

["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
  dropArea.addEventListener(event, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach((event) => {
  dropArea.addEventListener(event, highlight, false);
});
["dragleave", "drop"].forEach((event) =>
  dropArea.addEventListener(event, removeHighlight, false)
);

function highlight(e) {
  dropArea.classList.add("highlight");
}

function removeHighlight(e) {
  dropArea.classList.remove("highlight");
}

function dropHandler(e) {
  uploadHandler(e.dataTransfer.files[0]);
}

function fileHandler(e) {

  uploadHandler(e.target.files[0]);
}

function uploadHandler(file) {
  let fileDesc = document.getElementById('fileName');  
  if (file.type != "application/pdf") {
    alert("Please upload a PDF file!");
    fileDesc.textContent = " ";
    submitBtn.disabled = true;
  }
  else  {
    submitBtn.disabled = false;
    dropArea.appendChild(submitBtn);
    fileDesc.textContent = `Selected file: ${file.name}`;


    // Apparently you can only store primitive types in local
    // storage. This means 'file' types must be converted to base64.
    var reader = new FileReader();
    var base64;
    reader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      localStorage.setItem("file", base64);
      // console.log(base64);
    };
    reader.readAsDataURL(file);
    submitBtn.addEventListener("click", buttonHandler, false);
  }
}

// Returns converted base64 string to PDF
function getFile() {
  var base64 = localStorage.getItem("file");
  var base64Parts = base64.split(",");

  // Decoding the base64
  var fileContent = Uint8Array.from(window.atob(base64Parts[1]), (c) =>
    c.charCodeAt(0)
  );

  // Creating file based on newly decoded string
  var file = new File([fileContent], `${fakeID[0]}.pdf`, {
    type: "application/pdf",
  });
  return file;
}

function buttonHandler(e) {
  fileUpload(getFile());
}

let fakeID = ["adf", "gfd", "fds"];

function fileUpload(file) {
  // Replace fakeID with firebase user ID. It should automatically replace
  // any existing resume file with the name.

  const resumeStorageRef = ref(storage, `resumes/${fakeID[0]}.pdf`);

  uploadBytes(resumeStorageRef, file).then((snapshot) => {
    alert("Your resume has been uploaded!");
  });
}

// ================ HELPER FUNCTION ===================

// post: takes in a parent element, item content to append, and type
// pre: returns element type. Appends the item to the last child
function appendItemChild(
  parent,
  textContent = "",
  elementType = "div",
  className = "",
  style ="",
) {
let item = document.createElement(elementType);
  item.textContent = textContent;
  parent.appendChild(item);
  if (className.length != 0) item.className = className;
  if (style != "") item.style.cssText += style;
  return item;
}