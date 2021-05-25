// Basic dice rolling.

function rolld6() {
    let result = _.random(1,6);
    return result;
}

function rollStat() {
    let sum = rolld6() + rolld6() + rolld6();
    return sum;
}

// Get Feature dice from a stat. (Old version.)

/* function getFeatureDice(abilityScore) {
    
    switch(abilityScore){
        case 3:
        case 4:
            document.getElementById('featdice').innerText = parseInt(document.getElementById('featdice').innerText) + 3;
            console.log("Adding 3 Feature dice.");
            break;
        case 5:
        case 6:
            document.getElementById('featdice').innerText = parseInt(document.getElementById('featdice').innerText) + 2;
            console.log("Adding 2 Feature dice.");
            break;
        case 7:
        case 8:
            document.getElementById('featdice').innerText = parseInt(document.getElementById('featdice').innerText) + 1;
            console.log("Adding 1 Feature die.");
            break;
        default:
            console.log("Not adding any Feature dice.");
    }   
}
 */

// Get Feature dice (new version).

function getFeatureDice(abilityScore) {
    
    switch(abilityScore){
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

        for(let i = 0; i < featureArray.length; i++) { 

            if(featureArray[i] == featType) {

                console.log("Found a " + featType + ".");

                featTypeString = 'featdice' + (featType);

                console.log(featTypeString);

                document.getElementById(featTypeString).innerText += featType + ',' + '\xa0';

                // You'll also need to increment the Features array (create it globally).
            }
        }

        featTypeString = 'featdice';

    }


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
        document.getElementById("load").innerText = "1";
    }
    if (strvalue > 3 && strvalue < 6){
        document.getElementById("load").innerText = "2";
    }
    if (strvalue > 5 && strvalue < 9){
        document.getElementById("load").innerText = "3";
    }
    if (strvalue > 8 && strvalue < 13){
        document.getElementById("load").innerText = "4";
    }
    if (strvalue > 12 && strvalue < 16){
        document.getElementById("load").innerText = "5";
    }
    if (strvalue > 15 && strvalue < 18){
        document.getElementById("load").innerText = "6";
    }
    if (strvalue == 18){
        document.getElementById("load").innerText = "7";
    }
}