const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdmin = functions.https.onCall((data, context) => {
    const uid = data.uid;
    const isAdmin = context.auth.token.admin || false;
    if (!isAdmin) {
        return {message: "You must be an admin to add another admin user"};
    }
    if (!uid) {
        return {message: "Please pass a UID to the function"};
    }
    return admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
        return {message: "User added as admin"};
    });
});
exports.removeAdmin = functions.https.onCall( (data, context) => {
    const uid = data.uid;
    const isAdmin = context.auth.token.admin || false;
    if (!isAdmin) {
        return {message: "You must be an admin to remove another admin user"};
    }
    if (!uid) {
        return {message: "Please pass a UID to the function"};
    }
    return admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
        return {message: "User removed as admin"};
    });
});
