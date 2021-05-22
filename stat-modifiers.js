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
            break;
        case 16: case 17:
            document.getElementById('wisCommentary').innerText = "The years have taught you how to steel your mind against curse or sorcery (+2, under Fate).";
            break;
        case 18:
            document.getElementById('wisCommentary').innerText = "Patience and hardship have made your mind a fortress against curse or sorcery (+3, under Fate).";
            break;
        default:
            document.getElementById('wisCommentary').innerText = '';
    }
}