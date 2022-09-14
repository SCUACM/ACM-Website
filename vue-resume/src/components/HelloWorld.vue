<template>
  <div class="hello">
    
<body>
  <script src="./resume.js" type="module"> 
  </script>
<div id="dropArea" @drop="dropHandler">
    <form class="my-form">
      <p>Drop your resume here!</p>
    </form>
    <input type="file" id="fileElement"  multiple accept ="application/pdf"/>
    <p id="fileName"></p>
    <button id="submitBtn" style="align-content: center">Submit</button>
  </div>
<div id="pdfViewingArea">
    <p id = "metaData"></p>
    <button id="downloadBtn" >Download</button>
    <embed id="pdf">
</div>

</body>
  </div>
</template>

<script>


import { initializeApp } from "firebase/app";
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import {
  getStorage,
  ref,
  uploadBytes,
  getMetadata,
  // getBytes,
  getDownloadURL,
  // updateMetadata,
} from "firebase/storage";

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
// const storageRef = ref(storage);

// Reference to user's stored resume, if any.

let dropArea = document.getElementById("dropArea");
// dropArea.addEventListener("drop", dropHandler, false);

let fileInput = document.getElementById("fileElement");
fileInput.addEventListener("change", fileHandler, false);

let submitBtn = document.getElementById("submitBtn");
submitBtn.disabled = true;

let downloadBtn = document.getElementById("downloadBtn");
downloadBtn.disabled = true;

let pdfView = document.getElementById("pdf");

let metaDataResume = document.getElementById("metaData");
let fileDesc = document.getElementById("fileName");

//! Immediate loading functions and variables
let resumeBase64;
let resume;
let fileSizeLimit = 5000000; // 5mb, in bytes
resume = ref(storage, `resumes/${fakeID[0]}.pdf`);
updateResume();
displayMetadata();



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
  {

    dropArea.addEventListener(event, removeHighlight, false);
  }
);

function highlight() {
  dropArea.classList.add("highlight");
}

function removeHighlight() {
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

function buttonHandler() {
  fileUpload(getFile());
}

function fileUpload(file) {
  // Replace fakeID with firebase user ID. It should automatically replace
  // any existing resume file with the name.

  const resumeStorageRef = ref(storage, `resumes/${fakeID[0]}.pdf`);

  uploadBytes(resumeStorageRef, file).then(() => {
    alert("Your resume has been uploaded!");
    updateResume();
    displayMetadata();
  });
}

// ================ HELPER FUNCTION ===================

// post: takes in a parent element, item content to append, and type
// pre: returns element type. Appends the item to the last child
// function appendItemChild(
//   parent,
//   textContent = "",
//   elementType = "div",
//   className = "",
//   style = ""
// ) {
//   let item = document.createElement(elementType);
//   item.textContent = textContent;
//   parent.appendChild(item);
//   if (className.length != 0) item.className = className;
//   if (style != "") item.style.cssText += style;
//   return item;
// }

// ================== FIREBASE HELPER FUNCTIONS ===============
getDownloadURL(resume)
  .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = () => {
      // const blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();
  })
  .catch((error) => {
    console.log(error);
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");
*
{
    font-family: "Poppins", sans-serif;
    font-weight: 400 !important;
    font-size: 1.1rem;
}
#dropArea {
  border: 2px dashed #ccc;
  border-radius: 20px;
  width: 480px;
  font-family: sans-serif;
  margin: 0.5em auto;
  padding: 20px;
  display: grid;
  justify-items: center;
  }
  #dropArea.highlight {
    border-color: #104ca4 ;
  }
  p {
  margin: 0.5em auto;
  }
  .my-form {
    /* margin-bottom: 10px; */
  }
  #gallery {
    margin-top: 10px;
  }
  #gallery img {
    width: 150px;
    margin-bottom: 10px;
    margin-right: 10px;
    vertical-align: middle;
  }
  button{
    border-width: 3px;
    border-color: rgb(0, 0, 0);
    padding: 1em;
    margin: 0.5em auto;
    display: block;
    border-radius: 20px;
    background: rgb(255, 255, 255);

  }
  button:hover {
    background: rgb(186, 186, 186);
    transition-duration: 20ms;
  }
  button, button::before{
    -webkit-transition: all .2s ease-in;
    -moz-transition: all .2s ease-in;
    -ms-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    transition: all .2s ease-in;
    }
  
  #fileElement {
    
    width: 120px;
    margin: 0.5em auto;
  }
  #pdfViewingArea{
    display: grid;
    justify-content: center;
  }
  #pdf{
    width: 50em;
    height: 40em;
  }
  #metaData{
    display: grid;
    justify-content: center;
    justify-items: center;

  }
  
</style>
