var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("mid");
var button1=document.querySelector(".right-button");

function setBackground()
{
	body.style.background="linear-gradient(to right, "+color1.value+","+color2.value+")";
	h3.textContent=body.style.background +";";
}

function randomRgbColor() 
{
    var r = Math.floor(Math.random()*256)+1;
    var g = Math.floor(Math.random()*256)+1;
    var b = Math.floor(Math.random()*256)+1;
    return [r,g,b];
}

function generateColor()
{
	var rgbValues=randomRgbColor();
	var rgbValues2=randomRgbColor();
	body.style.background="linear-gradient(to right, rgb("+rgbValues[0]+","+rgbValues[1]+","+rgbValues[2] +")"+",rgb("+rgbValues2[0]+","+rgbValues2[1]+","+rgbValues2[2] +")"+")";
	h3.textContent=body.style.background +";";

}

color1.addEventListener("input",setBackground);
color2.addEventListener("input",setBackground);

button1.addEventListener("click",generateColor);
