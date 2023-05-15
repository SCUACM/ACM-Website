/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {firestore} = require("firebase-admin");
const request = require("request");
const moment = require("moment");
// eslint-disable-next-line no-unused-vars
const {tz} = require("moment-timezone");
const {App} = require("@slack/bolt");

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
exports.getEventAttendance = functions.https.onCall( async (data, context) => {
    const eventId = data.id;
    const isAdmin = context.auth.token.admin || false;
    if (!isAdmin) {
        return {message: "You must be an admin to see event statistics"};
    }
    if (!eventId) {
        return {message: "Please pass an event id to the function"};
    }

    const regRef = firestore().collection("registrations");

    // const eventID = eventRef.where("id","==",data.eventID);
    const registrations = await regRef.where("event", "==", eventId).count().get();

    return registrations.data().count;
});

exports.getUserAttendance = functions.https.onCall( async (data, context) => {
    const userId = data.id;
    const auth = context.auth;
    if (!auth) {
        return {message: "You must be logged in to call this function", code: 401};
    }

    const regRef = firestore().collection("registrations");

    const attRef = await regRef.where("uid", "==", userId).count().get();
    return attRef.data().count;
});

/* eslint-disable */

// pubsub.schedule("21 21 * * *").onRun((async (context) => {
// .onRun(( async (context) => {
// https.onCall( async (data, context) => {
exports.sendEventNotifications = functions
.runWith({secrets: ["notificationSecrets"]})
.pubsub.schedule("0 17 * * *").onRun((async (context) => {
    let secretsString = process.env.notificationSecrets;
    secretStrings = secretsString.replace("\\\"","")
    const secrets = JSON.parse(secretStrings);
    const discordWebhook = secrets.DISCORD_WEBHOOK;
    const slackBotToken = secrets.SLACK_BOT_TOKEN;
    const slackAppToken = secrets.SLACK_APP_TOKEN;
    const slackSigningSecret = secrets.SLACK_SIGNING_SECRET;
    const slackGeneralChannel = "C0LBTLUV8";
    return await sendEventMessages(discordWebhook, slackBotToken, slackAppToken, slackSigningSecret, slackGeneralChannel);
}));

/* eslint-disable */
    
exports.sendEventNotificationsTest = functions.runWith({secrets: ["notificationSecrets"]})
.https.onCall( async (data, context) => {
    //console.log("notificationSecrets: " + JSON.stringify(process.env.notificationSecrets))
    let secretsString = process.env.notificationSecrets;
    secretStrings = secretsString.replace("\\\"","")
    const secrets = JSON.parse(secretStrings);
    const discordWebhook = secrets.DISCORD_WEBHOOK_TEST;
    const slackBotToken = secrets.SLACK_BOT_TOKEN;
    const slackAppToken = secrets.SLACK_APP_TOKEN;
    const slackSigningSecret = secrets.SLACK_SIGNING_SECRET;
    const slackTestChannel = "C040EKTF2N6";
    //discordWebhook = "https://discord.com/api/webhooks/1026626552466788392/b1sO4oSkcxLC0dFxlR2ZiK-OCsiW9GrICpeSSYwCRTCbeEiMk4N2x4MBUyJtospsj__G";
    return await sendEventMessages(discordWebhook, slackBotToken, slackAppToken, slackSigningSecret, slackTestChannel);
});
    
async function sendEventMessages(discordWebhook ,slackBotToken, slackAppToken,slackSigningSecret, slackChannel){
    const eventRef = firestore().collection("events");

    // Initialize Slack App
    const app = new App({
        token: slackBotToken,
        signingSecret: slackSigningSecret,
        socketMode: true,
        appToken: slackAppToken,
    });
    // Get upcoming events
    var workshop = await eventRef.where("startDate", ">=", admin.firestore.Timestamp.fromMillis(new Date().getTime() + 60 * 60 * 7 * 1000)).where("startDate", "<=", (admin.firestore.Timestamp.fromMillis(new Date().getTime() + 60 * 60 * (24+7) * 1000))).orderBy("startDate", "asc").get();// eslint-disable-line

    if (workshop.empty) {
        return "No Data";
    }

    // Send Messages
    for (let index = 0; index < workshop.docs.length; ++index) {
        const doc = workshop.docs[index];
        var hasFlyer = false;
        if (doc.data().flyer) {
            hasFlyer = true;
            var flyer = await admin.storage().bucket().file(doc.data().flyer).download();
        }
        console.log(doc.data() + "\n\n\n");

        const slackTitle = "*Event Happening Tomorrow! " + doc.data().title + "*";
        const discordTitle = "<@&1074916982748614758> **Event Happening Tomorrow! " + doc.data().title + "**";

        const messageBody = "\n" + formatDateTime(doc.data()) +
        "\n" + doc.data().description;

        // Send message to Slack
        const channel = slackChannel;
        if (hasFlyer) {
            var slackResult = await app.client.files.upload({
                channels: channel,
                initial_comment: slackTitle + messageBody,
                file: flyer[0],
            });
        } else {
            var slackResult = await app.client.chat.postMessage({
                channels: channel,
                text: slackTitle + messageBody,
            });
        }

        // Send message to Discord
        let formdata = {
            "content": discordTitle + messageBody,
        };
        if (hasFlyer) {
            formdata = {
                ...formdata,
                "flyer": {
                    "value": flyer[0],
                    "options": {
                        "filename": "flyer.png",
                        "contentType": null,
        }}};
}
        await request({
            "method": "POST",
            "url": discordWebhook,
            "formData": formdata,
            }, function(error, response) {
            if (error) throw new Error(error);
                console.log(response.body);
        });
        await slackResult;
    }
    return "done";
}

// Function (created using Vue filters, https://v2.vuejs.org/v2/guide/filters.html) used to format an event's date and time
function formatDateTime(event) {
    if (!event || !event.startDate) return "";
    // If a start date is provided but an end date isn't, return the start date:
    // Format: Oct 1st 5:45 pm
    if (event.startDate && !event.endDate) {
      return moment(event.startDate.toDate()).tz("America/Los Angeles").format("MMM Do YYYY, h:mm a");
    }
    // Format the start and end as dates. Ex: Oct 1st
    const startDate = moment(event.startDate.toDate()).tz("America/Los_Angeles").format("MMM Do, YYYY,");
    const endDate = moment(event.endDate.toDate()).tz("America/Los_Angeles").format("MMM Do, YYYY,");

    // Format the start and end as times. Ex: 5:45 pm
    const startTime = moment(event.startDate.toDate()).tz("America/Los_Angeles").format("h:mm a");
    const endTime = moment(event.endDate.toDate()).tz("America/Los_Angeles").format("h:mm a");

    if (startDate === endDate) {
      if (startTime === endTime) {
        // If the start and end match exactly, return only the start date. Ex: Oct 1st, 2022, 5:45 pm
        return `${startDate} ${startTime}`;
      }
      // If the dates match but the times don't, return the start date and both times. Ex: May 10th, 2022, 5:45 pm - 6:45 pm
      return `${startDate} ${startTime} - ${endTime}`;
    }
    // Otherwise, return the start date and time and end date and time. Ex: Feb 12th, 2022, 10:00 am - Feb 13th, 2022, 12:00 pm
    return `${startDate} ${startTime} - ${endDate} ${endTime}`;
}

