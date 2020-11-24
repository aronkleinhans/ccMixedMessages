const arrs = {
    adj : ["a beautiful", "a glorious", "an old", "a smelly", "a shiny", "a bald", "an evil", "a holy", "a sticky", "a new", "a fake", "a useless", "a curvy" , "a fluffy" , "an artistic"],
    action : ["flying above", "jumping over", "burning", "smelling", "cleaning", "kissing", "hugging", "watching", "looking at", "flinging", "slapping", "shaking", "pushing", "stepping on"],
    noun : ["robot", "princess", "skeleton", "hypocrite", "priest", "goblin", "thief", "angel", "devil", "torch", "PC", "incense", "candle", "cat", "dog", "MAXIMUS"],
    place : ["a park", "the street", "a room", "a forest", "the sky", "a cloud", "a swamp", "a prison", "the city", "a village", "the glorious outdoors", '"the plane of s*ck"', "a church", "the Earth"]
}
//get DOM elements
const out = document.getElementById("output");
const btn = document.getElementById("button");
//choose random item from provided array.
function randomItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
};
//create random messages in 3 different formats(format chosen randomly).
function randomMessage(obj){
    let placeOrNoun = Math.floor(Math.random() * 3);

    if (placeOrNoun === 0){
        return `${randomItem(obj.adj)} ${randomItem(obj.noun)} ${randomItem(obj.action)} ${randomItem(obj.place)}`; 
    }
    else if (placeOrNoun === 1){
        return `${randomItem(obj.adj)} ${randomItem(obj.noun)} ${randomItem(obj.action)} ${randomItem(obj.adj)} ${randomItem(obj.noun)}`;
    }
    else{
        return `${randomItem(obj.adj)} ${randomItem(obj.noun)} ${randomItem(obj.action)} ${randomItem(obj.place)} while ${randomItem(obj.action)} ${randomItem(obj.adj)} ${randomItem(obj.noun)}`;
    }
};
//capitalize first letter of result
function showResult() {
    let result = randomMessage(arrs);
    return result[0].toUpperCase() + result.substring(1);
}

btn.addEventListener("click", function() { out.innerHTML = showResult()});
