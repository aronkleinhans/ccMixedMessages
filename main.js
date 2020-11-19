const arrs = {
    adj : ["a beautiful", "a glorious", "an old", "a smelly", "a shiny", "a bald", "an evil", "a holy", "a sticky", "a new", "a fake", "a useless"],
    action : ["flying above", "jumpinging over", "burning", "smelling", "cleaning", "kissing", "hugging", "watching", "looking at"],
    noun : ["robot", "princess", "skeleton", "hypocrite", "priest", "goblin", "thief", "angel", "devil", "torch", "PC", "incense", "candle"],
    place : ["a park", "the street", "a room", "a forest", "the sky", "a cloud", "a swamp", "a prison", "the city", "a village", "the glorious outdoors"]
}
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
        return `${randomItem(obj.adj)} ${randomItem(obj.noun)} ${randomItem(obj.action)} ${randomItem(obj.place)} and ${randomItem(obj.action)} ${randomItem(obj.adj)} ${randomItem(obj.noun)}`;
    }
};
//log message in console.
console.log(randomMessage(arrs));
