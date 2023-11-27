//console log just to test that your JS is linked properly
console.log("working?");

//create a variable for the number of buildings in the city and start it at zero
var buildings = 0;
var material=0;

//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById('city').innerHTML="You have " +buildings+" buildings in your city";
//Functions -- 
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
    //-- Print a message to teh console
    //--Add one to the variable that is tracking the number of buildings
    //---Print a message with the number of buildings
    //---Place an image graphic into the other div

function buildOne(){
    console.log("in the function buildOne");
    buildings++;
    document.getElementById('city').innerHTML="You have " +buildings+" buildings in your city" +
    " And You have " +material+" material to build your city";
    document.getElementById('cityGraphic').innerHTML+= "<img src='images/BuildingBlock1.png'>";
}
function buildTwo(){
    console.log("in the function buildTwo");
    buildings++;
    document.getElementById('city').innerHTML="You have " +buildings+" buildings in your city" +
    " And You have " +material+" material to build your city";
    document.getElementById('cityGraphic').innerHTML+= "<img src='images/BuildingBlock2.png'>";
}
function buildThree(){
    console.log("in the function buildThree");
    buildings++;
    document.getElementById('city').innerHTML="You have " +buildings+" buildings in your city" +
    " And You have " +material+" material to build your city";
    document.getElementById('cityGraphic').innerHTML+= "<img src='images/BuildingBlock3.png'>";
}
function prepare(){
    console.log("prepare");
    material++;
    document.getElementById('city').innerHTML="You have " +buildings+" buildings in your city" +
    " And You have " +material+" material to build your city";
    document.getElementById('cityGraphic').innerHTML+= "<img src='resources/FreeSample/Sidewalk_Chunk2.png'>";
}
//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building


//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building

