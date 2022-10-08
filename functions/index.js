const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
const { firestore, storage } = require("firebase-admin");
const request = require('request');
const moment = require('moment');
const tz = require('moment-timezone');

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
//exports.sendEventNotifications = functions.pubsub.schedule("every 1 minutes").onRun(((context) => {     

exports.sendEventNotifications = functions
.runWith({ secrets: ["DISCORD_WEBHOOK"] })
.https.onCall( async (data, context) => {

    eventRef = firestore().collection('events')
    
    workshop = await eventRef.where('startDate', '>=', admin.firestore.Timestamp.now()).where('startDate', '<=', (admin.firestore.Timestamp.fromMillis(new Date().getTime() + 60 * 60 * 24 * 1000))).get();

    if (workshop.empty) {
        return "No Data";
    }

    workshop.docs.forEach(async doc => {

        flyer = await admin.storage().bucket().file(doc.data().flyer).download()
        console.log(doc.data())
        var options = {
        'method': 'POST',
        'url': process.env.DISCORD_WEBHOOK,
        'headers': {
            'Cookie': '__cfruid=b5e9fc0de7779450082eb27b683a2ff6812336d2-1665182207; __dcfduid=2dfa93ba2e4411edb4ce6ad324c0a821; __sdcfduid=2dfa93ba2e4411edb4ce6ad324c0a821c8d1b03e2ce1d0f768aa97087236dc2868530756e012ccfdb99832ac8ac12922'
        },
        formData: {
                'content': "**Event Happening Tomorrow! " + doc.data().title + 
                "**\n" + formatDateTime(doc.data()) + 
                "\n" + doc.data().description,
                'flyer': {
                'value': flyer[0],
                'options': {
                    'filename': 'flyer.png',
                    'contentType': null
                }
            }
        }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
                console.log(response.body);
        });        
    })    
    return "done";
});


// Function (created using Vue filters, https://v2.vuejs.org/v2/guide/filters.html) used to format an event's date and time
function formatDateTime(event) {
    if(!event || !event.startDate) return '';
    // If a start date is provided but an end date isn't, return the start date:
    // Format: Oct 1st 5:45 pm
    if(event.startDate && !event.endDate) {
      return moment(event.startDate.toDate()).tz('America/Los Angeles').format('MMM Do YYYY, h:mm a');
    }
    // Format the start and end as dates. Ex: Oct 1st
    const startDate = moment(event.startDate.toDate()).tz('America/Los_Angeles').format('MMM Do, YYYY,');
    const endDate = moment(event.endDate.toDate()).tz('America/Los_Angeles').format('MMM Do, YYYY,');
  
    // Format the start and end as times. Ex: 5:45 pm
    const startTime = moment(event.startDate.toDate()).tz('America/Los_Angeles').format('h:mm a');
    const endTime = moment(event.endDate.toDate()).tz('America/Los_Angeles').format('h:mm a');
  
    if(startDate === endDate) {
      if(startTime === endTime) {
        // If the start and end match exactly, return only the start date. Ex: Oct 1st, 2022, 5:45 pm
        return `${startDate} ${startTime}`
      }
      // If the dates match but the times don't, return the start date and both times. Ex: May 10th, 2022, 5:45 pm - 6:45 pm
      return `${startDate} ${startTime} - ${endTime}`;
    }
    // Otherwise, return the start date and time and end date and time. Ex: Feb 12th, 2022, 10:00 am - Feb 13th, 2022, 12:00 pm
    return `${startDate} ${startTime} - ${endDate} ${endTime}`;  
};