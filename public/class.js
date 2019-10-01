
var classTemp, classClone

var championPath = __dirname.replace("public", "resources/champIcons")

var CLASSORDER = [ "Elementalist", "Brawler", "Guardian", "Gunslinger", "Ranger", "Knight", "Shapeshifter", "Sorcerer", "Assassin", "Blademaster"]

var ELEMENTALIST = ["Lissandra", "Kennen", "Brand", "Anivia"]
var BRAWLER = ["Warwick", "Blitzcrank", "Rek'Sai", "Vi", "Volibear", "ChoGath"]
var GUNSLINGER = ["Graves", "Tristana", "Lucian", "Gangplank", "Jinx", "Missfortune"]
var GUARDIAN = ["Braum", "Leona", "Pantheon"]
var RANGER = ["Vayne", "Varus", "Ashe", "Kindred", "Kai'Sa"]
var KNIGHT = ["Darius", "Garen", "Mordekaiser", "Poppy", "Sejuani", "Kayle"]
var SHAPESHIFTER = ["Elise", "Nidalee", "Jayce", "Shyvana", "Gnar", "Swain"]
var SORCERER = ["Kassadin", "Ahri", "Lulu", "Twisted_Fate", "Morgana", "Veigar", "Aurelion_Sol", "Karthus"]
var ASSASSIN = ["Kha'Zix", "Pyke", "Zed", "Evelynn", "Katarina", "Rengar", "Akali", "Kai'Sa"]
var BLADEMASTER = ["Camille", "Fiora", "Shen", "Aatrox", "Gangplank", "Draven", "Yasuo"]


classTemp = document.getElementsByTagName("template")[1]
classClone = document.importNode(classTemp.content, true)


for(var x = 0; x < CLASSORDER.length; x++){
    
    var champClass

    switch(x){
        case 0:
            champClass = ELEMENTALIST
            break;
        case 1:
            champClass = BRAWLER
            break;
        case 2:
            champClass = GUNSLINGER
            break;
        case 3:
            champClass = GUARDIAN
            break;
        case 4:
            champClass = RANGER
            break;
        case 5:
            champClass = KNIGHT
            break;
        case 6:
            champClass = SHAPESHIFTER
            break;
        case 7:
            champClass = SORCERER
            break;
        case 8:
            champClass = ASSASSIN
            break;
        case 9:
            champClass = BLADEMASTER
            break;
        default:
            break;
    }

    for(var i = 0; i < champClass.length; i++)
    {
        
        var img = document.createElement('img')
        img.setAttribute('class', 'champIcon')
        img.src = championPath + "/" + champClass[i] +".png"
        classClone.getElementById(CLASSORDER[x]).appendChild(img)
        
    }
    var textClass = document.createElement('p')
    textClass.innerHTML =  "Testing descriptions for different classes and origins"
    textClass.style.color="white"
    classClone.getElementById(CLASSORDER[x]).appendChild(textClass)


}

document.body.appendChild(classClone)


