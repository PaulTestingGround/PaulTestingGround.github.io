// For the Taliesin Generator.

// The following functions are used by the generator to determine game mechanics for character creation, 
// with the exception of ability score modifiers, which are in their own file.

// --------------------------------------------------------------------------------


// Basic dice rolling.

function rolld6() {
    let result = _.random(1,6);
    return result;
}

function rollStat() {
    let sum = rolld6() + rolld6() + rolld6();
    return sum;
}

// Get Feature dice (new version).

function getFeatureDice(abilityScore) {
    
    switch(abilityScore) {
        case 3:
        case 4:
            featureDice += 3;
            console.log("Adding 3 Feature dice.");
            break;
        case 5:
        case 6:
            featureDice += 2;
            console.log("Adding 2 Feature dice.");
            break;
        case 7:
        case 8:
            featureDice += 1;
            console.log("Adding 1 Feature die.");
            break;
        default:
            console.log("Not adding any Feature dice.");
    }   
}


// Check whether an additional Feature die is granted.

function determineTotalFeatureDice(featureDice, statsTotal) {
    
    let currentTotal = statsTotal + featureDice * 4.7;

    console.log("This character's stats add up to " + statsTotal + ", or " + currentTotal + " if we add " + (featureDice * 4.7));

    if (currentTotal < 75) {
        addaFeatureDie();
    }
}

function addaFeatureDie() {
    featureDice += 1;
}

// Roll Feature dice, then sort them.

function rollFeatures(numOfFeats) {
    let featureArray = [];
    let i = 0;

    while (i < numOfFeats) {
        featureArray[i] = rolld6();
        i++;
    }
    console.log('These are your rolled feature dice: ' + featureArray)
    return featureArray;
}

function sortFeatDice(featureArray) {

    // Would it make sense to make an array of all the places these should end up?

    let featTypeString = 'featdice';

    for (let featType = 1; featType < 7; featType++) {

        // Check for each number in turn

        console.log("Checking for " + featType + "\'s among rolled Feature dice.");
        
        // Iterate through the whole array for each number.

        for (let i = 0; i < featureArray.length; i++) { 

            if (featureArray[i] == featType) {

                console.log("Found a " + featType + ".");

                countAFeatureDie(featType);

                featTypeString = 'featdice' + (featType);

                document.getElementById(featTypeString).innerText += featType + ',' + '\xa0';
                
                // Attempting to get a picture in there!
                // const diepicture = "<img src="Die6.png" alt='6'></img>"
                // document.getElementById(featTypeString).innerHTML = "<img src="Die6.png" alt='6'></img>"
                // You will have to try this elsewhere!!!
            }
        }

        featTypeString = 'featdice';

    }


}

// This adds Feature dice to the Feature dice array.

function countAFeatureDie(type) {
    featDice[type] += 1; 
    console.log("Adding a die to the Features array. Now the array reads: " + featDice);
}

function cleanFeatDice() {
    
    // Removes extra commas.

    let featTypeString = 'featdice';

    for (let i = 1; i < 7; i++) {

        featTypeString = 'featdice' + i;

        let currentDice = document.getElementById(featTypeString).innerText;

        if (currentDice != '') {
            // Removes final character.:
            currentDice = currentDice.slice(0, -2);
            document.getElementById(featTypeString).innerText = currentDice;
        } 
        
        featTypeString = 'featdice';
    }

}

// Calculate carrying capacity.

function defineLoad(str) {
    
    let strvalue = parseInt(str);

    if (strvalue < 4){
        document.getElementById("load").innerText += " 1";
    }
    if (strvalue > 3 && strvalue < 6){
        document.getElementById("load").innerText += " 2";
    }
    if (strvalue > 5 && strvalue < 9){
        document.getElementById("load").innerText += " 3";
    }
    if (strvalue > 8 && strvalue < 13){
        document.getElementById("load").innerText += " 4";
    }
    if (strvalue > 12 && strvalue < 16){
        document.getElementById("load").innerText += " 5";
    }
    if (strvalue > 15 && strvalue < 18){
        document.getElementById("load").innerText += " 6";
    }
    if (strvalue == 18){
        document.getElementById("load").innerText += " 7";
    }
}

// Determine what Backgrounds are available, and modify the DOM accordingly.

function checkBackgrounds() {

    // Brawler, req Str 11+

    if (str > 10) {
        document.getElementById('backgroundoptions').innerText += '\xa0' + 'Brawler,';
        createBackgroundButton('Brawler');
    }

    // Initiated, req Int 11+

    if (int > 10) {
        document.getElementById('backgroundoptions').innerText += '\xa0' + 'Initiated,';
        createBackgroundButton('Initiated');
    }

    // Marksman, req Wis or Dex 11+

    if (wis > 10 || dex > 10) {
        document.getElementById('backgroundoptions').innerText += '\xa0' + 'Marksman,';
        createBackgroundButton('Marksman');
    }

    // Trained, req Dex 11+

    if (dex > 10) {
        document.getElementById('backgroundoptions').innerText += '\xa0' + 'Trained,';
        createBackgroundButton('Trained');
    }

    // Tough, req Con 11+

    if (con > 10) {
        document.getElementById('backgroundoptions').innerText += '\xa0' + 'Tough,';
        createBackgroundButton('Tough');
    }

    // Chirurgeon?
    // Wilderness Lore, Street Smarts, Cunning Fingers/Tinker/Craft?

    // Last one, Scoundrel, is for everyone.

    document.getElementById('backgroundoptions').innerText += '\xa0' + 'Scoundrel.)';
    createBackgroundButton('Scoundrel');
}

// Generic function to adjust secondary stats. Use for numbers.

function adjustSomething(id, mod) {
    let tempValue = parseInt(document.getElementById(id).innerText);
    tempValue += mod;
    document.getElementById(id).innerText = tempValue;
}