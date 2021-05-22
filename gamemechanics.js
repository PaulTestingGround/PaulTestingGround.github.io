// Basic dice rolling.

function rolld6() {
    let result = _.random(1,6);
    return result;
}

function rollStat() {
    let sum = rolld6() + rolld6() + rolld6();
    return sum;
}

// Get Feature dice from a stat.

function getFeatureDice(abilityScore){
    
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

// Check whether an additional Feature die is granted.

function determineTotalFeatureDice(featureDice, statsTotal){
    
    let currentTotal = statsTotal + featureDice * 4.7;

    console.log("This character's stats add up to " + statsTotal + ", or " + currentTotal + " if we add " + (featureDice * 4.7));

    if (currentTotal < 75){
        document.getElementById('featdice').innerText = parseInt(document.getElementById('featdice').innerText) + 1;
        console.log("This character gets one additional Feature die.");
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