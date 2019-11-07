
var classTemp, classClone, ElementsTemp, ElementsClone

var championPath = __dirname.replace("public", "resources/champIcons")


const ROECOMPS = require('../data/roe-comps.json')//json file where info is stored

const champElements = ROECOMPS[0].elements // shows all {} origins

const champClass = ROECOMPS[1].class  // shows all {} classes


const champInfo = require('../data/champs.json')//json file where champion infor are stored

const champRanks = champInfo.champions// list of champions


classTemp = document.getElementsByTagName("template")[1] //template of class
classClone = document.importNode(classTemp.content, true) //cloning template

ElementsTemp = document.getElementsByTagName("template")[0] //template of elements
ElementsClone = document.importNode(ElementsTemp.content, true) //cloning template

displayComps(champClass, classClone, champRanks);

displayComps(champElements, ElementsClone, champRanks);

//document.getElementById("testmessage").innerHTML = champCost(champRanks, "LeBlanc")

//pass in list of origins and display on html
function displayComps(compList, template, champRanks){
    
    compList.forEach(function(comp){
        
        addHeader(comp, template)
        
        addImages(comp, comp.champions, template, champRanks)
        
        
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
function addImages(comp, compChamps, template, champRanks){
    
    var img = document.createElement('img')
    img.setAttribute('class', 'champIcon')
   
    img.style.borderColor = champColor(champCost(champRanks, compChamps[0]))

    img.src = championPath + "/" + compChamps[0] +".png"
    template.getElementById(comp.name).appendChild(img)
      
    if(compChamps.length == 1){
        return;
        
    }
    else{
    
        addImages(comp, compChamps.slice(1), template, champRanks)
            
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


//given a champ name, find champ cost
function champCost(champRanks, champName){
   
    var max = champRanks.length
    var min = 0
    var start = avg(max, min)
    

   while(true){
    
        var found = champRanks[start]
        if(found.name == champName){
            return found.cost
        }
        else{
            if(found.name < champName){
                min = start
                start = avg(start, max)
            }
            else if(found.name > champName){
                max = start
                start = avg(start, min)                
            }
        }
    }

}

function avg(beg, end){

    if(beg+1 ==end || beg-1 == end){
        return end
    }
    else{
        temp = beg + end
         
        if(temp % 2 == 0){
            return temp / 2
        }
        else{
            return (temp/2 + 0.5)
        }

    }
}

function champColor(cost){
    switch(cost){
        case 1:
            return "Gray"
        case 2:
            return "Green"
        case 3:
            return "Blue"
        case 4:
            return "Purple"
        case 5:
            return "Yellow"
        case 7:
            return "Red"
        default:
            return "Black"
    }
}

