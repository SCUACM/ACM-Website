<template>
    <div>

    </div>
</template>

<script>
import {auth} from '../firebase';
import { getUserPerms } from '../helpers';

export default {
    name: "RedirectRouter",
    async mounted() {
        console.log(this.$route.query.uri);
        // Wait for the user object to be loaded
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user);
                const uri = decodeURIComponent(this.$route.query.uri);
                let canRedirect = true;
                // Check if the user has admin permissions
                const perms = await getUserPerms(user);
                const requiredPerms = decodeURI(this.$route.query.perms ?? "");

                if(requiredPerms!= "") {
                    let permsSplit = requiredPerms.split(":");
                    for(let group of permsSplit) {
                        let permGroup = group.split(",");
                        let groupValid = false;
                        for(let perm of permGroup) {
                            if(perms[perm]) {
                                groupValid = true;
                            }
                        }
                        if(!groupValid) {
                            console.log("FAILED for", permGroup, perms)
                            canRedirect = false;
                        }
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