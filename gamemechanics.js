function rollStat() {
    let sum = _.random(1,6) + _.random(1,6) + _.random(1,6);
    return sum;
}

function strBonuses(str){
    
    switch(str){
        case 13:
        case 14:
        case 15:
            document.getElementById('strCommentary').innerText = "You're a big strong man! +1 damage with serious weapons.";
            break;
        case 16:
        case 17:
            document.getElementById('strCommentary').innerText = "You're mighty! +1 to damage, or +2 with a heavy weapon.";
            break;
        case 18:
            document.getElementById('strCommentary').innerText = "You're incredible! +1 to damage, or +3 with a heavy weapon!";
            break;
        default:
            document.getElementById('strCommentary').innerText = "Your Strength isn't high enough to give you any bonuses.";
    }
}

function getFeatureDice(abilityScore){
    
    switch(abilityScore){
        case 3:
        case 4:
            document.getElementById('strCommentary').innerText = "Ouch! You are weak, but you get 3 Feature dice.";
            break;
        case 5:
        case 6:
            document.getElementById('strCommentary').innerText = "You are weak, but you get 2 Feature dice.";
            break;
        case 7:
        case 8:
            document.getElementById('strCommentary').innerText = "You are a bit out of shape. Get 1 Feature die.";
            break;
        default:
            return;
    }  
 
}

function defineLoad(str){
    
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