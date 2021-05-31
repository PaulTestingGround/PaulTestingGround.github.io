// These functions modify the layout for the character generator.



function createFeaturesButtons() {

    for (i = 1; i < 7; i++) {

        if (featDice[i] > 0) {

            // Create a button.

            let newcolumn = document.createElement('td');

            let newbutton = document.createElement('button');
            let buttontext = document.createTextNode('I\'d like to discard a ' + i + '.');

            newbutton.appendChild(buttontext); // Add text to the button.
            newcolumn.appendChild(newbutton); // Add the button to the column.

            document.getElementById('featurebuttons').appendChild(newcolumn);

            // The button will call 'removeFeatureDie' with the appropriate index.

            let tempscore = i;

            newbutton.onclick = () => { removeFeatureDie(tempscore) };

            console.log("Made a new button to drop a " + i);

        }
    }

    // Create the skip ahead button.

}

function removeFeatureDie(num) {
    featDice[num] -= 1;     // Remove a feature die from the array.
    console.log("Removing a die from category " + num);

    showBackgroundOptions();

    document.getElementById('finalfeatures').innerHTML = "Your Features will be rolled and shown here! Under construction. It will be very exciting, though, I promise! SUPER exciting. If it works. <br><br><br>";

    // Since a die is discarded, clear the setup:

    clearFeaturesSetup();

    // Make a note if there are no Features:

    if (_.sum(featDice) == 0) {
        document.getElementById('finalfeatures').innerHTML = "This character has no special Features, having chosen a Background instead.";
    }
}


function clearFeaturesSetup() {

    // Removes the div element which contains the setup and instructions for Feature dice and Backgrounds.    
    
    let unwantedText = document.getElementById('featuresetup');

    unwantedText.remove();
}

function removeBackgrounds() {
    
    // Removes the Backgrounds section.

    let unwantedSection = document.getElementById('backgrounds');

    unwantedSection.remove();
}

// You will need a function to generate the actual Features. (But how will they modify stats and lists? Each a separate function?)
// Or can they be coded as classes which feed an object and do stuff?



// Creates a button for choosing a Background of 'backgroundtype', adding it to the backgroundButtonsTable.

function createBackgroundButton(backgroundtype) {

    // Create a button.

    let newcolumn = document.createElement('td');

    let newbutton = document.createElement('button');
    let buttontext = document.createTextNode(backgroundtype);
    
    newbutton.appendChild(buttontext); // Add text to the button.
    newcolumn.appendChild(newbutton); // Add the button to the column.

    document.getElementById('backgroundButtons').appendChild(newcolumn);

    // The button will call 'chooseBackground' with the appropriate index.

    newbutton.onclick = () => { chooseBackground(backgroundtype) };

    console.log("Made a new button to choose the " + backgroundtype + ".");
}

// This function displays the available background options (called if the player discards a Feature die).

function showBackgroundOptions() {
    let backgroundsSection = document.getElementById('backgrounds');
    backgroundsSection.style.display = 'block';
}


// This function chooses a background, posts the info, and adjusts relevant stats or lists.

function chooseBackground(backgroundtype) {

    let oldtable = document.getElementById('backgroundButtonsTable');

    switch(backgroundtype) {
        case 'Brawler':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Brawler: you've been in quite a few fights, and you don't hold back. " +
                "You start with an intimidating weapon and your Attack is one point higher (both included below). <br><br><br>";
            // Adjust other stats and fields.
            adjustSomething('attack', 1);
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d6';         
            break;
        case 'Initiated':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Initiated: you apprenticed with an Arcanist, or a Conclave scholar, " +
                "who initiated you into the mysteries of thaumic distortion. You have learned the complex and soul-bending exercise of  " +
                "wresting an eidolon to your will. Your starting hit die is a d4 (included below). <br><br><br>";
            // Adjust other stats and fields.
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.  
            document.getElementById('hitdice').innerText += ', d4';      
            break;
        case 'Marksman':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Marksman: you have an exceptionally steady hand. You start with a missile " +
                "weapon, and when you attack an enemy at a distance, you take +2 to your Attack rating (included below). <br><br><br>";
            // Adjust other stats and fields.
            switch (dex) {
                case 13: case 14: case 15:
                    document.getElementById('attackcommentary').innerText = "+3 with missile weapons";
                    break;
                case 16: case 17:
                    document.getElementById('attackcommentary').innerText = "+4 with missile weapons";
                    break;
                case 18:
                    document.getElementById('attackcommentary').innerText = "+5 with missile weapons";
                    break;
                default:
                    document.getElementById('attackcommentary').innerText = "+2 with missile weapons";
            }
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d6';         
            break;
        case 'Tough':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Tough: you've been wounded before, and you know how to handle it. " +
                "Your starting hit die is a d8 (included below), and you know how to deal with injuries and provide first aid. <br><br><br>";
            // Adjust other stats and fields.
                    // Perhaps there will be an "addEquipment()" function which gets called here. Should it include some bandages and stuff?
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d8'; // Tough character get a larger hit die.      
            break;
        case 'Trained':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Trained: you were trained by a swordmaster or someone similar - " +
                "your footwork is excellent and you know how to weave, parry, and riposte. You start with an elegant weapon, and your  " +
                "Defend is one point higher (both included below). <br><br><br>";
            // Adjust Defend value. 
            adjustSomething('defend', 1);
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d6';         
            break;
        case 'Scoundrel':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Scoundrel: perhaps you were a street urchin, a criminal, or a mendicant. " +
                "You are perfectly at ease on dark streets, in the company of thieves, or even in the fabled flesh markets of Khazangol. You know how to " +
                "locate contacts, find a fence, and identify gang territory. You are also skilled in misdirection, able to create opportunities " +
                "to make items disappear or to pick someone's pockets. You start with a set of files and lockpicks and a knife in your boot. <br><br><br>";
            // Adjust other stats and fields.
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d6';         
            break;
        default:
            console.log("None of the backgrounds were chosen.");
            return; 
    }   
    // Remove the buttons.
    oldtable.remove();
}

// This function activates when someone doesn't discard a Feature die.

function movingOn() {
    // There will lots here eventually!

    document.getElementById('finalfeatures').innerHTML = "Your Features will be rolled and shown here! Under construction. It will be very exciting, though, I promise! SUPER exciting. If it works. <br><br><br>";

    // A function for rolling the Features, mostly. It can be triggered here or when you drop a Feature die.

    clearFeaturesSetup();

    // Since this character hasn't chosen a Background, we add a d6 to their hit dice.

    document.getElementById('hitdice').innerText += ', d6';         
}

// This function rolls up the character's Features.

function rollFinalFeatures() {
    // Call the function to delete the old container.
    // This should add Features to the new one.
}


function addEquipment(item) {
    // Add equipment!
}

function addEthericFormulae(numberAdded) {
    // Add spells!
}
