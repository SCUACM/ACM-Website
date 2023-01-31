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