
var classTemp, classClone, ElementsTemp, ElementsClone

var championPath = __dirname.replace("public", "resources/champIcons")


const ROECOMPS = require('../data/roe-comps.json')//json file where info is stored

const champElements = ROECOMPS[0].elements // shows all {} origins

const champClass = ROECOMPS[1].class  // shows all {} classes



classTemp = document.getElementsByTagName("template")[1] //template of class
classClone = document.importNode(classTemp.content, true) //cloning template

ElementsTemp = document.getElementsByTagName("template")[0] //template of elements
ElementsClone = document.importNode(ElementsTemp.content, true) //cloning template

displayComps(champClass, classClone);

displayComps(champElements, ElementsClone);

//pass in list of origins and display on html
function displayComps(compList, template){
    
    compList.forEach(function(comp){
        
        addHeader(comp, template)
        
        addImages(comp, comp.champions, template)
        
        
        addDescript(comp, template)
       
        addTiers(comp, template)
        
    })
    
    document.body.appendChild(template)

    
}

function addHeader(comp, template){
    var header = document.createElement('h1')
    header.setAttribute('class', 'nameDisplay')
    header.innerHTML = comp.name
    template.getElementById(comp.name).appendChild(header)
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


