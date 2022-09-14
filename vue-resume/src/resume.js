import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import {
  getStorage,
  ref,
  uploadBytes,
  getMetadata,
  getBytes,
  getDownloadURL,
  updateMetadata,
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
//! Temporary placeholder
let fakeID = ["adf", "gfd", "fds"];

const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a ref to the service
const storage = getStorage(firebase);

// Create a storage ref from storage service
const storageRef = ref(storage);

// Reference to user's stored resume, if any.

//! Immediate loading functions and variables
let resumeBase64;
let resume;
let fileSizeLimit = 5000000; // 5mb, in bytes
resume = ref(storage, `resumes/${fakeID[0]}.pdf`);
updateResume();
displayMetadata();

let dropArea = document.getElementById("dropArea");
dropArea.addEventListener("drop", dropHandler, false);

let fileInput = document.getElementById("fileElement");
fileInput.addEventListener("change", fileHandler, false);

let submitBtn = document.getElementById("submitBtn");
submitBtn.disabled = true;

let downloadBtn = document.getElementById("downloadBtn");
downloadBtn.disabled = true;

let pdfView = document.getElementById("pdf");

let metaDataResume = document.getElementById("metaData");
let fileDesc = document.getElementById("fileName");

// Getting metadata for the logged in user.
//! Replace fakeID with user token
function displayMetadata() {
  getMetadata(resume)
    .then((mData) => {
      metaDataResume.textContent = `Submission date: ${mData.updated}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Downloads and sets pdf src property, given that it exists in the database.
// Also enables downloadButton
function updateResume() {
  getDownloadURL(resume)
    .then(function (downloadURL) {
      pdfView.setAttribute("src", downloadURL);
      downloadBtn.disabled = false;
      downloadBtn.addEventListener("click", () => {
        getDownloadURL(resume)
          .then((url) => fetch(url))
          .then((response) => response.blob())
          .then((blob) => {
            const a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = "resume.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

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
  if (file === undefined || file.type != "application/pdf") {
    errorHandler(0);
  } else if (file.size > fileSizeLimit) {
    errorHandler(1);
  } else {
    submitBtn.disabled = false;
    dropArea.appendChild(submitBtn);
    fileDesc.textContent = `Selected file: ${file.name}`;

    // Apparently you can only store primitive types in local
    // storage. This means 'file' types must be converted to base64.
    var reader = new FileReader();
    var base64;
    reader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      resumeBase64 = base64;
    };
    reader.readAsDataURL(file);
    submitBtn.addEventListener("click", buttonHandler, false);
  }
}

function errorHandler(code) {
  switch (code) {
    case 0: {
      alert("Please upload a PDF file!");
      fileDesc.textContent = " ";
      submitBtn.disabled = true;
      break;
    }
    case 1: {
      alert("Please submit a file size less than 5 mb!");
      fileDesc.textContent = " ";
      submitBtn.disabled = true;
      break;
    }
    default: {
      alert("Unknown error!");
    }
  }
}

// Returns converted base64 string to PDF
function getFile() {
  var base64 = resumeBase64;
  var base64Parts = base64.split(",");

  // Decoding the base64
  var fileContent = Uint8Array.from(window.atob(base64Parts[1]), (c) =>
    c.charCodeAt(0)
  );

  // Creating file based on newly decoded string (decoding is mandatory)
  var file = new File([fileContent], `${fakeID[0]}.pdf`, {
    type: "application/pdf",
  });
  return file;
}

function buttonHandler(e) {
  fileUpload(getFile());
}

function fileUpload(file) {
  // Replace fakeID with firebase user ID. It should automatically replace
  // any existing resume file with the name.

  const resumeStorageRef = ref(storage, `resumes/${fakeID[0]}.pdf`);

  uploadBytes(resumeStorageRef, file).then((snapshot) => {
    alert("Your resume has been uploaded!");
    updateResume();
    displayMetadata();
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
  style = ""
) {
  let item = document.createElement(elementType);
  item.textContent = textContent;
  parent.appendChild(item);
  if (className.length != 0) item.className = className;
  if (style != "") item.style.cssText += style;
  return item;
}

// ================== FIREBASE HELPER FUNCTIONS ===============
getDownloadURL(resume)
  .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();
  })
  .catch((error) => {
    console.log(error);
  });
