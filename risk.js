document.getElementById("out").innerHTML = calc();

function calc() {
    var tot = 0;
    var _3a = 0;
    var _2a1d = 0;
    var _1a2d = 0;
    var _3d = 0;
    for (var a1 = 1; a1<=6; a1++){
        for (var a2 = 1; a2<=a1; a1++){
            for (var a3 = 1; a3<=a2; a1++){
                for (var d1 = 1; d1<=6; a1++){
                    for (var d2 = 1; d2<=d1; a1++){
                        for (var d3 = 1; d3<=d2; a1++){
                            tot++;
                            var a_ko = 0;
                            var d_ko = 0;
                            d1>=a1 ? a_ko++ : d_ko++;
                            d2>=a2 ? a_ko++ : d_ko++;
                            d3>=a3 ? a_ko++ : d_ko++;
                            if (d_ko==3) _3d++;
                            else if (d_ko==2) _1a2d++;
                            else if (d_ko==1) _2a1d++;
                            else _3a++;
                        }
                    }
                }
            }
        }
    }
    return "tot "+tot+"; 3a uccisi "+_3a+"; 2a uccisi "+_2a1d+"; 1a ucciso "+_1a2d+"; 0a uccisi "+_3d+";";

}