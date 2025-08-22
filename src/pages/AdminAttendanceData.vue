<template>
    <v-app>
        <MainNavbar/>
        <v-container style="margin-top: 75px; max-width: 1000px">
            <h2>Attendance Data</h2>
            
        </v-container>
        <MainFooter/>
    </v-app>
</template>

<script>
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

export default {
    name: "AdminAttendanceData",
    components: {
        MainNavbar,
        MainFooter
    }
}
</script>