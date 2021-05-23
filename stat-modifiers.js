// Determining bonuses from each stat.

// Strength

function strBonuses(str){
    
    switch(str){
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
        case 13: case 14: case 15:
            document.getElementById('wisCommentary').innerText = "The years have taught you how to steel your mind against curse or sorcery (+1, under Fate).";
            document.getElementById('fatecommentary').innerText = "+1 against curse or sorcery";
            break;
        case 16: case 17:
            document.getElementById('wisCommentary').innerText = "The years have taught you how to steel your mind against curse or sorcery (+2, under Fate).";
            document.getElementById('fatecommentary').innerText = "+2 against curse or sorcery";
            break;
        case 18:
            document.getElementById('wisCommentary').innerText = "Patience and hardship have made your mind a fortress against curse or sorcery (+3, under Fate).";
            document.getElementById('fatecommentary').innerText = "+3 against curse or sorcery";
            break;
        default:
            document.getElementById('wisCommentary').innerText = '';
    }
}

// Dexterity

function dexBonuses(dex){

    // Unfinished.
    
    switch(dex){
        case 3: case 4: case 5: case 6: case 7: case 8:
            document.getElementById('dexCommentary').innerText = "You never learned to read or write.";
            break;
        case 9: case 10:
            break;
        case 11: 
            document.getElementById('dexCommentary').innerText = "You never learned to read or write.";
            break;
        case 12: case 13: 
            document.getElementById('dexCommentary').innerText = "You never learned to read or write.";
            break;
        case 14: case 15:
            document.getElementById('dexCommentary').innerText = "You never learned to read or write.";
            break;
        case 16: case 17:
            document.getElementById('dexCommentary').innerText = "You never learned to read or write.";
            break;
        case 18:
            document.getElementById('dexCommentary').innerText = "You never learned to read or write.";
            break;
        default:
            document.getElementById('intCommentary').innerText = '';
    }
}

// Constitution

function conBonuses(con){
    
    switch(con){
        case 3: case 4: case 5: 
            break;
        case 6: case 7: case 8:
            // Your Con die is a d4.
            document.getElementById('hitdice').innerText += ', d4';
            break;
        case 9: case 10: case 11: case 12: 
            // Your Con die is a d6.
            document.getElementById('hitdice').innerText += ', d6';
            break;
        case 13: case 14: case 15:
            // Your Con die is a d8. 
            document.getElementById('hitdice').innerText += ', d8';   
            break;
        case 16: case 17:
            // Your Con die is a d10.
            document.getElementById('hitdice').innerText += ', d10';
            break;
        case 18:
            // Your Con die is a d12.
            document.getElementById('hitdice').innerText += ', d12';
            break;
        default:
            document.getElementById('conCommentary').innerText = '';
    }
}