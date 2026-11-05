function generateOutfit() {

let weather = document.getElementById("weather").value;
let occasion = document.getElementById("occasion").value;

let top = "";
let bottom = "";
let shoes = "";
let accessories = "";


if(weather === "Cold"){

top = "Warm sweater";
bottom = "Dark jeans";
shoes = "Boots";
accessories = "Scarf";

}

else if(weather === "Hot"){

top = "Light t-shirt";
bottom = "Shorts";
shoes = "Sneakers";
accessories = "Sunglasses";

}

else if(weather === "Rainy"){

top = "Rain jacket";
bottom = "Waterproof pants";
shoes = "Rain boots";
accessories = "Umbrella";

}

else{

top = "Casual shirt";
bottom = "Jeans";
shoes = "Comfort sneakers";
accessories = "Watch";

}


document.getElementById("top").innerText = "Top: " + top;
document.getElementById("bottom").innerText = "Bottom: " + bottom;
document.getElementById("shoes").innerText = "Shoes: " + shoes;
document.getElementById("accessories").innerText = "Accessories: " + accessories;

}