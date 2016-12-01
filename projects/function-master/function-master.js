function objectValues(obj) {
    return Object.values(obj);
}

function keysToString(obj) {
    return Object.keys(obj).join(" ");
} 

function valuesToString(obj) {
    var myArr = [];
    for (var prop in obj) {
        if (typeof obj[prop] ==='string') {
            myArr.push(obj[prop]);
        }
    }
    return myArr.join(" ");
}

function arrayOrObject(arg) {
  if (Array.isArray(arg)) return "array";
  if (typeof arg === 'object') return 'object';
}

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAllWords(stringOfWords) {
    var myArr = stringOfWords.split(' ');
    for (var q = 0; q < myArr.length; q++) {
        myArr[q] = capitalizeWord(myArr[q]);
    }
    return myArr.join(' ');
}

function welcomeMessage(obj) {
    return "Welcome " + capitalizeWord(obj.name) + "!";
}

function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeAllWords(obj.species);
}

function maybeNoises(obj) {
    return obj.noises && (obj.noises.length > 0) ? obj.noises.join(' ') : 'there are no noises';
}

function hasWord(stringOfWords, word) {
   return stringOfWords.includes(word) ? true : false;
}

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    if (obj.friends) {
        return obj.friends.includes(name);
    }
    return false;
}

function nonFriends(name, people) {
    var notFriends = [];
    for (var q = 0; q < people.length; q++){
        if (isFriend(name, people[q]) !== true && people[q].name !== name ){
            notFriends.push(people[q].name);
        }
    }
    //console.log(notFriends);
    return notFriends;
}

function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}

function removeProperties(object, strings) {
    for (var q = 0; q < strings.length; q++) {
        if (Object.keys(object).includes(strings[q])) {
            delete object[strings[q]];
        }
    }
    return object;
}

function dedup(myArray) {
    var dedupedArray = [];
    for (var q = 0; q < myArray.length; q++) {
        if (dedupedArray.includes(myArray[q]) !== true) {
            dedupedArray.push(myArray[q]);
        }
    }
    return dedupedArray;
}