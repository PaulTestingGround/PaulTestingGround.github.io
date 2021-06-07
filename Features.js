
// This document includes the Generator's largest function: the one which generates Features for the character, and
// then adjusts any relevant aspects of the sheet.

// The first six Features of each category are the original entries; additional Features will be added below.


function rollFinalFeatures(diceArray) {

    let matches = 0;
    let finalFeaturesArray = [0,0,0,0,0,0,0];

    // Basic loop. Goes through indexes 1 through 6.
    
    for (i = 1; i < 7; i++) {

        let tempArray = [];
        
        while (diceArray[i] > 0) {
            
            currentDie = rolld6();

            if (tempArray.includes(currentDie) && finalFeaturesArray[6] != 1) { // Removes matches, counting them. (&& Skips first Weird match.)
                matches++;
                console.log("Found a match in category " + i + ", so Fate score bonus is now a +" + matches);
            } else { // For each unique die value, counts one.
                tempArray.push(currentDie);
                finalFeaturesArray[i] += 1;
                console.log("There are now " + finalFeaturesArray[i] + " Features of category " + i + ".");
            }
            diceArray[i] -= 1; // Go to the next die.
        }
    }

    console.log("Your final Features array looks like this: " + finalFeaturesArray);

    finalFeaturesArray.forEach(selectFeatures);

    // Last thing is to generate the Fate bonus from matches.

    if (matches > 0) {
        addFeatureText('You are a favourite of the fates, born lucky, or blessed by the gods. Your Fate score is higher than most.');
        adjustSomething('fate', matches); // Increase the base Fate score appropriately.
    }
}

function selectFeatures(currentValue, index) {
    
    if (currentValue > 0) {

        switch (index) {
            case 1:
                // expertiseFeatures(currentDie);
                // This is going to _.sampleSize Expertise Features - _.sampleSize(theRightFeatureArray, currentValue). 
                // Each of those is a function which calls addFeatureText and whatever else it needs to do.
                testFunction(currentValue, '"Particular Expertise"');
                console.log("Those are the Expertise (1) Features.");
                break;
            case 2:
                // dangerFeatures(currentDie);
                testFunction(currentValue, '"Nose for Danger"');
                console.log("Those are the Danger (2) Features.");
                break;
            case 3:
                // equippedFeatures(currentDie);
                testFunction(currentValue, '"Well Equipped"');
                console.log("Those are the Well Equipped (3) Features.");
                break;
            case 4:
                // toughFeatures(currentDie);
                testFunction(currentValue, '"Tough"');
                console.log("Those are the Tough (4) Features.");
                break;
            case 5:
                // godsSmileFeatures(currentDie);
                testFunction(currentValue, '"Gods Smile"');
                console.log("Thoseare the Gods Smile (5) Features.");
                break;
            case 6:
                // weirdFeatures(currentDie);
                testFunction(currentValue, '"Weird"');
                console.log("Those are the Weird (6) Features.");
                break;
            default:
                console.log("Could not figure out which Feature table to roll on.");
        }
    }
    
}

function testFunction(howMany, variety) {

    // This represents what the "add Features" functions will do, ultimately.

    for (i = 0; i < howMany; i++) {
        console.log(" - Adding a Feature of the " + variety + " variety.");
    }
    
}


// Adds the text of a new Feature (but not other adjustments). Called by each individual Feature function.

function addFeatureText(inputtext) {

    let newEntry = document.createElement('LI');
    let newEntryText;

    if (inputtext == undefined) {
        // Catch issues.
        console.log("No Feature text was passed.");
    } else {
        newEntryText = document.createTextNode(inputtext);
    }

    newEntry.appendChild(newEntryText);

    document.getElementById('finalfeatureslist').appendChild(newEntry);
}


// Features are functions contained within an array.

// Should they be one array of everything, or one array for each Features type? Hmmm.
// I think that they will not need to take any input, so you can write them inside the array.

let FEATUREFUNCTIONS = [
    function expertiseFeatures() {
        // Do some stuff.
    },
    
]

let arrayofFeatureFunctions = [
    function() {

    },
    // Or just
    function() {
        // Some stuff here.
    }
]

let arrayOfFunction = [
    function() {
        down.innerHTML = "Inside First function";
    },
      
    function() {
        down.innerHTML = "Inside Second function";
    },
      
    function() {
        down.innerHTML = "Inside Third function";
    }     
]


// Or:

let EXPERTISEFEATURES = [
    function firstExpertiseFeature() {
    // let expertiseFeatures = () => {
        // Do some stuff - not at all sure why this doesn't work...
    },
]


function dangerFeatures(subArray) {

}

function equippedFeatures(subArray) {

}

function toughFeatures(subArray) {

}

function godsSmileFeatures(subArray) {

}

function weirdFeatures(subArray) {

}

// Old stuff.

let FEATURES = {
    'A most particular expertise': [
        'Crafty and clever', 
        'Former priest',
        'Woodsman',
        'Cypherer',
        'Languages',
        'Former military'],
    'A nose for danger': [
        'Double-jointed',
        'Something was watching you',
        'Heightened sense of smell',
        'Slitted eyes',
        'Inner compass',
        'Demon touch'],
    'Well equipped': [
        'You have everything you need for adventuring',
        'You have the support of someone well-to-do',
        'You have a set of locks, keys, and manacles',
        'You ransacked an armoury once',
        'You are dressed like a noble',
        'You are outfitted for war'],
    'Tough as Nails': [
        'Hard cock'],
    'The Gods Smile Upon You': [
        'Smiling at the size of your tits'],
    'Touched by the Beyond': [
        'weird shit',
        'weirder still'],
    'Beyond Weird': [
        'homunculus and shit',
        'lots of formulae']
}