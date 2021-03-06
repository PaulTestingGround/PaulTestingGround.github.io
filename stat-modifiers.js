// This file contains functions used to determine modifiers from each stat.

// For the Taliesin Generator.



// Strength

function strBonuses(str){
    
    switch(str){
        case 3: case 4: case 5:
            document.getElementById('strCommentary').innerText = "You are very young, tiny, or feeble. You can't carry much.";
            break;
        case 13: case 14: case 15:
            document.getElementById('strCommentary').innerText = "You're quite strong. +1 to damage with serious weapons.";
            break;
        case 16: case 17:
            document.getElementById('strCommentary').innerText = "You're mighty! +1 to damage, or +2 with a heavy weapon.";
            break;
        case 18:
            document.getElementById('strCommentary').innerText = "You're incredible! +1 to damage, or +3 with a heavy weapon!";
            break;
        default:
            document.getElementById('strCommentary').innerText = '';
    }
}

// Intelligence

function intBonuses(int){
    
    switch(int){
        case 3: case 4: case 5: case 6: case 7: case 8:
            document.getElementById('intCommentary').innerText = "You never learned to read or write.";
            break;
        case 9: case 10:
            break;
        case 11: 
            document.getElementById('intCommentary').innerText = "There's a chance you know a second language (roll when it comes up).";
            break;
        case 12: case 13: 
            document.getElementById('intCommentary').innerText = "You speak two languages.";
            break;
        case 14: case 15:
            document.getElementById('intCommentary').innerText = "You speak three languages.";
            break;
        case 16: case 17:
            document.getElementById('intCommentary').innerText = "You speak four languages!";
            break;
        case 18:
            document.getElementById('intCommentary').innerText = "You speak five languages!";
            break;
        default:
            document.getElementById('intCommentary').innerText = '';
    }
}

// Wisdom

function wisBonuses(wis){
    
    switch(wis){
        case 3: case 4: case 5: case 6:
            document.getElementById('wisCommentary').innerText = "You don't know how to ride a horse, or how to provide first aid.";
            break;
        case 13: case 14: case 15:
            document.getElementById('wisCommentary').innerText = "The years have taught you how to steel your mind against curse or sorcery. (+1 to Fate, included below)";
            addFateBonus('+1 against curse or sorcery');
            break;
        case 16: case 17:
            document.getElementById('wisCommentary').innerText = "The years have taught you how to steel your mind against curse or sorcery. (+2 to Fate, included below)";
            addFateBonus('+2 against curse or sorcery');
            break;
        case 18:
            document.getElementById('wisCommentary').innerText = "Patience and hardship have made your mind a fortress against curse or sorcery. (+3 to Fate, included below)";
            addFateBonus('+3 against curse or sorcery');
            break;
        default:
            document.getElementById('wisCommentary').innerText = '';
    }
}

// Dexterity

function dexBonuses(dex){
    
    switch(dex){
        case 3: case 4: case 5: case 6:
            document.getElementById('dexCommentary').innerText = "You don't know how to swim.";
            break;
        case 13: case 14: case 15:
            document.getElementById('dexCommentary').innerText = "You are quick and nimble. (+1 with missile weapons, included below)";
            document.getElementById('attackcommentary').innerText = "+1 with missile weapons";
            break;
        case 16: case 17:
            document.getElementById('dexCommentary').innerText = "You have the reflexes of a cat. (+2 with missile weapons, +1 to defend, included below)";
            document.getElementById('attackcommentary').innerText = "+2 with missile weapons";
            adjustSomething('defend', 1);
            break;
        case 18:
            document.getElementById('dexCommentary').innerText = "You are incredible! (+3 with missile weapons, +2 to defend, included below)";
            document.getElementById('attackcommentary').innerText = "+3 with missile weapons";
            adjustSomething('defend', 2);
            break;
        default:
            document.getElementById('dexCommentary').innerText = '';
    }
}

// Constitution

function conBonuses(con){
    
    switch(con){
        case 3: case 4: case 5: 
            document.getElementById('conCommentary').innerText = 'You are old, frail, or sickly.';
            break;
        case 6: case 7: case 8: case 9:
            // Your Con die is a d4.
            document.getElementById('hitdice').innerText += ', d4';
            break;
        case 10: case 11: case 12: case 13:
            // Your Con die is a d6.
            document.getElementById('hitdice').innerText += ', d6';
            break;
        case 14: case 15: case 16:
            // Your Con die is a d8. 
            document.getElementById('hitdice').innerText += ', d8';   
            break;
        case 17: case 18:
            // Your Con die is a d10.
            document.getElementById('hitdice').innerText += ', d10';
            break;
        default:
            document.getElementById('conCommentary').innerText = '';
    }
}

// Charisma

function chaBonuses(cha){
    
    switch(cha){
        case 3: case 4: case 5:
            document.getElementById('chaCommentary').innerText = 'You are fundamentally off-putting; absent special circumstances,' + 
            ' no one will ever be loyal to you.';   
            break;           
        case 6: case 7: case 8:
            // document.getElementById('chaCommentary').innerText = 'You have trouble winning others over: -1 to Reaction rolls.';   
            break; 
        case 13: case 14: case 15:
            document.getElementById('chaCommentary').innerText = 'Your presence affects people: +1 to Reaction rolls.';   
            break;
        case 16: case 17:
            document.getElementById('chaCommentary').innerText = 'You are truly memorable, exceptional: +2 to Reaction rolls.';  
            break;
        case 18:
            document.getElementById('chaCommentary').innerText = 'Your presence lights up the souls around you: +3 to Reaction rolls.';  
            break;
        default:
            document.getElementById('chaCommentary').innerText = '';  
    }
}