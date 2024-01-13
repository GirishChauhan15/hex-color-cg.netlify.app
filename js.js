function colors_101(){
    // Creating an array for hex Code
    var hex_color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexCode = "";
    //For Loop 
    for(var i = 0; i < 6; i++){

        var hexIndex = Math.floor(Math.random()*hex_color.length);

        hexCode +=hex_color[hexIndex];

    }
    // Display hex Code into span 
    document.getElementById("hex_code").innerHTML=hexCode;
    // Changing Background 
    document.getElementsByTagName("body")[0].style.background="#" + hexCode;

}