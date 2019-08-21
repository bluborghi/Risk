

document.getElementById("out3").innerHTML = calc2();
calc3(3, 2);


function calc2() {
    var d = new Date();
    var t = d.getTime();
    var tot = 0;
    var losses = [0, 0, 0, 0];
    for (var a1 = 1; a1 <= 6; a1++) {
        for (var a2 = 1; a2 <= 6; a2++) {
            for (var a3 = 1; a3 <= 6; a3++) {
                for (var d1 = 1; d1 <= 6; d1++) {
                    for (var d2 = 1; d2 <= 6; d2++) {
                        for (var d3 = 1; d3 <= 6; d3++) {
                            tot++;
                            var defence = [d1, d2, d3].sort();
                            var attack = [a1, a2, a3].sort();
                            var lossCount = 0;
                            for (var i = 0; i < defence.length; i++) {
                                if (defence[i] >= attack[i]) lossCount++;
                            }
                            losses[lossCount]++;
                        }
                    }
                }
            }
        }
    }
    t = d.getTime() - t;
    return "tot " + tot + "; 3a uccisi " + losses[3] / tot * 100 + "; 2a uccisi " + losses[2] / tot * 100 + "; 1a ucciso " + losses[1] / tot * 100 + "; 0a uccisi " + losses[0] / tot * 100 + "; Time: " + t;

}

function calc3(n_attack, n_defence) {
    var n_min;
    n_attack < n_defence ? n_min = n_attack : n_min = n_defence;
    if (n_min < 1) return;
   
    var a_rolls = getRolls(n_attack, n_min);
    var d_rolls = getRolls(n_defence, n_min);
    
    document.getElementById("out1").innerHTML = a_rolls;
    document.getElementById("out2").innerHTML = d_rolls;

    

}

function getRolls(thrown, needed) {
    var rolls = [];
    if (thrown == 3) {
        for (var r1 = 1; r1 <= 6; r1++)
            for (var r2 = 1; r2 <= 6; r2++)
                for (var r3 = 1; r3 <= 6; r3++) {
                    
                    var roll = [r1, r2, r3].sort(function (a, b) { return b - a });
                    
                    rolls.push(roll);
                }
    }
    else if (thrown == 2) {
        for (var r1 = 1; r1 <= 6; r1++)
            for (var r2 = 1; r2 <= 6; r2++)
                rolls.push([r1, r2].sort(function (a, b) { return b - a }));
    }
    else if (thrown == 1) {
        for (var r1 = 1; r1 <= 6; r1++)
            rolls.push([r1].sort(function (a, b) { return b - a }));
    }

    if (needed < thrown) {
        var needed_rolls = [];
        if (needed == 1) {
            for (var i = 0; i < rolls.length; i++) {
                needed_rolls.push(rolls[i][0]);                
            }
        }
        else if (needed == 2) {
            for (var i = 0; i < rolls.length; i++) {
                needed_rolls[i] = [rolls[i][0], rolls[i][1]];
            }
        }  
        return needed_rolls;
    }

    return rolls;
}

//
function calcChances(attack, defence) {



}
