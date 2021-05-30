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

    // Since a die is discarded, clear the setup.

    clearFeaturesSetup();
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
            document.getElementById('backgrounddetails').innerHTML = "You are a Brawler. You hit people. <br><br><br>";
            // Adjust other stats and fields.
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d6';         
            break;
        case 'Initiated':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Ooh, yeah! Spooky! But actually you don't know shit. <br><br><br>";
            // Adjust other stats and fields.
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.  
            document.getElementById('hitdice').innerText += ', d4'; // Initiated characters have a smaller hit die.       
            break;
        case 'Marksman':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Yeah, you're all sharp and stuff. Hope you know how to run! <br><br><br>";
            // Adjust other stats and fields.
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d6';         
            break;
        case 'Tough':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "It's hard to hurt you. But sure is fun to try! <br><br><br>";
            // Adjust other stats and fields.
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d8'; // Tough character get a larger hit die.      
            break;
        case 'Trained':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "You grow up rich or something? Yeah, you sure turned out well... <br><br><br>";
            // Adjust Defend value..
            let defendValue = parseInt(document.getElementById('defend').innerText);
            defendValue++;
            document.getElementById('defend').innerText = defendValue;
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            document.getElementById('hitdice').innerText += ', d6';         
            break;
        case 'Scoundrel':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "You are a Scoundrel. Seriously, you suck. Big Time. <br><br><br>";
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

