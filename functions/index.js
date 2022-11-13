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
    // const isAdmin = context.auth.token.admin || false;
    // if (!isAdmin) {
    //     return {message: "You must be an admin to see event statistics"};
    // }
    if (!eventId) {
        return {message: "Please pass an event id to the function"};
    }

    const regRef = firestore().collection("registrations");

    // const eventID = eventRef.where("id","==",data.eventID);
    const registrations = await regRef.where("event", "==", eventId).count().get();

    return registrations.data().count;
});

/* eslint-disable */

// pubsub.schedule("21 21 * * *").onRun((async (context) => {
// .onRun(( async (context) => {
// https.onCall( async (data, context) => {
exports.sendEventNotifications = functions
.runWith({secrets: ["DISCORD_WEBHOOK", "SLACK_BOT_TOKEN", "SLACK_APP_TOKEN", "SLACK_SIGNING_SECRET"]})
.pubsub.schedule("0 17 * * *").onRun((async (context) => {
    const eventRef = firestore().collection("events");

    // Initialize Slack App
    const app = new App({
        token: process.env.SLACK_BOT_TOKEN,
        signingSecret: process.env.SLACK_SIGNING_SECRET,
        socketMode: true,
        appToken: process.env.SLACK_APP_TOKEN,
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
        const discordTitle = "**Event Happening Tomorrow! " + doc.data().title + "**";

        const messageBody = "\n" + formatDateTime(doc.data()) +
        "\n" + doc.data().description;

        // Send message to Slack
        const channel = "C0LBTLUV8";
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
            "url": process.env.DISCORD_WEBHOOK,
            "formData": formdata,
            }, function(error, response) {
            if (error) throw new Error(error);
                console.log(response.body);
        });
        await slackResult;
    }
    return "done";
}));

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
