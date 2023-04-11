
let ourObject={
    timeofDay:"morning",
    timeofSemester:"cheese",
    timeofYear:4
};

let ourdogs;
let dogsimg=document.getElementById("dogs");

function setup(){
    createCanvas(720,480);
}

function draw(){
    background("Plum");
}

function mousePressed(){
    ourdogs=loadJSON("https://api.thedogapi.com/v1/images/search",function(){
        dogsimg.src=ourdogs[0].url;
    });
}
//Website use: https://portal.thatapicompany.com/pages/dog-api
// Instead of using the cat API that was used as an example in class, I used the dog API instead.