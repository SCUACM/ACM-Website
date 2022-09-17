<template>
  <v-container>
    <div>
      <div 
        id="dropArea" 
        @dragenter.prevent="isHovering = true"
        @dragover.prevent="isHovering = true"
        @dragleave.prevent="isHovering = false"
        @drop.prevent="handleDrop"
        :class="{highlight: isHovering}">
        <form ref="form">
          <input type="file" style="display: none" name="fileUpload" id='fileUpload' accept="application/pdf" @change='handleInput'/>
        </form>
        <label type="button" for="fileUpload">Upload New Resume</label>
        <span> or drag your resume here </span><br>
        <span :style="{visibility: file ? 'visible' : 'hidden'}"> Selected {{file && file.name}}</span>
        <button id="submitBtn" :disabled="!file" style="align-content: center" @click="submit">Submit</button>
      </div>
      <div id="pdfViewingArea" v-if="metadata">
          <p>Last updated: {{lastUpdated}}</p>
          <button id="downloadBtn" @click="downloadCurrentResume">Download Current Resume</button>
          <embed v-if="pdfUrl" id="pdf" :src="pdfUrl">
      </div>
    </div>
  </v-container>
</template>

<script>
import {storage, auth} from '../firebase';

  const fileSizeLimit = 5000000;

  export default {
    name: "ManageResume",
  
    components: {
    },

    methods: {
      handleInput(e) {
        this.handleFile(e.target.files[0]);
      },
      handleDrop(e) {
        e.preventDefault();
        this.isHovering = false;
        this.handleFile(e.dataTransfer.files[0]);
      },
      handleFile(file) {
        if (file === undefined || file.type != "application/pdf") {
          alert("Please upload a PDF file!");
          this.$refs.form.reset();
          this.file = null;
        } else if (file.size > fileSizeLimit) {
          alert("Please submit a file size less than 5 mb!");
          this.$refs.form.reset();
          this.file = null;
        }
        else{
          this.file = file;
        }
      },
      async submit() {
        if(!this.file || !this.storageRef) {
          return;
        }
        await this.storageRef.put(this.file);
        this.$refs.form.reset();
        this.file = null;
        alert("Your resume has been uploaded!");
        this.getCurrentResume();
      },
      async getCurrentResume() {
        if(this.storageRef){
          try {
            this.metadata = await this.storageRef.getMetadata();
            this.pdfUrl = await this.storageRef.getDownloadURL();
          }
          catch (e) {
            console.log("No resume found");
          }
        }
      },
      async downloadCurrentResume() {
        if(!this.pdfUrl) {
          return;
        }
        const blob = await fetch(this.pdfUrl).then((response) => response.blob());
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    },
  
    async mounted(){
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.getCurrentResume();
        } else {
          // User is signed out
          // ...
        }
      });
    },

    computed: {
      storageRef() {
        if(!auth.currentUser) {
          return null;
        }
        return storage.ref("resumes/"+auth.currentUser.uid+".pdf");
      },
      lastUpdated() {
        if(!this.metadata) {
          return "";
        }
        const date = new Date(this.metadata.updated);
        return date.toLocaleDateString()+" "+date.toLocaleTimeString();
      }
    },
  
    data: () => ({
      metadata: null,
      pdfUrl: null,
      file: null,
      isHovering: false
    }),
  };
</script>
  
<style scoped>
  #dropArea {
    font-family: sans-serif;
    margin: 0.5em auto;
    padding: 2em 1em;
    border: 2px dashed #ccc;
    justify-items: center;
    border-radius: 1em;
  }
  #dropArea.highlight {
    border-color: #104ca4 ;
  }
  button[disabled] {
    visibility: hidden;
  }
  button {
    border-radius: 40px;
    padding: 10px 30px;
    margin-bottom: 15px;
    border: 2px solid #1c548d;
    margin-right: 20px;
  }
  button.remove {
    border: 2px solid #eb4034;
  }

  #submitBtn {
    margin-left: 10px;
  }
  input[type=button], label {
    padding: 10px 30px;
    border-radius: 40px;
    background-color: #1c548d;
    color: white;
    margin-bottom: 15px;
  }
  
  #fileElement {
    
    width: 129px;
    margin: 0.5em auto;
  }
  #pdf{
    width: 100%;
    height: 40em;
  }
  
</style>
  