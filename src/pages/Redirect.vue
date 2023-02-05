<template>
    <div>

    </div>
</template>

<script>
import {auth} from '../firebase';
export default {
    name: "Redirect",
    async mounted() {
        console.log(this.$route.query.uri);
        // Wait for the user object to be loaded
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user);
                const uri = decodeURIComponent(this.$route.query.uri);
                const needsAdmin = this.$route.query.admin;
                let canRedirect = true;
                // Check if the user has admin permissions
                if(needsAdmin) {
                    const idToken = await user.getIdTokenResult();
                    if(!idToken.claims.admin) {
                        canRedirect = false;
                    }
                }
                // User has propper permissions!
                if(canRedirect) {
                    this.$router.push(uri);
                }
                // Redirect to home page, insufficient permissions
                else {
                    this.$router.push("/");
                    alert('You do not have permission to view this page');
                }
            } 
            // Redirect to home page, insufficient permissions
            else {
                this.$router.push("/");
                alert('You must be logged in to view this page');
            }
        });
    }
}
</script>