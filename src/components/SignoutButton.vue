<template>
  <div @click="SignOut()">
    <v-btn class=blue white--text> Sign In </v-btn>
  </div>
</template>
<script>

methods: {
  SignOut() {
  import { getAuth, signOut } from "firebase/auth";

  const auth = getAuth();
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
}
}
</script>
