<template>
    <v-app>
        <MainNavbar />
        <v-container style="margin-top: 75px; max-width: 1000px">
            <h2 v-if="canEditRoles">Manage Roles</h2>
            <div v-if="canEditRoles" class="rolesTable">
                <table>
                    <tbody>
                        <tr>
                            <th class="role-name" rowspan="2">Role name</th>
                            <th rowspan="2">Change Role Permissions</th>
                            <th rowspan="2">Change User Roles</th>

                            <th rowspan="2">Edit My Profile</th>
                            <th rowspan="2">View All Profiles</th>

                            <th rowspan="2">Edit My Events</th>

                            <th colspan="3">ACM Events</th>
                            <th colspan="3">ACM-W Events</th>
                            <th colspan="3">BroncoSec Events</th>
                            <th colspan="3">AI Collab. Events</th>
                            <th colspan="3">Other Events</th>

                            <th rowspan="2">View Events</th>
                            <th rowspan="2">Can Register</th>
                            <th rowspan="2">Upload Resume</th>
                            <th rowspan="2">View My Resume</th>
                            <th rowspan="2">View All Resumes</th>

                            <th rowspan="2">View Projects</th>
                            <th rowspan="2">Create Projects</th>
                            <th rowspan="2">Edit My Projects</th>
                            <th rowspan="2">Edit All Projects</th>
                            <th rowspan="2">Delete Projects</th>
                        </tr>
                        <tr>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <tr v-for="role in this.roles" :key="role.id">
                            <!-- <td>{{role.name}}</td> -->
                            <td>
                                <v-text-field
                                class="role-name" 
                                v-model="role.name"
                                :value="role.name"
                                solo
                                @input="() => updateRole(role)"
                                >
                                </v-text-field>
                            </td>
                            <td v-for="perm in rolePerms" :key="perm">
                                <input type="checkbox" v-model="role[perm]" :value="role[perm]" @change="() => updateRole(role)"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button @click="createRole">Create new Role</button>
            </div>

            <h2 v-if="canEditUsers">Manage Users</h2>
            <div v-if="canEditUsers">
                <v-text-field
                v-model="search"
                label="Search"
                solo
                ></v-text-field>
                <v-btn @click="search = ''">Clear</v-btn>
                <v-btn @click="searchUser()">Search</v-btn>
                <table v-if="searchResults.length > 0">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roles</th>
                        </tr>
                        <tr v-for="user in searchResults" :key="user.id">
                            <td>{{ user.uid }}</td>
                            <td>{{ user.displayName }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ (user.claims || {}).roles || "none" }}
                                <v-btn @click="addRole(user)">Add</v-btn>
                                <v-btn @click="removeRole(user)">Remove</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </v-container>
        <MainFooter />
    </v-app>
  </template>
  
  <script>
  import MainNavbar from "@/layout/MainNavbar.vue";
  import MainFooter from "@/layout/MainFooter.vue";

import 'firebase/compat/firestore'
import {db, functions, auth} from '../firebase';
import { permsList, getUserPerms } from '../helpers';
  
  export default {
    name: "AdminRoles",
  
    components: {
        MainNavbar,
        MainFooter,
    },

    methods: {
        createRole() {
            console.log("Creating")
            const body = {
                name: "New role",
            };
            console.log(this.rolePerms);
            for(let perm of this.rolePerms) {
                body[perm] = false;
            }
            db.collection("roles").add(body);
        },
        updateRole(role) {
            console.log(role);
            db.collection("roles").doc(role.id).update(role)
        },
        async searchUser() {
            if(this.search.length == 0) {
                this.searchResults = [];
            }
            const query = await db.collection("users").where('name', '>=', this.search).where('name', '<=', this.search+ '\uf8ff').get();
            let results = query.docs;
            if(query.docs.length == 0) {
                // search by document ID
                const query = await db.collection("users").doc(this.search).get();
                if(query.exists) {
                    results = [query.doc];
                }
            }
            this.searchResults = [];
            await functions.httpsCallable("searchUsers")({uids: results.map(doc => doc.id)}).then((result) => {
                // console.log(result.data.users);
                this.searchResults = result.data.users;
            });
            console.log(this.searchResults);
        },
        async addRole(user) {
            this.updateUserRole(user,"addRole");
        },
        async removeRole(user) {
            this.updateUserRole(user,"removeRole");
        },
        async updateUserRole(user, functionName) {
            let uid = user.uid;
            let role = prompt("Enter role name");
            let newUser = await functions.httpsCallable(functionName)({uid, role});
            let index = this.searchResults.indexOf(user);
            this.searchResults[index] = newUser.data;
            console.log(this.searchResults);
            console.log("UPDATED",newUser);

        }
    },
  
    firestore: {
        roles: db.collection('roles')
    },

    mounted() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const perms = await getUserPerms(user);
        this.canEditRoles = perms.changeRolePerms;
        this.canEditUsers = perms.changeUserRole;
      }
    });
  },

    data() {
      return {
        roles: [],
        rolePerms: permsList,
        search: "",
        searchResults: [],
        canEditRoles: false,
        canEditUsers: false
      };
    },
  };
  </script>
  
<style scoped>
    .rolesTable {
        overflow-y: scroll;
        width: 100%;
    }

    table, th, td {
        border: black 1px solid;
        margin: 0;
        border-spacing: 0px;
    }
    th, td {
        padding: 5px;
    }

    h2 {
        margin-top: 20px;
    }

    .role-name {
        width: 200px;
    }
    td{
        text-align: center;
    }

</style>
  