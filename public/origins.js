
const path = require('path')
var temp, clone

var championPath = __dirname.replace("public", "resources/champIcons")
//championPath = path.join(championPath, )

var ORDEROFORIGIN = ["Demon", "Glacial", "Noble", "Void", "Pirate", "Wild", "Yordle", "Dragon", "Hextech", "Exile", "Imperial", "Ninja", "Phantom", "Robot"]

var DEMON = ["Elise", "Varus", "Aatrox", "Evelynn", "Morgana", "Brand", "Swain"]
var DRAGON = ["Shyvana", "Aurelion_Sol", "Pantheon"]
var EXILE = ["Yasuo"]
var GLACIAl = ["Braum", "Lissandra", "Ashe", "Volibear", "Sejuani", "Anivia"]
var HEXTECH = ["Camille", "Jayce", "Vi", "Jinx"]
var IMPERIAL = ["Darius", "Katarina", "Draven", "Swain"]
var NINJA = ["Shen", "Zed", "Kennen", "Akali"]
var NOBLE = ["Fiora", "Garen", "Vayne", "Lucian", "Leona", "Kayle"]
var PHANTOM = ["Mordekaiser", "Kindred", "Karthus"]
var PIRATE = ["Graves", "Pyke", "Twisted_Fate", "Gangplank", "MissFortune"]
var ROBOT = ["Blitzcrank"]
var VOID = ["Kassadin", "Kha'Zix", "Rek'Sai", "ChoGath", "Kai'Sa"]
var WILD = ["Tristana", "Lulu", "Kennen", "Poppy", "Veigar", "Gnar"]
var YORDLE =["Nidalee", "Warwick", "Ahri", "Rengar", "Gnar"]


temp = document.getElementsByTagName("template")[0]
clone = document.importNode(temp.content, true)


    

for(var x = 0; x < ORDEROFORIGIN.length; x++){
    
    var origin

    switch(x){
        case 0:
            origin = DEMON
            break;
        case 1:
            origin = GLACIAl
            break;
        case 2:
            origin = NOBLE
            break;
        case 3:
            origin = VOID
            break;
        case 4:
            origin = PIRATE
            break;
        case 5:
            origin = WILD
            break;
        case 6:
            origin = YORDLE
            break;
        case 7:
            origin = DRAGON
            break;
        case 8:
            origin = HEXTECH
            break;
        case 9:
            origin = EXILE
            break;
        case 10:
            origin = IMPERIAL   
            break;  
        case 11:
            origin = NINJA    
            break;          
        case 12:        
            origin = PHANTOM
            break;
        case 13:
            origin = ROBOT
            break;
        default:
            break;
    }

    for(var i = 0; i < origin.length; i++)
    {
        
        var img = document.createElement('img')
        img.setAttribute('class', 'champIcon')
        img.src = championPath + "/" + origin[i] +".png"
        clone.getElementById(ORDEROFORIGIN[x]).appendChild(img)
        
    }
    

}

document.body.appendChild(clone)




// const path = require('path')
//         var temp = document.getElementsByTagName("template")[0]
//         var  clone = document.importNode(temp.content, true)
//         var img = document.createElement('img')
//         img.setAttribute('class', 'champIcon')
//         img.src = __dirname.replace("public", "resources/champIcons/Aatrox.png")
        
//         clone.getElementById("Demon").appendChild(img)
//          document.body.appendChild(clone)
