import {db, auth} from './firebase';

/**
 * Creates a link to the SCU map for a location
 * @param {string} location - A string for the location. Examples: SCDI 1302, Locatelli, Zoom
 * @returns {string | null} a URL to the SCU map, or null if the location is not a valid SCU location.
 */
export function getMapLink(location) {
    const buildingCodes = {
        "Alameda": 24,
        "Bellarmine": 133,
        "Benson": 7,
        "Bookstore": 9,
        "Campisi": 12,
        "Casa Italiana": 13,
        "Charney": 232,
        "Cowell": 15,
        "Museum": 17,
        "Dunne": 19,
        "Dowd": 227,
        "Facilities": 22,
        "Finn": 240,
        "Forge": 212,
        "Graham": 205,
        "Guadalupe": 230,
        "Kenna": 33,
        "Daly": 16,
        "Learning Commons": 144,
        "Leavey": 37,
        "Locatelli": 156,
        "Loyola": 117,
        "Lucas": 148,
        "Malley": 39,
        "Mayer Theatre": 40,
        "McLaughlin": 41,
        "Mission Church": 42,
        "Mission Gardens": 85,
        "Music and Dance Facility": 44,
        "Nobili Dining Room": 231,
        "Nobili": 45,
        "O'Connor": 46,
        "Physics Building": 16,
        "Ricard Observatory": 50,
        "Bergin": 8,
        "Heafey": 30,
        "Sanfilippo": 51,
        "Schott Stadium": 114,
        "Shapell Lounge": 95,
        "SCDI": 247,
        "Sobrato": 88,
        "Soccer Training Center": 224,
        "Softball Field": 228,
        "St. Clare": 3,
        "St. Joseph's": 57,
        "Stanton Field": 77,
        "Stevens Stadium Buck Shaw Field": 10,
        "Swig": 54,
        "Tennis Center": 76,
        "The Garage": 241,
        "Villas": 201,
        "Vari": 14,
        "Varsi": 58,
        "Walsh Admin": 55,
        "Walsh": 56
    }
    const buildingList = Object.keys(buildingCodes);
    const splitIndex = location.lastIndexOf(" ");
    if(splitIndex === -1) {
        return null;
    }
    const building = location.substring(0, splitIndex);
    if(buildingList.includes(building)){
    const floor = location.substring(splitIndex + 1);
    if(floor){
        return `https://www.scu.edu/map/location/${buildingCodes[building]}/floors/${floor}`;
    }
    else{
        return `https://www.scu.edu/map/location/${buildingCodes[building]}`;
    }
    }
    return null;
}

export const majorsList = [
    "Computer Science and Engineering",
    "Computer Science",
    "Electrical Engineering",
    "Electrical and Computer Engineering",
    "Web Design and Engineering",
    "Management Information Systems",
    "Mathematics",
    "Bioengineering",
    "Civil, Environmental, and Sustainable Engineering",
    "General Engineering",
    "Mechanical Engineering",
    "Accounting",
    "Accounting & Information Systems",
    "Economics",
    "Finance",
    "Individual Studies",
    "Management & Entrepreneurship",
    "Marketing",
    "Ancient Studies",
    "Anthropology",
    "Art History",
    "Biochemistry",
    "Biology",
    "Chemistry",
    "Child Studies",
    "Classical Studies",
    "Communication",
    "Economics",
    "Engineering Physics",
    "English",
    "Environmental Science",
    "Environmental Studies",
    "Ethnic Studies",
    "Greek Language and Literature",
    "History",
    "Individual Studies",
    "Latin and Greek",
    "Latin Language and Literature",
    "Military Science",
    "Arabic",
    "Chinese",
    "French",
    "German",
    "Italian",
    "Japanese",
    "Spanish",
    "Music",
    "Neuroscience",
    "Philosophy",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Health Science",
    "Religious Studies",
    "Sociology",
    "Studio Art",
    "Theatre and Dance",
    "Women's and Gender Studies",
];

import moment from 'moment'
export function getFormatDateTime(event) {
    if(!event?.startDate) return '';
    // If a start date is provided but an end date isn't, return the start date:
    // Format: Oct 1st 5:45 pm
    if(event.startDate && !event.endDate) {
      return moment(event.startDate.toDate()).format('MMM Do YYYY, h:mm a');
    }
    // Format the start and end as dates. Ex: Oct 1st
    const startDate = moment(event.startDate.toDate()).format('MMM Do, YYYY,');
    const endDate = moment(event.endDate.toDate()).format('MMM Do, YYYY,');
  
    // Format the start and end as times. Ex: 5:45 pm
    const startTime = moment(event.startDate.toDate()).format('h:mm a');
    const endTime = moment(event.endDate.toDate()).format('h:mm a');
  
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
}
export const permsList = [
    "changeRolePerms",
    "changeUserRole",

    "editMyProfile",
    "viewAllProfiles",

    "editMyEvent",

    "acmAddEvent",
    "acmEditEvent",
    "acmDeleteEvent",

    "acmwAddEvent",
    "acmwEditEvent",
    "acmwDeleteEvent",

    "broncosecAddEvent",
    "broncosecEditEvent",
    "broncosecDeleteEvent",

    "aicAddEvent",
    "aicEditEvent",
    "aicDeleteEvent",

    "otherAddEvent",
    "otherEditEvent",
    "otherDeleteEvent",
    
    "viewEvents",
    "canRegister",

    "uploadResume",
    "viewMyResume",
    "viewAllResume",

    "viewProject",
    "addProject",
    "editMyProject",
    "editProject",
    "deleteProject",
];

auth.onAuthStateChanged(async (user) => {
    if (!user) {
        cachedUserPerms = null;
    }
  });

let cachedUserPerms = null;
export async function getUserPerms(user) {
    if(!user) {
        cachedUserPerms = null;
        return null;
    }
    if(cachedUserPerms != null) {
        return cachedUserPerms;
    }

    const defaultRole = "dwhKivN6lb9iFdPVhpf6";
    const scuRole = "Ty3gvdUlg0pedWFFgFYZ";

    const idToken = await user.getIdTokenResult();
    const myRoles = (idToken.claims ?? []).roles ?? [];

    console.log(myRoles);

    myRoles.push(defaultRole);
    const email = user.providerData[0].email;
    if (email.includes("@scu.edu")){
        myRoles.push(scuRole)
    }

    const userPerms = {};
    for(let perm of permsList) {
        userPerms[perm] = false;
    }
    for(let role of myRoles) {
        let values = await db.collection("roles").doc(role).get();
        for(let perm of permsList) {
            userPerms[perm] = userPerms[perm] || values.data()[perm];
        }
    }
    console.log("USER PERMS", userPerms);
    cachedUserPerms = userPerms;
    return userPerms;
}

export const eventTags = {
    "acm": "ACM",
    "acmw": "ACM-W",
    "aic": "AI Collaborate",
    "broncosec": "BroncoSec",
}