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
            newbutton.onclick = () => { showBackgroundOptions() };

            console.log("Made a new button to drop a " + i);

        }
    }

    // Create the skip ahead button.

}

function removeFeatureDie(num) {
    featDice[num] -= 1;     // Remove a feature die from the array.
    console.log("Removing a die from category " + num);
}


function removeFeatureChoiceText() {

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

// You will also need a function for choosing a Background.


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

    console.log("CHOOSING BACKGROUND NOW!!!");

    let oldtable = document.getElementById('backgroundButtonsTable');

    switch(backgroundtype) {
        case 'Brawler':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "You are a Brawler. You hit people. <br><br><br>";
            // Adjust other stats and fields.
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.         
            break;
        case 'Initiated':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Ooh, yeah! Spooky! But actually you don't know shit. <br><br><br>";
            // Adjust other stats and fields.
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.         
            break;
        case 'Marksman':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "Yeah, you're all sharp and stuff. Hope you know how to run! <br><br><br>";
            // Adjust other stats and fields.
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            break;
        case 'Tough':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "It's hard to hurt you. But sure is fun to try! <br><br><br>";
            // Adjust other stats and fields.
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.      
            break;
        case 'Trained':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "You grow up rich or something? Yeah, you sure turned out well... <br><br><br>";
            // Adjust other stats and fields.
                    // Perhaps there will be an "addEquipment()" function which gets called here.
                    // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            break;
        case 'Scoundrel':
            // New description replaces instruction text.
            document.getElementById('backgrounddetails').innerHTML = "You are a Scoundrel. Seriously, you suck. Big Time. <br><br><br>";
            // Adjust other stats and fields.
                // Perhaps there will be an "addEquipment()" function which gets called here.
                // And an "add Fate bonuses" one, which checks if there is already something, then adds a "," and the new bonus.
            break;
        default:
            console.log("None of the backgrounds were chosen.");
            return; 
    }   
    // Remove the buttons.
    oldtable.remove();
}