// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘


/*
isAdmin
parameters: user object

user = {

firstNAme: String
lastName: String
userRole: String
}

return boolean - true or false

(userRole === ADMIN)
*/

function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    }else {
        return false;
    }
}

let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
};

let user2 = {
    firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'USER_MANAGER'
}

// console.log(isAdmin(user1));
// console.log(isAdmin(user2));

/*

Giving the object i have to return certain name & last name as email



*/

function getEmail(email){
    email.firstName
    email.lastName

        let fullEmail = email.firstName + "." + email.lastName +"@codeimmersives.com"

            return fullEmail.toLowerCase()
}

/*

write a function that returns the amount of values under the property of song

*/

function getPlaylistLength(playlist){

    return playlist.songs.length
}

/************** */

function getHardestHomework(homeworkArray){
    let lowestHw = homeworkArray[0];
    if(homeworkArray.length === 0){
        return "";
    }
    for(let i = 0; i < homeworkArray.length; i++){
        if(homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
        }
    }
        return lowestHw.name;
}
console.log(getHardestHomework([""]))
console.log(getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 1 },
]))


/*
[parameters:
namesArray: strings
numbersArrayP: strings
return: object
*/
function createPhonebook(namesArray, numbersArray){
    let phonebook = {};
    for(let i = 0; i <  namesArray.length; i++){
        phonebook[namesArray[i]] = numbersArray[i]
    }
    return phonebook
}
// console.log(createPhonebook(['jimothy', 'Maria', 'karl'],
//  ['123-456-789', '000-000-000','999-888-7766']
// ));

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};