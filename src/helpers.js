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
    console.log(location,splitIndex,building);
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