
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

            // Alternative version for skipping the first Weird match:
            // if (tempArray.includes(currentDie) && finalFeaturesArray[6] != 1) {}

            if (tempArray.includes(currentDie)) { // Removes matches, counting them.
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
        console.log('Increasing Fate by ' + matches + ' for matched Feature dice.');
    }

    // Add etheric formulae, if necessary.

    listFormulae();
}

function selectFeatures(currentValue, index) {
    
    if (currentValue > 0) {

        let newFeatureArray;

        switch (index) {
            case 1:
                // Adding Expertise Features.

                newFeatureArray = _.sampleSize(expertiseFeatures, currentValue);

                for (const item in newFeatureArray) {
                    newFeatureArray[item]();
                }

                console.log("Added " + currentValue + " Expertise Features.");
                break;
            case 2:
                // Adding Danger Features.

                newFeatureArray = _.sampleSize(dangerFeatures, currentValue);

                for (const item in newFeatureArray) {
                    newFeatureArray[item]();
                }
                
                console.log("Added " + currentValue + " Nose for Danger Features.");
                break;
            case 3:
                // Adding Well Equipped Features.

                newFeatureArray = _.sampleSize(equippedFeatures, currentValue);

                for (const item in newFeatureArray) {
                    newFeatureArray[item]();
                }
                
                console.log("Added " + currentValue + " Well Equipped Features.");
                break;
            case 4:
                // Adding Tough as Nails Features.

                newFeatureArray = _.sampleSize(toughFeatures, currentValue);

                for (const item in newFeatureArray) {
                    newFeatureArray[item]();
                }
                
                console.log("Added " + currentValue + " Tough as Nails Features.");
                break;
            case 5:
                // Adding Gods Smile Features.

                newFeatureArray = _.sampleSize(godsSmileFeatures, currentValue);

                for (const item in newFeatureArray) {
                    newFeatureArray[item]();
                }
                
                console.log("Added " + currentValue + " Gods Smile Features.");
                break;
            case 6:
                // Adding Weird Features.

                newFeatureArray = _.sampleSize(weirdFeatures, currentValue);

                for (const item in newFeatureArray) {
                    newFeatureArray[item]();
                }
                
                console.log("Added " + currentValue + " Weird Features.");
                break;
            default:
                console.log("Received some bad input from the rollFinalFeatures function. You better check it out!");
        }
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


// Features lists (first six in each array are from the original set):

let expertiseFeatures = [
    function() {
        addFeatureText('Crafty and clever: you were once apprenticed to a locksmith or inventor, or so you claim. Given enough time and the right tools, you can open any lock, and fix (or disable) most mechanical devices.');
    },
    function() {
        addFeatureText('You are a former priest: you know prayers and holy words, and carry a holy symbol. With a Wisdom or Charisma check, you may bring holy influence to bear through your faith or its articles.');
        addEquipment('your holy symbol');
    },
    function() {
        addFeatureText('You were a woodsman, hunter, or woodcutter: you know how to track, hunt, and gather food in the wild.');
    },
    function() {
        if (int < 9) {
            addFeatureText('You know all sorts of weird signals, fonts, cyphers, and codes. Given enough time to study, you can decipher most messages or missives. You are also some kind of idiot savant: stubbornly adamant that you cannot read or write normal language!');
        } else {
            addFeatureText('You know all sorts of weird signals, fonts, cyphers, and codes. Given enough time to study, you can decipher most messages or missives.');
        }
    },
    function() {
        addFeatureText('You know and speak a number of languages. Roll Intelligence when you encounter a new language to see if you can understand it. (You may end up knowing far more languages than your Intelligence suggests.)');
    },
    function() {
        addFeatureText(`You are a former member of a military outfit, with a knowledge of strategy and military protocol. You carry a few things from your past (choose below).`); 
        addEquipment(`choose two military items: fancy armour (medium), a fancy military shield (+2 defense), a gleaming weapon of your choice, a military officer's insignia, the passwords of a local military order`, 'right');
    },
]


let dangerFeatures = [
    function() {
        addFeatureText(`Double-jointed: you have a chance to escape even the most foolproof of manacles or bindings. (+1 Fate, included below)`);
        adjustSomething('fate', 1);
        console.log("Increased Fate by one for being double-jointed.");
    },
    function() {
        addFeatureText(`Your whole life, you've felt like someone or *something* was watching over you, just out of sight. Take +4 to any Fate roll to avoid a deadly danger at the last moment.`)
        addFateBonus(`+4 to avoid danger at the last minute`);
    },
    function() {
        addFeatureText(`You have a heightened sense of smell. (+2 Fate, included below)`);
        adjustSomething('fate', 2);
        console.log('Increased Fate by two for heightened sense of smell.');
    },
    function() {
        addFeatureText(`One or both of your eyes are slightly slitted, like a snake's. (+2 Fate, included below)`);
        adjustSomething('fate', 2);
        console.log('Increased Fate by two for slightly slitted eyes.');
    },
    function() {
        addFeatureText(`You have an unerring inner compass; only magic can confound it. (+1 Fate, included below)`);
        adjustSomething('fate', 1);
        console.log('Increased Fate by one for inner compass.');
    },
    function() {
        addFeatureText(`By touching something and concentrating for a minute, you can sense if it is ensorcelled, enchanted, or tainted by demonic influence.`);
    },
] 

let equippedFeatures = [
    function() {
        addFeatureText(`You are exceptionally well prepared: you are carrying an 'adventurer's pack' with everything you need for traveling and adventuring. 
        Write down any particular items, if you wish, but generally, if you need it, it's in there. In an unusual situation, a Wisdom or Fate roll can be used to settle the matter.`);
        addEquipment(`an adventurer's pack, with all manner of handy things`, 'right');
    },
    function() {
        addFeatureText(`You have the support of someone well-to-do. You have a suit of armour and a sack of silver.`);
        addEquipment('a sack of silver (3d6+20 coins)');
        addEquipment(_.sample(armorTypes), 'right');
    },
    function() {
        addFeatureText(`You have a set of locks, keys, chains, a pair of manacles, and a bear trap, plus meat for bait.`);
        addEquipment('a set of locks, keys, and chains');
        addEquipment('a pair of manacles');
        addEquipment('a bear trap, plus meat for bait', 'right');
    },
    function() {
        addFeatureText(`You ransacked an armoury once. You've brought a small arsenal of weapons with you.`);
        // Add the arsenal!
        addEquipment(_.sample(seriousWeapons['intimidating weapons']), 'right');
        let regweapons = _.sampleSize(seriousWeapons['others'], 2); // An array to make sure there is no duplication.
        addEquipment(regweapons[0], 'right');
        addEquipment(regweapons[1], 'right');
        addEquipment(_.sample(missileWeapons), 'right');
    },
    function() {
        addFeatureText(`You're dressed like a noble. You have a fine horse, beautiful shoes or boots, and a sack of gold coins.`);
        addEquipment('a fine horse');
        addEquipment('a pair of beautiful shoes or boots');
        addEquipment('a sack of gold (2d6+5 coins)', 'right');
    },
    function() {
        addFeatureText(`You're outfitted for war. You start with a military weapon and either a suit of armour or a heavy shield.`);
        addEquipment(_.sample(_.sample(seriousWeapons)), 'right');
        addEquipment('choose: ' + _.sample(armorTypes) + ', or a heavy shield (+3 to Defend, clumsy)');
    },
] 

let toughFeatures = [
    function() {
        addFeatureText(`You are a veteran, seasoned and grizzled. You start with a shield. (+1 Fate, and an additional +1 to rolls against poison or noxious gases, included below)`);
        adjustSomething('fate', 1);
        addFateBonus('+1 against poison or gas');
        console.log('Increased Fate by one for being a veteran.');
        addEquipment('an infantry shield (+2 to Defend)', 'right');
    },
    function() {
        addFeatureText(`You are tremendously hale, with unblemished skin and perfect teeth. (+2 Fate, included below)`);
        adjustSomething('fate', 2);
        console.log('Increased Fate by two for perfect teeth.');
    },
    function() {
        addFeatureText(`You are covered in scars, and either missing an ear, your nose, or a good number of teeth. (+2 Fate, included below)`);
        adjustSomething('fate', 2);
        console.log('Increased Fate by two for scars.');
    },
    function() {
        addFeatureText(`Built like a dwarf: you're a bit short and stout. You're also tough: you take +3 Fate to resist any bodily harm or affliction.`);
        addFateBonus('+3 to resist bodily harm or affliction');
    },
    function() {
        addFeatureText(`You're hard to kill. You are missing an eye, two fingers, or have a club foot (your choice), but you take +4 to any Fate or Constitution roll which could end your life.`);
        addFateBonus(`+4 to avoid death`);
    },
    function() {
        addFeatureText(`Troll blood runs through your veins, they say: take +1 to Fate (included below) and you have advantage on any Constitution rolls related to healing.`);
        adjustSomething('fate', 1);
        console.log('Increased Fate by one for troll blood.');
    },
] 

let godsSmileFeatures = [
    function() {
        addFeatureText(`A noble and ancient bloodline runs through your veins. You may roll Intelligence to see if you recognize any ancient or lost tongue you encounter. (+1 Fate, included below)`);
        adjustSomething('fate', 1);
        console.log('Increased Fate by one for ancient bloodline.');
    },
    function() {
        addFeatureText(`As an infant, you were cursed by a witch. Anything holy or sacred is intensely discomforting to you, like a severe allergy. (+3 Fate, included below)`);
        adjustSomething('fate', 3);
        console.log('Increased Fate by three for witch curse.');
    },
    function() {
        addFeatureText(`You are the only survivor of your family line. (+2 Fate, included below)`);
        adjustSomething('fate', 2);
        console.log('Increased Fate by two for being the last survivor of your family line.');
    },
    function() {
        addFeatureText(`You seem to heal much faster than those around you. Roll Constitution after any fight for a chance to regain 1 hit point. (+1 Fate, included below)`);
        adjustSomething('fate', 1);
        console.log('Increased Fate by one for fast healing.');
    },
    function() {
        addFeatureText(`You share the name of an ancient hero. Your voice is commanding, enchanting, or memorable (your choice). (+2 Fate, included below)`);
        adjustSomething('fate', 2);
        console.log(`Increased Fate by two for a hero's name.`);
    },
    function() {
        addFeatureText(`You are the subject of a prophecy, grim, hopeful, or enigmatic. You have a special affinity for arcane or sacred items or rituals. (+1 Fate, included below)`);
        adjustSomething('fate', 1);
        console.log(`Increased Fate by one for being the subject of a prophecy.`);
    },
] 

let weirdFeatures = [
    function() {
        addFeatureText(`You're an abomination of birth: you have a small set of gills somewhere on your body, allowing you to breathe underwater for up to 10 minutes, or your Constitution in minutes, whichever is greater.`);
    },
    function() {
        addFeatureText(`You're never alone: when you look into a reflective surface, you see *something or someone else*. You can speak with them; no one else can see or hear them, however. Choose one: they know and remember all kinds of things, or they may be able to see through any reflective surfaces nearby.`);
    },
    function() {
        addFeatureText(`You know how to draw a Warding Circle. Ghosts, insects, vermin, and minor spirits will not cross it. For stronger creatures or entities of a supernatural origin, concentrating allows you to sense when they break the circle. The circle must be nearly perfect in shape in order to function. `);
    },
    function() {
        addFeatureText(`You have non-human eyes: slitted and cat-like, they can see in near-darkness.`);
    },
    function() {
        addFeatureText(`Tasting the blood of a creature for the first time gives you a flash of insight into one of its memories. If it's a PC, ask their player what you see.`);
    },
    function() {
        addFeatureText(`You know the name of a powerful demon. With a proper ritual, you may be able to summon it.`);
    },
    function() {
        addFeatureText(`Your ancestors guarded the secrets of life and death. Perform a ritual over a companion, and roll either Wisdom or Charisma. Tell them to roll Constitution. For each successful roll, they regain one hit point. You can only use this on others, and only once per day on any particular person.`);
    },
    function() {
        addFeatureText(`Homunculus: you may disgorge a small creature from your body, but it leaves you weakened. Take 1d6 damage; that's how many hit points it has. If that brings you to 0, you are weak to the point of being unable to stand or walk. When it returns you can consume it: you will know what it experienced and regain hit points equal to its current total, minus one. The creature has limited intelligence, but can obey basic commands.`);
    },
    function() {
        if (int < 9) {
            addFeatureText(`You carry a stone tablet describing a rare and arcane etheric formula. Someone showed you how to follow the instructions therein.`);
        } else {
            addFeatureText(`You carry a stone tablet describing a rare and arcane etheric formula.`);
        }
        howManyFormulae += 1;
        addEquipment('a stone tablet, engraved with arcane patterns');
    },
    function() {
        if (int < 9) {
            addFeatureText(`You carry a heavy scroll case containing the ritual instructions for an arcane etheric formula. Someone showed you how to follow the instructions therein.`);
        } else {
            addFeatureText(`You carry a heavy scroll case containing the ritual instructions for an arcane etheric formula.`);
        }
        howManyFormulae += 1;
        addEquipment('a heavy scroll case, inscribed with runes');
    },
    function() {
        if (int < 9) {
            addFeatureText(`You carry an antique tome describing two rare etheric formulae. Someone showed you how to follow their instructions, but warned you not to use them.`);
        } else {
            addFeatureText(`You carry an antique tome describing two rare etheric formulae. You were warned not to use them.`);
        }
        howManyFlawedFormulae += 2;
        addEquipment('an antique tome, full of arcane scribbling');
    },
    function() {
        if (int < 9) {
            addFeatureText(`You carry a set of bronze plates, engraved with two rare etheric formulae. Someone showed you how to follow their instructions, but warned you not to use them.`);
        } else {
            addFeatureText(`You carry a set of bronze plates, engraved with two rare etheric formulae. You were warned not to use them.`);
        }
        howManyFlawedFormulae += 2;
        addEquipment('a set of bronze plates, scratched with symbols');
    }   
]

