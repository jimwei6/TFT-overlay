
var classTemp, classClone, OriginsTemp, OriginsClone

var championPath = __dirname.replace("public", "resources/champIcons")

const comps = require('../data/comps.json') //json file where info is stored

const champOrigins = comps[0].origins // shows all {} origins
const  champClass = comps[1].class  // shows all {} classes



classTemp = document.getElementsByTagName("template")[1] //template of class
classClone = document.importNode(classTemp.content, true) //cloning template

OriginsTemp = document.getElementsByTagName("template")[0] //template of origins
OriginsClone = document.importNode(OriginsTemp.content, true) //cloning template

displayComps(champClass, classClone);

displayComps(champOrigins, OriginsClone);

//pass in list of origins and display on html
function displayComps(compList, template){
    
    compList.forEach(function(comp){
        
        addImages(comp, comp.champions, template)
        
        addDescript(comp, template)

        addTiers(comp, template)
        
    })
    
    document.body.appendChild(template)
    
}


// adds all champion icons for a single origin  assume originChamps list wont be empty
// takes in whole origin {} and origin.champions
function addImages(comp, compChamps, template){

    var img = document.createElement('img')
    img.setAttribute('class', 'champIcon')
    img.src = championPath + "/" + compChamps[0] +".png"
    template.getElementById(comp.name).appendChild(img)
    
    if(compChamps.length == 1){
        return;
    }
    else{
        
        addImages(comp, compChamps.slice(1), template)
       
    } 

}

//add description for a single origin given a origin
function addDescript(comp, template){
    if(comp.description != ""){
        var textClass = document.createElement('p')
        textClass.setAttribute("class", "compDescript")
        textClass.innerHTML = comp.description
        textClass.style.color="white"
        template.getElementById(comp.name).appendChild(textClass)
    }
   

}

function addTiers(comp, template){
    var tier = document.createElement('p')
    tier.setAttribute("class", "compDescript")
    var tierStr = comp.tiers
    tierStr = tierStr.bold()
    tier.innerHTML = tierStr
    tier.style.color="white"
    template.getElementById(comp.name).appendChild(tier)
}


