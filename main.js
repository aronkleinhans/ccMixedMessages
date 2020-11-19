const adjArr = ["a beautiful", "a glorious", "an old", "a smelly", "a shiny", "a bald", "an evil", "a holy", "a sticky", "a new", "a fake", "a useless"];
const actionArr = ["flying above", "jumpinging over", "burning", "smelling", "cleaning", "kissing", "hugging", "watching", "looking at"];
const nounArr = ["robot", "princess", "skeleton", "hypocrite", "priest", "goblin", "thief", "angel", "devil", "torch", "PC", "incense", "candle"];
const placeArr = ["a park", "the street", "a room", "a forest", "the sky", "a cloud", "a swamp", "a prison", "the city", "a village", "the glorious outdoors"];

//choose random item from provided array.
function randomItem(arr){
    return arr[Math.floor(Math.random(1) * arr.length)];
};

//create random messages in 3 different formats(format chosen randomly).
function randomMessage(adj, action, noun, place){
    let placeOrNoun = Math.floor(Math.random(1) * 3);

    if (placeOrNoun === 0){
        return `${randomItem(adj)} ${randomItem(noun)} ${randomItem(action)} ${randomItem(place)}`; 
    }
    else if (placeOrNoun === 1){
        return `${randomItem(adj)} ${randomItem(noun)} ${randomItem(action)} ${randomItem(adj)} ${randomItem(noun)}`;
    }
    else{
        return `${randomItem(adj)} ${randomItem(noun)} and ${randomItem(adj)} ${randomItem(noun)}`;
    }
};
//log message in console.
console.log(randomMessage(adjArr, actionArr, nounArr, placeArr));